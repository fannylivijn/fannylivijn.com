import { Fragment } from "react";
import { profile, clients } from "../data/content.js";

export default function Home() {
  return (
    <>
      <section className="intro">
        <p className="intro-tagline">{profile.tagline}</p>
        <p className="intro-bio">{profile.bio}</p>
      </section>

      <section className="clients">
        <span className="clients-intro">{profile.clientsIntro}</span>
        {clients.map((client, i) => (
          <Fragment key={client.name}>
            <span className="client">
              {client.image && <img src={client.image} alt="" className="client-thumb" />}
              {client.name}
              {i < clients.length - 1 ? "," : ""}
            </span>{" "}
          </Fragment>
        ))}
      </section>
    </>
  );
}
