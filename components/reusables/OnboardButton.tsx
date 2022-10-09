import { DetailedHTMLProps, ButtonHTMLAttributes, FC } from 'react';
import type { OnboardButtonProps } from '../../interfaces/props.interface';

const OnboardButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & OnboardButtonProps
> = ({ children, type, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`bg-[color:var(--primary-color)] hover:opacity-90 text-white font-bold rounded-lg py-3 w-[470px] max-w-full mx-auto inline-block mt-5 disabled:bg-gray-300 disabled:cursor-not-allowed ${
        restProps?.className ?? ''
      }`}
      type={type}
    >
      {children}
    </button>
  );
};

export default OnboardButton;
