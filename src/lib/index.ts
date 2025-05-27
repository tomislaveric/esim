export interface Product {
  name: string;
  country: string;
  price: number;
  duration: number;
  volume: number;
  url: string;
}

export interface Provider {
  name: string;
  description: string;
  logo: string;
  url: string;
  products: Product[];
}
