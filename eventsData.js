export const initialEvents = [
  {
    id: "evt-101",
    title: "Global AI & Next-Gen Machine Learning Summit 2026",
    tagline: "Unleashing the Frontier of Autonomous Intelligence & LLMs",
    category: "Technology",
    featured: true,
    price: 149,
    isFree: false,
    date: "2026-12-05",
    displayDate: "Saturday, Dec 5, 2026",
    time: "09:00 AM - 05:30 PM EST",
    mode: "Hybrid",
    location: "Metropolitan Tech Pavilion, San Francisco, CA & Global Stream",
    venueAddress: "780 Howard St, San Francisco, CA 94103",
    totalSeats: 350,
    availableSeats: 42,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    organizer: {
      name: "Silicon Valley AI Consortium",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Lead Tech Organizer"
    },
    shortDescription: "Join 1,000+ engineers, researchers, and tech pioneers to dive deep into multimodal LLMs, agentic workflows, and future computing paradigms.",
    description: "The Global AI & Next-Gen Machine Learning Summit brings together the foremost innovators, researchers, and engineering leaders shaping autonomous systems. Over a packed single day, you'll experience hands-on technical keynotes, architecture deep-dives, live coding masterclasses, and an executive networking lounge. Whether you're optimizing inference latency, building multi-agent swarms, or fine-tuning domain models, this conference is built for high-impact practitioners.",
    highlights: [
      "Keynote from world-class AI research pioneers",
      "Interactive code labs on model distillation & deployment",
      "Live panel on Ethical AI & Autonomous Systems Safety",
      "Executive networking lounge & catered lunch included",
      "Full digital recording access + downloadable repository"
    ],
    schedule: [
      { time: "09:00 AM", title: "Registration & Morning Coffee Network", speaker: "Eventora Team" },
      { time: "09:45 AM", title: "Keynote: The 2027 Vision for Autonomous Agent Swarms", speaker: "Dr. Elena Vance" },
      { time: "11:15 AM", title: "Architecting Low-Latency Local Inference Systems", speaker: "Marcus Sterling" },
      { time: "01:00 PM", title: "Networking Lunch & Innovation Showcase", speaker: "Sponsors & Exhibitors" },
      { time: "02:15 PM", title: "Interactive Workshop: Fine-Tuning Open Source LLMs", speaker: "Aria Chen" },
      { time: "04:30 PM", title: "Roundtable & Fireside Chat: Future of AI Governance", speaker: "Panel of Industry Leaders" }
    ],
    speakers: [
      {
        name: "Dr. Elena Vance",
        role: "Chief Research Scientist",
        company: "DeepNeural Labs",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        bio: "Pioneered neural architecture search algorithms and authored foundational papers on agent collaboration."
      },
      {
        name: "Marcus Sterling",
        role: "VP of Engineering",
        company: "Veloce Systems",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        bio: "Specializes in high-throughput distributed model serving and edge tensor processing units."
      },
      {
        name: "Aria Chen",
        role: "Head of AI Platform",
        company: "Synthetix AI",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
        bio: "Building developer frameworks for enterprise agentic pipelines and adaptive RAG architectures."
      }
    ],
    prerequisites: "Familiarity with Python, modern web development, or modern cloud architecture is helpful.",
    tags: ["Artificial Intelligence", "Machine Learning", "Python", "Deep Learning", "LLMs"]
  },
  {
    id: "evt-102",
    title: "Modern UI/UX Design System & Figma Masterclass",
    tagline: "From Atomic Components to Tokenized Enterprise Workflows",
    category: "Design",
    featured: false,
    price: 89,
    isFree: false,
    date: "2026-12-12",
    displayDate: "Saturday, Dec 12, 2026",
    time: "10:00 AM - 03:30 PM EST",
    mode: "Online",
    location: "Interactive Virtual Studio (Live Stream + Figma Workspace)",
    venueAddress: "Online Streaming via Eventora Studio",
    totalSeats: 120,
    availableSeats: 18,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80",
    organizer: {
      name: "PixelCraft Design Guild",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      role: "Design Educator Community"
    },
    shortDescription: "Master scalable design tokens, dynamic auto-layout components, and developer handoff workflows in an immersive live Figma workshop.",
    description: "Design systems are the backbone of modern digital products. This intensive masterclass takes you through creating production-grade design systems in Figma from scratch. Learn how to structure atomic tokens, build flexible component variants with advanced auto-layout and component properties, align Figma tokens with CSS variables and code, and implement seamless design governance across cross-functional teams.",
    highlights: [
      "Access to an exclusive 400+ token enterprise Figma starter kit",
      "Real-time co-designing session with peer critiques",
      "Automating token sync with GitHub and CSS/Tailwind exports",
      "Certificate of Design System Mastery upon completion",
      "Lifetime access to workshop video recordings and community Discord"
    ],
    schedule: [
      { time: "10:00 AM", title: "Foundations: Design Tokens, Typography Scales & Spacing", speaker: "Siddharth Rao" },
      { time: "11:30 AM", title: "Building Complex Auto-Layout Component Libraries", speaker: "Siddharth Rao" },
      { time: "01:00 PM", title: "Break & Design Showcase", speaker: "Community" },
      { time: "01:45 PM", title: "Figma Variables, Modes & Dark/Light Theming", speaker: "Camila Gomez" },
      { time: "03:00 PM", title: "Figma to Code: Seamless Developer Handoff", speaker: "Camila Gomez" }
    ],
    speakers: [
      {
        name: "Siddharth Rao",
        role: "Principal Product Designer",
        company: "Stripe",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        bio: "Led design system overhauls for fintech apps used by over 50 million global customers."
      },
      {
        name: "Camila Gomez",
        role: "Design Systems Architect",
        company: "Atlassian",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
        bio: "Specialist in cross-platform tokens, accessible color theory, and developer collaboration."
      }
    ],
    prerequisites: "Basic familiarity with Figma interface and UI design fundamentals.",
    tags: ["Figma", "Design Systems", "UI/UX", "Product Design", "Design Tokens"]
  },
  {
    id: "evt-103",
    title: "Venture Velocity: Startup Growth & Angel Pitch Summit",
    tagline: "Connecting Disruptive Founders with Tier-1 Venture Capitalists",
    category: "Business",
    featured: false,
    price: 199,
    isFree: false,
    date: "2026-12-18",
    displayDate: "Friday, Dec 18, 2026",
    time: "08:30 AM - 06:00 PM EST",
    mode: "In-Person",
    location: "Grand Ballroom, Manhattan Financial Center, New York, NY",
    venueAddress: "250 Vesey St, New York, NY 10281",
    totalSeats: 250,
    availableSeats: 31,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    organizer: {
      name: "Apex Capital Partners",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      role: "Venture Accelerator"
    },
    shortDescription: "Meet 40+ active venture capitalists, pitch your seed or Series A concept, and learn scale strategies from unicorn founders.",
    description: "Venture Velocity is the premier East Coast nexus for ambitious early-stage founders and venture capital decision makers. Featuring rapid-fire live pitch sessions, teardowns of winning term sheets, and curated 1-on-1 investor matchmaking, this summit accelerates fundraising cycles and builds lasting advisory relationships.",
    highlights: [
      "Curated 1-on-1 investor matching tables for qualifying startups",
      "Live term sheet negotiation workshop with Silicon Valley lawyers",
      "Unicorn Founder Panel: Lessons from $0 to $100M ARR",
      "Networking reception with private cocktail bar",
      "Access to post-event investor deal-room database"
    ],
    schedule: [
      { time: "08:30 AM", title: "Breakfast Mixer & Investor Check-In", speaker: "Apex Team" },
      { time: "09:30 AM", title: "Keynote: Macro Trends in 2027 Venture Allocations", speaker: "Victoria Sterling" },
      { time: "11:00 AM", title: "Founder Pitch Arena: Top 10 Seed Finalists", speaker: "Selected Founders" },
      { time: "01:00 PM", title: "Gourmet Networking Luncheon", speaker: "All Attendees" },
      { time: "02:30 PM", title: "Mastering Unit Economics & Customer Acquisition Cost", speaker: "David Vance" },
      { time: "04:30 PM", title: "Closing Cocktail Reception & Deal Signing", speaker: "Investors & Founders" }
    ],
    speakers: [
      {
        name: "Victoria Sterling",
        role: "Managing Partner",
        company: "Horizon Ventures",
        avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
        bio: "Seed investor in 14 unicorns with over $1.8B in early stage tech assets under management."
      },
      {
        name: "David Vance",
        role: "Co-Founder & CEO",
        company: "CloudCore Dynamics",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
        bio: "Scaled B2B enterprise software startup from dorm room to NYSE listing in 6 years."
      }
    ],
    prerequisites: "Founders, investors, corporate strategists, or growth operators.",
    tags: ["Startups", "Venture Capital", "Fundraising", "Pitching", "Entrepreneurship"]
  },
  {
    id: "evt-104",
    title: "Full-Stack React & Next.js Performance Bootcamp",
    tagline: "Server Components, Edge Caching, and High-Performance Web Apps",
    category: "Education",
    featured: false,
    price: 0,
    isFree: true,
    date: "2026-12-20",
    displayDate: "Sunday, Dec 20, 2026",
    time: "11:00 AM - 04:00 PM EST",
    mode: "Online",
    location: "Eventora Interactive Coding Classroom (Live Stream)",
    venueAddress: "Online Interactive Stream with Sandbox",
    totalSeats: 500,
    availableSeats: 87,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    organizer: {
      name: "Modern Web Academy",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Open Source Community"
    },
    shortDescription: "A completely free deep-dive into React Server Components, streaming SSR, Core Web Vitals optimization, and enterprise architecture.",
    description: "Level up your frontend engineering toolkit in this free community bootcamp. We break down the mental models behind React 19, Server Actions, partial prerendering, edge middleware, bundle splitting, and memory optimization. You'll build a high-performance web app live along with the instructor, testing performance metrics with Chrome DevTools and Lighthouse.",
    highlights: [
      "100% Free interactive community workshop with real code repos",
      "Hands-on building of a full-stack streaming application",
      "Lighthouse 100 audit checklist and bundle size analyzer",
      "Live Q&A with Senior Staff Engineers from top tech companies",
      "Downloadable cheat sheets & project templates"
    ],
    schedule: [
      { time: "11:00 AM", title: "React Mental Models: Server vs Client Components", speaker: "Alex Rivera" },
      { time: "12:30 PM", title: "Streaming Architecture, Suspense, and Hydration Bounds", speaker: "Alex Rivera" },
      { time: "01:45 PM", title: "Lightning Code Challenge: Edge Caching & API Routes", speaker: "Community" },
      { time: "02:30 PM", title: "Core Web Vitals: Crushing INP, LCP, and CLS", speaker: "Priya Sharma" },
      { time: "03:45 PM", title: "Architectural Q&A and Career Roadmap Discussion", speaker: "All Panelists" }
    ],
    speakers: [
      {
        name: "Alex Rivera",
        role: "Staff Frontend Architect",
        company: "Vercel Alumni",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
        bio: "Open source contributor to React ecosystem with over 12 years of web platform engineering experience."
      },
      {
        name: "Priya Sharma",
        role: "Web Performance Specialist",
        company: "BrowserSpeed Lab",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
        bio: "Regular speaker at JSConf and author of best-selling guides on optimizing Core Web Vitals."
      }
    ],
    prerequisites: "Good foundation in JavaScript and basic React component architecture.",
    tags: ["React", "Next.js", "Web Performance", "JavaScript", "Frontend"]
  },
  {
    id: "evt-105",
    title: "Brand Storytelling & Viral Growth Marketing Intensive",
    tagline: "Drive 10x Organic Engagement Through Strategic Omnichannel Narrative",
    category: "Marketing",
    featured: false,
    price: 119,
    isFree: false,
    date: "2026-12-28",
    displayDate: "Monday, Dec 28, 2026",
    time: "09:30 AM - 04:30 PM EST",
    mode: "Hybrid",
    location: "Creative Loft Hub, Chicago, IL & Virtual Stream",
    venueAddress: "401 N Michigan Ave, Chicago, IL 60611",
    totalSeats: 180,
    availableSeats: 24,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
    organizer: {
      name: "Elevate Media Collective",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      role: "Growth Agency Network"
    },
    shortDescription: "Discover how top consumer brands craft irresistible narratives, master algorithm changes on short-form video, and build high-conversion funnels.",
    description: "In an era of endless digital noise, authentic storytelling is your sharpest competitive edge. This masterclass unpacks the creative blueprints behind brands that generate millions of organic impressions and convert attention into lifelong brand advocates. Learn scriptwriting for short-form video, email narrative sequences, psychology-driven copy, and performance analytics.",
    highlights: [
      "Breakdowns of viral campaign case studies that generated 50M+ views",
      "Interactive hook-writing and copy clinic with live feedback",
      "Omnichannel content repurposing matrix and calendar templates",
      "Direct Q&A with Chief Marketing Officers of breakthrough D2C brands",
      "Curated growth toolkit and swipe files included"
    ],
    schedule: [
      { time: "09:30 AM", title: "The Psychology of Viral Attention in 2027", speaker: "Maya Lin" },
      { time: "11:00 AM", title: "Short-Form Video Mastery: Hooks, Audio & Retention Curves", speaker: "Jordan Blake" },
      { time: "01:00 PM", title: "Lunch Break & Peer Strategy Roundtables", speaker: "Attendees" },
      { time: "02:00 PM", title: "Building Automated Retention Funnels & Email Story arcs", speaker: "Maya Lin" },
      { time: "03:30 PM", title: "Metrics That Matter: Attribution Beyond Vanity Likes", speaker: "Jordan Blake" }
    ],
    speakers: [
      {
        name: "Maya Lin",
        role: "Chief Brand Strategist",
        company: "Narrative Co.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        bio: "Former VP of Brand at leading DTC brand; scaled organic TikTok and Instagram community to 4M+ followers."
      },
      {
        name: "Jordan Blake",
        role: "Growth Marketing Director",
        company: "VibeMetrics",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
        bio: "Data-driven growth marketer managing $30M+ annual omnichannel performance budgets."
      }
    ],
    prerequisites: "Marketing managers, founders, content creators, and digital strategists.",
    tags: ["Marketing", "Storytelling", "Social Media", "Branding", "Growth"]
  },
  {
    id: "evt-106",
    title: "Cinematic Visuals & Editorial Portraiture Workshop",
    tagline: "Master Studio Lighting, Composition, and Narrative Retouching",
    category: "Photography",
    featured: false,
    price: 165,
    isFree: false,
    date: "2027-01-09",
    displayDate: "Saturday, Jan 9, 2027",
    time: "10:00 AM - 05:00 PM EST",
    mode: "In-Person",
    location: "Studio Lumina Daylight Stages, Los Angeles, CA",
    venueAddress: "1230 S Santa Fe Ave, Los Angeles, CA 90021",
    totalSeats: 25,
    availableSeats: 5,
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80",
    organizer: {
      name: "Aperture Guild of Los Angeles",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      role: "Visual Arts Society"
    },
    shortDescription: "Work with professional fashion models, high-end Profoto continuous and strobe lighting, and learn color-grading in an intimate studio setting.",
    description: "Step onto a professional photography stage in downtown Los Angeles. In this boutique, hands-on workshop limited to just 25 attendees, you will master lighting ratios, modifier choices (octaboxes, beauty dishes, Fresnel lenses), directing talent for emotional resonance, and high-end editorial color grading in Lightroom and Photoshop.",
    highlights: [
      "Strict 25-person cap ensuring 1-on-1 shooting time with agency models",
      "Full access to Profoto & Broncolor high-end lighting gear",
      "Live tethered shooting demonstration with Phase One digital back",
      "Editorial color grading preset pack included for all attendees",
      "Commercial portfolio review by Vogue and GQ contributing photographers"
    ],
    schedule: [
      { time: "10:00 AM", title: "Lighting Physics: Inverse Square Law & Quality of Light", speaker: "Julian Thorne" },
      { time: "11:30 AM", title: "Set 1: High-Key Commercial Beauty & Soft Modifiers", speaker: "Julian Thorne & Models" },
      { time: "01:00 PM", title: "Catered Studio Lunch & Gear Discussion", speaker: "Attendees" },
      { time: "02:00 PM", title: "Set 2: Dramatic Cinematic Chiaroscuro & Color Gels", speaker: "Julian Thorne & Models" },
      { time: "03:45 PM", title: "Live Tethered Retouching & Color Grading Masterclass", speaker: "Julian Thorne" }
    ],
    speakers: [
      {
        name: "Julian Thorne",
        role: "Editorial Fashion Photographer",
        company: "Thorne Imagery",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        bio: "Regular contributor to Vanity Fair, Harper's Bazaar, and commercial campaigns for luxury brands worldwide."
      }
    ],
    prerequisites: "Bring your DSLR or Mirrorless camera with a 35mm, 50mm, or 85mm lens.",
    tags: ["Photography", "Studio Lighting", "Portraits", "Creative", "Photoshop"]
  },
  {
    id: "evt-107",
    title: "Mindfulness, Resilience & Peak Performance Retreat",
    tagline: "Science-Backed Nervous System Regulation and Focus Protocols",
    category: "Health & Wellness",
    featured: false,
    price: 95,
    isFree: false,
    date: "2027-01-16",
    displayDate: "Saturday, Jan 16, 2027",
    time: "09:00 AM - 03:00 PM EST",
    mode: "Hybrid",
    location: "Zenith Sanctuary & Botanical Pavilion, Boulder, CO & Live Stream",
    venueAddress: "1450 Baseline Rd, Boulder, CO 80302",
    totalSeats: 80,
    availableSeats: 19,
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    organizer: {
      name: "Summit Wellness Institute",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      role: "Mind-Body Science Lab"
    },
    shortDescription: "Reclaim your mental clarity, learn clinical breathwork techniques, and design daily habits to prevent burnout in high-demand environments.",
    description: "Designed specifically for knowledge workers, entrepreneurs, and busy professionals, this one-day experiential wellness retreat translates neuroscience into actionable daily rituals. Experience guided breathwork, somatic tension release, nutritional protocols for cognitive sustained endurance, and mindful meditation practices rooted in clinical psychology.",
    highlights: [
      "Guided breathwork session with heart-rate variability (HRV) biofeedback",
      "Ergonomics & neuro-somatic release for seated desk workers",
      "Anti-inflammatory organic lunch & herbal tea bar provided on-site",
      "Comprehensive 30-day digital mindfulness audio guide to keep",
      "Quiet reflection spaces and mountain view walking trails"
    ],
    schedule: [
      { time: "09:00 AM", title: "Opening Tea Ceremony & Grounding Intention", speaker: "Dr. Kaelen Cruz" },
      { time: "10:00 AM", title: "Neuroscience of Stress & Polyvagal Theory in Action", speaker: "Dr. Kaelen Cruz" },
      { time: "11:30 AM", title: "Experiential Somatic Release & Breathwork Journey", speaker: "Mira Jensen" },
      { time: "01:00 PM", title: "Mindful Plant-Based Culinary Lunch", speaker: "Zenith Kitchen" },
      { time: "02:00 PM", title: "Daily Habit Architecture for Sustainable High Output", speaker: "Mira Jensen" }
    ],
    speakers: [
      {
        name: "Dr. Kaelen Cruz",
        role: "Neuroscientist & Clinical Psychologist",
        company: "MindBody Research Group",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        bio: "Specializes in stress resilience biomarkers, sleep architecture, and executive cognitive health."
      },
      {
        name: "Mira Jensen",
        role: "Holistic Breathwork & Somatic Guide",
        company: "Prana Health",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        bio: "Facilitated over 500 breathwork circles for Olympic athletes and corporate tech leaders."
      }
    ],
    prerequisites: "Open to all experience levels; comfortable clothing recommended.",
    tags: ["Wellness", "Mental Health", "Mindfulness", "Biohacking", "Breathwork"]
  },
  {
    id: "evt-108",
    title: "Cybersecurity Defense & Zero-Trust Cloud Architecture",
    tagline: "Securing Distributed Microservices and Threat Vector Mitigation",
    category: "Technology",
    featured: false,
    price: 135,
    isFree: false,
    date: "2027-01-23",
    displayDate: "Saturday, Jan 23, 2027",
    time: "09:00 AM - 04:00 PM EST",
    mode: "Online",
    location: "Global Cyber Defense Lab (Virtual Interactive Sandbox)",
    venueAddress: "Virtual Terminal & CTF Range",
    totalSeats: 300,
    availableSeats: 62,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    organizer: {
      name: "CyberShield Institute",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      role: "Security Research Collective"
    },
    shortDescription: "Experience real-world red team attack simulations and architect resilient Zero-Trust defenses in an interactive hands-on virtual cyber range.",
    description: "Threat landscapes are evolving faster than ever. This intensive engineering workshop puts you directly in the hot seat of modern incident response and defense architecture. Learn the pillars of Zero Trust, identity federation, cryptographic mutual TLS, secrets lifecycle management, and automated container vulnerability triage.",
    highlights: [
      "Access to a live, browser-accessible Capture The Flag (CTF) sandbox",
      "Step-by-step walkthrough of real supply-chain attack vectors",
      "Zero-Trust infrastructure blueprint for Kubernetes and AWS/GCP",
      "Digital Security Architect verification badge",
      "Recorded replay access and code templates for security posture policies"
    ],
    schedule: [
      { time: "09:00 AM", title: "Modern Attack Vectors: From Phishing to Supply Chain Injection", speaker: "Tariq Mansoor" },
      { time: "10:30 AM", title: "Zero Trust Deep Dive: Identity, SPIFFE/SPIRE & mTLS", speaker: "Tariq Mansoor" },
      { time: "12:00 PM", title: "Live Fire Sandbox: Identifying & Remediating Leaked Credentials", speaker: "Sandbox Lead" },
      { time: "01:30 PM", title: "Hardening Cloud-Native Kubernetes Clusters", speaker: "Jessica Wu" },
      { time: "03:15 PM", title: "Incident Response Playbooks: Surviving Ransomware Outages", speaker: "Jessica Wu" }
    ],
    speakers: [
      {
        name: "Tariq Mansoor",
        role: "Principal SecOps Engineer",
        company: "Fortress Zero",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
        bio: "Former intelligence contractor and certified ethical hacker specializing in cloud perimeter hardening."
      },
      {
        name: "Jessica Wu",
        role: "Director of Threat Intelligence",
        company: "Sentinel Net",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
        bio: "Author of industry-recognized threat reports and keynote speaker at DEF CON and Black Hat."
      }
    ],
    prerequisites: "Basic familiarity with Linux command line, networking concepts, and cloud services.",
    tags: ["Cybersecurity", "Zero Trust", "Cloud", "DevSecOps", "Security"]
  }
];

export const categoriesList = [
  {
    id: "cat-tech",
    name: "Technology",
    icon: "Cpu",
    count: 2,
    color: "#7357E8",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    description: "AI, cloud architectures, developer bootcamps & software innovations."
  },
  {
    id: "cat-design",
    name: "Design",
    icon: "Palette",
    count: 1,
    color: "#FF796C",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    description: "UI/UX, design systems, design thinking & creative direction."
  },
  {
    id: "cat-business",
    name: "Business",
    icon: "Briefcase",
    count: 1,
    color: "#0F111A",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    description: "Venture capital, startup pitching, leadership & executive scaling."
  },
  {
    id: "cat-education",
    name: "Education",
    icon: "GraduationCap",
    count: 1,
    color: "#0D9488",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    description: "Coding bootcamps, masterclasses, academic webinars & skills training."
  },
  {
    id: "cat-marketing",
    name: "Marketing",
    icon: "Megaphone",
    count: 1,
    color: "#EC4899",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    description: "Storytelling, viral social media, growth hacking & brand building."
  },
  {
    id: "cat-photography",
    name: "Photography",
    icon: "Camera",
    count: 1,
    color: "#F59E0B",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=80",
    description: "Editorial portraiture, studio lighting, cinematic retouching & framing."
  },
  {
    id: "cat-wellness",
    name: "Health & Wellness",
    icon: "HeartPulse",
    count: 1,
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80",
    description: "Breathwork, cognitive focus, stress resilience & holistic balance."
  }
];

export const whyChooseFeatures = [
  {
    id: "feat-1",
    icon: "Compass",
    title: "Discover Amazing Events",
    description: "Hand-curated conferences, masterclasses, and networking sessions tailored to your professional and creative ambitions."
  },
  {
    id: "feat-2",
    icon: "Award",
    title: "Learn from Industry Experts",
    description: "Gain direct access to world-class founders, principal engineers, designers, and authors who share proven trade blueprints."
  },
  {
    id: "feat-3",
    icon: "Users",
    title: "Connect with Professionals",
    description: "Build genuine connections with high-caliber peers, future collaborators, investors, and mentors across high-growth domains."
  },
  {
    id: "feat-4",
    icon: "Zap",
    title: "Easy Event Registration",
    description: "Instant, seamless ticket confirmation in seconds with real-time seat tracking and downloadable digital event credentials."
  }
];

export const platformStats = [
  { id: "stat-1", number: 120, suffix: "+", label: "Active Summits & Workshops", sub: "Across 14 global hubs" },
  { id: "stat-2", number: 45, suffix: "k+", label: "Registered Attendees", sub: "From 60+ countries" },
  { id: "stat-3", number: 350, suffix: "+", label: "Industry Leaders & Mentors", sub: "Vetted top 1% practitioners" },
  { id: "stat-4", number: 99.4, suffix: "%", decimals: 1, label: "Attendee Satisfaction", sub: "Based on 18k+ post-event reviews" }
];

export const testimonialsData = [
  {
    id: "test-1",
    name: "Sophia Martinez",
    role: "Senior AI Engineer at NeuralVibe",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "Eventora transformed how I discover high-signal tech workshops. Registering for the AI Summit took 30 seconds, and the digital pass made on-site entry seamless.",
    rating: 5,
    eventAttended: "Global AI & Machine Learning Summit"
  },
  {
    id: "test-2",
    name: "Liam Chen",
    role: "Lead Product Designer at FinStack",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "The Figma Design Systems masterclass was world-class. Being able to cancel or reschedule tickets with one click gives total peace of mind.",
    rating: 5,
    eventAttended: "Modern UI/UX Design System Masterclass"
  },
  {
    id: "test-3",
    name: "Amara Okafor",
    role: "Founder & CEO, Horizon Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Found my lead investor at the Venture Velocity pitch summit organized through Eventora. The caliber of professionals and curated networking is unrivaled.",
    rating: 5,
    eventAttended: "Venture Velocity Angel Pitch Summit"
  }
];

export const momentsGalleryData = [
  {
    id: "m-1",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    title: "Global AI Keynote",
    tag: "Main Stage",
    location: "San Francisco, CA"
  },
  {
    id: "m-2",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    title: "Design Sprint & Ideation",
    tag: "Workshop Lab",
    location: "Austin, TX"
  },
  {
    id: "m-3",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    title: "Hackathon Team Jam",
    tag: "Collaboration",
    location: "Seattle, WA"
  },
  {
    id: "m-4",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    title: "Executive Networking Night",
    tag: "VIP Lounge",
    location: "New York, NY"
  },
  {
    id: "m-5",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=80",
    title: "Spatial Computing Lab",
    tag: "Live Demo",
    location: "Berlin, DE"
  },
  {
    id: "m-6",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    title: "Pitch Arena Winners",
    tag: "Standing Ovation",
    location: "London, UK"
  }
];

export const featuredSpeakersData = [
  {
    id: "spk-1",
    name: "Dr. Elena Vance",
    role: "Chief AI Scientist",
    company: "DeepNeural Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    topic: "Autonomous Agent Swarms",
    badge: "Keynote"
  },
  {
    id: "spk-2",
    name: "Marcus Sterling",
    role: "VP of Engineering",
    company: "Veloce Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    topic: "Sub-10ms Model Serving",
    badge: "Masterclass"
  },
  {
    id: "spk-3",
    name: "Priya Sharma",
    role: "Design Director",
    company: "StudioForm",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    topic: "Modern Design Systems",
    badge: "Interactive Lab"
  },
  {
    id: "spk-4",
    name: "David K. Vance",
    role: "Managing Partner",
    company: "Apex Ventures",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    topic: "Venture Velocity & Pitching",
    badge: "Fireside Chat"
  },
  {
    id: "spk-5",
    name: "Aria Chen",
    role: "Head of AI Platform",
    company: "Synthetix AI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    topic: "Fine-Tuning Open Source LLMs",
    badge: "Code Clinic"
  },
  {
    id: "spk-6",
    name: "Tariq Mansoor",
    role: "Principal SecOps Engineer",
    company: "Fortress Zero",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    topic: "Zero-Trust Cloud Defense",
    badge: "Cyber Lab"
  }
];


