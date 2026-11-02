// All site text and images live here — edit this file to make the site yours.
// Put your own images in app/public/images/ and point `image` at them.

export const profile = {
  name: "Fanny Livijn",
  tagline: "Creative, Content Strategist & Art Director | Music + Fashion + Socials",
  bio: "Social Creative & Content Strategist building culturally relevant brands for the zeitgeist generation. Based between Stockholm and Mexico City, I develop digital-first campaigns and social-led strategy & creative concepts across music, fashion, culture and lifestyle. 5+ years turning social moments into brand movements.",
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
  { name: "Prune Imports" },
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
  { name: "TIER" },
  { name: "Shore Studio Series" },
  { name: "The North Face x One Show Club", video: "videos/tnf-everyday-explorer-1s.mp4" },
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
//     { embed: "https://www.youtube-nocookie.com/embed/VIDEO_ID", size: "wide" },
//   ]                                         size is "large", "small", "third" or "wide"
//                                             (third = three in a row; wide spans both columns, for
//                                             YouTube/Vimeo embeds; add vertical: true for
//                                             YouTube Shorts — TikTok is vertical already)
//   text: ["Paragraph", "Paragraph"]          the write-up under the header; wrap
//                                             words in **double stars** for bold
//   client: "Name", year: "2023"              shown in a line under the text
export const projects = [
  {
    image: "images/spotify-edvin-tile-hd.jpg",
    caption: "Spotify Sweden — Conceptualization, content direction and social media strategy for TikTok channel",
    title: "Spotify Sweden — What Floats Ur Boat?",
    services: ["Creative", "Art direction", "TikTok strategy"],
    client: "Spotify Sweden",
    year: "2023",
    text: [
      "When Spotify Sweden set out to make waves on TikTok, we knew we had to break through with something Gen Z wouldn’t scroll past. Instead of leaning on the standard Q&A interview format, we gave it a bold twist. A trampoline boat drifting across a pond at the Way Out West Festival. At the helm was Swedish TikTok star Annie Samuelsson, steering guests like Bianca Ingrosso and Edvin Ryding through playful, unpredictable interviews.",
      "Within the first week, the channel racked up **20,000 organic followers** and more than **3 million views**, firmly anchoring Spotify’s TikTok presence with a splash.",
    ],
    gallery: [
      { image: "images/spotify-what-floats-ur-boat.jpg", caption: "What Floats Ur Boat? at Way Out West Festival", size: "wide" },
      { embed: "https://www.youtube-nocookie.com/embed/7AVVgjAhEis", vertical: true, caption: "With Edvin Ryding", size: "third" },
      { embed: "https://www.youtube-nocookie.com/embed/PXLUnF7J7KI", vertical: true, caption: "With Bianca Ingrosso & Alice Stenlöf, part 2", size: "third" },
      { embed: "https://www.youtube-nocookie.com/embed/Mle56GvEopI", vertical: true, caption: "With Bianca Ingrosso & Alice Stenlöf, part 1", size: "third" },
    ],
  },
  {
    image: "images/zara-larsson-phone.jpg",
    caption: "Zara Larsson — Music video, co-styling",
    title: "Zara Larsson — You Love Who You Love // Music video",
    slug: "zara-larsson",
    services: ["Music video", "Co-styling"],
    with: "Naomi Itkes (stylist)",
    text: [
      "“You Love Who You Love” is a song about destructive relationships and the fear of letting go. It speaks to the friend who keeps going back to the wrong person, with Zara’s message that enough is enough.",
      "In the styling, we wanted every character to feel impulsive. The looks draw on current Gen Z trends, but also on the slightly unhinged choices all of us make when we change ourselves for the one we love.",
    ],
    year: "2024",
    gallery: [
      { embed: "https://www.youtube-nocookie.com/embed/YBNYVArkExQ", caption: "“You Love Who You Love” official music video", size: "wide" },
      { image: "images/zara-larsson-phone.jpg", caption: "Behind the scenes", size: "small" },
      { image: "images/zara-larsson-leather.jpg", caption: "Behind the scenes", size: "small" },
    ],
  },
  { image: "images/project-3.svg", caption: "Prune Imports — Website design and brand development" },
  {
    image: "images/way-out-west-yung-lean-poster.jpg",
    caption: "Way Out West Festival x Yung Lean — Conceptualization and social media strategy",
    title: "Way Out West Festival — The WOW 22 Sound",
    services: ["Concept development", "TikTok strategy"],
    client: "Way Out West Festival / Luger Sweden",
    year: "2023",
    text: [
      "To bring a younger crowd to Way Out West festival, we turned Yung Lean’s cult classic “Ginseng Strip” into WOW 22’s unofficial TikTok anthem. We activated creators across the full festival journey, building anticipation beforehand, capturing the energy during, and extending the buzz afterward.",
      "The branded sound didn’t just amplify our paid content; it sparked genuine momentum. The results: **7.4 million views**, **181 user-generated videos** and **60% organic reach**. A proof that the festival resonated far beyond our initial push.",
    ],
    gallery: [
      { embed: "https://www.tiktok.com/player/v1/7113926203748158726?description=0&music_info=0", caption: "TikTok by @pastabianxo", size: "third" },
      { embed: "https://www.tiktok.com/player/v1/7131683851847437595?description=0&music_info=0", caption: "TikTok by @mrsjourney", size: "third" },
      { embed: "https://www.tiktok.com/player/v1/7131388642613906694?description=0&music_info=0", caption: "TikTok by @cissiv", size: "third" },
      { image: "images/way-out-west-tiktok.jpg", caption: "Creator videos in the Way Out West 2022 TikTok playlist", size: "wide" },
    ],
  },
  {
    video: "videos/robyn-blow-my-mind.mp4",
    caption: "Robyn — Sexistential Album, stylist assistant to Naomi Itkes",
    title: "Robyn — Sexistential Album",
    services: ["Stylist assistant to Naomi Itkes"],
  },
  {
    image: "images/tier-zoologists-tile.jpg",
    caption: "TIER — Conceptualization, content direction and social media strategy",
    title: "TIER — The Zoologists",
    services: ["Content", "Strategy"],
    client: "TIER",
    year: "2023",
    text: [
      "To stand out from competitors, TIER set out to spotlight its commitment to sustainability in a fresh, unconventional way. For the launch of its TikTok channel, we crafted a content strategy built around four distinct personas, quirky zoologists based in different cities.",
      "Through their lens, everyday human habits were reimagined as animal behaviors, turning sustainability into something both relatable and entertaining.",
    ],
    gallery: [
      { image: "images/tier-cover.jpg", caption: "The Zoologists", size: "wide" },
      { video: "videos/tier-1.mp4", image: "images/tier-1-poster.jpg", vertical: true, caption: "TikTok episode 1", size: "third" },
      { video: "videos/tier-2.mp4", image: "images/tier-2-poster.jpg", vertical: true, caption: "TikTok episode 2", size: "third" },
      { video: "videos/tier-3.mp4", image: "images/tier-3-poster.jpg", vertical: true, caption: "TikTok episode 3", size: "third" },
    ],
  },
  {
    image: "images/vogue-scandinavia-punk.jpg",
    caption: "Vogue Scandinavia — Punk editorial, stylist assistant to Maria Barsoum",
    title: "Vogue Scandinavia — Punk Editorial",
    services: ["Styling"],
    with: "Maria Barsoum (stylist), Alex Rozniata (photographer)",
    year: "2024",
    text: ["Stylist assistant for Maria Barsoum."],
  },
  {
    image: "images/tnf-everyday-explorer-tile.jpg",
    caption: "The North Face — The Everyday Explorer, copywriting",
    title: "The North Face — The Everyday Explorer",
    services: ["Copywriting"],
    client: "Student case",
    year: "2020",
    text: [
      "In order to engage and motivate the upcoming generation of outdoor enthusiasts, we developed a gamified extension to Google Maps. This feature provides tailored recommendations for destinations to explore, while enabling users to accumulate reward points for their adventures. Reward points which could be redeemed in The North Face store for discounts.",
      "**Awarded Gold at The One Show Young Ones.**",
    ],
    gallery: [
      { embed: "https://player.vimeo.com/video/883782930?dnt=1", caption: "The Everyday Explorer case film", size: "wide" },
    ],
  },
];

export const services = [
  "Creative direction",
  "Art direction",
  "Content strategy",
  "Concept development",
  "Campaign strategy",
  "Social media & TikTok strategy",
  "Content production",
  "Styling",
  "Copywriting",
  "Brand development",
  "Website design",
  "Brand activations",
  "Talent & artist collaborations",
  "Trend research",
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
  { label: "DM me 💫", href: "https://www.instagram.com/fannylivijn/" },
  { label: "Look deeper", href: "https://www.linkedin.com/in/fanny-livijn-b7bb8b11b/" },
  { label: "Write to me", href: "mailto:fanny.livijn@gmail.com" },
];
