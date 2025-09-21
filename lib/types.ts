export interface User {
  userId: string;
  farcasterId?: string;
  name: string;
  avatar?: string;
  listeningHistory: string[];
  followedArtists: string[];
}

export interface Artist {
  artistId: string;
  userId: string;
  name: string;
  bio: string;
  avatar?: string;
  musicLibrary: string[];
  fanTips: Tip[];
  followers: number;
  verified?: boolean;
}

export interface Track {
  trackId: string;
  artistId: string;
  title: string;
  audioUrl: string;
  coverUrl?: string;
  genre: string;
  duration: number;
  likes: number;
  plays: number;
  createdAt: string;
}

export interface Tip {
  tipId: string;
  fromUserId: string;
  toArtistId: string;
  amount: string;
  timestamp: string;
  network: 'base';
  txHash?: string;
}

export interface PlaylistItem extends Track {
  artist: Artist;
}
