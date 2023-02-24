import { ChangeEvent, FC, Dispatch, SetStateAction } from 'react';

type InputType = 'text' | 'email' | 'password' | 'number';

interface InputProps {
  identity?: string;
  type?: InputType;
  value?: string | number;
  onChange?: Dispatch<SetStateAction<any>>;
}

const InputField: FC<InputProps> = ({ identity, type, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.currentTarget.value);
  };

  return (
    <input
      id={identity}
      name={identity}
      type={type}
      value={value}
      className="h-[38px] md:h-[52px] text-[14px] md:text-[20px] w-full placeholder-white  text-[#FFFFFF] mt-2 px-2  bg-guppieGreen bg-opacity-10 border border-solid border-guppieGreen rounded-[10px] focus:outline-none focus:ring-1 focus:border-guppieGreen-700"
      onChange={handleChange}
    />
  );
};

export default InputField;
