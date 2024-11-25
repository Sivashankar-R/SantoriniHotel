
import starImg from "./Assets/vecteezy_5-star-rating-review-star-png-transparent_9663133.png";
import userImg from "./Assets/pexels-sozutova-13058772.jpg";
import userImg2 from "./Assets/pexels-kemi-lo-292692392-14567360.jpg";


const Content2 = () => {
  return (
    <div className="bg-blue-100 container-fluid mx-auto">
      <div className=" md:flex mt-20 justify-center md:space-x-16 item-center py-16">
        <div className=" w-50 py-5 px-10">
          <div className="flex justify-center">
            <img className="md:w-20" src={starImg} alt="star img" />
          </div>
          <p className=" md:w-50">
            "...This is the most comfortable house I ever lived in.Thanks for
            all the
            <br /> great service and family atmosphere.Definitly recommended for{" "}
            <br />
            <span className="md:ms-36">short or long stays!"</span>
          </p>
          <div className="flex justify-center mt-7">
            <img
              className="md:w-12 h-12 rounded-full"
              src={userImg}
              alt="user-1img"
            />
          </div>
          <p className="text-center mt-3">Jame Elisa</p>
        </div>
        <div className=" md:w-50 py-5 px-10">
          <div className="flex justify-center">
            <img className="md:w-20" src={starImg} alt="star img" />
          </div>
          <p className=" md:w-50 ">
            "...This is the most comfortable house I ever lived in.Thanks for
            all the
            <br /> great service and family atmosphere.Definitly recommended for{" "}
            <br />
            <span className="md:ms-44">short or long stays!"</span>
          </p>
          <div className="flex justify-center mt-7">
            <img
              className="w-12 h-12 rounded-full"
              src={userImg2}
              alt="user-1img"
            />
          </div>
          <p className="text-center mt-3">Jacqueline</p>
        </div>
      </div>
    </div>
  );
};

export default Content2;
