// export const products = [
//     {
//         id: "1",
//         name: "Signature Truffle Delight",
//         price: 1200,
//         category: "Chocolate",
//         tags: ["Bestseller", "Premium"],
//         image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//         id: "2",
//         name: "Golden Anniversary Velvet",
//         price: 1800,
//         category: "Anniversary",
//         tags: ["Customizable"],
//         image: "https://images.unsplash.com/photo-1557925923-33b251dc3296?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//         id: "3",
//         name: "Classic Forest Birthday",
//         price: 950,
//         category: "Birthday",
//         tags: ["Kids Favorite"],
//         image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//         id: "4",
//         name: "Hazelnut Mocha Core",
//         price: 1500,
//         category: "Chocolate",
//         tags: ["Premium", "Nuts"],
//         image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//         id: "5",
//         name: "Assorted Cupcake Box (6 PCS)",
//         price: 600,
//         category: "Cupcakes",
//         tags: ["Gift Box"],
//         image: "https://images.unsplash.com/photo-1550617931-e17a783688cd?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//         id: "6",
//         name: "Dark Chocolate Raspberry",
//         price: 2200,
//         category: "Chocolate",
//         tags: ["Vegan Available"],
//         image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop"
//     }
// ];

// export const generateWhatsAppLink = (cakeName: string) => {
//     const phone = "919941186416";
//     const message = `Hi The Chocolate Cake Factory, I want to order ${cakeName}.`;
//     return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
// };
// export type Product = {
//   id: string;
//   name: string;
//   price: number;
//   category: string;
//   tags: string[];
//   image: string;
// };

// export const products: Product[] = [
//   {
//     id: "1",
//     name: "Signature Truffle Delight",
//     price: 1200,
//     category: "Chocolate",
//     tags: ["Bestseller", "Premium"],
//     image:
//       "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: "2",
//     name: "Golden Anniversary Velvet",
//     price: 1800,
//     category: "Anniversary",
//     tags: ["Customizable"],
//     image:
//       "https://images.unsplash.com/photo-1557925923-33b251dc3296?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: "3",
//     name: "Classic Forest Birthday",
//     price: 950,
//     category: "Birthday",
//     tags: ["Kids Favorite"],
//     image:
//       "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: "4",
//     name: "Hazelnut Mocha Core",
//     price: 1500,
//     category: "Chocolate",
//     tags: ["Premium", "Nuts"],
//     image:
//       "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: "5",
//     name: "Assorted Cupcake Box (6 PCS)",
//     price: 600,
//     category: "Cupcakes",
//     tags: ["Gift Box"],
//     image:
//       "https://images.unsplash.com/photo-1550617931-e17a783688cd?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: "6",
//     name: "Dark Chocolate Raspberry",
//     price: 2200,
//     category: "Chocolate",
//     tags: ["Vegan Available"],
//     image:
//       "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop",
//   },
// ];

// export const generateWhatsAppLink = (cakeName: string) => {
//   // Your WhatsApp number should be in "91xxxxxxxxxx" format (no +)
//   const phone = "919884918114"; // ✅ from your project info: 98849 18114
//   const message = `Hi The Chocolate Cake Factory, I want to order ${cakeName}.`;
//   return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
// };
export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  tags: string[];
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Signature Truffle Delight",
    price: 1200,
    category: "Chocolate",
    tags: ["Bestseller", "Premium"],
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Golden Anniversary Velvet",
    price: 1800,
    category: "Anniversary",
    tags: ["Customizable"],
    image:
      "https://images.unsplash.com/photo-1557925923-33b251dc3296?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Classic Forest Birthday",
    price: 950,
    category: "Birthday",
    tags: ["Kids Favorite"],
    image:
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Hazelnut Mocha Core",
    price: 1500,
    category: "Chocolate",
    tags: ["Premium", "Nuts"],
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Assorted Cupcake Box (6 PCS)",
    price: 600,
    category: "Cupcakes",
    tags: ["Gift Box"],
    image:
      "https://images.unsplash.com/photo-1550617931-e17a783688cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Dark Chocolate Raspberry",
    price: 2200,
    category: "Chocolate",
    tags: ["Vegan Available"],
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop",
  },

  /* ---------- Birthday Cakes ---------- */

  {
    id: "7",
    name: "Rainbow Sprinkle Birthday Cake",
    price: 1100,
    category: "Birthday",
    tags: ["Colorful", "Kids Favorite"],
    image:
      "https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Chocolate Drip Birthday Cake",
    price: 1350,
    category: "Birthday",
    tags: ["Chocolate", "Bestseller"],
    image:
      "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "9",
    name: "Butterscotch Birthday Delight",
    price: 1250,
    category: "Birthday",
    tags: ["Creamy", "Popular"],
    image:
      "https://images.unsplash.com/photo-1614707267537-2f5c1d7d49d8?q=80&w=800&auto=format&fit=crop",
  },

  /* ---------- Anniversary Cakes ---------- */

  {
    id: "10",
    name: "Red Velvet Anniversary Cake",
    price: 2000,
    category: "Anniversary",
    tags: ["Romantic", "Premium"],
    image:
      "https://images.unsplash.com/photo-1612197527266-3d6c55e1f08a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "11",
    name: "Heart Shape Anniversary Cake",
    price: 2100,
    category: "Anniversary",
    tags: ["Romantic", "Designer"],
    image:
      "https://images.unsplash.com/photo-1603079840862-59a0d3c8c7db?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "12",
    name: "Classic Black Forest Anniversary",
    price: 1700,
    category: "Anniversary",
    tags: ["Classic", "Customizable"],
    image:
      "https://images.unsplash.com/photo-1618426703623-c1b33580396f?q=80&w=800&auto=format&fit=crop",
  },
];

export const generateWhatsAppLink = (cakeName: string) => {
  const phone = "919884918114"; // WhatsApp number
  const message = `Hi The Chocolate Cake Factory, I want to order ${cakeName}.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};