import { reel } from "../data/content.js";

// Shows a YouTube/Vimeo embed, a local video file, or a placeholder if neither is set.
// The frame is vertical 9:16, like an Instagram reel. A local video starts muted and
// loops (like a reel in the feed); the controls let visitors turn the sound on.
export default function Reel() {
  return (
    <section className="reel">
      <div className="reel-frame">
        {reel.embed ? (
          <iframe
            src={reel.embed}
            title={reel.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : reel.video ? (
          <video
            src={reel.video}
            poster={reel.poster || undefined}
            autoPlay
            muted
            loop
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <span className="reel-placeholder">Reel coming soon</span>
        )}
      </div>
      {reel.caption && <p className="reel-caption">{reel.caption}</p>}
    </section>
  );
}
