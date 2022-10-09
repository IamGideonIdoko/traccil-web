import { useState } from 'react';
import type { FC } from 'react';
import EyeVisible from '../../public/assets/svg/PasswordIcon.svg';
import type { OnboardInputProps } from '../../interfaces/props.interface';

const OnboardInput: FC<OnboardInputProps> = ({ type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-[470px] max-w-full mx-auto">
      <input
        className="rounded-lg w-full py-3 hover:border-1 hover:border-blue-500"
        required
        id={type}
        type={showPassword ? 'text' : 'password'}
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
