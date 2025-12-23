"use client"

import { useState, useEffect, useCallback } from "react"
import { questions } from "@/lib/questions"

export interface QuizState {
  currentQuestionIndex: number
  answers: Record<number, string>
  confirmedAnswers: Record<number, boolean>
  showResults: boolean
  reviewMode: boolean
}

const STORAGE_KEY = "agentforce-quiz-state"

export function useQuiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    confirmedAnswers: {},
    showResults: false,
    reviewMode: false,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  // Load saved state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setState({
          ...parsed,
          confirmedAnswers: parsed.confirmedAnswers || {},
        })
      } catch (e) {
        console.error("Failed to parse saved state", e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Auto-save to localStorage whenever state changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }
  }, [state, isLoaded])

  const currentQuestion = questions[state.currentQuestionIndex]

  const selectAnswer = useCallback((questionId: number, answer: string) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answer },
    }))
  }, [])

  const confirmAnswer = useCallback((questionId: number) => {
    setState((prev) => ({
      ...prev,
      confirmedAnswers: { ...prev.confirmedAnswers, [questionId]: true },
    }))
  }, [])

  const isAnswerConfirmed = useCallback(
    (questionId: number) => {
      return !!state.confirmedAnswers[questionId]
    },
    [state.confirmedAnswers],
  )

  const goToNext = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentQuestionIndex: Math.min(prev.currentQuestionIndex + 1, questions.length - 1),
    }))
  }, [])

  const goToPrevious = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentQuestionIndex: Math.max(prev.currentQuestionIndex - 1, 0),
    }))
  }, [])

  const goToQuestion = useCallback((index: number) => {
    setState((prev) => ({
      ...prev,
      currentQuestionIndex: index,
    }))
  }, [])

  const getUnansweredQuestions = useCallback(() => {
    return questions.filter((q) => !state.confirmedAnswers[q.id]).map((q) => q.id)
  }, [state.confirmedAnswers])

  const finishQuiz = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showResults: true,
    }))
  }, [])

  const setReviewMode = useCallback((enabled: boolean) => {
    setState((prev) => ({
      ...prev,
      reviewMode: enabled,
    }))
  }, [])

  const resetQuiz = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      answers: {},
      confirmedAnswers: {},
      showResults: false,
      reviewMode: false,
    })
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const calculateScore = useCallback(() => {
    let correct = 0
    questions.forEach((q) => {
      if (state.answers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
    }
  }, [state.answers])

  return {
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
    setReviewMode,
    resetQuiz,
    calculateScore,
  }
}
