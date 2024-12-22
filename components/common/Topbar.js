// components/Topbar.js
import React,{useState,useEffect} from 'react';
import { IoLocationOutline, IoTimeOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';

export function Topbar() {
  const [colorChange, setColorchange] = useState(false);
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
    <div className={` ${colorChange ? 'z-[100] bg-black bg-opacity-100' : 'bg-transparent'} 
      fixed flex flex-col lg:flex-row justify-between items-center top-0 
      left-0 w-full p-3 border-b border-gray-200 z-40 transition-transform duration-300
    `}>
      <div className="flex flex-col lg:flex-row items-center text-white mb-5 lg:mb-0">
        <address className="flex justify-center items-center gap-2 text-md mr-3">
          <div className="">
            <IoLocationOutline className="" aria-hidden="true" />
          </div>
          <span className="text-sm">4 kilo, Addis Ababa, Ethiopia</span>
        </address>

        <div className="flex justify-center items-center gap-2 text-md mr-3">
          <div className="">
            <IoTimeOutline className="" aria-hidden="true" />
          </div>
          <span className="text-sm">Daily : 8.00 am to 10.00 pm</span>
        </div>
      </div>

      <div className="flex items-center text-white">
        <a href="tel:+11234567890" className="flex justify-center items-center gap-2 text-md mr-3 hover:text-[#e3c48f] transition duration-300">
          <div className="">
            <IoCallOutline className="" aria-hidden="true" />
          </div>
          <span className="text-sm">+251934781038</span>
        </a>

        <a href="mailto:booking@restaurant.com" className="flex justify-center items-center gap-2 text-md mr-3 hover:text-[#e3c48f] transition duration-300">
          <div className="">
            <IoMailOutline className="" aria-hidden="true" />
          </div>
          <span className="text-sm">yafetaddisu123@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
