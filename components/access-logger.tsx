"use client"

import { useEffect, useRef } from "react"
import { logAccess } from "@/app/actions"

export function AccessLogger() {
  const hasLogged = useRef(false)

  useEffect(() => {
    if (!hasLogged.current) {
      logAccess()
      hasLogged.current = true
    }
  }, [])

  return null
}
