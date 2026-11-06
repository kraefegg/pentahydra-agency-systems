import { ASSETS } from "@/content/assets";
import detail from "@/content/detail.pt";
import insights from "@/content/insights.pt";

const pt = {
  code: "pt",
  label: "PT",
  brand: {
    name: "PENTAHYDRA",
    full: "PENTAHYDRA AGENCY SYSTEMS",
    tagline: "ENGENHARIA. INTELIGÊNCIA. TECNOLOGIA.",
    short: "Organização de engenharia e tecnologia",
    descriptor: "ENGENHARIA · INTELIGÊNCIA · TECNOLOGIA",
  },
  nav: [
    { label: "Engenharia", to: "/engineering" },
    { label: "Tecnologia", to: "/technology" },
    { label: "Ecossistema", to: "/ecosystem" },
    { label: "Produtos", to: "/products" },
    { label: "Setores", to: "/industries" },
    { label: "Pesquisa", to: "/research" },
    { label: "Sobre", to: "/about" },
  ],
  navMeta: {
    contact: "Contato",
    contactTo: "/contact",
    core: "Core Engineering",
    coreTo: "/core-engineering",
  },
  ui: {
    menu: "Menu",
    close: "Fechar",
    language: "Idioma",
    readMore: "Ler mais",
    viewAll: "Ver todos",
    back: "Voltar",
    contact: "Contato",
    ctaPrimary: "VAMOS ENGENHEIRAR O FUTURO",
    ctaSecondary: "EXPLORAR NOSSA TECNOLOGIA",
    statusLabel: "Status",
    scopeNote:
      "Escopo, disponibilidade e condições de entrega estão sujeitos à qualificação técnica e a arranjo contratual.",
    loading: "Carregando",
    of: "de",
  },
  status: {
    operational: "Operacional",
    development: "Em Desenvolvimento",
    research: "Pesquisa e Desenvolvimento",
    planned: "Planejado",
  },
  footer: {
    blurb:
      "Uma organização de engenharia e tecnologia que integra engenharia avançada, inteligência artificial, sistemas inteligentes e pesquisa aplicada.",
    columns: [
      {
        title: "Capacidades",
        links: [
          { label: "Engenharia", to: "/engineering" },
          { label: "Tecnologia", to: "/technology" },
          { label: "IA e Sistemas Inteligentes", to: "/ai-intelligent-systems" },
          { label: "Pesquisa e Inovação", to: "/research" },
        ],
      },
      {
        title: "Ecossistema",
        links: [
          { label: "Core Engineering", to: "/core-engineering" },
          { label: "Produtos e Iniciativas", to: "/products" },
          { label: "Visão do Ecossistema", to: "/ecosystem" },
          { label: "Setores", to: "/industries" },
        ],
      },
      {
        title: "Organização",
        links: [
          { label: "Sobre a PentaHydra", to: "/about" },
          { label: "Liderança", to: "/leadership" },
          { label: "Insights", to: "/insights" },
          { label: "Contato", to: "/contact" },
        ],
      },
    ],
    legal: [
      { label: "Política de Privacidade", to: "/privacy" },
      { label: "Termos de Uso", to: "/terms" },
    ],
    manifest: ["PENTAHYDRA AGENCY SYSTEMS", "BRASIL · ATUAÇÃO GLOBAL", "SYS_STATUS · ATIVO"],
    rights: "Todos os direitos reservados.",
    signature: "ASSINATURA DO SISTEMA",
    coordinates: "LAT -15.7939 · LON -47.8828",
  },
  home: {
    hero: {
      eyebrow: "PENTAHYDRA AGENCY SYSTEMS",
      title: "ENGENHARIA PARA A PRÓXIMA GERAÇÃO DE SISTEMAS INTELIGENTES",
      body:
        "Engenharia avançada, inteligência artificial e tecnologia integrada para desafios reais de alta complexidade.",
      primary: { label: "EXPLORAR CAPACIDADES", to: "/engineering" },
      secondary: { label: "CONHECER O ECOSSISTEMA", to: "/ecosystem" },
      meta: ["ORIGEM · BRASIL", "DOMÍNIO · ENGENHARIA + IA", "SYS_STATUS · ATIVO"],
      image: ASSETS.hero,
      imageAlt:
        "Renderização tridimensional de um núcleo de engenharia em titânio com caminhos de luz ciano",
      caption: "CORE ENGINEERING · SISTEMA OPERACIONAL DE ENGENHARIA AGÊNTICA",
    },
    intro: {
      label: "PERFIL INSTITUCIONAL",
      title: "Uma organização de engenharia construída em torno de inteligência integrada.",
      paragraphs: [
        "A PentaHydra Agency Systems é uma organização de engenharia e tecnologia. Conectamos engenharia avançada, inteligência artificial, sistemas inteligentes de software, automação e pesquisa aplicada em soluções técnicas coerentes para problemas reais de alta complexidade.",
        "Nossa prática é multidisciplinar por princípio. Engenharia ambiental, sistemas industriais, inteligência geoespacial e engenharia de software compartilham uma mesma lógica operacional: análise rigorosa, modelos verificáveis e tecnologia que se sustenta fora do laboratório.",
        "A tecnologia nunca é o argumento por si só. O julgamento de engenharia define o que deve ser medido, o que deve ser automatizado e o que deve permanecer sob controle humano qualificado.",
      ],
      figures: [
        { value: "07", label: "Domínios de capacidade" },
        { value: "10", label: "Setores industriais" },
        { value: "05", label: "Iniciativas tecnológicas" },
        { value: "02", label: "Idiomas de trabalho" },
      ],
    },
    principles: {
      label: "PRINCÍPIOS OPERACIONAIS",
      items: [
        {
          tag: "P/01",
          title: "Rigor técnico",
          text: "Decisões de engenharia são documentadas, rastreáveis e auditáveis. Modelos são validados antes de orientar uma decisão.",
        },
        {
          tag: "P/02",
          title: "Sistemas integrados",
          text: "Disciplinas são conectadas, não apenas reunidas. Dados, modelos e ferramentas compartilham uma mesma arquitetura.",
        },
        {
          tag: "P/03",
          title: "Inteligência responsável",
          text: "Sistemas autônomos operam dentro de limites definidos, com proveniência, supervisão humana e escalonamento claro.",
        },
      ],
    },
    capabilities: {
      label: "CAPACIDADES CENTRAIS",
      title: "Sete domínios, uma lógica de engenharia.",
      intro:
        "Cada domínio pode ser contratado de forma independente. O valor emerge quando são integrados em um único programa técnico.",
      items: [
        {
          n: "01",
          title: "Sistemas de Engenharia",
          text: "Concepção, análise e gestão técnica de sistemas de engenharia em contextos ambientais, industriais e de infraestrutura.",
          tags: ["Concepção", "Análise", "Gestão técnica"],
          to: "/engineering",
        },
        {
          n: "02",
          title: "Inteligência Artificial",
          text: "Engenharia de IA aplicada: arquiteturas agênticas, sistemas de recuperação, orquestração e validação técnica de modelos.",
          tags: ["IA agêntica", "RAG", "Validação"],
          to: "/ai-intelligent-systems",
        },
        {
          n: "03",
          title: "Automação Inteligente",
          text: "Automação de fluxos técnicos, rotinas de engenharia e processos operacionais com resultados mensuráveis e auditáveis.",
          tags: ["Fluxos", "Orquestração", "Controle"],
          to: "/technology",
        },
        {
          n: "04",
          title: "Engenharia Digital",
          text: "Modelos digitais, simulação e software de engenharia que conectam dados de projeto à decisão técnica.",
          tags: ["Modelagem", "Simulação", "Ferramentas"],
          to: "/technology",
        },
        {
          n: "05",
          title: "Tecnologia Ambiental e Industrial",
          text: "Monitoramento, indicadores e inteligência ambiental aplicados a ativos industriais, infraestrutura e operações reguladas.",
          tags: ["Monitoramento", "Indicadores", "Conformidade"],
          to: "/engineering",
        },
        {
          n: "06",
          title: "Inteligência de Dados",
          text: "Dados geoespaciais, de sensores e operacionais estruturados em sistemas de conhecimento que apoiam o julgamento técnico.",
          tags: ["Geoespacial", "Sensores", "Conhecimento"],
          to: "/technology",
        },
        {
          n: "07",
          title: "Pesquisa e Desenvolvimento",
          text: "Programas de pesquisa aplicada, experimentação e desenvolvimento tecnológico com direção técnica documentada.",
          tags: ["Pesquisa aplicada", "Prototipagem", "Validação"],
          to: "/research",
        },
      ],
    },
    ecosystem: {
      label: "ECOSSISTEMA TECNOLÓGICO",
      title: "Cinco camadas, orquestradas como um sistema.",
      intro:
        "O ecossistema PentaHydra conecta prática de engenharia, agentes inteligentes, dados, automação e ferramentas técnicas especializadas por meio de uma única camada operacional.",
      core: {
        title: "PentaHydra Core Engineering",
        subtitle: "Sistema Operacional de Engenharia Agêntica",
        text: "A camada de orquestração que une agentes, ferramentas, conhecimento e dados de engenharia em fluxos técnicos supervisionados.",
        to: "/core-engineering",
      },
      layers: [
        { n: "L1", title: "Runtime e Orquestração de Agentes", text: "Execução, planejamento e coordenação de agentes de engenharia especializados." },
        { n: "L2", title: "Conhecimento e Dados", text: "Corpora técnicos, dados geoespaciais e conhecimento de engenharia validado." },
        { n: "L3", title: "Registro de Skills e Ferramentas", text: "Capacidades de engenharia registradas, integrações e ferramentas computacionais." },
        { n: "L4", title: "Validação e Proveniência", text: "Verificações técnicas, trilhas de auditoria e rastreabilidade de cada resultado." },
        { n: "L5", title: "Aplicações de Domínio", text: "Programas ambientais, mineração, energia, portos e aplicações industriais." },
      ],
    },
    products: {
      label: "INICIATIVAS EM DESTAQUE",
      title: "Um portfólio em desenvolvimento deliberado.",
      intro:
        "Cada iniciativa é apresentada com seu status atual de desenvolvimento. Os status refletem progresso técnico interno, não disponibilidade comercial.",
      cta: { label: "VER O PORTFÓLIO COMPLETO", to: "/products" },
    },
    industries: {
      label: "SETORES",
      title: "Setores onde a complexidade técnica é a restrição.",
      intro:
        "Atuamos onde engenharia, regulação, dados e risco operacional se cruzam — e onde precisão não é opcional.",
      cta: { label: "EXPLORAR SETORES", to: "/industries" },
    },
    research: {
      label: "PESQUISA E INOVAÇÃO",
      title: "Pesquisa aplicada com destino de engenharia.",
      paragraphs: [
        "A pesquisa na PentaHydra se organiza em torno de problemas que a prática de engenharia já enfrenta: como dados ambientais se tornam indicadores confiáveis, como agentes inteligentes apoiam a análise técnica sem substituir o julgamento, como modelos se comportam quando a realidade diverge das condições de treinamento.",
        "Os programas são estruturados como trilhas de desenvolvimento com escopo, hipóteses técnicas e critérios de validação definidos. Os resultados são documentados internamente; nada é apresentado publicamente como resultado científico, certificação ou parceria sem verificação.",
      ],
      image: ASSETS.dataPathways,
      imageAlt: "Fotografia macro de caminhos de fibra óptica com luz ciano",
      points: [
        { title: "Engenharia Agêntica", text: "Agentes aplicados a fluxos de engenharia, com limites de controle e validação." },
        { title: "GeoAI e Inteligência Ambiental", text: "Dados geoespaciais e ambientais interpretados por sistemas de aprendizado." },
        { title: "Gêmeos Digitais e Simulação", text: "Representações digitais de ativos para análise e teste de cenários." },
      ],
      cta: { label: "PESQUISA E INOVAÇÃO", to: "/research" },
    },
    leadership: {
      label: "LIDERANÇA",
      name: "Railson De Arruda",
      role: "Fundador e Diretor Estratégico de Tecnologia",
      bio: "Engenheiro ambiental, empreendedor e estrategista de tecnologia com experiência em engenharia, risco ambiental, auditoria técnica, inteligência artificial e desenvolvimento de sistemas tecnológicos inteligentes. Fundador da PentaHydra Agency Systems e criador do conceito PentaHydra Core Engineering.",
      areas: [
        "Engenharia Ambiental",
        "Risco de Engenharia",
        "Auditoria Ambiental",
        "Inteligência Artificial",
        "Sistemas Inteligentes",
        "Mineração e Mineralogia",
        "Energia Renovável",
        "Infraestrutura",
      ],
      cta: { label: "PERFIL DE LIDERANÇA", to: "/leadership" },
    },
    cta: {
      label: "ENGAJAMENTO",
      title: "VAMOS ENGENHEIRAR O FUTURO.",
      text: "Serviços de engenharia, programas de tecnologia, colaboração em pesquisa e parcerias estratégicas. Conversas técnicas começam pelo problema, não pelo produto.",
      primary: { label: "INICIAR UMA CONVERSA", to: "/contact" },
      secondary: { label: "CONHECER O ECOSSISTEMA", to: "/ecosystem" },
    },
  },
};

export default { ...pt, ...detail, ...insights };