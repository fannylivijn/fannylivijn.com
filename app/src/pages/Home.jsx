import { Fragment } from "react";
import { profile, clients } from "../data/content.js";

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

export default function Home() {
  return (
    <>
      <section className="intro">
        <p className="intro-tagline">{profile.tagline}</p>
        <p className="intro-bio">{profile.bio}</p>
      </section>

      <section className="clients">
        <span className="clients-intro">{profile.clientsIntro}</span>
        {clients.map((client, i) => {
          const content = (
            <>
              <ClientThumb client={client} />
              {client.name}
              {i < clients.length - 1 ? "," : ""}
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
