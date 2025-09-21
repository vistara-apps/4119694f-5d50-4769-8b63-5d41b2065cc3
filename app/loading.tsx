export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="waveform-bar w-1 h-8"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        <p className="text-muted-foreground">Loading TuneSphere...</p>
      </div>
    </div>
  )
}
