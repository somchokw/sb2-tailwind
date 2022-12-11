import { SponsorShow } from "../../components";
import { headerHome, header } from "../../static/images";
import {
  HomeContent1,
  HomeContent2,
  HomeContent3,
  HomeContent4,
} from "./components";

export const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <img
          alt="headerhome"
          className="w-full z-1 h-[300px] md:h-full"
          src={headerHome}
        />
        <div className="absolute z-2 flex-col w-[200px] md:w-1/2 lg:w-30rem ">
          <img alt="header" src={header} />
          <button className="w-full mt-1 py-2 px-6 rounded-4xl bg-lightPink hover:bg-green ">
            <div className="md:text-18px text-white font-bold lg:text-28px ">
              REGISTER NOW. FREE!
            </div>
          </button>
        </div>
      </div>
      <HomeContent1 />
      <HomeContent2 />
      <div className="flex flex-col px-5 md:px-20 lg:items-center">
        <HomeContent3 />
        <div className="mt-6 text-center">
          <button
            onClick={() => window.location.assign("/speaker")}
            className="font-bold bg-lightGreen text-white rounded-37px text-center py-2 px-10 sm:text-[28px] text-[28px]"
          >
            SEE MORE SPEAKERS
          </button>
        </div>
        <div className="mt-10">
          <SponsorShow />
        </div>
      </div>
      <HomeContent4 />
    </div>
  );
};

export default Home;
