'use client'

import { Play, Users, Heart } from 'lucide-react'
import { Artist } from '@/lib/types'
import { formatNumber, cn } from '@/lib/utils'
import { TipButton } from './TipButton'
import Image from 'next/image'

interface ArtistCardProps {
  artist: Artist
  variant?: 'compact' | 'detailed'
}

export function ArtistCard({ artist, variant = 'compact' }: ArtistCardProps) {
  if (variant === 'compact') {
    return (
      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface/50 transition-colors duration-200">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface">
          {artist.avatar ? (
            <Image
              src={artist.avatar}
              alt={artist.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-accent" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="font-medium truncate">{artist.name}</h3>
            {artist.verified && (
              <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-white">✓</span>
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {formatNumber(artist.followers)} followers
          </p>
        </div>
        <TipButton artistId={artist.artistId} variant="default" />
      </div>
    )
  }

  return (
    <div className="glass-effect rounded-lg p-6 group hover:shadow-card transition-all duration-200">
      {/* Artist Avatar */}
      <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-surface">
        {artist.avatar ? (
          <Image
            src={artist.avatar}
            alt={artist.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent" />
        )}
        <button className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Play className="w-6 h-6 text-white ml-0.5" />
        </button>
      </div>

      {/* Artist Info */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center space-x-2 mb-1">
          <h3 className="font-semibold text-lg">{artist.name}</h3>
          {artist.verified && (
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs text-white">✓</span>
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-2">{artist.bio}</p>
        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{formatNumber(artist.followers)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="w-4 h-4" />
            <span>{artist.musicLibrary.length} tracks</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center space-x-3">
        <button className="flex-1 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200 text-sm font-medium">
          Follow
        </button>
        <TipButton artistId={artist.artistId} variant="default" />
      </div>
    </div>
  )
}
