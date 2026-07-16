import { Settings, BookOpen } from 'lucide-react'

interface HeaderProps {
  currentTime: string
  graduationProgress: number
  completedTasks?: number
  totalTasks?: number
  onSettingsClick?: () => void
}

export default function Header({ currentTime, graduationProgress, completedTasks = 0, totalTasks = 4, onSettingsClick }: HeaderProps) {
  const taskProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <header className="w-[1920px] h-24 border-b border-border bg-card px-8 py-4 flex-shrink-0">
      <div className="flex items-center justify-between h-full gap-8">
        {/* Left: Title and Time */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-black tracking-widest text-foreground">
            SENTRI DISPATCH CONSOLE
          </h1>
          <span className="font-mono text-sm font-bold text-muted-foreground" suppressHydrationWarning>
            DAY 07 • {currentTime}
          </span>
        </div>

        {/* Center: Stats Boxes */}
        <div className="flex items-center gap-8 flex-1">
          {/* Today's Tasks Box */}
          <div className="border border-border rounded px-8 py-3 bg-secondary/20 flex flex-col gap-3 flex-1">
            <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              TODAY'S TASKS
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="bg-secondary rounded h-5 border border-border">
                  <div
                    className="bg-success h-full transition-all duration-300 rounded"
                    style={{ width: `${taskProgress}%` }}
                  />
                </div>
              </div>
              <span className="font-mono text-base font-black text-success min-w-max">
                {completedTasks}/{totalTasks}
              </span>
            </div>
          </div>

          {/* Competency Level Box */}
          <div className="border border-border rounded px-8 py-3 bg-secondary/20 flex flex-col gap-3 flex-1">
            <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              COMPETENCY LEVEL
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="bg-secondary rounded h-5 border border-border">
                  <div
                    className="bg-success h-full transition-all duration-300 rounded"
                    style={{ width: `${graduationProgress}%` }}
                  />
                </div>
              </div>
              <span className="font-mono text-base font-black text-success min-w-max">
                {graduationProgress}%
              </span>
            </div>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-6">
          <button
            className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            title="Handbook"
            aria-label="Handbook"
          >
            <BookOpen size={20} className="text-muted-foreground" />
            <span className="text-xs font-bold text-muted-foreground uppercase">Handbook</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            title="Sentri"
            aria-label="Sentri"
          >
            <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
            </div>
            <span className="text-xs font-bold text-muted-foreground uppercase">Sentri</span>
          </button>
          <button
            onClick={onSettingsClick}
            className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            title="Settings"
            aria-label="Settings"
          >
            <Settings size={20} className="text-muted-foreground" />
            <span className="text-xs font-bold text-muted-foreground uppercase">Settings</span>
          </button>
        </div>
      </div>
    </header>
  )
}
