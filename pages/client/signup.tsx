import OnboardAuthBtn from '../../components/reusables/OnboardAuthBtn';
import OnboardLayout from '../../components/layouts/OnboardLayout';
import OnboardButton from '../../components/reusables/OnboardButton';
import OnboardInput from '../../components/reusables/OnboardInput';
import type { NextPage } from 'next';
import Link from 'next/link';

const ClientSignup: NextPage = () => {
  return (
    <OnboardLayout>
      <div className="flex flex-col items-center mx-auto w-full relative top-[50%] translate-y-[-50%] space-y-3">
        <h1 className="text-center font-semibold text-2xl lg:text-3xl mb-[10px]">Sign up to hire workers</h1>
        <p className="text-center text-sm text-gray-700 !mb-3">
          Looking for clients?{' '}
          <Link href="/worker/signup">
            <a className="text-blue-500 hover:text-blue-700 hover:underline">Sign up as a worker</a>
          </Link>
        </p>
        <div className="flex flex-col justify-center items-center w-full xl:w-7/12 lg:flex-row lg:space-x-5">
          <OnboardAuthBtn icon="google" />
          <OnboardAuthBtn icon="facebook" />
        </div>
        <h1 className="text-gray-400">- OR -</h1>
        <form className="flex flex-col space-y-5 w-full lg:w-6/12">
          <OnboardInput type="text" name="full_name" placeholder="Full Name" />
          <OnboardInput type="email" name="email" placeholder="Email" />
          <OnboardInput type="password" name="password" placeholder="Password" />
          <OnboardButton type="submit" className="!mt-[40px]">
            Create Account
          </OnboardButton>
          <p className="text-center text-sm text-gray-700">
            Already have an account?{' '}
            <Link href="/client/login">
              <a className="text-blue-500 hover:text-blue-700 hover:underline">Log in</a>
            </Link>
          </p>
        </form>
      </div>
    </OnboardLayout>
  );
};

export default ClientSignup;
