export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  tags: string[];
  availabilityStatus: string;
  brand: string;
  weight: number;
  rating: number;
  discountPercentage: number;
  reviews: Comment[];
};

export type Products = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type Comment = { comment: string; rating: number; reviewerName: string; date: string };
