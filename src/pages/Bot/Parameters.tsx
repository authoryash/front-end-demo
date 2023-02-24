import { FC, useState } from 'react';
import { InfoSmallIcon } from '@svgs';
import InputField from '@components/InputTypes/InputField';
import SelectOptionField from '@components/InputTypes/SelectField';

// need to add formik in this component

const InfoIcon: FC = () => <img src={InfoSmallIcon} className="ml-4" />;

const exitTypeOptions: string[] = ['PT', 'TP'];
const bandLongExitOptions: string[] = ['Long100', 'Long200', 'Long300'];
const bandShortExitOptions: string[] = ['Short100', 'Short200'];
const timeIntervalOptions: string[] = ['1 Day', '2 Day'];
const orderSizeOptions: number[] = [25797, 45678];

const Parameters: FC = () => {
  const [longBandEntry, setLongBandEntry] = useState<string>('Long 100 = 0.997');
  const [orderSize, setOrderSize] = useState<number>(25797);
  const [entryPriceOffset, setEntryPriceOffset] = useState<string>('');
  const [timeInterval, setTimeInterval] = useState<string>('');
  const [instrumentEntryLevels, setInstrumentEntryLevels] = useState<string>('');
  const [exitType, setExitType] = useState<string>('PT');
  const [bandLongExit, setBandLongExit] = useState<string>('Long100');
  const [bandShortExit, setBandShortExit] = useState<string>('Short100');
  const [stopLoss, setStopLoss] = useState<number>(100);
  const [profitTarget, setProfitTarget] = useState<number>(4.25);

  return (
    <div className="params relative p-5 xl:p-10">
      <div className="general-settings w-full mb-8">
        <div className="text-[#FFFFFF] text-[12px] md:text-[17px] mb-5">General Settings</div>
        <div className="setting grid sm:grid-cols-2 gap-x-10 gap-y-4 md:gap-y-6">
          <div className="w-full">
            <label className="text-[#FFFFFF] text-[14px] md:text-[17px]  font-normal">
              Long Band Entry Inputs
            </label>
            {/* need explanation for the value */}

            <InputField
              identity="long-band-entry-inputs"
              type="text"
              value={longBandEntry}
              onChange={setLongBandEntry}
            />
          </div>

          <div className="w-full">
            <label className="text-[#FFFFFF] text-[14px] md:text-[17px] font-normal">
              Order Size in USD
            </label>

            <SelectOptionField
              name="order-size"
              id="order-size"
              value={orderSize}
              onChange={setOrderSize}
              options={orderSizeOptions}
            />
          </div>

          <div className="w-full">
            <label className="text-white text-[14px] md:text-[17px] font-normal">
              Entry Price Offset
            </label>
            <InputField
              identity="entry-price-offset"
              type="number"
              value={entryPriceOffset}
              onChange={setEntryPriceOffset}
            />
          </div>

          <div className="w-full">
            <label className="text-white text-[14px] md:text-[17px] font-normal">
              Time Interval
            </label>

            <SelectOptionField
              name="time-interval"
              id="time-interval"
              value={timeInterval}
              options={timeIntervalOptions}
              onChange={setTimeInterval}
            />
          </div>
        </div>
      </div>

      <div className="strategy w-full mb-8">
        <div className="text-[#FFFFFF] text-[12px] md:text-[17px] mb-5">Strategy Settings</div>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 md:gap-y-6">
          <div className="w-full">
            <label className="text-white text-[14px] md:text-[17px] font-normal">
              Instrument and Entry Levels
            </label>
            <InputField
              identity="instrument-entry-levels"
              type="text"
              value={instrumentEntryLevels}
              onChange={setInstrumentEntryLevels}
            />
          </div>

          <div className="w-full">
            <label className="text-white text-[14px] md:text-[17px] font-normal">Exit Type </label>

            <SelectOptionField
              name="exit-type"
              id="exit-type"
              value={exitType}
              options={exitTypeOptions}
              onChange={setExitType}
            />
          </div>

          <div className="w-full">
            <label className="text-white text-[14px] md:text-[17px] font-normal flex items-center">
              Band Long Exit
              <span>
                <InfoIcon />
              </span>
            </label>

            <SelectOptionField
              name="band-long-exit"
              id="band-long-exit"
              value={bandLongExit}
              options={bandLongExitOptions}
              onChange={setBandLongExit}
            />
          </div>

          <div className="w-full">
            <label className="text-white text-[14px] md:text-[17px]  font-normal flex items-center">
              Band Short Exit
              <span>
                <InfoIcon />
              </span>
            </label>
            <SelectOptionField
              name="band-short-exit"
              id="band-short-exit"
              value={bandShortExit}
              onChange={setBandShortExit}
              options={bandShortExitOptions}
            />
          </div>
        </div>
      </div>

      <div className="profile w-full">
        <div className="text-white mb-5 text-[12px] md:text-[17px] ">Profit & Risk Management</div>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 md:gap-y-6">
          <div className="w-full">
            <label className="text-white md:text-[17px] font-normal flex items-center">
              Profit Target
              <span>
                <InfoIcon />
              </span>
            </label>
            <InputField identity="profit-target" value={profitTarget} onChange={setProfitTarget} />
          </div>

          <div className="w-full">
            <label className="text-white md:text-[17px] font-normal flex items-center">
              Stop Loss
              <span>
                <InfoIcon />
              </span>
            </label>
            <InputField
              identity="stop-loss"
              type="number"
              value={stopLoss}
              onChange={setStopLoss}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parameters;
