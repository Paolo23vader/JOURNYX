
import { Game, Review, User } from './types';

export const MOCK_GAMES: Game[] = [
  {
    id: 'p1',
    title: 'Black Myth: Wukong',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg',
    rating: 4.9,
    releaseDate: '2024-08-20',
    genre: ['Action RPG', 'Souls-like'],
    platform: ['PC', 'PS5'],
    description: 'An action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.',
    developer: 'Game Science',
    timePlayed: '45h',
    trophiesCount: 22,
    totalTrophies: 36
  },
  {
    id: 'p2',
    title: 'Helldivers 2',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg',
    rating: 4.7,
    releaseDate: '2024-02-08',
    genre: ['Shooter', 'PvE', 'Action'],
    platform: ['PC', 'PS5'],
    description: 'Join the Helldivers and fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.',
    developer: 'Arrowhead Game Studios',
    timePlayed: '120h',
    trophiesCount: 30,
    totalTrophies: 39,
    kdRatio: 4.2 // Kills vs Deaths in the name of democracy
  },
  {
    id: 'p3',
    title: 'FF VII Rebirth',
    coverUrl: 'https://gmedia.playstation.com/is/image/psgv2/final-fantasy-vii-rebirth-listing-thumb-01-en-14sep23?$facebook$',
    rating: 4.9,
    releaseDate: '2024-02-29',
    genre: ['RPG'],
    platform: ['PS5'],
    description: 'The journey into the unknown continues. After escaping from the dystopian city of Midgar, Cloud and his friends set out on a journey across the planet.',
    developer: 'Square Enix',
    timePlayed: '95h',
    trophiesCount: 45,
    totalTrophies: 61
  },
  {
    id: 'p4',
    title: 'Warhammer 40k: Space Marine 2',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2183900/header.jpg',
    rating: 4.8,
    releaseDate: '2024-09-09',
    genre: ['Shooter', 'Action'],
    platform: ['PC', 'PS5', 'Xbox Series X'],
    description: 'Embody the superhuman skill and brutality of a Space Marine, the greatest of the Emperor’s warriors.',
    developer: 'Saber Interactive',
    kdRatio: 2.1
  },
  {
    id: 'p5',
    title: 'Dragon Age: The Veilguard',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1845910/header.jpg',
    rating: 4.4,
    releaseDate: '2024-10-31',
    genre: ['RPG'],
    platform: ['PC', 'PS5', 'Xbox Series X'],
    description: 'Enter Thedas, a vibrant world of rugged wilderness, treacherous labyrinths, and glittering cities steeped in conflict and secret magics.',
    developer: 'BioWare'
  },
  {
    id: 'p6',
    title: 'Tekken 8',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1778820/header.jpg',
    rating: 4.6,
    releaseDate: '2024-01-26',
    genre: ['Fighting', 'PvP'],
    platform: ['PC', 'PS5', 'Xbox Series X'],
    description: 'Fist Meets Fate! TEKKEN 8 continues the tragic saga of the Mishima bloodline.',
    developer: 'Bandai Namco',
    kdRatio: 1.15
  },
  {
    id: 'p7',
    title: 'Balatro',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2379780/header.jpg',
    rating: 4.9,
    releaseDate: '2024-02-20',
    genre: ['Roguelike', 'Strategy'],
    platform: ['PC', 'PS5', 'Xbox', 'Switch'],
    description: 'The poker roguelike. Balatro is a hypnotically satisfying deckbuilder where you play illegal poker hands.',
    developer: 'LocalThunk'
  },
  {
    id: 'p8',
    title: 'Astro Bot',
    coverUrl: 'https://gmedia.playstation.com/is/image/psgv2/astro-bot-keyart-01-en-30may24?$facebook$',
    rating: 4.9,
    releaseDate: '2024-09-06',
    genre: ['Platformer'],
    platform: ['PS5'],
    description: 'Join ASTRO on a brand-new, super-sized space adventure!',
    developer: 'Team Asobi'
  },
  {
    id: 'p9',
    title: 'Satisfactory',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/526870/header.jpg',
    rating: 4.8,
    releaseDate: '2024-09-10', // 1.0 Release
    genre: ['Simulation', 'Building'],
    platform: ['PC'],
    description: 'Satisfactory is a first-person open-world factory building game with a dash of exploration and combat.',
    developer: 'Coffee Stain Studios'
  }
];

export const WAITED_2026_GAMES: Game[] = [
  {
    id: 'w1',
    title: 'GTA VI',
    coverUrl: 'https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/GTAVI.jpg',
    rating: 5.0,
    releaseDate: '2025-11-01', // Fall 2025, often cited as 2026 for PC
    genre: ['Action', 'Open World'],
    platform: ['PS5', 'Xbox Series X'],
    description: 'Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City and beyond.',
    developer: 'Rockstar Games'
  },
  {
    id: 'w2',
    title: 'The Elder Scrolls VI',
    coverUrl: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=600&h=800&auto=format&fit=crop',
    rating: 4.9,
    releaseDate: '2026-11-11',
    genre: ['RPG'],
    platform: ['PC', 'Xbox'],
    description: 'The next chapter in the legendary Elder Scrolls series.',
    developer: 'Bethesda'
  },
  {
    id: 'w3',
    title: 'Hollow Knight: Silksong',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/header.jpg',
    rating: 4.9,
    releaseDate: '2026-01-01',
    genre: ['Metroidvania'],
    platform: ['PC', 'Switch', 'PS5'],
    description: 'Play as Hornet, princess-protector of Hallownest, and adventure through a whole new kingdom.',
    developer: 'Team Cherry'
  },
  {
    id: 'w4',
    title: 'Death Stranding 2',
    coverUrl: 'https://gmedia.playstation.com/is/image/psgv2/death-stranding-2-listing-thumb-01-en-08dec22?$facebook$',
    rating: 4.7,
    releaseDate: '2025-12-31',
    genre: ['Action'],
    platform: ['PS5'],
    description: 'On the Beach. The sequel to Hideo Kojima’s genre-defying masterpiece.',
    developer: 'Kojima Productions'
  },
  {
    id: 'w5',
    title: 'Metroid Prime 4',
    coverUrl: 'https://images.unsplash.com/photo-1580234811497-9bd7fd0f5ee6?q=80&w=600&h=800&auto=format&fit=crop',
    rating: 4.8,
    releaseDate: '2026-06-01',
    genre: ['FPS', 'Adventure'],
    platform: ['Switch'],
    description: 'Beyond. Samus Aran returns for a new mission across the stars.',
    developer: 'Retro Studios'
  },
  {
    id: 'w6',
    title: 'Control 2',
    coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&h=800&auto=format&fit=crop',
    rating: 4.5,
    releaseDate: '2026-08-01',
    genre: ['Action', 'Thriller'],
    platform: ['PC', 'PS5', 'Xbox'],
    description: 'The sequel to the supernatural action-adventure from Remedy Entertainment.',
    developer: 'Remedy Entertainment'
  },
  {
    id: 'w7',
    title: 'Fable',
    coverUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&h=800&auto=format&fit=crop',
    rating: 4.6,
    releaseDate: '2025-12-01',
    genre: ['Action RPG'],
    platform: ['PC', 'Xbox Series X'],
    description: 'What does it mean to be a Hero? Discover the answer in the new beginning for the legendary franchise.',
    developer: 'Playground Games'
  },
  {
    id: 'w8',
    title: 'Mass Effect 5',
    coverUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=600&h=800&auto=format&fit=crop',
    rating: 4.8,
    releaseDate: '2026-12-31',
    genre: ['Sci-Fi RPG'],
    platform: ['PC', 'PS5', 'Xbox'],
    description: 'Mass Effect will continue.',
    developer: 'BioWare'
  },
  {
    id: 'w9',
    title: 'BioShock 4',
    coverUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=600&h=800&auto=format&fit=crop',
    rating: 4.6,
    releaseDate: '2026-10-01',
    genre: ['Shooter'],
    platform: ['PC', 'PS5', 'Xbox'],
    description: 'A new entry in the iconic immersive sim series.',
    developer: 'Cloud Chamber'
  }
];

export const CURRENT_USER: User = {
  id: 'user-1',
  name: 'Alex Rivers',
  handle: '@arivers_gaming',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop',
  bio: 'Just a casual gamer exploring vast worlds and sharing my thoughts one level at a time.',
  stats: {
    reviews: 42,
    followers: 890,
    following: 120,
    gamesPlayed: 156
  }
};

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    gameId: 'p1',
    userId: 'user-2',
    userName: 'Sarah Chen',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop',
    rating: 5,
    content: "Absolutely breathtaking. The visuals in Wukong are next-gen. Combats feels fluid and rewarding.",
    date: '2h ago',
    likes: 124,
    commentsCount: 18
  },
  {
    id: 'r2',
    gameId: 'p2',
    userId: 'user-3',
    userName: 'Marcus Thorne',
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop',
    rating: 5,
    content: "Helldivers 2 is the most fun I've had in a co-op shooter since L4D2. FOR DEMOCRACY!",
    date: '5h ago',
    likes: 89,
    commentsCount: 12
  },
  {
    id: 'r3',
    gameId: 'p3',
    userId: 'user-4',
    userName: 'Elena Rossi',
    userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&auto=format&fit=crop',
    rating: 5,
    content: "FFVII Rebirth is massive. The gold saucer mini-games alone took 20 hours of my life.",
    date: '1d ago',
    likes: 56,
    commentsCount: 4
  },
  {
    id: 'r4',
    gameId: 'p8',
    userId: 'user-5',
    userName: 'Liam Miller',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop',
    rating: 5,
    content: "Astro Bot is pure joy. It's a love letter to PlayStation's history and a masterclass in level design.",
    date: '2d ago',
    likes: 210,
    commentsCount: 31
  }
];
