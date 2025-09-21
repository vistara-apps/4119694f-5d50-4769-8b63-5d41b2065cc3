'use client'

import { useState } from 'react'
import { DollarSign, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TipButtonProps {
  artistId: string
  variant?: 'default' | 'disabled'
  className?: string
}

export function TipButton({ artistId, variant = 'default', className }: TipButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleTip = async () => {
    if (variant === 'disabled') return
    
    setIsLoading(true)
    try {
      // Simulate tip transaction
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log(`Tipping artist ${artistId}`)
    } catch (error) {
      console.error('Tip failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleTip}
      disabled={variant === 'disabled' || isLoading}
      className={cn(
        "flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
        variant === 'disabled'
          ? "bg-muted/50 text-muted-foreground cursor-not-allowed"
          : "bg-accent/10 text-accent hover:bg-accent/20 hover:scale-105",
        isLoading && "animate-pulse",
        className
      )}
    >
      {isLoading ? (
        <Zap className="w-4 h-4 animate-pulse" />
      ) : (
        <DollarSign className="w-4 h-4" />
      )}
      <span>{isLoading ? 'Tipping...' : 'Tip'}</span>
    </button>
  )
}
