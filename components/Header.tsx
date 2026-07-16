import { Settings, HelpCircle, BookOpen, Zap } from 'lucide-react'

interface HeaderProps {
  currentTime: string
  graduationProgress: number
  onSettingsClick?: () => void
}

export default function Header({ currentTime, graduationProgress, onSettingsClick }: HeaderProps) {
  return (
    <header className="w-[1920px] h-28 border-b border-border bg-card px-8 py-6 flex-shrink-0">
      <div className="flex flex-col justify-between h-full">
        {/* Top Row: Logo and Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-black tracking-widest text-foreground">
              SENTRI DISPATCH CONSOLE
            </h1>
            <span className="font-mono text-base font-bold text-muted-foreground" suppressHydrationWarning>
              DAY 07 • {currentTime}
            </span>
          </div>
          
          {/* Right Top: Quick Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              className="flex flex-col items-center gap-1 p-2 hover:bg-secondary rounded transition-colors"
              title="Handbook"
              aria-label="Handbook"
            >
              <BookOpen size={24} className="text-muted-foreground hover:text-foreground" />
              <span className="text-[10px] text-muted-foreground uppercase">Handbook</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 p-2 hover:bg-secondary rounded transition-colors"
              title="Sentri"
              aria-label="Sentri"
            >
              <Zap size={24} className="text-muted-foreground hover:text-foreground" />
              <span className="text-[10px] text-muted-foreground uppercase">Sentri</span>
            </button>
            <button
              onClick={onSettingsClick}
              className="flex flex-col items-center gap-1 p-2 hover:bg-secondary rounded transition-colors"
              title="Settings"
              aria-label="Settings"
            >
              <Settings size={24} className="text-muted-foreground hover:text-foreground" />
              <span className="text-[10px] text-muted-foreground uppercase">Settings</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Competency Level Bar */}
        <div className="flex items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <label className="text-sm font-bold tracking-widest text-muted-foreground uppercase min-w-max">
                Competency Level
              </label>
              <div className="flex-1 flex items-center gap-3">
                <div className="flex-1">
                  <div className="bg-secondary rounded h-6 border border-border">
                    <div
                      className="bg-success h-full transition-all duration-300 rounded"
                      style={{ width: `${graduationProgress}%` }}
                    />
                  </div>
                </div>
                <span className="font-mono text-base font-black text-success min-w-12">
                  {graduationProgress}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
