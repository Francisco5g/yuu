import React, { createContext, useContext, useRef, useState } from "react";
import { useLoggerContext } from "./loggerContext";

interface PlayerContextValus {
  play(song: Song): void;
  currentSong: Song | null;
  playing: boolean;
}

const PlayerContext = createContext<PlayerContextValus>({} as PlayerContextValus);

interface Props {
  children: React.ReactNode;
}

export function PlayerContextProvider(props: Props) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [playing, setPlaying] = useState(false);

  const { logger } = useLoggerContext();

  const playerRef = useRef<HTMLAudioElement>(null);

  function play(song: Song) {
    logger(`Starting playing ${song.title}`, { type: "info" });

    if (song.title === currentSong?.title) {
      return;
    }

    if (playerRef.current) {
      const audio = playerRef.current;

      setCurrentSong(song);
      setPlaying(true);

      audio.src = song.url;
      audio.play();
    }
  }

  const value: PlayerContextValus = {
    play,
    currentSong,
    playing,
  };

  return (
    <PlayerContext.Provider value={value}>
      <audio ref={playerRef} />
      {props.children}
    </PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  return useContext(PlayerContext);
}
