import { Icon } from "@iconify/react";

export default function MusicPlayer() {
  return (
    <div className="absolute">
      <audio src="/song/Grand Escape - A Weathering With You.mp3"></audio>

      <div>
        <Icon icon="bi:play-fill" />
      </div>
    </div>
  );
}
