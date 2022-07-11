import { Icon } from "@iconify/react";

export default function MusicPlayer() {
  return (
    <div className="absolute bottom-0 h-20 bg-slate-100 w-full">
      <audio src="/song/Grand Escape - A Weathering With You.mp3"></audio>

      <div>
        <Icon icon="bi:play-fill" />
      </div>
    </div>
  );
}
