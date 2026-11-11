import { Fragment, useLayoutEffect, useState } from "react";
import { profile, clients, taglineNotes } from "../data/content.js";

// Splits the tagline into plain text and hoverable words (those listed in taglineNotes).
function taglineParts(tagline) {
  const parts = [];
  let rest = tagline;
  while (rest) {
    let next = null;
    taglineNotes.forEach((note, index) => {
      const at = rest.indexOf(note.word);
      if (at !== -1 && (!next || at < next.at)) next = { at, index, word: note.word };
    });
    if (!next) {
      parts.push(rest);
      break;
    }
    if (next.at > 0) parts.push(rest.slice(0, next.at));
    parts.push({ index: next.index, word: next.word });
    rest = rest.slice(next.at + next.word.length);
  }
  return parts;
}

// A client's thumbnail: a silent looping video (like a GIF) if `video` is set, otherwise an image.
function ClientThumb({ client }) {
  if (client.video) {
    return (
      <video
        className="client-thumb"
        src={client.video}
        poster={client.image}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }
  if (client.image) return <img src={client.image} alt="" className="client-thumb" />;
  return null;
}

// Makes the space under the bio exactly as tall as the lowest (tilted) text needs,
// so the brand list sits just below it, and nudges texts placed `near` a brand
// sideways so they never run off the page edge.
function layoutNotes() {
  const area = document.querySelector(".tagline-notes");
  if (area) {
    area.style.height = "";
    if (getComputedStyle(area).position === "relative") {
      const top = area.getBoundingClientRect().top;
      const bottoms = [...area.querySelectorAll(".tagline-note")]
        .filter((note) => getComputedStyle(note).position === "absolute")
        .map((note) => note.getBoundingClientRect().bottom - top);
      if (bottoms.length) area.style.height = `${Math.max(...bottoms) + 10}px`;
    }
  }

  const gutter = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--gutter")) || 0;
  document.querySelectorAll(".tagline-note--near").forEach((note) => {
    const pageWidth = document.documentElement.clientWidth;
    note.style.translate = "0";
    const box = note.getBoundingClientRect();
    let shift = 0;
    if (box.right > pageWidth - gutter) shift = pageWidth - gutter - box.right;
    if (box.left + shift < gutter) shift = gutter - box.left;
    note.style.translate = `${shift}px 0`;
  });
}

export default function Home() {
  const [active, setActive] = useState(null);

  useLayoutEffect(() => {
    layoutNotes();
    document.fonts?.ready.then(layoutNotes);
    window.addEventListener("resize", layoutNotes);
    return () => window.removeEventListener("resize", layoutNotes);
  }, []);

  return (
    <>
      <section className="intro">
        <p className="intro-tagline">
          {taglineParts(profile.tagline).map((part, i) =>
            typeof part === "string" ? (
              <Fragment key={i}>{part}</Fragment>
            ) : (
              <span
                key={i}
                className={"tagline-word" + (active === part.index ? " is-active" : "")}
                tabIndex={0}
                onMouseEnter={() => setActive(part.index)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(part.index)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(part.index)}
              >
                {part.word}
              </span>
            )
          )}
        </p>
        <p className="intro-bio">{profile.bio}</p>
      </section>

      <div className="tagline-notes" aria-live="polite">
          {taglineNotes.map((note, i) =>
            note.near ? null : (
              <p
                key={note.word}
                className={"tagline-note" + (active === i ? " is-visible" : "")}
                tabIndex={0}
                style={{ "--left": note.left, top: note.top, "--tilt": `${note.tilt || 0}deg` }}
              >
                {note.text}
              </p>
            )
          )}
      </div>

      <section className="clients">
        <span className="clients-intro">{profile.clientsIntro}</span>
        {clients.map((client, i) => {
          const content = (
            <>
              <ClientThumb client={client} />
              {client.name}
              {i < clients.length - 1 ? "," : ""}
              {taglineNotes.map((note, n) =>
                note.near === client.name ? (
                  <span
                    key={note.word}
                    className={"tagline-note tagline-note--near" + (active === n ? " is-visible" : "")}
                    tabIndex={0}
                    style={{ "--tilt": `${note.tilt || 0}deg` }}
                  >
                    {note.text}
                  </span>
                ) : null
              )}
            </>
          );
          return (
            <Fragment key={client.name}>
              {client.link ? (
                <a className="client" href={client.link} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <span className="client">{content}</span>
              )}{" "}
            </Fragment>
          );
        })}
      </section>
    </>
  );
}
