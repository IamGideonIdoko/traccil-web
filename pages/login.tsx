import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import OnboardLayout from '../components/layouts/OnboardLayout';
import OnboardRadio from '../components/reusables/OnboardRadio';
import OnboardButton from '../components/reusables/OnboardButton';

const Login: NextPage = () => {
  const [selectedUserType, setSelectedUsertype] = useState<'client' | 'worker' | undefined>('client');

  const handleUserTypeSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target as typeof e.target & { id: 'client' | 'worker' };
    setSelectedUsertype(id);
  };

  return (
    <OnboardLayout>
      <div className="flex flex-col items-center mx-auto w-full relative top-[50%] translate-y-[-50%]">
        <h1 className="text-center font-semibold text-2xl lg:text-3xl mb-[40px]">Log in to OgaRepair</h1>
        <div className="flex flex-col justify-center space-y-3 lg:space-y-0 items-center w-full xl:w-7/12 lg:flex-row lg:space-x-5 mb-8">
          <OnboardRadio
            onChange={handleUserTypeSelect}
            checked={selectedUserType === 'client'}
            label="Client"
            icon="client"
            id="client"
          />
          <OnboardRadio
            onChange={handleUserTypeSelect}
            checked={selectedUserType === 'worker'}
            label="Worker"
            icon="worker"
            id="worker"
          />
        </div>
        <div className="flex flex-col items-center space-y-5 w-full lg:w-6/12 px-1">
          <Link href={selectedUserType === 'client' ? '/client/login' : '/worker/login'}>
            <OnboardButton type="button" disabled={!selectedUserType}>
              {`Log in ${selectedUserType ? `as a ${selectedUserType}` : ''}`.trim()}
            </OnboardButton>
          </Link>
          <p className="text-center text-sm text-gray-700">
            Don&apos;t have an account?{' '}
            <Link href="/signup">
              <a className="text-blue-500 hover:text-blue-700 hover:underline">Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </OnboardLayout>
  );
};

export default Login;
