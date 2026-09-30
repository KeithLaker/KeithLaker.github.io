window.AI_WORLD_DATA = {
  event: {
    name: 'Autonomous AI Database Data Deep Dive',
    shortName: 'Data Deep Dive',
    edition: 'AI World 2026',
    kicker: 'Oracle AI World · Las Vegas',
    source: 'Autonomous-AI-Database-Deep-Dive-AI-World-2026.pdf'
  },
  demoHub: {
    name: 'AI World Hub',
    location: 'AI World Hub',
    booths: 'Demo booths 2A, 2B, 7C, and 7D',
    hours: {
      sunday: 'Not listed in the guide',
      monday: '11:00 AM – 7:00 PM',
      tuesday: '8:00 AM – 6:00 PM',
      wednesday: '9:00 AM – 2:00 PM'
    },
    demoBooths: [
      {
        code: '2a',
        title: 'Autonomous AI Database: SQL, JSON, Graph, Spatial, AI/ML',
        description: 'See how Oracle Autonomous AI Database and Autonomous AI Lakehouse use automation and a converged data architecture to further reduce database management, data sprawl, fragmented pipelines, and infrastructure complexity.'
      },
      {
        code: '2b',
        title: 'Autonomous AI Lakehouse: open standards-based lakehouse',
        description: 'See how Oracle Autonomous AI Lakehouse unifies data warehousing, data lakes, and AI analytics in one managed platform—helping teams simplify data management, accelerate insights, run AI/ML workloads, and reduce infrastructure complexity through automation and scalability.'
      },
      {
        code: '7c',
        title: 'Live Data for AI, Analytics, and Modern Apps',
        description: 'See what happens when Oracle data and your hyperscaler’s AI and analytics tools come together. See Oracle AI Vector Search, Select AI, GoldenGate, and Autonomous AI Lakehouse in action—and discover how bringing AI and analytics to live Oracle data can reduce data movement, simplify integration, and turn trusted business data into AI-powered insights.'
      },
      {
        code: '7d',
        title: 'Migrate to Simplify and Save',
        description: 'See how moving Oracle databases to the cloud can simplify operations and reduce costs up to 30%. See how Oracle Autonomous AI Database and Autonomous AI Lakehouse use automation and a converged data architecture to further reduce database management, data sprawl, fragmented pipelines, and infrastructure complexity.'
      }
    ]
  },
  globalLeaders: {
    title: 'Global Leaders Meeting at Oracle AI World',
    date: 'Wednesday, October 28, 2026',
    time: '1:00 PM – 7:30 PM',
    location: 'Ghostbar, The Palms Hotel',
    address: '4321 W Flamingo Rd, Las Vegas, NV 89103',
    overview: 'Join Oracle Global Leaders customers, partners, guests, Oracle staff, and Database Executive Management to close out AI World week, hear database news, provide feedback, and connect with peers and product leaders. The afternoon begins with light fare and meetings, followed by an evening reception.',
    attendFor: ['Open-door feedback panel with Database Executive Management', 'Presentations from Oracle customers and partners sharing successful data management implementations', 'Recognition of exceptional individuals through the Oracle Global Leaders Awards 2026'],
    agenda: [
      { time: '1:00 PM – 1:30 PM', title: 'Networking and Light Refreshments' },
      { time: '1:30 PM – 1:45 PM', title: 'Welcome and Introduction', detail: 'Reiner Zimmermann · Vice President, Product Management, Oracle Global Leaders Program' },
      { time: '1:45 PM – 2:45 PM', title: 'Customer Presentations', detail: 'Moderated by Laura McKechnie · Director, Product Management, Oracle Global Leaders Program' },
      { time: '2:45 PM – 3:00 PM', title: 'Customer Recognition' },
      { time: '3:00 PM – 3:30 PM', title: 'Break' },
      { time: '3:30 PM – 4:30 PM', title: 'Open Feedback Panel & Comments', detail: 'Juan Loaiza · Çetin Özbütün · Hasan Rizvi' },
      { time: '4:30 PM – 7:30 PM', title: 'Reception and Networking' }
    ],
    speakers: [
      { name: 'Juan Loaiza', role: 'Executive Vice President, Mission-Critical Database Technologies, Oracle', image: 'assets/speakers/juan-loaiza.png' },
      { name: 'Çetin Özbütün', role: 'Executive Vice President – Data Warehouse and Autonomous Database Technologies', image: 'assets/speakers/cetin-ozbutin.jpg' },
      { name: 'Hasan Rizvi', role: 'Executive Vice President, Database Engineering', image: 'assets/speakers/hasan-rizvi.jpg' },
      { name: 'Reiner Zimmermann', role: 'Vice President, Product Management, Oracle Global Leaders Program, Oracle', image: 'assets/speakers/reiner-zimmermann.jpg' },
      { name: 'Laura McKechnie', role: 'Director, Product Management, Oracle Global Leaders Program, Oracle', image: 'assets/speakers/laura-mckechnie.png' }
    ],
    overviewUrl: 'https://eventreg.oracle.com/profile/web/index.cfm?PKwebID=0x977019abcd#Overview',
    agendaUrl: 'https://eventreg.oracle.com/profile/web/index.cfm?PKwebID=0x977019abcd#Agenda',
    speakersUrl: 'https://eventreg.oracle.com/profile/web/index.cfm?PKwebID=0x977019abcd#Speakers'
  },
  days: [
    { id: 'sunday', label: 'Sunday', date: 'October 25', pages: '26–30', accent: 'blue' },
    { id: 'monday', label: 'Monday', date: 'October 26', pages: '31–42', accent: 'red' },
    { id: 'tuesday', label: 'Tuesday', date: 'October 27', pages: '44–52', accent: 'gold' },
    { id: 'wednesday', label: 'Wednesday', date: 'October 28', pages: '54–64', accent: 'slate' }
  ],
  sessions: [
    {
      id: 'top-10-must-have-enterprise-agents', day: 'sunday', page: 26, kind: 'Bootcamp',
      title: 'Top 10 Must-Have Enterprise Agents: Design, Build, and Productize Them Today',
      time: '12:00 PM – 1:30 PM', location: 'Casanova 603, Level 1',
      description: 'Move from promising ideas to production-ready solutions through a repeatable approach to enterprise agent design.',
      learn: ['How to map business processes and identify high-value agent opportunities', 'How to integrate enterprise data and systems', 'How to build in governance, human-in-the-loop workflows, and observability', 'How to manage agent lifecycles and design for reuse', 'How to prioritize use cases and scale governed enterprise AI across your organization'],
      speakers: [{ name: 'Allen Hosler', role: 'Principal Product Manager, Oracle' }, { name: 'Kumar Varun', role: 'Lead Principal Product Manager, Oracle' }],
      area: 'AI, AI Agents, Autonomous AI Database, Oracle AI Database', audience: 'General Audience', job: 'Developer, Tech Executive, Tech End User, Tech IT Manager, Business Manager, Business Executive',
      note: 'Bring your laptop to follow along for the best hands-on experience. Laptops are not provided.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1787352570066001WLZe'
    },
    {
      id: 'oracle-ai-data-platform-hackathon', day: 'sunday', page: 27, kind: 'Hackathon',
      title: 'Oracle AI Data Platform Hackathon', time: '12:30 PM – 5:00 PM', location: 'Galileo 903, Level 1',
      description: 'With guidance from Oracle experts, design and build an end-to-end AI agent using governed data and business context.',
      learn: ['How to design and build an end-to-end AI agent', 'How to use governed data and business context effectively', 'How Oracle AI Data Platform capabilities work together', 'How to turn business challenges into practical AI solutions', 'How to experiment and prototype collaboratively with expert guidance'],
      speakers: [{ name: 'Siva Harinath', role: 'Group Vice President, Software Development, Analytics Service Excellence, Oracle' }, { name: 'Srikant Gokulmatha', role: 'SVP, AI Data Platform, Oracle' }, { name: 'Benjamin Arnulf', role: 'Senior Director, Product Strategy, Analytics and AI, Oracle' }, { name: 'Jamie Anderson', role: 'Senior Principal Product Manager, Product Strategy, Analytics, Oracle' }, { name: 'Alex Hudak', role: 'Oracle GTM and Alliance Manager, NVIDIA' }],
      area: 'AI, Oracle Cloud Infrastructure, Systems & Infrastructure, AI Data Platform, AI Agents, AI Lakehouse, Autonomous AI Database, Analytics, Developer Technologies, Oracle AI Database', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Developer, Executives, Tech End User, Tech IT Manager, Business End User, DBA',
      note: 'Space is limited; register when enrollment opens September 8 with priority registration acceptance for customers.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1783357227921001fM8g'
    },
    {
      id: 'building-and-innovating-with-oracle-autonomous-ai-lakehouse', day: 'sunday', page: 28, kind: 'Bootcamp',
      title: 'Building and Innovating with Oracle Autonomous AI Lakehouse', time: '2:30 PM – 4:30 PM', location: 'Casanova 605, Level 1',
      description: 'An interactive session with guided exercises on querying Iceberg tables, writing natural language queries, catalog integration, and scaling AI workloads.',
      learn: [],
      speakers: [{ name: 'Ekrem Soylemez', role: 'VP, Data Systems Engineering, Oracle' }, { name: 'Gaurav Chadha', role: 'Senior Manager, Data Systems Engineering, Oracle' }, { name: 'Alexey Filanovskii', role: 'Lead Principal Product Manager, Oracle' }, { name: 'Ashish Jain', role: 'Lead Principal Product Manager, Oracle' }],
      area: 'AI, Integration, AI Agents, AI Lakehouse', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Developer, Tech IT Manager',
      note: 'This is a 2-hour live interactive demo session.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785193828614001ePNf'
    },
    {
      id: 'ask-search-generate-protect', day: 'sunday', page: 29, kind: 'Lab',
      title: 'Ask, Search, Generate, Protect: Hands-On AI in Autonomous AI Database', time: '4:00 PM – 5:30 PM', location: 'Casanova 504, Level 1',
      description: 'Through hands-on exercises with Select AI and a simple Oracle APEX application, see how these capabilities work together to support your data strategy and create secure, intelligent experiences.',
      learn: ['How to use Select AI for natural-language-to-SQL (NL2SQL)', 'How to implement RAG with enterprise data', 'How to generate and use synthetic data', 'How to combine database AI capabilities in an Oracle APEX app', 'How to apply layered security when using Select AI', 'How to extend your data strategy with an integrated AI platform'],
      speakers: [{ name: 'Michelle Malcher', role: 'Director, Product Management, Oracle' }, { name: 'Karen Cannell', role: 'CTHO, TH Technology' }],
      area: 'Autonomous AI Database, Security', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Developer',
      note: 'Bring your laptop to follow along for the best hands-on experience. Laptops are not provided.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785193146287001cv0Y'
    },
    {
      id: 'tell-the-report-what-you-need', day: 'sunday', page: 30, kind: 'Lab',
      title: 'Tell the Report What You Need: Natural-Language Analytics in Oracle APEX', time: '4:00 PM – 5:30 PM', location: 'Casanova 505, Level 1',
      description: 'Build and test AI-driven report interactions to see how natural language makes report customization faster and more intuitive.',
      learn: ['How APEX AI Interactive Reports interpret natural-language requests', 'How to configure report features using AI', 'How to build and test AI-driven report interactions', 'How to improve data exploration and usability in APEX'],
      speakers: [{ name: 'Martin D’Souza', role: 'Director, Platform Software Engineering, Oracle' }, { name: 'Jayson Hanes', role: 'Senior Principal Product Manager, Oracle' }],
      area: 'AI, AI Agents, Autonomous AI Database, Oracle AI Database', audience: 'Beginner (New user of Oracle)', job: 'Developer, Tech End User, Business End User, Database Administrator',
      note: 'Bring your laptop to follow along for the best hands-on experience. Laptops are not provided.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1783637746024001BdnA'
    },
    {
      id: 'dba-in-the-driving-seat', day: 'monday', page: 31, kind: 'Session',
      title: 'DBA in the Drivers Seat: Operating Autonomous AI Database', time: '8:15 AM – 9:00 AM', location: 'Titian 2206, Level 2',
      description: 'This session explains what Oracle automates, what remains under DBA control, and where expertise delivers the greatest value.',
      learn: ['How the DBA role changes in an autonomous operating model', 'Which tasks Oracle automates and which remain under DBA control', 'How to govern access and protect sensitive information', 'How to manage environments, workloads, performance, and resources', 'How to support business continuity and higher-value decisions'],
      speakers: [{ name: 'Yasin Baskan', role: 'Vice President, Product Management, Autonomous AI Database, Oracle' }, { name: 'Mark Carleton', role: 'CEO Mestec'}],
      area: 'AI Lakehouse, Architecture, Autonomous AI Database, Multicloud Data Platform, Oracle AI Database', audience: 'Beginner', job: 'Developer',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1784671949704001eaNB'
    },
    {
      id: 'your-first-enterprise-agent', day: 'monday', page: 32, kind: 'Lab',
      title: 'Your First Enterprise Agent Needs More Than a Prompt: Build It with Select AI', time: '12:00 PM – 1:30 PM', location: 'Casanova 504, Level 1',
      description: 'In this hands-on lab, build and refine agents and tools using PL/SQL, Python APIs, and the Ask Oracle Select AI APEX app.',
      learn: ['How to create and configure AI agents and tools', 'How to use PL/SQL and Python APIs for agent development', 'How to build tools, tasks, and agents for enterprise scenarios', 'How to support multi-turn conversations and retain context', 'How to enable permission-based sharing across users', 'How to test and refine agents in the Ask Oracle Select AI APEX app'],
      speakers: [{ name: 'Mark Hornick', role: 'Senior Director, Machine Learning and AI Product Management, Oracle' }, { name: 'Marcos Arancibia', role: 'Lead Principal Product Manager, Oracle' }],
      area: 'AI, AI Agents, Autonomous AI Database, Oracle AI Database', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Developer', note: 'This is a 2-hour live interactive demo session.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1783538699580001OA1t'
    },
    {
      id: 'customer-panel-from-automation-to-autonomy', day: 'monday', page: 33, kind: 'Session',
      title: 'Customer Panel: From Automation to Autonomy, Real Transformation Journey', time: '12:45 PM – 1:30 PM', location: 'Bellini 2002, Level 2',
      description: 'Hear from senior technology leaders as they share how their organizations are rethinking enterprise cloud strategies with AI and autonomous operations. A moderated discussion explores architecture, governance, risk, skills, and organizational change, followed by audience Q&A.',
      learn: [],
      speakers: [{ name: 'Sohan DeMel', role: 'SVP, Product Management, Database, Oracle' }, { name: 'Sanjay Apte', role: 'Vodafone' }, { name: 'Oliver Tacconi Oliveta', role: 'Gerente de Suporte TI, B3' }, { name: 'Murali Bandaru', role: 'Chief Information & Digital Officer, American Tire Distributors Inc.' }, { name: 'Rama Raghavan', role: 'Assistant Vice President, AT&T' }, { name: 'Adnan Kashwani', role: 'Vice President / E2E Cloud & Infrastructure Management, E&UAE' }],
      area: 'AI Lakehouse, Architecture, Autonomous AI Database, Multicloud Data Platform, Oracle AI Database', audience: 'Beginner', job: 'Developer',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785276949202001nDuf'
    },
    {
      id: 'let-coding-agents-talk-to-the-database', day: 'monday', page: 34, kind: 'Session',
      title: 'Let Coding Agents Talk to the Database: Faster Development with MCP', time: '12:45 PM – 1:30 PM', location: 'Marco Polo 806, Level 1',
      description: 'A product roadmap, live demonstration, and customer case study focused on productivity gains and lessons learned from connecting AI coding agents to Oracle AI Database.',
      learn: ['How MCP Servers connect AI coding agents to Oracle AI Database', 'How database context improves debugging and SQL optimization', 'How to streamline code changes with operational insights', 'Practical lessons from Oracle and MineSense', 'What’s next on the product roadmap'],
      speakers: [{ name: 'Jeff Smith', role: 'Distinguished Product Manager, Oracle' }, { name: 'Kris Rice', role: 'SVP, Software Engineering, Oracle' }, { name: 'Adrian Png', role: 'Principal Solutions Architect, Miracle Finland Oy' }, { name: 'Pawan Litt', role: 'Lead Data Engineering, Minesense' }],
      area: 'AI, AI Agents, AI Lakehouse, Autonomous AI Database, Developer Technologies, Oracle AI Database', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Developer',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1781166155400001GO5L'
    },
    {
      id: 'building-a-foundation-for-ai-world-bank', day: 'monday', page: 35, kind: 'Theater',
      title: 'Building a Foundation for AI: The World Bank Modernization Journey', time: '12:50 PM – 1:10 PM', location: 'Theater 2, Customer Success Central, The Hub',
      description: 'Practical guidance for improving operational agility and preparing for what comes next with a scalable data foundation.',
      learn: ['How to align technology performance with business outcomes using SLOs', 'How OCI and Customer Success Services support modernization', 'How Oracle AI Data Platform and OCI Lakehouse enable scalable data foundations', 'Practical approaches to improving operational agility', 'How to prepare data and technology environments for future AI use cases'],
      speakers: [{ name: 'Ather Khan', role: 'VP, Technical Account Management, Oracle' }, { name: 'Swamy Kiran', role: 'Sr Data and Information Management – Cloud & Data Engineer, The World Bank Group' }],
      area: 'AI Data Platform, AI Lakehouse, Migration and Modernization', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Tech Executive, Tech IT Manager, Business Executive',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1784400038648001pmY6'
    },
    {
      id: 'modernizing-at-scale-mitratech', day: 'monday', page: 36, kind: 'Theater',
      title: 'Modernizing at Scale: MitraTech’s Journey to an AI-Ready Platform', time: '1:30 PM – 1:50 PM', location: 'Theater 1, Customer Success Central, The Hub',
      description: 'Practical lessons and strategies for building a resilient, AI-ready platform.',
      learn: ['How OCI and OKE support scalable cloud-native operations', 'How Oracle AI Data Platform and AI Lakehouse enable a unified data foundation', 'How to optimize cloud costs while improving operational efficiency', 'How to prepare enterprise platforms for analytics, automation, and AI', 'Strategies for building resilience and accelerating modernization'],
      speakers: [{ name: 'Ather Khan', role: 'VP, Technical Account Management, Oracle' }, { name: 'Premjith Padmanabhan', role: 'Senior Director, DevOps, Mitratech' }],
      area: 'AI Data Platform, AI Lakehouse, Migration and Modernization', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Tech Executive, Tech IT Manager, Business Executive',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1784407703270001I2NO'
    },
    {
      id: 'ai-can-build-it-but-can-you-trust-it', day: 'monday', page: 37, kind: 'Session',
      title: 'AI Can Build It, But Can You Trust It? Data Is the Key', time: '2:00 PM – 2:45 PM', location: 'Venetian Ballroom G, Level 2',
      description: 'AI can now build solutions in minutes. Discover how Oracle AI Database’s Deep-Trust AI Architecture accelerates AI innovation while ensuring security, accuracy, and governance are not bypassed or compromised.',
      learn: [],
      speakers: [{ name: 'Juan Loaiza', role: 'EVP, Oracle Database Technologies' }],
      area: 'AI trust, security, accuracy, governance', audience: 'General audience', job: 'Technology leaders and AI decision-makers',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1788897463251001HMSd'
    },
    {
      id: 'modernizing-airline-operations', day: 'monday', page: 38, kind: 'Theater',
      title: 'Modernizing Airline Operations with Exadata Cloud@Customer and AI', time: '2:10 PM – 2:30 PM', location: 'Theater 4, Customer Success Central, The Hub',
      description: 'See how Oracle AI Data Platform and AI Lakehouse capabilities unify operational and analytical data to support predictive maintenance, operational intelligence, and future AI initiatives.',
      learn: ['How to modernize critical database infrastructure while maintaining reliability', 'How Exadata Cloud@Customer, Customer Success Services, and ExaCare support transformation', 'How OCI can improve performance, availability, and operational efficiency', 'How a unified data foundation enables predictive maintenance and operational intelligence', 'How to prepare for scalable enterprise AI'],
      speakers: [{ name: 'Ather Khan', role: 'VP, Technical Account Management, Oracle' }, { name: 'Hitesh Shah', role: 'Director, Database Engineering and Operations – Digital Technology, United Airlines' }],
      area: 'AI Data Platform, AI Lakehouse, Migration and Modernization', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Tech Executive, Tech IT Manager, Business Executive',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1784344974059001WqoY'
    },
    {
      id: 'ai-and-ml-in-your-database', day: 'monday', page: 39, kind: 'Session',
      title: 'AI and ML in your database: What’s New and What’s Next', time: '3:15 PM – 4:00 PM', location: 'Marco Polo 803, Level 1',
      description: 'Explore what’s new and next for AI and machine learning in Oracle Autonomous AI Database and Oracle AI Database.',
      learn: ['What’s new in Oracle Database AI and machine learning capabilities', 'How to use Select AI and the Select AI Agent Framework', 'How built-in MCP and A2A Servers support connected AI applications', 'How Oracle Machine Learning enables in-database development', 'How security and governance support responsible AI adoption', 'When keeping sensitive data in the database can improve control and compliance'],
      speakers: [{ name: 'Mark Hornick', role: 'Senior Director, Machine Learning and AI Product Management, Oracle' }, { name: 'Heli K. Helskyaho', role: 'CEO, Miracle Finland Oy' }, { name: 'Sherry LaMonica', role: 'Lead Principal Product Manager, Oracle' }],
      area: 'AI, AI Agents, Autonomous AI Database, Oracle AI Database', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Business Manager, Database Administrator, Developer, Tech IT',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1784567626679001aOex'
    },
    {
      id: 'building-a-data-fabric-with-goldengate', day: 'monday', page: 40, kind: 'Session',
      title: 'Building a Data Fabric with GoldenGate, an AI Truth Layer for Data', time: '3:15 PM – 4:00 PM', location: 'Galileo 902, Level 1',
      description: 'Explore how Oracle GoldenGate supports a multicloud Data Fabric by connecting distributed data sources and moving changes across supported hybrid and multicloud environments.',
      learn: ['How Oracle GoldenGate connects distributed data sources', 'How change data movement supports hybrid and multicloud environments', 'Key capabilities and architecture of a multicloud Data Fabric', 'How timely data can support analytics, AI, and operational decision-making', 'Practical ways to build a more connected data foundation'],
      speakers: [{ name: 'Alex Kotopoulis', role: 'Director, Product Management, Oracle' }, { name: 'Jeffrey Pollock', role: 'VP, Product Management, Oracle' }],
      area: 'AI, AI Agents, AI Lakehouse, Analytics, Architecture, Developer Technologies, Integration, Multicloud Data Platform', audience: 'General Audience', job: 'Developer, Tech Executive, Tech IT',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785278825118001tmuE'
    },
    {
      id: 'build-trusted-apps-faster-with-apex', day: 'monday', page: 41, kind: 'Session',
      title: 'Build Trusted Apps Faster with New AI Features in Oracle APEX', time: '3:15 PM – 4:00 PM', location: 'Galileo 907, Level 1',
      description: 'Explore how Oracle APEX 26.2 brings built-in AI capabilities to applications, enabling more natural and intelligent interactions with enterprise data.',
      learn: ['How to add natural-language and conversational AI to APEX apps', 'How AI agents and tools securely access enterprise data', 'How to build intelligent dashboards, summaries, widgets, and reports', 'How agentic workflows can automate tasks and interactions', 'How RAG and AI Vector Search improve responses using private enterprise data'],
      speakers: [{ name: 'Marc Sewtz', role: 'Senior Director, Platform Software Engineering, Oracle' }],
      area: 'AI, Autonomous AI Database, Developer Technologies, Vector Search', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Business End User, Business Executive, Developer, Tech Executive',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785276266114001jmHT'
    },
    {
      id: 'build-ai-agents-on-enterprise-data', day: 'monday', page: 42, kind: 'Lab',
      title: 'Build AI Agents on Enterprise Data with Oracle AI Lakehouse', time: '4:00 PM – 5:30 PM', location: 'Casanova 507, Level 1',
      description: 'Explore how Oracle AI Lakehouse brings together data from Oracle databases and other supported sources while preserving the context needed for accurate analytics and AI-powered insights.',
      learn: ['How to discover and work with data from multiple sources', 'How a unified catalog supports data management and governance', 'How to build an AI agent grounded in enterprise data', 'How to create AI-powered analytics using trusted business data', 'How Oracle AI Lakehouse connects data while retaining relevant business context'],
      speakers: [{ name: 'Ashish Mittal', role: 'Vice president, Oracle' }, { name: 'Alexey Filanovskii', role: 'Lead Principal Product Manager, Oracle' }, { name: 'Onur Kocberber', role: 'Director of Development, Oracle' }],
      area: 'AI, AI Agents, AI Lakehouse, Analytics', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Developer', note: 'Bring your laptop to follow along for the best hands-on experience. Laptops are not provided.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1786657109646001fldF'
    },

    {
      id: 'unified-intelligence-with-federated-data', day: 'tuesday', page: 44, kind: 'Session',
      title: 'Unified Intelligence with Federated Data: Introducing Live AI Hub', time: '8:00 AM – 8:45 AM', location: 'Marco Polo 705, Level 1',
      description: 'Through practical examples, see how to federate and enrich enterprise data with metadata and business semantics, create a trusted foundation for AI, and design AI products for enterprise security, scalability, and resilience.',
      learn: ['How Live AI Hub accelerates the path from AI idea to production', 'How to work with data across distributed environments', 'How to enrich data with metadata and business semantics', 'How to establish a trusted foundation for enterprise AI', 'How to design AI products for security, scalability, and resilience'],
      speakers: [{ name: 'Massimo Castelli', role: 'Vice President, AI & Data Platform Strategy, Oracle' }, { name: 'Jose Cruz', role: 'Senior Product Management Director, Data Strategy and Architecture, Oracle' }],
      area: 'AI, AI Agents, AI Lakehouse, Architecture, Autonomous AI Database, Oracle AI Database', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Business Manager, Developer, Tech IT',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785278613329001KiKc'
    },
    {
      id: 'put-oracle-operational-data-to-work', day: 'tuesday', page: 45, kind: 'Session',
      title: 'Put Oracle Operational Data to Work for AI', time: '10:30 AM – 11:15 AM', location: 'Galileo 904, Level 1',
      description: 'Practical approaches for securely enabling governed analysis and AI while Oracle Database remains the system of record.',
      learn: ['How Oracle AI Lakehouse extends analytics and AI to existing Oracle data', 'How to avoid unnecessary database migration or application changes', 'How to apply governance and security to Oracle data used for AI', 'How to keep Oracle Database as the system of record', 'Practical strategies for modernizing analytics while protecting operational stability'],
      speakers: [{ name: 'Ashish Mittal', role: 'Vice president, Oracle' }, { name: 'Ekrem Soylemez', role: 'VP, Data Systems Engineering, Oracle' }],
      area: 'AI, AI Lakehouse, Oracle AI Database', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Database Administrator, Tech End User, Tech IT',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1786024465392001kgWk'
    },
    {
      id: 'no-need-to-move-your-data', day: 'tuesday', page: 46, kind: 'Session',
      title: 'No Need to Move Your Data for AI Agents: Build Them with Autonomous AI Lakehouse', time: '1:00 PM – 1:45 PM', location: 'Location not listed in source',
      description: 'Explore how Autonomous AI Lakehouse connects private enterprise data to agentic AI across live sources, including object stores, databases, other clouds, and SaaS applications.',
      learn: ['Why context, semantics, governance, and reliable pipelines matter for agents', 'How to connect agentic AI to live enterprise data sources', 'How catalogs and semantic layers improve data discovery and meaning', 'How open Iceberg support and unified security support interoperability and control', 'How Exadata performance can support AI workloads across multicloud environments'],
      speakers: [{ name: 'Nipun Argarwal', role: 'SVP, Software Engineering, Database' }],
      area: 'AI, AI Agents, Autonomous AI Database, Oracle AI Database', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Business Manager, Database Administrator, Developer, Tech IT',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785276532180001RVMt'
    },
    {
      id: 'ai-without-cloud-boundaries', day: 'tuesday', page: 47, kind: 'Session',
      title: 'AI Without Cloud Boundaries: Autonomous AI Database on AWS, Azure, Google Cloud', time: '1:00 PM – 1:45 PM', location: 'Titian 2206, Level 2',
      description: 'Explore how a fully managed, self-securing, and self-scaling Oracle Autonomous AI Database can accelerate AI development and reduce operational complexity.',
      learn: ['How to build AI applications across your preferred cloud', 'How Autonomous AI Database Serverless simplifies database operations', 'How to use Select AI and Oracle AI Vector Search', 'How to implement RAG with enterprise data', 'How autonomous capabilities support secure, scalable AI development'],
      speakers: [{ name: 'Can Tuzla', role: 'Lead Principal Product Manager, Oracle' }, { name: 'Nilay Panchal', role: 'Principal Product Manager – Autonomous Database, Oracle' }],
      area: 'Autonomous AI Database, Multicloud Data Platform', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Database Administrator',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785442327087001c9qC'
    },
    {
      id: 'build-a-rag-app-in-90-minutes', day: 'tuesday', page: 48, kind: 'Lab',
      title: 'Build a RAG App in 90 Minutes: AI Vector Search Meets Your Favorite LLM', time: '1:00 PM – 2:30 PM', location: 'Casanova 605, Level 1',
      description: 'Build a working retrieval-augmented generation (RAG) application from scratch using Oracle Autonomous AI Database and AI Vector Search with the LLM of your choice on AWS, Azure, or Google Cloud.',
      learn: ['How to load documents and generate vector embeddings', 'How to store embeddings in Oracle Autonomous Database', 'How to write semantic search queries with AI Vector Search', 'How to connect search and an LLM for a RAG application', 'How to build a natural-language Q&A experience'],
      speakers: [{ name: 'Rajib Sadhu', role: 'Director, Product Management, Oracle' }],
      area: 'AI, Multicloud, Autonomous AI Database', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Developer, Tech Executive, Tech End User, Tech IT Manager', note: 'Walk out with working code you can deploy back at the office. Participants must bring their own standard Windows or Mac laptop with at least 8GB of RAM, Chrome installed. Optional: Python3, Codex or other Coding Agent, VSCode.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1786490483554001X0gj'
    },
    {
      id: 'from-embeddings-to-agent-memory', day: 'tuesday', page: 49, kind: 'Lab',
      title: 'From Embeddings to Agent Memory: Build on Autonomous AI Vector Database', time: '1:00 PM – 2:30 PM', location: 'Marco Polo 707, Level 1',
      description: 'In this hands-on lab, build vector-powered AI applications with Oracle Autonomous AI Vector Database.',
      learn: ['How to import and use an ONNX embedding model', 'How to generate and store vector embeddings', 'How to perform semantic similarity searches', 'How vector and metadata indexes improve retrieval', 'How to use Python SDKs and REST APIs', 'How Oracle AI Agent Memory supports conversational applications'],
      speakers: [{ name: 'Girdhari Ghantiyala', role: 'Senior Director, Data Systems Engineering, Oracle' }, { name: 'Brian Macdonald', role: 'Senior Principal Product Manager, Oracle' }],
      area: 'AI, Oracle Cloud Infrastructure, AI Agents, AI Lakehouse, Architecture, Autonomous AI Database, Developer Technologies, Oracle AI Database', audience: 'General Audience', job: 'Developer', note: 'Bring your laptop to follow along for the best hands-on experience. Laptops are not provided.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1782927646060001DKqJ'
    },
    {
      id: 'ai-without-data-movement-live-ai-hub', day: 'tuesday', page: 50, kind: 'Theater',
      title: 'AI Without Data Movement: Meet Live AI Hub', time: '1:10 PM – 1:30 PM', location: 'Theater 1, Oracle AI World Hub',
      description: 'Explore how Live AI Hub unlocks enterprise AI capabilities across existing data while reducing the need for data movement, copying, and lengthy transformation projects.',
      learn: ['How to build agents across existing enterprise data', 'How to reduce data movement and transformation effort', 'How to apply security, governance, permissions, and AI guardrails', 'How to enable natural-language access to data', 'How to accelerate machine learning and deliver value faster'],
      speakers: [{ name: 'Jose Cruz', role: 'Director of Product Management, Data Strategy and Architecture, Oracle' }],
      area: 'AI, Multicloud, AI Agents, AI Lakehouse, Architecture, Autonomous AI Database, Oracle AI Database', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Developer, Tech Executive, Tech IT Manager, Business Manager, Business Executive, Business End User',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785278592644001veNi'
    },
    {
      id: 'building-the-foundation-for-ai-cbp', day: 'tuesday', page: 51, kind: 'Theater',
      title: 'Building the Foundation for AI: CBP’s Cloud Modernization Strategy', time: '1:50 PM – 2:10 PM', location: 'Theater 2, Customer Success Central, The Hub',
      description: 'U.S. Customs and Border Protection and Oracle Customer Success Services share lessons from building a secure, resilient cloud environment that supports a vital national mission.',
      learn: ['How to approach modernization of mission-critical workloads', 'How to build security and resilience into a cloud environment', 'How OCI and Oracle Customer Success Services support transformation', 'How AI Data Platform and AI Lakehouse enable analytics and AI readiness', 'Strategies for reducing risk and improving operational agility'],
      speakers: [{ name: 'Ather Khan', role: 'VP, Technical Account Management, Oracle' }, { name: 'Sunil Maghugiri', role: 'CTO, U.S. Customs and Border Protection' }],
      area: 'AI Data Platform, AI Lakehouse, Migration and Modernization', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Tech Executive, Tech IT Manager, Business Executive',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1784345497286001mvVE'
    },
    {
      id: 'production-ai-starts-with-the-data-foundation', day: 'tuesday', page: 52, kind: 'Session',
      title: 'Production AI Starts with the Data Foundation!', time: '2:15 PM – 3:00 PM', location: 'Marco Polo 705, Level 1',
      description: 'Discover how Oracle Autonomous AI Database provides a trusted foundation for mission-critical AI with built-in AI capabilities, vector indexing, and the new Autonomous AI Vector Database service.',
      learn: ['How Oracle Autonomous AI Database combines high performance, deep data security, resilience, and automated operations', 'How to dynamically scale resources for changing workloads', 'How to modernize existing data platforms or develop next-generation AI applications', 'How to build, deploy, and scale AI-powered applications with confidence'],
      speakers: [{ name: 'Cetin Ozbutun', role: 'EVP, Product and Research, Data Lakehouse and Autonomous AI Database' }],
      area: 'Autonomous AI Database, AI foundation, security, resilience, scale', audience: 'General Audience', job: 'Technology leaders and AI builders',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785277712412001oJcW'
    },

    {
      id: 'what-should-you-migrate-first', day: 'wednesday', page: 54, kind: 'Session',
      title: 'What Should You Migrate First? Find It, Move It, Modernize It', time: '9:00 AM – 9:45 AM', location: 'Galileo 904, Level 1',
      description: 'Modernization starts with understanding where the greatest opportunities lie. Explore how Oracle Estate Explorer maps database environments, then see how AutoMigrate executes unattended, monitored, highly parallel migrations to Oracle Autonomous AI Database.',
      learn: ['How to assess a diverse database estate', 'How to identify and prioritize migration candidates', 'How AutoMigrate simplifies parallel database migrations', 'How monitoring and logging support unattended execution', 'How to measure migration outcomes and business value'],
      speakers: [{ name: 'Simon Griffiths', role: 'VP Product Management, Oracle' }, { name: 'Mike Dietrich', role: 'VP Product Management, Oracle' }],
      area: 'Autonomous AI Database, Multicloud Data Platform', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Database Administrator',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1784673539121001bJfr'
    },
    {
      id: 'build-a-real-ai-data-foundation', day: 'wednesday', page: 55, kind: 'Session',
      title: 'Build a Real AI Data Foundation: Architectural Patterns for AI Lakehouse', time: '9:00 AM – 9:45 AM', location: 'Titian 2206, Level 2',
      description: 'Explore the architectural patterns behind Oracle AI Lakehouse, including decoupled storage and compute, open table formats, federated query execution, distributed metadata, and cross-cloud data access.',
      learn: ['Key architectural patterns for AI-ready data platforms', 'How to separate storage and compute for flexibility and scale', 'How open formats and federated queries support interoperability', 'How to enable cross-cloud and on-premises data access', 'Design considerations for governance, performance, and operations'],
      speakers: [{ name: 'Jacco Draaijer', role: 'VP, Data Systems Engineering, Oracle' }, { name: 'Gaurav Chadha', role: 'Director, Application Software Engineering, Oracle' }],
      area: 'AI, AI Lakehouse, Oracle AI Database', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Database Administrator, Developer, Tech IT',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1786024621758001Yjx0'
    },
    {
      id: 'data-events-to-data-actions', day: 'wednesday', page: 56, kind: 'Lab',
      title: 'Go from Data Events to Data Actions with AI and GoldenGate', time: '9:00 AM – 10:30 AM', location: 'Marco Polo 703, Level 1',
      description: 'Move beyond dashboards and put AI to work on live enterprise data. In this hands-on lab, use a conversational chat experience to operate Oracle GoldenGate.',
      learn: ['How to manage and troubleshoot GoldenGate with natural language', 'How to work with change data capture events', 'How to build an event-aware AI agent', 'How agents can interpret updates and trigger recommendations or alerts', 'How conversational operations and real-time data support agentic AI'],
      speakers: [{ name: 'Pete Inzana', role: 'Director, Product Management, Oracle' }, { name: 'Denis Gray', role: 'VP, Product Management, Oracle' }, { name: 'Alex Lima', role: 'Director, Product Management, Oracle' }],
      area: 'AI, Integration, AI Agents, AI Lakehouse', audience: 'General Audience', job: 'Developer, Database Administrator', note: 'Bring your laptop to follow along for the best hands-on experience. Laptops are not provided.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785277424913001XJvE'
    },
    {
      id: 'one-database-experience', day: 'wednesday', page: 57, kind: 'Bootcamp',
      title: 'One Database Experience: Your Choice of Clouds', time: '9:00 AM – 11:00 AM', location: 'Casanova 603, Level 1',
      description: 'Explore how Oracle Autonomous AI Database provides a consistent, fully managed experience across OCI, AWS, Microsoft Azure, and Google Cloud, with integration into native cloud services.',
      learn: ['How to run a consistent database experience across multiple clouds', 'How autonomous automation reduces operational effort', 'How to support security, high availability, and disaster recovery', 'How to scale, clone, migrate, and access data across clouds', 'How monitoring and alerts simplify database operations'],
      speakers: [{ name: 'Michelle Malcher', role: 'Director, Product Management, Oracle' }, { name: 'Nilay Panchal', role: 'Principal Product Manager, Oracle' }, { name: 'Can Tuzla', role: 'Lead Principal Product Manager, Oracle' }, { name: 'Marcos Arancibia', role: 'Lead Principal Product Manager, Oracle' }],
      area: 'Multicloud, Autonomous AI Database', audience: 'General Audience', job: 'Database Administrator', note: 'This is a 2-hour live interactive demo session.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1786381671582001f4g1'
    },
    {
      id: 'developer-demo-production-ready-agents', day: 'wednesday', page: 58, kind: 'Session',
      title: 'Developer Demo: Building Production-Ready AI Agents', time: '10:15 AM – 11:00 AM', location: 'Galileo 902, Level 1',
      description: 'In this all-demo session, build a Spring Boot support-ticket workflow on Oracle AI Database.',
      learn: ['How to design resilient, event-driven AI workflows', 'How to combine summaries, embeddings, caching, and vector search', 'How to handle retries and partial failures', 'How to manage regional data and approval history', 'How MicroTx supports distributed workflows'],
      speakers: [{ name: 'Anders Swanson', role: 'Developer Evangelist, Oracle' }],
      area: 'AI, Autonomous AI Database, Developer Technologies, Oracle AI Database', audience: 'Beginner', job: 'Developer',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785338718537001iyrl'
    },
    {
      id: 'no-need-to-pick-a-data-model', day: 'wednesday', page: 59, kind: 'Session',
      title: 'No Need to Pick a Data Model: Build Apps That Can Use Any Model', time: '10:15 AM – 11:00 AM', location: 'Galileo 1002, Level 1',
      description: 'Explore how developers can build faster, adapt as requirements change, and rely on a platform designed for mission-critical workloads.',
      learn: ['How to work with diverse data types in one application', 'How JSON and relational duality views support changing requirements', 'How AI Vector Search enables semantic retrieval', 'How enterprise data management supports secure, scalable AI', 'How to accelerate development on a mission-critical database platform'],
      speakers: [{ name: 'Beda Hammerschmidt', role: 'Vice President, Oracle' }, { name: 'Josh Spiegel', role: 'Data Systems Engineering Architect, Oracle' }, { name: 'Ayush Soni', role: 'Oracle Cloud Architect, TEKsystems Global Services, LLC' }, { name: 'Shawn Moon', role: 'Senior Director, Ticketmaster' }],
      area: 'AI, Autonomous AI Database, Developer Technologies, Oracle AI Database', audience: 'Beginner', job: 'Developer',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1785276786683001A8cg'
    },
    {
      id: 'build-a-medallion-data-pipeline', day: 'wednesday', page: 60, kind: 'Lab',
      title: 'Build a Medallion Data Pipeline with Oracle AI Lakehouse', time: '11:00 AM – 12:30 PM', location: 'Casanova 507, Level 1',
      description: 'Build an end-to-end medallion data pipeline with Oracle AI Lakehouse and Apache Iceberg.',
      learn: ['How to ingest and organize data using Apache Iceberg', 'How to design medallion layers for progressive data refinement', 'How to apply governance throughout the data pipeline', 'How to prepare data for analytics, sharing, and AI use cases', 'How Oracle AI Lakehouse supports cross-cloud pipeline management'],
      speakers: [{ name: 'Gaurav Chadha', role: 'Director, Application Software Engineering, Oracle' }, { name: 'Jay Sardhara', role: 'Consulting Member of Technical Staff, Oracle' }, { name: 'Vishal Singh', role: 'Senior Director, Product Management, Autonomous AI Lakehouse, Oracle' }],
      area: 'AI, AI Agents, AI Lakehouse, Analytics', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Developer', note: 'Bring your laptop to follow along for the best hands-on experience. Laptops are not provided.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1786657094342001UM8k'
    },
    {
      id: 'one-data-model-every-app-experience', day: 'wednesday', page: 61, kind: 'Lab',
      title: 'One Data Model, Every App Experience: Build on a Converged Database', time: '11:00 AM – 12:30 PM', location: 'Casanova 602, Level 1',
      description: 'In this hands-on workshop, build an application on Oracle AI Database using one canonical data model projected into the formats different consumers need. Work with JSON Relational Duality Views, SQL, Spatial, Oracle Graph, and Oracle AI Vector Search while applying appropriate data access controls.',
      learn: ['How one data model can support multiple application needs', 'How to serve operational data as JSON, SQL, graph, and vector representations', 'How to use Duality Views, Spatial, Graph, and AI Vector Search', 'How to build AI-ready applications without duplicate data pipelines', 'How to apply data access controls across use cases'],
      speakers: [{ name: 'Hermann Baer', role: 'Senior Director Product Management, Oracle' }, { name: 'Josh Spiegel', role: 'Data Systems Engineering Architect, Oracle' }],
      area: 'Developer Technologies, Oracle AI Database', audience: 'Beginner', job: 'Developer', note: 'Bring your laptop to follow along for the best hands-on experience. Laptops are not provided.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1783540984440001Gsjo'
    },
    {
      id: 'analytical-ai-build-the-model', day: 'wednesday', page: 62, kind: 'Theater',
      title: 'Analytical AI: Build the Model. Ask the Lakehouse', time: '12:20 AM – 12:40 PM', location: 'Theater 2, Oracle AI World Hub',
      description: 'Follow a sales scenario in which AI-assisted modeling creates Analytic Views and Essbase cubes, then use conversational questions to explore a multidimensional what-if analysis.',
      learn: ['How to extend Oracle data and reporting investments with AI', 'How AI-assisted modeling creates Analytic Views and Essbase cubes', 'How to use conversational analytics for multidimensional what-if analysis', 'How semantic models preserve business meaning', 'How MCP and A2A patterns connect and coordinate analytical agents'],
      speakers: [{ name: 'Ekrem Soylemez', role: 'VP, Data Systems Engineering, Oracle' }],
      area: 'AI, AI Agents, AI Lakehouse, Analytics', audience: 'Intermediate (1–5 yrs user of Oracle)', job: 'Business End User, Business Manager, Database Administrator, Tech IT',
      note: 'Time is shown as printed in the source guide.',
      aiWorldUrl: 'https://reg.rf.oracle.com/flow/oracle/oaiw26/catalog/page/catalog/session/1789534256917001loWV'
    },
    {
      id: 'oracle-global-leaders-ai-world-event', day: 'wednesday', page: 64, kind: 'Event',
      title: 'Oracle Global Leaders AI World Event', time: '1:00 PM – 7:30 PM', location: 'Ghostbar, The Palms Hotel',
      description: 'Join Oracle Global Leaders customers, partners, guests, Oracle staff, and Database Executive Management to sum up the week, hear database news, provide feedback, and connect with peers and product leaders.',
      learn: ['Open-door feedback panel with Database Executive Management', 'Presentations from customers and partners sharing successful data management implementations', 'Recognition of exceptional individuals through the Oracle Global Leaders Awards 2026', 'Time to reflect, unwind, and liaise with Oracle development and product management teams'],
      speakers: [{ name: 'Juan Loaiza', role: 'Executive Vice President, Mission-Critical Database Technologies, Oracle' }, { name: 'Çetin Özbütün', role: 'Executive Vice President, DW and Autonomous Database Technologies' }, { name: 'Hasan Rizvi', role: 'Executive Vice President, Database Engineering' }, { name: 'Reiner Zimmermann', role: 'Vice President, Product Management, Oracle Global Leaders Program' }, { name: 'Laura McKechnie', role: 'Director, Product Management, Oracle Global Leaders Program' }],
      area: 'Oracle AI World, Global Leaders, customer and partner community', audience: 'Global Leaders customers, partners, guests, and Oracle teams', job: 'Technology leaders, database executives, product and engineering leaders',
      note: 'Space is limited, so please register today.',
      aiWorldUrl: 'https://eventreg.oracle.com/profile/web/index.cfm?PKwebID=0x977019abcd'
    }
  ]
};
