import { useContext } from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image'
import React from 'react'
import { MainHeader } from '../components/common/MainHeader';
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, totalCartValue, removeFromCart } = useCart();
  console.log(cartItems)
  return (
    <React.Fragment>
      <MainHeader title="Cafteria Menu: Cart" />
      <div className="flex flex-col bg-[#dedee0] relative w-full h-full pt-52 px-5 lg:px-20">
        <h2 className="text-black text-4xl lg:text-6xl font-bold leading-relaxed text-center mb-5">Your Cart</h2>
        <Image 
          className="w-[100px] text-black" 
          src='/separator.svg'
          width="100px"
          height="50%"
        />
        {cartItems.length === 0 ? (
          <p className="text-center text-black text-xl lg:text-2xl font-normal w-full leading-8 my-5">
            Your cart is empty
          </p>
        ) : (
          <div>
            <div className="flex justify-end items-center mt-5">
              <p className="text-2xl lg:text-4xl text-black font-bold">
                Total Cart Value: {totalCartValue} ETB
              </p>
            </div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className={`${ index % 2 == 0  ? 'bg-[#131414]' : 'bg-[#121111]' } 
                  flex flex-col lg:flex-row justify-between lg:items-center text-white p-5 border rounded-xl my-5 h-full w-full`}
                >
                  <div className="flex items-center justify-center my-5 lg:my-0">
                    <Image 
                      className="w-[100px] text-black" 
                      src={item.image}
                      width="100px"
                      height="150px"
                    />

                    <div className="flex flex-col justify-between ml-5">
                      <p className="text-xl lg:text-2xl font-bold">
                        {item.name} 
                      </p>

                      <p className="text-lg lg:text-xl text-[#e3c48f] font-bold">
                        {item.price} 
                        <span className="ml-2">ETB</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mb-5 lg:mb-0">
                    <button
                      className="ml-5 text-2xl lg:text-3xl font-bold bg-green-600 hover:bg-black w-10 h-10 border rounded-full" 
                      onClick={() => increaseQuantity(item.id)}
                    >+</button>
                    <p
                      className="ml-5 text-2xl lg:text-3xl font-bold"
                    >{item.quantity}</p>
                    <button 
                      className="ml-5 text-2xl lg:text-3xl font-bold bg-red-600 hover:bg-black w-10 h-10 border rounded-full"
                      onClick={() => decreaseQuantity(item.id)}
                    >-</button>
                  </div>

                  <p className="flex items-center justify-center text-xl lg:text-2xl text-[#e3c48f] font-bold mb-5 lg:mb-0">
                    Total: {item.price * item.quantity} ETB
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)} 
                    className="flex items-center justify-center text-4xl lg:text-5xl">
                    <MdDelete />
                  </button>
                </li>
              ))}

              <button onClick={() => addToCart(item)} >
                <h5
                  className={`my-10 bottom-6 font-bold font-monospace hover:border-black text-xl mt-1 w-40 items-center justify-center 
                  hover:scale-105 transition duration-400 p-2 text-white bg-gradient-to-r from-green-500 to-[#11665b]-500`}  
                >
                 Order Now
                </h5>
              </button>
            </ul>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;