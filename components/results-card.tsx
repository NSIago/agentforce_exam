"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, RotateCcw, Eye } from "lucide-react"

interface ResultsCardProps {
  correct: number
  total: number
  percentage: number
  onReset: () => void
  onViewAll: () => void
}

export function ResultsCard({ correct, total, percentage, onReset, onViewAll }: ResultsCardProps) {
  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-500"
    if (percentage >= 60) return "text-yellow-500"
    return "text-red-500"
  }

  const getMessage = () => {
    if (percentage >= 80) return "Excelente! Você está bem preparado!"
    if (percentage >= 60) return "Bom trabalho! Continue estudando!"
    return "Continue praticando para melhorar!"
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Trophy className={`w-8 h-8 ${getScoreColor()}`} />
        </div>
        <CardTitle className="text-2xl">Simulado Finalizado!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className={`text-6xl font-bold ${getScoreColor()}`}>{percentage}%</div>
          <p className="text-muted-foreground mt-2">
            Você acertou {correct} de {total} questões
          </p>
          <p className="text-lg font-medium mt-4">{getMessage()}</p>
        </div>

        <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              percentage >= 80 ? "bg-green-500" : percentage >= 60 ? "bg-yellow-500" : "bg-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={onViewAll} variant="outline" className="flex-1 gap-2 bg-transparent">
            <Eye className="w-4 h-4" />
            Visualizar Tudo
          </Button>
          <Button onClick={onReset} className="flex-1 gap-2">
            <RotateCcw className="w-4 h-4" />
            Reiniciar Simulado
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
