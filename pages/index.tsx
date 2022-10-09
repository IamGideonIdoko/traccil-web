import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="leading-tight text-5xl mt-0 mb-2 text-[color:var(--primary-color)] text-center uppercase font-bold">
        OgaRepair
      </h1>
      <div className="flex gap-4">
        <Link href="/login">
          <a className="hover:underline">Log in</a>
        </Link>
        <span className="text-gray-400">|</span>
        <Link href="/signup">
          <a className="hover:underline">Sign up</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
