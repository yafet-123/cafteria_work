import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaPhone,FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/router";
import { MdEmail } from "react-icons/md";
export function Footer() {
  const socialMediaLinks = [
    { path: <FaFacebookF size={20} /> },
    { path: <FaLinkedinIn size={20} /> },
    { path: <FaTwitter size={20} /> },
    { path: <FaYoutube size={20} /> },
  ];

  const quickLinks = [
    { path: "/", link: "Home" },
    { path: "/Menu", link: "Menus" },
    { path: "/about", link: "About Us"},
    { path: "/contact", link: "Contact"}
  ];

  const router = useRouter();

  return (
    <footer className="w-full h-full p-5 lg:p-20" style={{ backgroundImage: "url('/footer-bg.jpg')" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <ul className="flex flex-col justify-center items-center space-y-4 text-gray-400">
            { quickLinks.map((qlink,index)=>(
              <li
                key={index}
              >
                <a href={qlink.path} className="relative inline-block max-w-max font-bold uppercase tracking-wider text-balck group">{qlink.link}</a></li>
            ))}
          </ul>

          <div className="footer-brand px-5 lg:px-[30px] py-[40px] bg-[#0E0C0B] bg-center bg-repeat" style={{ backgroundImage: "url('/footer-form-bg.png')" }}>
            <a href="#" className="flex justify-center items-center mb-10">
              <Image 
                src="/logo.svg"
                width="160" 
                height="50" 
                loading="lazy" 
                alt="grilli home" 
              />
            </a>

            <div className="flex flex-col justify-center items-center">
              <p className="text-[#dec08c] mb-2 text-center">Restaurant St, Delicious City, London 9578, UK</p>

              <a href="mailto:booking@grilli.com" className="text-center text-[#dec08c] mb-2 hover:text-yellow-400">booking@grilli.com</a>

              <a href="tel:+88123123456" className="text-[#dec08c] mb-2 hover:text-yellow-400">Booking Request : +88-123-123456</a>

              <p className="text-[#dec08c] mb-4">Open : 09:00 am - 01:00 pm</p>
            </div>

            <div className="flex justify-center gap-1 mb-8">
              <div className="w-2 h-2 bg-[#F9B176] animate-spin"></div>
              <div className="w-2 h-2 bg-[#F9B176] animate-spin"></div>
              <div className="w-2 h-2 bg-[#F9B176] animate-spin"></div>
            </div>

            <p className="text-center text-3xl font-normal text-white mb-6">Get News & Offers</p>

            <p className="text-center text-white text-lg mb-6">Subscribe us & Get <span className="text-white">25% Off.</span></p>

            <form className="flex">
              <div className="relative flex">
                <input 
                  type="email" name="email_address" 
                  placeholder="Your email" autoComplete="off" 
                  className="bg-[#1a1b1c] text-white w-full py-2 pl-10 pr-4 border border-gray-300 placeholder-white" 
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.293-1.293a1 1 0 00-1.414 1.414L19 18h-4m0 0H6a1 1 0 01-1-1v-5m0-2V7a1 1 0 011-1h4m4 0a1 1 0 011 1v4m0 0V8a1 1 0 00-1-1h-4M7 9H6a1 1 0 00-1 1v4m4 4H6v-2a1 1 0 011-1h4v1a1 1 0 001 1v-1a1 1 0 001-1v-1a1 1 0 00-1-1H7m5-4h1v2H7m0-2h4v1H7v-1z"></path>
                  </svg>
                </span>
              </div>
              <button type="submit" className="px-4 py-2 bg-[#e3c48f] text-black font-bold hover:bg-yellow-300">Subscribe</button>
            </form>
          </div>

          <ul className="flex flex-col justify-center items-center space-y-4 text-gray-400">
            <li><a href="#" className="relative inline-block max-w-max font-bold uppercase tracking-wider text-balck group">Facebook</a></li>
            <li><a href="#" className="relative inline-block max-w-max font-bold uppercase tracking-wider text-balck group">Instagram</a></li>
            <li><a href="#" className="relative inline-block max-w-max font-bold uppercase tracking-wider text-balck group">Twitter</a></li>
            <li><a href="#" className="relative inline-block max-w-max font-bold uppercase tracking-wider text-balck group">Youtube</a></li>
            <li><a href="#" className="relative inline-block max-w-max font-bold uppercase tracking-wider text-balck group">Google Map</a></li>
          </ul>
        </div>

        <div className="footer-bottom text-gray-400">
          <p className="text-center">
            &copy; 2022 Grilli. All Rights Reserved | Crafted by 
            <a 
              href="https://github.com/yafet-123" 
              target="_blank" 
              rel="noreferrer"
              className="text-yellow-400 underline"
            >
              yafet
            </a>
          </p>
        </div>
      </div>
    </footer>

  );
}


<a href="#" className="relative inline-block max-w-max text-gray-800 font-bold uppercase tracking-wider group">
  Your Link Text
</a>
