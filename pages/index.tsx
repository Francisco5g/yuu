import type { NextPage } from "next";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MusicPlayer from "../components/MusicPlayer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Francisco Zhou | Yuu </title>
      </Head>

      {/* <MusicPlayer /> */}

      <header className="px-12 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Icon className="mr-2" icon="eos-icons:installing" fontSize={24} />
            <strong className="text-sm"> Yuu </strong>
          </div>

          <div>
            <Link passHref href="https://github.com/Francisco5g">
              <a>
                <Icon icon="akar-icons:github-fill" className="duration-200 text-gray hover:text-black" fontSize={24} />
              </a>
            </Link>
          </div>
        </div>

        <div className="mt-20"></div>

        <div className="flex flex-col items-center">
          <div>
            <figure className="relative w-24 h-24 ">
              <Image
                className="rounded-full"
                src="/user-avatar.jpg"
                objectFit="cover"
                layout="fill"
                alt="Avatar"
                priority
              />
            </figure>
          </div>

          <div className="mt-6"></div>

          <div className="text-center">
            <div className="text-black">
              <strong> Francisco Zhou </strong>&#x2022;<span className="text-black"> 15y </span>
            </div>

            <div className="mt-2"></div>

            <p>Front-end Developer | React </p>
          </div>
        </div>
      </header>

      <div className="mt-4 md:mt-16"></div>

      <main className="w-full flex justify-center md:justify-between flex-wrap md:px-8 lg:px-20">
        <div className="my-4">
          <figure className="relative w-72 md:w-[335px] lg:w-[400px] md:h-60">
            <Image src="/bg-images/gif1.gif" objectFit="cover" layout="fill" alt="Background image" priority />
          </figure>
        </div>
        <div className="my-4">
          <figure className="relative w-72 md:w-[335px] lg:w-[400px] h-48 md:h-60">
            <Image src="/bg-images/gif2.gif" objectFit="cover" layout="fill" alt="Background image" priority />
          </figure>
        </div>
        <div className="my-4">
          <figure className="relative w-72 md:w-[335px] lg:w-[400px] h-48 md:h-60">
            <Image src="/bg-images/gif3.gif" objectFit="cover" layout="fill" alt="Background image" priority />
          </figure>
        </div>
        <div className="my-4">
          <figure className="relative w-72 md:w-[335px] lg:w-[400px] h-48 md:h-60">
            <Image src="/bg-images/gif4.gif" objectFit="cover" layout="fill" alt="Background image" priority />
          </figure>
        </div>
      </main>
    </div>
  );
};

export default Home;
