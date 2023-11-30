import React from "react";
import { MdSearch } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="px-8 py-6 w-full flex justify-between">
      <div className="flex gap-2 items-center relative w-1/4">
        <input
          className="border p-2 rounded-2xl text-sm placeholder:text-xs w-full border-gray-400"
          placeholder="Search..."
        />
        <div className="border-l rounded-2xl p-2 absolute right-0  border-gray-400">
          <MdSearch className="text-xl" />
        </div>
      </div>
      <div className=" flex gap-6 items-center">
        <div className="relative cursor-pointer">
          <IoNotificationsOutline className="text-xl" />
          <div className="absolute h-2 w-2 bg-red-600 rounded-full top-0 right-0"></div>
        </div>
        <div className="relative cursor-pointer">
          <AiOutlineMessage className="text-xl" />
          <div className="absolute h-2 w-2 bg-red-600 rounded-full top-0 right-0"></div>
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer ">
          <img
            src="/assets/users/profile_img.jpg"
            className="w-10 h-10 rounded-full object-cover"
          ></img>
          <div>
            <p className="text-sm font-bold">Samantha</p>
            <p className="text-xs text-gray-400 font-bold">Level 12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
