import React from "react";
import hotel1 from "./Assets/Images/pexels-asadphoto-1024967.jpg";
import hotel2 from "../Componenets/Assets/Images/pexels-enginakyurt-2736379.jpg";
import hotel3 from "./Assets/Images/pexels-gapeppy1-2373201.jpg";
import hotel4 from "./Assets/Images/pexels-lio-voo-262755153-13857781.jpg";

const Footer = () => {
  return (
    <>
      <div className=" bg-blue-100 container-fluid mx-auto">
        <div className="text-center p-16">
          <p className="font-bold  text-xs">SECTION OVERLINE</p>
          <h3 className="mt-6 text-4xl font-serif">Contact US for details</h3>
          <button className="px-6 py-3 bg-blue-700 text-white font-bold mt-8">
            Contact us
          </button>
        </div>
      </div>
      <div className="flex justify-center space-x-24 bg-indigo-950 text-white pt-10 items-center">
        <div>
          <h6 className="font-bold text-lg">About Us</h6>
          <p className="w-full mt-2 text-slate-400 leading-8">
            With the regulatory issue setteled.<br/>they said,Google could get back
            to<br/> fousing on selling ads accross them.
          </p>
        </div>
        <div>
          <h6 className="font-bold text-lg">Recent Posts</h6>
          <p className="mt-2  text-slate-400">Round trip to Thassos</p>
          <p className="mt-2  text-slate-400">New Year's Eve Offer</p>
          <p className="mt-2  text-slate-400">2020 Summer Shedule</p>
        </div>
        <div>
          <div className="flex space-x-4">
            <img className="w-28 h-28" src={hotel1} />

            <img className="w-28 h-28" src={hotel2} />

            <img className="w-28 h-28" src={hotel3} />

            <img className="w-28 h-28" src={hotel4} />
          </div>
        </div>
      </div>
      <div className="bg-indigo-950 text-slate-300 container-fluid mx-auto">
        <nav>
            <ul className="flex space-x-6 justify-center py-7">
                <li>Home</li>
                <li>Location</li>
                <li>The Rooms</li>
                <li>Room single</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div>
            <p>Neve|Powered by Wordpress</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
