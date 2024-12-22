import SaladsImage from '../public/saladsCategory.jpg';
import BrunchImage from '../public/brunchCategory.jpg';
import DrinksImage from '../public/drinkCategory.jpg';

const CategoryArray = [
  {
    "id": 1,
    "categoryName": "Salads 🥗",
    "categoryDescreption": `Fresh and vibrant, our salads are crafted with a medley of crisp greens, seasonal vegetables, and bold flavors. Each 
    dish is thoughtfully prepared, combining textures and tastes that are as nourishing as they are delicious. Whether you prefer a light 
    vinaigrette or a hearty, protein-packed option, our salads offer a perfect balance of health and indulgence.`,
    "imagePath":{SaladsImage},
  },
  {
    "id": 2,
    "categoryName": "Brunch 🥖",
    "categoryDescreption": `Start your day right with our irresistible brunch offerings. From fluffy pancakes and golden waffles to savory omelets 
    and avocado toast, our menu is designed to delight every palate. Paired with freshly brewed coffee or a mimosa, our brunch experience promises 
    comfort, flavor, and a touch of morning luxury.`,
    "imagePath":{BrunchImage},
  },
  {
    "id": 3,
    "categoryName": "Drinks ☕️",
    "categoryDescreption": `Quench your thirst with our refreshing selection of drinks. Choose from invigorating juices, crafted cocktails, aromatic 
    coffees, or chilled mocktails. Each beverage is carefully prepared to complement your meal or to be enjoyed on its own, offering a sip of 
    satisfaction in every glass.`,
    "imagePath":{DrinksImage},
  }
];

const ItemArray = [
  {
    "id": "1",
    "name": `Special Salad`,
    "description": "A delightful mix of fresh greens, cherry tomatoes, cucumbers, and a tangy vinaigrette, topped with your choice of protein.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKI5ZrBVvqIDC3eV_lXdN2KX4QC9Cv2KqIQ&s",
    "price": "700 Birr",
    "categoryName": "Salads 🥗",
  },
  {
    "id": "2",
    "name": `Basic Salad`,
    "description": "Simple yet satisfying, this salad features crisp lettuce, carrots, and a drizzle of olive oil and lemon.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKI5ZrBVvqIDC3eV_lXdN2KX4QC9Cv2KqIQ&s",
    "price": "900 Birr",
    "categoryName": "Salads 🥗",
  },
  {
    "id": "3",
    "name": `Egg on Toast`,
    "description": "A classic brunch staple with perfectly cooked eggs served atop toasted artisan bread.",
    "image": "https://drive.google.com/file/d/1v8fhiCGfZOLNzhbfOW3WSZu6sjZWwxuM/view?usp=sharing",
    "price": "700 Birr",
    "categoryName": "Brunch 🥖",
  },
  {
    "id": "4",
    "name": `Baguette`,
    "description": "Freshly baked French baguette, crispy on the outside and soft on the inside, served with butter and jam.",
    "image": "https://drive.google.com/file/d/1JYlmUKvhNMUlKqAr7d8HWJKnl94M9-8u/view?usp=sharing",
    "price": "300 Birr",
    "categoryName": "Brunch 🥖",
  },
  {
    "id": "5",
    "name": `Tea`,
    "description": "A soothing cup of aromatic tea brewed to perfection.",
    "image": "https://drive.google.com/file/d/1tv_Y0RngrhRitbqEIFaqbJjJkXGPNW8H/view?usp=sharing",
    "price": "300 Birr",
    "categoryName": "Drinks ☕️",
  },
  {
    "id": "6",
    "name": `Red Tea`,
    "description": "Rich and flavorful red tea with a naturally sweet finish.",
    "image": "https://drive.google.com/file/d/1iQO2XdIKNBJdc5KgprFS8BPdUbOcPED2/view?usp=sharing",
    "price": "400 Birr",
    "categoryName": "Drinks ☕️",
  },
  {
    "id": "7",
    "name": `Espresso`,
    "description": "A strong and bold shot of coffee, perfect for a quick energy boost.",
    "image": "https://drive.google.com/file/d/1uyoN9j550TW2Pl4ll1TAHvkK5EvrHwn7/view?usp=sharing",
    "price": "5 Birr",
    "categoryName": "Drinks ☕️",
  },
  {
    "id": "8",
    "name": `Coffee`,
    "description": "A classic cup of coffee brewed with rich, aromatic beans.",
    "image": "https://drive.google.com/file/d/1avBZ-ECrB5CrokB8rqn_d7v6TkY42bbh/view?usp=sharing",
    "price": "3 Birr",
    "categoryName": "Drinks ☕️",
  },
  {
    "id": "9",
    "name": `Cappuccino`,
    "description": "A creamy blend of espresso and steamed milk, topped with a frothy finish.",
    "image": "https://drive.google.com/file/d/1avBZ-ECrB5CrokB8rqn_d7v6TkY42bbh/view?usp=sharing",
    "price": "4 Birr",
    "categoryName": "Drinks ☕️",
  },
]

export function getAllCategory() {
  return CategoryArray;
}

export function getCategoryById(id) {
  return CategoryArray.filter((category) => category.id === id);
}

export function getAllItem() {
  return ItemArray;
}

export function getItemById(id) {
  return ItemArray.filter((item) => item.id === id);
}