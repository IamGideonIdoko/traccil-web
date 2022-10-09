import OnboardAuthBtn from '../../components/reusables/OnboardAuthBtn';
import OnboardLayout from '../../components/layouts/OnboardLayout';
import OnboardInput from '../../components/reusables/OnboardInput';
import OnboardButton from '../../components/reusables/OnboardButton';
import type { NextPage } from 'next';
import Link from 'next/link';

const WorkerLogin: NextPage = () => {
  return (
    <OnboardLayout>
      <div className="flex flex-col items-center mx-auto w-full relative top-[50%] translate-y-[-50%] space-y-4">
        <h1 className="text-center font-semibold text-2xl lg:text-3xl mb-[20px]">Log in to OgaRepair</h1>
        <div className="flex flex-col justify-center items-center w-[470px] max-w-full mx-auto xl:w-7/12 lg:flex-row lg:space-x-5">
          <OnboardAuthBtn icon="google" />
          <OnboardAuthBtn icon="facebook" />
        </div>
        <h1 className="text-gray-400">- OR -</h1>
        <form className="flex flex-col space-y-5 w-full lg:w-6/12">
          <OnboardInput type="email" name="email" placeholder="Email" />
          <OnboardInput type="password" name="password" placeholder="Password" />
          <OnboardButton type="submit" className="!mt-[40px]">
            Log in
          </OnboardButton>
          <p className="text-center text-sm text-gray-700">
            Don&apos;t have an account?{' '}
            <Link href="/worker/signup">
              <a className="text-blue-500 hover:text-blue-700 hover:underline">Sign up</a>
            </Link>
          </p>
        </form>
      </div>
    </OnboardLayout>
  );
};

export default WorkerLogin;
