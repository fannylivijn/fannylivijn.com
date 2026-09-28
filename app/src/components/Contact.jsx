import { contact } from "../data/content.js";

export default function Contact() {
  return (
    <aside className="contact">
      {contact.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className={i === 0 ? "contact-tilt" : undefined}
        >
          {link.label}
        </a>
      ))}
    </aside>
  );
}
