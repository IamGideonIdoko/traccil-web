import React, { useRef, useState } from 'react';
import { css } from '@emotion/css';
import { isServer } from '../../helper/general.helper';
import OnboardClientSvg from '../../public/assets/svg/onboardclienticon.svg';
import OnboardWorkerSvg from '../../public/assets/svg/onboardworkericon.svg';

const OnboardRadio: React.FC<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string;
    icon: 'client' | 'worker';
    id: string;
  }
> = ({
  id,
  label,
  icon,
  onChange: onChangeFunc,
  onFocus: onFocusFunc,
  onBlur: onBlurFunc,
  checked: isChecked,
  ...restProps
}) => {
  Reflect.deleteProperty(restProps, 'className');
  Reflect.deleteProperty(restProps, 'style');
  const [, forceUpdate] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInputFocused = isServer ? false : inputRef.current === window.document.activeElement;
  const isInputChecked = isChecked || inputRef.current?.checked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeFunc && typeof onChangeFunc === 'function') {
      onChangeFunc(e);
    }
    forceUpdate((prev) => !prev);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocusFunc && typeof onFocusFunc === 'function') {
      onFocusFunc(e);
    }
    forceUpdate((prev) => !prev);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlurFunc && typeof onBlurFunc === 'function') {
      onBlurFunc(e);
    }
    forceUpdate((prev) => !prev);
  };

  return (
    <div className="inline-block w-[250px] max-w-full relative rounded-xl overflow-hidden">
      <label
        htmlFor={id}
        className={`border rounded-xl w-full h-full p-[22px] inline-flex text-center flex-col justify-center items-center ${
          isInputChecked || isInputFocused ? 'border-[color:var(--primary-color)]' : ''
        } ${isInputChecked ? 'border-2' : ''}`}
      >
        <span>
          {icon === 'worker' ? (
            <OnboardWorkerSvg className="inline-block" />
          ) : (
            icon === 'client' && <OnboardClientSvg className="inline-block" />
          )}
        </span>
        <span className="mt-[20px]">{label}</span>
      </label>
      <input
        {...restProps}
        style={{ color: 'var(--primary-color)' }}
        ref={inputRef}
        type="radio"
        name=""
        id={id}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`absolute top-3 right-3 ${css`
          &:focus {
            box-shadow: none !important;
          }
        `}`}
        checked={isChecked}
      />
    </div>
  );
};

export default OnboardRadio;
