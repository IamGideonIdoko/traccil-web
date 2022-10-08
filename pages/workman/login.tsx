import OnboardAuthBtn from '../../components/reusables/OnboardAuthBtn';
import OnboardLayout from '../../components/layouts/OnboardLayout';
import Input from '../../components/reusables/OnboardInput';
import Button from '../../components/reusables/OnboardButton';
import { NextPage } from 'next';
import Link from 'next/link';

const LoginWorkman: NextPage = () => {
  return (
    <OnboardLayout>
      <div className="flex flex-col items-center mx-auto w-full relative top-[50%] translate-y-[-50%] space-y-4">
        <h1 className="text-center font-semibold text-2xl lg:text-3xl">Log in to OgaRepair</h1>
        <div className="flex flex-col justify-center items-center w-full xl:w-7/12 lg:flex-row lg:space-x-5">
          <OnboardAuthBtn icon="google" />
          <OnboardAuthBtn icon="facebook" />
        </div>
        <h1 className="text-gray-400">-OR-</h1>
        <form className="flex flex-col space-y-5 w-full lg:w-6/12">
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <Button type="submit" title="Create Account" />
          <p className="text-center text-sm text-gray-700">
            Already have an account?{' '}
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-700 hover:underline">Login</a>
            </Link>
          </p>
        </form>
      </div>
    </OnboardLayout>
  );
};

export default LoginWorkman;
