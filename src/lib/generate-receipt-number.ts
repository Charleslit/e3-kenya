export function generateReceiptNumber(): string {
  const prefix = "REC";
  const timestamp = Date.now();
  return `${prefix}-${timestamp}`;
}
