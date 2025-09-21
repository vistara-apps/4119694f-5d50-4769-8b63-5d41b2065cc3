'use client'

import { useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Repeat, Shuffle } from 'lucide-react'
import { formatDuration } from '@/lib/utils'
import Image from 'next/image'

export function PlayerBar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(45)
  const [duration] = useState(245)
  const [volume, setVolume] = useState(75)

  // Mock current track
  const currentTrack = {
    title: 'Midnight Synthesis',
    artist: 'Neon Dreams',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop',
  }

  const progress = (currentTime / duration) * 100

  return (
    <div className="bg-surface/90 backdrop-blur-sm border-t border-border p-4">
      <div className="flex items-center justify-between">
        {/* Track Info */}
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted">
            <Image
              src={currentTrack.coverUrl}
              alt={currentTrack.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-medium truncate">{currentTrack.title}</h4>
            <p className="text-sm text-muted-foreground truncate">{currentTrack.artist}</p>
          </div>
          <button className="p-1 rounded-md hover:bg-muted transition-colors duration-200">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-md hover:bg-muted transition-colors duration-200">
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-md hover:bg-muted transition-colors duration-200">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>
            <button className="p-2 rounded-md hover:bg-muted transition-colors duration-200">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="p-1 rounded-md hover:bg-muted transition-colors duration-200">
              <Repeat className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full">
            <span className="text-xs text-muted-foreground">
              {formatDuration(currentTime)}
            </span>
            <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">
              {formatDuration(duration)}
            </span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 flex-1 justify-end">
          <Volume2 className="w-4 h-4" />
          <div className="w-20 h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary"
              style={{ width: `${volume}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
