export const products = [
    {
        id: "1",
        name: "Signature Truffle Delight",
        price: 1200,
        category: "Chocolate",
        tags: ["Bestseller", "Premium"],
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "2",
        name: "Golden Anniversary Velvet",
        price: 1800,
        category: "Anniversary",
        tags: ["Customizable"],
        image: "https://images.unsplash.com/photo-1557925923-33b251dc3296?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "3",
        name: "Classic Forest Birthday",
        price: 950,
        category: "Birthday",
        tags: ["Kids Favorite"],
        image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "4",
        name: "Hazelnut Mocha Core",
        price: 1500,
        category: "Chocolate",
        tags: ["Premium", "Nuts"],
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "5",
        name: "Assorted Cupcake Box (6 PCS)",
        price: 600,
        category: "Cupcakes",
        tags: ["Gift Box"],
        image: "https://images.unsplash.com/photo-1550617931-e17a783688cd?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "6",
        name: "Dark Chocolate Raspberry",
        price: 2200,
        category: "Chocolate",
        tags: ["Vegan Available"],
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop"
    }
];

export const generateWhatsAppLink = (cakeName: string) => {
    const phone = "919941186416";
    const message = `Hi The Chocolate Cake Factory, I want to order ${cakeName}.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
