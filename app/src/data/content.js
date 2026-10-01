// All site text and images live here — edit this file to make the site yours.
// Put your own images in app/public/images/ and point `image` at them.

export const profile = {
  name: "Fanny Livijn",
  tagline: "Creative, Content Strategist & Art Director | Where music, fashion and social meet",
  bio: "I am a designer and developer specialized in digital products and brand. My work combines strategy and craftsmanship to shape the way people interact with ideas and spaces.",
  clientsIntro: "Brands and projects I’ve worked with:",
};

// Add `image: "images/some-file.jpg"` to a client to show a small thumbnail
// before its name (hover zooms it). Clients without one render as text only.
// Add `video: "videos/some-clip.mp4"` for a silent looping video thumbnail instead
// (keep it a few seconds and small). Add `link: "https://..."` to make the name clickable.
export const clients = [
  { name: "Spotify Sweden", image: "images/spotify-sweden.jpg" },
  { name: "Tinder" },
  { name: "Zara Larsson – You Love Who You Love", image: "images/zara-larsson.jpg" },
  { name: "Lofted Spirits" },
  { name: "Prune Imports", image: "images/client-3.svg" },
  { name: "Bardstown" },
  { name: "Green River" },
  { name: "Way Out West Festival x Yung Lean", image: "images/way-out-west.jpg" },
  { name: "Estrid" },
  { name: "Robyn – Sexistential Album", video: "videos/robyn-sexistential.mp4" },
  { name: "Epidemic Sound" },
  { name: "Daniel Wellington", video: "videos/daniel-wellington.mp4" },
  { name: "Klarna" },
  { name: "Spotify Mexico" },
  { name: "Spotify Global" },
  { name: "Vogue Scandinavia", image: "images/vogue-scandinavia.jpg" },
  { name: "ELLE Magazine", image: "images/elle-magazine-2.jpg" },
  { name: "Plan International" },
  { name: "YouTube Shorts" },
  { name: "Ann-Sofie Back – Go As You Please Exhibition x Liljevalchs", image: "images/ann-sofie-back.jpg" },
  { name: "TIER", image: "images/client-2.svg" },
  { name: "Shore Studio Series" },
  { name: "The North Face x One Show Club", image: "images/client-4.svg" },
  { name: "Petra Fagerström x SFC Presentation", image: "images/petra-fagerstrom-sfc.jpg" },
  { name: "Robyn x H&M Rabanne Collection", video: "videos/robyn-hm-rabanne.mp4" },
  { name: "Arket" },
  { name: "Shopbop" },
];

// Add `video: "videos/my-film.mp4"` to a project to make it a click-to-play video
// tile; its `image` is then shown as the poster. Put videos in app/public/videos/.
// Keep them short and compressed (MP4/H.264, under ~10 MB) so the page stays fast.
//
// Each project also gets its own page (click it on Selected projects). By default
// the title and services come from the caption ("Title — services"). Optional extras:
//   services: ["Styling", "Art direction"]   one line each under "Services:"
//   with: "Name, Name"                        shown in italics as "With: …"
//   gallery: [                                the images/videos on the project page
//     { image: "images/a.jpg", caption: "Music video still", size: "large" },
//     { video: "videos/b.mp4", caption: "BTS", size: "small" },
//   ]                                         size is "large" or "small"
export const projects = [
  { image: "images/project-1.svg", caption: "Spotify Sweden — Conceptualization, content direction and social media strategy for TikTok channel" },
  {
    image: "images/project-2.svg",
    caption: "Zara Larsson — Music video, styling",
    services: ["Music video", "Styling"],
    gallery: [
      { image: "images/zara-larsson.jpg", caption: "“You Love Who You Love” music video still", size: "large" },
      { image: "images/project-2.svg", caption: "Placeholder — add your image", size: "small" },
      { image: "images/project-7.svg", caption: "Placeholder — add your image", size: "small" },
      { image: "images/project-8.svg", caption: "Placeholder — add your image", size: "large" },
    ],
  },
  { image: "images/project-3.svg", caption: "Prune Imports — Website design and brand development" },
  { image: "images/project-4.svg", caption: "Way Out West Festival x Yung Lean — Conceptualization and social media strategy" },
  { video: "videos/robyn-blow-my-mind.mp4", caption: "Robyn — Sexistential Album, stylist assistant to Naomi Itkes" },
  { image: "images/project-6.svg", caption: "TIER — Conceptualization, content direction and social media strategy" },
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

// BTS reel page. Set ONE of these:
// - embed: a YouTube or Vimeo *embed* URL, e.g. "https://player.vimeo.com/video/123456789"
//   or "https://www.youtube.com/embed/VIDEO_ID" (best for long or large reels)
// - video: a file in app/public/videos/, e.g. "videos/reel.mp4" (optional poster image)
export const reel = {
  title: "BTS reel",
  embed: "",
  video: "videos/bts-reel.mp4",
  poster: "",
  caption: "",
};

export const contact = [
  { label: "DM me", href: "https://www.instagram.com/yourhandle/" },
  { label: "Look deeper", href: "https://www.linkedin.com/in/yourprofile/" },
  { label: "Write to me", href: "mailto:hello@example.com" },
];
