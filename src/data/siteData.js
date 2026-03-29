export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Barlow Condensed",
    body: "Inter",
    display: "Barlow Condensed",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "energetic",
  serviceCardStyle: "overlay",
  projectGridStyle: "bento",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "dots",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "JTL Equipment",
    legalName: "JTL Equipment (Pvt) Ltd",
    tagline: "Power Behind the Build",
    description:
      "Zimbabwe's leading supplier of heavy construction equipment, earthmoving machinery, and industrial plant hire. We keep Africa's biggest projects moving.",
    phone: "",
    phoneRaw: "",
    whatsappNumber: "",
    email: "info@jtlequipment.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.6,
    ratingRounded: 5,
    reviewCount: 23,
    established: "2010",
    yearsExperience: "14+",
    projectsCompleted: "500+",
    employees: "80+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "7:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "jtl-equipment-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "JTL",
    logoLine2: "Equipment",
  },

  hero: {
    badge: "Zimbabwe's Machinery Specialists",
    titleParts: [
      { text: "Heavy Equipment " },
      { text: "Built", highlight: true },
      { text: " for Africa" },
    ],
    subtitle:
      "From excavators and dozers to cranes and compactors, we supply, service, and hire the machines that power Zimbabwe's construction industry.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "View Fleet",
    trustBadge: "Certified Dealer",
    backgroundImage:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f228?w=1920",
    backgroundAlt:
      "Yellow excavator on a construction site at sunrise",
  },

  stats: [
    { number: "500+", label: "Machines Deployed" },
    { number: "4.6", label: "Client Rating" },
    { number: "14+", label: "Years in Business" },
    { number: "80+", label: "Technicians" },
  ],

  servicesPreview: [
    {
      iconName: "Wrench",
      title: "Equipment Sales",
      desc: "New and pre-owned excavators, loaders, dozers, graders, and compactors from world-leading manufacturers.",
    },
    {
      iconName: "HardHat",
      title: "Plant Hire",
      desc: "Flexible short and long-term rental of heavy machinery with trained operators available on request.",
    },
    {
      iconName: "Wrench",
      title: "Parts & Servicing",
      desc: "Genuine replacement parts, scheduled maintenance, and emergency field repairs to minimize downtime.",
    },
    {
      iconName: "RoadHorizon",
      title: "Earthmoving",
      desc: "Turnkey earthmoving solutions for roads, dams, mining, and large-scale land clearing projects.",
    },
    {
      iconName: "ChartLineUp",
      title: "Fleet Management",
      desc: "GPS tracking, preventive maintenance scheduling, and utilization analytics for your entire fleet.",
    },
    {
      iconName: "Buildings",
      title: "Transport & Logistics",
      desc: "Nationwide low-bed transport of oversized machinery to any job site across Zimbabwe.",
    },
  ],

  featuredProjects: [
    {
      image:
        "https://images.unsplash.com/photo-1580901368919-7738efb0f228?w=800",
      title: "Harare-Beitbridge Highway",
      category: "Road Construction",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      title: "Tokwe-Mukosi Dam Project",
      category: "Dam Construction",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
      title: "Platinum Mine Expansion",
      category: "Mining",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Trusted by " },
      { text: "Africa's", highlight: true },
      { text: " Biggest Projects" },
    ],
    image:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f228?w=800",
    imageAlt:
      "Fleet of heavy machinery lined up at a construction depot",
    experienceYears: "14+",
    experienceLabel: "Years of Expertise",
    points: [
      {
        title: "Genuine Parts Guarantee",
        desc: "Every replacement part is sourced directly from OEM suppliers, ensuring reliability and longevity.",
      },
      {
        title: "24/7 Breakdown Response",
        desc: "Our rapid-response mobile workshops reach any site in Zimbabwe within hours, not days.",
      },
      {
        title: "Operator Training",
        desc: "Certified training programs for machine operators to maximize safety and productivity on site.",
      },
      {
        title: "Flexible Financing",
        desc: "Hire-purchase and lease-to-own options tailored to your project timeline and cash flow.",
      },
    ],
  },

  homeCta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920",
    backgroundAlt:
      "Excavators working at a major construction project",
    titleParts: [
      { text: "Need the Right " },
      { text: "Machine", highlight: true },
      { text: " for the Job?" },
    ],
    subtitle:
      "Whether you are buying, hiring, or need urgent servicing, our team is ready to get your project moving.",
    ctaPrimary: "Get a Free Quote",
    whatsappText:
      "Hello JTL Equipment, I would like to enquire about machinery.",
  },

  homeTestimonials: [
    {
      name: "Tendai Mhizha",
      role: "Site Manager, Zimre Construction",
      text: "JTL Equipment has been our go-to supplier for five years. Their machines are reliable, and their service team is the fastest in the country.",
      rating: 5,
    },
    {
      name: "Rumbidzai Katsande",
      role: "Operations Director, Freeway Mining",
      text: "When our CAT 320 broke down at 2am on a deadline project, JTL had a technician on site by sunrise. That saved us millions in penalties.",
      rating: 5,
    },
    {
      name: "Peter Gumbo",
      role: "Plant Manager, National Roads Authority",
      text: "We hired 12 machines from JTL for the Mutare highway project. Every single unit performed flawlessly for the entire 18-month contract.",
      rating: 4,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [
      { text: "Powering Progress " },
      { text: "Across", highlight: true },
      { text: " Zimbabwe" },
    ],
    heroSubtitle:
      "For over 14 years, JTL Equipment has been the backbone of Zimbabwe's construction and mining industries, delivering world-class machinery solutions.",
    storyImage:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f228?w=800",
    storyImageAlt:
      "JTL Equipment machinery depot with fleet of excavators",
    storyProjectCount: "500+",
    storyProjectLabel: "Machines Deployed",
    storyTitle: "From a Single Workshop to National Coverage",
    storyParagraphs: [
      "JTL Equipment was founded in Harare in 2010 with a clear mission: give Zimbabwean contractors access to the same quality of machinery available anywhere in the world.",
      "Starting with just three machines and a workshop, we have grown into one of the country's largest independent equipment dealers. Our success is built on a simple principle: keep the machines running, and the projects will follow.",
      "Today we operate from depots in Harare, Bulawayo, and Mutare, serving clients across construction, mining, agriculture, and government infrastructure. Our fleet exceeds 200 units and our parts warehouse stocks over 15,000 line items.",
    ],
    mission:
      "To be Zimbabwe's most reliable partner in heavy equipment, delivering machines, parts, and service that keep Africa's biggest projects on schedule and on budget.",
    vision:
      "To build the largest and most technologically advanced equipment network in Southern Africa, setting the standard for machine availability, uptime, and operator safety.",
    values: [
      {
        iconName: "ShieldCheck",
        title: "Reliability",
        desc: "Our machines work when you need them. Period. We stand behind every unit we sell or hire.",
      },
      {
        iconName: "Trophy",
        title: "Performance",
        desc: "We source only proven brands and back them with the best service infrastructure in the region.",
      },
      {
        iconName: "Lightbulb",
        title: "Innovation",
        desc: "GPS telematics, predictive maintenance, and digital fleet management keep our clients ahead.",
      },
      {
        iconName: "Handshake",
        title: "Partnership",
        desc: "We do not just sell machines. We build long-term relationships that support your growth.",
      },
      {
        iconName: "Heart",
        title: "Safety",
        desc: "Every operator trained, every machine inspected, every site safer because of our commitment.",
      },
      {
        iconName: "Users",
        title: "Community",
        desc: "We invest in local technician training and apprenticeship programs across Zimbabwe.",
      },
    ],
    team: [
      {
        name: "James Tapfuma",
        role: "Managing Director",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      },
      {
        name: "Linda Moyo",
        role: "Head of Operations",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      },
      {
        name: "Tatenda Muza",
        role: "Chief Engineer",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
      {
        name: "Grace Ndlovu",
        role: "Fleet Manager",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      },
    ],
    milestones: [
      {
        year: "2010",
        title: "Company Founded",
        desc: "JTL Equipment opens its first workshop in Harare's Msasa industrial area.",
      },
      {
        year: "2013",
        title: "First Major Contract",
        desc: "Awarded equipment supply contract for national road rehabilitation program.",
      },
      {
        year: "2016",
        title: "100 Machines Milestone",
        desc: "Fleet surpasses 100 units with expansion into mining sector.",
      },
      {
        year: "2019",
        title: "Bulawayo Depot Opens",
        desc: "Regional expansion brings JTL closer to southern Zimbabwe's mining heartland.",
      },
      {
        year: "2022",
        title: "Digital Fleet Platform",
        desc: "Launch of GPS-tracked fleet management system for all hire clients.",
      },
      {
        year: "2024",
        title: "500+ Deployments",
        desc: "Surpassed 500 successful machine deployments across Zimbabwe and region.",
      },
    ],
    ctaTitle: "Ready to Power Your Next Project?",
    ctaSubtitle:
      "Contact our team to discuss equipment sales, hire, or servicing for your construction or mining project.",
    ctaCta: "Talk to Our Team",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [
      { text: "Complete " },
      { text: "Equipment", highlight: true },
      { text: " Solutions" },
    ],
    heroSubtitle:
      "Six core service areas covering every aspect of heavy machinery supply, hire, maintenance, and support for Zimbabwe's construction and mining sectors.",
    items: [
      {
        iconName: "Wrench",
        title: "Equipment Sales",
        slug: "equipment-sales",
        image:
          "https://images.unsplash.com/photo-1580901368919-7738efb0f228?w=900",
        desc: "New and certified pre-owned excavators, loaders, dozers, graders, rollers, and compactors from leading global manufacturers. Every machine comes with warranty and full technical support.",
        features: [
          "New machine procurement from global OEMs",
          "Certified pre-owned equipment with warranty",
          "Custom machine specification to project needs",
          "Trade-in and upgrade programs",
          "Delivery and commissioning included",
          "Extended warranty packages available",
        ],
      },
      {
        iconName: "HardHat",
        title: "Plant & Equipment Hire",
        slug: "plant-hire",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900",
        desc: "Flexible short-term and long-term hire of heavy machinery with or without operators. Our rental fleet is maintained to the highest standards for maximum uptime on your site.",
        features: [
          "Daily, weekly, and monthly hire rates",
          "Trained operators available on request",
          "Machine delivery and collection nationwide",
          "Replacement guarantee for breakdowns",
          "Hire-to-purchase conversion option",
          "Project-based fleet packages",
        ],
      },
      {
        iconName: "Wrench",
        title: "Parts & Servicing",
        slug: "parts-servicing",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900",
        desc: "Genuine OEM parts from a 15,000-line-item warehouse, plus scheduled maintenance and emergency field repairs delivered by certified technicians.",
        features: [
          "Genuine OEM replacement parts",
          "15,000+ parts in stock for fast dispatch",
          "Scheduled preventive maintenance plans",
          "Emergency mobile workshop response",
          "Engine and transmission rebuilds",
          "Hydraulic system diagnostics and repair",
        ],
      },
      {
        iconName: "RoadHorizon",
        title: "Earthmoving Solutions",
        slug: "earthmoving",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900",
        desc: "Turnkey earthmoving services for roads, dams, mining, and large-scale land clearing. We supply the machines, operators, and project management expertise.",
        features: [
          "Bulk earthworks and land clearing",
          "Road subgrade preparation",
          "Dam and reservoir construction",
          "Mine overburden removal",
          "Site leveling and grading",
          "Volumetric survey and reporting",
        ],
      },
      {
        iconName: "ChartLineUp",
        title: "Fleet Management",
        slug: "fleet-management",
        image:
          "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=900",
        desc: "Digital fleet tracking and management platform. GPS monitoring, fuel analytics, preventive maintenance scheduling, and utilization reports for your entire equipment fleet.",
        features: [
          "Real-time GPS tracking dashboard",
          "Fuel consumption monitoring",
          "Automated maintenance scheduling",
          "Utilization and idle-time analytics",
          "Operator behavior monitoring",
          "Monthly fleet health reports",
        ],
      },
      {
        iconName: "Buildings",
        title: "Transport & Logistics",
        slug: "transport-logistics",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900",
        desc: "Nationwide low-bed and flatbed transport for oversized and heavy machinery. We handle permits, route planning, and safe delivery to any location in Zimbabwe.",
        features: [
          "Low-bed transport for oversized loads",
          "Abnormal load permit management",
          "Route planning and pilot vehicles",
          "Crane and rigging for loading/offloading",
          "Cross-border transport to neighboring countries",
          "Insurance coverage for transit",
        ],
      },
    ],
    ctaTitle: "Need a Custom Solution?",
    ctaSubtitle:
      "Every project has unique requirements. Contact us to build a tailored equipment package for your site.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [
      { text: "Projects " },
      { text: "Powered", highlight: true },
      { text: " by JTL" },
    ],
    heroSubtitle:
      "From national highways to platinum mines, our equipment has been at the heart of Zimbabwe's most demanding construction and mining projects.",
    categories: [
      "All",
      "Road Construction",
      "Mining",
      "Dam Construction",
      "Commercial",
      "Infrastructure",
    ],
    items: [
      {
        id: 1,
        title: "Harare-Beitbridge Highway Upgrade",
        category: "Road Construction",
        location: "Harare - Beitbridge",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1580901368919-7738efb0f228?w=800",
        desc: "Supplied 18 excavators, 6 graders, and 12 compactors for the 580km highway rehabilitation project. Full maintenance support throughout the 24-month contract.",
        services: ["Equipment Sales", "Plant Hire", "Parts & Servicing"],
      },
      {
        id: 2,
        title: "Tokwe-Mukosi Dam Phase 3",
        category: "Dam Construction",
        location: "Masvingo Province",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
        desc: "Full earthmoving fleet deployment for dam wall reinforcement. 8 dozers, 4 excavators, and articulated dump trucks moved over 2 million cubic meters of material.",
        services: ["Earthmoving Solutions", "Plant Hire"],
      },
      {
        id: 3,
        title: "Great Dyke Platinum Expansion",
        category: "Mining",
        location: "Shurugwi",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
        desc: "Long-term hire of 25 machines for open-pit mining operations including excavators, haul trucks, and wheel loaders. GPS fleet management included.",
        services: ["Plant Hire", "Fleet Management"],
      },
      {
        id: 4,
        title: "Harare CBD Commercial Complex",
        category: "Commercial",
        location: "Harare CBD",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
        desc: "Tower crane hire and foundation excavation equipment for a 15-story commercial development in central Harare.",
        services: ["Plant Hire", "Transport & Logistics"],
      },
      {
        id: 5,
        title: "Mutare Water Pipeline",
        category: "Infrastructure",
        location: "Mutare",
        year: "2022",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
        desc: "Trenching and pipe-laying equipment for 45km water supply pipeline. Included excavators with breaker attachments for rock sections.",
        services: ["Plant Hire", "Parts & Servicing"],
      },
      {
        id: 6,
        title: "Hwange Coal Expansion",
        category: "Mining",
        location: "Hwange",
        year: "2022",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
        desc: "Sale of 6 new excavators and 4 rigid dump trucks for coal extraction operations. Included operator training and 3-year service contract.",
        services: ["Equipment Sales", "Parts & Servicing"],
      },
      {
        id: 7,
        title: "Victoria Falls Airport Expansion",
        category: "Infrastructure",
        location: "Victoria Falls",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=800",
        desc: "Earthmoving and compaction equipment for runway extension. 14 machines deployed with strict aviation safety compliance.",
        services: ["Plant Hire", "Earthmoving Solutions"],
      },
      {
        id: 8,
        title: "Mazowe Irrigation Scheme",
        category: "Infrastructure",
        location: "Mazowe",
        year: "2021",
        image:
          "https://images.unsplash.com/photo-1580901368919-7738efb0f228?w=800",
        desc: "Canal excavation and dam construction equipment for government irrigation project serving 3,000 hectares of farmland.",
        services: ["Earthmoving Solutions", "Plant Hire"],
      },
      {
        id: 9,
        title: "Bulawayo Ring Road Phase 2",
        category: "Road Construction",
        location: "Bulawayo",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
        desc: "Graders, rollers, and asphalt pavers for 28km dual carriageway construction around Bulawayo. Delivered from our southern depot.",
        services: ["Plant Hire", "Transport & Logistics"],
      },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [
      { text: "What Our Clients " },
      { text: "Say", highlight: true },
    ],
    heroSubtitle:
      "Real feedback from contractors, miners, and project managers across Zimbabwe who trust JTL Equipment.",
    ratingBreakdown: { 5: 15, 4: 6, 3: 2, 2: 0, 1: 0 },
    items: [
      {
        name: "Tendai Mhizha",
        role: "Site Manager, Zimre Construction",
        text: "JTL Equipment has been our go-to supplier for five years. Their machines are reliable, and their service team is the fastest in the country. When we need equipment, JTL delivers.",
        rating: 5,
        date: "1 month ago",
        project: "Highway Construction",
      },
      {
        name: "Rumbidzai Katsande",
        role: "Operations Director, Freeway Mining",
        text: "When our CAT 320 broke down at 2am on a deadline project, JTL had a technician on site by sunrise. That saved us millions in penalties. True emergency response.",
        rating: 5,
        date: "2 months ago",
        project: "Mining Operations",
      },
      {
        name: "Peter Gumbo",
        role: "Plant Manager, National Roads Authority",
        text: "We hired 12 machines from JTL for the Mutare highway project. Every single unit performed flawlessly for the entire 18-month contract. Professional fleet management throughout.",
        rating: 4,
        date: "3 months ago",
        project: "Road Construction",
      },
      {
        name: "Simon Chikowero",
        role: "Project Engineer, Masimba Holdings",
        text: "The quality of JTL's pre-owned equipment surprised us. Every machine we purchased was in excellent condition with full service history. Better value than buying new for our project scope.",
        rating: 5,
        date: "4 months ago",
        project: "Commercial Building",
      },
      {
        name: "Florence Mutasa",
        role: "Procurement Officer, Zimplats",
        text: "JTL manages our entire surface mining fleet. Their GPS tracking system gives us real-time visibility on every machine. Fuel savings alone justified the switch to their platform.",
        rating: 5,
        date: "5 months ago",
        project: "Platinum Mining",
      },
      {
        name: "David Manyika",
        role: "Director, Dandaro Contractors",
        text: "We started with one hired excavator from JTL. Now we own eight machines through their hire-to-purchase program. They made fleet ownership accessible for a growing company like ours.",
        rating: 5,
        date: "6 months ago",
        project: "Earthmoving",
      },
      {
        name: "Bernard Nyoni",
        role: "Civil Engineer, Murray & Roberts",
        text: "JTL transported a 60-ton excavator to our remote Hwange site without a single scratch. Their low-bed logistics team is meticulous with route planning and load securing.",
        rating: 4,
        date: "7 months ago",
        project: "Transport",
      },
      {
        name: "Angela Dube",
        role: "Contracts Manager, CABS Construction",
        text: "Their parts department is impressively stocked. We have never waited more than 48 hours for any part we needed. For critical filters and seals, usually same day.",
        rating: 5,
        date: "8 months ago",
        project: "Parts Supply",
      },
      {
        name: "Nyasha Chirwa",
        role: "Plant Supervisor, Bitumen World",
        text: "JTL trained our operators on the new Komatsu fleet. The difference in fuel efficiency and machine longevity since the training is measurable. Worth every dollar.",
        rating: 4,
        date: "9 months ago",
        project: "Operator Training",
      },
      {
        name: "Maxwell Tembo",
        role: "General Manager, Aurex Mining",
        text: "We have worked with equipment suppliers across Southern Africa. JTL stands out for their honesty in machine condition assessment and their after-sale support commitment.",
        rating: 5,
        date: "10 months ago",
        project: "Mining Equipment",
      },
      {
        name: "Chiedza Maposa",
        role: "Senior Engineer, Zinara",
        text: "JTL supplied all earthmoving equipment for three road rehabilitation projects simultaneously. Their fleet availability and logistics coordination impressed our entire team.",
        rating: 5,
        date: "11 months ago",
        project: "National Roads",
      },
      {
        name: "Takudzwa Moyo",
        role: "Workshop Manager, Terratec",
        text: "As a competitor in the industry, I respect what JTL has built. Their workshop standards are among the best I have seen. Clean, organized, and staffed with skilled technicians.",
        rating: 4,
        date: "1 year ago",
        project: "Industry Review",
      },
    ],
    ctaTitle: "Ready to Experience JTL Quality?",
    ctaSubtitle:
      "Join hundreds of satisfied contractors and miners. Get in touch to discuss your equipment needs.",
    ctaCta: "Get Started Today",
    ctaWhatsappText:
      "Hello, I read your reviews and would like to discuss equipment.",
  },

  // ====== CONTACT PAGE ======
  contact: {
    heroTitle: [
      { text: "Let's Get Your " },
      { text: "Project", highlight: true },
      { text: " Moving" },
    ],
    heroSubtitle:
      "Need equipment? Have a question about our fleet? Reach out and our team will respond within 24 hours.",
    formTitle: "Send Us a Message",
    formSubtitle:
      "Fill in the form and choose how you'd like to send it.",
  },

  // ====== CAREERS PAGE ======
  careers: {
    heroTitle: [
      { text: "Build Your " },
      { text: "Career", highlight: true },
      { text: " With JTL" },
    ],
    heroSubtitle:
      "Join a team of skilled technicians, engineers, and sales professionals who keep Zimbabwe's biggest projects moving.",
    heroImage:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f228?w=1920",
    cultureTitle: "Why Work With Us?",
    cultureItems: [
      {
        iconName: "Users",
        title: "Expert Team",
        desc: "Work alongside certified technicians and engineers with decades of combined machinery experience.",
      },
      {
        iconName: "Rocket",
        title: "Career Growth",
        desc: "From apprentice to workshop manager, we invest in clear career progression for every team member.",
      },
      {
        iconName: "ShieldCheck",
        title: "Safety First",
        desc: "World-class safety standards protect our team in workshops, depots, and on client sites.",
      },
    ],
    cultureImage:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f228?w=1400",
    cultureImageAlt:
      "JTL Equipment technicians working on heavy machinery",
    cultureTagline: "More Than a Job. A Trade.",
    cultureTaglineDesc:
      "At JTL, every day brings a new challenge. Our technicians solve real engineering problems that keep entire industries moving.",
    benefits: [
      {
        iconName: "CurrencyDollar",
        title: "Competitive Pay",
        desc: "Industry-leading salaries with performance bonuses tied to fleet uptime metrics.",
      },
      {
        iconName: "FirstAid",
        title: "Medical Cover",
        desc: "Comprehensive medical aid for you and your family from day one.",
      },
      {
        iconName: "GraduationCap",
        title: "Technical Training",
        desc: "OEM-certified training programs, international workshops, and trade qualifications.",
      },
      {
        iconName: "Car",
        title: "Company Transport",
        desc: "Workshop shuttles and field service vehicles provided for all technical roles.",
      },
      {
        iconName: "Heart",
        title: "Work-Life Balance",
        desc: "Structured shift rotations and generous leave for field and depot-based staff.",
      },
      {
        iconName: "ShieldCheck",
        title: "Full PPE Provided",
        desc: "All safety equipment, tools, and protective gear supplied at no cost to the employee.",
      },
    ],
    positions: [
      {
        id: 1,
        title: "Senior Diesel Mechanic",
        department: "Workshop",
        type: "Full-Time",
        location: "Harare",
        description:
          "Lead mechanic role for our Harare workshop handling CAT, Komatsu, and Volvo heavy equipment. 8+ years experience required.",
        requirements: [
          "Journeyman or equivalent diesel mechanic qualification",
          "8+ years heavy equipment experience",
          "CAT or Komatsu OEM training preferred",
          "Hydraulic systems expertise",
          "Valid driver's license",
        ],
      },
      {
        id: 2,
        title: "Field Service Technician",
        department: "Service",
        type: "Full-Time",
        location: "Various Sites",
        description:
          "Mobile repair technician responding to breakdowns across Zimbabwe. Must be willing to travel extensively.",
        requirements: [
          "Qualified diesel or plant mechanic",
          "5+ years field service experience",
          "Own diagnostic tools preferred",
          "Willingness to travel nationally",
          "Strong problem-solving skills",
        ],
      },
      {
        id: 3,
        title: "Parts Sales Executive",
        department: "Parts",
        type: "Full-Time",
        location: "Harare",
        description:
          "Manage parts counter and phone orders. Technical knowledge of heavy equipment parts catalogs essential.",
        requirements: [
          "Technical diploma in mechanical engineering",
          "3+ years parts sales experience",
          "Knowledge of CAT, Komatsu, or Volvo parts systems",
          "Strong customer service skills",
          "Computer literate with ERP experience",
        ],
      },
      {
        id: 4,
        title: "Equipment Sales Consultant",
        department: "Sales",
        type: "Full-Time",
        location: "Harare",
        description:
          "Sell new and pre-owned equipment to construction and mining clients. Build relationships and close deals.",
        requirements: [
          "Degree in mechanical engineering or business",
          "5+ years B2B sales experience in capital equipment",
          "Understanding of construction and mining industries",
          "Own vehicle and valid driver's license",
          "Proven track record of meeting sales targets",
        ],
      },
      {
        id: 5,
        title: "Fleet Operations Coordinator",
        department: "Operations",
        type: "Full-Time",
        location: "Harare",
        description:
          "Coordinate machine dispatch, operator scheduling, and GPS fleet monitoring for our hire fleet.",
        requirements: [
          "Diploma in logistics or operations management",
          "3+ years fleet coordination experience",
          "Proficiency with GPS tracking platforms",
          "Strong organizational and communication skills",
          "Ability to work under pressure with tight deadlines",
        ],
      },
      {
        id: 6,
        title: "Apprentice Mechanic",
        department: "Workshop",
        type: "Apprenticeship",
        location: "Harare",
        description:
          "Two-year structured apprenticeship program for aspiring heavy equipment mechanics. Learn from our senior technicians.",
        requirements: [
          "National Certificate in Mechanical Engineering",
          "Strong interest in heavy machinery",
          "Basic tool handling skills",
          "Eagerness to learn",
          "Physical fitness for workshop environment",
        ],
      },
    ],
    generalApplicationTitle: "Don't See the Right Role?",
    generalApplicationSubtitle:
      "We are always looking for skilled technicians and professionals. Send us your CV and we will keep you in mind.",
    generalApplicationCta: "Send Your CV",
  },

  // ====== FOOTER ======
  footer: {
    description:
      "Zimbabwe's trusted heavy equipment partner. Sales, hire, parts, and service for construction and mining machinery.",
    copyright: "JTL Equipment (Pvt) Ltd",
  },
};

export default siteData;
