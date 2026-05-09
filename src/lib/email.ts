export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && EMAIL_REGEX.test(value.trim());
}
