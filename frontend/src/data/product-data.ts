import sofa from "../assets/cards/sofa.png";
import chair from "../assets/cards/chair.png";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: string;
  image: string;
  discount?: string;
  tag?: "New";
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    oldPrice: "Rp 3.500.000",
    image: chair,
    discount: "-30%",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image: sofa,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 2500000,
    oldPrice: "Rp 14.000.000",
    image: chair,
    discount: "-50%",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 2500000,
    image: chair,
    tag: "New",
  },
  {
    id: 5,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    oldPrice: "Rp 3.500.000",
    image: chair,
    discount: "-30%",
  },
  {
    id: 6,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image: sofa,
  },
  {
    id: 7,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 2500000,
    oldPrice: "Rp 14.000.000",
    image: sofa,
    discount: "-50%",
  },
  {
    id: 8,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 2500000,
    image: sofa,
    tag: "New",
  },
  {
    id: 9,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    oldPrice: "Rp 3.500.000",
    image: chair,
    discount: "-30%",
  },
  {
    id: 10,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image: sofa,
  },
  {
    id: 11,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 2500000,
    oldPrice: "Rp 14.000.000",
    image: chair,
    discount: "-50%",
  },
  {
    id: 12,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 2500000,
    image: chair,
    tag: "New",
  },
  {
    id: 13,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 2500000,
    image: chair,
    tag: "New",
  },
  {
    id: 14,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 2500000,
    image: sofa,
    tag: "New",
  },
  {
    id: 15,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 2500000,
    image: sofa,
    tag: "New",
  },
  {
    id: 16,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 2500000,
    image: chair,
    tag: "New",
  },
];
