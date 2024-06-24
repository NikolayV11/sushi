export type ListType = {
  title: string;
  link: string;
};

export type TypePhoneList = {
  link: number;
  title: string;
};

export const menuList: ListType[] = [
  { title: "Меню", link: "/" },
  { title: "Акции", link: "/stock" },
  { title: "Новости", link: "/news" },
  { title: "О нас", link: "/about" },
  { title: "Карьера", link: "/career" },
  { title: "Отзывы", link: "/reviews" },
];

export const phoneList: TypePhoneList[] = [
  { link: 37529321000, title: "+375 (29) 351 00 00" },
  { link: 37529321000, title: "+375 (29) 351 00 00" },
];
