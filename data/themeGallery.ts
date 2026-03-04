export type ThemeGalleryItem = {
  id: string;
  theme: string; // must match folder name
  title: string;
  image: string;
  tags?: string[];
};

export const themeGallery: ThemeGalleryItem[] = [
  // 🕷 Spiderman
  {
    id: "spiderman-1",
    theme: "spiderman",
    title: "Spider Man Theme Cake",
    image: "/theme-cakes/spiderman/1.png",
    tags: ["marvel", "superhero", "kids"],
  },

  // 🧸 Cocomelon
  {
    id: "cocomelon-1",
    theme: "cocomelon",
    title: "Cocomelon Theme Cake",
    image: "/theme-cakes/cocomelon/1.png",
    tags: ["cartoon", "kids", "birthday"],
  },

  // 🦁 Jungle (4 Designs)
  {
    id: "jungle-1",
    theme: "jungle",
    title: "Jungle Safari Cake Design 1",
    image: "/theme-cakes/jungle/1.png",
    tags: ["animals", "safari", "kids"],
  },
  {
    id: "jungle-2",
    theme: "jungle",
    title: "Jungle Safari Cake Design 2",
    image: "/theme-cakes/jungle/2.png",
    tags: ["lion", "tiger", "birthday"],
  },
  {
    id: "jungle-3",
    theme: "jungle",
    title: "Jungle Safari Cake Design 3",
    image: "/theme-cakes/jungle/3.png",
    tags: ["forest", "wildlife"],
  },
  {
    id: "jungle-4",
    theme: "jungle",
    title: "Jungle Safari Cake Design 4",
    image: "/theme-cakes/jungle/4.png",
    tags: ["kids", "animals"],
  },

  // 🎵 Music (2 Designs)
  {
    id: "music-1",
    theme: "music",
    title: "Music Theme Cake Design 1",
    image: "/theme-cakes/music/1.png",
    tags: ["guitar", "music", "birthday"],
  },
  {
    id: "music-2",
    theme: "music",
    title: "Music Theme Cake Design 2",
    image: "/theme-cakes/music/2.png",
    tags: ["musical", "celebration"],
  },

  // 🐟 Aqua (2 Designs)
  {
    id: "aqua-1",
    theme: "aqua",
    title: "Aqua Theme Cake Design 1",
    image: "/theme-cakes/aqua/1.png",
    tags: ["ocean", "blue", "kids"],
  },
  {
    id: "aqua-2",
    theme: "aqua",
    title: "Aqua Theme Cake Design 2",
    image: "/theme-cakes/aqua/2.png",
    tags: ["sea", "birthday"],
  },

  // 👶 Boss Baby
  {
    id: "bossbaby-1",
    theme: "bossbaby",
    title: "Boss Baby Theme Cake",
    image: "/theme-cakes/bossbaby/1.png",
    tags: ["cartoon", "kids"],
  },

  // 🚗 Car
  {
    id: "car-1",
    theme: "car",
    title: "Car Theme Cake",
    image: "/theme-cakes/car/1.png",
    tags: ["racing", "birthday", "kids"],
  },

  // 🍥 Naruto
  {
    id: "naruto-1",
    theme: "naruto",
    title: "Naruto Anime Theme Cake",
    image: "/theme-cakes/naruto/1.png",
    tags: ["anime", "kids", "birthday"],
  },

  // 🦄 Unicorn (add more if you have more images)
  {
    id: "unicorn-1",
    theme: "unicorn",
    title: "Unicorn Theme Cake",
    image: "/theme-cakes/unicorn/1.png",
    tags: ["fantasy", "girls", "birthday"],
  },
];