import { AppShell } from '@/components/AppShell'
import { MusicFeed } from '@/components/MusicFeed'
import { PlayerBar } from '@/components/PlayerBar'

export default function HomePage() {
  return (
    <AppShell>
      <div className="flex-1 overflow-hidden">
        <MusicFeed />
      </div>
      <PlayerBar />
    </AppShell>
  )
}
