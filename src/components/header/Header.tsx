'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
 const path =  usePathname();
  return (
    <div className=" w-full h-20 fixed bottom-0 shadow-[0_-10px_20px_-5px_rgba(115,115,115,0.50)] md:w-20 md:px-4 md:h-screen md:overflow-hidden md:shadow-2xl md:right-0 bg-white">
      <header className="flex h-full w-full flex-col md:flex-row justify-center">
        <div className="flex flex-row gap-x-10 sm:gap-x-20 justify-center md:justify-normal md:flex-col md:mt-10 md:gap-y-16">
          <Link href="/" className="h-10 w-10">
            <Image
              src={path === '/'? "https://res.cloudinary.com/dotkmstum/image/upload/v1706374797/BestiesPlay/selected-home.png" :"https://res.cloudinary.com/dotkmstum/image/upload/v1706376129/BestiesPlay/home.png"}
              alt="Home"
              width={40}
              height={10}
            />
          </Link>
          <Link href="/bookmark" className="h-8 w-8">
            <Image
              src={path === '/bookmark'? "https://res.cloudinary.com/dotkmstum/image/upload/v1706374796/BestiesPlay/selected-bookmark.png" :"https://res.cloudinary.com/dotkmstum/image/upload/v1706376129/BestiesPlay/bookmark.png"}
              alt="BookMark"
              width={40}
              height={10}
            />
          </Link>
          <Link href="/cart" className="h-8 w-8">
            <Image
              src={path === "/cart"? "https://res.cloudinary.com/dotkmstum/image/upload/v1706374796/BestiesPlay/selected-cart.png" :"https://res.cloudinary.com/dotkmstum/image/upload/v1706376129/BestiesPlay/cart.png"}
              alt="Cart"
              width={40}
              height={10}
            />
          </Link>
          <Link href="/profile/login" className="h-10 w-10">
            <Image
              src={path === "/profile/login" || path === "/profile/register" || path === "/profile" ? "https://res.cloudinary.com/dotkmstum/image/upload/v1706374797/BestiesPlay/selected-profile.png" :"https://res.cloudinary.com/dotkmstum/image/upload/v1706376129/BestiesPlay/profile.png"}
              alt="Profile"
              width={40}
              height={10}
            />
          </Link>
        </div>
      </header>
    </div>
  );
}

