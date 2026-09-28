// All site text and images live here — edit this file to make the site yours.
// Put your own images in app/public/images/ and point `image` at them.

export const profile = {
  name: "Your Name",
  tagline: "Designer, Developer, Storyteller and Something Else Entirely.",
  bio: "I am a designer and developer specialized in digital products and brand. My work combines strategy and craftsmanship to shape the way people interact with ideas and spaces.",
  clientsIntro: "Brands and projects I've worked with:",
};

// `image` is optional — clients without one render as text only.
export const clients = [
  { name: "Studio One", image: "images/client-1.svg" },
  { name: "Brand Two" },
  { name: "Magazine Three", image: "images/client-2.svg" },
  { name: "Agency Four" },
  { name: "Gallery Five", image: "images/client-3.svg" },
  { name: "Label Six" },
  { name: "Collective Seven" },
  { name: "Festival Eight", image: "images/client-4.svg" },
  { name: "Museum Nine" },
  { name: "Records Ten", image: "images/client-5.svg" },
  { name: "Company Eleven" },
  { name: "Journal Twelve", image: "images/client-6.svg" },
  { name: "Foundation Thirteen" },
];

// Add `video: "videos/my-film.mp4"` to a project to make it a click-to-play video
// tile; its `image` is then shown as the poster. Put videos in app/public/videos/.
// Keep them short and compressed (MP4/H.264, under ~10 MB) so the page stays fast.
export const projects = [
  { image: "images/project-1.svg", caption: "Client One — Art direction and copywriting for a spring campaign." },
  { image: "images/project-2.svg", caption: "Client Two — Editorial feature, concept and interview." },
  { image: "images/project-3.svg", caption: "Self-initiated — Product release, production and art direction." },
  { image: "images/project-4.svg", caption: "Client Three — Fashion show content strategy and live direction." },
  { image: "images/project-5.svg", caption: "Client Four — Collection conceptualization and social strategy." },
  { image: "images/project-6.svg", caption: "Client Five — Brand identity and launch assets." },
  { image: "images/project-7.svg", caption: "Client Six — Exhibition curation and catalogue texts." },
  { image: "images/project-8.svg", caption: "Client Seven — Website design and development." },
  { image: "images/project-9.svg", caption: "Client Eight — Ongoing content direction." },
];

export const services = [
  "Editing",
  "Campaign strategy",
  "Creative content development",
  "Creative strategy & direction",
  "Conceptualization",
  "Brand identity",
  "Trend forecasting",
  "Copywriting",
  "Interviewing",
  "Brand activations",
  "Social media consultancy",
  "Cultural research",
  "PR & communications",
  "Artist curation",
  "Storytelling",
];

export const contact = [
  { label: "DM me", href: "https://www.instagram.com/yourhandle/" },
  { label: "Look deeper", href: "https://www.linkedin.com/in/yourprofile/" },
  { label: "Write to me", href: "mailto:hello@example.com" },
];
