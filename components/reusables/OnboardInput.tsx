import EyeVisible from '../../public/assets/svg/PasswordIcon.svg';
import InputProps from '../../interfaces/input.interface';
import React, { useState } from 'react';

const OnboardInput: React.FC<InputProps> = ({ type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        className="rounded-lg w-full py-3 hover:border-1 hover:border-blue-500"
        required
        id={type}
        type={type === 'password' ? (showPassword ? 'text' : type) : type}
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
