"use client"
import { cn } from "@/lib/utils"
import type { Question } from "@/lib/questions"

interface QuizNavigationProps {
  questions: Question[]
  currentIndex: number
  answers: Record<number, string>
  confirmedAnswers: Record<number, boolean>
  onGoToQuestion: (index: number) => void
  showResults: boolean
}

export function QuizNavigation({
  questions,
  currentIndex,
  answers,
  confirmedAnswers,
  onGoToQuestion,
  showResults,
}: QuizNavigationProps) {
  return (
    <div className="bg-card border rounded-lg p-4">
      <h3 className="font-semibold mb-3 text-sm">Navegação</h3>
      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 gap-2">
        {questions.map((q, index) => {
          const isConfirmed = !!confirmedAnswers[q.id]
          const hasSelection = !!answers[q.id]
          const isCorrect = answers[q.id] === q.correctAnswer
          const isCurrent = index === currentIndex

          return (
            <button
              key={q.id}
              onClick={() => onGoToQuestion(index)}
              className={cn(
                "w-8 h-8 rounded-md text-xs font-medium flex items-center justify-center transition-all",
                isCurrent && "ring-2 ring-primary ring-offset-2",
                !showResults && isConfirmed && "bg-primary text-primary-foreground",
                !showResults && !isConfirmed && hasSelection && "bg-amber-500/50 text-foreground",
                !showResults && !isConfirmed && !hasSelection && "bg-muted hover:bg-muted/80",
                showResults && isCorrect && "bg-green-500 text-white",
                showResults && isConfirmed && !isCorrect && "bg-red-500 text-white",
                showResults && !isConfirmed && "bg-muted text-muted-foreground",
              )}
            >
              {q.id}
            </button>
          )
        })}
      </div>
      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground flex-wrap">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-primary" />
          <span>Confirmada</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-amber-500/50" />
          <span>Selecionada</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-muted" />
          <span>Não respondida</span>
        </div>
        {showResults && (
          <>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-green-500" />
              <span>Correta</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-red-500" />
              <span>Incorreta</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
