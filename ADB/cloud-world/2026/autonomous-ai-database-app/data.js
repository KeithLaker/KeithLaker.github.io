(function () {
  "use strict";
  var categories = {
    operations: { label: "Operations", description: "Automation handles routine database tasks so teams can focus on applications and data." },
    cost: { label: "Performance & cost", description: "Scale compute with demand and choose a pricing model that fits how you run workloads." },
    trust: { label: "Security & availability", description: "Explore controls for data protection, service continuity and governed AI access." },
    ai: { label: "AI & machine learning", description: "Use natural language, vector search, machine learning and agent workflows with your data." },
    analytics: { label: "Data & analytics", description: "Load, prepare, share and analyze data with tools included alongside the database." },
    development: { label: "App development", description: "Build with SQL, APIs, low-code tools, JSON and the frameworks your teams already use." },
    multicloud: { label: "Lakehouse & multicloud", description: "Connect to data across Oracle and other clouds, including open table formats." },
    migration: { label: "Migration", description: "Assess, plan and move Oracle Database estates with tools for different use cases." }
  };

  var items = [
    {
      id: "managed-database", category: "operations", title: "Fully managed database",
      summary: "Automate routine database management in a cloud-native service.",
      description: "Autonomous AI Database automates common operational tasks across the database lifecycle, including provisioning, patching, backups, configuration and tuning.",
      bullets: ["Reduce repetitive database administration.", "Use built-in tools for monitoring and management.", "Run application, analytics and AI workloads on one service."],
      sources: ["Executive overview · slide 3", "Executive overview · slide 10", "Technical overview · slide 51", "Technical overview · slide 77"]
    },
    {
      id: "automated-operations", category: "operations", title: "Automated operations",
      summary: "Provision, configure, patch and tune databases with built-in automation.",
      description: "The presentations describe a set of autonomous management capabilities designed to reduce manual work and help maintain database operations.",
      bullets: ["Automated provisioning and configuration.", "Automated patching, backups and tuning.", "Automatic failover and workload-aware scaling."],
      sources: ["Executive overview · slide 10", "Executive overview · slide 43"]
    },
    {
      id: "auto-indexing", category: "operations", title: "Automatic indexing and tuning",
      summary: "Let the database identify opportunities to improve workload performance.",
      description: "Autonomous capabilities monitor workload patterns and can identify missing indexes or configuration changes that may improve performance.",
      bullets: ["Monitor workload behavior.", "Detect missing indexes that could accelerate applications.", "Automatically configure and tune for specific workloads."],
      sources: ["Executive overview · slide 43"]
    },
    {
      id: "auto-patching", category: "operations", title: "Hands-free patch management",
      summary: "Apply database patches with zero downtime and no service interruption.",
      description: "The executive overview describes automated patch management designed to keep the database current while maintaining service availability.",
      bullets: ["Automated patch management.", "Designed for zero downtime and no interruption of service.", "Part of the wider automated operations feature set."],
      sources: ["Executive overview · slide 14", "Executive overview · slide 43"]
    },
    {
      id: "elastic-compute", category: "cost", title: "Elastic compute and pay-per-use",
      summary: "Scale compute as workload demand changes and pay for actual use.",
      description: "Autonomous AI Database can scale compute resources to match workload requirements. The deck contrasts this with paying for a fixed peak capacity even when utilization is low.",
      bullets: ["Start at two ECPUs and scale elastically.", "Scale CPU and I/O as workload requirements change.", "Each database is billed independently in the per-database model."],
      sources: ["Executive overview · slide 8", "Technical overview · slide 73"],
      videos: [{ file: "auto-scaling-demo.mp4", title: "Autonomous AI Database auto-scaling", note: "Demo clip from the technical overview, slide 74." }]
    },
    {
      id: "elastic-pools", category: "cost", title: "Elastic Pools",
      summary: "Consolidate many databases into a shared pool of compute.",
      description: "Elastic Pools let customers consolidate databases and receive a single bill for pooled capacity, while retaining database functionality, scalability and performance.",
      bullets: ["Aggregate dozens or hundreds of databases into a pool.", "Start pools at 128 ECPUs.", "The executive overview cites up to four to eight times cost savings versus per-database pricing."],
      sources: ["Executive overview · slide 8"]
    },
    {
      id: "business-value", category: "cost", title: "Business value and total cost",
      summary: "The executive overview summarizes return, payback and total cost results.",
      description: "The supplied overview cites an IDC Business Value White Paper sponsored by Oracle. These are the figures shown in the deck, not a forecast for an individual customer.",
      bullets: ["436% three-year return on investment.", "Five-month payback on investment.", "48% reduction in total cost of ownership.", "The deck cites an average annual benefit per Autonomous AI Database."],
      sources: ["Executive overview · slide 11"]
    },
    {
      id: "availability", category: "trust", title: "High availability and disaster recovery",
      summary: "Use automated protection and disaster recovery features for critical systems.",
      description: "Autonomous AI Database includes availability and disaster recovery capabilities. The presentation cites an availability SLA of up to 99.995%, alongside Autonomous Data Guard and Maximum Availability Architecture options.",
      bullets: ["Autonomous Data Guard supports standby protection.", "Automated failover is designed to be transparent to applications.", "The slide deck cites an availability SLA of up to 99.995%."],
      sources: ["Executive overview · slides 10, 12", "Executive overview · slide 43"]
    },
    {
      id: "data-security", category: "trust", title: "Always-on data security",
      summary: "Apply encryption, auditing and automated threat response.",
      description: "The deck describes always-on security features and automated protections for sensitive and regulated data, supported by Oracle's zero-trust model for database access.",
      bullets: ["Automated threat detection and response.", "Always-on data encryption and auditing.", "Security policies continue to apply to AI-generated database queries."],
      sources: ["Executive overview · slides 3, 5, 14, 43", "Technical overview · slide 67"]
    },
    {
      id: "ai-access-control", category: "trust", title: "Control AI data access",
      summary: "Use Select AI profiles and database security policies to define query scope.",
      description: "Select AI profiles identify the schema, tables, views or vector indexes available to a natural-language query. Existing database privileges and policies continue to enforce access.",
      bullets: ["Use profiles to choose which data sources a query can use.", "Profiles can include a full schema or selected objects.", "Database privileges and virtual private database policies still apply."],
      sources: ["Executive overview · slide 14", "Technical overview · slide 67"]
    },
    {
      id: "select-ai", category: "ai", title: "Select AI and natural-language queries",
      summary: "Ask questions about business data in natural language.",
      description: "Select AI provides a SQL and PL/SQL interface for generative AI. It can generate database-specific SQL and help teams build applications that let users query data using natural language.",
      bullets: ["Generate SQL for a database using a natural-language prompt.", "Build natural-language experiences into applications.", "The deck describes use with different Select AI profiles and model providers."],
      sources: ["Executive overview · slides 24, 68", "Technical overview · slides 53, 54, 84"],
      videos: [
        { file: "ask-oracle-select-ai-demo.mp4", title: "Ask Oracle APEX app", note: "A single clip is reused on the NL2SQL, RAG and Agent slides in the technical overview." },
        { file: "select-ai-query-demo.mp4", title: "Select AI query demo", note: "Video attached to the Select AI query material in the technical overview, slide 85." }
      ]
    },
    {
      id: "rag", category: "ai", title: "Retrieval augmented generation",
      summary: "Ground generative AI responses in private, current business data.",
      description: "Select AI RAG combines database content with generative AI responses. The deck describes managing vector indexes from the knowledge base and using SQL extensions to generate grounded responses.",
      bullets: ["Use private business data as context for generated responses.", "Manage vector indexes for a knowledge base.", "Keep structured, vector and unstructured data in the database platform."],
      sources: ["Executive overview · slides 17, 23", "Technical overview · slides 56, 57, 59"],
      videos: [{ file: "select-ai-rag-demo.mp4", title: "Select AI RAG demo", note: "Clip placed between the RAG overview and the Ask Oracle RAG app slide." }]
    },
    {
      id: "vector-search", category: "ai", title: "AI Vector Search",
      summary: "Store and search semantic representations alongside other data.",
      description: "AI Vector Search supports retrieval workflows by storing vector representations of content and searching for semantically similar data. The deck lists multiple vector types, index options and utility functions.",
      bullets: ["Support for sparse, dense and binary vectors.", "Use HNSW or IVF Flat vector indexes.", "Work with vectors in JSON and with external tables."],
      sources: ["Executive overview · slide 17", "Technical overview · slides 56, 57"]
    },
    {
      id: "sql-ai-functions", category: "ai", title: "Apply generative AI from SQL",
      summary: "Generate, transform and summarize private business data with SQL functions.",
      description: "The presentations show how SQL can call AI functions to create content, transform records and summarize business data, then process results like other query output.",
      bullets: ["Use standard SQL statements and SQL functions.", "Apply generative AI to private business data.", "Build natural-language applications on top of query results."],
      sources: ["Technical overview · slides 55, 60"],
      videos: [
        { file: "natural-language-apps-demo.mp4", title: "Extend natural-language apps with SQL", note: "Demo clip from slide 55." },
        { file: "select-ai-sql-functions-demo.mp4", title: "Use Select AI SQL functions", note: "Demo clip from slide 60." }
      ]
    },
    {
      id: "ai-agents", category: "ai", title: "Select AI Agent",
      summary: "Build, deploy and manage agents that work with database tools and data.",
      description: "Select AI Agent provides an in-database framework for multi-step agent workflows. The deck describes built-in reasoning, custom tools, conversations, evaluation and automatic memory management.",
      bullets: ["Build custom tools with PL/SQL or invoke external tools with REST.", "Use short-term and long-term memory across conversations.", "Use a built-in ReAct pattern and pre-built tools."],
      sources: ["Executive overview · slide 25", "Technical overview · slides 64, 95"],
      videos: [{ file: "data-science-agent-demo.mov", title: "Data Science Agent", note: "The same clip appears in both supplied presentations: executive overview slide 26 and technical overview slide 71." }]
    },
    {
      id: "machine-learning", category: "ai", title: "Machine learning in the database",
      summary: "Model and score data where it already lives.",
      description: "Autonomous AI Database includes machine learning capabilities, AutoML tools and notebooks. The overview lists more than 30 machine learning algorithms.",
      bullets: ["Use AutoML to simplify model development.", "Run models close to the data.", "Use built-in tools for data science and analysis."],
      sources: ["Executive overview · slides 4, 17, 22"]
    },
    {
      id: "model-choice", category: "ai", title: "Choose AI models for each use case",
      summary: "Connect Select AI to leading cloud and private model options.",
      description: "The executive overview lists model and framework options that customers can use with Autonomous AI Database, including managed generative AI services, open-source options and private LLMs.",
      bullets: ["Options listed include OCI Generative AI, OpenAI, Cohere, Google and Anthropic.", "The deck also names Hugging Face, LangChain, ONNX, LangGraph and Amazon Bedrock.", "Select AI profiles can be tailored to different use cases."],
      sources: ["Executive overview · slide 24"]
    },
    {
      id: "data-studio", category: "analytics", title: "Data Studio",
      summary: "Load, prepare, model and share data with included self-service tools.",
      description: "Data Studio combines data loading and integration, transformation, modeling and secure data sharing. It is managed alongside the database.",
      bullets: ["Load data from many sources.", "Prepare and transform data for analytics.", "Model and securely share data with teams, partners and customers."],
      sources: ["Executive overview · slides 22, 33"],
      videos: [{ file: "ai-data-loading-demo.mp4", title: "AI-enhanced data loading", note: "Demo clip from the technical overview, slide 40." }]
    },
    {
      id: "data-marketplace", category: "analytics", title: "Data Marketplace",
      summary: "Find data products and import selected datasets into your database.",
      description: "The marketplace lets teams explore available datasets, import them into a database and share their own data products with people in the organization.",
      bullets: ["Explore available datasets.", "Import datasets with one click.", "Add datasets for colleagues to discover and use."],
      sources: ["Technical overview · slide 50"],
      videos: [{ file: "data-marketplace-demo.mp4", title: "Data Marketplace demo", note: "Demo clip from the technical overview, slide 50." }]
    },
    {
      id: "data-sharing", category: "analytics", title: "Data sharing and catalog tools",
      summary: "Find, describe and share data through built-in self-service capabilities.",
      description: "The presentations include data catalog, data sharing and semantic modeling among the self-service tools available with Autonomous AI Database.",
      bullets: ["Integrate and share data without a separate service.", "Use catalog and semantic modeling tools.", "Connect analytics workflows to cloud and multicloud data sources."],
      sources: ["Executive overview · slide 22", "Technical overview · slide 33"]
    },
    {
      id: "converged-data", category: "analytics", title: "A converged database for many data types",
      summary: "Work with relational, JSON, graph, spatial and vector data in one service.",
      description: "The database supports multiple data models and workload types. The executive overview highlights a converged engine for building applications and analytics without maintaining specialized databases for each data type.",
      bullets: ["Use relational data alongside JSON and XML.", "Use graph and spatial capabilities.", "Add vector search to the same database platform."],
      sources: ["Executive overview · slides 3, 6, 18, 20", "Technical overview · slides 34, 56"]
    },
    {
      id: "low-code", category: "development", title: "Build with the tools your team knows",
      summary: "Choose low-code, SQL, REST, Python or notebooks.",
      description: "The database includes developer tools and interfaces for teams with different development styles, from low-code application building through SQL and Python workflows.",
      bullets: ["Build applications with Oracle APEX.", "Use SQL and REST services.", "Work with Python, notebooks and graph tools."],
      sources: ["Executive overview · slides 6, 18"]
    },
    {
      id: "mongodb-api", category: "development", title: "MongoDB API",
      summary: "Use MongoDB tools and drivers with a collection backed by Oracle Database.",
      description: "The MongoDB API lets developers continue to use MongoDB tools, drivers and frameworks while the collection is backed by an Oracle Database table with a JSON column.",
      bullets: ["Use MongoDB-compatible tools, drivers and frameworks.", "Query JSON alongside relational, XML and spatial data.", "Expose relational data and query results as collections."],
      sources: ["Executive overview · slide 20"]
    },
    {
      id: "rest-and-integrations", category: "development", title: "REST APIs and cloud integrations",
      summary: "Connect applications, code repositories and cloud services.",
      description: "The presentations describe inbound and outbound REST access and integrations with cloud services, code repositories, notifications and developer tools.",
      bullets: ["Use REST access from applications and cloud services.", "Connect to code repositories and cloud functions.", "Send messages from database functions to collaboration tools such as Slack."],
      sources: ["Executive overview · slides 19, 21", "Technical overview · slide 38"]
    },
    {
      id: "private-data-ai", category: "ai", title: "Bring private data into AI workflows",
      summary: "Combine enterprise data with model reasoning while keeping data access governed.",
      description: "The executive overview describes using private enterprise data with generative AI models to produce responses grounded in current customer and business information.",
      bullets: ["Use database and data-lake content as context.", "Connect cloud data sources and public models.", "Apply database permissions to the data an AI workflow can query."],
      sources: ["Executive overview · slides 14, 23, 24"]
    },
    {
      id: "iceberg", category: "multicloud", title: "Apache Iceberg and open lakehouse data",
      summary: "Access open table-format data alongside Oracle database workloads.",
      description: "The presentations describe using Apache Iceberg with Oracle data platform capabilities and show a catalog workflow for accessing Iceberg tables.",
      bullets: ["Access Iceberg data through a catalog workflow.", "Combine open table formats with Oracle database performance and reliability.", "Use the same platform for AI and analytics on enterprise data."],
      sources: ["Executive overview · slide 29", "Technical overview · slide 42"],
      videos: [{ file: "iceberg-table-access-demo.mp4", title: "Access Iceberg tables", note: "Autonomous Database Catalog demo from the technical overview, slide 42." }]
    },
    {
      id: "live-ai-hub", category: "multicloud", title: "Live AI Hub and federated queries",
      summary: "Use AI to query data across Oracle and non-Oracle sources.",
      description: "Live AI Hub uses AI Data Gateway to create federated queries across on-premises and cloud data sources. The deck also describes using it with older Oracle Database versions.",
      bullets: ["Generate SQL from natural-language questions.", "Query multiple on-premises and cloud sources.", "Use the AI Data Gateway with older database versions such as 19c."],
      sources: ["Executive overview · slide 27", "Technical overview · slide 63"]
    },
    {
      id: "multicloud", category: "multicloud", title: "Run where your organization needs it",
      summary: "Use Autonomous AI Database across Oracle Cloud and partner-cloud options.",
      description: "The executive overview lists Oracle Cloud, Oracle Database@Azure, Oracle Database@Google Cloud, Oracle Database@AWS and Dedicated Cloud@Customer.",
      bullets: ["Use public cloud or dedicated cloud deployments.", "Connect to data and services across cloud environments.", "Access cloud data using native cloud policies and built-in integration."],
      sources: ["Executive overview · slides 7, 19", "Executive overview · slide 34"]
    },
    {
      id: "migration-tools", category: "migration", title: "Plan and migrate database estates",
      summary: "Assess databases, prioritize migrations and select the right migration path.",
      description: "The executive overview describes tools for reviewing an Oracle Database estate, estimating migration effort, planning priorities and comparing technical business cases.",
      bullets: ["Assess database estates with Estate Explorer and CPAT.", "Compare options and simulate total cost.", "Use OCI Database Migration Service, GoldenGate, ZDM or Data Pump for different migration cases.", "The presentation describes migration from Oracle Database 11g and later."],
      sources: ["Executive overview · slide 15"]
    },
    {
      id: "workload-flexibility", category: "operations", title: "One service for different workloads",
      summary: "Run application, analytics, AI and mixed workloads without separate specialist databases.",
      description: "Autonomous AI Database supports a range of workload types and development approaches, with the service adapting resources to workload needs.",
      bullets: ["Use one service for applications, analytics, AI/ML and mixed workloads.", "Choose low-code, SQL or code-first development.", "Use different data types without maintaining a separate database for each one."],
      sources: ["Executive overview · slides 3, 6"]
    }
  ];

  var categoryGraphics = {
    operations: ["executive-10.jpg", "technical-51.jpg"],
    cost: ["executive-08.jpg", "technical-73.jpg"],
    trust: ["executive-14.jpg", "technical-22.jpg"],
    ai: ["executive-25.jpg", "technical-64.jpg"],
    analytics: ["executive-33.jpg", "technical-49.jpg"],
    development: ["executive-18.jpg", "technical-33.jpg"],
    multicloud: ["executive-34.jpg", "technical-43.jpg"],
    migration: ["executive-15.jpg"]
  };
  Object.keys(categoryGraphics).forEach(function (key) { categories[key].graphics = categoryGraphics[key]; });
  var featureGraphics = {
    "managed-database": ["executive-03.jpg", "technical-51.jpg"],
    "automated-operations": ["executive-10.jpg", "executive-14.jpg"],
    "auto-indexing": ["executive-10.jpg"],
    "auto-patching": ["executive-14.jpg", "executive-10.jpg"],
    "elastic-compute": ["executive-08.jpg", "technical-73.jpg", "technical-74.jpg"],
    "elastic-pools": ["executive-08.jpg"],
    "business-value": ["executive-11.jpg"],
    "availability": ["executive-12.jpg", "technical-18.jpg"],
    "data-security": ["executive-14.jpg", "technical-22.jpg"],
    "ai-access-control": ["technical-67.jpg", "executive-14.jpg"],
    "select-ai": ["executive-24.jpg", "technical-53.jpg", "technical-54.jpg"],
    "rag": ["executive-23.jpg", "technical-57.jpg", "technical-56.jpg"],
    "vector-search": ["executive-17.jpg", "technical-56.jpg"],
    "sql-ai-functions": ["technical-55.jpg", "technical-60.jpg"],
    "ai-agents": ["executive-25.jpg", "technical-64.jpg", "technical-71.jpg"],
    "machine-learning": ["executive-17.jpg", "executive-22.jpg"],
    "model-choice": ["executive-24.jpg"],
    "data-studio": ["executive-33.jpg", "technical-49.jpg", "technical-40.jpg"],
    "data-marketplace": ["technical-50.jpg"],
    "data-sharing": ["executive-22.jpg", "technical-33.jpg", "technical-49.jpg"],
    "converged-data": ["executive-32.jpg", "technical-34.jpg", "executive-20.jpg"],
    "low-code": ["executive-18.jpg", "technical-33.jpg"],
    "mongodb-api": ["executive-20.jpg"],
    "rest-and-integrations": ["executive-19.jpg", "executive-21.jpg", "technical-36.jpg", "technical-38.jpg"],
    "private-data-ai": ["executive-23.jpg", "executive-14.jpg"],
    "iceberg": ["executive-29.jpg", "technical-43.jpg", "technical-42.jpg"],
    "live-ai-hub": ["executive-27.jpg", "technical-63.jpg"],
    "multicloud": ["executive-07.jpg", "executive-34.jpg"],
    "migration-tools": ["executive-15.jpg"],
    "workload-flexibility": ["executive-06.jpg", "technical-35.jpg"]
  };
  items.forEach(function (item) { item.graphics = featureGraphics[item.id] || []; });
  window.ADBData = { categories: categories, items: items };
})();
