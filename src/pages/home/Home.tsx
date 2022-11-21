/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import {headerHome,header} from "../../static/images";

export const Home = () => {
  return (<>
    <div className="flex justify-center " >
      <img className="w-full absolute z-1 " src={headerHome} />
      <div className="absolute z-2 flex-col desktop:w-30rem tablet:w-1/2 ">
      <img src={header} />
      <button className="w-full mt-1 py-4 rounded-4xl bg-pink hover:bg-green " >
        <div className="desktop:text-28px tablet:text-18px text-white font-bold">
        REGISTER NOW. FREE!
        </div>
      </button>
      </div>
    </div>
      </>);
};

export default Home;
