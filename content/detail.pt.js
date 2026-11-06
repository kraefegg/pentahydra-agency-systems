import { ASSETS } from "@/content/assets";
import { LINKEDIN } from "@/content/contact";

const detail = {
  products: {
    audienceLabel: "Usuários principais",
    purposeLabel: "Propósito estratégico",
    capabilitiesLabel: "Capacidades principais",
    industriesLabel: "Aplicações setoriais",
    statusLabel: "Status de desenvolvimento",
    backLabel: "TODAS AS INICIATIVAS",
    hero: {
      label: "PORTFÓLIO DE PRODUTOS E INICIATIVAS",
      title: "Iniciativas apresentadas com seu status real.",
      intro:
        "A PentaHydra desenvolve iniciativas tecnológicas como programas de engenharia. Cada uma é publicada aqui com seu status atual de desenvolvimento, usuários previstos e escopo de capacidade — nenhuma iniciativa é apresentada como comercialmente disponível antes de estar.",
      meta: ["PORTFÓLIO · 05 INICIATIVAS", "STATUS · PROGRESSO TÉCNICO INTERNO", "DOMÍNIO · ENGENHARIA + IA"],
    },
    note:
      "Os rótulos de status descrevem o progresso técnico interno. O status operacional só é atribuído quando uma capacidade foi validada em uso. Disponibilidade comercial, licenciamento e condições de entrega são estabelecidos contratualmente.",
    items: [
      {
        slug: "core-engineering",
        name: "PentaHydra Core Engineering",
        kind: "Sistema Operacional de Engenharia Agêntica",
        status: "research",
        phase: "Arquitetura e prototipagem de runtime",
        audience: "Equipes de engenharia e unidades de pesquisa técnica",
        purpose:
          "Estabelecer uma camada operacional para o trabalho de engenharia: agentes, ferramentas e conhecimento executados sob governança técnica.",
        capabilities: [
          "Runtime e orquestração de agentes",
          "Registros de skills e de agentes",
          "Pontos de validação técnica",
          "Registros de auditoria e proveniência",
        ],
        industries: [
          "Engenharia ambiental",
          "Mineração e análise geoespacial",
          "Energia renovável",
          "Portos e sistemas marítimos",
          "Operações industriais",
        ],
        summary:
          "Um conceito de sistema operacional orientado à engenharia que orquestra agentes especializados, ferramentas de engenharia, conhecimento e validação técnica em fluxos supervisionados.",
        blocks: [
          {
            type: "prose",
            label: "VISÃO",
            heading: "Um sistema operacional para o trabalho de engenharia, não mais um dashboard.",
            paragraphs: [
              "O Core Engineering é concebido como a camada em que a intenção de engenharia é traduzida em trabalho computacional coordenado e verificável. Os agentes não substituem o julgamento de engenharia; executam tarefas técnicas definidas dentro de um runtime governado, com proveniência para cada resultado.",
              "O conceito integra runtime de agentes, planejamento e orquestração, registro de skills e ferramentas de engenharia, gestão de conhecimento, simulação e trilhas de auditoria — organizados em torno de dados de engenharia, não de conteúdo corporativo genérico.",
            ],
          },
          {
            type: "cards",
            label: "COMPONENTES PRINCIPAIS",
            columns: 3,
            items: [
              { title: "Runtime de Agentes", text: "Ambiente de execução com acesso controlado a ferramentas e limites operacionais definidos." },
              { title: "Orquestração", text: "Planejamento, delegação e coordenação entre agentes de engenharia especializados." },
              { title: "Registro de Skills e Agentes", text: "Capacidades técnicas catalogadas, com versionamento e escopo declarado." },
              { title: "Gestão de Conhecimento", text: "Corpora técnicos, normas e conhecimento de projeto estruturados para recuperação." },
              { title: "Validação Técnica", text: "Verificações e pontos de revisão antes de aceitar um resultado automatizado." },
              { title: "Auditoria e Proveniência", text: "Rastreabilidade de entradas, ferramentas e decisões em cada fluxo." },
            ],
          },
          {
            type: "cta",
            data: {
              label: "PROGRAMA PRINCIPAL",
              title: "CONHEÇA O PROGRAMA COMPLETO CORE ENGINEERING.",
              text: "Arquitetura, domínios de aplicação, roadmap e direção de pesquisa — documentados como um programa de desenvolvimento em evolução.",
              primary: { label: "CORE ENGINEERING", to: "/core-engineering" },
              secondary: { label: "FALAR COM ENGENHARIA", to: "/contact" },
            },
          },
        ],
      },
      {
        slug: "oxygen-ecosystem",
        name: "Oxygen Ecosystem",
        kind: "Iniciativa de Tecnologia Ambiental",
        status: "development",
        phase: "Módulos estruturados, validação interna",
        audience: "Equipes ambientais, sustentabilidade e conformidade",
        purpose:
          "Transformar dados ambientais em indicadores defensáveis, evidências de conformidade e informação de desempenho.",
        capabilities: [
          "Gestão de projetos ambientais",
          "Registros de monitoramento e indicadores",
          "Modelos de avaliação de sustentabilidade (em desenvolvimento)",
          "Estruturas de relato de desempenho",
        ],
        industries: ["Gestão ambiental", "Energia renovável", "Mineração", "Sustentabilidade corporativa"],
        summary:
          "Iniciativa de tecnologia ambiental para gestão de projetos, monitoramento, indicadores de sustentabilidade e avaliação de desempenho ambiental.",
        blocks: [
          {
            type: "prose",
            label: "ESCOPO",
            heading: "Inteligência ambiental com base operacional.",
            paragraphs: [
              "O Oxygen organiza projetos ambientais, dados de monitoramento e indicadores em uma única estrutura, para que evidências de conformidade e informações de sustentabilidade venham da mesma fonte rastreável.",
              "A iniciativa distingue o que está implementado do que permanece em desenvolvimento. Estruturas de dados e módulos de gestão de projetos estão validados internamente; modelos de avaliação e integrações externas seguem em desenvolvimento.",
            ],
          },
          {
            type: "split",
            label: "DETALHAMENTO DE STATUS",
            heading: "Implementado versus planejado.",
            paragraphs: [
              "Transparência sobre maturidade é um requisito técnico, não uma decisão de marketing. O detalhamento abaixo reflete o estado interno atual da iniciativa.",
            ],
            points: [
              { title: "Implementado", text: "Estrutura de projetos ambientais, registros de monitoramento e organização de indicadores." },
              { title: "Em desenvolvimento", text: "Modelos de avaliação de sustentabilidade corporativa e painéis de desempenho." },
              { title: "Planejado", text: "Integrações externas de monitoramento, ingestão de sensores e automação de relatórios." },
            ],
            note: "Disponibilidade sujeita a qualificação técnica e arranjo contratual.",
          },
          { type: "cta" },
        ],
      },
      {
        slug: "smartportos-brasil",
        name: "SmartPortos Brasil",
        kind: "Iniciativa de Tecnologia Portuária Inteligente",
        status: "research",
        phase: "Pesquisa de domínio, modelagem de processos",
        audience: "Operadores portuários, logística marítima e equipes de infraestrutura",
        purpose:
          "Estruturar a informação operacional portuária para monitoramento, processos digitais e inteligência logística.",
        capabilities: [
          "Modelos de monitoramento operacional",
          "Desenho de processos portuários digitais",
          "Análise de fluxos logísticos",
          "Estruturas de dados de infraestrutura",
        ],
        industries: ["Portos e infraestrutura marítima", "Logística e cadeia de suprimentos", "Infraestrutura"],
        summary:
          "Iniciativa de tecnologia portuária inteligente que investiga inteligência de gestão portuária, informação operacional marítima e processos portuários digitais.",
        blocks: [
          {
            type: "prose",
            label: "ESCOPO",
            heading: "A operação portuária como problema de informação.",
            paragraphs: [
              "Ambientes portuários concentram dados operacionais, regulatórios e de infraestrutura distribuídos entre muitos operadores. O SmartPortos Brasil estuda como estruturar essa informação para monitoramento operacional, inteligência logística e apoio a processos digitais.",
              "A iniciativa está em estágio de pesquisa: mapeamento de processos, modelagem de dados e estudos de viabilidade técnica. Nenhuma parceria com autoridade portuária, implantação ou resultado operacional é declarada.",
            ],
          },
          {
            type: "cards",
            label: "DIREÇÕES DE PESQUISA",
            columns: 3,
            items: [
              { title: "Inteligência de gestão portuária", text: "Visões operacionais consolidadas para apoio à decisão." },
              { title: "Dados operacionais marítimos", text: "Estruturas de informação sobre embarcações, cargas e programação." },
              { title: "Processos portuários digitais", text: "Modelagem de processos e fluxo documental em ambientes regulados." },
              { title: "Monitoramento operacional", text: "Definição de indicadores para desempenho de terminais e infraestrutura." },
              { title: "Inteligência logística", text: "Análise de fluxos, restrições e dependências." },
              { title: "Tecnologia de infraestrutura", text: "Dados de sensores e geoespaciais aplicados a ativos portuários." },
            ],
          },
          { type: "cta" },
        ],
      },
      {
        slug: "engineering-intelligence",
        name: "PentaHydra Engineering Intelligence",
        kind: "Camada de Inteligência Técnica",
        status: "development",
        phase: "Modelos de domínio, pilotos internos",
        audience: "Consultorias de engenharia e departamentos técnicos",
        purpose:
          "Tornar documentação de engenharia, dados geoespaciais e evidências técnicas pesquisáveis, comparáveis e auditáveis.",
        capabilities: [
          "Recuperação técnica com atribuição de fonte",
          "Referenciamento geoespacial",
          "Cadeias de rastreabilidade de evidências",
        ],
        industries: ["Engenharia e serviços técnicos", "Mineração", "Infraestrutura e construção"],
        summary:
          "Inteligência técnica aplicada a documentação de engenharia, dados geoespaciais e evidências de projeto — estruturadas para análise e rastreabilidade.",
        blocks: [
          {
            type: "prose",
            label: "ESCOPO",
            heading: "Tornar os registros de engenharia utilizáveis.",
            paragraphs: [
              "Organizações de engenharia acumulam documentos, relatórios, dados espaciais e medições que raramente compartilham estrutura. Esta iniciativa desenvolve modelos de domínio e sistemas de recuperação para que a evidência técnica possa ser buscada, comparada e auditada.",
              "O trabalho concentra-se em proveniência documental, referenciamento geoespacial e regras de validação que mantêm a extração automatizada responsável.",
            ],
          },
          {
            type: "cards",
            label: "CAPACIDADES EM DESENVOLVIMENTO",
            columns: 3,
            items: [
              { title: "Recuperação técnica", text: "Acesso com geração aumentada por recuperação à documentação de engenharia, com referência à fonte." },
              { title: "Referenciamento geoespacial", text: "Vinculação de documentos e achados ao contexto espacial." },
              { title: "Rastreabilidade de evidências", text: "Cadeias de proveniência do documento de origem à conclusão técnica." },
            ],
          },
          { type: "cta" },
        ],
      },
      {
        slug: "ai-systems",
        name: "PentaHydra AI Systems",
        kind: "Engenharia de IA Aplicada",
        status: "research",
        phase: "Pesquisa de arquitetura, frameworks de validação",
        audience: "Organizações que aplicam IA em operações técnicas",
        purpose:
          "Fornecer bases validadas para aplicar agentes e modelos de linguagem ao trabalho técnico.",
        capabilities: [
          "Pesquisa em arquitetura agêntica",
          "Padrões de orquestração",
          "Frameworks de validação",
          "Design de governança de IA",
        ],
        industries: ["Tecnologia e inteligência artificial", "Operações industriais", "Serviços técnicos regulados"],
        summary:
          "Engenharia de IA aplicada voltada a arquiteturas agênticas, padrões de orquestração, sistemas de recuperação e validação técnica do comportamento de modelos.",
        blocks: [
          {
            type: "prose",
            label: "ESCOPO",
            heading: "Disciplina de engenharia aplicada à IA.",
            paragraphs: [
              "AI Systems é a trilha de pesquisa aplicada por trás do trabalho da PentaHydra em sistemas inteligentes: como agentes são estruturados, como ferramentas são expostas com segurança, como conhecimento é recuperado com proveniência e como o comportamento é validado antes de qualquer uso em contexto técnico.",
              "A trilha produz frameworks internos e critérios de validação. Não apresenta capacidades como serviços operacionais.",
            ],
          },
          {
            type: "cards",
            label: "FOCO DE PESQUISA",
            columns: 3,
            items: [
              { title: "Arquiteturas agênticas", text: "Papéis de agentes, delegação e limites de controle." },
              { title: "Padrões de orquestração", text: "Planejamento, sequenciamento e tratamento de falhas entre ferramentas." },
              { title: "Design de recuperação", text: "Estruturas de conhecimento que preservam a atribuição de fonte." },
              { title: "Frameworks de validação", text: "Critérios e procedimentos de teste para comportamento de modelos." },
              { title: "Governança", text: "Permissões, registro e requisitos de supervisão humana." },
              { title: "Avaliação", text: "Medir confiabilidade, não apenas qualidade de saída." },
            ],
          },
          { type: "cta" },
        ],
      },
    ],
  },

  industries: {
    items: [
      {
        name: "Mineração e Recursos Naturais",
        challenge:
          "Operações combinam incerteza geológica, obrigações ambientais e alta exposição de capital em áreas remotas.",
        solutions: ["Estruturas de monitoramento ambiental", "Análise geoespacial", "Avaliação de risco técnico"],
      },
      {
        name: "Energia e Energia Renovável",
        challenge:
          "Desempenho de ativos e desempenho ambiental precisam ser demonstrados simultaneamente, muitas vezes com dados operacionais fragmentados.",
        solutions: ["Indicadores de desempenho", "Integração de dados", "Validação técnica"],
      },
      {
        name: "Gestão Ambiental",
        challenge:
          "Evidências de conformidade estão dispersas entre projetos, documentos e campanhas de monitoramento.",
        solutions: ["Estruturação de dados ambientais", "Sistemas de indicadores", "Rastreabilidade de auditoria"],
      },
      {
        name: "Indústria e Manufatura",
        challenge:
          "O conhecimento de processo está nas pessoas e no papel, enquanto a automação exige lógica explícita e verificável.",
        solutions: ["Modelagem de processos", "Automação inteligente", "Integração de dados de sensores"],
      },
      {
        name: "Portos e Infraestrutura Marítima",
        challenge:
          "Múltiplos operadores, regimes regulatórios e classes de ativos geram dados operacionais que raramente conciliam.",
        solutions: ["Monitoramento operacional", "Digitalização de processos", "Análise logística"],
      },
      {
        name: "Logística e Cadeia de Suprimentos",
        challenge:
          "Decisões dependem de dados de restrição distribuídos, atrasados ou não confiáveis.",
        solutions: ["Análise de fluxos", "Consolidação de dados", "Apoio à decisão"],
      },
      {
        name: "Infraestrutura e Construção",
        challenge:
          "Intenção de projeto, realidade de campo e documentação divergem ao longo do ciclo de vida do ativo.",
        solutions: ["Engenharia digital", "Documentação técnica", "Apoio à simulação"],
      },
      {
        name: "Engenharia e Serviços Técnicos",
        challenge:
          "O conhecimento técnico é difícil de reutilizar entre projetos sem perder rigor ou rastreabilidade.",
        solutions: ["Sistemas de conhecimento", "Engenharia de recuperação", "Fluxos de validação"],
      },
      {
        name: "Tecnologia e Inteligência Artificial",
        challenge:
          "Sistemas agênticos são fáceis de demonstrar e difíceis de validar para trabalho técnico regulado.",
        solutions: ["Engenharia de IA", "Frameworks de validação", "Design de governança"],
      },
      {
        name: "Organizações Corporativas e Institucionais",
        challenge:
          "Compromissos de sustentabilidade exigem informação ambiental verificável, não relato narrativo.",
        solutions: ["Inteligência de sustentabilidade", "Governança de indicadores", "Estruturas de evidência"],
      },
    ],
  },

  pages: {
    about: {
      hero: {
        label: "SOBRE A PENTAHYDRA",
        title: "Uma organização de engenharia construída para inteligência integrada.",
        intro:
          "A PentaHydra Agency Systems conecta prática de engenharia, inteligência artificial, sistemas inteligentes de software, automação e pesquisa aplicada em uma única organização técnica.",
        meta: ["ORIGEM · BRASIL", "MODELO · MULTIDISCIPLINAR", "FOCO · ENGENHARIA + IA"],
      },
      blocks: [
        {
          type: "prose",
          label: "MISSÃO",
          heading: "Problemas complexos não respeitam fronteiras disciplinares.",
          paragraphs: [
            "A PentaHydra existe para resolver problemas técnicos demasiado integrados para uma única disciplina: obrigações ambientais que dependem de engenharia de dados, operações industriais que dependem de automação validada, decisões de engenharia que dependem de modelos que ninguém consegue auditar.",
            "A organização é estruturada para manter rigor de engenharia e capacidade de software na mesma equipe, de modo que a tecnologia seja desenhada a partir do problema — e não adaptada a ele depois.",
          ],
        },
        {
          type: "cards",
          label: "COMO OPERAMOS",
          columns: 3,
          items: [
            {
              title: "Julgamento de engenharia primeiro",
              text: "A questão técnica é definida antes da escolha de qualquer ferramenta. A automação segue a análise, nunca o contrário.",
            },
            {
              title: "Sistemas acima de ferramentas",
              text: "Ferramentas são substituíveis. A arquitetura que conecta dados, modelos e decisões é o ativo durável.",
            },
            {
              title: "Validação antes de escala",
              text: "Uma capacidade só é ampliada quando seus resultados podem ser verificados, reproduzidos e defendidos.",
            },
            {
              title: "Decisões documentadas",
              text: "Escolhas técnicas carregam sua justificativa, para que equipes futuras herdem o raciocínio, não apenas o resultado.",
            },
            {
              title: "Realismo operacional",
              text: "Projetos assumem condições de campo: conectividade intermitente, dados incompletos e processos regulados.",
            },
            {
              title: "Autonomia responsável",
              text: "Comportamento autônomo é limitado, registrado e reversível sempre que uma decisão técnica importa.",
            },
          ],
        },
        {
          type: "split",
          label: "FILOSOFIA TECNOLÓGICA",
          heading: "Inteligência é um material de engenharia.",
          paragraphs: [
            "A inteligência artificial é tratada como um material com propriedades: degrada-se sob mudança de distribuição, é sensível à qualidade da entrada e sua confiança não é evidência. Engenharia com IA exige a mesma disciplina de engenharia com aço ou solo.",
            "Essa posição define como a PentaHydra constrói: proveniência acima de fluência, validação acima de demonstração e responsabilidade humana sobre decisões consequentes.",
          ],
          image: {
            src: ASSETS.lockupDark,
            alt: "Emblema oficial da PentaHydra — escudo com hidra de cinco cabeças",
            caption: "EMBLEMA OFICIAL · PENTAHYDRA AGENCY SYSTEMS",
          },
          points: [
            { title: "Proveniência", text: "Todo resultado automatizado deve ser rastreável às suas entradas e ferramentas." },
            { title: "Autonomia limitada", text: "Agentes operam dentro de escopos declarados, com pontos de revisão." },
            { title: "Responsabilidade humana", text: "Decisões técnicas permanecem atribuídas a engenheiros responsáveis." },
          ],
        },
        {
          type: "list",
          label: "DISCIPLINAS",
          heading: "Uma base técnica combinada.",
          items: [
            { title: "Engenharia Ambiental", text: "Avaliação de impacto, desenho de monitoramento, risco ambiental e auditoria técnica." },
            { title: "Sistemas Industriais e Infraestrutura", text: "Análise de processos, desempenho de ativos e documentação técnica." },
            { title: "Inteligência Geoespacial", text: "Processamento de dados espaciais, interpretação de sensoriamento remoto e análise de terreno." },
            { title: "Engenharia de Software e Dados", text: "Arquitetura de sistemas, pipelines de dados e aprendizado de máquina aplicado." },
            { title: "Engenharia de Inteligência Artificial", text: "Sistemas agênticos, arquiteturas de recuperação e validação de modelos." },
            { title: "Pesquisa e Desenvolvimento Técnico", text: "Programas de pesquisa aplicada com escopo e critérios de validação definidos." },
          ],
        },
        {
          type: "brand",
          label: "SISTEMA DE MARCA",
          heading: "Ativos oficiais de identidade.",
          intro:
            "A identidade PentaHydra é construída em torno do emblema da hidra de cinco cabeças: cinco disciplinas operando como um único organismo. Estes são os ativos oficiais usados nesta plataforma.",
          assets: [
            { src: ASSETS.lockup, alt: "Emblema PentaHydra em fundo técnico escuro", label: "EMBLEMA · PRIMÁRIO" },
            { src: ASSETS.lockupPrimary, alt: "Assinatura horizontal PentaHydra com logotipo", label: "ASSINATURA · HORIZONTAL" },
            { src: ASSETS.lockupWhite, alt: "Assinatura PentaHydra em alto contraste", label: "ASSINATURA · ALTO CONTRASTE" },
            { src: ASSETS.banner, alt: "Banner gráfico de rede PentaHydra", label: "BANNER · REDE" },
            { src: ASSETS.emblem, alt: "Ícone de aplicação PentaHydra", label: "ÍCONE · 192PX" },
            { src: ASSETS.lockupDark, alt: "Emblema PentaHydra irradiando caminhos de rede", label: "EMBLEMA · CAMPO DE REDE" },
          ],
          note:
            "Os arquivos vetoriais (SVG) são mantidos pela PentaHydra e podem substituir o conjunto raster fornecido aqui sem alterações de design na plataforma.",
        },
        { type: "cta" },
      ],
    },

    engineering: {
      hero: {
        label: "ENGENHARIA",
        title: "Engenharia em todo o ciclo de vida técnico.",
        intro:
          "Da avaliação e concepção ao monitoramento, auditoria e risco técnico, a PentaHydra trata a engenharia como responsabilidade contínua, não como entrega de documento.",
        meta: ["DISCIPLINAS · 11", "CONTRATAÇÃO · POR QUALIFICAÇÃO", "ESCOPO · POR PROJETO"],
      },
      note:
        "Todos os serviços de engenharia são apresentados como áreas de capacidade. Escopo, disponibilidade e condições de entrega estão sujeitos a qualificação técnica e arranjo contratual. Nenhum cliente, certificação ou contrato é representado nesta página.",
      blocks: [
        {
          type: "cards",
          label: "ÁREAS DE CAPACIDADE",
          heading: "Onze domínios de engenharia.",
          intro:
            "Cada domínio pode ser contratado de forma independente ou combinado em um programa técnico integrado.",
          columns: 3,
          items: [
            { title: "Engenharia Ambiental", text: "Avaliação de impacto, desenho de monitoramento, controle ambiental e auditoria técnica." },
            { title: "Mineração e Recursos Minerais", text: "Análise técnica de operações de extração, processos minerais e obrigações ambientais." },
            { title: "Energia Renovável", text: "Viabilidade, análise de desempenho e integração ambiental de ativos renováveis." },
            { title: "Engenharia Industrial", text: "Análise de processos, eficiência operacional e documentação técnica de sistemas industriais." },
            { title: "Infraestrutura", text: "Avaliação técnica, documentação de ciclo de vida e análise de risco de ativos de infraestrutura." },
            { title: "Portos e Sistemas Marítimos", text: "Análise operacional e ambiental para terminais, portos e ambientes marítimos." },
            { title: "Monitoramento Ambiental", text: "Desenho de programas de monitoramento, definição de indicadores e governança de dados." },
            { title: "Auditoria de Engenharia", text: "Revisão técnica independente de projetos, documentação e evidências de conformidade." },
            { title: "Avaliação de Risco Técnico", text: "Identificação, classificação e tratamento de risco de engenharia e ambiental." },
            { title: "Inteligência Geoespacial", text: "Análise espacial, interpretação de sensoriamento remoto e modelagem territorial." },
            { title: "Engenharia Digital", text: "Modelos digitais, apoio à simulação e sistemas de dados técnicos para ativos de engenharia." },
          ],
        },
        {
          type: "split",
          label: "MÉTODO",
          heading: "Como um trabalho de engenharia é estruturado.",
          image: {
            src: ASSETS.mining,
            alt: "Sensores industriais de precisão e cabos instalados em maquinário pesado ao anoitecer",
            caption: "INSTRUMENTAÇÃO DE CAMPO · VALIDAÇÃO TÉCNICA",
          },
          paragraphs: [
            "Os trabalhos começam pela qualificação técnica: se o problema está bem definido, se existem dados para respondê-lo e se a competência necessária está disponível.",
            "Somente então o escopo é estabelecido, com entregáveis e critérios de aceitação explícitos. A execução produz evidência documentada. A validação encerra o ciclo com revisão técnica do que foi concluído e do que permanece incerto.",
          ],
          points: [
            { title: "01 · Qualificação técnica", text: "Definição do problema, disponibilidade de dados e revisão de viabilidade." },
            { title: "02 · Escopo e critérios de aceitação", text: "Entregáveis, métodos e condições de revisão acordados por escrito." },
            { title: "03 · Execução e documentação", text: "Trabalho técnico com registros rastreáveis e premissas explícitas." },
            { title: "04 · Validação e entrega", text: "Revisão independente, declaração de incerteza e transferência de conhecimento." },
          ],
        },
        {
          type: "cards",
          label: "INTEGRAÇÃO",
          heading: "Onde engenharia encontra inteligência.",
          columns: 2,
          items: [
            {
              title: "Programas de monitoramento como sistemas de dados",
              text: "O monitoramento ambiental e industrial é desenhado como arquitetura de dados — lógica de amostragem, definição de indicadores e rastreabilidade —, não como campanhas desconectadas.",
            },
            {
              title: "Auditoria técnica apoiada por recuperação",
              text: "Evidências de engenharia são indexadas com proveniência, permitindo que uma auditoria siga uma conclusão até seus documentos e medições de origem.",
            },
            {
              title: "Modelos de risco que permanecem inspecionáveis",
              text: "Modelos de avaliação permanecem documentados e reproduzíveis, para que uma classificação de risco possa ser defendida tecnicamente.",
            },
            {
              title: "Dados geoespaciais tratados como dados de engenharia",
              text: "Camadas espaciais são processadas com a mesma disciplina de validação de qualquer outra medição técnica.",
            },
          ],
        },
        { type: "cta" },
      ],
    },

    technology: {
      hero: {
        label: "TECNOLOGIA",
        title: "Tecnologia construída para sustentar engenharia.",
        intro:
          "Engenharia digital, plataformas de dados, automação e integração — projetadas para operações técnicas em que resultados precisam ser verificáveis.",
        meta: ["CAMADAS · DADOS · AUTOMAÇÃO · INTEGRAÇÃO", "MÉTODO · ENTREGA VALIDADA", "STACK · MODULAR"],
      },
      blocks: [
        {
          type: "prose",
          label: "POSIÇÃO",
          heading: "Software como infraestrutura de engenharia.",
          paragraphs: [
            "A PentaHydra constrói tecnologia como a engenharia constrói ativos: com requisitos definidos, interfaces documentadas, etapas de revisão e critérios de aceitação. Um sistema que não pode ser inspecionado não pode ser confiado a uma decisão técnica.",
            "Por isso a arquitetura é modular por padrão. Ingestão de dados, processamento, modelos e interfaces são separados, permitindo substituir ou auditar um componente sem comprometer o todo.",
          ],
        },
        {
          type: "cards",
          label: "ÁREAS DE TECNOLOGIA",
          columns: 3,
          items: [
            { title: "Engenharia Digital", text: "Modelos de dados técnicos, apoio à simulação e ferramentas de engenharia." },
            { title: "Plataformas de Dados", text: "Ingestão estruturada, controle de qualidade e armazenamento rastreável de dados técnicos." },
            { title: "Automação Inteligente", text: "Automação de fluxos com regras explícitas, registro e tratamento de exceções." },
            { title: "Integração de Sistemas", text: "Conexão de sistemas operacionais, sensores e software técnico por interfaces documentadas." },
            { title: "Sistemas Geoespaciais", text: "Processamento de dados espaciais, camadas, análise e infraestrutura de mapas." },
            { title: "Sistemas de IA Aplicada", text: "Agentes, recuperação e validação de modelos integrados a fluxos de engenharia." },
            { title: "Sistemas de Conhecimento", text: "Corpora técnicos, arquitetura de recuperação e inteligência documental." },
            { title: "Infraestrutura de Monitoramento", text: "Aquisição de dados de sensores, cálculo de indicadores e lógica de alerta." },
            { title: "Governança e Auditoria", text: "Controle de acesso, registros de proveniência e trilhas de revisão técnica." },
          ],
        },
        {
          type: "timeline",
          label: "MODELO DE ENTREGA",
          heading: "Quatro etapas, cada uma com um ponto de revisão.",
          phases: [
            { tag: "T/01", title: "Descoberta técnica", text: "Requisitos, restrições, inventário de dados e mapeamento de risco." },
            { tag: "T/02", title: "Arquitetura", text: "Limites de componentes, interfaces, contratos de dados e plano de validação." },
            { tag: "T/03", title: "Implementação", text: "Entrega incremental com decisões documentadas e evidências de teste." },
            { tag: "T/04", title: "Validação e operação", text: "Testes de aceitação, monitoramento e transferência definida." },
          ],
        },
        { type: "cta" },
      ],
    },

    ai: {
      hero: {
        label: "IA E SISTEMAS INTELIGENTES",
        title: "Sistemas inteligentes projetados para trabalho técnico.",
        intro:
          "IA agêntica, orquestração, recuperação e validação — aplicadas a fluxos de engenharia, pesquisa e apoio à decisão operacional, dentro de limites definidos.",
        meta: ["FOCO · IA AGÊNTICA", "MÉTODO · VALIDAÇÃO PRIMEIRO", "GOVERNANÇA · OBRIGATÓRIA"],
      },
      note:
        "As capacidades aqui descritas são áreas de engenharia e direções de pesquisa. Não são apresentadas como produtos operacionais, salvo quando um status validado é indicado.",
      blocks: [
        {
          type: "cards",
          label: "MAPA DE CAPACIDADES",
          heading: "Doze áreas de trabalho em sistemas inteligentes.",
          columns: 3,
          items: [
            { title: "IA Agêntica", text: "Agentes que executam tarefas técnicas definidas sob supervisão, com acesso a ferramentas e limites." },
            { title: "Engenharia de IA", text: "Concepção, avaliação e operação de sistemas de IA como artefatos de engenharia." },
            { title: "Agentes Inteligentes", text: "Agentes de propósito único, com escopo, entradas e comportamento de falha declarados." },
            { title: "Sistemas Multiagente", text: "Agentes coordenados com papéis, transferências e resolução de conflitos." },
            { title: "Automação de Engenharia", text: "Automação de análise, documentação e rotinas técnicas." },
            { title: "Orquestração de IA", text: "Planejamento, sequenciamento e monitoramento de fluxos técnicos multi-etapa." },
            { title: "Sistemas de Conhecimento", text: "Conhecimento técnico estruturado, com recuperação e citação." },
            { title: "Geração Aumentada por Recuperação", text: "Geração ancorada em fontes técnicas verificadas, com proveniência." },
            { title: "Aplicações de LLM", text: "Modelos de linguagem aplicados a análise, extração e redação técnica." },
            { title: "Fluxos Inteligentes", text: "Processos com revisão humana, pontos de controle e escalonamento." },
            { title: "Validação Técnica", text: "Procedimentos de teste, conjuntos de referência e critérios de aceitação." },
            { title: "Governança de IA", text: "Permissões, registro, supervisão e estruturas de responsabilização." },
          ],
        },
        {
          type: "split",
          label: "APLICAÇÃO",
          heading: "Como sistemas inteligentes apoiam a engenharia.",
          paragraphs: [
            "Na prática da engenharia, a maior parte do tempo é gasta localizando evidências, conciliando documentos e repetindo análises. Sistemas inteligentes são valiosos quando reduzem esse trabalho sem introduzir conclusões não verificáveis.",
            "A PentaHydra os aplica em quatro frentes: apoio à análise técnica, recuperação de documentação e evidências, interpretação de monitoramento e indicadores, e orquestração de ferramentas computacionais.",
          ],
          points: [
            { title: "Apoio à análise", text: "Revisão comparativa, identificação de anomalias e sumarização estruturada com fontes." },
            { title: "Recuperação de evidências", text: "Busca em documentos e medições que retorna a fonte, não apenas uma resposta." },
            { title: "Interpretação de monitoramento", text: "Análise de indicadores e explicação de limites para dados ambientais e industriais." },
            { title: "Orquestração de ferramentas", text: "Sequenciamento de simulação, geoprocessamento e cálculo em um único fluxo." },
          ],
        },
        {
          type: "list",
          label: "GOVERNANÇA",
          heading: "Limites operacionais não negociáveis.",
          items: [
            { title: "Escopo declarado", text: "Um agente atua apenas dentro de uma fronteira de tarefa e um conjunto de ferramentas documentados." },
            { title: "Proveniência", text: "Entradas, fontes e chamadas de ferramentas são registradas para cada resultado produzido." },
            { title: "Pontos de revisão humana", text: "Saídas consequentes exigem aprovação técnica qualificada antes do uso." },
            { title: "Transparência de falha", text: "Sistemas relatam incerteza e recusa em vez de fabricar resolução." },
            { title: "Reversibilidade", text: "Ações automatizadas que afetam registros ou ativos são reversíveis e registradas." },
          ],
        },
        { type: "cta" },
      ],
    },

    ecosystem: {
      hero: {
        label: "ECOSSISTEMA PENTAHYDRA",
        title: "Uma arquitetura, cinco iniciativas tecnológicas.",
        intro:
          "Engenharia, agentes inteligentes, dados, automação e ferramentas especializadas conectados por uma única camada de orquestração.",
        meta: ["CAMADAS · 05", "ORQUESTRAÇÃO · CORE ENGINEERING", "INICIATIVAS · 05"],
      },
      blocks: [
        {
          type: "prose",
          label: "ESTRUTURA",
          heading: "Por que um ecossistema, e não uma linha de produtos.",
          paragraphs: [
            "Problemas de engenharia raramente chegam como um único entregável. Um programa de monitoramento precisa de geoprocessamento, infraestrutura de dados, análise, relatórios e trilhas de auditoria — hoje atendidos por ferramentas desconectadas.",
            "O ecossistema PentaHydra é organizado para que essas camadas compartilhem uma arquitetura. O Core Engineering fornece a camada de orquestração; as iniciativas abaixo atendem domínios específicos sobre ela.",
          ],
        },
        {
          type: "list",
          label: "CAMADAS DE ARQUITETURA",
          heading: "Do runtime à aplicação.",
          items: [
            { n: "L1", title: "Runtime e Orquestração de Agentes", text: "Execução, planejamento e coordenação de agentes de engenharia especializados." },
            { n: "L2", title: "Conhecimento e Dados", text: "Corpora técnicos, dados geoespaciais e conhecimento de engenharia validado." },
            { n: "L3", title: "Registro de Skills e Ferramentas", text: "Capacidades de engenharia registradas, integrações e ferramentas computacionais." },
            { n: "L4", title: "Validação e Proveniência", text: "Verificações técnicas, trilhas de auditoria e rastreabilidade de cada resultado." },
            { n: "L5", title: "Aplicações de Domínio", text: "Programas ambientais, mineração, energia, portos e aplicações industriais." },
          ],
        },
        { type: "initiatives", label: "INICIATIVAS", heading: "Programas construídos sobre a arquitetura." },
        { type: "cta" },
      ],
    },

    industries: {
      hero: {
        label: "SETORES",
        title: "Onde a complexidade técnica é a restrição.",
        intro:
          "Dez setores onde engenharia, regulação, dados e risco operacional se cruzam — e onde a precisão determina o resultado.",
        meta: ["SETORES · 10", "ABORDAGEM · ESPECÍFICA POR DOMÍNIO", "CONTRATAÇÃO · POR QUALIFICAÇÃO"],
      },
      blocks: [
        { type: "sectors", label: "MAPA SETORIAL", heading: "Desafios e respostas de engenharia." },
        {
          type: "split",
          label: "CONTRATAÇÃO",
          heading: "Conhecimento setorial é ponto de partida, não uma alegação.",
          image: {
            src: ASSETS.port,
            alt: "Terminal portuário de contêineres com guindastes ao anoitecer",
            caption: "INFRAESTRUTURA PORTUÁRIA · CONTEXTO OPERACIONAL",
          },
          paragraphs: [
            "A PentaHydra não apresenta experiência setorial como um portfólio de logotipos. Cada trabalho começa com a qualificação técnica do problema específico, dos dados disponíveis e do contexto regulatório.",
            "Quando a competência ou a evidência necessária não está disponível, isso é declarado antes de qualquer proposta.",
          ],
          points: [
            { title: "Enquadramento de domínio", text: "Restrições, regulação e contexto operacional definidos primeiro." },
            { title: "Checagem de realidade dos dados", text: "O que existe, o que falta e o que precisa ser medido." },
            { title: "Resposta técnica", text: "Escopo de engenharia e tecnologia definido a partir dessas restrições." },
          ],
        },
        { type: "cta" },
      ],
    },

    research: {
      hero: {
        label: "PESQUISA E INOVAÇÃO",
        title: "Pesquisa aplicada com destino de engenharia.",
        intro:
          "Programas organizados em torno de problemas que a prática de engenharia já enfrenta — com escopo, hipóteses técnicas e critérios de validação definidos.",
        meta: ["MODELO · PESQUISA APLICADA", "SAÍDA · DOCUMENTAÇÃO INTERNA", "STATUS · TRILHAS DE DESENVOLVIMENTO"],
      },
      note:
        "A PentaHydra não publica resultados científicos, patentes, financiamentos ou parcerias não verificados. As trilhas aqui descritas são programas internos de desenvolvimento.",
      blocks: [
        {
          type: "cards",
          label: "TRILHAS DE PESQUISA",
          columns: 3,
          items: [
            { title: "Engenharia Agêntica", text: "Agentes aplicados a fluxos de engenharia, com limites de controle e validação." },
            { title: "Inteligência Artificial", text: "Arquiteturas, orquestração e métodos de avaliação para aplicações técnicas." },
            { title: "Automação de Engenharia", text: "Automatizar análise e documentação sem perder responsabilização." },
            { title: "GeoAI", text: "Dados geoespaciais interpretados por sistemas de aprendizado, com validação espacial." },
            { title: "Inteligência Ambiental", text: "Indicadores, lógica de monitoramento e qualidade de dados ambientais." },
            { title: "Inteligência em Mineração", text: "Análise de dados técnicos para extração, processamento e obrigações ambientais." },
            { title: "Gêmeos Digitais", text: "Representações de ativos que apoiam análise em vez de decoração." },
            { title: "Sistemas Industriais Inteligentes", text: "Dados de sensores, processos e controle integrados ao apoio à decisão." },
            { title: "Ciência de Dados", text: "Tratamento estatístico de dados técnicos com incerteza explícita." },
            { title: "Simulação de Engenharia", text: "Teste de cenários e comportamento de modelos sob premissas variáveis." },
            { title: "Computação Científica", text: "Métodos computacionais para problemas de engenharia e ambientais." },
          ],
        },
        {
          type: "split",
          label: "DISCIPLINA",
          heading: "O que torna a pesquisa utilizável.",
          paragraphs: [
            "Pesquisa aplicada justifica seu lugar quando uma equipe técnica pode confiar no resultado. Isso exige hipóteses escritas, conjuntos de dados definidos, procedimentos reproduzíveis e relato honesto de falhas.",
            "Cada trilha na PentaHydra tem um responsável técnico, um critério de validação e um ponto de decisão: continuar, redefinir ou encerrar.",
          ],
          points: [
            { title: "Hipótese definida", text: "Uma questão técnica enunciada com precisão suficiente para ser refutada." },
            { title: "Procedimento reproduzível", text: "Métodos documentados para que resultados possam ser reobtidos." },
            { title: "Critério de validação", text: "Uma condição de aceitação acordada antes do experimento." },
            { title: "Ponto de decisão", text: "Revisão explícita para continuar, redefinir ou descontinuar." },
          ],
        },
        { type: "cta" },
      ],
    },

    leadership: {
      hero: {
        label: "LIDERANÇA",
        title: "Railson De Arruda",
        intro:
          "Fundador e Diretor Estratégico de Tecnologia — engenheiro ambiental, empreendedor e estrategista de tecnologia.",
        meta: ["PAPEL · FUNDADOR", "ORIGEM · BRASIL", "FOCO · ENGENHARIA + SISTEMAS INTELIGENTES"],
      },
      blocks: [
        {
          type: "split",
          label: "PERFIL",
          heading: "Julgamento de engenharia aplicado à tecnologia.",
          paragraphs: [
            "Railson De Arruda é engenheiro ambiental, empreendedor e estrategista de tecnologia, com experiência em engenharia, risco ambiental, auditoria técnica, inteligência artificial e desenvolvimento de sistemas tecnológicos inteligentes.",
            "Fundou a PentaHydra Agency Systems e criou o conceito PentaHydra Core Engineering — um programa de sistema operacional orientado à engenharia para orquestrar agentes, ferramentas e validação técnica.",
          ],
          links: [{ label: "LinkedIn · Perfil profissional", href: LINKEDIN }],
          points: [
            { title: "Áreas profissionais", text: "Engenharia ambiental, risco de engenharia, auditoria e perícia ambiental." },
            { title: "Tecnologia", text: "Inteligência artificial, sistemas inteligentes e desenvolvimento tecnológico aplicado." },
            { title: "Setores", text: "Mineração e mineralogia, energia renovável, infraestrutura e serviços técnicos." },
            { title: "Mandato", text: "Direção estratégica, padrões técnicos e prioridades de pesquisa na PentaHydra." },
          ],
          note: "Perfil baseado em informação profissional verificada. Qualificações e credenciais são declaradas apenas quando documentadas.",
        },
        {
          type: "prose",
          label: "DIREÇÃO ESTRATÉGICA",
          heading: "Para onde a organização caminha.",
          paragraphs: [
            "A tese estratégica é que organizações de engenharia passarão a operar com sistemas inteligentes como parte de seu quadro técnico — não como chatbots, mas como executores supervisionados de trabalho técnico definido.",
            "A PentaHydra está sendo construída para essa transição: competência de engenharia primeiro, arquitetura de tecnologia em seguida e governança em todo o percurso.",
          ],
        },
        { type: "cta" },
      ],
    },

    core: {
      hero: {
        label: "PROGRAMA PRINCIPAL",
        title: "PentaHydra Core Engineering",
        intro:
          "Um conceito de sistema operacional de engenharia agêntica: um runtime supervisionado para agentes, ferramentas de engenharia, conhecimento e validação técnica.",
        meta: ["CLASSE · PROGRAMA DE SO", "STATUS · PESQUISA E DESENVOLVIMENTO", "DOMÍNIO · ENGENHARIA"],
      },
      note:
        "O Core Engineering é um programa de desenvolvimento tecnológico. Módulos, integrações e capacidades operacionais aqui descritos estão em pesquisa e desenvolvimento e não são apresentados como concluídos.",
      blocks: [
        {
          type: "prose",
          label: "VISÃO",
          heading: "Não é um dashboard. Não é um chatbot. É uma camada operacional.",
          paragraphs: [
            "O trabalho de engenharia já é computacional: modelos, simulações, geoprocessamento, análise documental, verificações regulatórias. O que falta é uma camada operacional que coordene esse trabalho com responsabilização.",
            "O Core Engineering é concebido como essa camada — um ambiente em que agentes especializados executam tarefas técnicas definidas usando ferramentas de engenharia registradas, sobre conhecimento validado, com cada passo registrado e revisável.",
            "A ambição é um sistema operacional para organizações de engenharia: contexto persistente, skills reutilizáveis, execução governada e memória técnica que sobrevive à mudança de equipes.",
          ],
        },
        {
          type: "cards",
          label: "ARQUITETURA",
          heading: "Principais componentes tecnológicos.",
          columns: 3,
          items: [
            { title: "Runtime de Agentes", text: "Ambiente de execução controlado, com permissões de ferramenta declaradas e limites." },
            { title: "Orquestração de Agentes", text: "Planejamento, delegação e coordenação entre agentes especializados." },
            { title: "Planejamento e Execução", text: "Decomposição de tarefas com pontos de controle e execução retomável." },
            { title: "Ferramentas de Engenharia", text: "Ferramentas computacionais, geoespaciais, de simulação e análise expostas como skills." },
            { title: "Registro de Skills", text: "Catálogo versionado de capacidades técnicas com entradas e saídas declaradas." },
            { title: "Registro de Agentes", text: "Papéis, competências, fronteiras e requisitos de revisão definidos." },
            { title: "Gestão de Conhecimento", text: "Corpora técnicos, normas e memória de projeto estruturados para recuperação." },
            { title: "Validação Técnica", text: "Verificações, validação cruzada e pontos de revisão antes de aceitar resultados." },
            { title: "Simulação", text: "Execução de cenários sobre modelos e premissas de engenharia." },
            { title: "Dados de Engenharia", text: "Dados geoespaciais, de sensores, medições e documentação sob um único modelo." },
            { title: "Auditoria e Proveniência", text: "Registros imutáveis de entradas, chamadas de ferramentas, saídas e aprovações." },
            { title: "Fluxos de Pesquisa", text: "Experimentação estruturada com hipóteses e critérios documentados." },
            { title: "Integrações Especializadas", text: "Conectores de domínio para software de engenharia e fontes de dados técnicos." },
          ],
        },
        {
          type: "cards",
          label: "DOMÍNIOS DE APLICAÇÃO",
          heading: "Onde o programa foi desenhado para operar.",
          columns: 3,
          items: [
            { title: "Engenharia Ambiental", text: "Desenho de monitoramento, cálculo de indicadores e evidências de conformidade." },
            { title: "Mineração e Mineralogia", text: "Análise técnica sobre extração, processamento e dados ambientais." },
            { title: "LiDAR e Análise Geoespacial", text: "Processamento de nuvem de pontos, terreno e relações espaciais." },
            { title: "Dados de Drones e GPS", text: "Ingestão de levantamentos aéreos, georreferenciamento e detecção de mudanças." },
            { title: "Energia Renovável", text: "Análise de desempenho de ativos e integração ambiental." },
            { title: "Sensores Industriais", text: "Interpretação de séries temporais, limites e revisão de anomalias." },
            { title: "Monitoramento Marítimo e Portuário", text: "Monitoramento operacional e ambiental em ambientes portuários." },
            { title: "Simulação de Engenharia", text: "Teste de cenários com premissas e sensibilidade documentadas." },
            { title: "Pesquisa Técnica", text: "Experimentação estruturada com procedimentos reproduzíveis." },
          ],
        },
        {
          type: "timeline",
          label: "ROADMAP DE DESENVOLVIMENTO",
          heading: "Um programa de desenvolvimento em evolução.",
          phases: [
            { tag: "R/01", title: "Fundação", text: "Modelo de runtime, arquitetura de permissões e registros de proveniência." },
            { tag: "R/02", title: "Orquestração", text: "Planejamento, delegação entre agentes e execução retomável." },
            { tag: "R/03", title: "Skills de domínio", text: "Registro de ferramentas de engenharia e validação de saídas." },
            { tag: "R/04", title: "Validação e escala", text: "Pontos de revisão, relatórios de auditoria e expansão controlada de domínios." },
          ],
        },
        {
          type: "split",
          label: "DIREÇÃO DE PESQUISA",
          heading: "Os problemas difíceis são técnicos, não cosméticos.",
          paragraphs: [
            "Três questões dominam o programa. Como um agente sabe que o resultado de uma ferramenta é confiável? Como o sistema preserva o contexto de engenharia ao longo de meses de projeto? E como se atribui responsabilidade quando uma recomendação automatizada influencia uma decisão?",
            "Cada uma corresponde a uma trilha de pesquisa: critérios de validação, memória de engenharia persistente e arquitetura de auditoria. O progresso é medido pela capacidade de um engenheiro qualificado defender o resultado — não pela fluência do texto gerado.",
          ],
          image: {
            src: ASSETS.hero,
            alt: "Núcleo abstrato de engenharia com caminhos computacionais ciano",
            caption: "CORE ENGINEERING · VISUAL CONCEITUAL DO RUNTIME",
          },
          points: [
            { title: "Confiança no resultado", text: "Critérios de validação que um revisor técnico possa aplicar mecanicamente." },
            { title: "Memória de engenharia", text: "Persistência de contexto entre projetos, ferramentas e equipes." },
            { title: "Responsabilização", text: "Cadeias de atribuição da recomendação ao engenheiro responsável." },
          ],
        },
        { type: "cta" },
      ],
    },

    privacy: {
      hero: {
        label: "POLÍTICA DE PRIVACIDADE",
        title: "Como a PentaHydra trata informações.",
        intro:
          "Esta política explica quais informações são coletadas neste site, por que são coletadas e como são tratadas.",
        meta: ["VERSÃO · 1.0", "ESCOPO · SITE", "JURISDIÇÃO · BRASIL"],
      },
      blocks: [
        {
          type: "prose",
          label: "01 · DADOS COLETADOS",
          heading: "Informações fornecidas por você.",
          paragraphs: [
            "Este site coleta apenas as informações que você envia voluntariamente pelo formulário de contato: nome, e-mail corporativo, organização, país, área de interesse, mensagem e seu consentimento a estes termos.",
            "Nenhuma conta é necessária para navegar no site. Informações técnicas sobre sua visita podem ser processadas pela infraestrutura de hospedagem para fins de segurança e disponibilidade.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "02 · FINALIDADE",
          heading: "Por que são coletadas.",
          paragraphs: [
            "As informações de contato são usadas exclusivamente para responder à sua mensagem, avaliar um possível trabalho técnico ou comercial e manter a correspondência relacionada a ele.",
            "Não são vendidas, alugadas ou compartilhadas com terceiros para fins de marketing.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "03 · RETENÇÃO E DIREITOS",
          heading: "Por quanto tempo, e seus direitos.",
          paragraphs: [
            "As mensagens são retidas pelo tempo necessário para tratar a solicitação e qualquer trabalho decorrente, ou conforme exigido pela legislação aplicável.",
            "Você pode solicitar acesso, correção ou exclusão das suas informações a qualquer momento pelos canais de contato publicados neste site. As solicitações são tratadas em prazo razoável.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "04 · BASE LEGAL",
          heading: "Marco regulatório.",
          paragraphs: [
            "A PentaHydra Agency Systems está estabelecida no Brasil e trata informações pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).",
            "Para assuntos de privacidade, use o formulário de contato selecionando a categoria institucional ou os canais publicados na página de Contato.",
          ],
          narrow: true,
        },
        { type: "cta" },
      ],
    },

    terms: {
      hero: {
        label: "TERMOS DE USO",
        title: "Termos que regem este site.",
        intro:
          "Estes termos descrevem as condições de uso do site da PentaHydra Agency Systems e a natureza das informações aqui publicadas.",
        meta: ["VERSÃO · 1.0", "ESCOPO · SITE", "JURISDIÇÃO · BRASIL"],
      },
      blocks: [
        {
          type: "prose",
          label: "01 · USO DO SITE",
          heading: "Uso permitido.",
          paragraphs: [
            "Este site é disponibilizado para fins institucionais e informativos. Você pode consultar, citar e referenciar seu conteúdo público, desde que a fonte seja identificada e o sentido não seja distorcido.",
            "Extração sistemática, coleta automatizada destinada a construir bases concorrentes ou qualquer uso que comprometa a disponibilidade do site não é permitido.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "02 · STATUS DA INFORMAÇÃO",
          heading: "Sem oferta, sem garantia de completude.",
          paragraphs: [
            "O conteúdo deste site descreve capacidades de engenharia e tecnologia, direções de pesquisa e iniciativas em desenvolvimento. Não constitui oferta comercial, garantia técnica ou assessoria profissional para um projeto específico.",
            "As iniciativas tecnológicas são publicadas com rótulos de status. Os status refletem o progresso técnico interno na data da publicação e podem mudar sem aviso.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "03 · PROPRIEDADE INTELECTUAL",
          heading: "Titularidade.",
          paragraphs: [
            "O nome PentaHydra, o emblema, os ativos de identidade, o conteúdo textual e o conceito PentaHydra Core Engineering são propriedade da PentaHydra Agency Systems e não podem ser reproduzidos para fins comerciais sem autorização escrita.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "04 · CONTRATAÇÕES",
          heading: "Serviços são contratuais.",
          paragraphs: [
            "Qualquer serviço de engenharia, programa de tecnologia ou colaboração em pesquisa é estabelecido exclusivamente por acordo escrito que define escopo, responsabilidades, critérios de aceitação e condições comerciais.",
            "Nada neste site constitui compromisso de entregar uma capacidade, prazo ou resultado específico.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "05 · LEGISLAÇÃO APLICÁVEL",
          heading: "Marco legal.",
          paragraphs: [
            "Estes termos são regidos pelas leis da República Federativa do Brasil. Dúvidas sobre este site ou estes termos podem ser encaminhadas pelos canais publicados na página de Contato.",
          ],
          narrow: true,
        },
        { type: "cta" },
      ],
    },

    contact: {
      hero: {
        label: "CONTATO",
        title: "Vamos engenheirar o futuro.",
        intro:
          "Conversas técnicas começam pelo problema. Conte o que você precisa resolver e diremos se, e como, podemos ajudar.",
        meta: ["RETORNO · ANÁLISE TÉCNICA", "IDIOMAS · PT-BR / EN", "ORIGEM · BRASIL"],
      },
      categories: [
        { value: "engineering", label: "Serviços de Engenharia" },
        { value: "technology", label: "Soluções de Tecnologia" },
        { value: "ai", label: "IA e Sistemas Inteligentes" },
        { value: "partnerships", label: "Parcerias Estratégicas" },
        { value: "research", label: "Pesquisa e Desenvolvimento" },
        { value: "institutional", label: "Relações Institucionais" },
        { value: "business", label: "Oportunidades de Negócio" },
      ],
      form: {
        name: "Nome completo",
        email: "E-mail corporativo",
        organization: "Organização",
        country: "País",
        interest: "Área de interesse",
        message: "Mensagem",
        messagePlaceholder: "Descreva o problema técnico, o contexto e eventuais restrições.",
        consent: "Concordo com o tratamento dos meus dados conforme descrito na Política de Privacidade.",
        submit: "ENVIAR MENSAGEM",
        submitting: "ENVIANDO",
        successTitle: "Mensagem registrada.",
        successText:
          "Sua mensagem foi registrada e está disponível para nossa equipe técnica. Se o assunto for urgente, use os canais diretos abaixo.",
        errorText: "Não foi possível registrar a mensagem. Tente novamente ou use os canais diretos abaixo.",
        required: "Obrigatório",
        selectInterest: "Selecione uma área",
        validationError: "Preencha os campos obrigatórios e aceite os termos de privacidade.",
      },
      direct: {
        title: "Canais diretos",
        text: "Para assuntos institucionais ou comerciais que exigem atenção imediata, use os canais abaixo.",
        channelsLabel: "Canais institucionais",
        channelsNote:
          "Cada endereço tem uma finalidade definida. Direcionar a mensagem ao canal correto agiliza a análise técnica.",
        channels: [
          { key: "general", label: "Contato institucional geral" },
          { key: "services", label: "Solicitações comerciais e contratação de serviços" },
          { key: "partnerships", label: "Parcerias estratégicas e institucionais" },
          { key: "support", label: "Suporte técnico e atendimento" },
          { key: "privacy", label: "Privacidade e proteção de dados" },
        ],
        phoneLabel: "Linha direta",
        locationLabel: "Base operacional",
        location: "Brasil · atuação global",
        languageLabel: "Idiomas de trabalho",
        language: "Português (Brasil) · Inglês",
      },
    },
  },
};

export default detail;