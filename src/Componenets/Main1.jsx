import React from "react";
import hotel1 from "./Assets/Images/pexels-asadphoto-1024967.jpg";
import hotel2 from "../Componenets/Assets/Images/pexels-enginakyurt-2736379.jpg";
import hotel3 from "./Assets/Images/pexels-gapeppy1-2373201.jpg";
import hotel4 from "./Assets/Images/pexels-lio-voo-262755153-13857781.jpg";

const Main1 = () => {
  return (
    <>
      <div className="mt-16 container mx-auto">
        <p className="font-bold text-center text-xs">SECTION OVERLINE</p>
        <h4 className="text-4xl font-semibold font-serif text-center mt-6">
          Image Gallery
        </h4>
        <div className="md:flex justify-center md:space-x-12 mt-16">
          <div>
            <img className="w-54 h-48" src={hotel1} />
          </div>
          <div>
            <img className="w-54 h-48" src={hotel2} />
          </div>
          <div>
            <img className="w-54 h-48" src={hotel3} />
          </div>
          <div>
            <img className="md:w-54 h-48" src={hotel4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main1;
