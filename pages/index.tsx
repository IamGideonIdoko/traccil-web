import { Button } from 'flowbite-react';
import type { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '../hooks/store.hook';
import { decrement, increment } from '../store/slice/counter.slice';

const Home: NextPage = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 text-center">
        Oga Repair Landing Page: {counter}
      </h1>
      <div className="flex justify-center gap-2">
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
};

export default Home;
