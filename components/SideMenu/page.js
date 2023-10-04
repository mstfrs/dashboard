import React from "react";
import Link from "next/link";
import { RxSketchLogo,RxDashboard,RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const SideMenu = () => {
  return (
    <div className="flex">
      <div className="top-0 fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between ">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-500 w-full p-2"></span>
          <Link href="/">
            <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
