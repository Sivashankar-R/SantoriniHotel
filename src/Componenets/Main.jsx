// import React from "react";
// import userImg from "./Assets/Images/pexels-gapeppy1-2373201.jpg";
// import { FaStar,FaClock  } from "react-icons/fa";
// import { FaPerson } from "react-icons/fa6";

const Main = () => {
  return (
    <>
      <div className="bg-indigo-950 text-white py-16 px-10 container-fluid mx-auto">
        <div>
          <p className="font-bold text-sm text-center">SECTION OVERLINE</p>
          <h4 className="font-serif text-4xl text-center font-bold mt-8">
            Our Rooms
          </h4>
          <p className="border border-yellow-600 md:w-9/12 mt-8 md:ms-24"></p>
          <div className="mt-10 grid md:grid-cols-2 ">
            <div className="w-10/12 hover:shadow-2xl pb-5">
              {/* <img className="w-full h-96" src={userImg} /> */}
              <p className="font-bold text-center">2 BEDS</p>
              <h2 className="font-semibold text-2xl text-center font-sans mt-2">
                Hera
              </h2>
              <p className="w-full text-center mt-2">
                Kale chips knausguaard mustache blog fashion axe selfies
                salvia.Gluten-free
                <br /> post-ironic deep v typewriter.
              </p>
              <div className="flex justify-center mt-4">
                <button className="px-4 py-3 bg-blue-600 font-bold">
                  View Room
                </button>
              </div>
            </div>
            <div className="w-10/12 hover:shadow-2xl pb-5">
              {/* <img className="w-full h-96" src={userImg} /> */}
              <p className="font-bold text-center">4 BEDS</p>
              <h2 className="font-semibold text-2xl font-sans text-center mt-2">
                Dimitra
              </h2>
              <p className="w-full text-center mt-2">
                Kale chips knausguaard mustache blog fashion axe selfies
                salvia.Gluten-free
                <br /> post-ironic deep v typewriter.
              </p>
              <div className="flex justify-center mt-4">
                <button className="px-4 py-3 bg-blue-600 font-bold">
                  View Room
                </button>
              </div>
            </div>
            <div className="w-10/12 mt-10  hover:shadow-2xl pb-5">
              {/* <img className="w-full h-96" src={userImg} /> */}
              <p className="font-bold text-center">2 BEDS</p>
              <h2 className="font-semibold text-2xl text-center font-sans mt-2">
                Appolo
              </h2>
              <p className="w-full text-center mt-2">
                Kale chips knausguaard mustache blog fashion axe selfies
                salvia.Gluten-free
                <br /> post-ironic deep v typewriter.
              </p>
              <div className="flex justify-center mt-4">
                <button className="px-4 py-3 bg-blue-600 font-bold">
                  View Room
                </button>
              </div>
            </div>
            <div className="w-10/12 mt-10 hover:shadow-2xl pb-5">
              {/* <img className="w-full h-96" src={userImg} /> */}
              <p className="font-bold text-center">4 BEDS</p>
              <h2 className="font-semibold text-2xl text-center font-sans mt-2">
                Athena
              </h2>
              <p className="w-full text-center mt-2">
                Kale chips knausguaard mustache blog fashion axe selfies
                salvia.Gluten-free
                <br /> post-ironic deep v typewriter.
              </p>
              <div className="flex justify-center mt-4">
                <button className="px-4 py-3 bg-blue-600 font-bold">
                  View Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 text-sm p-20 container-fluid mx-auto">
        <p className="font-bold text-center">SECTION OVERLINE</p>
        <h4 className="text-4xl font-semibold font-serif text-center mt-4">
          WHy Choose US
        </h4>
        <div className="md:flex justify-around mt-20">
          <div className="flex flex-col items-center">
            {/* <FaStar className="text-yellow-500 text-5xl flex"/> */}
            <h6 className="text-2xl font-serif font-semibold text-slate-600 mt-3">5 Star Chef</h6>
            <p className="text-extrabold text-slate-600 mt-4">Intelligents hell of sriacha,bio food bushwick<br/>paelo man bun thundercats,viral fanny pack.</p>
          </div>
          <div  className="flex flex-col items-center">
            {/* <FaClock className="text-yellow-500 text-5xl"/> */}
            <h6 className="text-2xl font-serif font-semibold text-slate-600 mt-3">24-hours service</h6>
            <p className="text-extrabold text-slate-600 mt-4">Intelligents hell of sriacha,bio food bushwick<br/>paelo man bun thundercats,viral fanny pack.</p>
          </div>
          <div  className="flex flex-col items-center">
            {/* <FaPerson className="text-yellow-500 text-5xl"/> */}
            <h6 className="text-2xl font-serif font-semibold text-slate-600 mt-3">24-hours service</h6>
            <p className="text-extrabold text-slate-600 mt-4">Intelligents hell of sriacha,bio food bushwick<br/>paelo man bun thundercats,viral fanny pack.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
