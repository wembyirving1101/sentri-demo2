'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { borderVariants } from '@/lib/borderVariants'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
  soundEnabled: boolean
  onSoundToggle: (enabled: boolean) => void
}

export default function SettingsModal({
  isOpen,
  onClose,
  soundEnabled,
  onSoundToggle,
}: SettingsModalProps) {
  const [activeCategory, setActiveCategory] = useState<'audio' | 'display' | 'accessibility' | 'system'>('audio')

  if (!isOpen) return null

  const categories = [
    { id: 'audio', label: 'AUDIO', icon: '🔊' },
    { id: 'display', label: 'DISPLAY', icon: '📺' },
    { id: 'accessibility', label: 'ACCESSIBILITY', icon: '👤' },
    { id: 'system', label: 'SYSTEM', icon: '⚙️' },
  ] as const

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm" style={{ transform: 'scale(1)' }}>
      <div className={cn('w-[1400px] h-[800px] bg-[#171b1d] rounded flex flex-col', borderVariants({ variant: 'emphasis' }))}>
        {/* Header */}
        <div className={cn('px-8 py-6 bg-[#171b1d] flex items-center justify-between', borderVariants({ variant: 'divider' }), 'border-b flex-shrink-0')}>
          <h1 className="text-2xl font-bold tracking-widest text-foreground flex items-center gap-3">
            <span>⚙️</span> SETTINGS
          </h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-muted-foreground" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex gap-4 p-6 min-h-0">
          {/* Left Sidebar - Categories */}
          <div className="w-56 flex flex-col gap-2 flex-shrink-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-4 py-4 rounded text-left font-bold tracking-wide transition-colors flex items-center gap-3',
                  activeCategory === category.id
                    ? 'bg-success text-black'
                    : cn('bg-[#2a2f32] text-foreground hover:bg-[#323839]', borderVariants({ variant: 'divider' }), 'border')
                )}
              >
                <span>{category.icon}</span>
                <span className="text-sm uppercase">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Audio Settings */}
            {activeCategory === 'audio' && (
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold tracking-widest text-success uppercase">AUDIO SETTINGS</h2>
                
                {/* Master Volume / Sound Toggle */}
                <div className={cn('p-6 rounded bg-[#2a2f32]', borderVariants({ variant: 'divider' }), 'border')}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🔊</span>
                      <label className="text-lg font-bold tracking-wider text-foreground uppercase">
                        Master Sound
                      </label>
                    </div>
                    <button
                      onClick={() => onSoundToggle(!soundEnabled)}
                      className={cn(
                        'px-6 py-2 rounded font-bold tracking-wider transition-colors',
                        soundEnabled
                          ? 'bg-success text-black hover:bg-[#5ee75e]'
                          : 'bg-destructive text-white hover:bg-[#ef4444]'
                      )}
                    >
                      {soundEnabled ? 'ON' : 'OFF'}
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    {soundEnabled ? 'Sound effects and music are enabled' : 'All sound is currently disabled'}
                  </p>
                </div>
              </div>
            )}

            {/* Display Settings */}
            {activeCategory === 'display' && (
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold tracking-widest text-success uppercase">DISPLAY SETTINGS</h2>
                
                <div className={cn('p-6 rounded bg-[#2a2f32]', borderVariants({ variant: 'divider' }), 'border')}>
                  <label className="text-lg font-bold tracking-wider text-foreground uppercase block mb-4">
                    📺 Aspect Ratio
                  </label>
                  <div className="flex gap-4">
                    <button className={cn('px-6 py-3 rounded font-bold tracking-wider transition-colors bg-success text-black')}>
                      16:9 (1920×1080)
                    </button>
                    <button className={cn('px-6 py-3 rounded font-bold tracking-wider transition-colors bg-[#3a3f42] text-foreground hover:bg-[#424749]', borderVariants({ variant: 'divider' }), 'border')}>
                      16:10 (1920×1200)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Accessibility Settings */}
            {activeCategory === 'accessibility' && (
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold tracking-widest text-success uppercase">ACCESSIBILITY</h2>
                
                <div className={cn('p-6 rounded bg-[#2a2f32]', borderVariants({ variant: 'divider' }), 'border')}>
                  <p className="text-muted-foreground">Accessibility settings coming soon</p>
                </div>
              </div>
            )}

            {/* System Settings */}
            {activeCategory === 'system' && (
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold tracking-widest text-success uppercase">SYSTEM</h2>
                
                <div className={cn('p-6 rounded bg-[#2a2f32]', borderVariants({ variant: 'divider' }), 'border')}>
                  <p className="text-muted-foreground">System settings coming soon</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className={cn('px-8 py-6 bg-[#171b1d] flex items-center justify-between', borderVariants({ variant: 'divider' }), 'border-t flex-shrink-0')}>
          <div className={cn('flex items-center gap-4 p-4 rounded bg-[#0f1213]', borderVariants({ variant: 'divider' }), 'border')}>
            <span className="text-2xl">🤖</span>
            <div>
              <p className="font-bold text-success uppercase tracking-wider">SENTRI TIP</p>
              <p className="text-sm text-muted-foreground">Adjust audio levels to your preference.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={cn('px-6 py-3 rounded font-bold tracking-wider text-foreground transition-colors', borderVariants({ variant: 'divider' }), 'border hover:bg-secondary')}
          >
            ← BACK TO CONSOLE
          </button>
        </div>
      </div>
    </div>
  )
}
