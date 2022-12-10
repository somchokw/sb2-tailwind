import {
  logo,
  brands2,
  asset8,
  asset9,
  asset10,
  asset131,
} from "../../../static/images";
export const HomeContent4 = () => {
  return (
    <div className="bg-dark-blue ">
      <div className="flex flex-col items-center">
        <div className="mt-12 flex flex-col justify-center w-full md:w-2/3 ">
          <div className="flex flex-row">
            <img alt="logo" src={logo} className="w-1/2" />
            <h1 className="font-medium text-white w-2/3 ml-4 lg:text-4xl">
              Is organized through the collaboration of
            </h1>
          </div>
          <div className="mt-10 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div className="px-4 text-center ">
              <img alt="asset8" src={asset8} />
              <p className="mt-4 text-xs text-white">
                seoul@sustainablebrands.kr
              </p>
            </div>
            <div className="px-4 text-center">
              <img alt="asset9" src={asset9} />
              <p className="mt-4 text-xs text-white">
                sb-asiapacific@sustainablebrands.jp
              </p>
            </div>
            <div className="px-4 text-center ">
              <img alt="asset10" src={asset10} />
              <p className="mt-4 text-xs text-white">sofia@acaciablue.com</p>
            </div>
            <div className="px-4 text-center">
              <img alt="asset131" src={asset131} />
              <p className="mt-4 text-xs text-white">
                Infosbthailand@beingsustain.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="flex flex-col items-center ">
          <div>
            <h1 className="font-bold  text-white text-[32px] md:text-54px ">
              ABOUT
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-lightPink text-center text-[32px] md:text-54px ">
              Sustainable Brands
            </h1>
          </div>
          <div className="border-b-1px border-lightPink w-3/5 "></div>
        </div>
        <div className="flex mt-5 md:mt-12">
          <div className="w-4/12 -ml-4 pr-4 hidden md:flex justify-end items-center bg-white rounded-tr-30px rounded-br-30px h-60">
            <img alt="brands2" src={brands2} width="50%" />
          </div>
          <div className="w-full p-4 text-center md:text-start md:w-1/2">
            <p className="font-normal text-[18px] text-white md:text-xl">
              Sustainable Brands is the world’s leading community of innovators
              for brands that are designing the future of the business world.
              Since 2006, its mission has been to inspire, engage, and equip
              today’s businesses and their managers for long and short-term
              prosperity by taking control of a better future. We provide online
              articles and conversations by topic, world-renowned events and
              regional events, a comprehensive e-learning library and discussion
              groups to facilitate community learning and commitment throughout
              the year.
            </p>
            <div className="my-2"></div>
            <p className="font-normal text-[18px] text-white md:text-xl">
              Sustainable Brands is a subsidiary of Sustainable Life Media whose
              headquarters are located in California, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
