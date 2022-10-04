import Image from 'next/image';
import React from 'react';
import type { OnboardLayoutProps } from '../../interfaces/props.interface';

const OnboardLayout: React.FC<OnboardLayoutProps> = ({ children }) => {
  return (
    <div
      className={`w-screen h-screen bg-[color:var(--primary-color)] flex bg-onboard-pattern bg-[length:23rem] bg-repeat`}
    >
      <div className="hidden w-1/4 sm:flex justify-center items-center relative overflow-hidden">
        <div className="text-center">
          <div className="h-[length:140px] w-[length:140px] backdrop-blur bg-white/30 rounded-full flex justify-center items-center">
            <Image
              src="/assets/img/ogarepair-logo.png"
              alt="OgaRepair"
              width={120}
              height={120}
              className="max-w-full pointer-events-none"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mt-1 pl-1">OgaRepair</h1>
        </div>

        {/* hands */}
        <div className="absolute top-[-6rem] left-[-2.5rem]">
          <Image
            src="/assets/img/onboard-left-hand.png"
            alt=""
            width={283}
            height={543}
            className="max-w-full pointer-events-none scale-[0.8]"
          />
        </div>
        <div className="absolute bottom-[-8rem] right-[-3rem]">
          <Image
            src="/assets/img/onboard-right-hand.png"
            alt=""
            width={283}
            height={543}
            className="max-w-full pointer-events-none scale-[0.8]"
          />
        </div>
      </div>
      <div className="bg-white w-full sm:w-3/4 sm:rounded-bl-3xl sm:rounded-tl-3xl p-6">{children}</div>
    </div>
  );
};

export default OnboardLayout;
