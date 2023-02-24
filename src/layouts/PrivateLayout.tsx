import { FC, ReactElement, ReactNode, useEffect, useState } from 'react';
import { InfoIcon, MenuIcon, UserIcon } from '@svgs';
import ReactFlagsSelect from 'react-flags-select';

const HeaderMenuOptions = ['Dashboard', 'Portfolio', 'Trade', 'Bots', 'Markets', 'News'];

const PrivateLayout: FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  const [country, setCountry] = useState<string>('US');
  const [online, setOnline] = useState<boolean>(true);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('Bots');

  useEffect(() => {
    setOnline(true);
  }, []);

  return (
    <div className="bg-common bg-no-repeat bg-cover bg-center bg-fixed h-full w-full min-h-screen">
      <nav className="w-full bg-navGreen cus-navbar  shadow h-[65px]">
        <div className="w-full flex items-center px-4 md:px-8 h-full justify-between">
          <div className=" w-7/12 h-full flex justify-between item-center max-[992px]:hidden">
            <ul className="flex font-normal text-base text-white my-auto h-[65px] align-items-center max-[992px]:hidden">
              {HeaderMenuOptions.map((option: string) => (
                <li
                  className={`px-3 flex align-items-center h-[65px] py-4 ${
                    currentPage === option ? 'active font-semibold' : ''
                  }`}
                  key={option}
                  onClick={() => {
                    setCurrentPage(option);
                  }}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={MenuIcon}
            className="hidden max-[992px]:block py-4"
            onClick={() => {
              setShowMobileMenu((prevState) => !prevState);
            }}
          />
          <div className="flex w-5/12 justify-end">
            <div className="w-fit">
              <ul className="flex font-normal text-base text-white my-auto align-items-center">
                <li className="mr-6 text-xs my-auto hidden sm:flex">
                  <div
                    className={`w-[12px] h-[12px] rounded-full my-auto mr-2 ${
                      online ? 'bg-guppieGreen' : 'bg-red'
                    }`}></div>
                  {online ? 'Connected' : 'Disconnected'}
                </li>
                <li className="mr-6 flex">
                  <div className="cus-flags">
                    <ReactFlagsSelect
                      className="bg-transparent [&>button]:text-white [&>button:after]:border-t-white [&>button:focus:after]:border-b-white [&>ul]:text-black pb-0 [&>button]:h-full"
                      selected={country}
                      onSelect={setCountry}
                      customLabels={{ US: 'USD' }}
                    />
                  </div>
                  <img src={InfoIcon} alt="info" className="w-[20px] h-[20px] mr-[20px] my-auto" />
                </li>
                <li className="flex align-center">
                  <span className="hidden md:flex">Username</span>
                  <img src={UserIcon} className="md:pl-2 usericon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {showMobileMenu && (
        <div className="w-full bg-navGreen shadow">
          <ul className="font-normal text-base text-white my-auto hidden max-[992px]:block">
            {HeaderMenuOptions.map((option: string) => (
              <li
                className={`mr-6 ${currentPage === option ? 'active' : ''}`}
                key={option}
                onClick={() => {
                  setCurrentPage(option);
                }}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="p-4 md:p-7">{children}</div>
    </div>
  );
};

export default PrivateLayout;
