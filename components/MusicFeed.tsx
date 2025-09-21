'use client'

import { useState } from 'react'
import { TrackListItem } from './TrackListItem'
import { ArtistCard } from './ArtistCard'
import { getMockPlaylist, mockArtists } from '@/lib/mockData'
import { PlaylistItem } from '@/lib/types'

export function MusicFeed() {
  const [playlist] = useState<PlaylistItem[]>(getMockPlaylist())
  const [currentTrack, setCurrentTrack] = useState<PlaylistItem | null>(null)

  const handlePlayTrack = (track: PlaylistItem) => {
    setCurrentTrack(track)
  }

  return (
    <div className="p-6 space-y-8">
      {/* Featured Artists */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArtists.slice(0, 3).map((artist) => (
            <ArtistCard key={artist.artistId} artist={artist} variant="detailed" />
          ))}
        </div>
      </section>

      {/* Trending Tracks */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
              All
            </button>
            <button className="px-4 py-2 text-muted-foreground hover:text-white rounded-lg text-sm font-medium transition-colors duration-200">
              Electronic
            </button>
            <button className="px-4 py-2 text-muted-foreground hover:text-white rounded-lg text-sm font-medium transition-colors duration-200">
              Ambient
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {playlist.map((track, index) => (
            <TrackListItem
              key={track.trackId}
              track={track}
              index={index + 1}
              isPlaying={currentTrack?.trackId === track.trackId}
              onPlay={() => handlePlayTrack(track)}
              variant="withActions"
            />
          ))}
        </div>
      </section>

      {/* Stats Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Platform Stats</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-effect rounded-lg p-4">
            <div className="text-2xl font-bold gradient-text">$12,008</div>
            <div className="text-sm text-muted-foreground">Total Tips</div>
          </div>
          <div className="glass-effect rounded-lg p-4">
            <div className="text-2xl font-bold gradient-text">1,520</div>
            <div className="text-sm text-muted-foreground">Active Artists</div>
          </div>
          <div className="glass-effect rounded-lg p-4">
            <div className="text-2xl font-bold gradient-text">45,600</div>
            <div className="text-sm text-muted-foreground">Total Plays</div>
          </div>
          <div className="glass-effect rounded-lg p-4">
            <div className="text-2xl font-bold gradient-text">8,750</div>
            <div className="text-sm text-muted-foreground">Community</div>
          </div>
        </div>
      </section>
    </div>
  )
}
