export type CakeItem = {
  id: string;
  name: string;
  category: string;
  tags?: string[];
  image: string;
};

function makeRange(count: number) {
  return Array.from({ length: count }, (_, i) => i + 1);
}

export const cakeGallery: CakeItem[] = [
  // Birthday: /public/cakes/birthday/1.png ... 12.png
  ...makeRange(13).map((n) => ({
    id: `birthday-${n}`,
    name: `Birthday Cake Design ${n}`,
    category: "Birthday",
    tags: ["custom"],
    image: `/cakes/birthday/${n}.png`,
  })),

  // Anniversary: /public/cakes/anniversary/1.png
  ...makeRange(1).map((n) => ({
    id: `anniversary-${n}`,
    name: `Anniversary Cake Design ${n}`,
    category: "Anniversary",
    tags: ["romantic", "custom"],
    image: `/cakes/anniversary/${n}.png`,
  })),

  // Wedding: /public/cakes/wedding/1.png ... 3.png
  ...makeRange(3).map((n) => ({
    id: `wedding-${n}`,
    name: `Wedding Cake Design ${n}`,
    category: "Wedding",
    tags: ["premium", "custom"],
    image: `/cakes/wedding/${n}.png`,
  })),
];

export const generateCakeWhatsAppLink = (cakeName: string) => {
  const phone = "919884918114";

  const message = `Hi The Chocolate Cake Factory,

I would like to enquire about this cake:

🎂 Cake Design: ${cakeName}

Please share size options and pricing.

Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};