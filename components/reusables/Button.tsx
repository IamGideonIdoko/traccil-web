import { DetailedHTMLProps, ButtonHTMLAttributes, FC } from 'react';
import ButtonProps from '../../interfaces/button.interface';

const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps> = ({
  title,
  type,
}) => {
  return (
    <div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg py-3 w-full mt-5" type={type}>
        {title}
      </button>
    </div>
  );
};

export default Button;
