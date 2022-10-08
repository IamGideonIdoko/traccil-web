import OnboardLayout from '../../components/layouts/OnboardLayout';
import OnboardRadio from '../../components/reusables/OnboardRadio';
import { useAppSelector } from '../../hooks/store.hook';
import Button from '../../components/reusables/OnboardButton';
import { NextPage } from 'next';
import Link from 'next/link';

const Signup: NextPage = () => {
  const userType = useAppSelector((state) => state.usertype.user);
  const isRadioSelected = useAppSelector((state) => state.usertype.isRadioSelected);

  return (
    <OnboardLayout>
      <div className="flex flex-col items-center mx-auto w-full relative top-[50%] translate-y-[-50%] space-y-4">
        <h1 className="text-center font-semibold text-2xl lg:text-3xl">Sign up as a client or workman</h1>
        <div className="flex flex-col justify-center space-y-3 lg:space-y-0 items-center w-full xl:w-7/12 lg:flex-row lg:space-x-5 mb-8">
          <OnboardRadio label="I am a client, in need of a workman" icon="client" id="client" />
          <OnboardRadio label="I am a workman, looking to connect with a client" icon="worker" id="workman" />
        </div>
        <div className="flex flex-col space-y-5 w-full lg:w-6/12">
          <Link href={userType === 'client' ? 'client/register' : 'workman/register'}>
            <Button type="button" title={`Sign up as a ${userType}`} disabled={isRadioSelected} />
          </Link>
          <p className="text-center text-sm text-gray-700">
            Already have an account?{' '}
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-700 hover:underline">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </OnboardLayout>
  );
};

export default Signup;
