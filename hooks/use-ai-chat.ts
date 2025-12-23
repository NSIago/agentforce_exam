"use client"

import { useState, useCallback, useEffect } from "react"

export interface ChatMessage {
  role: "user" | "assistant"
  content: string
  timestamp: number
}

export interface QuestionChatHistory {
  [questionId: number]: ChatMessage[]
}

const CHAT_STORAGE_KEY = "agentforce-quiz-chat-history"

export function useAIChat(questionId: number, questionContext: string, apiKey: string | null) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load chat history for this question from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(CHAT_STORAGE_KEY)
    if (saved) {
      try {
        const parsed: QuestionChatHistory = JSON.parse(saved)
        if (parsed[questionId]) {
          setMessages(parsed[questionId])
        } else {
          setMessages([])
        }
      } catch (e) {
        console.error("Failed to parse chat history", e)
        setMessages([])
      }
    } else {
      setMessages([])
    }
  }, [questionId])

  // Save chat history to localStorage
  const saveToStorage = useCallback(
    (newMessages: ChatMessage[]) => {
      const saved = localStorage.getItem(CHAT_STORAGE_KEY)
      let history: QuestionChatHistory = {}
      if (saved) {
        try {
          history = JSON.parse(saved)
        } catch (e) {
          console.error("Failed to parse chat history for saving", e)
        }
      }
      history[questionId] = newMessages
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(history))
    },
    [questionId],
  )

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim()) return
      if (!apiKey) {
        setError("Configure sua API Key para usar o assistente de IA.")
        return
      }

      const userMessage: ChatMessage = {
        role: "user",
        content: content.trim(),
        timestamp: Date.now(),
      }

      const newMessages = [...messages, userMessage]
      setMessages(newMessages)
      saveToStorage(newMessages)
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
            questionContext,
            apiKey, // Pass API key to route
          }),
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.error || "Failed to get response")
        }

        const data = await response.json()
        const assistantMessage: ChatMessage = {
          role: "assistant",
          content: data.message,
          timestamp: Date.now(),
        }

        const updatedMessages = [...newMessages, assistantMessage]
        setMessages(updatedMessages)
        saveToStorage(updatedMessages)
      } catch (e) {
        console.error("Chat error:", e)
        setError(e instanceof Error ? e.message : "Erro ao obter resposta da IA. Tente novamente.")
      } finally {
        setIsLoading(false)
      }
    },
    [messages, questionContext, saveToStorage, apiKey],
  )

  const clearHistory = useCallback(() => {
    setMessages([])
    const saved = localStorage.getItem(CHAT_STORAGE_KEY)
    if (saved) {
      try {
        const history: QuestionChatHistory = JSON.parse(saved)
        delete history[questionId]
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(history))
      } catch (e) {
        console.error("Failed to clear chat history", e)
      }
    }
  }, [questionId])

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearHistory,
  }
}
