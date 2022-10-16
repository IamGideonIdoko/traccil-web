import { useState } from 'react';
import type { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import EyeVisible from '../../public/assets/svg/PasswordIcon.svg';
import type { OnboardInputProps } from '../../interfaces/props.interface';

const OnboardInput: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & OnboardInputProps
> = ({ type, name, placeholder, ...restProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-[470px] max-w-full mx-auto">
      <input
        {...restProps}
        className="rounded-lg w-full py-3 hover:border-1 hover:border-blue-500"
        required
        type={showPassword && type === 'password' ? 'text' : type}
        name={name}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <label
          htmlFor="password"
          className="absolute right-0 mt-4 mr-3 cursor-pointer hover:text-blue-500"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <EyeVisible />
        </label>
      )}
    </div>
  );
};

export default OnboardInput;
