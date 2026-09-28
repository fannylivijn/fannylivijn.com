import { useRef, useState } from "react";
import { projects } from "../data/content.js";

// Video tiles show the `image` as a poster until clicked, then play inline.
function ProjectVideo({ src, poster, caption }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const video = videoRef.current;
    if (video.paused) video.play();
    else video.pause();
  }

  return (
    <button type="button" className="project-media project-video" onClick={toggle} aria-label={playing ? "Pause video" : `Play video: ${caption}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!playing && <span className="project-play">Play</span>}
    </button>
  );
}

export default function Projects() {
  return (
    <section className="projects">
      {projects.map((project) => (
        <figure key={project.video || project.image} className="project">
          {project.video ? (
            <ProjectVideo src={project.video} poster={project.image} caption={project.caption} />
          ) : (
            <img className="project-media" src={project.image} alt={project.caption} loading="lazy" />
          )}
          <figcaption>{project.caption}</figcaption>
        </figure>
      ))}
    </section>
  );
}
