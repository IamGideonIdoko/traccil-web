import { DetailedHTMLProps, ButtonHTMLAttributes, FC } from 'react';
import ButtonProps from '../../interfaces/button.interface';

const OnboardButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps
> = ({ title, type, ...restProps }) => {
  return (
    <div>
      <button
        {...restProps}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg py-3 w-full mt-5 disabled:bg-gray-300 disabled:cursor-not-allowed"
        type={type}
      >
        {title}
      </button>
    </div>
  );
};

export default OnboardButton;
