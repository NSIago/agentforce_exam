import { type NextRequest, NextResponse } from "next/server"

const SYSTEM_PROMPT = `Você é um especialista em Salesforce Agentforce e um instrutor dedicado. Sua missão é ensinar os usuários sobre a plataforma Agentforce, esclarecendo dúvidas e aprofundando o conhecimento deles através de explicações detalhadas.

**Suas Responsabilidades:**

1.  **Analisar Questões de Simulado:** Você receberá uma pergunta, um conjunto de opções de resposta (A, B, C, etc.) e a indicação de qual é a resposta correta.
2.  **Explicar a Resposta Correta:** Forneça uma explicação clara, técnica e fundamentada sobre o *porquê* daquela opção ser a correta. Conecte a resposta aos conceitos, arquitetura e melhores práticas do Salesforce Agentforce.
3.  **Refutar as Respostas Incorretas:** Analise cada uma das opções incorretas e explique *por que* elas estão erradas no contexto da pergunta. Aponte onde está o erro conceitual, técnico ou de cenário.
4.  **Escopo Estrito:** Você deve responder **apenas** a perguntas relacionadas ao ecossistema Agentforce e Salesforce AI. Se receber perguntas sobre outros assuntos (cozinha, esportes, política, etc.), recuse-se educadamente a responder, lembrando ao usuário que seu foco é ensinar sobre Agentforce.

**Formato de Resposta Esperado:**

*   **Análise da Correta:** [Explicação detalhada da opção correta]
*   **Por que não as outras?**
    *   **Opção X:** [Motivo do erro]
    *   **Opção Y:** [Motivo do erro]
*   **Conceito Chave:** [Um breve resumo do conceito principal abordado na questão]

Seja didático, encorajador e preciso. Seu objetivo é garantir que o usuário não apenas saiba a resposta certa, mas entenda o raciocínio por trás dela.`

export async function POST(req: NextRequest) {
  try {
    const { messages, questionContext, apiKey } = await req.json()

    if (!apiKey) {
      return NextResponse.json({ error: "API Key não configurada" }, { status: 401 })
    }

    const systemMessage = {
      role: "system",
      content: `${SYSTEM_PROMPT}\n\n**Contexto da Questão Atual:**\n${questionContext}`,
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`, // Use dynamic API key
        "HTTP-Referer": "https://v0.dev",
        "X-Title": "Agentforce Quiz Platform",
      },
      body: JSON.stringify({
        model: "xiaomi/mimo-v2-flash:free",
        messages: [systemMessage, ...messages],
        reasoning: {
          enabled: true,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("OpenRouter API error:", errorText)
      if (response.status === 401) {
        return NextResponse.json({ error: "API Key inválida. Verifique sua configuração." }, { status: 401 })
      }
      return NextResponse.json({ error: "Falha ao obter resposta da IA" }, { status: 500 })
    }

    const data = await response.json()
    const assistantMessage = data.choices?.[0]?.message?.content || "Desculpe, não consegui gerar uma resposta."

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
