/** Joins class names; omits falsy entries. */
export function cx(...parts: Array<string | undefined | false>): string {
  return parts.filter(Boolean).join(" ");
}
