import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#475c54]">
      <h1 className="w-full text-3xl font-bold">Block Refresh</h1>
      <ul className="hidden md:flex text-center">
        <li className="p-4">Home</li>
        <li className="p-4 whitespace-nowrap">About Us</li>
        <li className="p-4 whitespace-nowrap">Contact Us</li>
        <li className="p-4">Membership</li>
        <li className="p-4">Donate</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-[#cce3de]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">Block Refresh</h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-400">Home</li>
          <li className="p-4 border-b border-gray-400">About Us</li>
          <li className="p-4 border-b border-gray-400">Contact Us</li>
          <li className="p-4 border-b border-gray-400">Membership</li>
          <li className="p-4 border-b border-gray-400">Donate</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
