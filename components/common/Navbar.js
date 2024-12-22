import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from "next/router";
import { useTheme } from 'next-themes';
import ThemeToggler from './ThemeToggler';
import {signIn} from 'next-auth/react'
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [NavabarText,setNavabarText] = useState("")
  const [colorChange, setColorchange] = useState(false);
  const { cartCount } = useCart();
  const router = useRouter();
  const handleNav = () => {
    setNav(!nav)
  };

  const NavbarTopic = [
    { path: "#", name: "Salads" },
    { path: "#", name: "Brunch"},
    { path: "#", name: "Drinks"}
  ];
 
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <nav
      className={
      `${open ? 'bg-black bg-opacity-100' : 'bg-transparent'} ${colorChange ? 'z-50 bg-black' : 'z-50'}
      w-full lg:h-[80px] fixed px-5 lg:px-20`}
    >
      <div className="lg:justify-between justify-around items-center lg:flex lg:py-[10px] w-full">
        <div className="flex items-center justify-between py-3">
          <Link href="/">
            <a>
              <Image
                src="/logo.svg"
                width={170} height={60}
                alt="Navbar"
              />
            </a>
          </Link>
          <div className="lg:hidden ">
            <button
              className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setOpen(!open)}
            >
              {open === true ? (
                <AiOutlineClose className="text-white" size={30} />
              ) : (
                <AiOutlineMenu className="text-white" size={30} />
              )}
            </button>
          </div>
        </div>

        
        <ul className={`${open ? "flex flex-col lg:hidden" : "hidden lg:flex items-center" }`}>
          {NavbarTopic.map((link) => (
            <li key={link.name} className="md:ml-6 text-lg font-medium md:my-0 my-7">
              <Link href={link.path}>
                <a
                  onClick={(e) => setNavabarText(link.text)}
                  className={ router.pathname == link.path
                    ? "border-b-4 border-[#e3c48f] text-[#e3c48f] md:ml-2 lg:ml-3 text-md lg:text-lg font-extrabold group"
                    : "md:ml-2 lg:ml-3 text-md lg:text-lg font-extrabold text-white group"
                  }
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className={`${ open ? "lg:hidden z-50" : "hidden lg:flex z-50"}`}>
          <Link href="/Menu">
            <a 
              className="btn relative flex items-center justify-center text-[#dec08c] text-[1.2rem] font-medium uppercase tracking-[3px] max-w-max border-2 border-[#dec08c] px-[30px] py-[10px] overflow-hidden z-[1]"
            >
              <span className="transition ease-[ease] duration-[250ms] ">Order Menu</span>
              <span className="text text-2" aria-hidden="true">Order Menu</span>
            </a>
          </Link>
          <Link href="/Cart" className="pt-5 lg:pt-0">
            <a className="flex items-center relative p-2 rounded-full hover:bg-white/10 lg:ml-5">
              <span className="text-5xl lg:text-4xl text-white">
                <CiShoppingCart />
              </span>
              <span className="lg:absolute lg:right-0 lg:top-1 block h-6 w-6 text-2xl text-center bg-red-600 text-white rounded-full flex justify-center items-center">
                {cartCount}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
