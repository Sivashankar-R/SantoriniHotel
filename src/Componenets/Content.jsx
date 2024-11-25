import React from "react";

const Content = () => {
  return (
    <div className="container md:flex md:space-x-8 ml:0 md:ml-28  mx-auto">
      <div className="md:w-1/2 p-10 mt-9">
        <h3 className="font-semibold text-4xl mb-10">
          Welcome to our luxury
          <br />
          Villa!
        </h3>
        <p className="border-2 w-70 border-yellow-500"></p>
        <p className="tracking-loose leading-8 mt-6 text-slate-700">
          Kale chips knausgaard mustache blog fashion axe selfies
          salvia.Glutten-free post-ironic deep v typewriter.Cloud bread flannel
          poke,flexitarian viny!<br/>iphone church-key sharman williamsburg kitsch
          beard.
        </p>
      </div>
      <div className="w-screen md:w-5/12 bg-indigo-950 px-10 py-14 mt-14 ">
        <h3 className="text-white text-4xl font-serif font-semibold">Check availablity</h3>
        <form className="mt-5">
          <div>
            <label className="text-white">Name</label><br/>
            <input className="w-full p-2 bg-transperent border-2 outline-none bg-indigo-950 mt-2" type="text" placeholder="Your Name"/>
          </div>
          <div className="mt-3">
            <label className="text-white">Email</label><br/>
            <input className="w-full p-2 bg-transperent border-2 outline-none bg-indigo-950 mt-2" type="text" placeholder="Your Email" />
          </div>
          <div className="mt-3">
            <label className="text-white">Message</label><br/>
            <textarea className="w-full pb-20 bg-transperent border-2 outline-none bg-indigo-950 mt-2" placeholder="Please add your requested booking dates here"></textarea>
          </div>
          <button className="px-5 bg-blue-700 text-white font-bold py-2 mt-2">REQUEST AVAILABLITY</button>
        </form>
      </div>
    </div>
  );
};

export default Content;
