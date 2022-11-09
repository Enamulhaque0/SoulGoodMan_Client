import React from "react";
import soulGoodMan from "../../../../assest/soulGoodMan.jpg";

const PersonBanner = () => {
  return (
    <div className="hero w-full">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="">
          <img className="overlay" src={soulGoodMan} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 py-20">
          <h1 className="lg:text-6xl text-4xl text-center font-extrabold my-2 p-1">
            <span className="bg-green-600 ">So</span>ul <br />
            Good M<span className="bg-green-600 ">an</span>
          </h1>

          <p className="text-center text-1xl lg:text-3xl italic my-5 font-semibold">corporate lawyer</p>

          <p className="font-light">
            I have a loyalty that runs in my bloodstream, when I lock into
            someone or something, you can't get me away from it because commit
            that thoroughly.
          </p>
          <button className="btn-ghost w-24 btn-outline btn-secondary my-6 py-1 px-1 italic ">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonBanner;
