"use client"

import { useState, useEffect } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function UpdatesNotification() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeenUpdates = localStorage.getItem("seen_updates_v2")
    if (!hasSeenUpdates) {
      // Add a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("seen_updates_v2", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative flex items-start gap-4 p-4 bg-background/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl max-w-sm">
          <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>
          
          <div className="flex-1 space-y-1 pt-1">
            <h4 className="text-sm font-semibold leading-none tracking-tight">Hey C3Ceiros! Novidades na Área!</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <p>🟢 Perguntas aleatórias! (Ative no topo)</p>
              <p>🟢 Respostas (A, B, C) também são misturadas</p>
              <p>🟢 O botão "Reiniciar" agora gera uma nova ordem</p>
            </p>
            <p className="text-xs leading-none tracking-tight">Update: 29/12/2025</p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 -mr-1 -mt-1 text-muted-foreground hover:text-foreground"
            onClick={handleDismiss}
          >
            <X className="w-3 h-3" />
            <span className="sr-only">Fechar</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
