'use client'

import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react'
import { PlaylistItem } from '@/lib/types'
import { formatDuration, formatNumber, cn } from '@/lib/utils'
import { TipButton } from './TipButton'
import Image from 'next/image'

interface TrackListItemProps {
  track: PlaylistItem
  index: number
  isPlaying?: boolean
  onPlay: () => void
  variant?: 'default' | 'withActions'
}

export function TrackListItem({ 
  track, 
  index, 
  isPlaying = false, 
  onPlay, 
  variant = 'default' 
}: TrackListItemProps) {
  return (
    <div className={cn(
      "group flex items-center space-x-4 p-3 rounded-lg hover:bg-surface/50 transition-colors duration-200",
      isPlaying && "bg-primary/5"
    )}>
      {/* Index/Play button */}
      <div className="w-8 flex items-center justify-center">
        <button
          onClick={onPlay}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200 group-hover:opacity-100 opacity-0"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-primary" />
          ) : (
            <Play className="w-4 h-4 text-primary ml-0.5" />
          )}
        </button>
        <span className="text-sm text-muted-foreground group-hover:opacity-0 opacity-100 transition-opacity duration-200">
          {index}
        </span>
      </div>

      {/* Track info */}
      <div className="flex items-center space-x-3 flex-1 min-w-0">
        <div className="relative w-12 h-12 rounded-md overflow-hidden bg-surface">
          {track.coverUrl ? (
            <Image
              src={track.coverUrl}
              alt={track.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-accent" />
          )}
          {isPlaying && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="flex space-x-0.5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="waveform-bar w-0.5 h-3" />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className={cn(
            "font-medium truncate",
            isPlaying ? "text-primary" : "text-white"
          )}>
            {track.title}
          </h3>
          <p className="text-sm text-muted-foreground truncate">
            {track.artist.name}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="hidden sm:flex items-center space-x-6 text-sm text-muted-foreground">
        <span>{formatNumber(track.plays)} plays</span>
        <span>{formatDuration(track.duration)}</span>
      </div>

      {/* Actions */}
      {variant === 'withActions' && (
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-md hover:bg-muted transition-colors duration-200 opacity-0 group-hover:opacity-100">
            <Heart className="w-4 h-4" />
          </button>
          <TipButton artistId={track.artistId} />
          <button className="p-2 rounded-md hover:bg-muted transition-colors duration-200 opacity-0 group-hover:opacity-100">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
