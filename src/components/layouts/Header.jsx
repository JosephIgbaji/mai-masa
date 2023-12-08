"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="flex p-4 justify-between items-center font-semibold text-lg">
      <div>
        <Link href={"/"} className="text-primary text-xl hover:text-red-600">
          Mai-Masa
        </Link>
      </div>

      <nav className="hidden md:flex gap-6">
        <Link
          href={"/"}
          className="hover:border-b-4 hover:border-primary transition-all"
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="hover:border-b-4 hover:border-primary transition-all"
        >
          About
        </Link>
        <Link
          href={"/contact-us"}
          className="hover:border-b-4 hover:border-primary transition-all"
        >
          Contact
        </Link>
      </nav>
      <nav className="hidden md:flex gap-6 items-center">
        <Link
          href={"/login"}
          className="border rounded-full bg-primary text-white hover:bg-red-600 hover:text-gray-300 transition-all p-2 px-6 "
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className="hover:border-b-4 hover:border-primary transition-all"
        >
          Register
        </Link>
      </nav>
      <div
        className="md:hidden"
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        <svg
          className="cursor-pointer"
          width="32"
          height="30"
          viewBox="0 0 32 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3334 24.1668C29.9754 24.1671 30.5927 24.4145 31.0574 24.8575C31.522 25.3006 31.7984 25.9054 31.8293 26.5467C31.8601 27.188 31.6431 27.8165 31.2231 28.3022C30.8032 28.7878 30.2124 29.0932 29.5734 29.1552L29.3334 29.1668H2.66675C2.02472 29.1665 1.40742 28.9192 0.94277 28.4761C0.478117 28.0331 0.201728 27.4283 0.170874 26.787C0.140021 26.1457 0.357068 25.5171 0.77704 25.0315C1.19701 24.5459 1.78772 24.2404 2.42675 24.1785L2.66675 24.1668H29.3334ZM29.3334 12.5002C29.9965 12.5002 30.6323 12.7636 31.1012 13.2324C31.57 13.7012 31.8334 14.3371 31.8334 15.0002C31.8334 15.6632 31.57 16.2991 31.1012 16.7679C30.6323 17.2368 29.9965 17.5002 29.3334 17.5002H2.66675C2.00371 17.5002 1.36782 17.2368 0.898981 16.7679C0.43014 16.2991 0.166748 15.6632 0.166748 15.0002C0.166748 14.3371 0.43014 13.7012 0.898981 13.2324C1.36782 12.7636 2.00371 12.5002 2.66675 12.5002H29.3334ZM29.3334 0.833496C29.9965 0.833496 30.6323 1.09689 31.1012 1.56573C31.57 2.03457 31.8334 2.67045 31.8334 3.3335C31.8334 3.99654 31.57 4.63242 31.1012 5.10126C30.6323 5.5701 29.9965 5.8335 29.3334 5.8335H2.66675C2.00371 5.8335 1.36782 5.5701 0.898981 5.10126C0.43014 4.63242 0.166748 3.99654 0.166748 3.3335C0.166748 2.67045 0.43014 2.03457 0.898981 1.56573C1.36782 1.09689 2.00371 0.833496 2.66675 0.833496H29.3334Z"
            fill="#A52A2A"
          />
        </svg>
        {showMobileNav && (
          <div className="flex flex-col py-4 items-end absolute gap-4 text-primary w-[200px] right-4">
            <Link
              href="/login"
              className="hover:text-red-600 text-lg font-semibold"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="hover:text-red-600  text-lg font-semibold"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
