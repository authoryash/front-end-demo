import { FC, ReactElement, useState } from 'react';
import { BotsLogo } from '@images';
import { BackTestIcon, CopyIcon, DeleteIcon, InfoIconBig, Rightarrow, StartLiveIcon } from '@svgs';
import BackTest from './BackTest';
import Parameters from './Parameters';

const subOptionArray: string[] = ['Parameters', 'Backtest', 'Live Mode'];

const SubPagesObject: Record<string, ReactElement> = {
  Parameters: <Parameters />,
  Backtest: <BackTest />
};

const Bots: FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('Parameters');

  return (
    <>
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 md:hidden">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm text-white">
              Bots /
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <a href="#" className="ml-1 text-sm  text-white">
                My Bots /
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="ml-1 text-sm text-white">Bot&apos;s Name</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="rounded-[20px] w-full lg:flex py-6 new-gradient justify-between">
        <div className="botTitleLeft flex relative pl-6 items-center">
          <img src={BotsLogo} height={82} className="" />
          <div className="ml-4">
            <span className="flex font-semibold text-white md:text-[25px] leading-[30.26px]">
              <h4 className="flex-nowrap whitespace-nowrap mr-3">{"BOT'S NAME"}</h4>
              <p className="font-normal text-neutral-500 flex items-center">
                v2.0{' '}
                <img
                  src={InfoIconBig}
                  width={25}
                  height={25}
                  className="ml-[10px] my-auto"
                  alt="info"
                />
              </p>
            </span>

            <p className="text-[15px] text-neutral-500 font-normal leading-[18.15px] my-[5px] hidden md:block">
              {"BOT'S NAME"}
            </p>
            <p className="flex items-center text-white text-17xl ">
              <span className="hidden md:inline-block">{'Bot Status:'}</span>
              <span className="md:pl-[22px] flex mt-1 md:mt-0">
                <div className="w-[12px] h-[12px] rounded-full my-auto mr-2 bg-darkWhite"></div>
                <p className="">{'Stopped'}</p>
              </span>
            </p>
          </div>
        </div>
        <div className="buttons grid grid-cols-2 mt-4 md:mt-:0 lg:mr-28 px-4 lg:p-4 gap-4 relative">
          <button className="text-guppieGreen text-[15px] font-semibold items-center border-2 justify-center border-guppieGreen rounded-[5px] py-1 md:py-3 md:px-12 flex">
            BACKTEST <img src={BackTestIcon} className="ml-2" />
          </button>

          <button className="text-black text-[15px]  bg-guppieGreen font-semibold rounded-[5px] flex items-center justify-center py-1 md:py-3 md:px-12">
            START LIVE <img src={StartLiveIcon} width={17} height={17} className="ml-2" />
          </button>
        </div>
      </div>
      <div className="mt-4 md:flex">
        <div className="md:w-5/12 lg:w-3/12">
          <div className="w-full p-6  rounded-[20px] new-gradient h-[335px]">
            <p className="text-white mb-4 relative">My Configurations</p>
            <div className="flex w-full border rounded-[5px] border-guppieGreen py-2.5 px-2 justify-between relative listbg">
              <div className="flex">
                <img src={BotsLogo} width={40} height={40} />
                <div className="ml-2.5">
                  <p className="flex font-semibold text-white text-15xl leading-[18.15px] py-0.5">
                    {"BOT'S NAME"}
                  </p>
                  <span className="flex py-0.5">
                    <div className="w-2.5 h-2.5 rounded-full my-auto mr-2 bg-darkWhite"></div>
                    <p className="text-white text-[11px] leading-[13.13px]">{"BOT'S NAME"}</p>
                  </span>
                </div>
              </div>
              <div className="flex">
                <img src={CopyIcon} width={14} height={14} />
                <img src={DeleteIcon} width={14} height={14} className="ml-4" />
              </div>
            </div>
          </div>
          <div className="w-full text-white mt-5 mb-2">How does it work?</div>
          <div className="text-darkWhite text-[15px] w-auto">
            This strategy is based on the MACD indicator.It buys when the MACD line crosses above
            the signal line, and sells when defined exit condition is met.
          </div>
          <div className="w-auto text-white mt-5 text-[15px] flex items-center">
            <span>Learn More</span> <img src={Rightarrow} className="arrow-left ml-2 mt-0" />
          </div>
        </div>
        <div className="md:w-7/12 lg:w-9/12 mt-4 md:mt-0 md:ml-4 rounded-[20px] new-gradient">
          <div className="w-full h-[61px] border-b rounded-t-[20px] bg-guppieGreen bg-opacity-10 border-[#2aa1ad33] relative">
            <ul className="absolute flex bottom-0 xl:ml-10 px-5 xl:px-0 font-normal text-white text-[12px] md:text-17xl [&>li]:mr-9 [&>li:last-child]:mr-0 leading-[20.57px] [&>li]:pb-[11px]">
              {subOptionArray.map((item: string) => (
                <li
                  key={item}
                  className={`${currentSection === item ? 'border-b-2 border-guppieGreen' : ''}`}
                  onClick={() => {
                    setCurrentSection(item);
                  }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-[calc(100%-61px)] border-b rounded-b-[20px] relative">
            {SubPagesObject[currentSection]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bots;
