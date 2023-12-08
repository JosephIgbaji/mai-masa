import React from "react";
import Link from "next/link";

const OrderNowButton = () => {
  return (
    <Link
      className="w-full md:w-[300px] bg-primary p-4 mt-4 px-20 hover:bg-red-600 rounded-full text-lg font-semibold text-white"
      href={"/order"}
    >
      Order Now
    </Link>
  );
};

export default OrderNowButton;
