import React from "react";
import Image from "next/image"
import { getAllCategory, getItemByCategoryName } from "../../data/menu"; // Adjust the path as needed
import { useCart } from '../../context/CartContext';

export default function Item() {
  const { addToCart } = useCart()
  const categories = getAllCategory();
  console.log(getItemByCategoryName)
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Loop through categories */}
      {categories.map((category) => (
        <section key={category.id} className="mb-12" id={category.categoryName}>
          <header className="flex flex-col mb-10"> 
            <h2 className="text-2xl font-bold mb-10">
              {category.categoryName}
            </h2>
            <div className="flex justify-between">
              {category.imagePath && (
                <img
                  src={category.imagePath.src}
                  alt={category.categoryName}
                  className="mx-auto my-4 w-full max-w-md rounded-md"
                />
              )}
              <p className="text-gray-600 text-left px-5">{category.categoryDescreption}</p>
            </div>
          </header>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getItemByCategoryName(category.categoryName).map((item) => (
              <div
                key={item.id}
                className="flex flex-col border rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-96">
                  <Image
                    src={item.image}
                    alt="Item of cafteria Menu"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="flex flex-col p-5">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-gray-800 font-semibold">{item.price} <span>ETB</span></p>
                </div>
                <div className=" p-5">
                  <button onClick={() => addToCart(item)} >
                    <h5
                      className={`my-10 bottom-6 font-bold font-monospace hover:border-black text-xl mt-1 w-40 items-center justify-center 
                      hover:scale-105 transition duration-400 p-2 text-white ${
                        item.id % 2 == 1
                          ? "bg-gradient-to-r from-green-500 to-[#11665b]-500"
                          : "bg-gradient-to-r from-green-800 to-[#11665b]-800"
                        }`}  
                    >
                      Order Now
                    </h5>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
