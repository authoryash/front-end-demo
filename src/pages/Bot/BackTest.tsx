import { FC, useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import ChartComponent from './ChartComponent';
import {
  DocumentIcon,
  DollarIcon,
  DownloadIcon,
  GraphBoxIcon,
  GraphLineIcon,
  InfoIconDark,
  PlusIcon,
  SyncIcon,
  UploadIcon
} from '@svgs';
// import { currencyListData, exchangeListData } from '../../constants/DummyData';
import useGetExchangesList from '../../hooks/react query/useGetExchangesList';
import Loader from '@components/Loader';
import { isEmpty } from 'lodash';
import useGetCurrenciesList from '../../hooks/react query/useGetCurrenciesList';

interface queryResponse {
  [key: string]: any;
  isLoading: boolean;
  isError: boolean;
}

const exchangeListOption: string[] = ['Binance', 'Etherum'];
const currentCurrencyListOption: string[] = ['BTC / USDT', 'ETH / USDT'];

const BackTest: FC = () => {
  // const data = { exchangeListData, currencyListData };
  const [percentage, setPercentage] = useState<string>('');
  const [backTestStartTime, setBackTestStartTime] = useState<Date>(new Date());
  const [backTestEndTime, setBackTestEndTime] = useState<Date>(new Date());

  const [investmentValue, setInvestmentValue] = useState<number | string>(2529.31);
  const [transactionCost, setTransactionCost] = useState<number | string>(0.3);
  const [stopLoss, setStopLoss] = useState<number | string>(0.1);
  const [stopGain, setStopGain] = useState<number | string>(5);
  const [usdVolume, setUsdVolume] = useState<number | string>(100000);

  const {
    isLoading: exchangeLoading,
    isError: exchangeIsError,
    data: exchangeList,
    error: exchangeError
  }: queryResponse = useGetExchangesList();
  const [currentExchange, setCurrentExchange] = useState<string>('Binance');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const {
    isLoading: currencyLoading,
    isError: currencyIsError,
    data: currencyList,
    error: currencyError
  }: queryResponse = useGetCurrenciesList({ currentExchange, pageNumber });
  const [currentCurrency, setCurrentCurrency] = useState<string>('BTC / USDT');

  useEffect(() => {
    if (!isEmpty(exchangeList)) setCurrentExchange(exchangeList?.[0]?.slug ?? '');
    if (!isEmpty(currencyList)) setCurrentCurrency(currencyList?.[0]?.slug ?? '');
    console.log({ exchangeLoading, exchangeError, exchangeIsError });
  }, [exchangeList, currencyList]);

  useEffect(() => {
    setPercentage('+22.33%');
    setPageNumber(1);
    console.log({ currentCurrency, currencyList, currencyError, currencyIsError });
  }, []);

  const isLoading = exchangeLoading || currencyLoading;

  // const isError = exchangeIsError || currencyIsError;
  // if (isError)
  //   return (
  //     <div className="text-center text-white font-black text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  //       {error?.message}
  //     </div>
  //   );

  return (
    <>
      {isLoading && <Loader />}
      <div className="p-4 xl:p-12 relative">
        <div className="trading info w-full mb-10">
          <div className="text-[12px] md:text-[17px] text-white font-light text-opacity-100 mb-5">
            Trading info
          </div>

          <div className="grid gap-x-6 sm:grid-cols-1 md:grid-cols-3">
            <div className="w-full  leading-5 ">
              <label className="text-white text-[14px] md:text-[16px]">Exchange</label>
              <select
                id="exchange"
                value={currentExchange}
                name="exchange"
                className="h-[38px] md:h-[55px] text-[14px] md:text-[16px] w-full bg-dropdownIcon bg-no-repeat bg-[98%] placeholder-white px-5 text-[#FFFFFF] mt-2  bg-guppieGreen bg-opacity-10 border border-solid border-guppieGreen rounded-[10px] focus:outline-none focus:ring-1 focus:border-guppieGreen-700 appearance-none [&>option]:text-black"
                onChange={(e) => {
                  setCurrentExchange(e.currentTarget.value);
                }}>
                {exchangeListOption?.map((exchangeValue: any) => (
                  <option value={exchangeValue} key={exchangeValue}>
                    {exchangeValue}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full  leading-5 ">
              <label className="text-white text-[14px] md:text-[16px]">Trading Pair</label>
              <select
                id="trading-pair"
                value={currentCurrency}
                name="trading-pair"
                className="h-[38px] md:h-[55px] text-[14px] md:text-[16px] w-full bg-dropdownIcon bg-no-repeat bg-[98%] placeholder-white px-5 text-[#FFFFFF] mt-2  bg-guppieGreen bg-opacity-10 border border-solid border-guppieGreen rounded-[10px] focus:outline-none focus:ring-1 focus:border-guppieGreen-700 appearance-none [&>option]:text-black"
                onChange={(e) => {
                  setCurrentCurrency(e.currentTarget.value);
                }}>
                {currentCurrencyListOption?.map((currencyValue: any) => (
                  <option value={currencyValue} key={currencyValue}>
                    {currencyValue}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full  leading-5 ">
              <label className="text-white text-[14px] md:text-[16px]">Investment value, USD</label>
              <input
                type="number"
                id="investment-value"
                name="investment-value"
                value={investmentValue}
                className="h-[38px] md:h-[55px] text-[14px] md:text-[16px]  w-full bg-infoIcon bg-no-repeat bg-[94%]  placeholder-white px-5 text-[#FFFFFF] mt-2  bg-guppieGreen bg-opacity-10 border border-solid border-guppieGreen rounded-[10px] focus:outline-none focus:ring-1 focus:border-guppieGreen-700 appearance-none"
                onChange={(e) => {
                  setInvestmentValue(e.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-x-4 lg:grid-cols-7 grid-cols-2 items-end mb-4">
          <div className="w-full leading-5">
            <label className="text-white text-[14px] md:text-[16px]">Start Date</label>
            <div className="flex box-border h-[38px] md:h-[55px] overflow-hidden items-center w-full border border-guppieGreen  bg-guppieGreen bg-opacity-10 rounded-[10px]">
              <input
                className="text-white font-normal text-[16px] p-1 h-full w-full bg-guppieGreen bg-opacity-10"
                type="date"></input>
            </div>
          </div>

          <div className="w-full leading-5">
            <label className="text-white text-[14px] md:text-[16px]">Finish Date</label>
            <div className="flex box-border h-[38px] md:h-[55px] overflow-hidden items-center w-full border border-guppieGreen  bg-guppieGreen bg-opacity-10 rounded-[10px]">
              <input
                className="text-white font-normal text-[16px] p-1 h-full w-full bg-guppieGreen bg-opacity-10"
                type="date"></input>
            </div>
          </div>

          <div className="w-full leading-5">
            <label className="text-white text-[14px] md:text-[16px]">USD volume</label>
            <div className="flex box-border overflow-hidden h-[38px] md:h-[55px] items-center w-full border border-guppieGreen  bg-guppieGreen bg-opacity-10 rounded-[10px]">
              <div className="dollar h-full flex items-center">
                <img src={DollarIcon} width={15} height={15} />
              </div>
              <input
                type="number"
                className="text-white font-normal text-[16px] p-1 h-full w-full bg-guppieGreen bg-opacity-10"
                value={usdVolume}
                onChange={(e) => {
                  setUsdVolume(e.currentTarget.value);
                }}
              />
            </div>
          </div>

          <div className="w-full leading-5 ">
            <label className="text-white text-[14px] md:text-[16px] ">Transaction cost (%)</label>
            <input
              type="number"
              id="transaction-cost"
              name="transaction-cost"
              value={transactionCost}
              className="h-[38px] md:h-[55px] text-[14px] md:text-[16px]  w-full placeholder-white px-5 text-[#FFFFFF] mt-2  bg-guppieGreen bg-opacity-10 border border-solid border-guppieGreen rounded-[10px] focus:outline-none focus:ring-1 focus:border-guppieGreen-700 appearance-none"
              onChange={(e) => {
                setTransactionCost(e.currentTarget.value);
              }}
            />
          </div>

          <div className="w-full leading-5">
            <label className="text-white text-[14px] md:text-[16px]">Stop loss(%)</label>
            <input
              type="number"
              id="stop-loss"
              name="stop-loss"
              value={stopLoss}
              className="h-[38px] md:h-[55px] text-[14px] md:text-[16px]  w-full placeholder-white px-5 text-[#FFFFFF] mt-2  bg-guppieGreen bg-opacity-10 border border-solid border-guppieGreen rounded-[10px] focus:outline-none focus:ring-1 focus:border-guppieGreen-700 appearance-none"
              onChange={(e) => {
                setStopLoss(e.currentTarget.value);
              }}
            />
          </div>

          <div className="w-full leading-5">
            <label className="text-white text-[14px] md:text-[16px]">Stop gain(%)</label>
            <input
              type="number"
              id="stop-gain"
              name="stop-gain"
              value={stopGain}
              className="h-[38px] md:h-[55px] text-[14px] md:text-[16px]  w-full placeholder-white px-5 text-[#FFFFFF] mt-2  bg-guppieGreen bg-opacity-10 border border-solid border-guppieGreen rounded-[10px] focus:outline-none focus:ring-1 focus:border-guppieGreen-700 appearance-none"
              onChange={(e) => {
                setStopGain(e.currentTarget.value);
              }}
            />
          </div>

          <div className=" col-end-1 col-start-3 text-center lg:col-span-1">
            <button className="rounded-[10px] bg-guppieGreen w-full md:w-full p-4 mt-[30px] font-medium">
              Run backtest
            </button>
          </div>
        </div>

        <div className="my-auto text-17xl text-white font-light text-opacity-100">
          Backtest Summary
        </div>

        <div className="overflow-auto scrollbar">
          <table className="text-white w-full text-[10px] sm:text-[12px] xl:text-15xl table-auto border-separate border-spacing-2 min-w-[550px]">
            <tbody>
              <tr>
                <td rowSpan={6}>
                  <p className="flex text-darkWhite md:pl-2">
                    Return <img src={InfoIconDark} className="w-[15.27px] h-[14px] ml-2" />
                  </p>
                  <span className="text-[#2AFD84] text-[12px] md:text-[22px] font-bold block mt-2 md:mt-10">
                    {percentage}
                  </span>
                </td>
                <td rowSpan={2} className="font-light text-darkWhite">
                  <p className="flex text-[10px] md:text-[13px] xl:text-15xl">
                    Starting Capital <img src={InfoIconDark} className="w-[14px] h-[14px] ml-2" />
                  </p>
                </td>
                <td className="text-right font-semibold">1.00 ETH</td>
                <td className="text-darkWhite">Trades</td>
                <td className="text-right font-semibold">296</td>
              </tr>
              <tr>
                <td className="text-right text-darkWhite">=$2,622.70 USD</td>
                <td className="text-darkWhite">Total FTM Bought</td>
                <td className="text-right font-semibold">70838.89343395924</td>
              </tr>
              <tr>
                <td rowSpan={2} className="font-light text-darkWhite">
                  <p className="flex text-[10px] md:text-[13px] xl:text-15xl">
                    Ending Capital <img src={InfoIconDark} className="w-[14px] h-[14px] ml-2" />
                  </p>
                </td>
                <td className="text-right font-semibold">1.22329984 ETH</td>
                <td className="text-darkWhite">Total FTM Sold</td>
                <td className="text-right font-semibold">70838.89343395924</td>
              </tr>
              <tr>
                <td className="text-right text-darkWhite">=$3,208.35 USD</td>
                <td className="text-darkWhite flex">
                  Backtest Completed <img src={InfoIconDark} className="ml-2.5" />
                </td>
                <td className="text-right font-semibold">02/11/2022 2:02:18 PM</td>
              </tr>
              <tr>
                <td rowSpan={2} className="font-light text-darkWhite">
                  <p className="flex text-[10px] md:text-[13px] xl:text-15xl">
                    Profit/Loss <img src={InfoIconDark} className="w-[14px] h-[14px] ml-2" />
                  </p>
                </td>
                <td className="text-right font-semibold">0.22329984 ETH</td>
                <td className="text-darkWhite">Backtest Window Start</td>
                <td className="text-right font-semibold">
                  <DateTimePicker
                    onChange={setBackTestStartTime}
                    value={backTestStartTime}
                    format="MM/dd/y HH:mm:ss a"
                    clearIcon={null}
                    calendarIcon={null}
                    className="datePickerAppearance"
                    disableCalendar={true}
                    disableClock={true}
                    maxDate={new Date()}
                  />
                </td>
              </tr>
              <tr>
                <td className="text-right text-darkWhite">=$585.65 USD</td>
                <td className="text-darkWhite flex">
                  Backtest Window End <img src={InfoIconDark} className="ml-2.5" />
                </td>
                <td className="text-right font-semibold">
                  <DateTimePicker
                    onChange={setBackTestEndTime}
                    value={backTestEndTime}
                    format="MM/dd/y HH:mm:ss a"
                    clearIcon={null}
                    calendarIcon={null}
                    className="datePickerAppearance"
                    disableCalendar={true}
                    disableClock={true}
                    maxDate={new Date()}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full border-t border-darkWhite mt-10 pt-10">
          <div className="w-full flex justify-end [&>img]:mr-5">
            <img src={PlusIcon} />
            <img src={UploadIcon} />
            <img src={DocumentIcon} />
            <img src={GraphLineIcon} />
            <img src={GraphBoxIcon} />
            <img src={SyncIcon} />
            <img src={DownloadIcon} />
          </div>
        </div>
        <div className="mt-[22px] h-[183px] mb-10">
          <ChartComponent />
        </div>
      </div>
    </>
  );
};

export default BackTest;
