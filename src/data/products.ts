import { Product } from "../types";

export const products: Product[] = [
  {
    _id: "1",
    name: "Industrial Air Cooler",
    description: "Heavy-duty industrial air cooler perfect for large spaces",
    category: "Industrial",
    images: [
    "/assets/products/industrial-air-cooler/front.jpg",
      "/assets/products/industrial-air-cooler/back.jpg",
      "/assets/products/industrial-air-cooler/front-1.jpg",
    ],
    availability: "available",
    buyPrice: 450000,
    features: ["Heavy-duty", "Portable design"],
    locations: ["Pune"],
    specifications: {
      "Cooling Capacity": "5000 CMH",
      Power: "220V / 50Hz",
      "Tank Capacity": "100L",
    },
  },



  {
    _id: "2",
    name: "Silver Mist Fan",
    description: "Silver mist fan with 41L water capacity",
    category: "Mist Fans",
    images: [
      "/assets/products/silver-mist-fan/silver-mist-fan-wall-bracket.jpg",
      "/assets/products/silver-mist-fan/silver-mist-fan-rear-black.jpg",
      "/assets/products/silver-mist-fan/silver-mist-fan-front-grey.jpg"
    ],
    availability: "available",
    buyPrice: 12000,
    features: ["41L water capacity", "Fine mist spray"],
    locations: ["Pune"],
    specifications: {
      Capacity: "41L",
      Color: "Silver",
    },
  },

  {
    _id: "3",
    name: "Electric Heater",
    description: "Plug n Play electric heater",
    category: "Heaters",
    images: [
      "/assets/products/electric-heater/electric-heater-round-base.jpg",
      "/assets/products/electric-heater/electric-heater-vertical-rod.jpg",
    ],
    availability: "available",
    buyPrice: 8000,
    features: ["Compact", "Fast heating"],
    locations: ["Pune"],
    specifications: {
      Type: "Electric",
      Power: "1500W",
    },
  },

  {
    _id: "4",
    name: "Black Mist Fan",
    description: "Black mist fan with 41L tank",
    category: "Mist Fans",
    images: [
      "/assets/products/black-mist-fan/black-mist-fan-front.jpg",
      "/assets/products/black-mist-fan/black-mist-fan-side.jpg",
      "/assets/products/black-mist-fan/black-mist-fan-front-black.jpg",
      "/assets/products/black-mist-fan/black-mist-fan-front-medium.jpg",
    ],
    availability: "available",
    buyPrice: 12000,
    features: ["41L tank", "Adjustable mist"],
    locations: ["Pune"],
    specifications: {
      Capacity: "41L",
      Color: "Black",
    },
  },
 {
    _id: "5",
    name: "Pedestal Fan 26 Inch",
    description: "26-inch pedestal fan with oscillation",
    category: "Fans",
    images: [
      "/assets/products/pedestal-fan/pedestal-fan-front.jpg",
      "/assets/products/pedestal-fan/pedestal-fan-back.jpg",
      "/assets/products/pedestal-fan/pedestal-fan-front-small.jpg",
      "/assets/products/pedestal-fan/pedestal-fan-front-white-large.jpg",
    ],
    availability: "available",
    buyPrice: 15000,
    features: ["Oscillating", "Portable"],
    locations: ["Pune"],
    specifications: {
      Size: "26 Inch",
      Type: "Pedestal Fan",
    },
  },

  {
    _id: "6",
    name: "White Mist Fan",
    description: "White mist fan with 41L water capacity",
    category: "Mist Fans",
    images: [
      "/assets/products/white-mist-fan/front.png",
      "/assets/products/white-mist-fan/back.png",
    ],
    availability: "available",
    buyPrice: 12000,
    features: ["41L tank", "Portable"],
    locations: ["Pune"],
    specifications: {
      Capacity: "41L",
      Color: "White",
    },
  },

  {
    _id: "7",
    name: "Air Cooler 75 Ltrs",
    description: "75L air cooler with silent operation",
    category: "Coolers",
    images: [
      "/assets/products/air-cooler-75l/air-cooler-75l-front.png",
      "/assets/products/air-cooler-75l/air-cooler-75l-side.png",
    ],
    availability: "available",
    buyPrice: 18000,
    features: ["Silent operation", "Portable"],
    locations: ["Pune"],
    specifications: {
      Capacity: "75L",
    },
  },

  {
    _id: "8",
    name: "Silent Air Cooler 75 Ltrs",
    description: "Silent air cooler for offices",
    category: "Coolers",
    images: [
      "/assets/products/silent-air-cooler-75l/front.jpg",
      "/assets/products/silent-air-cooler-75l/side.jpg",
      "/assets/products/silent-air-cooler-75l/back.jpg",
    ],
    availability: "available",
    buyPrice: 20000,
    features: ["Silent", "Easy mobility"],
    locations: ["Pune"],
    specifications: {
      Capacity: "75L",
    },
  },

  {
    _id: "9",
    name: "Air Cooler 110 Ltrs",
    description: "110L air cooler for large areas",
    category: "Coolers",
    images: [
      "/assets/products/air-cooler-110l/air-cooler-110l-front.jpg",
      "/assets/products/air-cooler-110l/air-cooler-110l-back.jpg",
      "/assets/products/air-cooler-110l/air-cooler-110l-side.jpg",
    ],
    availability: "available",
    buyPrice: 25000,
    features: ["110L tank", "High airflow"],
    locations: ["Pune"],
    specifications: {
      Capacity: "110L",
    },
  },

  {
    _id: "10",
    name: "Portable AC 1 Ton",
    description: "1 Ton portable air conditioner",
    category: "Portable ACs",
    images: [
      "/assets/products/portable-ac-1ton/portable-ac-digital-display.jpg",
      "/assets/products/portable-ac-1ton/portable-ac-digital-display-stand.jpg",
    ],
    availability: "available",
    buyPrice: 40000,
    features: ["1 Ton", "Energy efficient"],
    locations: ["Pune"],
    specifications: {
      "Cooling Capacity": "1 Ton",
    },
  },

  {
    _id: "11",
    name: "Portable AC 1.5 Ton",
    description: "1.5 Ton portable AC",
    category: "Portable ACs",
    images: [
      "/assets/products/portable-ac-1.5ton/portable-ac-digital-display.jpg",
      "/assets/products/portable-ac-1.5ton/portable-ac-rear-vent.jpg",
      "/assets/products/portable-ac-1.5ton/portable-ac-side.jpg",
      "/assets/products/portable-ac-1.5ton/portable-ac-unit-front.jpg",
      "/assets/products/portable-ac-1.5ton/portable-ac-white.jpg",
    ],
    availability: "available",
    buyPrice: 45000,
    features: ["1.5 Ton", "High efficiency"],
    locations: ["Pune"],
    specifications: {
      "Cooling Capacity": "1.5 Ton",
    },
  },
];
