export type SoundPreview = {
  name: string;
  bpm: number;
  key: string;
};

export type DrumKit = {
  id: string;
  name: string;
  genre: string;
  price: number;
  samples: number;
  categories: string[];
  description: string;
  badge: string | null;
  highlight: boolean;
  previewSounds: string[];
  fullDescription: string;
  whatYouGet: string[];
  // Visual
  artFrom: string;
  artTo: string;
  artAccent: string;
  // Audio preview tracks
  soundPreviews: SoundPreview[];
};

export const kits: DrumKit[] = [
  {
    id: "808-warfare",
    name: "808 Warfare",
    genre: "Trap / Drill",
    price: 19.99,
    samples: 120,
    categories: ["808s", "Hi-hats", "Snares", "Kicks", "Perc"],
    description: "Hard-hitting 808s, crisp snares, and layered hi-hats built for modern trap and drill production.",
    badge: "Best Seller",
    highlight: true,
    previewSounds: ["808 slides & sub hits", "Layered snare variations", "Stuttered hi-hat rolls", "Sub kicks & floor kicks", "Percussion loops & one-shots", "Dark trap stabs", "Drill hat patterns", "FX & transitions"],
    fullDescription: "808 Warfare is the ultimate trap and drill drum kit. Built from the ground up for the modern producer, every sound was crafted for maximum impact. From thunderous 808 slides to razor-sharp snare layers, this kit delivers the raw energy that top-charting records demand.",
    whatYouGet: ["30 808 slides & sub hits", "25 layered snare variations", "20 hi-hat rolls & stutters", "15 sub kicks & punchy kicks", "15 percussion loops & one-shots", "15 bonus FX & transitions"],
    artFrom: "#2d0404",
    artTo: "#080808",
    artAccent: "#e05050",
    soundPreviews: [
      { name: "808 Slide — Dark", bpm: 140, key: "C Min" },
      { name: "808 Sub Hit A", bpm: 140, key: "F" },
      { name: "808 Sub Hit B", bpm: 140, key: "G Min" },
      { name: "Layered Snare 01", bpm: 140, key: "—" },
      { name: "Snare Roll Heavy", bpm: 140, key: "—" },
      { name: "Hi-Hat Stutter 01", bpm: 140, key: "—" },
      { name: "Drill Hat Pattern", bpm: 140, key: "—" },
      { name: "Sub Kick Deep", bpm: 140, key: "F" },
      { name: "Punchy Kick A", bpm: 140, key: "—" },
      { name: "Trap Perc Loop", bpm: 140, key: "—" },
      { name: "Dark FX Sweep", bpm: 140, key: "—" },
      { name: "808 Transition", bpm: 140, key: "C Min" },
    ],
  },
  {
    id: "soul-bounce",
    name: "Soul Bounce",
    genre: "R&B / Neo Soul",
    price: 14.99,
    samples: 85,
    categories: ["Kicks", "Snares", "Claps", "Rides", "Shakers"],
    description: "Warm, soulful drums inspired by classic R&B, neo-soul, and lo-fi. Perfect for emotional records.",
    badge: null,
    highlight: false,
    previewSounds: ["Vinyl kicks & deep thumps", "Room snares & brushed snares", "Jazz rides & cymbal hits", "Tambourines & shakers", "Soft claps & finger snaps", "Warm hi-hat grooves", "Brushed groove fills", "Atmospheric tones"],
    fullDescription: "Soul Bounce brings the warmth and character of classic R&B and neo-soul to your productions. Every sound was processed through analog gear to give you that unmistakable soulful texture that turns a good beat into a timeless record.",
    whatYouGet: ["20 vinyl kicks & deep kicks", "18 room snares & brushed snares", "15 jazz rides & cymbal hits", "12 tambourines & shakers", "10 claps & soft snaps", "10 atmospheric tones & bells"],
    artFrom: "#1a0d00",
    artTo: "#080808",
    artAccent: "#d4863c",
    soundPreviews: [
      { name: "Vinyl Kick A", bpm: 90, key: "—" },
      { name: "Vinyl Kick B", bpm: 90, key: "—" },
      { name: "Room Snare Warm", bpm: 90, key: "—" },
      { name: "Brushed Snare A", bpm: 90, key: "—" },
      { name: "Jazz Ride A", bpm: 90, key: "—" },
      { name: "Tambourine Groove", bpm: 90, key: "—" },
      { name: "Soft Clap A", bpm: 90, key: "—" },
      { name: "Finger Snap", bpm: 90, key: "—" },
      { name: "Warm Hi-Hat", bpm: 90, key: "—" },
      { name: "Shaker Loop A", bpm: 90, key: "—" },
    ],
  },
  {
    id: "afro-heat",
    name: "Afro Heat",
    genre: "Afrobeats / Dancehall",
    price: 17.99,
    samples: 100,
    categories: ["Congas", "Shakers", "Kicks", "Snares", "Atmos"],
    description: "Percussive energy straight from the culture — designed for Afrobeats, Amapiano, and dancehall producers.",
    badge: "New",
    highlight: false,
    previewSounds: ["Conga rolls & djembe hits", "Amapiano log drum hits", "Afro shakers & wood blocks", "Dance kicks & floor toms", "Percussion stabs", "Talking drum hits", "Groove loops & fills", "Atmospheric textures"],
    fullDescription: "Afro Heat captures the raw percussive energy of Afrobeats, Amapiano, and dancehall. Recorded and curated by producers deep in the culture, this kit gives you authentic sounds ready to fuel your next viral record.",
    whatYouGet: ["25 conga & djembe hits", "20 shakers & wood blocks", "18 African kicks & floor toms", "15 snares & claps", "12 atmospheric tones & pads", "10 groove loops & fills"],
    artFrom: "#0d1800",
    artTo: "#080808",
    artAccent: "#7ec832",
    soundPreviews: [
      { name: "Conga Roll A", bpm: 112, key: "—" },
      { name: "Djembe Hit A", bpm: 112, key: "—" },
      { name: "Amapiano Log Drum", bpm: 112, key: "—" },
      { name: "Afro Shaker A", bpm: 112, key: "—" },
      { name: "Wood Block Hit", bpm: 112, key: "—" },
      { name: "Dance Kick A", bpm: 112, key: "—" },
      { name: "Afro Snare A", bpm: 112, key: "—" },
      { name: "Talking Drum Hit", bpm: 112, key: "—" },
      { name: "Groove Perc Loop", bpm: 112, key: "—" },
      { name: "Atmosphere Pad", bpm: 112, key: "F Maj" },
    ],
  },
  {
    id: "uk-pressure",
    name: "UK Pressure",
    genre: "UK Drill / Grime",
    price: 17.99,
    samples: 95,
    categories: ["Dark 808s", "Snares", "Hi-hats", "FX", "Transitions"],
    description: "Dark, gritty, and aggressive. Tailored for UK drill and grime with menacing sub bass and crisp percussion.",
    badge: null,
    highlight: false,
    previewSounds: ["Dark 808 sub hits", "Grime snare snaps", "Drill hi-hat rolls", "Impact FX & stabs", "Dark transitions", "Sub bass slides", "Grime cymbal hits", "Tension risers"],
    fullDescription: "UK Pressure was built for the streets. Dark 808 subs that rattle speakers, crisp snare snaps, and menacing hi-hat patterns — every sound in this kit was designed to bring that signature cold, gritty UK energy to your productions.",
    whatYouGet: ["22 dark 808 hits & sub slides", "20 snare snaps & rim shots", "18 hi-hat rolls & drill patterns", "15 impact FX & stabs", "12 transitions & risers", "8 atmospheric tension builders"],
    artFrom: "#040c1a",
    artTo: "#050508",
    artAccent: "#4a90d9",
    soundPreviews: [
      { name: "Dark 808 Sub", bpm: 140, key: "C Min" },
      { name: "808 Slide Cold", bpm: 140, key: "A Min" },
      { name: "Grime Snare Snap", bpm: 140, key: "—" },
      { name: "UK Rim Shot", bpm: 140, key: "—" },
      { name: "Drill Hat Roll A", bpm: 140, key: "—" },
      { name: "Hi-Hat Pattern UK", bpm: 140, key: "—" },
      { name: "Impact FX Heavy", bpm: 140, key: "—" },
      { name: "Dark Sub Stab", bpm: 140, key: "G Min" },
      { name: "Tension Riser", bpm: 140, key: "—" },
      { name: "Grime Transition", bpm: 140, key: "—" },
    ],
  },
  {
    id: "cinematic-sessions",
    name: "Cinematic Sessions",
    genre: "Score / Cinematic",
    price: 24.99,
    samples: 140,
    categories: ["Orchestral Perc", "Impacts", "Risers", "Booms", "Sweeps"],
    description: "Orchestral-style drums, cinematic impacts, and tension-building FX for score, lo-fi, and epic productions.",
    badge: "Premium",
    highlight: false,
    previewSounds: ["Taiko hits & strikes", "Orchestral snare rolls", "Cinematic booms", "Rise FX & builds", "Cymbal crashes & rolls", "Timpani strikes", "Tension sweeps", "Atmospheric impacts"],
    fullDescription: "Cinematic Sessions delivers the power and drama of a full orchestral percussion section. From thunderous taiko hits to delicate rises and sweeps, this premium kit gives film composers, game producers, and beatmakers the tools to create truly epic productions.",
    whatYouGet: ["30 orchestral percussion hits", "25 cinematic impacts & booms", "20 risers & tension builders", "25 sweeps & transitions", "20 atmospheric FX layers", "20 bonus one-shots & accents"],
    artFrom: "#0c0420",
    artTo: "#040405",
    artAccent: "#9b59d6",
    soundPreviews: [
      { name: "Taiko Hit Heavy", bpm: 0, key: "—" },
      { name: "Taiko Roll A", bpm: 0, key: "—" },
      { name: "Orchestral Snare Roll", bpm: 0, key: "—" },
      { name: "Cinematic Boom A", bpm: 0, key: "—" },
      { name: "Timpani Strike", bpm: 0, key: "C Min" },
      { name: "Cymbal Crash Big", bpm: 0, key: "—" },
      { name: "Tension Riser Long", bpm: 0, key: "—" },
      { name: "Impact FX Epic", bpm: 0, key: "—" },
      { name: "Sweep Down Dark", bpm: 0, key: "—" },
      { name: "Atmosphere Deep", bpm: 0, key: "D Min" },
    ],
  },
  {
    id: "mega-bundle",
    name: "The Mega Bundle",
    genre: "All Genres",
    price: 59.99,
    samples: 540,
    categories: ["All 5 Kits", "Bonus FX Pack", "MIDI Patterns", "Mixer Presets"],
    description: "All 5 kits + exclusive bonus content — the complete LoopGem drum library at a massive discount.",
    badge: "Save 40%",
    highlight: true,
    previewSounds: ["All 808 Warfare sounds", "All Soul Bounce sounds", "All Afro Heat sounds", "All UK Pressure sounds", "All Cinematic Sessions sounds", "60 exclusive bonus FX", "25 MIDI drum patterns", "Exclusive mixer presets"],
    fullDescription: "The Mega Bundle is the complete LoopGem drum library. Get all 5 premium kits — 808 Warfare, Soul Bounce, Afro Heat, UK Pressure, and Cinematic Sessions — plus exclusive bonus content you won't find anywhere else, all at a 40% discount.",
    whatYouGet: ["All 5 drum kits (540 samples)", "60 exclusive bonus FX", "25 MIDI drum patterns", "Mixer preset templates", "Free updates forever", "Priority support"],
    artFrom: "#1a1000",
    artTo: "#080808",
    artAccent: "#c9a84c",
    soundPreviews: [
      { name: "808 Slide — Dark", bpm: 140, key: "C Min" },
      { name: "Vinyl Kick Deep", bpm: 90, key: "—" },
      { name: "Conga Roll A", bpm: 112, key: "—" },
      { name: "Dark 808 Sub", bpm: 140, key: "A Min" },
      { name: "Taiko Hit Heavy", bpm: 0, key: "—" },
      { name: "Layered Snare 01", bpm: 140, key: "—" },
      { name: "Afro Shaker A", bpm: 112, key: "—" },
      { name: "Drill Hat Roll A", bpm: 140, key: "—" },
      { name: "Cinematic Boom A", bpm: 0, key: "—" },
      { name: "Bonus FX Sweep", bpm: 0, key: "—" },
      { name: "MIDI Pattern 01", bpm: 140, key: "C Min" },
      { name: "808 Sub Mega", bpm: 140, key: "F" },
    ],
  },
];
