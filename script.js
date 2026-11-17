/**
 * STACKLY / EVENTORA — High Performance Client Engine
 * Data, State Management (localStorage), Real-time Seats, Modals, Search & GSAP Transitions
 */

const LOCAL_STORAGE_EVENTS_KEY = 'eventora_events_data_v2';
const LOCAL_STORAGE_REG_KEY = 'eventora_user_registrations_v1';

// Initial Events Database
const INITIAL_EVENTS = [
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
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "Silicon Valley AI Consortium",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fm=webp&fit=crop&w=160&q=55",
      role: "Lead Tech Organizer"
    },
    shortDescription: "Join 1,000+ engineers, researchers, and tech pioneers to dive deep into multimodal LLMs, agentic workflows, and future computing paradigms.",
    description: "The Global AI & Next-Gen Machine Learning Summit brings together the foremost innovators, researchers, and engineering leaders shaping autonomous systems. Over a packed single day, you'll experience hands-on technical keynotes, architecture deep-dives, live coding masterclasses, and an executive networking lounge.",
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
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=webp&fit=crop&w=450&q=55",
        bio: "Pioneered neural architecture search algorithms and authored foundational papers on agent collaboration."
      },
      {
        name: "Marcus Sterling",
        role: "VP of Engineering",
        company: "Veloce Systems",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=webp&fit=crop&w=450&q=55",
        bio: "Specializes in high-throughput distributed model serving and edge tensor processing units."
      },
      {
        name: "Aria Chen",
        role: "Head of AI Platform",
        company: "Synthetix AI",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fm=webp&fit=crop&w=450&q=55",
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
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "PixelCraft Design Guild",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=webp&fit=crop&w=160&q=55",
      role: "Design Educator Community"
    },
    shortDescription: "Master scalable design tokens, dynamic auto-layout components, and developer handoff workflows in an immersive live Figma workshop.",
    description: "Design systems are the backbone of modern digital products. This intensive masterclass takes you through creating production-grade design systems in Figma from scratch.",
    highlights: [
      "Access to an exclusive 400+ token enterprise Figma starter kit",
      "Real-time co-designing session with peer critiques",
      "Automating token sync with GitHub and CSS/Tailwind exports",
      "Certificate of Design System Mastery upon completion"
    ],
    schedule: [
      { time: "10:00 AM", title: "Foundations: Design Tokens, Typography Scales & Spacing", speaker: "Siddharth Rao" },
      { time: "11:30 AM", title: "Building Complex Auto-Layout Component Libraries", speaker: "Siddharth Rao" },
      { time: "01:45 PM", title: "Figma Variables, Modes & Dark/Light Theming", speaker: "Camila Gomez" }
    ],
    speakers: [
      {
        name: "Siddharth Rao",
        role: "Principal Product Designer",
        company: "Stripe",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=webp&fit=crop&w=450&q=55",
        bio: "Led design system overhauls for fintech apps used by over 50 million global customers."
      }
    ],
    prerequisites: "Basic familiarity with Figma interface and UI design fundamentals.",
    tags: ["Figma", "Design Systems", "UI/UX", "Product Design"]
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
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "Apex Capital Partners",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=webp&fit=crop&w=160&q=55",
      role: "Venture Accelerator"
    },
    shortDescription: "Meet 40+ active venture capitalists, pitch your seed or Series A concept, and learn scale strategies from unicorn founders.",
    description: "Venture Velocity is the premier East Coast nexus for ambitious early-stage founders and venture capital decision makers.",
    highlights: [
      "Curated 1-on-1 investor matching tables for qualifying startups",
      "Live term sheet negotiation workshop with Silicon Valley lawyers",
      "Unicorn Founder Panel: Lessons from $0 to $100M ARR"
    ],
    schedule: [
      { time: "09:30 AM", title: "Keynote: Macro Trends in 2027 Venture Allocations", speaker: "Victoria Sterling" },
      { time: "11:00 AM", title: "Founder Pitch Arena: Top 10 Seed Finalists", speaker: "Selected Founders" }
    ],
    speakers: [
      {
        name: "Victoria Sterling",
        role: "Managing Partner",
        company: "Horizon Ventures",
        avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?fm=webp&fit=crop&w=450&q=55",
        bio: "Seed investor in 14 unicorns with over $1.8B in early stage tech assets under management."
      }
    ],
    prerequisites: "Founders, investors, corporate strategists, or growth operators.",
    tags: ["Startups", "Venture Capital", "Fundraising", "Pitching"]
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
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "Modern Web Academy",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fm=webp&fit=crop&w=160&q=55",
      role: "Open Source Community"
    },
    shortDescription: "A completely free deep-dive into React Server Components, streaming SSR, Core Web Vitals optimization, and enterprise architecture.",
    description: "Level up your frontend engineering toolkit in this free community bootcamp. We break down the mental models behind React 19, Server Actions, and partial prerendering.",
    highlights: [
      "100% Free interactive community workshop with real code repos",
      "Hands-on building of a full-stack streaming application",
      "Core Web Vitals cheat sheets & templates included"
    ],
    schedule: [
      { time: "11:00 AM", title: "React Mental Models: Server vs Client Components", speaker: "Alex Rivera" },
      { time: "02:30 PM", title: "Core Web Vitals: Crushing INP, LCP, and CLS", speaker: "Priya Sharma" }
    ],
    speakers: [
      {
        name: "Alex Rivera",
        role: "Staff Frontend Architect",
        company: "Vercel Alumni",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=webp&fit=crop&w=450&q=55",
        bio: "Open source contributor with over 12 years of web platform engineering experience."
      }
    ],
    prerequisites: "Good foundation in JavaScript and basic React component architecture.",
    tags: ["React", "Next.js", "Web Performance", "JavaScript"]
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "Elevate Media Collective",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=webp&fit=crop&w=160&q=55",
      role: "Growth Agency Network"
    },
    shortDescription: "Discover how top consumer brands craft irresistible narratives, master algorithm changes on short-form video, and build high-conversion funnels.",
    description: "In an era of endless digital noise, authentic storytelling is your sharpest competitive edge. Learn scriptwriting, psychology copy, and analytics.",
    highlights: ["Viral campaign teardowns", "Hook-writing clinic", "Swipe files included"],
    schedule: [{ time: "09:30 AM", title: "The Psychology of Viral Attention in 2027", speaker: "Maya Lin" }],
    speakers: [{
      name: "Maya Lin",
      role: "Chief Brand Strategist",
      company: "Narrative Co.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fm=webp&fit=crop&w=450&q=55",
      bio: "Scaled organic TikTok and Instagram community to 4M+ followers."
    }],
    prerequisites: "Marketing managers, founders, content creators, and digital strategists.",
    tags: ["Marketing", "Storytelling", "Social Media", "Branding"]
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
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "Aperture Guild of Los Angeles",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=webp&fit=crop&w=160&q=55",
      role: "Visual Arts Society"
    },
    shortDescription: "Work with professional fashion models, high-end Profoto continuous and strobe lighting, and learn color-grading in an intimate studio setting.",
    description: "Step onto a professional photography stage in downtown Los Angeles. In this boutique workshop, you will master lighting ratios and editorial retouching.",
    highlights: ["Strict 25-person cap", "Profoto lighting gear", "Editorial preset pack included"],
    schedule: [{ time: "10:00 AM", title: "Lighting Physics & Modifiers", speaker: "Julian Thorne" }],
    speakers: [{
      name: "Julian Thorne",
      role: "Editorial Fashion Photographer",
      company: "Thorne Imagery",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=webp&fit=crop&w=450&q=55",
      bio: "Regular contributor to Vanity Fair, Harper's Bazaar, and GQ."
    }],
    prerequisites: "Bring your DSLR or Mirrorless camera.",
    tags: ["Photography", "Studio Lighting", "Portraits", "Creative"]
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
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "Summit Wellness Institute",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=webp&fit=crop&w=160&q=55",
      role: "Mind-Body Science Lab"
    },
    shortDescription: "Reclaim your mental clarity, learn clinical breathwork techniques, and design daily habits to prevent burnout in high-demand environments.",
    description: "Designed specifically for knowledge workers, entrepreneurs, and busy professionals, this one-day retreat translates neuroscience into daily rituals.",
    highlights: ["HRV biofeedback", "Somatic release", "Anti-inflammatory organic lunch included"],
    schedule: [{ time: "09:00 AM", title: "Opening Tea & Grounding", speaker: "Dr. Kaelen Cruz" }],
    speakers: [{
      name: "Dr. Kaelen Cruz",
      role: "Neuroscientist & Clinical Psychologist",
      company: "MindBody Lab",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fm=webp&fit=crop&w=450&q=55",
      bio: "Specializes in stress biomarkers and executive cognitive health."
    }],
    prerequisites: "Open to all experience levels.",
    tags: ["Wellness", "Mental Health", "Mindfulness", "Breathwork"]
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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "CyberShield Institute",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=webp&fit=crop&w=160&q=55",
      role: "Security Research Collective"
    },
    shortDescription: "Experience real-world red team attack simulations and architect resilient Zero-Trust defenses in an interactive hands-on virtual cyber range.",
    description: "Threat landscapes are evolving faster than ever. This intensive engineering workshop puts you directly in the hot seat of modern incident response.",
    highlights: ["Live CTF browser sandbox", "Supply chain attack triage", "Zero-Trust blueprint"],
    schedule: [{ time: "09:00 AM", title: "Modern Attack Vectors & Defense", speaker: "Tariq Mansoor" }],
    speakers: [{
      name: "Tariq Mansoor",
      role: "Principal SecOps Engineer",
      company: "Fortress Zero",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=webp&fit=crop&w=450&q=55",
      bio: "Certified ethical hacker specializing in cloud perimeter hardening."
    }],
    prerequisites: "Basic familiarity with Linux command line and cloud concepts.",
    tags: ["Cybersecurity", "Zero Trust", "Cloud", "Security"]
  },
  {
    id: "evt-109",
    title: "Executive Leadership & Product Vision Masterclass 2027",
    tagline: "Strategic Alignment, High-Output Management & Boardroom Influence",
    category: "Leadership & Strategy",
    featured: true,
    price: 120,
    isFree: false,
    date: "2027-02-12",
    displayDate: "Friday, Feb 12, 2027",
    time: "10:00 AM - 04:30 PM CST",
    mode: "Hybrid",
    location: "Executive Innovation Center, Chicago, IL & Virtual Stream",
    venueAddress: "300 N LaSalle Dr, Chicago, IL 60654",
    totalSeats: 150,
    availableSeats: 24,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "Global Executive Syndicate",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=webp&fit=crop&w=160&q=55",
      role: "Leadership Council"
    },
    shortDescription: "Master the frameworks utilized by Fortune 100 executives to navigate organizational hypergrowth and build sustainable competitive advantage.",
    description: "An intensive masterclass designed for senior directors, VPs, and founders scaling complex cross-functional teams and strategic initiatives.",
    highlights: ["Executive decision simulations", "Strategic positioning blueprints", "Peer advisory cohort"],
    schedule: [{ time: "10:00 AM", title: "Strategic Architecture & Governance", speaker: "Dr. Elena Vance" }],
    speakers: [{
      name: "Dr. Elena Vance",
      role: "Executive Advisor",
      company: "DeepNeural Labs",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=webp&fit=crop&w=450&q=55",
      bio: "Advises Tier-1 tech leadership on strategic organizational agility."
    }],
    prerequisites: "Designed for mid-to-senior product, tech, or business leads.",
    tags: ["Leadership", "Strategy", "Management", "Executive"]
  },
  {
    id: "evt-110",
    title: "Open-Source AI & Autonomous Agents Global Hackathon",
    tagline: "Collaborate, Build, and Deploy Multi-Agent Orchestrations",
    category: "Technology",
    featured: true,
    price: 0,
    isFree: true,
    date: "2027-02-20",
    displayDate: "Saturday, Feb 20, 2027",
    time: "08:00 AM - 08:00 PM EST",
    mode: "Online",
    location: "Global Virtual Developer Stage & Discord Hack-Lounge",
    venueAddress: "Online Interactive Stream & CTF Hack Hub",
    totalSeats: 600,
    availableSeats: 92,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "OpenSource Agents Alliance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fm=webp&fit=crop&w=160&q=55",
      role: "Community Lead"
    },
    shortDescription: "Compete alongside 600+ developers worldwide to craft autonomous agent systems and agentic workflows with $25k in community grants.",
    description: "Join the largest hands-on autonomous agents virtual hackathon of 2027. Build working demos, receive mentor feedback, and showcase your team.",
    highlights: ["$25,000 project grant pool", "1-on-1 mentor office hours", "Direct recruiter networking"],
    schedule: [{ time: "08:00 AM", title: "Opening Keynote & Team Matching", speaker: "OpenSource Alliance" }],
    speakers: [{
      name: "Aria Chen",
      role: "Core Contributor",
      company: "LangCore Open Hub",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fm=webp&fit=crop&w=450&q=55",
      bio: "Maintainer of open source agentic tooling and prompt evaluation suites."
    }],
    prerequisites: "Open to all software developers, researchers, and designers.",
    tags: ["AI", "Hackathon", "Open Source", "Free"]
  },
  {
    id: "evt-111",
    title: "Creative Direction & Brand Identity Architecture",
    tagline: "Translating Brand Ethos into Unforgettable Multi-Sensory Systems",
    category: "Design",
    featured: false,
    price: 0,
    isFree: true,
    date: "2027-03-05",
    displayDate: "Friday, Mar 5, 2027",
    time: "01:00 PM - 06:00 PM EST",
    mode: "Hybrid",
    location: "SoHo Arts & Creative Pavilion, New York, NY",
    venueAddress: "480 Broadway, New York, NY 10013",
    totalSeats: 200,
    availableSeats: 28,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "Metropolitan Design Circle",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=webp&fit=crop&w=160&q=55",
      role: "Design Curator"
    },
    shortDescription: "A curated clinic on crafting cohesive multi-channel brand design systems, luxury typography, and dynamic visual narrative campaigns.",
    description: "Explore the nuances of high-impact visual identity systems. From kinetic typography to design token architecture.",
    highlights: ["Live design system critiques", "Spatial typography workshops", "Portfolio review lounge"],
    schedule: [{ time: "01:00 PM", title: "Brand Identity Fundamentals", speaker: "Julian Vance" }],
    speakers: [{
      name: "Julian Vance",
      role: "Executive Creative Director",
      company: "Atelier Brand House",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=webp&fit=crop&w=450&q=55",
      bio: "Award-winning brand architect with over 15 Cannes Lions honors."
    }],
    prerequisites: "Basic experience with Figma or Illustrator.",
    tags: ["Design", "Branding", "Creative", "Figma", "Free"]
  },
  {
    id: "evt-112",
    title: "Next-Gen Fintech & Decentralized Infrastructure Forum",
    tagline: "High-Frequency Settlement, Smart Treasury & Regulatory Frameworks",
    category: "Business",
    featured: false,
    price: 175,
    isFree: false,
    date: "2027-03-18",
    displayDate: "Thursday, Mar 18, 2027",
    time: "09:30 AM - 05:00 PM EST",
    mode: "In-Person",
    location: "Financial District Summit Hall, Boston, MA",
    venueAddress: "100 Federal St, Boston, MA 02110",
    totalSeats: 250,
    availableSeats: 38,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?fm=webp&fit=crop&w=650&q=55",
    bannerImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&fit=crop&w=650&q=55",
    organizer: {
      name: "New England Fintech Council",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=webp&fit=crop&w=160&q=55",
      role: "Capital & Tech Host"
    },
    shortDescription: "Meet institutional leaders, quantitative architects, and regulatory advisors shaping the next generation of modern fintech rails.",
    description: "Connect with over 250 financial technology innovators, seed investors, and compliance heads for an in-depth exploration of payment networks.",
    highlights: ["Real-time settlement architectures", "Fintech venture pitch showcase", "Executive dinner network"],
    schedule: [{ time: "09:30 AM", title: "Institutional Infrastructure Overview", speaker: "Fintech Keynote" }],
    speakers: [{
      name: "Marcus Sterling",
      role: "Head of Infrastructure",
      company: "Apex Ledger Capital",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=webp&fit=crop&w=450&q=55",
      bio: "Architects institutional asset transfer rails and liquidity engines."
    }],
    prerequisites: "Familiarity with financial systems or business development.",
    tags: ["Business", "Fintech", "Finance", "Investment"]
  }
];

const CATEGORIES_DATA = [
  { 
    name: "Technology", 
    count: 2, 
    color: "#7357E8", 
    icon: "Cpu", 
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?fm=webp&fit=crop&w=450&q=55",
    desc: "AI, cloud architectures, developer bootcamps & software innovations." 
  },
  { 
    name: "Design", 
    count: 1, 
    color: "#FF796C", 
    icon: "Palette", 
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?fm=webp&fit=crop&w=450&q=55",
    desc: "UI/UX, design systems, design thinking & creative direction." 
  },
  { 
    name: "Business", 
    count: 1, 
    color: "#0F111A", 
    icon: "Briefcase", 
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?fm=webp&fit=crop&w=450&q=55",
    desc: "Venture capital, startup pitching, leadership & executive scaling." 
  },
  { 
    name: "Education", 
    count: 1, 
    color: "#0D9488", 
    icon: "GraduationCap", 
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?fm=webp&fit=crop&w=450&q=55",
    desc: "Coding bootcamps, masterclasses, academic webinars & skills training." 
  },
  { 
    name: "Marketing", 
    count: 1, 
    color: "#EC4899", 
    icon: "Megaphone", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&w=450&q=55",
    desc: "Storytelling, viral social media, growth hacking & brand building." 
  },
  { 
    name: "Photography", 
    count: 1, 
    color: "#F59E0B", 
    icon: "Camera", 
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?fm=webp&fit=crop&w=450&q=55",
    desc: "Editorial portraiture, studio lighting, cinematic retouching & framing." 
  },
  { 
    name: "Health & Wellness", 
    count: 1, 
    color: "#10B981", 
    icon: "HeartPulse", 
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?fm=webp&fit=crop&w=450&q=55",
    desc: "Breathwork, cognitive focus, stress resilience & holistic balance." 
  },
  { 
    name: "Leadership & Strategy", 
    count: 2, 
    color: "#6366F1", 
    icon: "Target", 
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=webp&fit=crop&w=450&q=55",
    desc: "Executive decision making, agile leadership, board strategy & product vision." 
  }
];

const MOMENTS_GALLERY_DATA = [
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?fm=webp&fit=crop&w=650&q=55",
    title: "Global AI Keynote",
    tag: "Main Stage",
    location: "San Francisco, CA"
  },
  {
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?fm=webp&fit=crop&w=650&q=55",
    title: "Design Sprint & Ideation",
    tag: "Workshop Lab",
    location: "Austin, TX"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=webp&fit=crop&w=650&q=55",
    title: "Hackathon Team Jam",
    tag: "Collaboration",
    location: "Seattle, WA"
  },
  {
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?fm=webp&fit=crop&w=650&q=55",
    title: "Executive Networking Night",
    tag: "VIP Lounge",
    location: "New York, NY"
  },
  {
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?fm=webp&fit=crop&w=650&q=55",
    title: "Spatial Computing Lab",
    tag: "Live Demo",
    location: "Berlin, DE"
  },
  {
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?fm=webp&fit=crop&w=650&q=55",
    title: "Pitch Arena Winners",
    tag: "Standing Ovation",
    location: "London, UK"
  }
];

const FEATURED_SPEAKERS_DATA = [
  {
    name: "Dr. Elena Vance",
    role: "Chief AI Scientist",
    company: "DeepNeural Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=webp&fit=crop&w=450&q=55",
    topic: "Autonomous Agent Swarms",
    badge: "Keynote"
  },
  {
    name: "Marcus Sterling",
    role: "VP of Engineering",
    company: "Veloce Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=webp&fit=crop&w=450&q=55",
    topic: "Sub-10ms Model Serving",
    badge: "Masterclass"
  },
  {
    name: "Priya Sharma",
    role: "Design Director",
    company: "StudioForm",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fm=webp&fit=crop&w=450&q=55",
    topic: "Modern Design Systems",
    badge: "Interactive Lab"
  },
  {
    name: "David K. Vance",
    role: "Managing Partner",
    company: "Apex Ventures",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=webp&fit=crop&w=450&q=55",
    topic: "Venture Velocity & Pitching",
    badge: "Fireside Chat"
  },
  {
    name: "Aria Chen",
    role: "Head of AI Platform",
    company: "Synthetix AI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fm=webp&fit=crop&w=450&q=55",
    topic: "Fine-Tuning Open Source LLMs",
    badge: "Code Clinic"
  },
  {
    name: "Tariq Mansoor",
    role: "Principal SecOps Engineer",
    company: "Fortress Zero",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=webp&fit=crop&w=450&q=55",
    topic: "Zero-Trust Cloud Defense",
    badge: "Cyber Lab"
  }
];

const STATS_DATA = [
  { number: "120+", label: "Active Summits & Workshops", sub: "Across 14 global tech hubs" },
  { number: "45k+", label: "Registered Attendees", sub: "From 60+ countries" },
  { number: "350+", label: "Industry Leaders & Mentors", sub: "Vetted top 1% practitioners" },
  { number: "99.4%", label: "Attendee Satisfaction", sub: "Based on 18k+ post-event reviews" }
];

const TESTIMONIALS_DATA = [
  {
    name: "Sophia Martinez",
    role: "Senior AI Engineer at NeuralVibe",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=webp&fit=crop&w=160&q=55",
    quote: "Eventora transformed how I discover high-signal tech workshops. Registering for the AI Summit took 30 seconds, and the digital pass made on-site entry seamless.",
    rating: 5,
    eventAttended: "Global AI & Machine Learning Summit"
  },
  {
    name: "Liam Chen",
    role: "Lead Product Designer at FinStack",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=webp&fit=crop&w=160&q=55",
    quote: "The Figma Design Systems masterclass was world-class. Being able to cancel or reschedule tickets with one click gives total peace of mind.",
    rating: 5,
    eventAttended: "Modern UI/UX Design System Masterclass"
  },
  {
    name: "Amara Okafor",
    role: "Founder & CEO, Horizon Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fm=webp&fit=crop&w=160&q=55",
    quote: "Found my lead investor at the Venture Velocity pitch summit organized through Eventora. The caliber of professionals and curated networking is unrivaled.",
    rating: 5,
    eventAttended: "Venture Velocity Angel Pitch Summit"
  }
];

// State Helpers
function getStoredEvents() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_EVENTS_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return INITIAL_EVENTS;
}

function saveStoredEvents(events) {
  try {
    localStorage.setItem(LOCAL_STORAGE_EVENTS_KEY, JSON.stringify(events));
  } catch (e) {}
}

function getStoredRegistrations() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_REG_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return [];
}

function saveStoredRegistrations(registrations) {
  try {
    localStorage.setItem(LOCAL_STORAGE_REG_KEY, JSON.stringify(registrations));
  } catch (e) {}
}

function updateBadgeCount() {
  const regs = getStoredRegistrations();
  const badges = document.querySelectorAll('.reg-counter-badge');
  badges.forEach((b) => (b.textContent = regs.length));
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Global Preloader Engine (Recipe Discovery Suite)
function initPreloader() {
  const preloader = document.getElementById("site-preloader");
  if (!preloader) return;

  const counter = document.getElementById("preloader-counter");
  const bar = document.getElementById("preloader-bar-fill");

  let progress = 0;
  const duration = 1100; // 1.1s smooth counter
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    progress = Math.min(100, Math.round((elapsed / duration) * 100));
    if (counter) counter.textContent = progress + "%";
    if (bar) bar.style.width = progress + "%";

    if (progress < 100) {
      requestAnimationFrame(updateCounter);
    } else {
      setTimeout(() => {
        if (window.gsap) {
          gsap.to(preloader, {
            yPercent: -100,
            duration: 0.75,
            ease: "power4.inOut",
            onComplete: () => {
              preloader.style.display = "none";
              if (window.AOS) AOS.refresh();
            }
          });
        } else {
          preloader.classList.add("preloader-hidden");
          setTimeout(() => {
            preloader.style.display = "none";
            if (window.AOS) AOS.refresh();
          }, 500);
        }
      }, 150);
    }
  }

  requestAnimationFrame(updateCounter);
}

// ========================================================
// INTERACTIVE 3D PHYSICS & TILT SUITE (NO STATIC CARDS)
// ========================================================
function initCardTilt() {
  const cards = document.querySelectorAll('.ui-ux-card, .event-card, .category-card, .feature-card, .bento-card, .speaker-card, .moment-card');
  cards.forEach(card => {
    if (card._hasTilt) return;
    card._hasTilt = true;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
    });
  });
}

// Toggle Save / Bookmark Event
window.toggleSaveEvent = function(e, id) {
  e.preventDefault();
  e.stopPropagation();
  const btn = e.currentTarget;
  const isSaved = btn.classList.toggle('active');
  const icon = btn.querySelector('.fav-icon');
  if (icon) {
    icon.style.transform = 'scale(1.35)';
    setTimeout(() => { icon.style.transform = 'scale(1)'; }, 250);
  }
  showToast(isSaved ? 'Bookmark saved to your favorites!' : 'Removed from bookmarks');
};

// Global Nav & Modals
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  if (window.AOS) {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }
  updateBadgeCount();
  initCardTilt();

  // Re-run tilt periodically or on DOM mutations to capture dynamic cards
  setTimeout(initCardTilt, 500);
  setTimeout(initCardTilt, 1200);

  // Sticky Navbar
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) {
      if (window.scrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
  });

  // Hamburger Menu & Mobile Drawer Auto-Provisioning (All Pages)
  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger) {
    let drawer = document.getElementById('mobile-drawer');
    let backdrop = document.getElementById('mobile-backdrop');

    // Auto-create drawer and backdrop if absent on any subpage
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'mobile-nav-backdrop';
      backdrop.id = 'mobile-backdrop';
      document.body.appendChild(backdrop);
    }

    if (!drawer) {
      drawer = document.createElement('aside');
      drawer.className = 'mobile-drawer';
      drawer.id = 'mobile-drawer';
      const path = window.location.pathname;
      const isHome = path.endsWith('index.html') || path === '/' || path.endsWith('/');
      const isEvents = path.includes('events.html');
      const isReg = path.includes('registrations.html');
      drawer.innerHTML = `
        <div class="mobile-drawer-header">
          <a href="index.html" class="nav-logo">
            <img src="stackly-logo.webp" alt="Stackly" class="brand-logo-img" style="height: 32px;">
          </a>
          <button class="close-drawer-btn" id="close-drawer-btn" aria-label="Close menu">&times;</button>
        </div>
        <ul class="mobile-nav-menu">
          <li class="mobile-nav-item"><a href="index.html" class="${isHome ? 'active' : ''}"><span>Home</span> →</a></li>
          <li class="mobile-nav-item"><a href="events.html" class="${isEvents ? 'active' : ''}"><span>Explore Events</span> →</a></li>
          <li class="mobile-nav-item"><a href="registrations.html" class="${isReg ? 'active' : ''}"><span>My Registrations</span> (<span class="reg-counter-badge">0</span>)</a></li>
        </ul>
        <div style="margin-top:auto; padding-top:20px;">
          <a href="events.html" class="btn btn-primary" style="width:100%;">Browse All Events</a>
        </div>
      `;
      document.body.appendChild(drawer);
      updateBadgeCount();
    }

    const showMenu = (e) => {
      if (e) e.preventDefault();
      drawer.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const hideMenu = () => {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', showMenu);
    hamburger.addEventListener('touchstart', showMenu, { passive: false });

    backdrop.addEventListener('click', hideMenu);
    backdrop.addEventListener('touchstart', hideMenu, { passive: true });

    drawer.addEventListener('click', (e) => {
      if (e.target.closest('#close-drawer-btn') || e.target.closest('.close-drawer-btn')) {
        hideMenu();
      }
      if (e.target.closest('.mobile-nav-item a') || e.target.closest('a')) {
        hideMenu();
      }
    });
  }

  // Quick Search trigger
  const searchBtn = document.getElementById('nav-search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchClose = document.getElementById('close-search-btn');
  const searchInput = document.getElementById('search-modal-input');
  const searchList = document.getElementById('search-modal-results');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.add('open');
      if (searchInput) searchInput.focus();
    });
    if (searchClose) searchClose.addEventListener('click', () => searchModal.classList.remove('open'));
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) searchModal.classList.remove('open');
    });

    if (searchInput && searchList) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        const events = getStoredEvents();
        if (!q) {
          searchList.innerHTML = `<p style="text-align:center; padding: 24px; color: var(--text-secondary);">Start typing to find summits, bootcamps, or speakers...</p>`;
          return;
        }
        const matches = events.filter(ev =>
          ev.title.toLowerCase().includes(q) ||
          ev.category.toLowerCase().includes(q) ||
          ev.location.toLowerCase().includes(q) ||
          ev.tags.some(t => t.toLowerCase().includes(q))
        );
        if (matches.length === 0) {
          searchList.innerHTML = `<p style="text-align:center; padding: 24px; color: var(--text-secondary);">No matching events found for "${q}".</p>`;
          return;
        }
        searchList.innerHTML = matches.map(ev => `
          <div class="search-result-item" onclick="window.location.href='event-details.html?id=${ev.id}'">
            <img src="${ev.image}" alt="${ev.title}" class="search-thumb">
            <div>
              <span class="badge-category badge-${ev.category.replace(/\s+/g, '-')}" style="font-size:0.7rem; padding: 2px 8px;">${ev.category}</span>
              <div style="font-weight:700; font-size: 0.95rem; color: var(--primary); margin: 3px 0;">${ev.title}</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">${ev.displayDate} • ${ev.isFree ? 'Free' : '$' + ev.price}</div>
            </div>
          </div>
        `).join('');
      });
    }
  }

  // Registration Modal handling
  initRegistrationModal();
});

// Registration Modal Engine
function initRegistrationModal() {
  const regModal = document.getElementById('registration-modal');
  const regForm = document.getElementById('reg-form');
  const regClose = document.getElementById('close-reg-modal');

  if (regClose && regModal) {
    regClose.addEventListener('click', () => regModal.classList.remove('open'));
    regModal.addEventListener('click', (e) => {
      if (e.target === regModal) regModal.classList.remove('open');
    });
  }

  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const eventId = document.getElementById('reg-event-id').value;
      const fullName = document.getElementById('reg-fullname').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const phone = document.getElementById('reg-phone').value.trim();
      const seats = parseInt(document.getElementById('reg-seats').value, 10);
      const role = document.getElementById('reg-role').value;

      if (!fullName || !email || !phone) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      const events = getStoredEvents();
      const target = events.find(ev => ev.id === eventId);
      if (!target) {
        showToast('Event not found.', 'error');
        return;
      }

      if (target.availableSeats < seats) {
        showToast(`Only ${target.availableSeats} seat(s) remaining!`, 'error');
        return;
      }

      // Decrement seats
      target.availableSeats -= seats;
      saveStoredEvents(events);

      // Generate Ticket
      const ticketId = `EVT-PASS-${Math.floor(100000 + Math.random() * 900000)}`;
      const newTicket = {
        ticketId,
        eventId: target.id,
        eventTitle: target.title,
        eventCategory: target.category,
        displayDate: target.displayDate,
        time: target.time,
        location: target.location,
        venueAddress: target.venueAddress,
        mode: target.mode,
        image: target.image,
        fullName,
        email,
        phone,
        seats,
        role,
        price: target.isFree ? 0 : target.price * seats,
        isFree: target.isFree,
        status: 'Confirmed'
      };

      const registrations = getStoredRegistrations();
      registrations.unshift(newTicket);
      saveStoredRegistrations(registrations);

      updateBadgeCount();
      regModal.classList.remove('open');

      // Trigger Confetti if available
      if (typeof confetti === 'function') {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      }

      showToast(`Registration confirmed for ${target.title}!`, 'success');
      showTicketPassModal(newTicket);
    });
  }
}

function openBookingModal(eventId) {
  const events = getStoredEvents();
  const target = events.find(ev => ev.id === eventId);
  if (!target) return;

  const modal = document.getElementById('registration-modal');
  if (!modal) return;

  document.getElementById('reg-event-id').value = target.id;
  document.getElementById('reg-event-name-display').textContent = target.title;
  document.getElementById('reg-event-badge').textContent = target.category;
  document.getElementById('reg-event-badge').className = `badge-category badge-${target.category.replace(/\s+/g, '-')}`;

  const seatsSelect = document.getElementById('reg-seats');
  const maxSeats = Math.min(5, Math.max(1, target.availableSeats));
  seatsSelect.innerHTML = Array.from({ length: maxSeats }, (_, i) => i + 1)
    .map(n => `<option value="${n}">${n} ${n === 1 ? 'Seat' : 'Seats'}</option>`)
    .join('');

  const updatePriceDisplay = () => {
    const s = parseInt(seatsSelect.value, 10);
    const total = target.isFree ? 'FREE' : `$${target.price * s}`;
    document.getElementById('order-summary-price').textContent = total;
    document.getElementById('order-summary-detail').textContent = `${s} × ${target.isFree ? 'Free Admission' : '$' + target.price + ' per seat'}`;
  };

  seatsSelect.onchange = updatePriceDisplay;
  updatePriceDisplay();

  modal.classList.add('open');
}

function showTicketPassModal(ticket) {
  const modal = document.getElementById('ticket-modal');
  if (!modal) return;

  document.getElementById('ticket-modal-id').textContent = ticket.ticketId;
  document.getElementById('ticket-modal-title').textContent = ticket.eventTitle;
  document.getElementById('ticket-modal-tag').textContent = `${ticket.eventCategory} • ${ticket.mode} Edition`;
  document.getElementById('ticket-modal-name').textContent = ticket.fullName;
  document.getElementById('ticket-modal-role').textContent = ticket.role;
  document.getElementById('ticket-modal-date').textContent = ticket.displayDate;
  document.getElementById('ticket-modal-time').textContent = ticket.time;
  document.getElementById('ticket-modal-seats').textContent = `${ticket.seats} ${ticket.seats === 1 ? 'Attendee' : 'Attendees'} (${ticket.isFree ? 'Free' : '$' + ticket.price})`;
  document.getElementById('ticket-modal-location').textContent = ticket.location;
  document.getElementById('ticket-modal-address').textContent = ticket.venueAddress;

  const closeBtn = document.getElementById('close-ticket-modal');
  if (closeBtn) closeBtn.onclick = () => modal.classList.remove('open');
  modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('open'); };

  modal.classList.add('open');
}

// Render Event Card Component with High-End UI/UX Design & Dynamic Progress
function createEventCardHTML(ev) {
  const total = ev.totalSeats || 100;
  const booked = Math.max(0, total - ev.availableSeats);
  const bookedPercent = Math.min(100, Math.max(15, Math.round((booked / total) * 100)));
  const isLow = ev.availableSeats > 0 && ev.availableSeats <= 15;
  const isSoldOut = ev.availableSeats === 0;

  return `
    <article class="event-card ui-ux-card" data-tilt="true">
      <div class="event-card-media">
        <img src="${ev.image}" alt="${ev.title}" class="event-card-img" loading="lazy">
        <div class="event-card-overlay"></div>
        <div class="card-shimmer-sweep"></div>
        
        <!-- Top Floating Badges -->
        <div class="event-card-badges">
          <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
            <span class="badge-category badge-${ev.category.replace(/\s+/g, '-')}">${ev.category}</span>
            <span class="mode-tag"><span class="mode-dot"></span>${ev.mode}</span>
          </div>
          <button class="card-fav-btn" onclick="toggleSaveEvent(event, '${ev.id}')" aria-label="Save Event" title="Bookmark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fav-icon">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <!-- Price Tag -->
        <div class="price-tag ${ev.isFree ? 'free' : ''}">
          ${ev.isFree ? '✦ Free Pass' : '<strong>$' + ev.price + '</strong><span class="price-suffix">/pass</span>'}
        </div>

        <!-- Quick View Slide-up Overlay Action -->
        <a href="event-details.html?id=${ev.id}" class="card-media-quick-action">
          <span>Quick View Details</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>

      <div class="event-card-body">
        <div class="event-organizer-row">
          <img src="${ev.organizer.avatar}" alt="${ev.organizer.name}" class="event-organizer-avatar">
          <div class="event-organizer-info">
            <span class="organizer-label">Verified Host</span>
            <span class="organizer-name">${ev.organizer.name} <span class="verified-check">✓</span></span>
          </div>
        </div>

        <a href="event-details.html?id=${ev.id}" class="card-title-link">
          <h3 class="event-card-title">${ev.title}</h3>
        </a>

        <!-- Interactive Meta Chips -->
        <div class="event-card-chips">
          <div class="event-chip">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span>${ev.displayDate.split(',')[1] || ev.displayDate}</span>
          </div>
          <div class="event-chip">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${ev.time.split('-')[0].trim()}</span>
          </div>
          <div class="event-chip">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${ev.location.split(',')[0]}</span>
          </div>
        </div>

        <!-- Dynamic Capacity Visualization Bar -->
        <div class="card-capacity-box">
          <div class="capacity-labels">
            <span class="capacity-status-text ${isLow ? 'low' : ''}">
              <span class="pulse-status-dot ${isLow ? 'low-dot' : ''}"></span>
              ${isSoldOut ? 'Sold Out' : isLow ? `Only ${ev.availableSeats} spots left!` : `${bookedPercent}% Booked`}
            </span>
            <span class="capacity-count">${ev.availableSeats} of ${total} open</span>
          </div>
          <div class="capacity-track">
            <div class="capacity-fill ${isLow ? 'fill-low' : ''}" style="width: ${bookedPercent}%;"></div>
          </div>
        </div>

        <div class="event-card-footer">
          <div class="footer-price-col">
            <span class="footer-price-sub">${ev.isFree ? 'Zero Fee' : 'Starting from'}</span>
            <span class="footer-price-val">${ev.isFree ? 'Free' : '$' + ev.price}</span>
          </div>
          <a href="event-details.html?id=${ev.id}" class="btn btn-primary btn-sm card-action-btn">
            <span>Reserve Spot</span>
            <span class="btn-arrow-slide">→</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

// High-Clarity Distinct Category SVG Vector Icons
function getCategoryIconSVG(categoryName) {
  switch (categoryName) {
    case 'Technology':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
    case 'Design':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="#FFFFFF"></circle><circle cx="17.5" cy="10.5" r=".5" fill="#FFFFFF"></circle><circle cx="8.5" cy="7.5" r=".5" fill="#FFFFFF"></circle><circle cx="6.5" cy="12.5" r=".5" fill="#FFFFFF"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`;
    case 'Business':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`;
    case 'Education':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`;
    case 'Marketing':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>`;
    case 'Photography':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;
    case 'Health & Wellness':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`;
    case 'Leadership & Strategy':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2" fill="#FFFFFF"></circle></svg>`;
    default:
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
  }
}

// Render Visual Category Card
function createCategoryCardHTML(c) {
  return `
    <div class="category-card ui-ux-card" data-tilt="true" onclick="window.location.href='events.html?category=${encodeURIComponent(c.name)}'">
      <div class="category-card-media">
        <img src="${c.image}" alt="${c.name}" class="category-card-img" loading="lazy">
        <div class="category-card-overlay"></div>
        <span class="category-badge-count">${c.count} ${c.count === 1 ? 'Event' : 'Events'}</span>
        <div class="category-icon-floating" style="background:${c.color};" title="${c.name}">
          ${getCategoryIconSVG(c.name)}
        </div>
      </div>
      <div class="category-card-info">
        <h3 class="category-name">${c.name}</h3>
        <p class="category-desc">${c.desc}</p>
        <div class="category-arrow" style="color:${c.color};">
          <span>Explore Track</span>
          <span>→</span>
        </div>
      </div>
    </div>
  `;
}

// Render Moments Gallery
function renderMomentsGalleryHTML() {
  return MOMENTS_GALLERY_DATA.map(m => `
    <div class="moment-card">
      <img src="${m.image}" alt="${m.title}" class="moment-img" loading="lazy">
      <div class="moment-overlay">
        <span class="moment-tag">${m.tag}</span>
        <h4 class="moment-title">${m.title}</h4>
        <div class="moment-location">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${m.location}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Featured Keynote Speakers
function renderSpeakersHTML() {
  return FEATURED_SPEAKERS_DATA.map(s => `
    <div class="speaker-card">
      <div class="speaker-avatar-wrap">
        <img src="${s.avatar}" alt="${s.name}" class="speaker-avatar-img" loading="lazy">
      </div>
      <div class="speaker-details">
        <span class="speaker-badge-pill">${s.badge}</span>
        <h4 class="speaker-name">${s.name}</h4>
        <div class="speaker-role">${s.role} • <strong>${s.company}</strong></div>
        <div class="speaker-topic">
          <span style="color:var(--accent);">✦</span>
          <span>${s.topic}</span>
        </div>
      </div>
    </div>
  `).join('');
}

