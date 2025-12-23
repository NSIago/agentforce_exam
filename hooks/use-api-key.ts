"use client"

import { useState, useEffect, useCallback } from "react"

const API_KEY_STORAGE_KEY = "openrouter-api-key"

export function useApiKey() {
  const [apiKey, setApiKeyState] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(API_KEY_STORAGE_KEY)
    setApiKeyState(saved)
    setIsLoaded(true)
  }, [])

  const setApiKey = useCallback((key: string) => {
    localStorage.setItem(API_KEY_STORAGE_KEY, key)
    setApiKeyState(key)
  }, [])

  const clearApiKey = useCallback(() => {
    localStorage.removeItem(API_KEY_STORAGE_KEY)
    setApiKeyState(null)
  }, [])

  return {
    apiKey,
    isLoaded,
    hasApiKey: !!apiKey,
    setApiKey,
    clearApiKey,
  }
}
