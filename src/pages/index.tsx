import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='font-bold'>
      <h1>Hello, World!</h1>
      <div className='w-[100px] h-[100px] bg-black'></div>
    </div>
  );
};

export default Home;
