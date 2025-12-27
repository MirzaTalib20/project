import { Product } from "../types";

export const products: Product[] = [
  {
    _id: "1",
    name: "Industrial Air Cooler",
    description: "Heavy-duty industrial air cooler perfect for large spaces",
    category: "Industrial",
    images: [
      "https://i.pinimg.com/736x/bd/01/15/bd011539328d1ca0c69d10567bc06ebf.jpg",
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
    name: "Industrial Mist Fan",
    description:
      "Heavy-duty industrial mist fan perfect for large outdoor events",
    category: "Mist Fans",
    images: ["https://alokagencies.com/cdn/shop/products/IMG-0171_1_2.png"],
    availability: "available",
    
    buyPrice: 35000,
    features: ["High power", "Outdoor use"],
    locations: ["Pune"],
    specifications: {
      Power: "750W",
      Coverage: "200 sq ft",
      "Tank Capacity": "50L",
      Height: "180cm",
      Weight: "45kg",
    },
  },
  {
    _id: "3",
    name: "Pedestal Fan 26 Inch",
    description:
      "26-inch pedestal fan with 90° oscillation, ideal for homes and small events.",
    category: "Fans",
    images: ["https://www.rentooze.in/proimg/PEDESTIAL FAN - 2.png"],
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
    _id: "4",
    name: "Silver Mist Fan",
    description:
      "Silver mist fan with 41L water capacity for efficient cooling at small to medium events.",
    category: "Mist Fans",
    images: ["https://www.rentooze.in/proimg/MIST FAN SILVER - 6.png"],
    availability: "available",
   
    buyPrice: 12000,
    features: ["41L water capacity", "Fine mist spray", "Portable design"],
    locations: ["Pune"],
    specifications: {
      Capacity: "41L",
      Color: "Silver",
    },
  },
  {
    _id: "5",
    name: "Electric Heater",
    description:
      "Plug n Play electric heater, ideal for personal and small space heating.",
    category: "Heaters",
    images: ["https://www.rentooze.in/proimg/Heater - 2.png"],
    availability: "available",
    
    buyPrice: 8000,
    features: ["Easy plug-and-play operation", "Compact design", "Fast heating"],
    locations: ["Pune"],
    specifications: {
      Type: "Electric",
      Power: "1500W",
    },
  },
  {
    _id: "6",
    name: "Black Mist Fan",
    description:
      "Black mist fan with 41L water tank for effective outdoor cooling.",
    category: "Mist Fans",
    images: ["https://www.rentooze.in/proimg/MIST FAN BLACK - 1.png"],
    availability: "available",
    
    buyPrice: 12000,
    features: ["41L tank", "Adjustable mist", "Portable design"],
    locations: ["Pune"],
    specifications: {
      Capacity: "41L",
      Color: "Black",
    },
  },
  {
    _id: "7",
    name: "White Mist Fan",
    description:
      "White mist fan with 41L water capacity, perfect for small gatherings and patios.",
    category: "Mist Fans",
    images: ["https://www.rentooze.in/proimg/whitemistfan.jpeg"],
    availability: "available",
   
    buyPrice: 12000,
    features: ["41L tank", "Portable design", "Fine mist spray"],
    locations: ["Pune"],
    specifications: {
      Capacity: "41L",
      Color: "White",
    },
  },
  {
    _id: "8",
    name: "Air Cooler 75 Ltrs",
    description:
      "75L air cooler with silent operation for medium indoor and outdoor areas.",
    category: "Coolers",
    images: ["https://www.rentooze.in/proimg/COOLER 90 LTR - 1.png"],
    availability: "available",
  
    buyPrice: 18000,
    features: ["75L water tank", "Silent operation", "Portable design"],
    locations: ["Pune"],
    specifications: {
      Capacity: "75L",
    },
  },
  {
    _id: "9",
    name: "Silent Air Cooler 75 Ltrs",
    description:
      "Silent 75L air cooler suitable for quiet environments like offices or small events.",
    category: "Coolers",
    images: ["https://www.rentooze.in/proimg/aircooler752.png"],
    availability: "available",
   
    buyPrice: 20000,
    features: ["Silent operation", "75L tank", "Easy mobility"],
    locations: ["Pune"],
    specifications: {
      Capacity: "75L",
    },
  },
  {
    _id: "10",
    name: "Air Cooler 110 Ltrs",
    description: "110L air cooler for large rooms and event spaces.",
    category: "Coolers",
    images: [
      "https://www.rentooze.in/proimg/AIR COOLER - 100 LTR FRONT.png",
    ],
    availability: "available",
   
    buyPrice: 25000,
    features: ["110L water tank", "Efficient cooling", "Portable"],
    locations: ["Pune"],
    specifications: {
      Capacity: "110L",
    },
  },
  {
    _id: "11",
    name: "Portable AC 1 Ton",
    description:
      "1 Ton portable air conditioner suitable for small to medium spaces.",
    category: "Portable ACs",
    images: ["https://www.rentooze.in/proimg/portableAcblack2.png"],
    availability: "available",
  
    buyPrice: 40000,
    features: ["1 Ton cooling capacity", "Portable design", "Energy efficient"],
    locations: ["Pune"],
    specifications: {
      "Cooling Capacity": "1 Ton",
    },
  },
  {
    _id: "12",
    name: "Portable AC 1.5 Ton",
    description:
      "1.5 Ton portable air conditioner, ideal for medium rooms and offices.",
    category: "Portable ACs",
    images: ["https://www.rentooze.in/proimg/PORTABLE AC - 1.png"],
    availability: "available",

    buyPrice: 45000,
    features: [
      "1.5 Ton cooling capacity",
      "Portable design",
      "Energy efficient",
    ],
    locations: ["Pune"],
    specifications: {
      "Cooling Capacity": "1.5 Ton",
    },
  },
];

