import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Dish, DishBasket } from "../../type";

type Basket = {
  price: number;
  basket: DishBasket[];
};
const initialState: Basket = {
  price: 0,
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addDishBasket: (state, action: PayloadAction<Dish>) => {
      // проверяем есть ли товар в корзине?
      const status = state.basket.some((item) => item.id === action.payload.id);

      //если есть то мы добавляем цену по количеству товара и количество товара
      if (status) {
        console.log(status);
        state.basket.map((item) => {
          if (item.id === action.payload.id) {
            item.count += 1;

            if (
              item.count >= action.payload.price[0].portion &&
              item.count < action.payload.price[1].portion
            ) {
              item.priceBasket = action.payload.price[0].price;
              state.price = Number((state.price + item.priceBasket).toFixed(2));
            }

            if (item.count === action.payload.price[1].portion) {
              state.price = Number((state.price - item.priceBasket * (item.count - 1)).toFixed(2));
              item.priceBasket = action.payload.price[1].price;
              state.price = Number((state.price + item.priceBasket * item.count).toFixed(2));
            }

            if (item.count > action.payload.price[1].portion) {
              state.price = Number((state.price + item.priceBasket).toFixed(2));
            }
          }
        });
      }

      if (!status) {
        const obj: DishBasket = {
          ...action.payload,
          count: 1,
          priceBasket: action.payload.price[0].price,
        };
        state.price = Number((state.price + obj.priceBasket).toFixed(2));
        state.basket.push(obj);
      }
    },
    deleteOfBasket: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter((item) => {
        if (item.id === action.payload) {
          state.price = Number((state.price - item.priceBasket * item.count).toFixed(2));
        }
        if (item.id !== action.payload) return item;
      });
    },
    subtractionDish: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter((item) => {
        if (item.id != action.payload) {
          return item;
        }
        if (item.id === action.payload) {
          item.count -= 1;
          if (item.count === item.price[1].portion - 1) {
            state.price = Number((state.price - item.priceBasket * (item.count + 1)).toFixed(2));
            item.priceBasket = item.price[0].price;
            state.price = Number((state.price + item.priceBasket * (item.count + 1)).toFixed(2));
          }

          if (item.count >= 0) {
            state.price = Number((state.price - item.priceBasket).toFixed(2));
            return item;
          }
        }
      });
    },
  },
});

export const { addDishBasket, deleteOfBasket, subtractionDish } = basketSlice.actions;

export default basketSlice.reducer;
