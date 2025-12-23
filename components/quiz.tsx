"use client"

import { useState } from "react"
import { useQuiz } from "@/hooks/use-quiz"
import { QuestionCard } from "@/components/question-card"
import { QuizNavigation } from "@/components/quiz-navigation"
import { ResultsCard } from "@/components/results-card"
import { ViewAllQuestions } from "@/components/view-all-questions"
import { ReviewModal } from "@/components/review-modal"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Flag, RotateCcw, Save, BookOpen } from "lucide-react"

export function Quiz() {
  const {
    state,
    currentQuestion,
    questions,
    isLoaded,
    selectAnswer,
    confirmAnswer,
    isAnswerConfirmed,
    goToNext,
    goToPrevious,
    goToQuestion,
    getUnansweredQuestions,
    finishQuiz,
    resetQuiz,
    calculateScore,
  } = useQuiz()

  const [showReviewModal, setShowReviewModal] = useState(false)
  const [viewingAll, setViewingAll] = useState(false)

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    )
  }

  const handleFinishClick = () => {
    const unanswered = getUnansweredQuestions()
    if (unanswered.length > 0) {
      setShowReviewModal(true)
    } else {
      finishQuiz()
    }
  }

  const handleReview = () => {
    setShowReviewModal(false)
    const unanswered = getUnansweredQuestions()
    if (unanswered.length > 0) {
      const firstUnansweredIndex = questions.findIndex((q) => q.id === unanswered[0])
      goToQuestion(firstUnansweredIndex)
    }
  }

  const handleForceFinish = () => {
    setShowReviewModal(false)
    finishQuiz()
  }

  const confirmedCount = Object.keys(state.confirmedAnswers).length

  const Footer = () => (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4 py-4 max-w-5xl">
        <p className="text-center text-sm text-muted-foreground">
          Criado com muito desespero por Iago, para socorrer a todos que estão em desespero e sem tempo assim como eu
        </p>
      </div>
    </footer>
  )

  if (viewingAll) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 glass border-b border-border/50">
          <div className="container mx-auto px-4 py-3 max-w-5xl flex items-center justify-between">
            <h1 className="text-lg font-semibold">AgentForce - Preparação</h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild className="gap-1.5 h-8 text-xs">
                <a
                  href="https://drive.google.com/file/d/1r2y7O-v0ME1qh0vAW9AHPFxRuWxtOKJi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Documento de Aprendizado</span>
                </a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 max-w-5xl flex-1">
          <ViewAllQuestions questions={questions} answers={state.answers} onBack={() => setViewingAll(false)} />
        </main>
        <Footer />
      </div>
    )
  }

  if (state.showResults) {
    const score = calculateScore()
    return (
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 glass border-b border-border/50">
          <div className="container mx-auto px-4 py-3 max-w-5xl flex items-center justify-between">
            <h1 className="text-lg font-semibold">AgentForce - Preparação</h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild className="gap-1.5 h-8 text-xs">
                <a
                  href="https://drive.google.com/file/d/1r2y7O-v0ME1qh0vAW9AHPFxRuWxtOKJi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Documento de Aprendizado</span>
                </a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 max-w-5xl flex-1">
          <ResultsCard
            correct={score.correct}
            total={score.total}
            percentage={score.percentage}
            onReset={resetQuiz}
            onViewAll={() => setViewingAll(true)}
          />
          <div className="mt-8">
            <QuizNavigation
              questions={questions}
              currentIndex={state.currentQuestionIndex}
              answers={state.answers}
              confirmedAnswers={state.confirmedAnswers}
              onGoToQuestion={goToQuestion}
              showResults={true}
            />
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-3 max-w-5xl">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-lg font-semibold">AgentForce - Preparação</h1>
              <p className="text-muted-foreground text-xs">
                {confirmedCount} de {questions.length} questões confirmadas
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground px-2 py-1 rounded-md bg-secondary/50">
                <Save className="w-3 h-3" />
                <span>Auto-save</span>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1.5 h-8 text-xs">
                <a
                  href="https://drive.google.com/file/d/1r2y7O-v0ME1qh0vAW9AHPFxRuWxtOKJi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Documento de Aprendizado</span>
                </a>
              </Button>
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={resetQuiz}
                className="gap-1.5 h-8 text-xs bg-secondary/50 border-border/50 hover:bg-secondary"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Reiniciar</span>
              </Button>
              <Button size="sm" onClick={handleFinishClick} className="gap-1.5 h-8 text-xs">
                <Flag className="w-3 h-3" />
                Finalizar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-5xl space-y-6 flex-1">
        <QuestionCard
          question={currentQuestion}
          questionNumber={state.currentQuestionIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={state.answers[currentQuestion.id]}
          isConfirmed={isAnswerConfirmed(currentQuestion.id)}
          onSelectAnswer={(answer) => selectAnswer(currentQuestion.id, answer)}
          onConfirmAnswer={() => confirmAnswer(currentQuestion.id)}
          onNext={goToNext}
          onPrevious={goToPrevious}
          isFirst={state.currentQuestionIndex === 0}
          isLast={state.currentQuestionIndex === questions.length - 1}
        />

        <QuizNavigation
          questions={questions}
          currentIndex={state.currentQuestionIndex}
          answers={state.answers}
          confirmedAnswers={state.confirmedAnswers}
          onGoToQuestion={goToQuestion}
          showResults={false}
        />
      </main>

      <Footer />

      <ReviewModal
        open={showReviewModal}
        onOpenChange={setShowReviewModal}
        unansweredCount={getUnansweredQuestions().length}
        onReview={handleReview}
        onFinish={handleForceFinish}
      />
    </div>
  )
}
