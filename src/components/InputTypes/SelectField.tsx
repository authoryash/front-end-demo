import { FC, Dispatch, SetStateAction, ChangeEvent } from 'react';

export interface SelectOptionMenu {
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: Dispatch<SetStateAction<any>>;
  options?: Array<number | string>;
}

const SelectOptionField: FC<SelectOptionMenu> = ({ id, name, value, onChange, options }) => {
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(e.currentTarget.value);
  };

  return (
    <select
      id={id}
      value={value}
      name={name}
      className="h-[38px] md:h-[52px] text-[14px] md:text-[20px] w-full bg-numericon bg-no-repeat bg-[98%] placeholder-white px-2 text-[#FFFFFF] mt-2  bg-guppieGreen bg-opacity-10 border border-solid border-guppieGreen rounded-[10px] focus:outline-none focus:ring-1 focus:border-guppieGreen-700 appearance-none [&>option]:text-black"
      onChange={handleOnChange}>
      {options?.map((value: any) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default SelectOptionField;
