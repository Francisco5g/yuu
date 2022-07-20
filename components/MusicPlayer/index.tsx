import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { usePlayerContext } from "../../context/playerContext";

export default function MusicPlayer() {
  const { currentSong, playing } = usePlayerContext();
  const router = useRouter();

  const show = router.asPath === "/songs";

  return show ? (
    <div className="fixed bottom-0 h-16 md:h-20 bg-slate-100 w-full flex justify-center py-2">
      <audio src={currentSong?.url}></audio>

      <div className="flex flex-col items-center justify-center">
        {/* {currentSong?.title} */}

        <div>
          <button>
            {/* {playing ? <Icon icon="bi:pause" /> : <Icon icon="bi:play-fill" className="w-12" width="38px" />} */}
            <Icon icon={playing ? "bi:pause" : "bi:play-fill"} />
          </button>
        </div>

        <input className="w-48 md:w-72" type="range" />
      </div>
    </div>
  ) : (
    <></>
  );
}
