export const FORMS = {

  t1: {
    badge: 'T1 // Identity Launchpad',
    sections: [
      {
        tag: 'Sect.01 // Core Architecture',
        title: 'THE\nARCHITECTURE',
        subtitle: "Extracting your brand's Core DNA — the irreducible truth of what you are and why you exist.",
        questions: [
          { id:'t1_s1_q1', num:'1.1', label:'The One-Sentence Filter', directive:'In exactly one sentence, state what your business does. No qualifiers, no conjunctions. If it takes more than one sentence — we have a clarity problem.', type:'textarea', rows:2, placeholder:'Your business, distilled.' },
          { id:'t1_s1_q2', num:'1.2', label:'The Origin Mandate', directive:'Why did you start this business? Not the polished narrative — the honest one. What specific problem were you so frustrated by that building this felt non-negotiable?', type:'textarea', rows:4, placeholder:'The honest origin.' },
          { id:'t1_s1_q3', num:'1.3', label:'The Mission Statement', directive:'Complete this: "We exist to ____________ so that ____________." Under 30 words. This will inform your Brand Blueprint positioning.', type:'textarea', rows:3, placeholder:'We exist to...' },
          { id:'t1_s1_q4', num:'1.4', label:'The 3-Year Architecture', directive:'What does your business look like in 2028 if we execute correctly? What markets, services, or territories will you have entered? Be specific — aspirational is insufficient.', type:'textarea', rows:4, placeholder:'Coordinates, not wishes.' },
          { id:'t1_s1_q5', num:'1.5', label:'The 3 Non-Negotiable Pillars', directive:'List 3 core values that govern every business decision. These are operational, not aspirational — what principles would you refuse to compromise under commercial pressure?', type:'textarea', rows:3, placeholder:'e.g. Precision / Radical Transparency / Premium or Nothing' },
          { id:'t1_s1_q6', num:'1.6', label:'The Authority Positioning', directive:'What gives you the right to charge what you charge? What proof of competence, experience, or methodology separates your offer from a cheaper alternative?', type:'textarea', rows:3, placeholder:'Your right to be here.' },
        ]
      },
      {
        tag: 'Sect.02 // Target Intelligence',
        title: 'THE\nTARGET',
        subtitle: 'Defining the exact human you are architecting this brand to attract — and the ones you are building it to repel.',
        questions: [
          { id:'t1_s2_q1', num:'2.1', label:'The Dream Client Profile', directive:'Describe one person — real or composite — representing your ideal client. Role, industry, income bracket, primary frustration. What are they trying to achieve that they cannot achieve without you?', type:'textarea', rows:4, placeholder:'Make them specific.' },
          { id:'t1_s2_q2', num:'2.2', label:'The Psychological Trigger', directive:'What keeps your ideal client awake at 2 AM? Not a business problem — a real, human, emotional problem. This is what your brand voice will speak to directly.', type:'textarea', rows:3, placeholder:'The 2 AM thought.' },
          { id:'t1_s2_q3', num:'2.3', label:'The Transformation Contract — BEFORE', directive:'What is their specific, measurable reality BEFORE your service?', type:'textarea', rows:2, placeholder:'Their world before you.' },
          { id:'t1_s2_q4', num:'2.3', label:'The Transformation Contract — AFTER', directive:'What is their specific, measurable reality AFTER your service is delivered?', type:'textarea', rows:2, placeholder:'Their world after you.' },
          { id:'t1_s2_q5', num:'2.4', label:'The Anti-Client Directive', directive:'Who is the worst possible client for you? Describe the engagement your new brand must actively repel — by price point, mindset, or expectation. Your brand is a filter.', type:'textarea', rows:3, placeholder:'Who should never contact you.' },
          { id:'t1_s2_q6', num:'2.5', label:'The Decision Maker', directive:'Who signs off on working with you? Solo founder, procurement team, marketing director? Understanding the decision-making unit changes how we craft your authority signals.', type:'textarea', rows:2, placeholder:'Who holds the pen.' },
        ]
      },
      {
        tag: 'Sect.03 // Market Position',
        title: 'THE\nBATTLEFIELD',
        subtitle: 'Mapping the competitive landscape — identifying where authority is absent and where your brand occupies unchallenged ground.',
        questions: [
          { id:'t1_s3_q1', num:'3.1', label:'Competitor 01', directive:'Name the competitor, what they do well, where they fail to connect, and what emotional gap they leave in the market.', type:'textarea', rows:3, placeholder:'Name / Strength / Gap / Opportunity' },
          { id:'t1_s3_q2', num:'3.1', label:'Competitor 02', directive:'Repeat the analysis for your second direct competitor.', type:'textarea', rows:3, placeholder:'Name / Strength / Gap / Opportunity' },
          { id:'t1_s3_q3', num:'3.1', label:'Competitor 03', directive:'Repeat for your third direct competitor.', type:'textarea', rows:3, placeholder:'Name / Strength / Gap / Opportunity' },
          { id:'t1_s3_q4', num:'3.2', label:'The ONLY Statement', directive:'Complete: "We are the ONLY [service category] that [unique differentiator] for [specific audience]." If you cannot complete it — that is our first strategic problem to solve.', type:'textarea', rows:2, placeholder:'We are the ONLY...' },
          { id:'t1_s3_q5', num:'3.3', label:'Admired Authority Brands', directive:'List 3 brands OUTSIDE your industry that you admire. For each, articulate specifically what about their identity — visual, verbal, or philosophical — resonates. We are extracting aesthetic and authority intelligence.', type:'textarea', rows:4, placeholder:'Brand / Why it resonates' },
          { id:'t1_s3_q6', num:'3.4', label:'The Price Signal', directive:'Where do you currently sit on the pricing spectrum, and where do you INTEND to sit after this brand is deployed? Be specific with figures.', type:'textarea', rows:3, placeholder:'e.g. Currently mid-market at R8K/project. Post-brand target: R25K+ premium positioning.' },
        ]
      },
      {
        tag: 'Sect.04 // Visual Architecture',
        title: 'THE\nLOGIC',
        subtitle: 'Translating strategic intent into a visual brief — the language your brand speaks before a single word is read.',
        questions: [
          { id:'t1_s4_q1', num:'4.1', label:'The Human Analogy', directive:'If your brand were a person: What is their profession? What car do they drive? What do they wear to a high-stakes meeting? What do they order at a restaurant? This defines the personality architecture of your identity.', type:'textarea', rows:4, placeholder:'Build the character.' },
          { id:'t1_s4_q2', num:'4.2', label:'Brand Personality Spectrum', directive:'Select your position on each axis. Do not default to the middle — indecision produces a diluted brand.', type:'scales', scales:[
            { label:'TRADITIONAL vs MODERN', left:'TRADITIONAL', right:'MODERN' },
            { label:'PLAYFUL vs SERIOUS', left:'PLAYFUL', right:'SERIOUS' },
            { label:'APPROACHABLE vs EXCLUSIVE', left:'APPROACHABLE', right:'EXCLUSIVE' },
            { label:'UNDERSTATED vs BOLD', left:'UNDERSTATED', right:'BOLD' },
            { label:'GENERALIST vs SPECIALIST', left:'GENERALIST', right:'SPECIALIST' },
          ]},
          { id:'t1_s4_q3', num:'4.3', label:'Visual Reference Points', directive:'Provide 3–5 examples of visual work from any field that represents the territory you want to occupy. Describe WHY each resonates. Links, descriptions, or named references all accepted.', type:'textarea', rows:5, placeholder:'Reference / Why it resonates' },
          { id:'t1_s4_q4', num:'4.4', label:'The Absolute Exclusions', directive:'What colours, typeface styles, aesthetics, symbols, or design languages must NEVER appear in your brand? Be specific. "Nothing too corporate" is not specific.', type:'textarea', rows:3, placeholder:'e.g. No serif typefaces. No blue. No stock imagery.' },
          { id:'t1_s4_q5', num:'4.5', label:'Colour Intelligence', directive:'Any colours holding strategic or cultural significance? Existing brand colour to retain, cultural context your audience associates with trust, or competitor colour to deliberately avoid?', type:'textarea', rows:3, placeholder:'Strategic colour context.' },
        ]
      },
      {
        tag: 'Sect.05 // Tone & Language',
        title: 'THE\nVOICE',
        subtitle: 'Establishing the verbal architecture — the tone, register, and language your brand uses to command authority.',
        questions: [
          { id:'t1_s5_q1', num:'5.1', label:'Brand Voice Descriptors', directive:'Choose 5 adjectives that describe how your brand SOUNDS. Not what it looks like — how it speaks.', type:'textarea', rows:2, placeholder:'e.g. Direct / Authoritative / Measured / Intelligent / Unapologetic' },
          { id:'t1_s5_q2', num:'5.2', label:'The Communication Register', directive:'Provide one example of copy, a tagline, or writing from any brand that achieves the exact tone you are after. Explain what specifically about the language resonates.', type:'textarea', rows:3, placeholder:'Reference copy + why it works.' },
          { id:'t1_s5_q3', num:'5.3', label:'Tone Exclusions', directive:'What tones, language styles, or brand personalities must NEVER represent you?', type:'textarea', rows:3, placeholder:'e.g. Never self-deprecating. No corporate buzzwords. Never sounds like we are trying too hard.' },
        ]
      },
      {
        tag: 'Sect.06 // Assets & Logistics',
        title: 'THE\nASSETS',
        subtitle: 'Auditing what exists, what is salvageable, and what will be built from zero.',
        questions: [
          { id:'t1_s6_q1', num:'6.1', label:'Existing Asset Inventory', directive:'Existing brand assets — logo files, fonts, photography, brand documents — that are non-negotiable to retain. List them, and state WHY they are non-negotiable.', type:'textarea', rows:3, placeholder:'Asset / Reason for retention' },
          { id:'t1_s6_q2', num:'6.2', label:'Primary Brand Touchpoints', directive:'Where will this identity be seen most? List your platforms in priority order.', type:'textarea', rows:2, placeholder:'e.g. 1. LinkedIn  2. Website  3. Printed proposals  4. Business cards' },
          { id:'t1_s6_q3', num:'6.3', label:'Registered Company Name', directive:'Your official registered company name as it will appear in the Brand Blueprint.', type:'text', placeholder:'Official registered name' },
          { id:'t1_s6_q4', num:'6.3', label:'WHO WE ARE — Short Paragraph', directive:'A 2–3 line "Who We Are" paragraph for inclusion in the Brand Blueprint.', type:'textarea', rows:3, placeholder:'Your positioning statement.' },
          { id:'t1_s6_q5', num:'6.3', label:'Team / Leadership', directive:'Names and roles of key team members or leadership to appear on the WHO page.', type:'textarea', rows:3, placeholder:'Name / Role / Brief context' },
          { id:'t1_s6_q6', num:'6.4', label:'Technical Delivery Preferences', directive:'Specific file format requirements or software preferences. (e.g. "We use Canva internally", "We need CMYK for print")', type:'textarea', rows:2, placeholder:'Technical constraints.' },
          { id:'t1_s6_q7', num:'6.5', label:'Timeline & Constraints', directive:'Hard deadlines, launch events, or market commitments creating time constraints. State specific dates.', type:'textarea', rows:2, placeholder:'Dates and context.' },
          { id:'t1_s6_q8', num:'6.0', label:'Your Email Address', directive:'Where should your completed brief be sent for confirmation?', type:'email', placeholder:'your@email.com' },
          { id:'t1_s6_q9', num:'6.0', label:'Your Full Name', directive:'For our records and correspondence.', type:'text', placeholder:'Full name' },
        ]
      },
    ]
  },

  t2: {
    badge: 'Tier 2 // Digital Authority',
    sections: [
      {
        tag: '// 01 — Strategic Foundation',
        title: 'THE\nOBJECTIVE',
        subtitle: 'Before a single wireframe is considered, we establish the strategic intent of this digital asset.',
        scopeNote: '<strong>Tier 2 scope includes:</strong> Strategic 5-page website (Home, Methodology, Services, About, Contact) // UX/UI Architecture // Mobile Engineering // On-Page SEO // Copywriting Integration // Performance Optimisation.<br><br><span class="scope-warning">IMPORTANT: Deployment to a live server is an optional add-on (R4,500). Confirm your selection in Section 07.</span>',
        questions: [
          { id:'t2_s1_q1', num:'1.1', label:'The Primary Conversion Goal', directive:'The single most important action you want a visitor to take. Do not list multiple. Identify the ONE primary conversion event.', type:'textarea', rows:2, placeholder:'e.g. Book a discovery call / Submit a project brief / Send a WhatsApp inquiry' },
          { id:'t2_s1_q2', num:'1.2', label:'The Secondary Conversion Goal', directive:'If the visitor is not ready to convert, what is the next best action you want them to take?', type:'textarea', rows:2, placeholder:'e.g. Follow on LinkedIn / Subscribe to newsletter' },
          { id:'t2_s1_q3', num:'1.3', label:'The Problem This Website Must Solve', directive:'What specific commercial problem is your current online presence failing to address? Be specific — this defines the brief.', type:'textarea', rows:3, placeholder:'e.g. We lose credibility when prospects Google us.' },
          { id:'t2_s1_q4', num:'1.4', label:'The Definition of Success', directive:'How will you know this website is working? Define 1–2 measurable indicators of success.', type:'textarea', rows:3, placeholder:'e.g. A 30% increase in qualified inquiries within 3 months.' },
          { id:'t2_s1_q5', num:'1.5', label:'Brand Asset Status', directive:'Confirm your brand asset readiness.', type:'yesno', items:[
            'Tier 1 Identity Launchpad completed with JUDAION Studios',
            'Existing brand assets available in production-ready format',
            'Logo files available in vector format (.ai / .eps / .svg)',
            'Brand Style Guide or documentation available',
          ]},
          { id:'t2_s1_q5_notes', num:'', label:'Asset Status Notes', directive:'Any important context on your brand asset status.', type:'textarea', rows:2, placeholder:'Notes on asset availability.' },
        ]
      },
      {
        tag: '// 02 — Audience Intelligence',
        title: 'THE\nVISITOR',
        subtitle: 'Understanding who will land on this site — their mindset, objections, and the decision they need to be led to make.',
        questions: [
          { id:'t2_s2_q1', num:'2.1', label:'The Primary Visitor Profile', directive:'Describe the primary person landing on this website. Role, industry, budget authority, and the specific problem that brought them here.', type:'textarea', rows:4, placeholder:'The individual in front of the screen making a decision.' },
          { id:'t2_s2_q2', num:'2.2', label:"The Visitor's Primary Objection", directive:'What is the single biggest hesitation your ideal visitor carries before they contact you? What makes them close the tab instead of sending the inquiry?', type:'textarea', rows:3, placeholder:"e.g. They don't believe we can deliver at this price point." },
          { id:'t2_s2_q3', num:'2.3', label:'Trust Signals Required', directive:'What evidence does your visitor need before they act? Rank in order of importance for YOUR specific audience.', type:'priority', items:[
            'Case studies / project outcomes',
            'Client testimonials or social proof',
            'Credentials, awards, or certifications',
            'Named client roster or portfolio',
            'Team profiles and founder story',
            'Methodology or process transparency',
            'Press features or media mentions',
          ]},
          { id:'t2_s2_q4', num:'2.4', label:'The Referral Source', directive:'How will most visitors arrive at this website? Understanding traffic source changes the entry-point strategy.', type:'textarea', rows:2, placeholder:'e.g. Primarily LinkedIn referrals / Cold outreach / Google search' },
          { id:'t2_s2_q5', num:'2.5', label:'Device Behaviour', directive:'Based on your knowledge of your audience, what device do they most likely use when researching vendors of your type?', type:'scales', scales:[
            { label:'Device Priority', left:'DESKTOP-FIRST', right:'MOBILE-FIRST' }
          ]},
        ]
      },
      {
        tag: '// 03 — Site Architecture',
        title: 'THE\nSTRUCTURE',
        subtitle: 'Mapping the 5-page information architecture — what each page must communicate and the flow that moves a visitor toward conversion.',
        questions: [
          { id:'t2_s3_q1', num:'3.1', label:'Home — Hero Statement (H1)', directive:'The headline a visitor reads first. It must stop them. Provide your H1, or describe what you want a visitor to FEEL and UNDERSTAND in the first 5 seconds.', type:'textarea', rows:2, placeholder:'Your opening statement.' },
          { id:'t2_s3_q2', num:'3.1', label:'Home — Supporting Subheading', directive:'The subheading that supports and expands the H1.', type:'textarea', rows:2, placeholder:'The sentence beneath the headline.' },
          { id:'t2_s3_q3', num:'3.2', label:'Home — Proof Element', directive:'What single proof element appears on Home to immediately establish authority? Provide the exact content or data.', type:'textarea', rows:2, placeholder:'e.g. Featured client logos / Key statistic / Award / Case study result' },
          { id:'t2_s3_q4', num:'3.3', label:'Methodology — Your Process', directive:'Define your delivery process in 3–6 named stages. Each needs a name and one-sentence description.', type:'textarea', rows:8, placeholder:'Stage 01: [Name] — [One-sentence description]\nStage 02: ...' },
          { id:'t2_s3_q5', num:'3.4', label:'Methodology — Philosophy Statement', directive:'What core belief underpins your process? In 2–3 sentences, what do you believe about HOW work should be done that competitors do not?', type:'textarea', rows:3, placeholder:'Your philosophy.' },
          { id:'t2_s3_q6', num:'3.5', label:'Services — Offerings', directive:'List every service appearing on this page. For each: (a) exact service name, (b) 2–3 sentence outcome-focused description, (c) whether pricing will be displayed publicly.', type:'textarea', rows:8, placeholder:'Service name / Description / Pricing visible: Yes or No' },
          { id:'t2_s3_q7', num:'3.6', label:'Services — Page CTA', directive:'What action do you want a visitor to take directly from the Services page? Define exact CTA text and destination.', type:'textarea', rows:2, placeholder:'CTA text + destination' },
          { id:'t2_s3_q8', num:'3.7', label:'About — Founder / Studio Story', directive:'The narrative for the About page. Not a CV — a position statement. Why does this business exist? First or third person — indicate which.', type:'textarea', rows:5, placeholder:'Your position statement.' },
          { id:'t2_s3_q9', num:'3.8', label:'About — Team / Leadership', directive:'List team members or advisors to feature. Name, role, 1–2 sentence bio, and confirm if a professional headshot is available.', type:'textarea', rows:4, placeholder:'Name / Role / Bio / Headshot: Yes or No' },
          { id:'t2_s3_q10', num:'3.9', label:'Contact — Form Fields', directive:'What information must the contact form capture? Only include fields you genuinely need.', type:'textarea', rows:3, placeholder:'e.g. Name / Company / Email / Budget Range / Project Description' },
          { id:'t2_s3_q11', num:'3.10', label:'Contact — Supporting Details', directive:'Business email, phone, WhatsApp link, physical address, business hours, and social handles to be linked.', type:'textarea', rows:3, placeholder:'Contact details for the Contact page.' },
        ]
      },
      {
        tag: '// 04 — Visual & Brand Language',
        title: 'THE\nAESTHETIC',
        subtitle: 'Translating brand identity into a digital visual environment — the coded language your website speaks before a word is read.',
        questions: [
          { id:'t2_s4_q1', num:'4.1', label:'Visual Reference Sites', directive:'Provide 3–5 websites representing the visual standard you want to achieve. For each, note what specifically resonates.', type:'textarea', rows:5, placeholder:'URL / What resonates specifically' },
          { id:'t2_s4_q2', num:'4.2', label:'Layout Disposition', directive:'Select your position on each axis. These govern layout architecture decisions.', type:'scales', scales:[
            { label:'Content density', left:'DENSE / CONTENT-RICH', right:'MINIMAL / SPACIOUS' },
            { label:'Interaction style', left:'STATIC / EDITORIAL', right:'DYNAMIC / INTERACTIVE' },
            { label:'Visual weight', left:'IMAGE-DRIVEN', right:'TYPE-DRIVEN' },
            { label:'Palette', left:'DARK PALETTE', right:'LIGHT PALETTE' },
          ]},
          { id:'t2_s4_q3', num:'4.3', label:'Photography & Visual Assets', directive:'Confirm current asset availability. A premium website built on low-resolution imagery is a structural failure.', type:'yesno', items:[
            'Professional photography of team / founder',
            'Professional photography of workspace or environment',
            'High-resolution project or work sample imagery',
            'Client-approved project photography or screenshots',
            'Brand-aligned licensed stock imagery',
          ]},
          { id:'t2_s4_q3_notes', num:'', label:'Photography Notes', directive:'Any constraints or context on your visual assets.', type:'textarea', rows:2, placeholder:'Photography constraints.' },
          { id:'t2_s4_q4', num:'4.4', label:'Absolute Visual Exclusions', directive:'What visual approaches, aesthetics, or trends must NEVER appear? Be specific and decisive.', type:'textarea', rows:3, placeholder:'e.g. No parallax scrolling. No generic stock photography. Nothing that looks like a template.' },
        ]
      },
      {
        tag: '// 05 — Technical & SEO',
        title: 'THE\nINFRASTRUCTURE',
        subtitle: 'Establishing the technical parameters that govern SEO, performance optimisation, and mobile engineering.',
        questions: [
          { id:'t2_s5_q1', num:'5.1', label:'Domain Name', directive:'Your domain name exactly as registered.', type:'text', placeholder:'e.g. yourbusiness.co.za' },
          { id:'t2_s5_q2', num:'5.1', label:'Hosting Provider', directive:'Current hosting provider name, if active hosting exists.', type:'text', placeholder:'e.g. Afrihost / Hetzner / WP Engine' },
          { id:'t2_s5_q3', num:'5.1', label:'Hosting & Domain Status', directive:'Confirm your infrastructure status.', type:'yesno', items:[
            'Active hosting account currently in place',
            'Administrative access to hosting account available',
            'Administrative access to domain registrar available',
          ]},
          { id:'t2_s5_q4', num:'5.2', label:'Target Keywords', directive:'List the 5–10 search terms your ideal client would type to find a business like yours.', type:'textarea', rows:4, placeholder:'e.g. brand identity design Johannesburg\npremium logo design South Africa' },
          { id:'t2_s5_q5', num:'5.3', label:'Geographic Targeting', directive:'Local, national, or international audience? If local — specify city or region.', type:'textarea', rows:2, placeholder:'e.g. Primarily Johannesburg and Cape Town' },
          { id:'t2_s5_q6', num:'5.4', label:'Competitor SEO Benchmarks', directive:'List 2–3 competitor websites that consistently outrank you for your target terms.', type:'textarea', rows:2, placeholder:'Competitor website URLs' },
          { id:'t2_s5_q7', num:'5.5', label:'Third-Party Integrations', directive:'Any tools or platforms that must be functional on the delivered site.', type:'textarea', rows:3, placeholder:'e.g. Calendly embed / Google Analytics 4 / Mailchimp form / WhatsApp widget / Meta Pixel' },
        ]
      },
      {
        tag: '// 06 — Copywriting & Content',
        title: 'THE\nLANGUAGE',
        subtitle: 'Defining the verbal architecture — what is client-supplied, what will be structured by JUDAION, and what governs the written voice.',
        questions: [
          { id:'t2_s6_q1', num:'6.1', label:'Copy Availability', directive:'For each page, indicate copy status: Final, Draft, or None.', type:'textarea', rows:6, placeholder:'HOME: Final / Draft / None\nMETHODOLOGY: Final / Draft / None\nSERVICES: Final / Draft / None\nABOUT: Final / Draft / None\nCONTACT: Final / Draft / None' },
          { id:'t2_s6_q2', num:'6.2', label:'Tone & Voice', directive:'Select your position on each axis to confirm the verbal register.', type:'scales', scales:[
            { label:'Register', left:'FORMAL / CORPORATE', right:'DIRECT / CONVERSATIONAL' },
            { label:'Assertiveness', left:'RESERVED / UNDERSTATED', right:'ASSERTIVE / COMMANDING' },
            { label:'Approach', left:'EDUCATIONAL', right:'PERSUASIVE / COMMERCIAL' },
          ]},
          { id:'t2_s6_q3', num:'6.3', label:'Language Conventions', directive:'Any regional spelling conventions, localisation requirements, or terminology preferences?', type:'textarea', rows:2, placeholder:'e.g. South African English spelling. Use Rand / R not $ in all pricing references.' },
          { id:'t2_s6_q4', num:'6.4', label:'Mandatory Proprietary Language', directive:'Any proprietary terms or service names that MUST appear exactly as written?', type:'textarea', rows:3, placeholder:'Exact terms and phrases.' },
          { id:'t2_s6_q5', num:'6.5', label:'Language to Avoid', directive:'Words, phrases, or communication styles that must NEVER appear on this website.', type:'textarea', rows:2, placeholder:'e.g. Never use "cheap" or "affordable". Avoid passive voice.' },
        ]
      },
      {
        tag: '// 07 — Deployment & Logistics',
        title: 'THE\nHANDOVER',
        subtitle: 'Confirming delivery parameters, add-on selections, and logistics for a clean, on-time handover.',
        questions: [
          { id:'t2_s7_q1', num:'7.1', label:'Deployment Add-On Selection', directive:'The base Tier 2 deliverable is a structured ZIP Archive. The Digital Deployment Add-On (R4,500) covers server configuration, SSL activation, domain mapping, and live environment audit.', type:'yesno', items:[
            'Confirm Digital Deployment Add-On (R4,500)',
            'Self-managed deployment — ZIP Archive delivery only',
          ]},
          { id:'t2_s7_q2', num:'7.1', label:'Self-Deploy Technical Capacity', directive:'If self-deploying, confirm your developer or technical capacity.', type:'textarea', rows:2, placeholder:'Developer name or technical context.' },
          { id:'t2_s7_q3', num:'7.3', label:'Hard Deadlines', directive:'Non-negotiable launch deadlines tied to business events, campaigns, or presentations. State exact dates.', type:'textarea', rows:2, placeholder:'Event / Date' },
          { id:'t2_s7_q4', num:'7.4', label:'Approval Decision-Maker', directive:'Who is the final decision-maker for approvals? If multiple stakeholders, list each by name and role.', type:'textarea', rows:2, placeholder:'Name / Role' },
          { id:'t2_s7_q5', num:'7.5', label:'File Delivery Preferences', directive:'Any specific file organisation requirements or delivery method preferences?', type:'textarea', rows:2, placeholder:'Delivery preferences.' },
          { id:'t2_s7_q6', num:'', label:'Your Email Address', directive:'Where should your completed brief be sent for confirmation?', type:'email', placeholder:'your@email.com' },
          { id:'t2_s7_q7', num:'', label:'Your Full Name', directive:'For our records and correspondence.', type:'text', placeholder:'Full name' },
        ]
      },
    ]
  },

  t3: {
    badge: 'Tier 3 // Scale Partner',
    sections: [
      {
        tag: '// 01 — Monthly Focus',
        title: 'THE\nOBJECTIVE',
        subtitle: "Every month has a single strategic north star. Define it here — this governs every creative decision in this cycle.",
        scopeNote: '<strong>Monthly scope reminder:</strong> 12 strategic visual assets (3/week) // Up to 1 ad creative per active campaign // Monthly Performance Sync // Proactive website maintenance.<br><br><strong>At 6-month intervals:</strong> Brand collateral updates — only if required. Declare in Section 04.',
        questions: [
          { id:'t3_s1_meta1', num:'', label:'Billing Month', directive:'The month this brief covers.', type:'text', placeholder:'e.g. July 2025' },
          { id:'t3_s1_meta2', num:'', label:'Retainer Cycle Number', directive:'Which month of your retainer is this?', type:'text', placeholder:'e.g. Month 03' },
          { id:'t3_s1_q1', num:'1.1', label:"This Month's Business Priority", directive:"The single most important commercial objective for your business this month. Not a content goal — a business goal.", type:'textarea', rows:2, placeholder:'e.g. Close 3 new Tier 1 clients / Launch the new service category' },
          { id:'t3_s1_q2', num:'1.2', label:'The Core Message', directive:'In one sentence — what is the primary message your audience must receive from your content this month?', type:'textarea', rows:2, placeholder:'The through-line of this cycle.' },
          { id:'t3_s1_q3', num:'1.3', label:'Key Dates This Cycle', directive:'Any dates that are strategically significant — launches, industry events, campaigns, press features, or milestones.', type:'textarea', rows:3, placeholder:'Date / Event / Significance' },
          { id:'t3_s1_q4', num:'1.4', label:'Audience Focus This Month', directive:'Specific audience segment or industry vertical to target with intensity. If no shift from last month — state that explicitly.', type:'textarea', rows:2, placeholder:'e.g. Targeting legal sector founders / Same audience as last cycle' },
        ]
      },
      {
        tag: '// 02 — Visual Content Plan',
        title: 'THE\n12 ASSETS',
        subtitle: "Your monthly suite — 3 on-brand visual assets per week, sequenced to build authority and drive the month's primary objective.",
        questions: [
          { id:'t3_s2_assets', num:'2.0', label:'Monthly Asset Tracker', directive:'Provide directional intelligence per slot: topic, format type, platform, or key message. Leave blank where you want JUDAION to apply strategic discretion. FORMAT REFERENCE: Carousel // Single Static // Quote Graphic // Case Study Tile // Authority Statement // Process Visual // Testimonial Graphic // Announcement', type:'assettracker' },
          { id:'t3_s2_q1', num:'2.1', label:'Platform Priority This Month', directive:'Which platform takes creative priority — LinkedIn or Instagram? If equal, state that.', type:'textarea', rows:2, placeholder:'LinkedIn / Instagram / Equal — with any format notes' },
          { id:'t3_s2_q2', num:'2.2', label:'Brand Voice Direction', directive:'Any shift in tone this month? Only flag genuine strategic shifts — consistency is a brand asset.', type:'textarea', rows:2, placeholder:'e.g. More assertive / No change from last month' },
          { id:'t3_s2_q3', num:'2.3', label:'Content to Avoid This Cycle', directive:'Topics, formats, or creative directions that must NOT appear this month.', type:'textarea', rows:2, placeholder:'e.g. Avoid pricing content until new rate card is confirmed' },
        ]
      },
      {
        tag: '// 03 — Paid Campaign Creative',
        title: 'THE\nAD CREATIVE',
        subtitle: 'Conversion-optimised creative for any active paid campaigns this cycle. One asset per campaign included in base scope.',
        questions: [
          { id:'t3_s3_active', num:'3.1', label:'Active Campaigns This Month', directive:'Do you have paid advertising campaigns running this month that require dedicated conversion creative?', type:'yesno', items:['Paid campaigns active this month requiring ad creative'] },
          { id:'t3_s3_q1', num:'3.2', label:'Campaign 01', directive:'Campaign name, platform/placement, and primary objective or offer.', type:'textarea', rows:2, placeholder:'Campaign name / Platform / Objective & offer' },
          { id:'t3_s3_q2', num:'3.2', label:'Campaign 02 (if applicable)', directive:'Second campaign details, if running more than one simultaneously.', type:'textarea', rows:2, placeholder:'Campaign name / Platform / Objective & offer' },
          { id:'t3_s3_q3', num:'3.3', label:'Ad Creative Direction', directive:'For each campaign — what is the single action the ad must drive? What is the hook, the offer, and the destination URL?', type:'textarea', rows:4, placeholder:'Precise creative direction per campaign.' },
        ]
      },
      {
        tag: '// 04 — Brand Collateral',
        title: 'THE\nCOLLATERAL',
        subtitle: 'Reviewed and updated at 6-month intervals. Only complete if you are in an update window or an urgent change is required.',
        questions: [
          { id:'t3_s4_yn', num:'4.1', label:'Collateral Update Status', directive:'Indicate whether updates are required this cycle.', type:'yesno', items:[
            'Brand collateral update required this cycle',
            'This is a scheduled 6-month interval update',
            'This is an urgent out-of-cycle update',
          ]},
          { id:'t3_s4_q1', num:'4.1', label:'Reason for Out-of-Cycle Update', directive:'If urgent and out-of-cycle, state the reason.', type:'textarea', rows:2, placeholder:'Reason for urgent update.' },
          { id:'t3_s4_q2', num:'4.2', label:'Assets to Update', directive:'List each asset requiring an update, the nature of the change, and its priority (Critical / Standard).', type:'textarea', rows:4, placeholder:'Asset name / Nature of change / Priority: Critical or Standard' },
          { id:'t3_s4_q3', num:'4.3', label:'Change Detail', directive:'Describe the specific changes required. Include updated copy, new contact details, or precise instructions.', type:'textarea', rows:4, placeholder:'Exact changes per asset.' },
        ]
      },
      {
        tag: '// 05 — Website Maintenance',
        title: 'THE\nSITE',
        subtitle: 'Monthly technical check-ups and content updates to keep your digital asset fast, secure, and commercially current.',
        questions: [
          { id:'t3_s5_q1', num:'5.1', label:'Content Updates Required', directive:'Website content that needs updating this month. Specify the page and describe the change.', type:'textarea', rows:4, placeholder:'Page name / Change required' },
          { id:'t3_s5_yn', num:'5.2', label:'Technical Issues', directive:'Have you noticed any technical issues since last month?', type:'yesno', items:['Technical issues observed on site this month'] },
          { id:'t3_s5_q2', num:'5.2', label:'Technical Issue Details', directive:'List every issue observed — broken links, slow load, form errors, SSL warnings, display issues.', type:'textarea', rows:3, placeholder:'Issue description / Where on site' },
          { id:'t3_s5_yn2', num:'5.3', label:'New Content', directive:'Is there new content to publish this cycle?', type:'yesno', items:['New content to be published to the site this cycle'] },
          { id:'t3_s5_q3', num:'5.3', label:'New Content Details', directive:'Describe the content and confirm whether it will be submitted with this brief or sent separately.', type:'textarea', rows:2, placeholder:'Content description / Submission status' },
        ]
      },
      {
        tag: '// 06 — Performance Sync',
        title: 'THE\nDEBRIEF',
        subtitle: "A strategic review of last month's output. Skip on Month 01. Mandatory from Month 02 onwards.",
        questions: [
          { id:'t3_s6_q1', num:'6.1', label:'Best Performing Asset Last Month', directive:'Which content piece performed best, and what do you attribute that performance to?', type:'textarea', rows:2, placeholder:'Asset description / Why it worked' },
          { id:'t3_s6_q2', num:'6.1', label:'Lowest Performing Asset Last Month', directive:'Which content piece underperformed, and what might explain it?', type:'textarea', rows:2, placeholder:'Asset description / Possible cause' },
          { id:'t3_s6_q3', num:'6.1', label:'Notable Audience Feedback', directive:"Any significant comments, reactions, or direct audience feedback from last month's content.", type:'textarea', rows:2, placeholder:'Feedback received.' },
          { id:'t3_s6_q4', num:'6.2', label:'Strategic Adjustments This Cycle', directive:'Based on last month — anything to do differently? If no changes, state that explicitly.', type:'textarea', rows:3, placeholder:'Adjustments or "No changes from last cycle."' },
          { id:'t3_s6_q5', num:'6.3', label:'Market Feedback', directive:'Any clients, prospects, or peers who have commented on your brand presence or content quality since last month?', type:'textarea', rows:3, placeholder:'Feedback from the market — positive or negative.' },
          { id:'t3_s6_q6', num:'', label:'Your Email Address', directive:'Where should your completed brief be sent for confirmation?', type:'email', placeholder:'your@email.com' },
          { id:'t3_s6_q7', num:'', label:'Your Full Name', directive:'For our records and correspondence.', type:'text', placeholder:'Full name' },
        ]
      },
    ]
  }
}