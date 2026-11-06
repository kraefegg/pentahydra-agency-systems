const insights = {
  insights: {
    hero: {
      label: "INSIGHTS",
      title: "Technical positions, written carefully.",
      intro:
        "Editorial notes on agentic engineering, validation and environmental intelligence — published by the PentaHydra technical team.",
      meta: ["FORMAT · EDITORIAL NOTES", "LANGUAGES · EN / PT-BR", "ATTRIBUTION · PENTAHYDRA ENGINEERING"],
    },
    note:
      "These are technical perspectives from our engineering practice. They are not peer-reviewed publications, and no results, benchmarks or client outcomes are claimed.",
    items: [
      {
        slug: "agentic-engineering-operating-system",
        title: "What an agentic engineering operating system actually has to solve",
        category: "Agentic Engineering",
        abstract:
          "Most agent frameworks optimise for demonstration. Engineering work demands something else: persistent context, tool accountability and results that survive review.",
        blocks: [
          {
            type: "prose",
            label: "POSITION",
            heading: "The problem is not the model. It is the surrounding system.",
            paragraphs: [
              "A language model can produce a plausible technical analysis in seconds. What it cannot do, on its own, is establish that the analysis is correct, that the inputs were the current ones, that the tool it called behaved as expected, and that the conclusion can be defended six months later.",
              "Those four requirements are not model properties. They are operating system properties: context management, tool contracts, validation gates and provenance records.",
            ],
          },
          {
            type: "prose",
            label: "CONSEQUENCE",
            heading: "Design the runtime before the agents.",
            paragraphs: [
              "In our work on PentaHydra Core Engineering, this inverted the usual build order. The first artefacts were not prompts or agent personas, but the permission model for tool execution and the record structure for what an agent did and why.",
              "An agent that cannot be audited is not an engineering asset. It is an opinion with a network connection.",
            ],
          },
          {
            type: "prose",
            label: "IMPLICATION",
            heading: "Skills are the unit of engineering reuse.",
            paragraphs: [
              "Engineering organisations do not actually reuse conversations. They reuse procedures: how a monitoring dataset is validated, how a geospatial layer is reprojected, how a risk classification is derived.",
              "A registry of versioned skills with declared inputs, outputs and validation criteria is therefore more valuable than a library of agent personalities. It is the difference between institutional capability and institutional improvisation.",
            ],
          },
        ],
      },
      {
        slug: "validation-is-the-product",
        title: "Validation is the product",
        category: "AI Governance",
        abstract:
          "In technical environments, the value of an AI system is set by how much of its output a qualified engineer is willing to sign.",
        blocks: [
          {
            type: "prose",
            label: "ARGUMENT",
            heading: "Accuracy is not the metric that matters.",
            paragraphs: [
              "Benchmark accuracy describes average behaviour on a test distribution. Engineering decisions are made at the edges: the anomalous sensor reading, the document with an unusual structure, the site condition that does not match the reference case.",
              "A system that is right most of the time and confidently wrong at the edge transfers risk to the engineer who signs the report.",
            ],
          },
          {
            type: "prose",
            label: "PRACTICE",
            heading: "What validation looks like in practice.",
            paragraphs: [
              "Validation means predefined test sets drawn from real technical material, explicit acceptance criteria, and a protocol for refusal. A system that says it cannot determine an answer is more useful than one that invents one.",
              "It also means measuring reliability across runs, not quality in a single demonstration.",
            ],
          },
          {
            type: "prose",
            label: "GOVERNANCE",
            heading: "Accountability has to be assigned, not implied.",
            paragraphs: [
              "Every automated output that influences a technical decision needs an owner. Logging is necessary but insufficient: the record must connect the recommendation, the tools used, the sources consulted and the human who accepted it.",
              "That chain is what allows an organisation to answer a regulator, a client or an auditor years later.",
            ],
          },
        ],
      },
      {
        slug: "from-sensor-to-indicator",
        title: "From sensor to indicator: the data problem behind environmental intelligence",
        category: "Environmental Intelligence",
        abstract:
          "Environmental programmes rarely fail for lack of data. They fail because the path from measurement to defensible indicator is undocumented.",
        blocks: [
          {
            type: "prose",
            label: "DIAGNOSIS",
            heading: "Measurement is not evidence.",
            paragraphs: [
              "A sensor produces a number. An indicator is a number with a method, a baseline, a validity condition and a stated uncertainty. Most environmental reporting collapses the two, and the result cannot be defended when questioned.",
              "The gap widens with heterogeneous sources: field campaigns, laboratory results, remote sensing, and operational telemetry each carry different error structures.",
            ],
          },
          {
            type: "prose",
            label: "METHOD",
            heading: "Design the indicator before the dashboard.",
            paragraphs: [
              "Our approach defines indicators from the compliance or management question backwards: what decision will this number inform, what precision does that decision require, and what happens when data is missing.",
              "Only then is the data architecture specified. Dashboards are a rendering of that logic, not a substitute for it.",
            ],
          },
          {
            type: "prose",
            label: "QUALITY",
            heading: "Missing data is information.",
            paragraphs: [
              "Gaps, drift and laboratory deviations are technical facts that belong in the record. Systems that silently interpolate them produce confident outputs with unstated assumptions.",
              "Preserving absence as a first-class state is a design decision with direct regulatory consequences.",
            ],
          },
        ],
      },
      {
        slug: "digital-twins-without-theatre",
        title: "Digital twins without theatre",
        category: "Simulation",
        abstract:
          "A model that cannot state its assumptions is a visualisation. A digital twin earns its name only when it can be interrogated.",
        blocks: [
          {
            type: "prose",
            label: "DEFINITION",
            heading: "What makes a twin a twin.",
            paragraphs: [
              "The distinguishing property of a digital twin is not visual fidelity. It is the maintained relationship between the model and the physical asset: parameters updated from measurement, assumptions declared, and divergence tracked.",
              "Without that relationship, the artefact is a 3D illustration with a technical name.",
            ],
          },
          {
            type: "prose",
            label: "APPLICATION",
            heading: "Where twins actually change decisions.",
            paragraphs: [
              "In industrial and infrastructure contexts, twins are useful for scenario testing that would be unsafe, expensive or slow in reality: load variations, failure sequences, operational changes, environmental scenarios.",
              "Their value is bounded by the quality of the underlying engineering model, not by the rendering engine.",
            ],
          },
          {
            type: "prose",
            label: "DISCIPLINE",
            heading: "Declare the uncertainty or lose the argument.",
            paragraphs: [
              "A simulation result delivered without sensitivity analysis invites overconfidence. Stating which parameters dominate, and how far the conclusion can be pushed before it breaks, is what makes a model usable in a technical dispute.",
            ],
          },
        ],
      },
    ],
  },
};

export default insights;