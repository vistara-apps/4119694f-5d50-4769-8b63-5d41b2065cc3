'use client'

import { Search, Menu, Bell, Wallet } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  // TODO: Implement user context and authentication hooks
  const context = { user: { displayName: 'User' } }
  const user = null

  return (
    <header className="bg-surface/80 backdrop-blur-sm border-b border-border px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors duration-200"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search artists, tracks..."
              className="w-64 pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-md hover:bg-muted transition-colors duration-200 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-200">
            <Wallet className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {user ? 'Connected' : 'Connect'}
            </span>
          </button>

          {/* User avatar */}
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">
              {context?.user?.displayName?.[0] || 'U'}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
