export type PriceDish = {
  id: number;
  dish_id: number;
  price: number;
  currency: string;
  portion: number;
};

export type InfoPages = { allPages: number; page: number };

export type Dish = {
  id: number;
  name: string;
  description: string;
  weight: number;
  nutritional_value_id: number;
  category_id: number;
  img_url: string;
  energy_value: number;
  squirrels: number;
  fats: number;
  carbohydrates: number;
  price: PriceDish[];
};

export type FetchSushi = {
  dish: Dish[];
  pages: InfoPages;
};
