import { NextResponse } from "next/server";

const WEBHOOK = process.env.DISCORD_WEBHOOK_URL ?? "";

function clean(v: unknown, max = 500): string {
  return String(v ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "BAD_REQUEST" }, { status: 400 });
  }

  const b = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;
  const name = clean(b.name, 120);
  const contact = clean(b.contact, 160);
  const rank = clean(b.rank, 40);
  const coach = clean(b.coach, 40);
  const message = clean(b.message, 1000);

  if (!name || contact.length < 3) {
    return NextResponse.json({ ok: false, error: "INVALID" }, { status: 400 });
  }

  if (!WEBHOOK) {
    console.warn("[contact] DISCORD_WEBHOOK_URL not set — skipping send for", name, contact);
    return NextResponse.json({ ok: true, dev: true });
  }

  const fields = [
    { name: "Contacto", value: contact, inline: true },
    { name: "Rango", value: rank || "—", inline: true },
    { name: "Coach", value: coach || "Cualquiera", inline: true },
  ];
  if (message) fields.push({ name: "Mensaje", value: message, inline: false });

  let res: Response;
  try {
    res = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Zero2Hero · Reservas",
        embeds: [
          {
            title: `Nueva reserva de clase — ${name}`,
            color: 0xff4655,
            fields,
          },
        ],
      }),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "SEND_FAILED" }, { status: 502 });
  }

  if (!res.ok) {
    console.error("[contact] discord webhook error", res.status);
    return NextResponse.json({ ok: false, error: "SEND_FAILED" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
