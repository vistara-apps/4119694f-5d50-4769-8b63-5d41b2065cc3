'use client'

import { useState } from 'react'
import { ExternalLink, Share2, Heart, DollarSign } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FrameActionContainerProps {
  trackId?: string
  artistId?: string
  variant?: 'default'
  className?: string
}

export function FrameActionContainer({ 
  trackId, 
  artistId, 
  variant = 'default',
  className 
}: FrameActionContainerProps) {
  const [liked, setLiked] = useState(false)
  const [shared, setShared] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
    // In a real app, this would trigger a Frame action
    console.log(`${liked ? 'Unliked' : 'Liked'} track ${trackId}`)
  }

  const handleShare = () => {
    setShared(true)
    setTimeout(() => setShared(false), 2000)
    // In a real app, this would trigger a Frame share action
    console.log(`Shared track ${trackId}`)
  }

  const handleTip = () => {
    // In a real app, this would trigger a Frame tip action
    console.log(`Tipping artist ${artistId}`)
  }

  const handleOpenApp = () => {
    // In a real app, this would open the full MiniApp
    console.log('Opening TuneSphere Remix MiniApp')
  }

  return (
    <div className={cn(
      "flex items-center justify-center space-x-3 p-4 bg-surface/80 backdrop-blur-sm rounded-lg border border-border",
      className
    )}>
      <button
        onClick={handleLike}
        className={cn(
          "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          liked
            ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
            : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-white"
        )}
      >
        <Heart className={cn("w-4 h-4", liked && "fill-current")} />
        <span>{liked ? 'Liked' : 'Like'}</span>
      </button>

      <button
        onClick={handleShare}
        className={cn(
          "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          shared
            ? "bg-primary/20 text-primary"
            : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-white"
        )}
      >
        <Share2 className="w-4 h-4" />
        <span>{shared ? 'Shared!' : 'Share'}</span>
      </button>

      {artistId && (
        <button
          onClick={handleTip}
          className="flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent hover:bg-accent/20 rounded-lg text-sm font-medium transition-all duration-200"
        >
          <DollarSign className="w-4 h-4" />
          <span>Tip</span>
        </button>
      )}

      <button
        onClick={handleOpenApp}
        className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-sm font-medium transition-all duration-200"
      >
        <ExternalLink className="w-4 h-4" />
        <span>Open App</span>
      </button>
    </div>
  )
}
