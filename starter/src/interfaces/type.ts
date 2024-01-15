export interface RestaurantType {
  isFavorite: boolean;
  id: string;
  reviews?: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  reviewsList: Review[]
}

export interface Review {
  id: number;
  author: string;
  comment: string;
  stars: number;
}

