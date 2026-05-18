export const FORMS = {
  t1: {
    badge: "T1 | Identity Launchpad",
    sections: [
      {
        tag: "Sect.01 | Site Preparation",
        title: "CORE BRAND\nDNA",
        subtitle:
          "This section is about defining the absolute fundamentals of your business — what it is, why it exists, and where it is going. Before any design work begins, these answers give us the strategic clarity to build something that actually means something.",
        questions: [
          {
            id: "t1_s1_q1",
            num: "1.1",
            label: "The One-Sentence Filter",
            directive:
              "In exactly one sentence, state what your business does. No adjectives or conjunctions. If it takes more than one sentence, that is the first problem we need to solve together.",
            type: "textarea",
            rows: 2,
            placeholder: "Your business, concentrated.",
          },
          {
            id: "t1_s1_q2",
            num: "1.2",
            label: "The Origin Mandate",
            directive:
              "Why did you actually start this? Not the polished pitch — the honest reason. What frustrated you enough to build this instead of something else? Your honest vision feeds directly into your brand story.",
            type: "textarea",
            rows: 4,
            placeholder: "The honest origin.",
          },
          {
            id: "t1_s1_q3",
            num: "1.3",
            label: "The Mission Statement",
            directive:
              'Complete this phrase: "We exist to ____________ so that ____________." This becomes the internal compass for every creative and strategic decision. Keep it as short as possible.',
            type: "textarea",
            rows: 1,
            placeholder: "We exist to...",
          },
          {
            id: "t1_s1_q3_b",
            num: "",
            label: "",
            type: "textarea",
            rows: 1,
            placeholder: "...so that",
          },
          {
            id: "t1_s1_q4",
            num: "1.4",
            label: "The Timeless Architecture Plan",
            directive:
              "Where is this business specifically headed? Not vague ambition — concrete targets. New markets, new services, new territories. This prevents us from building a brand that you will outgrow in 18 months.",
            type: "textarea",
            rows: 4,
            placeholder: "Coordinates, not aspirations.",
          },
          {
            id: "t1_s1_q5",
            num: "1.5",
            label: "The 3 Non-Negotiable Pillars",
            directive:
              "Name 3 principles you would never compromise, even under financial pressure. These are not aspirational values — they are the actual rules you operate by. They shape your brand personality and positioning.",
            type: "textarea",
            rows: 1,
            placeholder: "e.g. Precision",
          },
          {
            id: "t1_s1_q5_b",
            num: "",
            label: "",
            type: "textarea",
            rows: 1,
            placeholder: "/ Radical Transparency",
          },
          {
            id: "t1_s1_q5_c",
            num: "",
            label: "",
            type: "textarea",
            rows: 1,
            placeholder: "/ Premium or Nothing",
          },
          {
            id: "t1_s1_q6",
            num: "1.6",
            label: "The Authority Positioning",
            directive:
              "What gives you the right to charge what you charge? What experience, methodology or proof separates your offer from a cheaper alternative?",
            type: "textarea",
            rows: 3,
            placeholder: "Your right to be here.",
          },
        ],
      },
      {
        tag: "Sect.02 | Foundation Laying",
        title: "AUDIENCE\nINTELLIGENCE",
        subtitle:
          "A brand that tries to speak to everyone speaks to no one. This section defines exactly who this brand is being built for — and equally importantly, who it is designed to push away.",
        questions: [
          {
            id: "t1_s2_q1",
            num: "2.1",
            label: "The 'Ideal' Client Profile",
            directive:
              "Describe the single ideal person you would want to work with. Their role, their industry, their income level, their core frustration. The more specific you are here, the more precisely the brand can speak to them.",
            type: "textarea",
            rows: 4,
            placeholder: "Make them specific.",
          },
          {
            id: "t1_s2_q2",
            num: "2.2",
            label: "The Psychological Trigger",
            directive:
              "What is the emotional problem your ideal client is carrying? Not a business metric — a real human concern. This is what the brand voice will connect with at a deeper level than features and pricing.",
            type: "textarea",
            rows: 3,
            placeholder: "The 2 AM thought.",
          },
          {
            id: "t1_s2_q3",
            num: "2.3",
            label: "The Transformation Contract — BEFORE & AFTER",
            directive:
              "What is the client's life or business like before working with you, and what does it look like after? Define both states clearly. This becomes the core of how your brand communicates its value.",
            type: "textarea",
            rows: 2,
            placeholder: "Their world before you.",
          },
          {
            id: "t1_s2_q3_b",
            num: "",
            label: "",
            type: "textarea",
            rows: 2,
            placeholder: "Thier world after you.",
          },

          {
            id: "t1_s2_q5",
            num: "2.4",
            label: "The Anti-Client Directive",
            directive:
              "Now swap it around. Describe the worst possible client for you? Describe the type of engagement that costs you more energy than it returns. A strong brand actively repels the wrong fit — by price point, mindset or expectation.",
            type: "textarea",
            rows: 3,
            placeholder: "Whose emails will be going in the spam folder.",
          },
          {
            id: "t1_s2_q6",
            num: "2.5",
            label: "The Decision Maker",
            directive:
              "Who signs off on working with you? A solo founder decides differently from a team. This changes how the brand communicates authority and what trust signals it leads with.",
            type: "textarea",
            rows: 2,
            placeholder: "Who holds the signatory pen.",
          },
        ],
      },
      {
        tag: "Sect.03 | Structural Framing",
        title: "MARKET\nPOSITION",
        subtitle:
          "This section maps the competitive landscape. The goal is not to copy what competitors do — it is to find the gap they have left open and build your brand specifically to occupy that ground.",
        questions: [
          {
            id: "t1_s3_q1",
            num: "3.1",
            label: "The Competitor Audit",
            directive:
              "Name 3 direct competitors. For each one: what do they do well, where do they fall short, and what emotional gap do they leave in the market? Understanding the field tells us where the open territory is.",
            type: "textarea",
            rows: 3,
            placeholder: "Name / Strength / Gap / Opportunity",
          },
          {
            id: "t1_s3_q1_b",
            num: "",
            label: "",
            type: "textarea",
            rows: 3,
            placeholder: "Name / Strength / Gap / Opportunity",
          },
          {
            id: "t1_s3_q1_c",
            num: "",
            label: "",
            type: "textarea",
            rows: 3,
            placeholder: "Name / Strength / Gap / Opportunity",
          },
          {
            id: "t1_s3_q5",
            num: "3.2",
            label: "Admired Authority Brands",
            directive:
              "Name 3 brands outside your industry that you admire. For each, explain specifically what it is about their identity — visual, verbal or philosophical — that resonates. This gives us aesthetic and authority intelligence without direct imitation.",
            type: "textarea",
            rows: 1,
            placeholder: "Brand / Why it resonates",
          },
          {
            id: "t1_s3_q5_b",
            type: "textarea",
            rows: 1,
            placeholder: "Brand / Why it resonates",
          },
          {
            id: "t1_s3_q5_c",
            type: "textarea",
            rows: 1,
            placeholder: "Brand / Why it resonates",
          },
          {
            id: "t1_s3_q6",
            num: "3.3",
            label: "The Position Signal",
            directive:
              "Where are you priced now, and where do you intend to sit after this brand is deployed? The visual and verbal identity is engineered to support your target market position — this shapes the build.",
            type: "textarea",
            rows: 3,
            placeholder: "Currently mid-market due to team size.",
          },
          {
            id: "t1_s3_q6_b",
            num: "",
            type: "textarea",
            rows: 3,
            placeholder:
              "Post-brand target: Higher end clientele with quality team.",
          },
        ],
      },
      {
        tag: "Sect.04 | Systems Installation",
        title: "THE VISUAL\nFRAMEWORK",
        subtitle:
          "This section translates your strategic intent into a visual brief. Before we choose a single colour or typeface, we establish the personality, tone and aesthetic direction the brand needs to embody.",
        questions: [
          {
            id: "t1_s4_q1",
            num: "4.1",
            label: "The Human Analogy",
            directive:
              "If your brand were a person, who are they? What do they do, what do they drive, what do they wear to an important meeting? This is not a trivial exercise — it reveals the personality architecture that informs every visual decision.",
            type: "textarea",
            rows: 4,
            placeholder: "Build the character.",
          },
          {
            id: "t1_s4_q2",
            num: "4.2",
            label: "Brand Personality Spectrum",
            directive:
              "Select your position on each axis. Do not default to the middle — indecision produces a diluted brand.",
            type: "scales",
            scales: [
              {
                left: "TRADITIONAL",
                right: "MODERN",
              },
              {
                left: "PLAYFUL",
                right: "SERIOUS",
              },
              {
                left: "APPROACHABLE",
                right: "EXCLUSIVE",
              },
              {
                left: "UNDERSTATED",
                right: "BOLD",
              },
              {
                left: "GENERALIST",
                right: "SPECIALIST",
              },
            ],
          },
          {
            id: "t1_s4_q4",
            num: "4.3",
            label: "The Absolute Exclusions",
            directive:
              "What colours, typeface styles, aesthetics, symbols or design languages must NEVER appear in your brand? If you have existing brand assets answer N/A in the input box.",
            type: "textarea",
            rows: 3,
            placeholder: "e.g. No serif typefaces. No blue. No stock imagery.",
          },
          {
            id: "t1_s4_q5",
            num: "4.4",
            label: "Colour Intelligence",
            directive:
              "Are there any colours with strategic meaning for your brand? (An existing colour you need retained, a cultural association your audience holds, or a competitor colour you want to deliberately avoid?)",
            type: "textarea",
            rows: 2,
            placeholder: "Strategic colour context.",
          },
        ],
      },
      {
        tag: "Sect.05 | External & Internal Finishing",
        title: "TONE AND\nLANGUAGE",
        subtitle:
          "How a brand speaks is as important as how it looks. This section establishes the verbal register — the tone, vocabulary, and language style that will represent your business across every touchpoint.",
        questions: [
          {
            id: "t1_s5_q1",
            num: "5.1",
            label: "Brand Voice Descriptors",
            directive:
              "Choose 3 adjectives that describe how your brand should sound. Not what it looks like — how it speaks. Examples: Direct, Authoritative, Measured. These govern all written outputs.",
            type: "textarea",
            rows: 1,
            placeholder: "e.g. Direct ",
          },
          {
            id: "t1_s5_q1_b",
            type: "textarea",
            rows: 1,
            placeholder: "/ Authoritative",
          },
          {
            id: "t1_s5_q1_c",
            type: "textarea",
            rows: 1,
            placeholder: "/ Intelligent",
          },
          {
            id: "t1_s5_q2",
            num: "5.2",
            label: "The Communication Register",
            directive:
              "Find one example of brand copy or a tagline — from any brand — that achieves the tone you want. Explain what specifically about the language resonates.",
            type: "textarea",
            rows: 3,
            placeholder: "Reference copy + why it works.",
          },
          {
            id: "t1_s5_q3",
            num: "5.3",
            label: "The Non-Negotiable Tone Exclusions",
            directive:
              "What tones or language styles must never represent your brand? Be explicit.",
            type: "textarea",
            rows: 3,
            placeholder:
              "e.g. Never self-deprecating. No corporate buzzwords. Never sounds like we are trying too hard.",
          },
          {
            id: "t1_s5_q4",
            num: "5.4",
            label: "Your Email Address",
            directive:
              "Where should a JUDAION agent sent confirmation for next steps?",
            type: "email",
            placeholder: "your@email.com",
          },
          {
            id: "t1_s5_q5",
            num: "5.5",
            label: "Your Full Name",
            directive: "For our records and correspondence.",
            type: "text",
            placeholder: "Full name",
          },
        ],
      },
    ],
  },

  t2: {
    badge: "T2 | Digital Authority",
    sections: [
      {
        tag: "Sect.01 | The Curb Appeal",
        title: "VISUAL IDENTITY &\nFIRST IMPRESSION",
        subtitle:
          "The immediate emotional response when someone arrives at the digital property — the aesthetic, the materials, and the signage that defines the exterior before a single word is read.",
        scopeNote:
          '<strong><span class="scope-warning">NOTE: Our standard site structure is Home / Methodology / Services / About / Contact. You may propose an alternative layout in Section 03 — maximum 5 pages. If the Digital Deployment Add-On was selected in your SLA, complete Section 04 in full.</span>',
        questions: [
          {
            id: "t2_s1_q1",
            num: "1.1",
            label: "The First Impression",
            directive:
              "What is the very first thing a visitor should FEEL when they land on your site? Before they read a word — what emotional response should the visual environment trigger?",
            type: "textarea",
            rows: 3,
            placeholder:
              "e.g. Immediate confidence that this is a premium operator. A sense of calm authority. This is not like anything else in the market.",
          },
          {
            id: "t2_s1_q2",
            num: "1.2",
            label: "Visual Reference Sites",
            directive:
              "Provide 3 websites — from any industry — that represent the visual standard and aesthetic direction you want this site to achieve. For each, note what specifically resonates: layout density, typography scale, colour restraint, or overall feeling. Only sites you would be proud to be compared to.",
            type: "textarea",
            rows: 1,
            placeholder: "URL / What specifically resonates",
          },
          {
            id: "t2_s1_q2_b",
            type: "textarea",
            rows: 1,
            placeholder: "URL / What specifically resonates",
          },
          {
            id: "t2_s1_q2_c",
            type: "textarea",
            rows: 1,
            placeholder: "URL / What specifically resonates",
          },
          {
            id: "t2_s1_q3",
            num: "1.3",
            label: "Layout Disposition",
            directive:
              "Select your position on each axis. These govern layout architecture, whitespace, and visual weight decisions across the entire site.",
            type: "scales",
            scales: [
              {
                left: "DENSE / CONTENT-RICH",
                right: "MINIMAL / SPACIOUS",
              },
              {
                left: "STATIC / EDITORIAL",
                right: "DYNAMIC / INTERACTIVE",
              },
              {
                left: "IMAGE-DRIVEN",
                right: "TYPE-DRIVEN",
              },
              {
                left: "DARK PALETTE",
                right: "LIGHT PALETTE",
              },
            ],
          },
          {
            id: "t2_s1_q4",
            num: "1.4",
            label: "Absolute Visual Exclusions",
            directive:
              "What visual approaches, aesthetics or design trends must NEVER appear on this website? Be specific — vague answers produce vague exclusions.",
            type: "textarea",
            rows: 3,
            placeholder:
              "e.g. No parallax scrolling. No stock photography of generic business people. No gradient backgrounds. Nothing that looks like a template.",
          },
          {
            id: "t2_s1_q5",
            num: "1.5",
            label: "Brand Asset Status",
            directive:
              "Confirm your brand asset readiness. Low-resolution or incomplete assets will delay delivery.",
            type: "yesno",
            items: [
              "Tier 1 Identity Launchpad completed with JUDAION Studios",
              "Logo files available in vector format (.ai / .eps / .svg)",
              "Brand Style Guide or usage documentation available",
              "Existing brand assets available in production-ready format",
            ],
          },
          {
            id: "t2_s1_q5_notes",
            num: "",
            label: "Asset Notes & Constraints",
            directive:
              "Note anything relevant — unavailable files, limitations, or context that may affect how brand marks are deployed on the site.",
            type: "textarea",
            rows: 2,
            placeholder: "Asset constraints or context.",
          },
        ],
      },

      {
        tag: "Sect.02 | The Threshold",
        title: "USER JOURNEY &\nNAVIGATION",
        subtitle:
          "Where the visitor decides to step inside. This covers the ease of entry, the primary message that greets them at the door, and the key value propositions they need before they walk in.",
        questions: [
          {
            id: "t2_s2_q1",
            num: "2.1",
            label: "The Hero Statement",
            directive:
              "What headline and subheading will appear in the hero section of the Home page? If you do not have copy yet, describe in plain language what you want a visitor to FEEL and UNDERSTAND within the first 5 seconds. Copy will be structured from that intelligence.",
            type: "textarea",
            rows: 4,
            placeholder:
              "Proposed H1 headline / Supporting subheading — or describe the intended feeling and message.",
          },
          {
            id: "t2_s2_q2",
            num: "2.2",
            label: "The Home Page Proof Element",
            directive:
              "What single piece of evidence will appear immediately to establish authority? Provide the exact content or data.",
            type: "textarea",
            rows: 2,
            placeholder:
              "e.g. Featured client logo strip / Key statistic / Award / Headline case study result",
          },
          {
            id: "t2_s2_q3",
            num: "2.3",
            label: "The Visitor's Primary Objection",
            directive:
              "Before they contact you, what is the single biggest hesitation your ideal visitor carries? What makes them close the tab instead of sending the inquiry? The site architecture is built to neutralise this — so name it precisely.",
            type: "textarea",
            rows: 3,
            placeholder:
              "e.g. They don't believe we can deliver at this price point. The site doesn't feel premium enough to justify the fee.",
          },
          {
            id: "t2_s2_q4",
            num: "2.4",
            label: "Primary Conversion Goal",
            directive:
              "What is the single most important action you want a visitor to take? One action only — this becomes the primary CTA the entire site is engineered around.",
            type: "textarea",
            rows: 2,
            placeholder:
              "e.g. Book a discovery call. Submit a project brief. Send a WhatsApp inquiry.",
          },
          {
            id: "t2_s2_q5",
            num: "2.5",
            label: "Secondary Conversion Goal",
            directive:
              "If the visitor is not ready to act yet, what is the next best step? This becomes the secondary CTA woven throughout the site — a lower-commitment way to stay connected.",
            type: "textarea",
            rows: 2,
            placeholder:
              "e.g. Follow on LinkedIn. Download a capability deck. Subscribe to newsletter.",
          },
        ],
      },

      {
        tag: "Sect.03 | The Interior Flow",
        title: "CONTENT STRATEGY\n& LAYOUT",
        subtitle:
          "Once inside, the visitor needs to move through the space logically. This section defines the floor plan — the purpose of each room, the furniture it needs, and where the brand's personality should shine through most clearly.",
        questions: [
          {
            id: "t2_s3_q0",
            num: "3.0",
            label: "Your Site Architecture",
            directive:
              "Our standard 5-page structure is: Home / Methodology / Services / About / Contact. This is a proven conversion framework — but if your business requires a different layout, tell us here. Maximum 5 pages. If the standard structure works for you, write 'Standard' and move on.",
            type: "textarea",
            rows: 3,
            placeholder:
              "Standard — OR — list your 5 pages: Page 1 name / Page 2 name / Page 3 name / Page 4 name / Page 5 name",
          },
          {
            id: "t2_s3_q1",
            num: "3.1",
            label: "Page Tracker — Purpose & Copy Status",
            directive:
              "For each of your 5 pages (use the structure confirmed in 3.0), define its primary purpose and confirm copy status: Final (written and approved), Draft (exists but needs refinement), or None (will be structured from your inputs and Tier 1 Blueprint).",
            type: "textarea",
            rows: 1,
            placeholder: "Page 1 — Purpose: / Copy: Final / Draft / None",
          },
          {
            id: "t2_s3_q1_2",
            type: "textarea",
            rows: 1,
            placeholder: "Page 2 — Purpose: / Copy: Final / Draft / None",
          },
          {
            id: "t2_s3_q1_3",
            type: "textarea",
            rows: 1,
            placeholder: "Page 3 — Purpose: / Copy: Final / Draft / None",
          },
          {
            id: "t2_s3_q1_4",
            type: "textarea",
            rows: 1,
            placeholder: "Page 4 — Purpose: / Copy: Final / Draft / None",
          },
          {
            id: "t2_s3_q1_5",
            type: "textarea",
            rows: 1,
            placeholder: "Page 5 — Purpose: / Copy: Final / Draft / None",
          },
          {
            id: "t2_s3_q2_gate",
            num: "3.2",
            label:
              "Does Your Site Include a Dedicated Process or Methodology Page?",
            directive:
              "One of the most powerful pages a service business can have is a page dedicated entirely to HOW you work — not what you offer, but the method behind it. This may be named Methodology, Process, Our Approach, How We Work, or something entirely your own. Does your site structure include a page like this?",
            type: "yesno",
            items: [
              "Yes — my site includes a dedicated page for my process or methodology",
              "No — I do not have a process page in my structure",
              "Unsure — I would like JUDAION to recommend based on my structure",
            ],
          },
          {
            id: "t2_s3_q2",
            num: "3.2",
            label: "Your Process Architecture",
            directive:
              "If yes above — name each stage of your delivery process and describe what happens in it. Minimum 3 stages, maximum 6. This is HOW you work, not a list of services. Skip this question entirely if you answered No or Unsure above.",
            type: "stages",
            gateId: "t2_s3_q2_gate",
            minStages: 3,
            maxStages: 6,
            stages: [
              {
                id: "t2_s3_q2_stage1",
                num: "Stage 01",
                namePlaceholder: "e.g. Extraction",
                descPlaceholder:
                  "e.g. We interrogate the raw intelligence of your business before a single creative decision is made.",
                required: true,
              },
              {
                id: "t2_s3_q2_stage2",
                num: "Stage 02",
                namePlaceholder: "e.g. Blueprint",
                descPlaceholder:
                  "e.g. Strategic architecture is defined — positioning, audience, and visual direction are locked.",
                required: true,
              },
              {
                id: "t2_s3_q2_stage3",
                num: "Stage 03",
                namePlaceholder: "e.g. Build",
                descPlaceholder:
                  "e.g. Design and development begins against the approved blueprint.",
                required: true,
              },
              {
                id: "t2_s3_q2_stage4",
                num: "Stage 04",
                namePlaceholder: "Optional",
                descPlaceholder:
                  "Add a stage if your process has a distinct fourth phase.",
                required: false,
              },
              {
                id: "t2_s3_q2_stage5",
                num: "Stage 05",
                namePlaceholder: "Optional",
                descPlaceholder:
                  "Add a stage if your process has a distinct fifth phase.",
                required: false,
              },
              {
                id: "t2_s3_q2_stage6",
                num: "Stage 06",
                namePlaceholder: "Optional",
                descPlaceholder:
                  "Add a stage if your process has a distinct sixth phase.",
                required: false,
              },
            ],
          },
          {
            id: "t2_s3_q3",
            num: "3.3",
            label: "Service Offerings",
            directive:
              "List every service appearing on the Services page. For each: (a) the exact public-facing name, (b) a 2–3 sentence description in client-outcome language, (c) whether pricing will be displayed publicly.",
            type: "textarea",
            rows: 1,
            placeholder:
              "a. Service name",
          },
                    {
            id: "t2_s3_q3_b",
            type: "textarea",
            rows: 2,
            placeholder:
              "b. a 2–3 sentence description in client-outcome language",
          },
                              {
            id: "t2_s3_q3_c",
            type: "textarea",
            rows: 1,
            placeholder:
              "c. Whether pricing will be displayed publicly",
          },
          
          {
            id: "t2_s3_q4",
            num: "3.4",
            label: "Founder / Studio Story",
            directive:
              "The narrative for the About page. Not a CV — a position statement. Why does this business exist and what gives you the authority to do what you do? Indicate first or third person preference. If you need this drafted, note it here — the Tier 1 Blueprint will be used as source intelligence.",
            type: "textarea",
            rows: 5,
            placeholder:
              "Your position statement — or note 'Draft from Tier 1 Blueprint'.",
          },
          {
            id: "t2_s3_q5",
            num: "3.5",
            label: "Photography & Visual Asset Inventory",
            directive:
              "Confirm what visual assets currently exist. A premium website built on low-resolution or unavailable imagery is a structural failure — gaps declared here will be designed around.",
            type: "yesno",
            items: [
              "Professional photography of team / founder",
              "Professional photography of workspace or studio environment",
              "High-resolution project work samples or case study imagery",
              "Client-approved project photography or screenshots",
            ],
          },
          {
            id: "t2_s3_q5_notes",
            num: "",
            label: "Photography Notes & Constraints",
            directive:
              "Note any limitations, gaps, or context on your available imagery.",
            type: "textarea",
            rows: 2,
            placeholder: "Photography constraints or context.",
          },
          {
            id: "t2_s3_q6",
            num: "3.6",
            label: "Where Should the Brand Voice Shine?",
            directive:
              "Which page or section should most clearly express your brand's personality and tone — where the writing feels most distinctly YOU rather than purely functional?",
            type: "textarea",
            rows: 2,
            placeholder:
              "e.g. The About page should feel most personal. The Methodology page should carry the most authority.",
          },
        ],
      },

      {
        tag: "Sect.04 | The Locks & Security",
        title: "TECHNICAL\nINFRASTRUCTURE",
        subtitle:
          "A front door is only functional if it is secure and well-installed. This section covers the hardware of the site — domain, hosting, compliance, integrations, and the technical foundation the build sits on.",
        scopeNote:
          "<strong>DEPLOYMENT ADD-ON:</strong> Your selection of the Digital Deployment Add-On (R4,500) was confirmed in your signed Service Level Agreement. If you selected the add-on, complete all fields in this section in full. If you did not select the add-on, enter N/A in each field — your deliverable is a production-ready ZIP Archive for self-managed deployment.",
        questions: [
          {
            id: "t2_s4_q1",
            num: "4.1",
            label: "Domain Name",
            directive:
              "Your domain name exactly as registered. Required for server configuration and DNS mapping.",
            type: "text",
            placeholder: "e.g. yourbusiness.co.za — or N/A",
          },
          {
            id: "t2_s4_q2",
            num: "4.2",
            label: "Hosting Provider",
            directive:
              "Current hosting provider name. JUDAION Studios will require administrative access to configure the server environment.",
            type: "text",
            placeholder: "e.g. Afrihost / Hetzner / WP Engine — or N/A",
          },
          {
            id: "t2_s4_q3",
            num: "4.3",
            label: "Hosting & Domain Access Status",
            directive:
              "Confirm administrative access availability. Without these, deployment cannot proceed.",
            type: "yesno",
            items: [
              "Active hosting account currently in place",
              "Administrative access to hosting account available",
              "Administrative access to domain registrar available",
              "SSL certificate in place or to be activated on deployment",
              "Privacy Policy page required",
              "POPI Act compliance required — client data handling declarations needed",
            ],
          },
          {
            id: "t2_s4_q4",
            num: "4.4",
            label: "Compliance Notes",
            directive:
              "Note any specific data protection, privacy or legal compliance requirements. Flag anything uncertain for review.",
            type: "textarea",
            rows: 2,
            placeholder: "Compliance context or requirements — or N/A",
          },
          {
            id: "t2_s4_q5",
            num: "4.5",
            label: "Target Search Terms",
            directive:
              "List 5–10 search terms your ideal client would type into Google to find a business like yours. Use the language your clients actually use — not internal industry terms. These become the on-page SEO foundation built into every page regardless of deployment method.",
            type: "textarea",
            rows: 4,
            placeholder:
              "e.g. brand identity design Johannesburg\npremium logo design South Africa\nbranding agency for startups",
          },
          {
            id: "t2_s4_q6_notes",
            num: "4.6",
            label: "Self-Deploy Technical Capacity",
            directive:
              "If you did NOT select the Deployment Add-On — confirm who will be handling deployment on your side. Name and role of the developer or technical contact responsible for taking the ZIP Archive live.",
            type: "textarea",
            rows: 2,
            placeholder: "Developer name / Role — or N/A if add-on selected",
          },
        ],
      },

      {
        tag: "Sect.05 | The Invitation",
        title: "THE CALL\nTO ACTION",
        subtitle:
          "The final part of the front door experience — the reason the visitor came over in the first place. This section defines the handshake, the RSVP mechanism, and the final authority statement that closes the brief.",
        questions: [
          {
            id: "t2_s5_q1",
            num: "5.1",
            label: "The Business Problem This Website Must Solve",
            directive:
              "What is the specific commercial problem your current online presence is failing to address? This is the reason the build exists — be direct.",
            type: "textarea",
            rows: 3,
            placeholder:
              "e.g. We lose credibility when prospects Google us. We cannot send a link that justifies our pricing. We attract the wrong type of inquiry.",
          },
          {
            id: "t2_s5_q2",
            num: "5.2",
            label: "Contact Form Fields",
            directive:
              "What information must the contact form capture before you can qualify an inquiry? List only the fields you genuinely need — every unnecessary field reduces form completion.",
            type: "textarea",
            rows: 3,
            placeholder:
              "e.g. Name / Company / Email / Budget Range / Project Description / How did you hear about us?",
          },
          {
            id: "t2_s5_q3",
            num: "5.3",
            label: "Contact Page Supporting Details",
            directive:
              "Provide all details for the Contact page: primary business email, phone number (if to be displayed), WhatsApp link, business hours or response time promise, and social media handles to be linked.",
            type: "textarea",
            rows: 3,
            placeholder:
              "Email / Phone / WhatsApp / Business hours / Social handles",
          },
          {
            id: "t2_s5_q4",
            num: "5.4",
            label: "Final Authority Statement",
            directive:
              "What is the single most important thing you want a prospect to believe about your business by the time they reach the contact page? This becomes the closing statement that reinforces your position before they send the inquiry.",
            type: "textarea",
            rows: 3,
            placeholder:
              "The belief that must be established before they hit send.",
          },
          {
            id: "t2_s5_q5",
            num: "5.5",
            label: "Approval & Sign-Off Process",
            directive:
              "Who is the final decision-maker for approvals on this project? If multiple stakeholders are involved in sign-off, list each by name and role. Undefined approval chains are the primary cause of project delays.",
            type: "textarea",
            rows: 2,
            placeholder: "Name / Role",
          },
          {
            id: "t2_s5_q6",
            num: "",
            label: "Your Email Address",
            directive:
              "Where should your completed brief be sent for confirmation?",
            type: "email",
            placeholder: "your@email.com",
          },
          {
            id: "t2_s5_q7",
            num: "",
            label: "Your Full Name",
            directive: "For our records and correspondence.",
            type: "text",
            placeholder: "Full name",
          },
        ],
      },
    ],
  },

  t3: {
    badge: "Tier 3 | Scale Partner",
    sections: [
      {
        tag: "// 01 — Monthly Focus",
        title: "THE\nOBJECTIVE",
        subtitle:
          "Every month has a single strategic north star. Define it here — this governs every creative decision in this cycle.",
        scopeNote:
          "<strong>Monthly scope reminder:</strong> 12 strategic visual assets (3/week) // Up to 1 ad creative per active campaign // Monthly Performance Sync // Proactive website maintenance.<br><br><strong>At 6-month intervals:</strong> Brand collateral updates — only if required. Declare in Section 04.",
        questions: [
          {
            id: "t3_s1_meta1",
            num: "",
            label: "Billing Month",
            directive: "The month this brief covers.",
            type: "text",
            placeholder: "e.g. July 2025",
          },
          {
            id: "t3_s1_meta2",
            num: "",
            label: "Retainer Cycle Number",
            directive: "Which month of your retainer is this?",
            type: "text",
            placeholder: "e.g. Month 03",
          },
          {
            id: "t3_s1_q1",
            num: "1.1",
            label: "This Month's Business Priority",
            directive:
              "The single most important commercial objective for your business this month. Not a content goal — a business goal.",
            type: "textarea",
            rows: 2,
            placeholder:
              "e.g. Close 3 new Tier 1 clients / Launch the new service category",
          },
          {
            id: "t3_s1_q2",
            num: "1.2",
            label: "The Core Message",
            directive:
              "In one sentence — what is the primary message your audience must receive from your content this month?",
            type: "textarea",
            rows: 2,
            placeholder: "The through-line of this cycle.",
          },
          {
            id: "t3_s1_q3",
            num: "1.3",
            label: "Key Dates This Cycle",
            directive:
              "Any dates that are strategically significant — launches, industry events, campaigns, press features or milestones.",
            type: "textarea",
            rows: 3,
            placeholder: "Date / Event / Significance",
          },
          {
            id: "t3_s1_q4",
            num: "1.4",
            label: "Audience Focus This Month",
            directive:
              "Specific audience segment or industry vertical to target with intensity. If no shift from last month — state that explicitly.",
            type: "textarea",
            rows: 2,
            placeholder:
              "e.g. Targeting legal sector founders / Same audience as last cycle",
          },
        ],
      },
      {
        tag: "// 02 — Visual Content Plan",
        title: "THE\n12 ASSETS",
        subtitle:
          "Your monthly suite — 3 on-brand visual assets per week, sequenced to build authority and drive the month's primary objective.",
        questions: [
          {
            id: "t3_s2_assets",
            num: "2.0",
            label: "Monthly Asset Tracker",
            directive:
              "Provide directional intelligence per slot: topic, format type, platform or key message. Leave blank where you want JUDAION to apply strategic discretion. FORMAT REFERENCE: Carousel // Single Static // Quote Graphic // Case Study Tile // Authority Statement // Process Visual // Testimonial Graphic // Announcement",
            type: "assettracker",
          },
          {
            id: "t3_s2_q1",
            num: "2.1",
            label: "Platform Priority This Month",
            directive:
              "Which platform takes creative priority — LinkedIn or Instagram? If equal, state that.",
            type: "textarea",
            rows: 2,
            placeholder: "LinkedIn / Instagram / Equal — with any format notes",
          },
          {
            id: "t3_s2_q2",
            num: "2.2",
            label: "Brand Voice Direction",
            directive:
              "Any shift in tone this month? Only flag genuine strategic shifts — consistency is a brand asset.",
            type: "textarea",
            rows: 2,
            placeholder: "e.g. More assertive / No change from last month",
          },
          {
            id: "t3_s2_q3",
            num: "2.3",
            label: "Content to Avoid This Cycle",
            directive:
              "Topics, formats or creative directions that must NOT appear this month.",
            type: "textarea",
            rows: 2,
            placeholder:
              "e.g. Avoid pricing content until new rate card is confirmed",
          },
        ],
      },
      {
        tag: "// 03 — Paid Campaign Creative",
        title: "THE\nAD CREATIVE",
        subtitle:
          "Conversion-optimised creative for any active paid campaigns this cycle. One asset per campaign included in base scope.",
        questions: [
          {
            id: "t3_s3_active",
            num: "3.1",
            label: "Active Campaigns This Month",
            directive:
              "Do you have paid advertising campaigns running this month that require dedicated conversion creative?",
            type: "yesno",
            items: ["Paid campaigns active this month requiring ad creative"],
          },
          {
            id: "t3_s3_q1",
            num: "3.2",
            label: "Campaign 01",
            directive:
              "Campaign name, platform/placement, and primary objective or offer.",
            type: "textarea",
            rows: 2,
            placeholder: "Campaign name / Platform / Objective & offer",
          },
          {
            id: "t3_s3_q2",
            num: "3.2",
            label: "Campaign 02 (if applicable)",
            directive:
              "Second campaign details, if running more than one simultaneously.",
            type: "textarea",
            rows: 2,
            placeholder: "Campaign name / Platform / Objective & offer",
          },
          {
            id: "t3_s3_q3",
            num: "3.3",
            label: "Ad Creative Direction",
            directive:
              "For each campaign — what is the single action the ad must drive? What is the hook, the offer, and the destination URL?",
            type: "textarea",
            rows: 4,
            placeholder: "Precise creative direction per campaign.",
          },
        ],
      },
      {
        tag: "// 04 — Brand Collateral",
        title: "THE\nCOLLATERAL",
        subtitle:
          "Reviewed and updated at 6-month intervals. Only complete if you are in an update window or an urgent change is required.",
        questions: [
          {
            id: "t3_s4_yn",
            num: "4.1",
            label: "Collateral Update Status",
            directive: "Indicate whether updates are required this cycle.",
            type: "yesno",
            items: [
              "Brand collateral update required this cycle",
              "This is a scheduled 6-month interval update",
              "This is an urgent out-of-cycle update",
            ],
          },
          {
            id: "t3_s4_q1",
            num: "4.1",
            label: "Reason for Out-of-Cycle Update",
            directive: "If urgent and out-of-cycle, state the reason.",
            type: "textarea",
            rows: 2,
            placeholder: "Reason for urgent update.",
          },
          {
            id: "t3_s4_q2",
            num: "4.2",
            label: "Assets to Update",
            directive:
              "List each asset requiring an update, the nature of the change, and its priority (Critical / Standard).",
            type: "textarea",
            rows: 4,
            placeholder:
              "Asset name / Nature of change / Priority: Critical or Standard",
          },
          {
            id: "t3_s4_q3",
            num: "4.3",
            label: "Change Detail",
            directive:
              "Describe the specific changes required. Include updated copy, new contact details or precise instructions.",
            type: "textarea",
            rows: 4,
            placeholder: "Exact changes per asset.",
          },
        ],
      },
      {
        tag: "// 05 — Website Maintenance",
        title: "THE\nSITE",
        subtitle:
          "Monthly technical check-ups and content updates to keep your digital asset fast, secure, and commercially current.",
        questions: [
          {
            id: "t3_s5_q1",
            num: "5.1",
            label: "Content Updates Required",
            directive:
              "Website content that needs updating this month. Specify the page and describe the change.",
            type: "textarea",
            rows: 4,
            placeholder: "Page name / Change required",
          },
          {
            id: "t3_s5_yn",
            num: "5.2",
            label: "Technical Issues",
            directive:
              "Have you noticed any technical issues since last month?",
            type: "yesno",
            items: ["Technical issues observed on site this month"],
          },
          {
            id: "t3_s5_q2",
            num: "5.2",
            label: "Technical Issue Details",
            directive:
              "List every issue observed — broken links, slow load, form errors, SSL warnings, display issues.",
            type: "textarea",
            rows: 3,
            placeholder: "Issue description / Where on site",
          },
          {
            id: "t3_s5_yn2",
            num: "5.3",
            label: "New Content",
            directive: "Is there new content to publish this cycle?",
            type: "yesno",
            items: ["New content to be published to the site this cycle"],
          },
          {
            id: "t3_s5_q3",
            num: "5.3",
            label: "New Content Details",
            directive:
              "Describe the content and confirm whether it will be submitted with this brief or sent separately.",
            type: "textarea",
            rows: 2,
            placeholder: "Content description / Submission status",
          },
        ],
      },
      {
        tag: "// 06 — Performance Sync",
        title: "THE\nDEBRIEF",
        subtitle:
          "A strategic review of last month's output. Skip on Month 01. Mandatory from Month 02 onwards.",
        questions: [
          {
            id: "t3_s6_q1",
            num: "6.1",
            label: "Best Performing Asset Last Month",
            directive:
              "Which content piece performed best, and what do you attribute that performance to?",
            type: "textarea",
            rows: 2,
            placeholder: "Asset description / Why it worked",
          },
          {
            id: "t3_s6_q2",
            num: "6.1",
            label: "Lowest Performing Asset Last Month",
            directive:
              "Which content piece underperformed, and what might explain it?",
            type: "textarea",
            rows: 2,
            placeholder: "Asset description / Possible cause",
          },
          {
            id: "t3_s6_q3",
            num: "6.1",
            label: "Notable Audience Feedback",
            directive:
              "Any significant comments, reactions or direct audience feedback from last month's content.",
            type: "textarea",
            rows: 2,
            placeholder: "Feedback received.",
          },
          {
            id: "t3_s6_q4",
            num: "6.2",
            label: "Strategic Adjustments This Cycle",
            directive:
              "Based on last month — anything to do differently? If no changes, state that explicitly.",
            type: "textarea",
            rows: 3,
            placeholder: 'Adjustments or "No changes from last cycle."',
          },
          {
            id: "t3_s6_q5",
            num: "6.3",
            label: "Market Feedback",
            directive:
              "Any clients, prospects or peers who have commented on your brand presence or content quality since last month?",
            type: "textarea",
            rows: 3,
            placeholder: "Feedback from the market — positive or negative.",
          },
          {
            id: "t3_s6_q6",
            num: "",
            label: "Your Email Address",
            directive:
              "Where should your completed brief be sent for confirmation?",
            type: "email",
            placeholder: "your@email.com",
          },
          {
            id: "t3_s6_q7",
            num: "",
            label: "Your Full Name",
            directive: "For our records and correspondence.",
            type: "text",
            placeholder: "Full name",
          },
        ],
      },
    ],
  },
};
