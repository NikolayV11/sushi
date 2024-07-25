import React from "react";

export type TypeCategory = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  urlImg: string;
  parameter: number;
};

export const categoryList: TypeCategory[] = [
  { title: "Обеденное меню", urlImg: "public/img/category/1.jpg", parameter: 1 },
  { title: "Hot Box WOK", urlImg: "public/img/category/2.jpg", parameter: 2 },
  { title: "Cool Box WOK", urlImg: "public/img/category/3.jpg", parameter: 3 },
  { title: "Супы WOK", urlImg: "public/img/category/4.jpg", parameter: 4 },
  { title: "Маки", urlImg: "public/img/category/5.jpg", parameter: 5 },
  { title: "Ура Маки", urlImg: "public/img/category/6.jpg", parameter: 6 },
  { title: "Футо Маки", urlImg: "public/img/category/7.jpg", parameter: 7 },
  { title: "Гунканы", urlImg: "public/img/category/8.jpg", parameter: 8 },
  { title: "Нигири", urlImg: "public/img/category/9.jpg", parameter: 9 },
  { title: "СушиРрито", urlImg: "public/img/category/10.jpg", parameter: 10 },
  { title: "Сеты", urlImg: "public/img/category/11.jpg", parameter: 11 },
  { title: "Супы", urlImg: "public/img/category/12.jpg", parameter: 12 },
  { title: "Салаты", urlImg: "public/img/category/13.jpg", parameter: 13 },
  { title: "Десерты", urlImg: "public/img/category/14.jpg", parameter: 14 },
  { title: "Напитки", urlImg: "public/img/category/15.jpg", parameter: 15 },
  { title: "Соусы", urlImg: "public/img/category/16.jpg", parameter: 16 },
  { title: "Сертификаты", urlImg: "public/img/category/17.jpg", parameter: 17 },
];
