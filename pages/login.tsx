import { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <div>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 text-center">Login Page</h1>
      <button
        type="button"
        className="text-white bg-[#f0ff00] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Default
      </button>
    </div>
  );
};

export default Login;
