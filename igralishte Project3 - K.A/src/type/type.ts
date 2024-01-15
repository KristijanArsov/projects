export interface ProductType {
  id: string;
  stock:string;
  name: string;
  price: number;
  description: string;
  size: string;
  category: string;
  brand: string;
  color: string;
  material: string;
  care: string;
  amount: number,
  isFavorite: boolean,
  condition: string;
  img: string;
  isOrdered:boolean,
  oznaki: string[],
  images: Array<{ [key: string]: string }>;
}

export interface BrandsType {
  id: string;
  title: string;
  img: string;
}
