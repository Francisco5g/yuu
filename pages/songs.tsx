import { useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Icon } from "@iconify/react";

import { songs as songsData } from "../data/songs.json";

import { usePlayerContext } from "../context/playerContext";

interface Props {
  songs: Song[];
}

const SongsPage: NextPage<Props> = (props) => {
  const [songs, setSongs] = useState<Props["songs"]>([]);

  const { play } = usePlayerContext();

  useEffect(() => {
    setSongs(props.songs);
  }, [props.songs]);

  return (
    <>
      <Head>
        <title> Songs | Francisco Zhou </title>
      </Head>

      <div className="mt-8 md:mt-10 lg:mt-12"></div>

      <main className="flex flex-col items-center px-4">
        {songs.map((item) => (
          <div
            key={Math.random()}
            className="flex w-full md:max-w-lg lg:max-w-4xl px-1 py-2 md:px-2 lg:px-4 hover:bg-slate-200 duration-200 cursor-pointer"
            onClick={() => play(item)}
          >
            <strong> {item.title} </strong>
          </div>
        ))}
      </main>
    </>
  );
};

export default SongsPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      songs: songsData,
    },
  };
};
