import { Product, CartItem } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Laptop HP Pavilion",
    price: 599990,
    image: "https://via.placeholder.com/300x200?text=Laptop+HP",
    stock: 5,
    category: "Computadores",
    description: "Laptop HP con procesador Intel Core i5"
  },
  {
    id: 2,
    name: "Mouse Logitech G502",
    price: 45990,
    image: "https://via.placeholder.com/300x200?text=Mouse+Logitech",
    stock: 0,
    category: "Accesorios",
    description: "Mouse gaming con sensor HERO"
  },
  {
    id: 3,
    name: "Teclado Mecánico",
    price: 89990,
    image: "https://via.placeholder.com/300x200?text=Teclado",
    stock: 10,
    category: "Accesorios",
    description: "Teclado mecánico RGB retroiluminado"
  },
  {
    id: 4,
    name: "Monitor Samsung 24\"",
    price: 189990,
    image: "https://via.placeholder.com/300x200?text=Monitor+Samsung",
    stock: 3,
    category: "Monitores",
    description: "Monitor Full HD IPS 75Hz"
  },
  {
    id: 5,
    name: "Webcam Logitech C920",
    price: 79990,
    image: "https://via.placeholder.com/300x200?text=Webcam",
    stock: 8,
    category: "Accesorios",
    description: "Webcam HD 1080p con micrófono estéreo"
  },
  {
    id: 6,
    name: "Auriculares Sony WH-1000XM4",
    price: 299990,
    image: "https://via.placeholder.com/300x200?text=Auriculares",
    stock: 6,
    category: "Audio",
    description: "Auriculares con cancelación de ruido"
  }
];

export const mockCart: CartItem[] = [
  {
    id: 1,
    name: "Laptop HP Pavilion",
    price: 599990,
    image: "https://via.placeholder.com/300x200?text=Laptop+HP",
    stock: 5,
    category: "Computadores",
    quantity: 1
  }
];