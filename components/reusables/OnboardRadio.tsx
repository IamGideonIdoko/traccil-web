import { useState, useRef } from 'react';
import type { DetailedHTMLProps, FC, InputHTMLAttributes, ChangeEvent, FocusEvent } from 'react';
import OnboardClientSvg from '../../public/assets/svg/onboardclienticon.svg';
import OnboardWorkerSvg from '../../public/assets/svg/onboardworkericon.svg';
import { isServer } from '../../helper/general.helper';
import { css } from '@emotion/css';

const OnboardRadio: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string;
    icon: 'client' | 'worker';
    id: 'client' | 'worker';
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
  const [, forceUpdate] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInputFocused = isServer ? false : inputRef.current === window.document.activeElement;
  const isInputChecked = isChecked || inputRef.current?.checked;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChangeFunc && typeof onChangeFunc === 'function') {
      onChangeFunc(e);
    }
    forceUpdate((prev) => !prev);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (onFocusFunc && typeof onFocusFunc === 'function') {
      onFocusFunc(e);
    }
    forceUpdate((prev) => !prev);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (onBlurFunc && typeof onBlurFunc === 'function') {
      onBlurFunc(e);
    }
    forceUpdate((prev) => !prev);
  };

  return (
    <div className={`inline-block w-[250px] max-w-full relative rounded-xl overflow-hidden`}>
      <label
        htmlFor={id}
        className={`border-2 rounded-xl w-full h-full p-[22px] inline-flex text-center flex-col justify-center items-center cursor-pointer ${
          isInputChecked || isInputFocused ? 'border-[color:var(--primary-color)]' : 'border-gray-100'
        } ${isInputChecked ? 'border-2' : ''}`}
      >
        <span>
          {icon === 'worker' ? (
            <OnboardWorkerSvg className="inline-block" />
          ) : (
            icon === 'client' && <OnboardClientSvg className="inline-block" />
          )}
        </span>
        <span className="mt-[20px]">
          {label ||
            (icon === 'client'
              ? `I am a client, in need of a worker`
              : icon === 'worker'
              ? 'I am a worker, in need of a client'
              : '')}
        </span>
      </label>
      <input
        {...restProps}
        style={{ color: 'var(--primary-color)' }}
        ref={inputRef}
        type="radio"
        name="onboardradio"
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
