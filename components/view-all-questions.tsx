"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ArrowLeft, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Question } from "@/lib/questions"

interface ViewAllQuestionsProps {
  questions: Question[]
  answers: Record<number, string>
  onBack: () => void
}

export function ViewAllQuestions({ questions, answers, onBack }: ViewAllQuestionsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack} className="gap-2 bg-transparent">
          <ArrowLeft className="w-4 h-4" />
          Voltar aos Resultados
        </Button>
      </div>

      <div className="space-y-6">
        {questions.map((question) => {
          const userAnswer = answers[question.id]
          const isCorrect = userAnswer === question.correctAnswer

          return (
            <Card key={question.id} className="w-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-base leading-relaxed">
                    <span className="text-muted-foreground mr-2">#{question.id}</span>
                    {question.title && (
                      <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground mr-2">
                        {question.title}
                      </span>
                    )}
                    <br className="sm:hidden" />
                    {question.question}
                  </CardTitle>
                  {userAnswer &&
                    (isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {question.options.map((option) => {
                  const isCorrectOption = option.label === question.correctAnswer
                  const isUserSelection = option.label === userAnswer
                  const isWrongSelection = isUserSelection && !isCorrectOption

                  return (
                    <div
                      key={option.label}
                      className={cn(
                        "p-3 rounded-lg border-2 flex items-start gap-3 transition-all",
                        isCorrectOption && "border-green-500 bg-green-500/10",
                        isWrongSelection && "border-red-500 bg-red-500/10",
                        !isCorrectOption && !isWrongSelection && "border-border opacity-60",
                      )}
                    >
                      <span
                        className={cn(
                          "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-semibold text-sm",
                          isCorrectOption
                            ? "bg-green-500 text-white"
                            : isWrongSelection
                              ? "bg-red-500 text-white"
                              : "bg-muted",
                        )}
                      >
                        {option.label}
                      </span>
                      <span className="flex-1 text-sm">{option.text}</span>
                      {isCorrectOption && (
                        <span className="text-xs font-medium text-green-600 flex-shrink-0">Correta</span>
                      )}
                      {isWrongSelection && (
                        <span className="text-xs font-medium text-red-600 flex-shrink-0">Sua resposta</span>
                      )}
                    </div>
                  )
                })}

                {question.tip && (
                  <div className="mt-4 p-4 rounded-lg bg-amber-500/10 border-2 border-amber-500/50">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">{question.tip}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
