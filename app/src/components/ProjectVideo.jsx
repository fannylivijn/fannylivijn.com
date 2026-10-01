import { useRef, useState } from "react";

// Click-to-play video. Shows the `poster` image (or the first frame) until clicked.
// The label reads "Play" while paused and "Pause" (on hover) while playing.
export default function ProjectVideo({ src, poster, label, className = "" }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const video = videoRef.current;
    if (video.paused) video.play();
    else video.pause();
  }

  return (
    <button
      type="button"
      className={`project-video ${className}`}
      onClick={toggle}
      aria-label={playing ? "Pause video" : `Play video: ${label}`}
    >
      <video
        ref={videoRef}
        src={poster ? src : `${src}#t=0.1`}
        poster={poster || undefined}
        playsInline
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <span className={playing ? "project-play is-playing" : "project-play"}>
        {playing ? "Pause" : "Play"}
      </span>
    </button>
  );
}
