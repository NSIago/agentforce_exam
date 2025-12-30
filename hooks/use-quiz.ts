"use client"

import { useState, useEffect, useCallback } from "react"
import { questions } from "@/lib/questions"

export interface QuizState {
  currentQuestionIndex: number
  answers: Record<number, string>
  confirmedAnswers: Record<number, boolean>
  showResults: boolean
  reviewMode: boolean
  isRandomized: boolean
  order: number[]
  optionOrder: Record<number, number[]>
}

export const STORAGE_KEY = "agentforce-quiz-state"

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function useQuiz() {
  const [state, setState] = useState<QuizState>(() => {
    // Initial state setup to avoid hydration mismatch if possible, 
    // but effectively we rely on useEffect for storage sync or just default here.
    // For randomization, we want to start consistently if not loaded.
    const defaultOrder = questions.map((q) => q.id)
    return {
      currentQuestionIndex: 0,
      answers: {},
      confirmedAnswers: {},
      showResults: false,
      reviewMode: false,
      isRandomized: false,
      order: defaultOrder,
      optionOrder: {},
    }
  })
  const [isLoaded, setIsLoaded] = useState(false)

  // Load saved state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Ensure order exists (migration for existing users)
        const order = parsed.order || questions.map((q) => q.id)
        setState({
          ...parsed,
          confirmedAnswers: parsed.confirmedAnswers || {},
          order,
          isRandomized: parsed.isRandomized || false,
          optionOrder: parsed.optionOrder || {},
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

  // Helper to get the current question ID based on order
  const currentQuestionId = state.order[state.currentQuestionIndex]
  const baseQuestion = questions.find((q) => q.id === currentQuestionId) || questions[0]
  
  // Derive the question with reordered options if available
  const currentQuestion = {
      ...baseQuestion,
      options: state.optionOrder[baseQuestion.id]
          ? state.optionOrder[baseQuestion.id].map(index => baseQuestion.options[index])
          : baseQuestion.options
  }

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
  
  // Navigate to a specific question ID (useful for review modal jumping)
  const goToQuestionById = useCallback((id: number) => {
     setState((prev) => {
        const index = prev.order.indexOf(id)
        return {
            ...prev,
            currentQuestionIndex: index !== -1 ? index : 0
        }
     })
  }, [])


  const getUnansweredQuestions = useCallback(() => {
    // Return IDs of unanswered questions
    // This logic relies on question IDs, not indices, so it works fine with randomization
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
    setState((prev) => {
        const defaultOrder = questions.map((q) => q.id)
        const newOrder = prev.isRandomized ? shuffleArray(defaultOrder) : defaultOrder
        
        // Generate new option order if randomized
        const newOptionOrder: Record<number, number[]> = {}
        if (prev.isRandomized) {
            questions.forEach(q => {
               const indices = q.options.map((_, i) => i)
               newOptionOrder[q.id] = shuffleArray(indices)
            })
        }
        
        return {
            currentQuestionIndex: 0,
            answers: {},
            confirmedAnswers: {},
            showResults: false,
            reviewMode: false,
            isRandomized: prev.isRandomized,
            order: newOrder,
            optionOrder: newOptionOrder
        }
    })
    // Note: We don't remove storage key entirely, we just overwrite it on next effect, 
    // or we can explicitly clear and let the effect write the new clean state.
    // Ideally, we just update state and let the effect sync.
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

  const toggleRandomization = useCallback((enabled: boolean) => {
    setState((prev) => {
        const defaultOrder = questions.map((q) => q.id)
        let newOrder = defaultOrder
        let newOptionOrder: Record<number, number[]> = {}
        
        if (enabled) {
            newOrder = shuffleArray(defaultOrder)
            // Generate shuffled options for all questions
            questions.forEach(q => {
               const indices = q.options.map((_, i) => i)
               newOptionOrder[q.id] = shuffleArray(indices)
            })
        }
        
        return {
            ...prev,
            isRandomized: enabled,
            order: newOrder,
            optionOrder: newOptionOrder,
            currentQuestionIndex: 0 // Reset to start to avoid confusion with index mismatch
        }
    })
  }, [])

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
    goToQuestionById,
    getUnansweredQuestions,
    finishQuiz,
    setReviewMode,
    resetQuiz,
    calculateScore,
    toggleRandomization,
  }
}
