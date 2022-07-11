import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const bgImages = ["gif1.gif", "gif2.gif", "gif3.gif", "gif4.gif"];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Francisco Zhou | Yuu </title>
      </Head>

      <div className="mt-3"></div>

      <main className="w-full flex justify-center md:justify-between flex-wrap md:px-8 lg:px-20">
        {bgImages.map((item) => (
          <div key={item} className="my-4">
            <figure className="relative w-72 md:w-[335px] lg:w-[400px] h-48 md:h-60">
              <Image
                src={`/bg-images/${item}`}
                objectFit="cover"
                layout="fill"
                alt="Background image"
                priority
                draggable="false"
              />
            </figure>
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
