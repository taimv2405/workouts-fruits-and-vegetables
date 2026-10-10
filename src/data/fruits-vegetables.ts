// Võ Minh Tài - 23521382
export type FoodSection = {
  title: string;
  url: string;
  data: string[];
};

export const fruitsVegetables: FoodSection[] = [
  {
    title: "Fruits",
    url: "https://cdn-icons-png.flaticon.com/512/1625/1625099.png",
    data: ["Banana", "Orange", "Grapes", "Mango", "Pineapple"],
  },
  {
    title: "Vegetables",
    url: "https://cdn-icons-png.flaticon.com/512/2153/2153788.png",
    data: ["Carrot", "Broccoli", "Spinach", "Beets & Beet Greens", "Kale"],
  },
];
