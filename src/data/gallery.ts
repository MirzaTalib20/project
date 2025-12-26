import { Gallery } from '../types';
import gallery4 from "../assets/images/MIST FAN BLACK - 1.webp";
import gallery2 from "../assets/images/MIST FAN SILVER - 6.png";
import gallery3 from "../assets/images/PORTABLE AC - 1.webp";
import gallery5 from "../assets/images/jumbo-fan-img.webp";
export const gallery: Gallery[] = [
  {
    _id: '1',
    imageUrl: "",
            name: "Pedestal Fan",
            category: "Fans"
  },
  {
    _id: '2',
    imageUrl: gallery2,
            name: "Mist Fan Silver",
            category: "Mist Fans"
  },
  {
    _id: '3',
     imageUrl: gallery3,
            name: "Portable AC",
            category: "Air Conditioners"
  },
  {
    _id: '4',
    imageUrl: gallery4,
            name: "Mist Fan Black",
            category: "Mist Fans"
  },
  {
    _id: '5',
    imageUrl: gallery5,
            name: "Jumbo Fan",
            category: "Industrial Fans"
  },
 
];