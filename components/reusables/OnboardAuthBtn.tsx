import type { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import GoogleIcon from '../../public/assets/svg/google.svg';
import FacebookIcon from '../../public/assets/svg/facebook.svg';

const OnboardAuthBtn: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    icon: 'google' | 'facebook';
  }
> = ({ children, icon, ...restProps }) => {
  return (
    <button
      {...restProps}
      type="button"
      className={`w-full lg:w-fit xl:w-7/12 border border-[color:var(--primary-color)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 mb-2 hover:bg-gray-100 inline-flex justify-center items-center ${
        restProps?.className ?? ''
      }`.trim()}
    >
      {icon === 'google' ? <GoogleIcon /> : icon === 'facebook' && <FacebookIcon />}{' '}
      <span className="ml-3">
        {children ?? `Sign up with ${icon === 'google' ? 'Google' : icon === 'facebook' ? 'Facebook' : ''}`.trim()}
      </span>
    </button>
  );
};

export default OnboardAuthBtn;
