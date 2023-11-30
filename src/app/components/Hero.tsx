import React from "react";

const Hero = () => {
  return (
    <div className="px-8 relative ">
      <div className="h-[50vh] w-[70vw] rounded-2xl overflow-hidden ">
        <div className="z-10 absolute  top-10 left-20 flex gap-2 justify-center items-center">
          <div className="bg-gray-800 text-white  text-xs px-2 py-1 opacity-60 rounded-full">
            <p>10 xp / episode</p>
          </div>
          <div className="flex gap-2 text-white text-xs ">
            <div className="flex">
              <img
                src="/assets/users/profile_img.jpg"
                className="object-cover w-5 h-5 rounded-full "
              />
              <img
                src="/assets/posters/poster2.png"
                className="object-cover w-5 h-5 rounded-full "
              />
              <img
                src="/assets/users/profile_img.jpg"
                className="object-cover w-5 h-5 rounded-full "
              />
            </div>
            <p>+ 5 friends are watching</p>
          </div>
        </div>
        <img
          src="/assets/posters/poster1.png"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-10 left-20 text-white flex gap-4 flex-col">
          <p className="text-2xl ">Kantara - The Legend</p>
          <button className="bg-red-600 px-4 py-2 rounded-2xl w-28">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
