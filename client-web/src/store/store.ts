import { configureStore } from "@reduxjs/toolkit";
import dish from "./ProductSlice";
import basket from "./Basket";

export const store = configureStore({
  reducer: { dish, basket },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// store.getState - Ворачивает фенкцию содержащию store с типоми из reducer:{}
// ReturnType - раскрывает функцию и достает все типы
// RootState - хранит объект с типами из store входящие в reducer:{}

// export type RootState = ReturnType<typeof store.getState>;

// // Получаем типы из store
// export type AppDispatch = typeof store.dispatch;
// // Передаём все полученные типы в useAppDispatch и получаем костомный useDispatch
// export const useAppDispatch: () => AppDispatch = useDispatch;
