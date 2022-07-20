import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import TabNavigator from "../components/TabNavigator";
import { LoggerContextProvider } from "../context/loggerContext";
import { PlayerContextProvider } from "../context/playerContext";
import MusicPlayer from "../components/MusicPlayer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoggerContextProvider>
      <PlayerContextProvider>
        <Header />
        <TabNavigator />

        <Component {...pageProps} />

        {/* <MusicPlayer /> */}
      </PlayerContextProvider>
    </LoggerContextProvider>
  );
}

export default MyApp;
