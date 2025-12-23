"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Bot,
  Send,
  Trash2,
  Loader2,
  User,
  Sparkles,
  Key,
  Settings,
  Paperclip,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { useAIChat } from "@/hooks/use-ai-chat"
import { useApiKey } from "@/hooks/use-api-key"
import { ApiKeyModal } from "@/components/api-key-modal"
import type { Question } from "@/lib/questions"
import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AIChatProps {
  question: Question
  userAnswer?: string
}

const initialSuggestions = [
  "Explique detalhadamente por que a resposta correta está certa",
  "Por que as outras opções estão erradas?",
  "Qual é o conceito chave dessa questão?",
  "Pode dar exemplos práticos?",
]

const followUpSuggestions = [
  "Pode explicar mais sobre isso?",
  "Como isso se aplica na prática?",
  "Quais são os cenários mais comuns?",
  "Tem alguma dica para memorizar?",
  "O que mais preciso saber sobre esse tema?",
  "Quais erros comuns devo evitar?",
]

export function AIChat({ question, userAnswer }: AIChatProps) {
  const [input, setInput] = useState("")
  const [isExpanded, setIsExpanded] = useState(true)
  const [showApiKeyModal, setShowApiKeyModal] = useState(false)
  const [showFakeUploadModal, setShowFakeUploadModal] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const { apiKey, hasApiKey, setApiKey } = useApiKey()

  const questionContext = `
**Pergunta:** ${question.question}

**Opções:**
${question.options.map((o) => `- ${o.label}: ${o.text}`).join("\n")}

**Resposta Correta:** ${question.correctAnswer}

**Resposta do Usuário:** ${userAnswer || "Não respondida"}

**Dica Base:** ${question.tip}
`.trim()

  const { messages, isLoading, error, sendMessage, clearHistory } = useAIChat(question.id, questionContext, apiKey)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!hasApiKey) {
      setShowApiKeyModal(true)
      return
    }
    if (input.trim() && !isLoading) {
      sendMessage(input)
      setInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleSuggestedQuestion = (q: string) => {
    if (!hasApiKey) {
      setShowApiKeyModal(true)
      return
    }
    sendMessage(q)
  }

  const lastMessage = messages[messages.length - 1]
  const showFollowUpSuggestions = lastMessage?.role === "assistant" && !isLoading

  return (
    <>
      <Card className="glass-card border-primary/20 overflow-hidden">
        <CardHeader className="pb-3 border-b border-border/50">
          <CardTitle className="text-base flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            Assistente IA - Tire suas dúvidas
            {messages.length > 0 && (
              <span className="text-xs px-2 py-0.5 bg-primary/20 rounded-full text-primary">
                {messages.length} mensagens
              </span>
            )}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-4 space-y-4">
          {!hasApiKey ? (
            <div className="space-y-3">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                <Key className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                  Configure sua API Key para usar o assistente
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  O assistente de IA requer uma API Key do OpenRouter
                </p>
                <Button onClick={() => setShowApiKeyModal(true)} size="sm" className="mt-3 gap-2">
                  <Key className="w-4 h-4" />
                  Configurar API Key
                </Button>
                <div className="mt-3 space-y-1.5">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    O site foi construído para utilizar um modelo de gratuito, não vou roubar sua key, pode ficar
                    tranquilo (Ela também é grátis para criar)
                  </p>
                  <p className="text-xs text-red-600 dark:text-red-500 leading-relaxed">
                    <span className="underline">
                      Mas se realmente quiser me passar alguma informação valiosa, me mande uma foto da frente e verso
                      do seu cartão da Caju
                    </span>
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-2">
                    <ChevronRight
                      className="w-5 h-5 text-red-500 animate-[bounce_1s_ease-in-out_infinite]"
                      style={{ animationDirection: "reverse" }}
                    />
                    <ChevronRight
                      className="w-4 h-4 text-red-500 animate-[bounce_1s_ease-in-out_infinite_0.1s]"
                      style={{ animationDirection: "reverse" }}
                    />
                    <Button
                      onClick={() => setShowFakeUploadModal(true)}
                      variant="outline"
                      size="sm"
                      className="gap-2 text-xs animate-bounce hover:animate-none shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-primary/50 hover:border-primary bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20"
                    >
                      <Paperclip className="w-3 h-3 animate-pulse" />
                      Anexar Arquivo
                    </Button>
                    <ChevronLeft
                      className="w-4 h-4 text-red-500 animate-[bounce_1s_ease-in-out_infinite_0.1s]"
                      style={{ animationDirection: "reverse" }}
                    />
                    <ChevronLeft
                      className="w-5 h-5 text-red-500 animate-[bounce_1s_ease-in-out_infinite]"
                      style={{ animationDirection: "reverse" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : messages.length === 0 ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Precisa de mais detalhes sobre essa questão? Pergunte!</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowApiKeyModal(true)}
                  className="text-xs text-muted-foreground hover:text-foreground gap-1"
                >
                  <Settings className="w-3 h-3" />
                  API Key
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {initialSuggestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestedQuestion(q)}
                    disabled={isLoading}
                    className="text-left text-xs p-3 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 disabled:opacity-50 bg-secondary/30"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowApiKeyModal(true)}
                  className="text-xs text-muted-foreground hover:text-foreground gap-1"
                >
                  <Settings className="w-3 h-3" />
                  API Key
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearHistory}
                  className="text-xs text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="w-3 h-3 mr-1" />
                  Limpar histórico
                </Button>
              </div>

              <ScrollArea className="h-[300px] pr-4" ref={scrollRef}>
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <div key={i} className={cn("flex gap-3", msg.role === "user" ? "justify-end" : "justify-start")}>
                      {msg.role === "assistant" && (
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "max-w-[85%] rounded-2xl px-4 py-3",
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-md"
                            : "bg-secondary/50 rounded-bl-md",
                        )}
                      >
                        {msg.role === "assistant" ? (
                          <div className="prose prose-sm dark:prose-invert max-w-none text-sm [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
                            <ReactMarkdown
                              components={{
                                h3: ({ children }) => (
                                  <h3 className="text-base font-semibold mt-4 mb-2 text-primary">{children}</h3>
                                ),
                                h4: ({ children }) => <h4 className="text-sm font-semibold mt-3 mb-1">{children}</h4>,
                                strong: ({ children }) => (
                                  <strong className="font-semibold text-foreground">{children}</strong>
                                ),
                                ul: ({ children }) => <ul className="list-disc pl-4 space-y-1 my-2">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal pl-4 space-y-1 my-2">{children}</ol>,
                                li: ({ children }) => <li className="text-sm">{children}</li>,
                                p: ({ children }) => <p className="mb-2 leading-relaxed">{children}</p>,
                                hr: () => <hr className="my-3 border-border" />,
                              }}
                            >
                              {msg.content}
                            </ReactMarkdown>
                          </div>
                        ) : (
                          <p className="text-sm">{msg.content}</p>
                        )}
                      </div>
                      {msg.role === "user" && (
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <User className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                      <div className="bg-secondary/50 rounded-2xl rounded-bl-md px-4 py-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Pensando...
                        </div>
                      </div>
                    </div>
                  )}

                  {showFollowUpSuggestions && (
                    <div className="pt-2 space-y-2">
                      <p className="text-xs text-muted-foreground font-medium">Continue perguntando:</p>
                      <div className="flex flex-wrap gap-2">
                        {followUpSuggestions.map((q, i) => (
                          <button
                            key={i}
                            onClick={() => handleSuggestedQuestion(q)}
                            className="text-xs px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-muted-foreground hover:text-foreground bg-secondary/30"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </>
          )}

          {error && <p className="text-sm text-destructive text-center">{error}</p>}

          {hasApiKey && (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua pergunta sobre essa questão..."
                className="min-h-[44px] max-h-[120px] resize-none rounded-xl bg-secondary/30 border-border/50"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="flex-shrink-0 h-[44px] w-[44px] rounded-xl"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      <ApiKeyModal
        open={showApiKeyModal}
        onOpenChange={setShowApiKeyModal}
        onSubmit={(key) => {
          setApiKey(key)
          setShowApiKeyModal(false)
        }}
      />

      <Dialog open={showFakeUploadModal} onOpenChange={setShowFakeUploadModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-red-600">
              Você é louco? Seu piru está no caju, tá querendo que eu pegue no seu piru?
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <img src="/images/image.png" alt="Caju mascot" className="max-w-full h-auto rounded-lg" />
          </div>
          <Button onClick={() => setShowFakeUploadModal(false)} className="w-full">
            Fechar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
