// export type ThemeGalleryItem = {
//   id: string;
//   theme: string; // must match folder name
//   title: string;
//   image: string;
//   tags?: string[];
// };

// export const themeGallery: ThemeGalleryItem[] = [
//   // 🕷 Spiderman
//   {
//     id: "spiderman-1",
//     theme: "spiderman",
//     title: "Spider Man Theme Cake",
//     image: "/theme-cakes/spiderman/1.png",
//     tags: ["marvel", "superhero", "kids"],
//   },

//   // 🧸 Cocomelon
//   {
//     id: "cocomelon-1",
//     theme: "cocomelon",
//     title: "Cocomelon Theme Cake",
//     image: "/theme-cakes/cocomelon/1.png",
//     tags: ["cartoon", "kids", "birthday"],
//   },

//   // 🦁 Jungle (4 Designs)
//   {
//     id: "jungle-1",
//     theme: "jungle",
//     title: "Jungle Safari Cake Design 1",
//     image: "/theme-cakes/jungle/1.png",
//     tags: ["animals", "safari", "kids"],
//   },
//   {
//     id: "jungle-2",
//     theme: "jungle",
//     title: "Jungle Safari Cake Design 2",
//     image: "/theme-cakes/jungle/2.png",
//     tags: ["lion", "tiger", "birthday"],
//   },
//   {
//     id: "jungle-3",
//     theme: "jungle",
//     title: "Jungle Safari Cake Design 3",
//     image: "/theme-cakes/jungle/3.png",
//     tags: ["forest", "wildlife"],
//   },
//   {
//     id: "jungle-4",
//     theme: "jungle",
//     title: "Jungle Safari Cake Design 4",
//     image: "/theme-cakes/jungle/4.png",
//     tags: ["kids", "animals"],
//   },

//   // 🎵 Music (2 Designs)
//   {
//     id: "music-1",
//     theme: "music",
//     title: "Music Theme Cake Design 1",
//     image: "/theme-cakes/music/1.png",
//     tags: ["guitar", "music", "birthday"],
//   },
//   {
//     id: "music-2",
//     theme: "music",
//     title: "Music Theme Cake Design 2",
//     image: "/theme-cakes/music/2.png",
//     tags: ["musical", "celebration"],
//   },

//   // 🐟 Aqua (2 Designs)
//   {
//     id: "aqua-1",
//     theme: "aqua",
//     title: "Aqua Theme Cake Design 1",
//     image: "/theme-cakes/aqua/1.png",
//     tags: ["ocean", "blue", "kids"],
//   },
//   {
//     id: "aqua-2",
//     theme: "aqua",
//     title: "Aqua Theme Cake Design 2",
//     image: "/theme-cakes/aqua/2.png",
//     tags: ["sea", "birthday"],
//   },

//   // 👶 Boss Baby
//   {
//     id: "bossbaby-1",
//     theme: "bossbaby",
//     title: "Boss Baby Theme Cake",
//     image: "/theme-cakes/bossbaby/1.png",
//     tags: ["cartoon", "kids"],
//   },

//   // 🚗 Car
//   {
//     id: "car-1",
//     theme: "car",
//     title: "Car Theme Cake",
//     image: "/theme-cakes/car/1.png",
//     tags: ["racing", "birthday", "kids"],
//   },

//   // 🍥 Naruto
//   {
//     id: "naruto-1",
//     theme: "naruto",
//     title: "Naruto Anime Theme Cake",
//     image: "/theme-cakes/naruto/1.png",
//     tags: ["anime", "kids", "birthday"],
//   },


//   // 🦄 Unicorn (add more if you have more images)
//   {
//     id: "unicorn-1",
//     theme: "unicorn",
//     title: "Unicorn Theme Cake",
//     image: "/theme-cakes/unicorn/1.png",
//     tags: ["fantasy", "girls", "birthday"],
//   },

// ];
// data/themeGallery.ts

export type ThemeGalleryItem = {
  id: string;
  theme: string; // must match folder name in /public/theme-cakes/<theme>
  title: string;
  image: string;
  tags?: string[];
};

function makeRange(count: number) {
  return Array.from({ length: count }, (_, i) => i + 1);
}

/**
 * Update ONLY the counts here when you add new images.
 * Example: if you add /public/theme-cakes/jungle/5.png, change jungle: 4 -> 5
 */
const THEME_IMAGE_COUNTS: Record<
  string,
  { count: number; tags?: string[]; titlePrefix?: string }
> = {
  aqua: { count: 2, tags: ["ocean", "kids"], titlePrefix: "Aqua Theme Cake" },
  bossbaby: { count: 1, tags: ["cartoon", "kids"], titlePrefix: "Boss Baby Theme Cake" },
  car: { count: 1, tags: ["racing", "kids"], titlePrefix: "Car Theme Cake" },
  cocomelon: { count: 1, tags: ["cartoon", "kids"], titlePrefix: "Cocomelon Theme Cake" },
  dora: { count: 1, tags: ["cartoon", "kids"], titlePrefix: "Dora Theme Cake" },
  jungle: { count: 4, tags: ["animals", "kids"], titlePrefix: "Jungle Theme Cake" },
teddy: { count: 1, tags: ["bear", "kids", "birthday"], titlePrefix: "Teddy Theme Cake" },
  music: { count: 2, tags: ["music", "celebration"], titlePrefix: "Music Theme Cake" },
  naruto: { count: 1, tags: ["anime", "birthday"], titlePrefix: "Naruto Theme Cake" },
  spiderman: { count: 1, tags: ["marvel", "superhero", "kids"], titlePrefix: "Spiderman Theme Cake" },
  unicorn: { count: 1, tags: ["fantasy", "birthday"], titlePrefix: "Unicorn Theme Cake" },
};

export const themeGallery: ThemeGalleryItem[] = Object.entries(THEME_IMAGE_COUNTS).flatMap(
  ([theme, meta]) => {
    const prefix = meta.titlePrefix ?? `${theme} Theme Cake`;
    return makeRange(meta.count).map((n) => ({
      id: `${theme}-${n}`,
      theme,
      title: meta.count === 1 ? prefix : `${prefix} Design ${n}`,
      image: `/theme-cakes/${theme}/${n}.png`,
      tags: meta.tags ?? ["custom"],
    }));
  }
);

export const generateThemeWhatsAppLink = (themeTitle: string) => {
  const phone = "919884918114";

//   const message = `Hi The Chocolate Cake Factory,

// I would like to enquire about this theme cake:

// 🍰 Theme Cake: ${themeTitle}

// Please share kgs options and pricing.

// Thank you!`;
const message = `Hi The Chocolate Cake Factory,

I would like to enquire about this cake design:

🎂 Cake Design: ${themeTitle}

Could you please share the details for this design including:

• Available tier options (1 Tier / 2 Tier / 3 Tier / 4 Tier or more)
• Weight options in kgs
• Price for each option

Also please let me know:
• Available flavours
• Customization options
• Delivery / pickup availability

Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};