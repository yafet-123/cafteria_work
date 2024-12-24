import SaladsImage from '../public/saladsCategory.jpg';
import BrunchImage from '../public/brunchCategory.jpg';
import DrinksImage from '../public/drinkCategory.jpg';

import Image1 from "../public/item/specialsalad.jpg"
import Image2 from "../public/item/basicsalad.jpg"
import Image3 from "../public/item/eggontoast.jpg"
import Image4 from "../public/item/Baguette.jpg"
import Image5 from "../public/item/tea.jpg"
import Image6 from "../public/item/redtea.jpg"
import Image7 from "../public/item/Espresso.jpg"
import Image8 from "../public/item/coffee.jpg"
import Image9 from "../public/item/Cappuccino.jpg"

const CategoryArray = [
  {
    "id": 1,
    "categoryName": "Salads 🥗",
    "categoryDescreption": `Fresh and vibrant, our salads are crafted with a medley of crisp greens, seasonal vegetables, and bold flavors. Each 
    dish is thoughtfully prepared, combining textures and tastes that are as nourishing as they are delicious. Whether you prefer a light 
    vinaigrette or a hearty, protein-packed option, our salads offer a perfect balance of health and indulgence.`,
    imagePath:SaladsImage,
  },
  {
    "id": 2,
    "categoryName": "Brunch 🥖",
    "categoryDescreption": `Start your day right with our irresistible brunch offerings. From fluffy pancakes and golden waffles to savory omelets 
    and avocado toast, our menu is designed to delight every palate. Paired with freshly brewed coffee or a mimosa, our brunch experience promises 
    comfort, flavor, and a touch of morning luxury.`,
    imagePath:BrunchImage,
  },
  {
    "id": 3,
    "categoryName": "Drinks ☕️",
    "categoryDescreption": `Quench your thirst with our refreshing selection of drinks. Choose from invigorating juices, crafted cocktails, aromatic 
    coffees, or chilled mocktails. Each beverage is carefully prepared to complement your meal or to be enjoyed on its own, offering a sip of 
    satisfaction in every glass.`,
    imagePath:DrinksImage,
  }
];

const ItemArray = [
  {
    "id": "1",
    "name": `Special Salad`,
    "description": "A delightful mix of fresh greens, cherry tomatoes, cucumbers, and a tangy vinaigrette, topped with your choice of protein.",
    "image": Image1,
    "price": "700",
    "categoryName": "Salads 🥗",
  },
  {
    "id": "2",
    "name": `Basic Salad`,
    "description": "Simple yet satisfying, this salad features crisp lettuce, carrots, and a drizzle of olive oil and lemon.",
    "image": Image2,
    "price": "900",
    "categoryName": "Salads 🥗",
  },
  {
    "id": "3",
    "name": `Egg on Toast`,
    "description": "A classic brunch staple with perfectly cooked eggs served atop toasted artisan bread.",
    "image": Image3,
    "price": "700",
    "categoryName": "Brunch 🥖",
  },
  {
    "id": "4",
    "name": `Baguette`,
    "description": "Freshly baked French baguette, crispy on the outside and soft on the inside, served with butter and jam.",
    "image": Image4,
    "price": "300",
    "categoryName": "Brunch 🥖",
  },
  {
    "id": "5",
    "name": `Tea`,
    "description": "A soothing cup of aromatic tea brewed to perfection.",
    "image": Image5,
    "price": "300",
    "categoryName": "Drinks ☕️",
  },
  {
    "id": "6",
    "name": `Red Tea`,
    "description": "Rich and flavorful red tea with a naturally sweet finish.",
    "image": Image6,
    "price": "400",
    "categoryName": "Drinks ☕️",
  },
  {
    "id": "7",
    "name": `Espresso`,
    "description": "A strong and bold shot of coffee, perfect for a quick energy boost.",
    "image": Image7,
    "price": "5",
    "categoryName": "Drinks ☕️",
  },
  {
    "id": "8",
    "name": `Coffee`,
    "description": "A classic cup of coffee brewed with rich, aromatic beans.",
    "image": Image8,
    "price": "3",
    "categoryName": "Drinks ☕️",
  },
  {
    "id": "9",
    "name": `Cappuccino`,
    "description": "A creamy blend of espresso and steamed milk, topped with a frothy finish.",
    "image": Image9,
    "price": "4",
    "categoryName": "Drinks ☕️",
  },
]

export function getAllCategory() {
  return CategoryArray;
}

export function getCategoryByName(categoryName) {
  return CategoryArray.filter((category) => category.categoryName === categoryName);
}

export function getAllItem() {
  return ItemArray;
}

export function getItemByCategoryName(categoryName) {
  return ItemArray.filter((item) => item.categoryName === categoryName);
}