const insights = {
  insights: {
    hero: {
      label: "INSIGHTS",
      title: "Posições técnicas, escritas com cuidado.",
      intro:
        "Notas editoriais sobre engenharia agêntica, validação e inteligência ambiental — publicadas pela equipe técnica da PentaHydra.",
      meta: ["FORMATO · NOTAS EDITORIAIS", "IDIOMAS · PT-BR / EN", "ATRIBUIÇÃO · PENTAHYDRA ENGINEERING"],
    },
    note:
      "Estas são perspectivas técnicas da nossa prática de engenharia. Não são publicações revisadas por pares, e nenhum resultado, benchmark ou desfecho de cliente é declarado.",
    items: [
      {
        slug: "agentic-engineering-operating-system",
        title: "O que um sistema operacional de engenharia agêntica realmente precisa resolver",
        category: "Engenharia Agêntica",
        abstract:
          "A maioria dos frameworks de agentes otimiza para demonstração. O trabalho de engenharia exige outra coisa: contexto persistente, responsabilização de ferramentas e resultados que sobrevivem à revisão.",
        blocks: [
          {
            type: "prose",
            label: "POSIÇÃO",
            heading: "O problema não é o modelo. É o sistema ao redor dele.",
            paragraphs: [
              "Um modelo de linguagem produz uma análise técnica plausível em segundos. O que ele não faz sozinho é estabelecer que a análise está correta, que as entradas eram as atuais, que a ferramenta chamada se comportou como esperado e que a conclusão pode ser defendida seis meses depois.",
              "Esses quatro requisitos não são propriedades do modelo. São propriedades de sistema operacional: gestão de contexto, contratos de ferramenta, pontos de validação e registros de proveniência.",
            ],
          },
          {
            type: "prose",
            label: "CONSEQUÊNCIA",
            heading: "Projete o runtime antes dos agentes.",
            paragraphs: [
              "No nosso trabalho no PentaHydra Core Engineering, isso inverteu a ordem habitual de construção. Os primeiros artefatos não foram prompts ou personas de agentes, mas o modelo de permissões para execução de ferramentas e a estrutura de registro do que um agente fez e por quê.",
              "Um agente que não pode ser auditado não é um ativo de engenharia. É uma opinião com conexão de rede.",
            ],
          },
          {
            type: "prose",
            label: "IMPLICAÇÃO",
            heading: "Skills são a unidade de reuso em engenharia.",
            paragraphs: [
              "Organizações de engenharia não reutilizam conversas. Reutilizam procedimentos: como um conjunto de dados de monitoramento é validado, como uma camada geoespacial é reprojetada, como uma classificação de risco é derivada.",
              "Um registro de skills versionadas, com entradas, saídas e critérios de validação declarados, vale mais do que uma biblioteca de personalidades de agentes. É a diferença entre capacidade institucional e improviso institucional.",
            ],
          },
        ],
      },
      {
        slug: "validation-is-the-product",
        title: "A validação é o produto",
        category: "Governança de IA",
        abstract:
          "Em ambientes técnicos, o valor de um sistema de IA é definido por quanto da sua saída um engenheiro qualificado aceita assinar.",
        blocks: [
          {
            type: "prose",
            label: "ARGUMENTO",
            heading: "Acurácia não é a métrica que importa.",
            paragraphs: [
              "Acurácia de benchmark descreve comportamento médio em uma distribuição de teste. Decisões de engenharia são tomadas nas bordas: a leitura anômala do sensor, o documento com estrutura incomum, a condição de campo que não corresponde ao caso de referência.",
              "Um sistema correto na maioria das vezes e confiantemente errado na borda transfere risco para o engenheiro que assina o relatório.",
            ],
          },
          {
            type: "prose",
            label: "PRÁTICA",
            heading: "Como a validação aparece na prática.",
            paragraphs: [
              "Validar significa conjuntos de teste predefinidos a partir de material técnico real, critérios de aceitação explícitos e um protocolo de recusa. Um sistema que declara não poder determinar uma resposta é mais útil do que um que inventa uma.",
              "Significa também medir confiabilidade entre execuções, não qualidade em uma única demonstração.",
            ],
          },
          {
            type: "prose",
            label: "GOVERNANÇA",
            heading: "Responsabilidade precisa ser atribuída, não implícita.",
            paragraphs: [
              "Toda saída automatizada que influencia uma decisão técnica precisa de um responsável. Registro é necessário, mas insuficiente: o histórico deve conectar a recomendação, as ferramentas usadas, as fontes consultadas e o humano que a aceitou.",
              "É essa cadeia que permite a uma organização responder a um órgão regulador, um cliente ou um auditor anos depois.",
            ],
          },
        ],
      },
      {
        slug: "from-sensor-to-indicator",
        title: "Do sensor ao indicador: o problema de dados por trás da inteligência ambiental",
        category: "Inteligência Ambiental",
        abstract:
          "Programas ambientais raramente falham por falta de dados. Falham porque o caminho da medição ao indicador defensável não está documentado.",
        blocks: [
          {
            type: "prose",
            label: "DIAGNÓSTICO",
            heading: "Medição não é evidência.",
            paragraphs: [
              "Um sensor produz um número. Um indicador é um número com método, linha de base, condição de validade e incerteza declarada. Grande parte do relato ambiental colapsa os dois, e o resultado não se sustenta quando questionado.",
              "A lacuna aumenta com fontes heterogêneas: campanhas de campo, resultados laboratoriais, sensoriamento remoto e telemetria operacional carregam estruturas de erro diferentes.",
            ],
          },
          {
            type: "prose",
            label: "MÉTODO",
            heading: "Desenhe o indicador antes do dashboard.",
            paragraphs: [
              "Nossa abordagem define indicadores a partir da questão de conformidade ou de gestão, de trás para frente: qual decisão esse número informa, que precisão essa decisão exige e o que acontece quando faltam dados.",
              "Só então a arquitetura de dados é especificada. Dashboards são a representação dessa lógica, não um substituto dela.",
            ],
          },
          {
            type: "prose",
            label: "QUALIDADE",
            heading: "Dado ausente é informação.",
            paragraphs: [
              "Lacunas, deriva e desvios laboratoriais são fatos técnicos que pertencem ao registro. Sistemas que os interpolam silenciosamente produzem saídas confiantes com premissas não declaradas.",
              "Preservar a ausência como estado legítimo é uma decisão de projeto com consequências regulatórias diretas.",
            ],
          },
        ],
      },
      {
        slug: "digital-twins-without-theatre",
        title: "Gêmeos digitais sem teatro",
        category: "Simulação",
        abstract:
          "Um modelo que não declara suas premissas é uma visualização. Um gêmeo digital só merece o nome quando pode ser interrogado.",
        blocks: [
          {
            type: "prose",
            label: "DEFINIÇÃO",
            heading: "O que faz de um gêmeo um gêmeo.",
            paragraphs: [
              "A propriedade distintiva de um gêmeo digital não é fidelidade visual. É a relação mantida entre modelo e ativo físico: parâmetros atualizados por medição, premissas declaradas e divergência monitorada.",
              "Sem essa relação, o artefato é uma ilustração 3D com nome técnico.",
            ],
          },
          {
            type: "prose",
            label: "APLICAÇÃO",
            heading: "Onde gêmeos realmente mudam decisões.",
            paragraphs: [
              "Em contextos industriais e de infraestrutura, gêmeos são úteis para testar cenários que seriam inseguros, caros ou lentos na realidade: variações de carga, sequências de falha, mudanças operacionais e cenários ambientais.",
              "Seu valor é limitado pela qualidade do modelo de engenharia subjacente, não pelo motor de renderização.",
            ],
          },
          {
            type: "prose",
            label: "DISCIPLINA",
            heading: "Declare a incerteza ou perca o argumento.",
            paragraphs: [
              "Um resultado de simulação entregue sem análise de sensibilidade convida ao excesso de confiança. Declarar quais parâmetros dominam, e até onde a conclusão pode ser pressionada antes de quebrar, é o que torna um modelo utilizável em uma disputa técnica.",
            ],
          },
        ],
      },
    ],
  },
};

export default insights;