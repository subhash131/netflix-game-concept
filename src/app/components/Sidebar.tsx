import React from "react";
import { FaRegCompass, FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { TiGroup } from "react-icons/ti";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="fixed top-0 h-screen p-6 w-44">
      <h1 className="font-extrabold text-lg">
        Netflix<span className="text-red-600 text-2xl  ">.</span>
      </h1>
      <div>
        <h5 className="text-xs text-gray-600 pt-6 pb-2">Menu</h5>
        <nav className="gap-3 flex flex-col text-xs">
          <div className="flex gap-2  py-2 items-center cursor-pointer">
            <FaRegCompass />
            <p className="leading-3 font-medium">Browse</p>
          </div>
          <div className="flex gap-2 py-2 items-center cursor-pointer">
            <GoHeart />
            <p className="leading-3 font-medium">Watchlist</p>
          </div>
          <div className="flex gap-2 py-2 items-center cursor-pointer">
            <FaRegCalendarAlt />
            <p className="leading-3 font-medium">Coming soon</p>
          </div>
        </nav>
      </div>
      <div>
        <h5 className="text-xs text-gray-600 pt-6 pb-2">Social</h5>
        <nav className="gap-3 flex flex-col text-xs cursor-pointer">
          <div className="flex gap-2  py-2 items-center cursor-pointer">
            <FaRegUser />
            <p className="leading-3 font-medium cursor-pointer">Friends</p>
          </div>
          <div className="flex gap-2 py-2 items-center cursor-pointer">
            <TiGroup />
            <p className="leading-3 font-medium">Parties</p>
          </div>
        </nav>
      </div>
      <div>
        <h5 className="text-xs text-gray-600 pt-6 pb-2">General</h5>
        <nav className="gap-3 flex flex-col text-xs">
          <div className="flex gap-2  py-2 items-center cursor-pointer">
            <IoSettingsOutline />
            <p className="leading-3 font-medium cursor-pointer">Settings</p>
          </div>
          <div className="flex gap-2 py-2 items-center cursor-pointer">
            <IoLogOutOutline />
            <p className="leading-3 font-medium ">Logout</p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
