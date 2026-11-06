import { ASSETS } from "@/content/assets";
import detail from "@/content/detail.en";
import insights from "@/content/insights.en";

const en = {
  code: "en",
  label: "EN",
  brand: {
    name: "PENTAHYDRA",
    full: "PENTAHYDRA AGENCY SYSTEMS",
    tagline: "ENGINEERING. INTELLIGENCE. TECHNOLOGY.",
    short: "Engineering and technology organization",
    descriptor: "ENGINEERING · INTELLIGENCE · TECHNOLOGY",
  },
  nav: [
    { label: "Engineering", to: "/engineering" },
    { label: "Technology", to: "/technology" },
    { label: "Ecosystem", to: "/ecosystem" },
    { label: "Products", to: "/products" },
    { label: "Industries", to: "/industries" },
    { label: "Research", to: "/research" },
    { label: "About", to: "/about" },
  ],
  navMeta: {
    contact: "Contact",
    contactTo: "/contact",
    core: "Core Engineering",
    coreTo: "/core-engineering",
  },
  ui: {
    menu: "Menu",
    close: "Close",
    language: "Language",
    readMore: "Read more",
    viewAll: "View all",
    back: "Back",
    contact: "Contact",
    ctaPrimary: "LET'S ENGINEER THE FUTURE",
    ctaSecondary: "EXPLORE OUR TECHNOLOGY",
    statusLabel: "Status",
    scopeNote:
      "Scope, availability and delivery conditions are subject to technical qualification and contractual arrangement.",
    loading: "Loading",
    of: "of",
  },
  status: {
    operational: "Operational",
    development: "In Development",
    research: "Research & Development",
    planned: "Planned",
  },
  footer: {
    blurb:
      "An engineering and technology organization integrating advanced engineering, artificial intelligence, intelligent systems and applied research.",
    columns: [
      {
        title: "Capabilities",
        links: [
          { label: "Engineering", to: "/engineering" },
          { label: "Technology", to: "/technology" },
          { label: "AI & Intelligent Systems", to: "/ai-intelligent-systems" },
          { label: "Research & Innovation", to: "/research" },
        ],
      },
      {
        title: "Ecosystem",
        links: [
          { label: "Core Engineering", to: "/core-engineering" },
          { label: "Products & Initiatives", to: "/products" },
          { label: "Ecosystem Overview", to: "/ecosystem" },
          { label: "Industries", to: "/industries" },
        ],
      },
      {
        title: "Organization",
        links: [
          { label: "About PentaHydra", to: "/about" },
          { label: "Leadership", to: "/leadership" },
          { label: "Insights", to: "/insights" },
          { label: "Contact", to: "/contact" },
        ],
      },
    ],
    legal: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
    ],
    manifest: ["PENTAHYDRA AGENCY SYSTEMS", "BRAZIL · GLOBAL ENGAGEMENT", "SYS_STATUS · ACTIVE"],
    rights: "All rights reserved.",
    signature: "SYSTEM SIGNATURE",
    coordinates: "LAT -15.7939 · LON -47.8828",
  },
  home: {
    hero: {
      eyebrow: "PENTAHYDRA AGENCY SYSTEMS",
      title: "ENGINEERING THE NEXT GENERATION OF INTELLIGENT SYSTEMS",
      body:
        "Advanced engineering, artificial intelligence and integrated technology for complex real-world challenges.",
      primary: { label: "EXPLORE OUR CAPABILITIES", to: "/engineering" },
      secondary: { label: "DISCOVER THE ECOSYSTEM", to: "/ecosystem" },
      meta: ["ORIGIN · BRAZIL", "DOMAIN · ENGINEERING + AI", "SYS_STATUS · ACTIVE"],
      image: ASSETS.hero,
      imageAlt:
        "Three-dimensional render of a matte titanium engineering core with cyan pathways of light",
      caption: "CORE ENGINEERING · AGENTIC ENGINEERING OPERATING SYSTEM",
    },
    intro: {
      label: "INSTITUTIONAL PROFILE",
      title: "An engineering organization built around integrated intelligence.",
      paragraphs: [
        "PentaHydra Agency Systems is an engineering and technology organization. We connect advanced engineering, artificial intelligence, intelligent software systems, automation and applied research into coherent technical solutions for complex real-world problems.",
        "Our practice is multidisciplinary by design. Environmental engineering, industrial systems, geospatial intelligence and software engineering share one operating logic: rigorous analysis, verifiable models, and technology that holds up outside the laboratory.",
        "Technology is never the argument by itself. Engineering judgment decides what should be measured, what should be automated, and what must remain under qualified human control.",
      ],
      figures: [
        { value: "07", label: "Capability domains" },
        { value: "10", label: "Industry sectors" },
        { value: "05", label: "Technology initiatives" },
        { value: "02", label: "Working languages" },
      ],
    },
    principles: {
      label: "OPERATING PRINCIPLES",
      items: [
        {
          tag: "P/01",
          title: "Technical rigor",
          text: "Engineering decisions are documented, traceable and open to audit. Models are validated before they inform a decision.",
        },
        {
          tag: "P/02",
          title: "Integrated systems",
          text: "Disciplines are connected rather than assembled. Data, models and tools share one architecture across the project lifecycle.",
        },
        {
          tag: "P/03",
          title: "Responsible intelligence",
          text: "Autonomous systems operate inside defined limits, with provenance, human oversight and clear escalation paths.",
        },
      ],
    },
    capabilities: {
      label: "CORE CAPABILITIES",
      title: "Seven domains, one engineering logic.",
      intro:
        "Each domain can be engaged independently. Their value emerges when they are integrated into a single technical program.",
      items: [
        {
          n: "01",
          title: "Engineering Systems",
          text: "Design, analysis and technical management of engineering systems across environmental, industrial and infrastructure contexts.",
          tags: ["Design", "Analysis", "Technical management"],
          to: "/engineering",
        },
        {
          n: "02",
          title: "Artificial Intelligence",
          text: "Applied AI engineering: agentic architectures, retrieval systems, orchestration and technical validation of model behaviour.",
          tags: ["Agentic AI", "RAG", "Validation"],
          to: "/ai-intelligent-systems",
        },
        {
          n: "03",
          title: "Intelligent Automation",
          text: "Automation of technical workflows, engineering routines and operational processes with measurable, auditable outcomes.",
          tags: ["Workflows", "Orchestration", "Control"],
          to: "/technology",
        },
        {
          n: "04",
          title: "Digital Engineering",
          text: "Digital models, simulation and engineering software that connect project data with technical decision-making.",
          tags: ["Modelling", "Simulation", "Tooling"],
          to: "/technology",
        },
        {
          n: "05",
          title: "Environmental & Industrial Technology",
          text: "Monitoring, indicators and environmental intelligence applied to industrial assets, infrastructure and regulated operations.",
          tags: ["Monitoring", "Indicators", "Compliance"],
          to: "/engineering",
        },
        {
          n: "06",
          title: "Data Intelligence",
          text: "Geospatial, sensor and operational data structured into knowledge systems that support engineering judgment.",
          tags: ["Geospatial", "Sensors", "Knowledge"],
          to: "/technology",
        },
        {
          n: "07",
          title: "Research & Development",
          text: "Applied research programs, experimentation and technology development with documented technical direction.",
          tags: ["Applied research", "Prototyping", "Validation"],
          to: "/research",
        },
      ],
    },
    ecosystem: {
      label: "TECHNOLOGY ECOSYSTEM",
      title: "Five layers, orchestrated as one system.",
      intro:
        "The PentaHydra ecosystem connects engineering practice, intelligent agents, data, automation and specialised technical tools through a single operating layer.",
      core: {
        title: "PentaHydra Core Engineering",
        subtitle: "Agentic Engineering Operating System",
        text: "The orchestration layer that binds agents, tools, knowledge and engineering data into supervised technical workflows.",
        to: "/core-engineering",
      },
      layers: [
        { n: "L1", title: "Agent Runtime & Orchestration", text: "Execution, planning and coordination of specialised engineering agents." },
        { n: "L2", title: "Knowledge & Data", text: "Technical corpora, geospatial data and validated engineering knowledge." },
        { n: "L3", title: "Skill & Tool Registry", text: "Registered engineering capabilities, integrations and computational tools." },
        { n: "L4", title: "Validation & Provenance", text: "Technical checks, audit trails and traceability of every automated result." },
        { n: "L5", title: "Domain Applications", text: "Environmental, mining, energy, port and industrial application programs." },
      ],
    },
    products: {
      label: "FEATURED INITIATIVES",
      title: "A portfolio in deliberate development.",
      intro:
        "Each initiative is presented with its current development status. Statuses reflect internal technical progress, not commercial availability.",
      cta: { label: "VIEW THE FULL PORTFOLIO", to: "/products" },
    },
    industries: {
      label: "INDUSTRIES",
      title: "Sectors where technical complexity is the constraint.",
      intro:
        "We work where engineering, regulation, data and operational risk intersect — and where precision is not optional.",
      cta: { label: "EXPLORE INDUSTRIES", to: "/industries" },
    },
    research: {
      label: "RESEARCH & INNOVATION",
      title: "Applied research with an engineering destination.",
      paragraphs: [
        "Research at PentaHydra is organised around problems that engineering practice already faces: how environmental data becomes reliable indicators, how intelligent agents support technical analysis without replacing judgment, how models behave when reality diverges from training conditions.",
        "Programs are structured as development tracks with defined scope, technical hypotheses and validation criteria. Outputs are documented internally; nothing is presented publicly as a scientific result, certification or partnership unless verified.",
      ],
      image: ASSETS.dataPathways,
      imageAlt: "Macro photograph of fibre-optic data pathways carrying cyan light",
      points: [
        { title: "Agentic Engineering", text: "Agents applied to engineering workflows, with control and validation boundaries." },
        { title: "GeoAI & Environmental Intelligence", text: "Geospatial and environmental data interpreted by learning systems." },
        { title: "Digital Twins & Simulation", text: "Digital representations of assets for analysis and scenario testing." },
      ],
      cta: { label: "RESEARCH & INNOVATION", to: "/research" },
    },
    leadership: {
      label: "LEADERSHIP",
      name: "Railson De Arruda",
      role: "Founder & Strategic Technology Director",
      bio: "Environmental engineer, entrepreneur and technology strategist with experience in engineering, environmental risk, technical auditing, artificial intelligence and the development of intelligent technological systems. Founder of PentaHydra Agency Systems and creator of the PentaHydra Core Engineering concept.",
      areas: [
        "Environmental Engineering",
        "Engineering Risk",
        "Environmental Auditing",
        "Artificial Intelligence",
        "Intelligent Systems",
        "Mining & Mineralogy",
        "Renewable Energy",
        "Infrastructure",
      ],
      cta: { label: "LEADERSHIP PROFILE", to: "/leadership" },
    },
    cta: {
      label: "ENGAGEMENT",
      title: "LET'S ENGINEER THE FUTURE.",
      text: "Engineering services, technology programs, research collaboration and strategic partnerships. Technical conversations start with the problem, not the product.",
      primary: { label: "START A CONVERSATION", to: "/contact" },
      secondary: { label: "EXPLORE THE ECOSYSTEM", to: "/ecosystem" },
    },
  },
};

export default { ...en, ...detail, ...insights };