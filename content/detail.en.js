import { ASSETS } from "@/content/assets";
import { LINKEDIN } from "@/content/contact";

const detail = {
  products: {
    audienceLabel: "Primary users",
    purposeLabel: "Strategic purpose",
    capabilitiesLabel: "Main capabilities",
    industriesLabel: "Industry applications",
    statusLabel: "Development status",
    backLabel: "ALL INITIATIVES",
    hero: {
      label: "PRODUCT & INITIATIVE PORTFOLIO",
      title: "Initiatives, presented with their real status.",
      intro:
        "PentaHydra develops technology initiatives as engineering programs. Each is published here with its current development status, intended users and capability scope — no initiative is presented as commercially available before it is.",
      meta: ["PORTFOLIO · 05 INITIATIVES", "STATUS · INTERNAL TECHNICAL PROGRESS", "DOMAIN · ENGINEERING + AI"],
    },
    note:
      "Status labels describe internal technical progress. Operational status is assigned only where a capability has been validated in use. Commercial availability, licensing and delivery conditions are established contractually.",
    items: [
      {
        slug: "core-engineering",
        name: "PentaHydra Core Engineering",
        kind: "Agentic Engineering Operating System",
        status: "research",
        phase: "Architecture & runtime prototyping",
        audience: "Engineering teams and technical research units",
        purpose:
          "Establish an operating layer for engineering work: agents, tools and knowledge executed under technical governance.",
        capabilities: [
          "Agent runtime and orchestration",
          "Skill and agent registries",
          "Technical validation gates",
          "Audit and provenance records",
        ],
        industries: [
          "Environmental engineering",
          "Mining and geospatial analysis",
          "Renewable energy",
          "Ports and maritime systems",
          "Industrial operations",
        ],
        summary:
          "An engineering-oriented operating system concept that orchestrates specialised agents, engineering tools, knowledge and technical validation inside supervised workflows.",
        blocks: [
          {
            type: "prose",
            label: "VISION",
            heading: "An operating system for engineering work, not another dashboard.",
            paragraphs: [
              "Core Engineering is conceived as the layer where engineering intent is translated into coordinated, verifiable machine work. Agents do not replace engineering judgment; they execute defined technical tasks inside a governed runtime with provenance for every result.",
              "The concept integrates an agent runtime, planning and orchestration, a registry of engineering skills and tools, knowledge management, simulation, and audit trails — organised around engineering data rather than generic business content.",
            ],
          },
          {
            type: "cards",
            label: "MAIN COMPONENTS",
            columns: 3,
            items: [
              { title: "Agent Runtime", text: "Execution environment with controlled tool access and defined operational limits." },
              { title: "Orchestration", text: "Planning, delegation and coordination across specialised engineering agents." },
              { title: "Skill & Agent Registry", text: "Catalogued technical capabilities with versioning and declared scope." },
              { title: "Knowledge Management", text: "Technical corpora, standards and project knowledge structured for retrieval." },
              { title: "Technical Validation", text: "Checks and review gates before an automated result is accepted." },
              { title: "Audit & Provenance", text: "Traceability of inputs, tools and decisions across every workflow." },
            ],
          },
          {
            type: "cta",
            data: {
              label: "FLAGSHIP PROGRAM",
              title: "READ THE FULL CORE ENGINEERING PROGRAM.",
              text: "Architecture, application domains, roadmap and research direction — documented as an evolving development program.",
              primary: { label: "CORE ENGINEERING", to: "/core-engineering" },
              secondary: { label: "TALK TO ENGINEERING", to: "/contact" },
            },
          },
        ],
      },
      {
        slug: "oxygen-ecosystem",
        name: "Oxygen Ecosystem",
        kind: "Environmental Technology Initiative",
        status: "development",
        phase: "Structured modules, internal validation",
        audience: "Environmental teams, sustainability and compliance functions",
        purpose:
          "Turn environmental data into defensible indicators, compliance evidence and performance information.",
        capabilities: [
          "Environmental project management",
          "Monitoring records and indicators",
          "Sustainability assessment models (in development)",
          "Performance reporting structures",
        ],
        industries: ["Environmental management", "Renewable energy", "Mining", "Corporate sustainability"],
        summary:
          "An environmental technology initiative for project management, monitoring, sustainability indicators and environmental performance assessment.",
        blocks: [
          {
            type: "prose",
            label: "SCOPE",
            heading: "Environmental intelligence with an operational base.",
            paragraphs: [
              "Oxygen organises environmental projects, monitoring data and indicators in one structure, so that compliance evidence and sustainability information come from the same traceable source.",
              "The initiative distinguishes what is implemented from what remains in development. Implemented data structures and project management modules are validated internally; assessment models and external integrations remain under development.",
            ],
          },
          {
            type: "split",
            label: "STATUS BREAKDOWN",
            heading: "Implemented versus planned.",
            paragraphs: [
              "Transparency about maturity is a technical requirement, not a marketing decision. The breakdown below reflects the current internal state of the initiative.",
            ],
            points: [
              { title: "Implemented", text: "Environmental project structure, monitoring records and indicator organisation." },
              { title: "In development", text: "Corporate sustainability assessment models and performance dashboards." },
              { title: "Planned", text: "External monitoring integrations, sensor ingestion and reporting automation." },
            ],
            note: "Availability subject to technical qualification and contractual arrangement.",
          },
          { type: "cta" },
        ],
      },
      {
        slug: "smartportos-brasil",
        name: "SmartPortos Brasil",
        kind: "Smart Port Technology Initiative",
        status: "research",
        phase: "Domain research, process modelling",
        audience: "Port operators, maritime logistics and infrastructure teams",
        purpose:
          "Structure port operational information for monitoring, digital processes and logistics intelligence.",
        capabilities: [
          "Operational monitoring models",
          "Digital port process design",
          "Logistics flow analysis",
          "Infrastructure data structures",
        ],
        industries: ["Ports and maritime infrastructure", "Logistics and supply chain", "Infrastructure"],
        summary:
          "A smart-port technology initiative exploring port management intelligence, maritime operational information and digital port processes.",
        blocks: [
          {
            type: "prose",
            label: "SCOPE",
            heading: "Port operations as an information problem.",
            paragraphs: [
              "Port environments concentrate operational, regulatory and infrastructure data across many operators. SmartPortos Brasil studies how that information can be structured for operational monitoring, logistics intelligence and digital process support.",
              "The initiative is in a research stage: process mapping, data modelling and technical feasibility work. No port authority partnership, deployment or operational result is claimed.",
            ],
          },
          {
            type: "cards",
            label: "RESEARCH DIRECTIONS",
            columns: 3,
            items: [
              { title: "Port management intelligence", text: "Consolidated operational views for decision support." },
              { title: "Maritime operational data", text: "Vessel, cargo and scheduling information structures." },
              { title: "Digital port processes", text: "Process modelling and document flow in regulated environments." },
              { title: "Operational monitoring", text: "Indicator definition for terminal and infrastructure performance." },
              { title: "Logistics intelligence", text: "Analysis of flows, constraints and dependencies." },
              { title: "Infrastructure technology", text: "Sensor and geospatial data applied to port assets." },
            ],
          },
          { type: "cta" },
        ],
      },
      {
        slug: "engineering-intelligence",
        name: "PentaHydra Engineering Intelligence",
        kind: "Technical Intelligence Layer",
        status: "development",
        phase: "Domain models, internal pilots",
        audience: "Engineering consultancies, technical departments",
        purpose:
          "Make engineering documentation, geospatial data and technical evidence searchable, comparable and auditable.",
        capabilities: [
          "Technical retrieval with source attribution",
          "Geospatial referencing",
          "Evidence traceability chains",
        ],
        industries: ["Engineering and technical services", "Mining", "Infrastructure and construction"],
        summary:
          "Technical intelligence applied to engineering documentation, geospatial data and project evidence — structured for analysis and traceability.",
        blocks: [
          {
            type: "prose",
            label: "SCOPE",
            heading: "Making engineering records usable.",
            paragraphs: [
              "Engineering organisations accumulate documents, reports, spatial data and measurements that rarely share a structure. This initiative develops domain models and retrieval systems so technical evidence can be searched, compared and audited.",
              "Work focuses on document provenance, geospatial referencing and the validation rules that keep automated extraction accountable.",
            ],
          },
          {
            type: "cards",
            label: "CAPABILITIES IN DEVELOPMENT",
            columns: 3,
            items: [
              { title: "Technical retrieval", text: "Retrieval-augmented access to engineering documentation with source references." },
              { title: "Geospatial referencing", text: "Linking documents and findings to spatial context." },
              { title: "Evidence traceability", text: "Provenance chains from source document to technical conclusion." },
            ],
          },
          { type: "cta" },
        ],
      },
      {
        slug: "ai-systems",
        name: "PentaHydra AI Systems",
        kind: "Applied AI Engineering",
        status: "research",
        phase: "Architecture research, validation frameworks",
        audience: "Organisations applying AI to technical operations",
        purpose:
          "Provide validated foundations for applying agents and language models to technical work.",
        capabilities: [
          "Agentic architecture research",
          "Orchestration patterns",
          "Validation frameworks",
          "AI governance design",
        ],
        industries: ["Technology and artificial intelligence", "Industrial operations", "Regulated technical services"],
        summary:
          "Applied AI engineering focused on agentic architectures, orchestration patterns, retrieval systems and technical validation of model behaviour.",
        blocks: [
          {
            type: "prose",
            label: "SCOPE",
            heading: "Engineering discipline applied to AI.",
            paragraphs: [
              "AI Systems is the applied research track behind PentaHydra's intelligent systems work: how agents are structured, how tools are exposed safely, how knowledge is retrieved with provenance, and how behaviour is validated before deployment in technical contexts.",
              "The track produces internal frameworks and validation criteria. It does not present capabilities as operational services.",
            ],
          },
          {
            type: "cards",
            label: "RESEARCH FOCUS",
            columns: 3,
            items: [
              { title: "Agentic architectures", text: "Agent roles, delegation and control boundaries." },
              { title: "Orchestration patterns", text: "Planning, sequencing and failure handling across tools." },
              { title: "Retrieval design", text: "Knowledge structures that preserve source attribution." },
              { title: "Validation frameworks", text: "Criteria and test procedures for model behaviour." },
              { title: "Governance", text: "Permissions, logging and human oversight requirements." },
              { title: "Evaluation", text: "Measuring reliability, not just output quality." },
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
        name: "Mining & Natural Resources",
        challenge:
          "Operations combine geological uncertainty, environmental obligations and high capital exposure across remote sites.",
        solutions: ["Environmental monitoring structures", "Geospatial analysis", "Technical risk assessment"],
      },
      {
        name: "Energy & Renewable Energy",
        challenge:
          "Asset performance and environmental performance must be demonstrated simultaneously, often with fragmented operational data.",
        solutions: ["Performance indicators", "Data integration", "Technical validation"],
      },
      {
        name: "Environmental Management",
        challenge:
          "Compliance evidence is dispersed across projects, documents and monitoring campaigns.",
        solutions: ["Environmental data structure", "Indicator systems", "Audit traceability"],
      },
      {
        name: "Industrial & Manufacturing",
        challenge:
          "Process knowledge sits with people and paper while automation demands explicit, verifiable logic.",
        solutions: ["Process modelling", "Intelligent automation", "Sensor data integration"],
      },
      {
        name: "Ports & Maritime Infrastructure",
        challenge:
          "Multiple operators, regulatory regimes and asset classes produce operational data that rarely reconciles.",
        solutions: ["Operational monitoring", "Process digitisation", "Logistics analysis"],
      },
      {
        name: "Logistics & Supply Chain",
        challenge:
          "Decisions depend on constraint data that is distributed, delayed or unreliable.",
        solutions: ["Flow analysis", "Data consolidation", "Decision support"],
      },
      {
        name: "Infrastructure & Construction",
        challenge:
          "Design intent, field reality and documentation diverge throughout the asset lifecycle.",
        solutions: ["Digital engineering", "Technical documentation", "Simulation support"],
      },
      {
        name: "Engineering & Technical Services",
        challenge:
          "Technical knowledge is difficult to reuse across projects without losing rigour or traceability.",
        solutions: ["Knowledge systems", "Retrieval engineering", "Validation workflows"],
      },
      {
        name: "Technology & Artificial Intelligence",
        challenge:
          "Agentic systems are easy to demonstrate and hard to validate for regulated technical work.",
        solutions: ["AI engineering", "Validation frameworks", "Governance design"],
      },
      {
        name: "Corporate & Institutional Organizations",
        challenge:
          "Sustainability commitments require verifiable environmental information, not narrative reporting.",
        solutions: ["Sustainability intelligence", "Indicator governance", "Evidence structures"],
      },
    ],
  },

  pages: {
    about: {
      hero: {
        label: "ABOUT PENTAHYDRA",
        title: "An engineering organization built for integrated intelligence.",
        intro:
          "PentaHydra Agency Systems connects engineering practice, artificial intelligence, intelligent software systems, automation and applied research into one technical organization.",
        meta: ["ORIGIN · BRAZIL", "MODEL · MULTIDISCIPLINARY", "FOCUS · ENGINEERING + AI"],
      },
      blocks: [
        {
          type: "prose",
          label: "MISSION",
          heading: "Complex problems do not respect disciplinary boundaries.",
          paragraphs: [
            "PentaHydra exists to solve technical problems that are too integrated for a single discipline: environmental obligations that depend on data engineering, industrial operations that depend on validated automation, engineering decisions that depend on models nobody can audit.",
            "The organization is structured to hold engineering rigor and software capability in the same team, so that technology is designed from the problem and not retrofitted onto it.",
          ],
        },
        {
          type: "cards",
          label: "HOW WE OPERATE",
          columns: 3,
          items: [
            {
              title: "Engineering judgment first",
              text: "The technical question is defined before any tool is selected. Automation follows analysis, never the reverse.",
            },
            {
              title: "Systems over tools",
              text: "Individual tools are replaceable. The architecture that connects data, models and decisions is the durable asset.",
            },
            {
              title: "Validation before scale",
              text: "A capability is expanded only after its results can be checked, reproduced and defended.",
            },
            {
              title: "Documented decisions",
              text: "Technical choices carry their rationale, so future teams inherit reasoning and not just outcomes.",
            },
            {
              title: "Operational realism",
              text: "Designs assume field conditions: intermittent connectivity, incomplete data and regulated processes.",
            },
            {
              title: "Responsible autonomy",
              text: "Autonomous behaviour is bounded, logged and reversible wherever a technical decision matters.",
            },
          ],
        },
        {
          type: "split",
          label: "TECHNOLOGICAL PHILOSOPHY",
          heading: "Intelligence is an engineering material.",
          paragraphs: [
            "Artificial intelligence is treated as a material with properties: it degrades under distribution shift, it is sensitive to input quality, and its confidence is not evidence. Engineering with it requires the same discipline as engineering with steel or soil.",
            "That position determines how PentaHydra builds: provenance over fluency, validation over demonstration, and human accountability for consequential decisions.",
          ],
          image: {
            src: ASSETS.lockupDark,
            alt: "Official PentaHydra emblem — five-headed hydra shield",
            caption: "OFFICIAL EMBLEM · PENTAHYDRA AGENCY SYSTEMS",
          },
          points: [
            { title: "Provenance", text: "Every automated result must be traceable to its inputs and tools." },
            { title: "Bounded autonomy", text: "Agents operate inside declared scopes with review gates." },
            { title: "Human accountability", text: "Technical decisions remain attributed to responsible engineers." },
          ],
        },
        {
          type: "list",
          label: "DISCIPLINES",
          heading: "A combined technical base.",
          items: [
            { title: "Environmental Engineering", text: "Impact assessment, monitoring design, environmental risk and technical auditing." },
            { title: "Industrial & Infrastructure Systems", text: "Process analysis, asset performance and technical documentation." },
            { title: "Geospatial Intelligence", text: "Spatial data processing, remote sensing interpretation and terrain analysis." },
            { title: "Software & Data Engineering", text: "Systems architecture, data pipelines and applied machine learning." },
            { title: "Artificial Intelligence Engineering", text: "Agentic systems, retrieval architectures and model validation." },
            { title: "Research & Technical Development", text: "Applied research programs with defined scope and validation criteria." },
          ],
        },
        {
          type: "brand",
          label: "BRAND SYSTEM",
          heading: "Official identity assets.",
          intro:
            "The PentaHydra identity is built around the five-headed hydra emblem: five disciplines operating as a single organism. These are the official assets used across this platform.",
          assets: [
            { src: ASSETS.lockup, alt: "PentaHydra emblem on dark technical background", label: "EMBLEM · PRIMARY" },
            { src: ASSETS.lockupPrimary, alt: "PentaHydra horizontal lockup with wordmark", label: "LOCKUP · HORIZONTAL" },
            { src: ASSETS.lockupWhite, alt: "PentaHydra white lockup with descriptor", label: "LOCKUP · HIGH CONTRAST" },
            { src: ASSETS.banner, alt: "PentaHydra network banner graphic", label: "BANNER · NETWORK" },
            { src: ASSETS.emblem, alt: "PentaHydra application icon", label: "APP ICON · 192PX" },
            { src: ASSETS.lockupDark, alt: "PentaHydra emblem radiating network pathways", label: "EMBLEM · NETWORK FIELD" },
          ],
          note:
            "Vector masters (SVG) are maintained by PentaHydra and can replace the raster set provided here without design changes to the platform.",
        },
        { type: "cta" },
      ],
    },

    engineering: {
      hero: {
        label: "ENGINEERING",
        title: "Engineering across the full technical lifecycle.",
        intro:
          "From assessment and design to monitoring, auditing and technical risk, PentaHydra engages engineering as a continuous responsibility rather than a delivered document.",
        meta: ["DISCIPLINES · 11", "ENGAGEMENT · QUALIFICATION-BASED", "SCOPE · PROJECT-SPECIFIC"],
      },
      note:
        "All engineering services are presented as capability areas. Scope, availability and delivery conditions are subject to technical qualification and contractual arrangement. No client engagements, certifications or contracts are represented on this page.",
      blocks: [
        {
          type: "cards",
          label: "CAPABILITY AREAS",
          heading: "Eleven engineering domains.",
          intro:
            "Each domain can be engaged independently or combined into an integrated technical program.",
          columns: 3,
          items: [
            { title: "Environmental Engineering", text: "Impact assessment, monitoring design, environmental control and technical auditing." },
            { title: "Mining & Mineral Resources", text: "Technical analysis of extraction operations, mineral processes and environmental obligations." },
            { title: "Renewable Energy", text: "Feasibility, performance analysis and environmental integration of renewable assets." },
            { title: "Industrial Engineering", text: "Process analysis, operational efficiency and technical documentation of industrial systems." },
            { title: "Infrastructure", text: "Technical assessment, lifecycle documentation and risk analysis for infrastructure assets." },
            { title: "Ports & Maritime Systems", text: "Operational and environmental analysis for terminal, port and maritime environments." },
            { title: "Environmental Monitoring", text: "Monitoring programme design, indicator definition and data governance." },
            { title: "Engineering Auditing", text: "Independent technical review of projects, documentation and compliance evidence." },
            { title: "Technical Risk Assessment", text: "Identification, classification and treatment of engineering and environmental risk." },
            { title: "Geospatial Intelligence", text: "Spatial analysis, remote sensing interpretation and territorial data modelling." },
            { title: "Digital Engineering", text: "Digital models, simulation support and technical data systems for engineering assets." },
          ],
        },
        {
          type: "split",
          label: "METHOD",
          heading: "How an engineering engagement is structured.",
          image: {
            src: ASSETS.mining,
            alt: "Precision industrial sensors and cabling mounted on heavy machinery at dusk",
            caption: "FIELD INSTRUMENTATION · TECHNICAL VALIDATION",
          },
          paragraphs: [
            "Engagements start with technical qualification: whether the problem is well defined, whether data exists to answer it, and whether the required competence is available.",
            "Only then is scope established, with explicit deliverables and acceptance criteria. Execution produces documented evidence. Validation closes the cycle with a technical review of what was concluded and what remains uncertain.",
          ],
          points: [
            { title: "01 · Technical qualification", text: "Problem definition, data availability and feasibility review." },
            { title: "02 · Scope & acceptance criteria", text: "Deliverables, methods and review conditions agreed in writing." },
            { title: "03 · Execution & documentation", text: "Technical work with traceable records and explicit assumptions." },
            { title: "04 · Validation & handover", text: "Independent review, uncertainty statement and knowledge transfer." },
          ],
        },
        {
          type: "cards",
          label: "INTEGRATION",
          heading: "Where engineering meets intelligence.",
          columns: 2,
          items: [
            {
              title: "Monitoring programmes as data systems",
              text: "Environmental and industrial monitoring is designed as a data architecture — sampling logic, indicator definitions and traceability — not as a set of disconnected campaigns.",
            },
            {
              title: "Technical auditing supported by retrieval",
              text: "Engineering evidence is indexed with provenance, so audits can follow a conclusion back to its source documents and measurements.",
            },
            {
              title: "Risk models that stay inspectable",
              text: "Assessment models remain documented and reproducible, so a risk classification can be defended technically.",
            },
            {
              title: "Geospatial data treated as engineering data",
              text: "Spatial layers are processed with the same validation discipline as any other technical measurement.",
            },
          ],
        },
        { type: "cta" },
      ],
    },

    technology: {
      hero: {
        label: "TECHNOLOGY",
        title: "Technology built to carry engineering weight.",
        intro:
          "Digital engineering, data platforms, automation and integration — designed for technical operations where results must be verifiable.",
        meta: ["LAYERS · DATA · AUTOMATION · INTEGRATION", "METHOD · VALIDATED DELIVERY", "STACK · MODULAR"],
      },
      blocks: [
        {
          type: "prose",
          label: "POSITION",
          heading: "Software as engineering infrastructure.",
          paragraphs: [
            "PentaHydra builds technology the way engineering builds assets: with defined requirements, documented interfaces, review stages and acceptance criteria. A system that cannot be inspected cannot be trusted with a technical decision.",
            "That is why the stack is modular by default. Data ingestion, processing, models and interfaces are separated, so a component can be replaced or audited without compromising the whole.",
          ],
        },
        {
          type: "cards",
          label: "TECHNOLOGY AREAS",
          columns: 3,
          items: [
            { title: "Digital Engineering", text: "Technical data models, simulation support and engineering tooling." },
            { title: "Data Platforms", text: "Structured ingestion, quality control and traceable storage of technical data." },
            { title: "Intelligent Automation", text: "Workflow automation with explicit rules, logging and exception handling." },
            { title: "Systems Integration", text: "Connecting operational systems, sensors and technical software through documented interfaces." },
            { title: "Geospatial Systems", text: "Spatial data processing, layers, analysis and mapping infrastructure." },
            { title: "Applied AI Systems", text: "Agents, retrieval and model validation integrated into engineering workflows." },
            { title: "Knowledge Systems", text: "Technical corpora, retrieval architecture and documentation intelligence." },
            { title: "Monitoring Infrastructure", text: "Sensor data acquisition, indicator computation and alert logic." },
            { title: "Governance & Audit", text: "Access control, provenance records and technical review trails." },
          ],
        },
        {
          type: "timeline",
          label: "DELIVERY MODEL",
          heading: "Four stages, each with a review gate.",
          phases: [
            { tag: "T/01", title: "Technical discovery", text: "Requirements, constraints, data inventory and risk mapping." },
            { tag: "T/02", title: "Architecture", text: "Component boundaries, interfaces, data contracts and validation plan." },
            { tag: "T/03", title: "Implementation", text: "Incremental delivery with documented decisions and test evidence." },
            { tag: "T/04", title: "Validation & operation", text: "Acceptance testing, monitoring and defined handover." },
          ],
        },
        { type: "cta" },
      ],
    },

    ai: {
      hero: {
        label: "AI & INTELLIGENT SYSTEMS",
        title: "Intelligent systems engineered for technical work.",
        intro:
          "Agentic AI, orchestration, retrieval and validation — applied to engineering workflows, research and operational decision support, inside defined limits.",
        meta: ["FOCUS · AGENTIC AI", "METHOD · VALIDATION-FIRST", "GOVERNANCE · REQUIRED"],
      },
      note:
        "Capabilities described here are engineering areas and research directions. They are not presented as operational products unless a validated status is indicated.",
      blocks: [
        {
          type: "cards",
          label: "CAPABILITY MAP",
          heading: "Twelve areas of intelligent systems work.",
          columns: 3,
          items: [
            { title: "Agentic AI", text: "Agents that execute defined technical tasks under supervision, with tool access and limits." },
            { title: "AI Engineering", text: "Design, evaluation and operation of AI systems as engineering artefacts." },
            { title: "Intelligent Agents", text: "Single-purpose agents with declared scope, inputs and failure behaviour." },
            { title: "Multi-Agent Systems", text: "Coordinated agents with roles, handoffs and conflict resolution." },
            { title: "Engineering Automation", text: "Automation of analysis, documentation and technical routine work." },
            { title: "AI Orchestration", text: "Planning, sequencing and monitoring of multi-step technical workflows." },
            { title: "Knowledge Systems", text: "Structured technical knowledge with retrieval and citation." },
            { title: "Retrieval-Augmented Generation", text: "Grounded generation from verified technical sources with provenance." },
            { title: "LLM Applications", text: "Applied language models for analysis, extraction and technical drafting." },
            { title: "Intelligent Workflows", text: "Human-in-the-loop processes with review gates and escalation." },
            { title: "Technical Validation", text: "Test procedures, benchmark sets and acceptance criteria for model behaviour." },
            { title: "AI Governance", text: "Permissions, logging, oversight and accountability structures." },
          ],
        },
        {
          type: "split",
          label: "APPLICATION",
          heading: "How intelligent systems support engineering.",
          paragraphs: [
            "In engineering practice, most time is spent locating evidence, reconciling documents and repeating analysis. Intelligent systems are valuable where they reduce that work without introducing unverifiable conclusions.",
            "PentaHydra applies them in four places: technical analysis support, documentation and evidence retrieval, monitoring and indicator interpretation, and orchestration of computational tooling.",
          ],
          points: [
            { title: "Analysis support", text: "Comparative review, anomaly identification and structured summarisation with sources." },
            { title: "Evidence retrieval", text: "Document and measurement search that returns the source, not just an answer." },
            { title: "Monitoring interpretation", text: "Indicator analysis and threshold explanation for environmental and industrial data." },
            { title: "Tool orchestration", text: "Sequencing of simulation, geospatial and calculation tools inside one workflow." },
          ],
        },
        {
          type: "list",
          label: "GOVERNANCE",
          heading: "Non-negotiable operating limits.",
          items: [
            { title: "Declared scope", text: "An agent only acts within a documented task boundary and tool set." },
            { title: "Provenance", text: "Inputs, sources and tool calls are recorded for every produced result." },
            { title: "Human review gates", text: "Consequential outputs require qualified technical approval before use." },
            { title: "Failure transparency", text: "Systems report uncertainty and refusal rather than fabricating resolution." },
            { title: "Reversibility", text: "Automated actions that affect records or assets are reversible and logged." },
          ],
        },
        { type: "cta" },
      ],
    },

    ecosystem: {
      hero: {
        label: "PENTAHYDRA ECOSYSTEM",
        title: "One architecture, five technology initiatives.",
        intro:
          "Engineering, intelligent agents, data, automation and specialised tools connected through a single orchestration layer.",
        meta: ["LAYERS · 05", "ORCHESTRATION · CORE ENGINEERING", "INITIATIVES · 05"],
      },
      blocks: [
        {
          type: "prose",
          label: "STRUCTURE",
          heading: "Why an ecosystem rather than a product line.",
          paragraphs: [
            "Engineering problems rarely arrive as a single deliverable. A monitoring programme needs geospatial processing, data infrastructure, analysis, reporting and audit trails — each currently served by disconnected tools.",
            "The PentaHydra ecosystem is organised so those layers share one architecture. Core Engineering provides the orchestration layer; the initiatives below address specific domains on top of it.",
          ],
        },
        {
          type: "list",
          label: "ARCHITECTURE LAYERS",
          heading: "From runtime to application.",
          items: [
            { n: "L1", title: "Agent Runtime & Orchestration", text: "Execution, planning and coordination of specialised engineering agents." },
            { n: "L2", title: "Knowledge & Data", text: "Technical corpora, geospatial data and validated engineering knowledge." },
            { n: "L3", title: "Skill & Tool Registry", text: "Registered engineering capabilities, integrations and computational tools." },
            { n: "L4", title: "Validation & Provenance", text: "Technical checks, audit trails and traceability of every automated result." },
            { n: "L5", title: "Domain Applications", text: "Environmental, mining, energy, port and industrial application programs." },
          ],
        },
        { type: "initiatives", label: "INITIATIVES", heading: "Programs built on the architecture." },
        { type: "cta" },
      ],
    },

    industries: {
      hero: {
        label: "INDUSTRIES",
        title: "Where technical complexity is the constraint.",
        intro:
          "Ten sectors where engineering, regulation, data and operational risk intersect — and where precision determines the outcome.",
        meta: ["SECTORS · 10", "APPROACH · DOMAIN-SPECIFIC", "ENGAGEMENT · QUALIFICATION-BASED"],
      },
      blocks: [
        { type: "sectors", label: "SECTOR MAP", heading: "Challenges and engineering responses." },
        {
          type: "split",
          label: "ENGAGEMENT",
          heading: "Sector knowledge is a starting point, not a claim.",
          image: {
            src: ASSETS.port,
            alt: "Container port terminal with gantry cranes at blue hour",
            caption: "PORT INFRASTRUCTURE · OPERATIONAL CONTEXT",
          },
          paragraphs: [
            "PentaHydra does not present sector experience as a portfolio of logos. Each engagement begins with a technical qualification of the specific problem, the available data and the regulatory context.",
            "Where the required competence or evidence is not available, that is stated before a proposal is made.",
          ],
          points: [
            { title: "Domain framing", text: "Constraints, regulation and operational context defined first." },
            { title: "Data reality check", text: "What exists, what is missing, what must be measured." },
            { title: "Technical response", text: "Engineering and technology scope defined against those constraints." },
          ],
        },
        { type: "cta" },
      ],
    },

    research: {
      hero: {
        label: "RESEARCH & INNOVATION",
        title: "Applied research with an engineering destination.",
        intro:
          "Programs organised around problems engineering practice already faces — with defined scope, technical hypotheses and validation criteria.",
        meta: ["MODEL · APPLIED RESEARCH", "OUTPUT · DOCUMENTED INTERNALLY", "STATUS · DEVELOPMENT TRACKS"],
      },
      note:
        "PentaHydra does not publish scientific results, patents, funding or partnerships that have not been verified. Research tracks described here are internal development programs.",
      blocks: [
        {
          type: "cards",
          label: "RESEARCH TRACKS",
          columns: 3,
          items: [
            { title: "Agentic Engineering", text: "Agents applied to engineering workflows, with control boundaries and validation." },
            { title: "Artificial Intelligence", text: "Architectures, orchestration and evaluation methods for technical applications." },
            { title: "Engineering Automation", text: "Automating analysis and documentation without losing accountability." },
            { title: "GeoAI", text: "Geospatial data interpreted by learning systems, with spatial validation." },
            { title: "Environmental Intelligence", text: "Indicators, monitoring logic and environmental data quality." },
            { title: "Mining Intelligence", text: "Technical data analysis for extraction, processing and environmental obligations." },
            { title: "Digital Twins", text: "Representations of assets that support analysis rather than decoration." },
            { title: "Intelligent Industrial Systems", text: "Sensor, process and control data integrated into decision support." },
            { title: "Data Science", text: "Statistical treatment of technical data with explicit uncertainty." },
            { title: "Engineering Simulation", text: "Scenario testing and model behaviour under varying assumptions." },
            { title: "Scientific Computing", text: "Computational methods for engineering and environmental problems." },
          ],
        },
        {
          type: "split",
          label: "DISCIPLINE",
          heading: "What makes research usable.",
          paragraphs: [
            "Applied research earns its place when a technical team can rely on the result. That requires written hypotheses, defined datasets, reproducible procedures and honest reporting of failure.",
            "Every track at PentaHydra carries a technical sponsor, a validation criterion and a decision point: continue, redefine, or stop.",
          ],
          points: [
            { title: "Defined hypothesis", text: "A technical question stated precisely enough to be disproved." },
            { title: "Reproducible procedure", text: "Methods documented so results can be re-derived." },
            { title: "Validation criterion", text: "An acceptance condition agreed before experimentation." },
            { title: "Decision point", text: "Explicit review to continue, redefine or discontinue." },
          ],
        },
        { type: "cta" },
      ],
    },

    leadership: {
      hero: {
        label: "LEADERSHIP",
        title: "Railson De Arruda",
        intro:
          "Founder & Strategic Technology Director — Environmental Engineer, entrepreneur and technology strategist.",
        meta: ["ROLE · FOUNDER", "ORIGIN · BRAZIL", "FOCUS · ENGINEERING + INTELLIGENT SYSTEMS"],
      },
      blocks: [
        {
          type: "split",
          label: "PROFILE",
          heading: "Engineering judgment, applied to technology.",
          paragraphs: [
            "Railson De Arruda is an environmental engineer, entrepreneur and technology strategist with experience in engineering, environmental risk, technical auditing, artificial intelligence and the development of intelligent technological systems.",
            "He founded PentaHydra Agency Systems and created the PentaHydra Core Engineering concept — an engineering-oriented operating system program for orchestrating agents, tools and technical validation.",
          ],
          links: [{ label: "LinkedIn · Professional profile", href: LINKEDIN }],
          points: [
            { title: "Professional areas", text: "Environmental engineering, engineering risk, environmental auditing and forensics." },
            { title: "Technology", text: "Artificial intelligence, intelligent systems and applied technology development." },
            { title: "Sectors", text: "Mining and mineralogy, renewable energy, infrastructure and technical services." },
            { title: "Mandate", text: "Strategic direction, technical standards and research priorities at PentaHydra." },
          ],
          note: "Profile based on verified professional information. Qualifications and credentials are stated only where documented.",
        },
        {
          type: "prose",
          label: "STRATEGIC DIRECTION",
          heading: "Where the organization is heading.",
          paragraphs: [
            "The strategic thesis is that engineering organizations will increasingly operate with intelligent systems as part of their technical staff — not as chatbots, but as supervised executors of defined technical work.",
            "PentaHydra is being built for that transition: engineering competence first, technology architecture second, and governance throughout.",
          ],
        },
        { type: "cta" },
      ],
    },

    core: {
      hero: {
        label: "FLAGSHIP PROGRAM",
        title: "PentaHydra Core Engineering",
        intro:
          "An agentic engineering operating system concept: a supervised runtime for agents, engineering tools, knowledge and technical validation.",
        meta: ["CLASS · OS PROGRAM", "STATUS · RESEARCH & DEVELOPMENT", "DOMAIN · ENGINEERING"],
      },
      note:
        "Core Engineering is a technology development program. Modules, integrations and operating capabilities described here are in research and development and are not presented as complete.",
      blocks: [
        {
          type: "prose",
          label: "VISION",
          heading: "Not a dashboard. Not a chatbot. An operating layer.",
          paragraphs: [
            "Engineering work is already computational: models, simulations, geospatial processing, document analysis, regulatory checks. What is missing is an operating layer that coordinates that work with accountability.",
            "Core Engineering is conceived as that layer — an environment where specialised agents execute defined technical tasks using registered engineering tools, against validated knowledge, with every step recorded and reviewable.",
            "The ambition is an operating system for engineering organizations: persistent context, reusable skills, governed execution and technical memory that survives staff changes.",
          ],
        },
        {
          type: "cards",
          label: "ARCHITECTURE",
          heading: "Main technological components.",
          columns: 3,
          items: [
            { title: "Agent Runtime", text: "Controlled execution environment with declared tool permissions and limits." },
            { title: "Agent Orchestration", text: "Planning, delegation and coordination across specialised agents." },
            { title: "Planning & Execution", text: "Task decomposition with checkpoints and resumable execution." },
            { title: "Engineering Tools", text: "Computational, geospatial, simulation and analysis tools exposed as callable skills." },
            { title: "Skill Registry", text: "Versioned catalogue of technical capabilities with declared inputs and outputs." },
            { title: "Agent Registry", text: "Defined agent roles, competencies, boundaries and review requirements." },
            { title: "Knowledge Management", text: "Technical corpora, standards and project memory structured for retrieval." },
            { title: "Technical Validation", text: "Checks, cross-validation and review gates before results are accepted." },
            { title: "Simulation", text: "Scenario execution against engineering models and assumptions." },
            { title: "Engineering Data", text: "Geospatial, sensor, measurement and documentation data under one model." },
            { title: "Audit & Provenance", text: "Immutable records of inputs, tool calls, outputs and approvals." },
            { title: "Research Workflows", text: "Structured experimentation with documented hypotheses and criteria." },
            { title: "Specialised Integrations", text: "Domain connectors for engineering software and technical data sources." },
          ],
        },
        {
          type: "cards",
          label: "APPLICATION DOMAINS",
          heading: "Where the program is designed to operate.",
          columns: 3,
          items: [
            { title: "Environmental Engineering", text: "Monitoring design, indicator computation and compliance evidence." },
            { title: "Mining & Mineralogy", text: "Technical analysis across extraction, processing and environmental data." },
            { title: "LiDAR & Geospatial Analysis", text: "Point cloud processing, terrain and spatial relationship analysis." },
            { title: "Drone & GPS Data", text: "Aerial survey ingestion, georeferencing and change detection." },
            { title: "Renewable Energy", text: "Asset performance and environmental integration analysis." },
            { title: "Industrial Sensors", text: "Time-series interpretation, thresholds and anomaly review." },
            { title: "Maritime & Port Monitoring", text: "Operational and environmental monitoring for port environments." },
            { title: "Engineering Simulation", text: "Scenario testing with documented assumptions and sensitivity." },
            { title: "Technical Research", text: "Structured experimentation with reproducible procedures." },
          ],
        },
        {
          type: "timeline",
          label: "DEVELOPMENT ROADMAP",
          heading: "An evolving development program.",
          phases: [
            { tag: "R/01", title: "Foundation", text: "Runtime model, tool permission architecture and provenance records." },
            { tag: "R/02", title: "Orchestration", text: "Planning, delegation between agents and resumable execution." },
            { tag: "R/03", title: "Domain skills", text: "Engineering tool registration and validation of skill outputs." },
            { tag: "R/04", title: "Validation & scale", text: "Review gates, audit reporting and controlled domain expansion." },
          ],
        },
        {
          type: "split",
          label: "RESEARCH DIRECTION",
          heading: "The hard problems are technical, not cosmetic.",
          paragraphs: [
            "Three questions dominate the program. How does an agent know that a tool result is trustworthy? How does a system preserve engineering context across months of project life? And how is responsibility attributed when an automated recommendation influences a decision?",
            "Each maps to a research track: validation criteria, persistent engineering memory, and audit architecture. Progress is measured by whether a qualified engineer can defend the result — not by how fluent the output reads.",
          ],
          image: {
            src: ASSETS.hero,
            alt: "Abstract engineering core with cyan computational pathways",
            caption: "CORE ENGINEERING · RUNTIME CONCEPT VISUAL",
          },
          points: [
            { title: "Result trust", text: "Validation criteria that a technical reviewer can apply mechanically." },
            { title: "Engineering memory", text: "Context persistence across projects, tools and personnel changes." },
            { title: "Accountability", text: "Attribution chains from recommendation to responsible engineer." },
          ],
        },
        { type: "cta" },
      ],
    },

    privacy: {
      hero: {
        label: "PRIVACY POLICY",
        title: "How PentaHydra handles information.",
        intro:
          "This policy explains what information is collected through this website, why it is collected and how it is handled.",
        meta: ["VERSION · 1.0", "SCOPE · WEBSITE", "JURISDICTION · BRAZIL"],
      },
      blocks: [
        {
          type: "prose",
          label: "01 · DATA COLLECTED",
          heading: "Information you provide.",
          paragraphs: [
            "This website collects only the information you submit voluntarily through the contact form: name, corporate email, organization, country, area of interest, message and your consent to these terms.",
            "No account is required to navigate this website. Technical information about your visit may be processed by the hosting infrastructure for security and availability purposes.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "02 · PURPOSE",
          heading: "Why it is collected.",
          paragraphs: [
            "Contact information is used exclusively to respond to your enquiry, evaluate a potential technical or commercial engagement, and maintain the correspondence related to it.",
            "It is not sold, rented or shared with third parties for marketing purposes.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "03 · RETENTION & RIGHTS",
          heading: "How long, and your rights.",
          paragraphs: [
            "Enquiries are retained for as long as necessary to handle the request and any resulting engagement, or as required by applicable law.",
            "You may request access, correction or deletion of your information at any time through the contact channels published on this website. Requests are handled within a reasonable period.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "04 · LEGAL FRAMEWORK",
          heading: "Governing framework.",
          paragraphs: [
            "PentaHydra Agency Systems is established in Brazil and handles personal information in accordance with the Brazilian General Data Protection Law (Lei nº 13.709/2018 — LGPD).",
            "For privacy matters, use the contact form selecting the institutional category, or the contact channels published on the Contact page.",
          ],
          narrow: true,
        },
        { type: "cta" },
      ],
    },

    terms: {
      hero: {
        label: "TERMS OF USE",
        title: "Terms governing this website.",
        intro:
          "These terms describe the conditions of use for the PentaHydra Agency Systems website and the nature of the information published here.",
        meta: ["VERSION · 1.0", "SCOPE · WEBSITE", "JURISDICTION · BRAZIL"],
      },
      blocks: [
        {
          type: "prose",
          label: "01 · USE OF THE SITE",
          heading: "Permitted use.",
          paragraphs: [
            "This website is provided for institutional and informational purposes. You may consult, cite and reference its public content, provided the source is identified and the meaning is not distorted.",
            "Systematic extraction, automated scraping intended to build competing datasets, or any use that compromises the availability of the site is not permitted.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "02 · INFORMATION STATUS",
          heading: "No offer, no warranty of completeness.",
          paragraphs: [
            "Content on this website describes engineering and technology capabilities, research directions and development initiatives. It does not constitute a commercial offer, technical guarantee or professional advice for a specific project.",
            "Technology initiatives are published with development status labels. Statuses reflect internal technical progress at the time of publication and may change without notice.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "03 · INTELLECTUAL PROPERTY",
          heading: "Ownership.",
          paragraphs: [
            "The PentaHydra name, emblem, identity assets, written content and the PentaHydra Core Engineering concept are the property of PentaHydra Agency Systems and may not be reproduced for commercial purposes without written authorization.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "04 · ENGAGEMENTS",
          heading: "Services are contractual.",
          paragraphs: [
            "Any engineering service, technology program or research collaboration is established exclusively through a written agreement that defines scope, responsibilities, acceptance criteria and commercial conditions.",
            "Nothing on this website constitutes a commitment to deliver a specific capability, timeline or result.",
          ],
          narrow: true,
        },
        {
          type: "prose",
          label: "05 · GOVERNING LAW",
          heading: "Framework.",
          paragraphs: [
            "These terms are governed by the laws of the Federative Republic of Brazil. Questions about this website or these terms may be directed through the contact channels published on the Contact page.",
          ],
          narrow: true,
        },
        { type: "cta" },
      ],
    },

    contact: {
      hero: {
        label: "CONTACT",
        title: "Let's engineer the future.",
        intro:
          "Technical conversations start with the problem. Tell us what you are trying to solve, and we will tell you whether and how we can help.",
        meta: ["RESPONSE · TECHNICAL REVIEW", "LANGUAGES · EN / PT-BR", "ORIGIN · BRAZIL"],
      },
      categories: [
        { value: "engineering", label: "Engineering Services" },
        { value: "technology", label: "Technology Solutions" },
        { value: "ai", label: "AI & Intelligent Systems" },
        { value: "partnerships", label: "Strategic Partnerships" },
        { value: "research", label: "Research & Development" },
        { value: "institutional", label: "Institutional Relations" },
        { value: "business", label: "Business Opportunities" },
      ],
      form: {
        name: "Full name",
        email: "Corporate email",
        organization: "Organization",
        country: "Country",
        interest: "Area of interest",
        message: "Message",
        messagePlaceholder: "Describe the technical problem, context and any constraints.",
        consent: "I agree to the processing of my data as described in the Privacy Policy.",
        submit: "SEND MESSAGE",
        submitting: "SENDING",
        successTitle: "Message registered.",
        successText:
          "Your enquiry has been recorded and is available to our technical team. If your matter is urgent, use the direct channels below.",
        errorText: "The message could not be registered. Please try again or use the direct channels below.",
        required: "Required",
        selectInterest: "Select an area",
        validationError: "Please complete the required fields and accept the privacy terms.",
      },
      direct: {
        title: "Direct channels",
        text: "For institutional or commercial matters that require immediate attention, use the channels below.",
        channelsLabel: "Institutional channels",
        channelsNote:
          "Each address has a defined purpose. Sending your message to the right channel shortens the technical review.",
        channels: [
          { key: "general", label: "General institutional contact" },
          { key: "services", label: "Commercial requests & service engagement" },
          { key: "partnerships", label: "Strategic & institutional partnerships" },
          { key: "support", label: "Technical support" },
          { key: "privacy", label: "Privacy & data protection" },
        ],
        phoneLabel: "Direct line",
        locationLabel: "Operating base",
        location: "Brazil · global engagement",
        languageLabel: "Working languages",
        language: "English · Portuguese (Brazil)",
      },
    },
  },
};

export default detail;