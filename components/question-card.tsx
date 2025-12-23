"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckCircle2, XCircle, ChevronLeft, ChevronRight, Lightbulb } from "lucide-react"
import type { Question } from "@/lib/questions"
import { AIChat } from "@/components/ai-chat"

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  selectedAnswer?: string
  isConfirmed: boolean
  onSelectAnswer: (answer: string) => void
  onConfirmAnswer: () => void
  onNext: () => void
  onPrevious: () => void
  isFirst: boolean
  isLast: boolean
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  isConfirmed,
  onSelectAnswer,
  onConfirmAnswer,
  onNext,
  onPrevious,
  isFirst,
  isLast,
}: QuestionCardProps) {
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    setShowTip(false)
  }, [question.id])

  const handleSelect = (answer: string) => {
    if (!isConfirmed) {
      onSelectAnswer(answer)
    }
  }

  const getOptionClass = (optionLabel: string) => {
    if (!isConfirmed) {
      return selectedAnswer === optionLabel
        ? "border-primary bg-primary/10 ring-2 ring-primary"
        : "border-border hover:border-primary/50 hover:bg-muted/50"
    }

    if (optionLabel === question.correctAnswer) {
      return "border-green-500 bg-green-500/10 ring-2 ring-green-500"
    }
    if (selectedAnswer === optionLabel && optionLabel !== question.correctAnswer) {
      return "border-red-500 bg-red-500/10 ring-2 ring-red-500"
    }
    return "border-border opacity-60"
  }

  const isCorrect = selectedAnswer === question.correctAnswer

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                Questão {questionNumber} de {totalQuestions}
              </span>
              {question.title && (
                <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">{question.title}</span>
              )}
            </div>
            <div className="h-2 flex-1 mx-4 bg-muted rounded-full overflow-hidden max-w-xs">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
          <CardTitle className="text-lg leading-relaxed">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleSelect(option.label)}
                disabled={isConfirmed}
                className={cn(
                  "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-start gap-3",
                  getOptionClass(option.label),
                  isConfirmed ? "cursor-default" : "cursor-pointer",
                )}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center font-semibold text-sm">
                  {option.label}
                </span>
                <span className="flex-1 pt-1">{option.text}</span>
                {isConfirmed && option.label === question.correctAnswer && (
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                )}
                {isConfirmed && selectedAnswer === option.label && option.label !== question.correctAnswer && (
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>

          {selectedAnswer && !isConfirmed && (
            <div className="flex justify-center pt-2">
              <Button onClick={onConfirmAnswer} className="gap-2 px-8">
                <CheckCircle2 className="w-4 h-4" />
                Confirmar Resposta
              </Button>
            </div>
          )}

          {isConfirmed && (
            <div className="space-y-3 pt-2">
              <div
                className={cn(
                  "p-4 rounded-lg border-2",
                  isCorrect
                    ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400"
                    : "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400",
                )}
              >
                <div className="flex items-center gap-2 font-semibold">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Resposta Correta!
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5" />
                      Resposta Incorreta - A correta é: {question.correctAnswer}
                    </>
                  )}
                </div>
              </div>

              <Button variant="outline" onClick={() => setShowTip(!showTip)} className="w-full gap-2 bg-transparent">
                <Lightbulb className="w-4 h-4" />
                {showTip ? "Ocultar Explicação" : "Ver Explicação"}
              </Button>

              {showTip && question.tip && (
                <div className="p-4 rounded-lg bg-amber-500/10 border-2 border-amber-500/50 text-foreground">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{question.tip}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <Button variant="outline" onClick={onPrevious} disabled={isFirst} className="gap-2 bg-transparent">
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>
            <Button onClick={onNext} disabled={isLast} className="gap-2">
              Próxima
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {isConfirmed && <AIChat question={question} userAnswer={selectedAnswer} />}
    </div>
  )
}
