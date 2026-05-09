import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidEmail } from "@/lib/email";

const FROM = process.env.RESEND_FROM ?? "Gio <onboarding@resend.dev>";
const PDF_URL = process.env.LEAD_PDF_URL ?? "";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "BAD_REQUEST" }, { status: 400 });
  }

  const email = typeof body === "object" && body !== null && "email" in body
    ? String((body as { email: unknown }).email ?? "").trim().toLowerCase()
    : "";

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "INVALID_EMAIL" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[lead] RESEND_API_KEY not set — skipping send for", email);
    return NextResponse.json({ ok: true, dev: true });
  }

  const resend = new Resend(apiKey);
  const downloadLine = PDF_URL
    ? `<p style="margin:24px 0 0;"><a href="${PDF_URL}" style="background:#ff4655;color:#fff;padding:14px 22px;font-family:'JetBrains Mono',monospace;font-size:0.74rem;font-weight:500;text-transform:uppercase;letter-spacing:0.22em;text-decoration:none;display:inline-block;">Descargar PDF →</a></p>`
    : `<p style="margin:24px 0 0;color:#9c958a;">El PDF estará disponible en breve. Te llegará un correo con el enlace.</p>`;

  const result = await resend.emails.send({
    from: FROM,
    to: email,
    subject: "Smokes y flashes de un Radiant — GIO",
    html: `
      <div style="background:#050505;color:#ece4d8;font-family:'DM Sans',Arial,sans-serif;padding:40px;max-width:560px;margin:0 auto;">
        <div style="font-family:'Tomorrow',sans-serif;font-weight:800;font-size:1.4rem;letter-spacing:0.32em;color:#ece4d8;">GIO<span style="color:#ff4655;font-style:italic;letter-spacing:-0.02em;padding-left:4px;">·VAL</span></div>
        <h1 style="font-family:'Tomorrow',sans-serif;font-weight:300;font-size:2rem;letter-spacing:-0.04em;line-height:1.05;margin:32px 0 16px;">Listo. Aquí va tu guía.</h1>
        <p style="color:#9c958a;line-height:1.55;margin:0 0 16px;">PDF de 28 páginas con lineups exactos, timings y por qué funcionan en LATAM. Una página por mapa.</p>
        ${downloadLine}
        <p style="margin:32px 0 0;color:#5e564d;font-family:'JetBrains Mono',monospace;font-size:0.7rem;letter-spacing:0.22em;text-transform:uppercase;">Si quieres reservar diagnóstico 1v1, responde este correo.</p>
      </div>
    `,
  });

  if (result.error) {
    console.error("[lead] resend error", result.error);
    return NextResponse.json({ ok: false, error: "SEND_FAILED" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
