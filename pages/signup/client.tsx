import OnboardAuthBtn from '../../components/reusables/OnboardAuthBtn';
import OnboardLayout from '../../components/layouts/OnboardLayout';
import Button from '../../components/reusables/Button';
import Input from '../../components/reusables/Input';
import { NextPage } from 'next';
import Link from 'next/link';

const Client: NextPage = () => {
  return (
    <OnboardLayout>
      <div className="flex flex-col items-center mx-auto w-full mt-7 lg:mt-8 xl:mt-10 translate-y-6/12 space-y-4">
        <h1 className="text-center font-semibold text-2xl lg:text-3xl">Sign up to connect with clients</h1>
        <p className="text-center text-sm text-gray-700">
          Looking to hire clients?{' '}
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-700 hover:underline">Sign up as a client</a>
          </Link>
        </p>
        <div className="flex flex-col justify-center items-center w-full xl:w-7/12 lg:flex-row lg:space-x-5">
          <OnboardAuthBtn icon="google" />
          <OnboardAuthBtn icon="facebook" />
        </div>
        <h1 className="text-gray-400">-OR-</h1>
        <form className="flex flex-col space-y-5 w-full lg:w-6/12">
          <Input type="text" name="full_name" placeholder="Full Name" />
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

export default Client;
