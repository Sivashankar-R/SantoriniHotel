import React from "react";
import car from "./Assets/Images/pexels-yunszyveli-10131851.jpg";
import yoga from "./Assets/Images/pexels-cottonbro-4056535.jpg";
import food from "./Assets/Images/pexels-pixabay-33242.jpg";


const Main3 = () => {
  return (
    <div className="container mx-auto my-16">
      <p className="font-bold text-center text-xs">SECTION OVERLINE</p>
      <h4 className="text-5xl font-semibold font-serif text-center mt-6">
        Additional Services
      </h4>
      <div className="flex justify-center space-x-24 mt-24">
        <div>
          <img src={car} className="w-80 h-60" />
          <p className="font-bold ms-32 text-xs mt-4">SERVICES</p>
          <p className="mt-4 w-96 text-slate-700">
            Kale chips knausgaard mustache blog fashion <br />
            axe selfies salvia.Glutten-free post-ironic deep
            <br />
            <span className="ms-28">typewriter.</span>
          </p>
        </div>
        <div>
          <img src={yoga} className="w-80 h-60" />
          <p className="font-bold ms-32 text-xs mt-4">SERVICES</p>
          <p className="mt-4 w-96 text-slate-700">
            Kale chips knausgaard mustache blog fashion <br />
            axe selfies salvia.Glutten-free post-ironic deep
            <br />
            <span className="ms-28">typewriter.</span>
          </p>
        </div>
        <div>
          <img src={food} className="w-80 h-60" />
          <p className="font-bold ms-32 text-xs mt-4">SERVICES</p>
          <p className="mt-4 w-96 text-slate-700">
            Kale chips knausgaard mustache blog fashion <br />
            axe selfies salvia.Glutten-free post-ironic deep
            <br />
            <span className="ms-28">typewriter.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main3;
