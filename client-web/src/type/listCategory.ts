import React from "react";

export type TypeCategory = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  urlImg: string;
  parameter: string;
};

export const categoryList: TypeCategory[] = [
  { title: "Обеденное меню", urlImg: "public/img/category/1.jpg", parameter: "s" },
  { title: "Hot Box WOK", urlImg: "public/img/category/2.jpg", parameter: "s" },
  { title: "Cool Box WOK", urlImg: "public/img/category/3.jpg", parameter: "s" },
  { title: "Супы WOK", urlImg: "public/img/category/4.jpg", parameter: "s" },
  { title: "Маки", urlImg: "public/img/category/5.jpg", parameter: "s" },
  { title: "Ура Маки", urlImg: "public/img/category/6.jpg", parameter: "s" },
  { title: "Футо Маки", urlImg: "public/img/category/7.jpg", parameter: "s" },
  { title: "Гунканы", urlImg: "public/img/category/8.jpg", parameter: "s" },
  { title: "Нигири", urlImg: "public/img/category/9.jpg", parameter: "s" },
  { title: "СушиРрито", urlImg: "public/img/category/10.jpg", parameter: "s" },
  { title: "Сеты", urlImg: "public/img/category/11.jpg", parameter: "s" },
  { title: "Супы", urlImg: "public/img/category/12.jpg", parameter: "s" },
  { title: "Салаты", urlImg: "public/img/category/13.jpg", parameter: "s" },
  { title: "Десерты", urlImg: "public/img/category/14.jpg", parameter: "s" },
  { title: "Напитки", urlImg: "public/img/category/15.jpg", parameter: "s" },
  { title: "Соусы", urlImg: "public/img/category/16.jpg", parameter: "s" },
  { title: "Сертификаты", urlImg: "public/img/category/17.jpg", parameter: "s" },
];
