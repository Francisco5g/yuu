import React, { createContext, useContext, useRef, useState } from "react";
import { useLoggerContext } from "./loggerContext";

interface PlayerContextValus {
  play(song: Song): void;
}

const PlayerContext = createContext<PlayerContextValus>({} as PlayerContextValus);

interface Props {
  children: React.ReactNode;
}

export function PlayerContextProvider(props: Props) {
  const { logger } = useLoggerContext();

  const playerRef = useRef<HTMLAudioElement>(null);

  function play(song: Song) {
    logger(`Starting playing ${song.title}`, { type: "info" });

    if (playerRef.current) {
      const audio = playerRef.current;

      audio.src = song.url;
      audio.play();
    }
  }

  const value: PlayerContextValus = {
    play,
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
