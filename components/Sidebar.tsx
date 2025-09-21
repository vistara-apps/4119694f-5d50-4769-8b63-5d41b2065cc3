'use client'

import { Home, Search, Heart, User, TrendingUp, Music, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  onClose?: () => void
}

const navigation = [
  { name: 'Home', icon: Home, href: '/', current: true },
  { name: 'Discover', icon: Search, href: '/discover', current: false },
  { name: 'Trending', icon: TrendingUp, href: '/trending', current: false },
  { name: 'Liked Songs', icon: Heart, href: '/liked', current: false },
  { name: 'Artists', icon: Music, href: '/artists', current: false },
  { name: 'Profile', icon: User, href: '/profile', current: false },
]

export function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="flex flex-col h-full bg-surface border-r border-border">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg gradient-text">TuneSphere</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-muted transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
              item.current
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-white hover:bg-muted"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="glass-effect rounded-lg p-3">
          <p className="text-xs text-muted-foreground mb-2">Support Artists</p>
          <p className="text-sm font-medium">Tip your favorite creators with crypto</p>
        </div>
      </div>
    </div>
  )
}
