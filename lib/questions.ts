export interface Question {
  id: number
  title: string
  question: string
  options: { label: string; text: string }[]
  correctAnswer: string
  tip: string
}

export const questions: Question[] = [
  {
    id: 1,
    title: "Sales Summary Requirement",
    question:
      "Universal Containers has a requirement to provide a sales summary for its sales reps who are using Employee Agents, but they are not happy with the default answer. Which best practice should the Agentforce Specialist recommend?",
    options: [
      { label: "A", text: "Update the standard record summary action." },
      { label: "B", text: "Create a Record Summary custom prompt template." },
      { label: "C", text: "Create a Knowledge Answer custom prompt template." },
    ],
    correctAnswer: "B",
    tip: "Para personalizar o resumo de registros além do padrão, a prática recomendada é criar um 'Record Summary prompt template'. Isso permite definir instruções específicas e incluir dados relevantes para atender às necessidades dos representantes de vendas.",
  },
  {
    id: 2,
    title: "Trade Show Leads (Nurture 24/7)",
    question:
      "Universal Containers (UC) recently attended a major trade show and received thousands of new leads from event badge scans. UC is struggling to follow up with each lead in a timely, personalized way. Leadership wants to: Qualify and nurture leads 24/7. * Provide accurate answers to prospect questions. * Automatically book meetings with qualified prospects. * Free up reps to focus on building relationships and closing deals. Which Agentforce capability should UC implement to meet these goals?",
    options: [
      { label: "A", text: "Commerce Agent" },
      { label: "B", text: "Sales Coach" },
      { label: "C", text: "SDR Agent" },
    ],
    correctAnswer: "C",
    tip: "O SDR (Sales Development Representative) Agent é projetado especificamente para engajar, qualificar e nutrir leads 24/7, o que se alinha perfeitamente com a necessidade da UC de tratar leads de feiras comerciais a qualquer hora.",
  },
  {
    id: 3,
    title: "Custom Agent Action (Action Selected Incorrectly)",
    question:
      "An AI Specialist is creating a custom action for Agentforce. Which setting should the AI Specialist test and iterate on to ensure the action performs as expected?",
    options: [
      { label: "A", text: "Action Instructions" },
      { label: "B", text: "Classification Description" },
      { label: "C", text: "Action Scope" },
    ],
    correctAnswer: "A",
    tip: "Se o tópico (Topic) já foi selecionado corretamente, o problema está na escolha da ação dentro desse tópico. As 'Action Instructions' (Instruções da Ação) são usadas pelo mecanismo de raciocínio para entender o que a ação faz e quando deve ser usada.",
  },
  {
    id: 4,
    title: "Customize Standard Case Summary",
    question:
      "Universal Containers' service team wants to customize the standard case summary response from Agentforce. What should the Agentforce Specialist do to achieve this?",
    options: [
      { label: "A", text: "Customize the standard Record Summary template for the Case object." },
      { label: "B", text: "Summarize the Case with a standard agent action." },
      { label: "C", text: "Create a custom Record Summary prompt template for the Case object." },
    ],
    correctAnswer: "C",
    tip: "Não é possível modificar diretamente os templates padrão. Para customizar o resumo de um caso (Case), deve-se criar um novo 'Record Summary prompt template' personalizado e associá-lo ao objeto Case.",
  },
  {
    id: 5,
    title: "Field Generation Pre-requisite",
    question:
      "Universal Containers (UC) is considering using a Field Generation prompt template type. What should UC check before creating the Field Generation prompt to ensure it is possible for the field to be enabled for generative AI?",
    options: [
      { label: "A", text: "That the org is set to API version 59 or higher" },
      {
        label: "B",
        text: "That the Lightning page layout where the field will reside has been upgraded to Dynamic Forms",
      },
      { label: "C", text: "That the field chosen is a rich text field with 255 characters or more" },
    ],
    correctAnswer: "B",
    tip: "O recurso de 'Field Generation' exige que o layout da página Lightning tenha sido atualizado para 'Dynamic Forms'. Dynamic Forms é necessário para que o template de geração de campo possa renderizar e atualizar dinamicamente os valores do campo.",
  },
  {
    id: 6,
    title: "Scalable Testing Process",
    question:
      "Universal Containers wants to systematically validate agent responses before deployment using a scalable testing process. Which Testing Center approach should the company implement?",
    options: [
      { label: "A", text: "Use pilot users in production to flag incorrect responses post launch." },
      { label: "B", text: "Manually interact with the agent in Builder until responses seem correct." },
      { label: "C", text: "Upload a structured CSV test template and run batch test cases in Testing Center." },
    ],
    correctAnswer: "C",
    tip: "Para testes escaláveis e sistemáticos, o 'Testing Center' permite o upload de arquivos CSV com casos de teste em lote. Isso é muito mais eficiente e confiável do que testes manuais ou arriscar testes em produção.",
  },
  {
    id: 7,
    title: "Custom Prompt for LWC",
    question:
      "Universal Containers (UC) needs to create a custom prompt template that can be called from a Lightning web component. Which prompt template type should UC create?",
    options: [
      { label: "A", text: "Flex" },
      { label: "B", text: "Field Generation" },
      { label: "C", text: "Sales Email" },
    ],
    correctAnswer: "A",
    tip: "Os templates 'Flex' são os mais versáteis e permitem criar prompts personalizados que podem ser invocados em diversos contextos, incluindo através de LWC (Lightning Web Components) via Apex ou API.",
  },
  {
    id: 8,
    title: "Hallucinating Weblinks",
    question:
      "An AgentForce Specialist wants to troubleshoot an agent that is hallucinating weblinks. The agent has an action that uses a prompt template, which is using a knowledge retriever, to generate the output text that the agent will use. Which process is appropriate to find the root cause of the hallucination behavior?",
    options: [
      { label: "A", text: "Examine the topic name and classification description for hallucination guardrails." },
      {
        label: "B",
        text: "Examine the prompt instructions and contents of the chunks shown in the resolved prompt output.",
      },
      {
        label: "C",
        text: 'Examine the topic instructions and ensure the word "ALWAYS" is used in the hallucination guardrails.',
      },
    ],
    correctAnswer: "B",
    tip: "Para entender alucinações, é crucial ver exatamente o que foi enviado ao LLM. Examinar a saída do prompt resolvido mostra as instruções exatas e os 'chunks' de dados recuperados, permitindo identificar se o link inventado veio de dados ruins ou instruções vagas.",
  },
  {
    id: 9,
    title: "Product Documentation Changes (Retrieval Accuracy)",
    question:
      "Universal Containers wants to keep retrieval accurate as product documentation changes frequently. Which approach should the company implement?",
    options: [
      { label: "A", text: "Manually delete the stale data chunks." },
      { label: "B", text: "Rebuild the search index." },
      { label: "C", text: "Leave embeddings unchanged even if content is updated." },
    ],
    correctAnswer: "B",
    tip: "Quando o conteúdo fonte muda significativamente, os índices de busca vetorial podem ficar desatualizados. Reconstruir o índice (Rebuild the search index) garante que os embeddings reflitam o conteúdo mais recente da documentação.",
  },
  {
    id: 10,
    title: "Extracting Specific Data (Name, Phone)",
    question:
      "An Agentforce Specialist needs to create a prompt template that extracts the customer's name, phone number, and case number from a block of text, and nothing else. How should the Agentforce Specialist structure the prompt to ensure the large language model (LLM) doesn't include extra conversation or text?",
    options: [
      { label: "A", text: "Ask the LLM to extract and only output the important information in the text." },
      {
        label: "B",
        text: "Ensure in the prompt that the LLM has been told to only use name value pairs in the response.",
      },
      { label: "C", text: "Use well-defined output instructions and provide desired output examples." },
    ],
    correctAnswer: "C",
    tip: "LLMs funcionam melhor com exemplos claros (Few-Shot Learning) e instruções de saída rígidas. Fornecer exemplos do formato de saída desejado é a maneira mais eficaz de garantir que ele extraia apenas os campos solicitados e no formato correto.",
  },
  {
    id: 11,
    title: "Deploying New Agent",
    question:
      "Universal Containers' administrator has developed a new agent in a sandbox environment and now wants to deploy it to production. What should the administrator do to deploy an agent?",
    options: [
      {
        label: "A",
        text: "Export agent components as JSON files and manually import them into production using the Metadata API.",
      },
      {
        label: "B",
        text: "Manually recreate the agent configuration, topics, and actions in production because change sets cannot be used.",
      },
      {
        label: "C",
        text: "Create an outbound change set with all the necessary agent components, then upload to production.",
      },
    ],
    correctAnswer: "C",
    tip: "Change Sets (Conjuntos de Alterações) são o método padrão suportado para migrar configurações de agentes entre ambientes Salesforce (Sandbox para Produção). É necessário incluir todos os componentes dependentes.",
  },
  {
    id: 12,
    title: "Related List in Prompt Builder",
    question:
      "Universal Containers (UC) has a new AI project. What should UC consider when adding a related list on the Account object to be used in the prompt template?",
    options: [
      {
        label: "A",
        text: "After selecting a related list from the Account, use the field picker to choose merge fields in Prompt Builder.",
      },
      { label: "B", text: "Prompt Builder must be used to assign the fields from the related list as a JSON format." },
      {
        label: "C",
        text: "The fields for the related list are based on the default page layout of the Account for the current user.",
      },
    ],
    correctAnswer: "A",
    tip: "No Prompt Builder, ao acessar dados relacionados, você primeiro seleciona a lista relacionada e depois escolhe especificamente quais campos deseja incluir no prompt. Isso dá controle preciso sobre os dados de contexto.",
  },
  {
    id: 13,
    title: "Flow Error After Deployment",
    question:
      "An administrator at Universal Containers has successfully deployed a new agent from a sandbox to production using a change set. The agent uses a prompt template that invokes a Salesforce flow to perform a complex calculation. In production, when users interact with the agent, it fails with an error message every time the flow is supposed to run. The flow was included in the change set and is present in production. What is the most likely cause of this issue?",
    options: [
      { label: "A", text: "The change set did not include the dependent Apex classes for the flow." },
      { label: "B", text: "The user in production does not have permission to run the flow." },
      { label: "C", text: "The flow was not manually activated in the production org after the deployment." },
    ],
    correctAnswer: "C",
    tip: "É um erro comum em implantações Salesforce: fluxos (Flows) implantados via Change Sets frequentemente chegam em estado inativo por padrão e precisam ser ativados manualmente na organização de destino.",
  },
  {
    id: 14,
    title: "Flex Prompt Template Best Practice",
    question:
      "An Agentforce Specialist is building a Flex prompt template. Which best practice should the Agentforce Specialist follow when creating the Flex prompt template?",
    options: [
      {
        label: "A",
        text: "Provide the large language model (LLM) with contextual information and give it a role such as a sales or support rep.",
      },
      {
        label: "B",
        text: "Ground the large language model (LLM) with a retriever and create a custom field to store the LLM generated response.",
      },
      {
        label: "C",
        text: "Ground the large language model (LLM) with account data and create a custom field account summary to store the LLM-generated response.",
      },
    ],
    correctAnswer: "A",
    tip: "Atribuir uma 'persona' ou papel ao LLM (ex: 'Você é um representante de vendas experiente') é uma técnica fundamental de engenharia de prompt. Isso ajuda a calibrar o tom, o estilo e o foco da resposta gerada.",
  },
  {
    id: 15,
    title: "Service Agent Knowledge Issue",
    question:
      "Universal Containers deploys a new Agentforce Service Agent into the company's website but is getting feedback that the Agentforce Service Agent is not providing answers to customer questions that are found in the company's Salesforce Knowledge articles. What is the likely issue?",
    options: [
      { label: "A", text: "The Agentforce Service Agent user is not assigned the correct Agent Type License." },
      { label: "B", text: "The Agentforce Service Agent user was not given the Allow View Knowledge permission set." },
      {
        label: "C",
        text: "The Agentforce Service Agent user needs to be created under the standard Agent Knowledge profile.",
      },
    ],
    correctAnswer: "B",
    tip: "O agente opera sob um usuário de integração dedicado. Para que ele acesse os artigos de conhecimento (Knowledge), esse usuário precisa ter permissões explícitas para visualizar esses registros, como a permissão 'Allow View Knowledge'.",
  },
  {
    id: 16,
    title: "Real-world User Utterances",
    question:
      "Before activating a custom agent action, an Agentforce Specialist would like to evaluate multiple real-world user utterances to ensure the action is being selected appropriately. Which tool should the Agentforce Specialist recommend?",
    options: [
      { label: "A", text: "Agentforce Builder" },
      { label: "B", text: "Prompt Builder" },
      { label: "C", text: "Testing Center" },
    ],
    correctAnswer: "C",
    tip: "O 'Testing Center' é a ferramenta dedicada para validação. Ele permite testar como o agente reage a diferentes frases (utterances) e verificar se a intenção está sendo classificada corretamente para a ação esperada.",
  },
  {
    id: 17,
    title: "Search Index Creation",
    question: "What is automatically created when a search index is created in Data Cloud?",
    options: [
      {
        label: "A",
        text: "A dynamic retriever to allow runtime selection of retriever parameters without manual configuration",
      },
      {
        label: "B",
        text: "A predefined Apex retriever class that can be edited by a developer to meet specific needs",
      },
      { label: "C", text: "A default retriever that shares the name of the custom search index" },
    ],
    correctAnswer: "C",
    tip: "Para simplificar a configuração, o Data Cloud cria automaticamente um 'retriever' padrão associado ao novo índice de busca. Isso permite que você comece a usar o índice em prompts imediatamente.",
  },
  {
    id: 18,
    title: "Immutable Prompt Template",
    question: "What does it mean when a prompt template version is described as immutable?",
    options: [
      { label: "A", text: "Only the latest version of a template can be activated." },
      { label: "B", text: "Every modification on a template will be saved as a new version automatically." },
      {
        label: "C",
        text: "After a prompt template version is activated, no further changes can be saved to that version.",
      },
    ],
    correctAnswer: "C",
    tip: "Imutabilidade garante estabilidade. Uma vez ativada, uma versão específica de um template não pode ser alterada para evitar quebrar processos em produção que dependem dela. Alterações exigem criar uma nova versão.",
  },
  {
    id: 19,
    title: "Persisting Preferences (Dietary/Activity)",
    question:
      "Coral Cloud Resorts (CCR) sees the agent forgot the dietary/activity preferences gathered earlier. They need those preferences to persist throughout the session. What should CCR implement?",
    options: [
      { label: "A", text: "Create a context variable to capture/store customer preferences as action outputs." },
      { label: "B", text: "Rely on natural conversation memory and instruct the agent to look back." },
      { label: "C", text: "Configure custom variables to capture/store customer preferences from action outputs." },
    ],
    correctAnswer: "A",
    tip: "Context Variables (Variáveis de Contexto) são usadas para manter informações durante a sessão do agente. Ao salvar as preferências nessas variáveis, elas ficam acessíveis para todas as ações subsequentes na conversa.",
  },
  {
    id: 20,
    title: "Ambiguous Terms Retrieval",
    question:
      "Coral Cloud Resorts is implementing Agentforce retrieval. Customers sometimes type ambiguous terms (for example, \"package\" could mean vacation package or baggage). Which retrieval strategy best balances precision and contextual disambiguation?",
    options: [
      {
        label: "A",
        text: "Use hybrid search, which combines keyword matching for precision with semantic embeddings for context.",
      },
      {
        label: "B",
        text: "Use keyword search only, which prioritizes exact term matching but risks missing contextual meaning.",
      },
      {
        label: "C",
        text: "Use semantic search only, which captures intent but may struggle with ambiguous terms when no context is provided.",
      },
    ],
    correctAnswer: "A",
    tip: "A busca híbrida (Hybrid Search) é a melhor escolha porque aproveita o melhor dos dois mundos: palavras-chave para precisão exata (útil para termos técnicos ou nomes) e busca semântica para entender o contexto e intenção por trás do termo.",
  },
  {
    id: 21,
    title: "Concierge Agent Metrics",
    question:
      "Coral Cloud Resorts is about to start testing its concierge agent with guests. Which metrics should be captured to monitor the performance, correctness, and user experience?",
    options: [
      { label: "A", text: "Response performance, tone, and CSATs" },
      { label: "B", text: "Response times, accuracy and relevance of answers, and resolution success" },
      { label: "C", text: "Agent performance, token usage, and conversation duration" },
    ],
    correctAnswer: "B",
    tip: "Para medir a eficácia de um agente, métricas de resultado são cruciais: precisão das respostas (Accuracy), relevância e se o problema do usuário foi resolvido (Resolution Success), além de tempos de resposta aceitáveis.",
  },
  {
    id: 22,
    title: "Small Accounts (No-code strategy)",
    question:
      "An Agentforce Specialist at Universal Containers (UC) is building with no-code tools only. They have many small accounts that are only touched periodically by a specialized sales team, and UC wants to maximize the sales operations team's time. UC wants to help prep the sales team for the calls by summarizing past purchases, interests in products shown by the Contact captured via Data Cloud, and a recap of past email and phone conversations for which there are transcripts. Which approach should the Agentforce Specialist recommend to achieve this use case?",
    options: [
      { label: "A", text: "Deploy UC's own custom foundational model on this data first." },
      {
        label: "B",
        text: "Use a prompt template grounded on CRM and Data Cloud data using standard foundation models.",
      },
      { label: "C", text: "Fine-tune the standard foundational model due to the complexity of the data." },
    ],
    correctAnswer: "B",
    tip: "A abordagem 'no-code' ideal no ecossistema Salesforce é usar Prompt Templates combinados com dados de aterramento (grounding) do CRM e Data Cloud. Isso evita a complexidade de criar ou ajustar modelos personalizados.",
  },
  {
    id: 23,
    title: "Flow Data Access (Running User)",
    question:
      "Universal Containers has a custom Agent action calling a flow to retrieve the real-time status of an order from the order fulfillment system. For the given flow, what should the AI Specialist consider about the running user's data access?",
    options: [
      {
        label: "A",
        text: "The custom action adheres to the permissions, field level security, and sharing settings configured in the flow.",
      },
      {
        label: "B",
        text: "The agent will always run flows in system mode so the running user's data access will not affect the data returned.",
      },
      { label: "C", text: "The flow must have the 'with sharing' permission selected in the advanced settings..." },
    ],
    correctAnswer: "A",
    tip: "A segurança é primordial. Ações personalizadas que chamam fluxos respeitam o contexto de execução definido no fluxo. É crucial garantir que o fluxo e o usuário do agente tenham as permissões corretas para acessar os dados necessários.",
  },
  {
    id: 24,
    title: "Slack Integration",
    question:
      "Universal Containers has created an Employee Agent. Which step should an Agentforce Specialist take to connect the agent with a Slack channel?",
    options: [
      {
        label: "A",
        text: "Create an embedded service deployment and connection between Salesforce and the Slack workspace.",
      },
      { label: "B", text: "Create an Omni Channel flow and connection between Salesforce and the Slack workspace." },
      { label: "C", text: "Create a connection between Salesforce and the Slack workspace." },
    ],
    correctAnswer: "C",
    tip: "Para disponibilizar um agente no Slack, o passo de configuração fundamental é estabelecer a conexão entre a org Salesforce e o workspace do Slack através das configurações de 'Slack for Salesforce'.",
  },
  {
    id: 25,
    title: "Agent-to-Agent (A2A) Protocol",
    question: "When is the Agent-to-Agent (A2A) protocol an appropriate communication choice?",
    options: [
      { label: "A", text: "When agents need to invoke third party API" },
      { label: "B", text: "When agents need to collaborate" },
      { label: "C", text: "When agents need to access tools" },
    ],
    correctAnswer: "B",
    tip: "O protocolo A2A é projetado para permitir a colaboração e transferência de tarefas entre agentes especializados, permitindo que um agente delegue uma parte complexa de uma solicitação para outro agente mais apto.",
  },
  {
    id: 26,
    title: "Phrasing Diversity (Testing)",
    question:
      "Coral Cloud Resorts wants to cover a broad range of user phrasing when testing its FAQ agent. Which Testing Center feature meets that need?",
    options: [
      { label: "A", text: "Uploading only a small set of manually written prompts" },
      { label: "B", text: "Relying on live customer logs to capture phrasing diversity after deployment" },
      { label: "C", text: "AI-generated synthetic test utterances based on natural language variations" },
    ],
    correctAnswer: "C",
    tip: "Para testes robustos, usar IA para gerar variações sintéticas de frases (utterances) permite cobrir centenas de maneiras diferentes de fazer a mesma pergunta, algo inviável de fazer manualmente.",
  },
  {
    id: 27,
    title: "Marketing Team AI Solution",
    question:
      "Universal Containers (UC) wants to empower its marketing team with AI capabilities that help employees quickly find campaign data, generate creative content, and manage project tasks. The solution should also allow marketers to receive personalized support, surface relevant information, and complete work directly in Salesforce. Which AI solution should UC implement?",
    options: [
      { label: "A", text: "Employee Agent" },
      { label: "B", text: "Service Agent" },
      { label: "C", text: "Sales Coach Agent" },
    ],
    correctAnswer: "A",
    tip: "Para uso interno (como uma equipe de marketing), a solução correta é o 'Employee Agent'. Ele é configurado para auxiliar funcionários em tarefas produtivas, criativas e administrativas, ao contrário dos agentes voltados para clientes externos.",
  },
  {
    id: 28,
    title: "External PDF Guides",
    question:
      "Universal Containers has PDF maintenance guides in an external folder, not yet in Salesforce. The team wants a standard, clicks-only setup for the Service Agent to use these documents. Which approach should the Agentforce Specialist implement?",
    options: [
      {
        label: "A",
        text: "Configure Data Cloud to ingest file attachments and create custom index and retriever for product record and attachment data.",
      },
      {
        label: "B",
        text: "Upload the PDFs as File source in the Agentforce Data Library which will build a Search Index, and create a retriever to ground responses from those documents.",
      },
      { label: "C", text: "Paste external PDF links into topic instructions..." },
    ],
    correctAnswer: "B",
    tip: "A maneira mais direta e 'no-code' (\"clicks-only\") de incluir documentos externos é fazer o upload deles para a 'Data Library' do Agentforce. Isso automatiza a indexação e criação de retrievers para que o agente possa usar o conteúdo.",
  },
  {
    id: 29,
    title: "PII in RAG",
    question:
      "A company wants to retrieve patient history details to augment the AI agent response. The company wants to leverage the Data Cloud search index feature. What is best practice when considering retrieval-augmented generation (RAG) for information that may contain personally identifiable information (PII)?",
    options: [
      { label: "A", text: "Depend on the agent's prompt to avoid exposing PII." },
      { label: "B", text: "Encrypt embeddings, but still index PII records." },
      { label: "C", text: "Mask sensitive fields and index only non-PII data." },
    ],
    correctAnswer: "C",
    tip: "A melhor prática de segurança e privacidade é evitar indexar dados sensíveis não necessários. Mascarar campos PII garante que eles não sejam expostos no índice ou em respostas geradas, focando nos dados clínicos relevantes.",
  },
  {
    id: 30,
    title: "Deployment Metadata Component",
    question:
      "A developer is using the Salesforce CLI to deploy agent components from a sandbox to production. They recently made a change to several topics, instructions, and actions. Which metadata component should the developer include in their package.xml file that contains all of the topics and actions an agent will interact with?",
    options: [
      { label: "A", text: "EinsteinAiPlannerBundle" },
      { label: "B", text: "genAiPlannerBundle" },
      { label: "C", text: "BotBundle" },
    ],
    correctAnswer: "B",
    tip: "O componente de metadados que encapsula a configuração do planejador de IA (incluindo tópicos e mapeamento de ações) no Agentforce é o 'genAiPlannerBundle'.",
  },
  {
    id: 31,
    title: "Service Plan Upgrade Use Case",
    question:
      "When a verified customer in a help center says, \"I want to upgrade my service plan,\" an AI agent needs to complete the following tasks: Verify identity and entitlement. Create a new quote. Calculate a prorated upgrade amount. Escalate to an Account Executive (AE) only if the reorder exceeds USD 25,000. Which type of agent should an AgentForce Specialist build to support this use case?",
    options: [
      { label: "A", text: "Employee Agent to orchestrate internal logistics and finance" },
      {
        label: "B",
        text: "Service Agent to resolve the case end-to-end and create a new opportunity for the sales team",
      },
      { label: "C", text: "Sales Agent to handle the upsell and large-deal escalation" },
    ],
    correctAnswer: "B",
    tip: "O cenário descreve um atendimento ao cliente que evolui para uma venda. O 'Service Agent' é capaz de lidar com a resolução ponta a ponta, incluindo tarefas complexas como verificação e criação de cotações, mantendo o contexto do serviço.",
  },
  {
    id: 32,
    title: "Hybrid Search Benefit",
    question: "Which statement explains why a company might prefer a hybrid search index in Data Cloud for Agentforce?",
    options: [
      {
        label: "A",
        text: "Vector embeddings in hybrid search are prefiltered by keyword matches, reducing computational overhead and improving response accuracy.",
      },
      {
        label: "B",
        text: "Hybrid search indexes support both literal keyword matches and semantic recall, useful when queries mix specific terms and intent.",
      },
      {
        label: "C",
        text: "Hybrid search indexes process queries faster than vector search because they eliminate the need for semantic embedding.",
      },
    ],
    correctAnswer: "B",
    tip: "A busca híbrida combina correspondência exata de palavras-chave (bom para nomes de produtos, IDs) com busca semântica (bom para conceitos). Isso é crucial quando as consultas dos usuários misturam termos específicos com linguagem natural.",
  },
  {
    id: 33,
    title: "Custom Retriever Filters",
    question: "What is the purpose of applying filters in a custom retriever configuration?",
    options: [
      { label: "A", text: "Filters automatically encrypt and mask sensitive fields in the search index..." },
      { label: "B", text: "Filters reformat and aggregate multiple documents into a single summary output..." },
      {
        label: "C",
        text: "Filters narrow the search results by applying up to 10 conditions based on fields defined in the search index, thereby enhancing the relevancy of the content returned.",
      },
    ],
    correctAnswer: "C",
    tip: "Filtros em retrievers servem para restringir o escopo da busca aos dados relevantes (ex: apenas documentos 'Publicados' ou de uma 'Região' específica), aumentando a precisão e relevância das informações passadas ao LLM.",
  },
  {
    id: 34,
    title: "Identity Verification Pattern",
    question:
      "Universal Containers (UC) is expanding its Agentforce for Service capabilities to include case management. For security purposes, UC wants the agent to verify a customer's identity before providing any case-related information. The verification must be deterministic-ensuring that no case details are shared unless identity verification has been successfully completed. Which approach best meets this requirement?",
    options: [
      { label: "A", text: 'Use keywords such as "Always" and "Never" to write clear logic in Topic Instructions...' },
      { label: "B", text: "Store the verification status in a custom variable and set a global instruction..." },
      {
        label: "C",
        text: 'Create a variable to store the verification status, set it as output from a "Verify Identity" action, and apply a filter so any case-related actions only run when the variable confirms verification.',
      },
    ],
    correctAnswer: "C",
    tip: "Para controle de fluxo determinístico como segurança/verificação, usar variáveis de saída de ação e filtros condicionais é a prática recomendada. Isso garante tecnicamente que ações sensíveis não possam ser executadas sem a validação prévia.",
  },
  {
    id: 35,
    title: "Query Oracle ERP",
    question:
      "Universal Containers wants to allow its service agents to query the current fulfillment status of an order with natural language. There is an existing autolaunched flow to query the information from Oracle ERP, which is the system of record for the order fulfillment process. How should an AI Specialist apply the power of conversational AI to this use case?",
    options: [
      { label: "A", text: "Configure the Integration Flow standard action in Agent Builder." },
      { label: "B", text: "Create a custom agent action which calls a flow." },
      { label: "C", text: "Create a Flex prompt template in Prompt Builder." },
    ],
    correctAnswer: "B",
    tip: "Para integrar com sistemas externos e executar lógica de negócios (como consultar um ERP), a melhor abordagem é encapsular essa lógica em um Salesforce Flow e expor esse fluxo como uma 'Custom Agent Action'.",
  },
  {
    id: 36,
    title: "Poor Prompt Performance Explanation",
    question:
      "Universal Containers recently rolled out Einstein Generative AI capabilities and has created a custom prompt to summarize case records. Users have reported that the generated case summaries are not returning the appropriate information. What is a possible explanation for the poor prompt performance?",
    options: [
      { label: "A", text: "The prompt template version is incompatible with the chosen large language model (LLM)." },
      { label: "B", text: "The Einstein Trust Layer is incorrectly configured." },
      { label: "C", text: "The data being used for grounding is incorrect or incomplete." },
    ],
    correctAnswer: "C",
    tip: "Em sistemas RAG (Retrieval-Augmented Generation), a qualidade da resposta (saída) depende diretamente da qualidade dos dados fornecidos (entrada). Se o resumo está ruim, geralmente é porque os dados usados para 'grounding' estão incompletos ou errados.",
  },
  {
    id: 37,
    title: "HR Policies (Latest and Active)",
    question:
      "Universal Containers (UC) wants to build an Agentforce Service Agent that provides the latest, active, and relevant policy and compliance information to customers. The agent must: Semantically search HR policies, compliance guidelines, and company procedures. Ensure responses are grounded on published Knowledge. Allow Knowledge updates to be reflected immediately without manual reconfiguration. What should UC do to ensure the agent retrieves the right information?",
    options: [
      { label: "A", text: "Enable the agent to search all internal records and past customer inquiries." },
      { label: "B", text: "Set up an Agentforce Data Library to store and index policy documents for AI retrieval." },
      { label: "C", text: "Manually add policy responses into the AI model to prevent hallucinations." },
    ],
    correctAnswer: "B",
    tip: "A 'Agentforce Data Library' é o local central para gerenciar documentos não estruturados (como políticas). Ao usá-la, você garante que o agente busque informações na fonte oficial, indexada e atualizada.",
  },
  {
    id: 38,
    title: "Sensitive Medical Data Access",
    question:
      "Universal Containers (UC) is setting up a new Agentforce Service Agent. The company has sensitive medical product research stored internally and wants to ensure the agent cannot access it. What should UC do?",
    options: [
      {
        label: "A",
        text: "Follow the principle of least privilege and avoid granting permission to view the Medical Product object or related fields.",
      },
      {
        label: "B",
        text: "Disable the Agentforce Service Agent's ability to use any Salesforce custom object or related fields.",
      },
      {
        label: "C",
        text: "Assign the Agentforce Service Agent user the lowest possible role in the organization's hierarchy to block access.",
      },
    ],
    correctAnswer: "A",
    tip: "O princípio do menor privilégio é fundamental. O agente acessa dados através de um usuário específico; simplesmente não conceder permissão de leitura aos objetos sensíveis (Medical Product) garante que o agente não possa acessá-los.",
  },
  {
    id: 39,
    title: "Answer Based on Similar Cases",
    question:
      "Universal Containers (UC) plans to answer questions based on similar cases that have been successfully resolved in the past. What should UC consider when implementing this approach?",
    options: [
      { label: "A", text: "No action is needed, as past cases are used to answer the question." },
      { label: "B", text: "Create a data model object (DMO) based on Case object and create an index on it." },
      {
        label: "C",
        text: "Create an unstructured data model object (UDMO) based on Case object and create an index on it.",
      },
    ],
    correctAnswer: "C",
    tip: "Para buscar similaridade em textos livres (como descrições de casos anteriores), é necessário usar dados não estruturados. Criar um UDMO e indexá-lo permite a busca vetorial para encontrar casos semanticamente similares.",
  },
  {
    id: 40,
    title: "BYOLLM Error",
    question:
      "Cloud Kicks (CK) recently finished the development of a new prompt template that uses its own large language model (LLM). CK is deploying a prompt template from a sandbox to a production org, and is receiving an error. When trying to deploy the change set, CK is getting an error related to the LLM used in the prompt template. What is the cause of the error?",
    options: [
      { label: "A", text: "The prompt does not specify that it is a custom LLM." },
      { label: "B", text: "BYOLLM is not yet supported for in prompt templates in production." },
      { label: "C", text: "The name of the LLM does not match in sandbox and production." },
    ],
    correctAnswer: "C",
    tip: "Configurações de implantação/ambiente. Se a referência ao modelo (LLM) no template não corresponder exatamente ao nome configurado no ambiente de destino (produção), ocorrerá um erro de validação.",
  },
  {
    id: 41,
    title: "Flex Prompt with Flow Data",
    question:
      "Universal Containers (UC) is building a Flex prompt template. UC needs to use data returned by the flow in the prompt template. Which flow element should UC use?",
    options: [
      { label: "A", text: "Add Flex Instructions" },
      { label: "B", text: "Add Flow Instructions" },
      { label: "C", text: "Add Prompt Instructions" },
    ],
    correctAnswer: "C",
    tip: "O elemento de fluxo 'Add Prompt Instructions' é usado especificamente para passar dados ou instruções coletados durante a execução do fluxo de volta para o contexto do prompt que está sendo construído.",
  },
  {
    id: 42,
    title: "Detailed Product Description Prompt",
    question:
      "Universal Containers (UC) needs to create a prompt template that provides a detailed product description based on the latest product data. The description will be used in marketing materials to ensure consistency and accuracy. Which prompt template type should UC use?",
    options: [
      { label: "A", text: "Sales Email" },
      { label: "B", text: "Field Generation" },
      { label: "C", text: "Record Summary" },
    ],
    correctAnswer: "B",
    tip: "Para gerar conteúdo para um campo específico de um registro (como uma descrição detalhada), o tipo 'Field Generation' é o correto. Ele é otimizado para preencher um campo com base em dados de contexto.",
  },
  {
    id: 43,
    title: "LLM Role in Action Execution",
    question:
      "What is the role of the large language model (LLM) in understanding intent and executing an agent action?",
    options: [
      { label: "A", text: "Determine a user's topic access and sort actions by priority to be executed." },
      { label: "B", text: "Find similar requested topics and provide the actions that need to be executed." },
      { label: "C", text: "Identify the best matching topic and actions and the correct order of execution." },
    ],
    correctAnswer: "C",
    tip: "O LLM atua como o 'cérebro' ou mecanismo de raciocínio. Ele analisa o pedido do usuário, compara com os tópicos/ações disponíveis e decide qual o melhor plano de execução (quais ações e em que ordem) para resolver o problema.",
  },
  {
    id: 44,
    title: "Enrich Event Logs",
    question:
      "What is an Agentforce Specialist able to do when the 'Enrich event logs with conversation data' setting in the Agentforce configuration is enabled?",
    options: [
      { label: "A", text: "Generate details reports on all agent conversations over any time period." },
      { label: "B", text: "View session data including user input and agent responses for sessions." },
      { label: "C", text: "View the user click path that led to each agent action." },
    ],
    correctAnswer: "B",
    tip: "Essa configuração enriquece os logs de evento com o conteúdo real da conversa. Isso permite auditoria e depuração detalhada, vendo exatamente o que o usuário disse e o que o agente respondeu.",
  },
  {
    id: 45,
    title: "Data Lake Object (DLO) for Interactions",
    question:
      "Universal Containers needs to create Data Cloud reports to understand agent behavior. Which data lake object (DLO) represents an overarching container capturing contiguous interactions with one or more AI agents?",
    options: [
      { label: "A", text: "AIAgentInteractionMessage" },
      { label: "B", text: "AIAgentSession" },
      { label: "C", text: "AIAgentInteraction" },
    ],
    correctAnswer: "B",
    tip: "`AIAgentSession` é o objeto que agrupa toda a sessão de interação. Ele serve como o contêiner pai para as mensagens e interações individuais, sendo fundamental para análises no nível da sessão.",
  },
  {
    id: 46,
    title: "Sales Reps Permissions",
    question:
      "Sales reps at Universal Containers should not be able to create or edit prompt templates. Which permission set should an Agentforce Specialist assign to the sales reps?",
    options: [
      { label: "A", text: "Prompt Execute User" },
      { label: "B", text: "Prompt Template Manager" },
      { label: "C", text: "Prompt Template User" },
    ],
    correctAnswer: "C",
    tip: "Para usuários finais que apenas consomem/usamos prompts (como vendedores gerando emails), a permissão correta é 'Prompt Template User'. A permissão 'Manager' daria acesso de edição, o que queremos evitar.",
  },
  {
    id: 47,
    title: "Custom Agent Action Source",
    question:
      "An Agentforce Specialist is creating a custom action in Agentforce. Which option is available for the Agentforce Specialist to choose for the custom agent action?",
    options: [
      { label: "A", text: "SOQL" },
      { label: "B", text: "Flows" },
      { label: "C", text: "Apex trigger" },
    ],
    correctAnswer: "B",
    tip: "No Agentforce Builder, as ações personalizadas são primariamente construídas em cima de **Flows** (Fluxos) ou chamadas de API Apex (Invocable Methods), mas 'Flows' é a opção onipresente para lógica declarativa.",
  },
  {
    id: 48,
    title: "Detailed Interaction Data (Reasoning)",
    question:
      "Universal Containers (UC) needs to capture and store detailed interaction data for all agents. Which feature should help UC get a full view of the agent's behavior from start to finish, including reasoning engine executions, actions, prompt and gateway inputs/outputs, error messages, and final responses?",
    options: [
      { label: "A", text: "Agentforce Session Tracing" },
      { label: "B", text: "Utterance Analysis" },
      { label: "C", text: "Agentforce Analytics" },
    ],
    correctAnswer: "A",
    tip: "'Session Tracing' oferece a visão mais profunda, mostrando não apenas o chat, mas os passos internos do raciocínio, decisões do roteador e chamadas de ferramenta/ação, essencial para debug profundo.",
  },
  {
    id: 49,
    title: "Handoff Verification Persistence",
    question:
      "Universal Containers has multiple Salesforce orgs... verification agent must pass customer identity data to downstream agents handling account modifications... without exposure to large language model (LLM) modification. What is the most appropriate configuration?",
    options: [
      {
        label: "A",
        text: "Store customer identity information in conversation variables created by the first agent and have other agents read those same conversation variables.",
      },
      {
        label: "B",
        text: "Use the Agent API to start the downstream agent's session and pass the verified customer ID as a read-only context variable, ensuring security and preventing LLM alteration.",
      },
      { label: "C", text: "Implement a custom object to temporarily store verification status..." },
    ],
    correctAnswer: "B",
    tip: "Passar dados críticos (como ID verificado) como variáveis de contexto somente leitura via API garante que o próximo agente na cadeia receba o dado confiável, sem risco de alucinação ou alteração pelo modelo de linguagem.",
  },
  {
    id: 50,
    title: "Data Preparation Process",
    question:
      "In the context of retriever and search indexes, what best describes the data preparation process in Data Cloud?",
    options: [
      {
        label: "A",
        text: "Data preparation entails aggregating, normalizing, and encoding structured datasets to ensure compliance with data governance and security protocols.",
      },
      {
        label: "B",
        text: "Data preparation focuses on real time data ingestion and dynamic indexing to generate dynamic grounding reference data without preprocessing steps.",
      },
      {
        label: "C",
        text: "Data preparation involves loading, chunking, vectorizing, and storing content in a search-optimized manner to support retrieval from the vector database.",
      },
    ],
    correctAnswer: "C",
    tip: "O pipeline de ingestão para busca vetorial (RAG) consiste exatamente nestes passos: carregar o dado, quebrá-lo em pedaços menores (chunking), converter para vetores (vectorizing) e armazenar no índice busca.",
  },
  {
    id: 51,
    title: "Digital Experience Site Integration",
    question:
      "Universal Containers (UC) wants to deploy an Agentforce Service Agent to support customers via a web experience. UC uses a Digital Experience site and wants to enable messaging for logged-in users. The customer needs to pass the membership number to the agent for which a pre-chat variable is available. What is a required step to connect the agent to the Digital Experience site using Messaging for In-App and Web?",
    options: [
      {
        label: "A",
        text: "Configure a messaging Lightning web component using standard or custom Lightning Type for Agentforce.",
      },
      {
        label: "B",
        text: "Configure MuleSoft to establish a secure API tunnel between the agent and the Digital Experience site.",
      },
      { label: "C", text: "Create an Omni-Channel flow that routes messages to the agent." },
    ],
    correctAnswer: "C",
    tip: "A rotação de mensagens em canais modernos (MIAW) depende de fluxos Omni-Channel. Você precisa de um fluxo para direcionar a conversa de entrada para o Bot/Agente correto.",
  },
  {
    id: 52,
    title: "Testing Center Environment",
    question:
      "Universal Containers (UC) is preparing to use the Agentforce Testing Center to ensure the reliability of a new agent. UC has a CSV file with test cases and is reviewing the documentation to understand best practices and limitations. Which best practice should the company follow to avoid modifying CRM data while running tests in the Testing Center?",
    options: [
      { label: "A", text: "Use the Testing Center only in the sandbox environment." },
      { label: "B", text: "Limit the number of test cases to 50 per test to minimize data changes." },
      { label: "C", text: "Run tests in the production environment to ensure real-time data accuracy." },
    ],
    correctAnswer: "A",
    tip: "Testes automatizados podem executar ações que criam ou modificam registros (side effects). A prática segura é sempre rodar essas baterias de teste em um ambiente Sandbox (isolado) para não sujar os dados de Produção.",
  },
  {
    id: 53,
    title: "Refund Restriction (Active Status)",
    question:
      "Universal Containers needs to restrict access to refund processing actions so only customers with Active account status can initiate refunds. How should an Agentforce Specialist apply the restriction deterministically?",
    options: [
      { label: "A", text: "Create a Flex Prompt Template that has instructions to check for account status." },
      {
        label: "B",
        text: "Include step-by-step instructions at the topic level and action level explaining the rules and examples.",
      },
      {
        label: "C",
        text: 'Create a context variable for the account status field and apply a conditional filter AccountStatus equals "Active" to refund actions.',
      },
    ],
    correctAnswer: "C",
    tip: "Regras de negócio rígidas (Hard Rules) devem ser implementadas via lógica determinística, não instruções de prompt. Filtros condicionais na ação garantem que o botão 'Reembolsar' só esteja disponível se a condição (Status = Ativo) for verdadeira.",
  },
  {
    id: 54,
    title: "Booking Sequence Execution",
    question:
      "Coral Cloud Resorts needs to ensure its booking agent executes actions in a specific sequence: first retrieve available sessions, then verify customer eligibility, and finally create the booking. The current implementation allows the large language model (LLM) to execute these actions in any order, causing booking failures. Which approach should an Agentforce Specialist implement?",
    options: [
      {
        label: "A",
        text: "Configure topic, classification description, and action instructions with priority levels and sequence indicators to guide the reasoning engine in selecting the correct action order automatically.",
      },
      {
        label: "B",
        text: "Write comprehensive topic instructions detailing the exact sequence of actions using numbered steps and explicit ordering requirements for the reasoning engine to follow during booking workflows.",
      },
      {
        label: "C",
        text: "Create custom variables that store completion status for each step, then implement conditional filters on subsequent actions requiring previous variables to be populated, ensuring deterministic execution order.",
      },
    ],
    correctAnswer: "C",
    tip: "Para forçar uma sequência exata (Passo A -> Passo B -> Passo C), a maneira mais robusta é usar pré-requisitos técnicos: a Ação B só fica disponível (via filtro condicional) se a variável de saída da Ação A estiver preenchida.",
  },
  {
    id: 55,
    title: "Custom Field Access for Service Agent",
    question:
      "Universal Containers (UC) stores case details and updates in several custom fields... Which best practice should UC follow to grant access to this information for the Agentforce Service Agent?",
    options: [
      {
        label: "A",
        text: "Create a new permission set with the Einstein Agent License and enable Read access to the custom fields and custom objects, and assign it to the Agentforce Service Agent user.",
      },
      {
        label: "B",
        text: "Update the Object and Field access in the Einstein Agent User Profile so that the Agentforce Service Agents will always get the necessary access.",
      },
      {
        label: "C",
        text: "Update the Object and Field access in the AgentforceServiceAgentUserPsg permission set group that is already assigned to the Agentforce Service Agent user.",
      },
    ],
    correctAnswer: "C",
    tip: "O usuário do agente já vem com um 'Permission Set Group' padrão. A prática recomendada é adicionar as permissões de campo necessárias a esse grupo (ou a um permission set dentro dele), facilitando a gestão.",
  },
  {
    id: 56,
    title: "Custom Website Integration",
    question:
      "Cloud Kicks wants to integrate its agent with its custom website. The goal is for customers to interact with the custom agent chat interface. Which approach provides the framework for the custom web application to communicate with the agent?",
    options: [
      { label: "A", text: "Agent API" },
      { label: "B", text: "Agent to Agent (A2A)" },
      { label: "C", text: "Model Context Protocol (MCP)" },
    ],
    correctAnswer: "A",
    tip: "A 'Agent API' é a interface programática que permite que aplicações externas (como um site customizado) iniciem sessões e troquem mensagens diretamente com o agente Agentforce.",
  },
  {
    id: 57,
    title: "External Service Data in Prompt",
    question:
      "Universal Containers (UC) has registered an external service and created a template-triggered prompt flow that invokes the external service to fetch data from a REST API. UC now needs to make the response data from the external service usable inside a prompt template as a merge field when the template runs. How should UC meet this requirement?",
    options: [
      { label: "A", text: "Use External Service Record merge fields." },
      { label: "B", text: "Convert the JSON to an XML merge field." },
      { label: "C", text: "Use the 'Add Prompt Instructions' flow element." },
    ],
    correctAnswer: "A",
    tip: "Quando um fluxo invoca um Serviço Externo, os dados retornados podem ser referenciados diretamente como campos de mesclagem (merge fields) se o fluxo estiver corretamente configurado para disponibilizá-los ao prompt.",
  },
  {
    id: 58,
    title: "HTML Knowledge Chunking",
    question:
      "Coral Cloud Resorts is uploading thousands of new HTML knowledge articles files for a resort launch. To ensure Agentforce retrieves accurate responses quickly, which chunking strategy should be used when creating a new index?",
    options: [
      { label: "A", text: "Semantic based passage extraction" },
      { label: "B", text: "Section aware chunking" },
      { label: "C", text: "Conversation-based chunking" },
    ],
    correctAnswer: "B",
    tip: "Para HTML estruturado (como artigos de conhecimento com cabeçalhos), o 'Section aware chunking' é ideal. Ele respeita a estrutura do documento, quebrando-o em seções lógicas em vez de cortar frases no meio.",
  },
  {
    id: 59,
    title: "Sales Email Template Permission",
    question:
      "An Agentforce Specialist needs to enable the use of Sales Email prompt templates for the sales team. The Agentforce Specialist has already created the templates in Prompt Builder. According to best practices, which steps should the Agentforce Specialist take to ensure the sales team can use these templates?",
    options: [
      { label: "A", text: "Assign the Prompt Template Manager permission set and enable Sales Emails in Setup." },
      { label: "B", text: "Assign the Data Cloud Admin permission set and enable Sales Emails in Setup." },
      { label: "C", text: "Assign the Prompt Template User permission set and enable Sales Emails in Setup." },
    ],
    correctAnswer: "C",
    tip: "São dois passos: habilitar o recurso funcionalmente (Enable Sales Emails in Setup) e conceder a permissão de uso aos usuários (Prompt Template User).",
  },
  {
    id: 60,
    title: "Clause Numbers (Exact Match)",
    question:
      "Universal Containers (UC) wants to ensure its compliance team can retrieve exact matches of policy clause numbers from a structured legal document library. Which search type should UC implement?",
    options: [
      { label: "A", text: "Use semantic search to interpret synonyms of clauses dynamically." },
      { label: "B", text: "Use hybrid search to blend keyword and semantic recall." },
      { label: "C", text: "Use keyword search for exact term matching on structured fields like clause numbers." },
    ],
    correctAnswer: "C",
    tip: "Para identificadores exatos como 'Cláusula 4.1.b', a busca semântica pode falhar ou trazer resultados vagos. A 'Keyword Search' (busca por palavra-chave) é a ferramenta certa para correspondência exata de strings.",
  },
  {
    id: 61,
    title: "Test Success Criteria",
    question:
      "Universal Containers (UC) is preparing and defining success criteria for Agentforce Testing Center test cases. Which details should UC specify as the expected output to ensure the tests accurately reflect the agent's functionality?",
    options: [
      { label: "A", text: "Expected Topic API Name" },
      { label: "B", text: "Expected Flow API Name" },
      { label: "C", text: "Expected Prompt Template Name" },
    ],
    correctAnswer: "A",
    tip: "Ao testar a intenção, o sucesso é medido se o agente selecionou o Tópico correto. Validar o 'Expected Topic API Name' confirma que o raciocínio do agente o levou à área de conhecimento correta.",
  },
  {
    id: 62,
    title: "Model Context Protocol (MCP) Scenario",
    question: "Which scenario best illustrates the use of Model Context Protocol (MCP) in an enterprise AI deployment?",
    options: [
      { label: "A", text: "A sales agent discovering other agents' capabilities using Agent Cards" },
      {
        label: "B",
        text: "A customer service agent engaging another agent in real time conversation to resolve tickets",
      },
      {
        label: "C",
        text: "A legal assistant agent using MCP to dynamically find a document classification API to analyze case files",
      },
    ],
    correctAnswer: "C",
    tip: "MCP é um protocolo que permite aos assistentes de IA se conectarem a ferramentas e dados externos de forma padronizada. O cenário C ilustra isso: o agente descobre e usa uma ferramenta externa (API de classificação) dinamicamente.",
  },
  {
    id: 63,
    title: "Agent Action Selection Logic",
    question: "How does Agentforce select the correct action to resolve a user's request?",
    options: [
      {
        label: "A",
        text: "Each topic contains a list of the matching action's user utterances so that the agent can map the user request to the right topic and action.",
      },
      {
        label: "B",
        text: "The reasoning engine identifies the agent action to be executed by its name and action input instructions.",
      },
      {
        label: "C",
        text: "The large language model (LLM) selects the right topic and action, if they exist. If there are no matches, the LLM attempts to answer the user's request.",
      },
    ],
    correctAnswer: "C",
    tip: "O processo é probabilístico e guiado por IA. O LLM analisa o pedido, olha para os metadados dos tópicos/ações disponíveis e escolhe o melhor 'match'. Se nada servir, ele tenta responder com seu conhecimento geral ou base de conhecimento.",
  },
  {
    id: 64,
    title: "Data Libraries Configuration",
    question:
      "Universal Containers is setting up the data library configuration within the Agentforce Builder. What is true regarding Agentforce Data Libraries?",
    options: [
      { label: "A", text: "An agent can have only one data library assigned to it." },
      { label: "B", text: "Only data library owners can assign it to the agent." },
      { label: "C", text: "Each data category can only have one data library." },
    ],
    correctAnswer: "A",
    tip: "Atualmente, a arquitetura do Agentforce geralmente vincula um agente a uma biblioteca de dados principal (Data Library) para 'grounding' de conhecimento não estruturado, simplificando o contexto de busca.",
  },
  {
    id: 65,
    title: "Daily Schedule Agent",
    question:
      "The Agentforce Specialist for Cloud Kicks wants to create an agent that will allow the sales staff to schedule their daily tasks, and assist in providing detailed explanations behind prices and deals of the products. Following Salesforce best practices, which type of agent should the Agentforce Specialist create?",
    options: [
      { label: "A", text: "Service Agent" },
      { label: "B", text: "Employee Agent" },
      { label: "C", text: "Sales Agent" },
    ],
    correctAnswer: "C",
    tip: "Para auxiliar a equipe de vendas com tarefas específicas de vendas (agendamento, preços, negócios), o 'Sales Agent' (ou Sales Coach) é o tipo especializado que vem com o contexto e funcionalidades otimizadas para esse papel.",
  },
  {
    id: 66,
    title: "Process to leverage Prompt Builder",
    question: "What is the correct process to leverage Prompt Builder in a Salesforce org?",
    options: [
      {
        label: "A",
        text: "Select the appropriate prompt template type to use, develop the prompt within the prompt workspace, select resources to dynamically insert CRM-derived grounding data, pick the model to use, and test and validate the generated responses.",
      },
      { label: "B", text: "Enable the target object for generative prompting..." },
      { label: "C", text: "Select the appropriate prompt template type to use... standard prompts..." },
    ],
    correctAnswer: "A",
    tip: "O fluxo de trabalho correto no Prompt Builder é metódico: Escolher o Tipo -> Escrever o Prompt -> Inserir Dados (Grounding) -> Escolher o Modelo -> Testar. Essa sequência garante que o prompt funcione com dados reais antes de ser ativado.",
  },
  {
    id: 67,
    title: "Email Placeholders",
    question:
      "Universal Containers tests out a new Einstein Generative AI feature for its sales team to create personalized and contextualized emails for its customers. Sometimes, users find that the draft email contains placeholders for attributes that could have been derived from the recipient's contact record. What is the most likely explanation for why the draft email shows these placeholders?",
    options: [
      { label: "A", text: "The user does not have Einstein Sales Emails permission assigned." },
      { label: "B", text: "The user does not have permission to access the fields." },
      { label: "C", text: "The user's locale language is not supported by Prompt Builder." },
    ],
    correctAnswer: "B",
    tip: "Se o Einstein não consegue preencher um placeholder, geralmente é por falta de acesso. Se o usuário que está gerando o email não tem permissão de leitura (FLS) no campo mapeado, o sistema não pode recuperar o valor, resultando em espaços em branco ou placeholders não resolvidos.",
  },
  {
    id: 68,
    title: "PDF Ingestion Missing Field",
    question:
      "Universal Containers (UC) configured a new PDF file ingestion in Data Cloud with all the required fields, and also created the mapping and the search index. UC is now setting up the retriever and notices a required field is missing. How should UC resolve this?",
    options: [
      { label: "A", text: "Update the search index to include the desired field." },
      { label: "B", text: "Modify the retriever's configuration to include the desired field." },
      { label: "C", text: "Create a new custom Data Cloud object that includes the desired field." },
    ],
    correctAnswer: "A",
    tip: "Se um campo não está pesquisável ou recuperável, ele provavelmente não foi incluído no Índice de Busca (Search Index). Você precisa atualizar a configuração do índice para mapear e incluir esse novo campo dos dados ingeridos.",
  },
  {
    id: 69,
    title: "Reasoning Engine Function",
    question: "What is the primary function of the reasoning engine in Agentforce?",
    options: [
      { label: "A", text: "Identifying agent topics and actions to respond to user utterances" },
      { label: "B", text: "Generating record queries based on conversation history" },
      { label: "C", text: "Offering real-time natural language response during conversations" },
    ],
    correctAnswer: "A",
    tip: "O trabalho central do 'Reasoning Engine' é o planejamento: entender o que o usuário quer (utterance) e mapear isso para as ferramentas que ele tem (Topics e Actions). É o maestro que decide o que fazer.",
  },
  {
    id: 70,
    title: "Generative AI Replies",
    question:
      "When a customer chat is initiated, which functionality in Salesforce provides generative AI replies or draft emails based on recommended Knowledge articles?",
    options: [
      { label: "A", text: "Einstein Grounding" },
      { label: "B", text: "Einstein Reply Recommendations" },
      { label: "C", text: "Einstein Service Replies" },
    ],
    correctAnswer: "C",
    tip: "'Einstein Service Replies' é o recurso específico para chat/mensageria que usa GenAI para rascunhar respostas instantâneas baseadas no contexto da conversa e base de conhecimento, ajudando o agente humano.",
  },
  {
    id: 71,
    title: "Token Limit Errors",
    question:
      "Universal Containers built a Field Generation prompt template that worked for many records, but users are reporting random failures with token limit errors. What is the cause of the random nature of this error?",
    options: [
      { label: "A", text: "The template type needs to be switched to Flex..." },
      {
        label: "B",
        text: "The number of tokens generated by the dynamic nature of the prompt template will vary by record.",
      },
      { label: "C", text: "The number of tokens that can be processed by the LLM varies with total user demand." },
    ],
    correctAnswer: "B",
    tip: "O erro de limite de tokens geralmente é variável porque depende dos dados. Se um registro específico tiver muito texto nos campos relacionados usados para 'grounding', ele pode estourar o limite de entrada do modelo, enquanto outros registros menores funcionam bem.",
  },
]
