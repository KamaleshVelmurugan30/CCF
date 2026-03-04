import { WHATSAPP_NUMBER } from "@/data/config";

type Branch = "Ambattur" | "Kallikuppam";

type WhatsAppArgs = {
  cakeName?: string;
  price?: number | string;
  branch?: Branch;
  message?: string;
};

export function buildWhatsAppMessage({
  cakeName,
  price,
  branch,
  message,
}: WhatsAppArgs) {
  const lines: string[] = [];

  lines.push("Hi The Chocolate Cake Factory,");
  lines.push("I’d like to place an order ✅");

  if (cakeName) lines.push(`🍰 Cake: ${cakeName}`);
  if (price !== undefined && price !== null && price !== "")
    lines.push(`💰 Price: ₹${price}`);

  if (branch) lines.push(`📍 Preferred Branch: ${branch}`);

  if (message) lines.push(`📝 Note: ${message}`);

  lines.push("");
  lines.push("Please confirm availability and next steps. Thank you!");

  return lines.join("\n");
}

export function buildWhatsAppLink(args: WhatsAppArgs) {
  const text = encodeURIComponent(buildWhatsAppMessage(args));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}