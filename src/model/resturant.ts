// let data = {
//   name: "누나네 식당",
//   category: "Korean",
//   address: {
//     city: "Busan",
//     detail: "Onchendong",
//     zipCode: 123456,
//   },
//   menu: [
//     { name: "제육볶음", price: 8000, cateory: "식사" },
//     { name: "돈까스", price: 7000, cateory: "육류" },
//     { name: "칼국수", price: 6500, cateory: "면류" },
//   ],
// };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: Number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};
