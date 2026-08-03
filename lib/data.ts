export interface ISkill {
    name: string;
    icon: string;
    level: string;
    description: string;
}

export interface IProject {
    title: string;
    slug: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    liveUrl?: string;
    sourceCode?: string;
    architecture?: {
        nodes: string[];
        flow: string;
    };
    challenges?: string;
    solutions?: string;
}

export const GENERAL_INFO = {
    name: 'Abkari Mohammed Sayeem',
    role: 'Cloud & DevOps Engineer',
    secondaryRole: 'Generative AI Engineer',
    location: 'Mangaluru, Karnataka',
    education: 'Bachelor of Computer Applications (Artificial Intelligence)',
    email: 'saeemabkari6@gmail.com',
    emailSubject: "Let's collaborate on Cloud, DevOps or AI projects",
    emailBody: 'Hi Sayeem, I am reaching out because...',
    upworkProfile: 'https://github.com/Sayeem3051', // default or custom
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Sayeem3051' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/sayeem3051' },
    { name: 'email', url: `mailto:${GENERAL_INFO.email}` },
];

export const MY_STACK: Record<string, ISkill[]> = {
    cloud: [
        {
            name: 'AWS Cloud',
            icon: '/logo/aws.png',
            level: 'Expert',
            description: 'Core cloud provider used for deploying scalable, secure, and reliable infrastructure.',
        },
        {
            name: 'Google Cloud',
            icon: '/logo/google-cloud.svg',
            level: 'Intermediate',
            description: 'Used for specialized Generative AI workloads and multi-cloud solutions.',
        },
    ],
    aws: [
        {
            name: 'EC2',
            icon: '/logo/aws-ec2.svg',
            level: 'Expert',
            description: 'Deploying, managing, and scaling virtual machines with optimized configurations.',
        },
        {
            name: 'VPC',
            icon: '/logo/aws-vpc.svg',
            level: 'Expert',
            description: 'Custom network topologies, public/private subnets, and routing security.',
        },
        {
            name: 'RDS',
            icon: '/logo/aws-rds.svg',
            level: 'Advanced',
            description: 'Relational database service configured for high availability and failover.',
        },
        {
            name: 'S3',
            icon: '/logo/aws-s3.svg',
            level: 'Expert',
            description: 'Secure, durable, and highly-scalable object storage with policy enforcement.',
        },
        {
            name: 'IAM',
            icon: '/logo/aws-iam.svg',
            level: 'Expert',
            description: 'Fine-grained access controls, role assumptions, and least-privilege security.',
        },
        {
            name: 'Lambda',
            icon: '/logo/aws-lambda.svg',
            level: 'Advanced',
            description: 'Serverless compute execution for event-driven automation and APIs.',
        },
    ],
    networking: [
        {
            name: 'Subnets & Routes',
            icon: '/logo/aws-vpc.svg',
            level: 'Expert',
            description: 'Designing private/public layouts, NAT gateways, and Route Tables for security.',
        },
        {
            name: 'ALB',
            icon: '/logo/aws-alb.svg',
            level: 'Expert',
            description: 'Application Load Balancers for high availability and traffic routing.',
        },
        {
            name: 'Auto Scaling',
            icon: '/logo/aws-autoscaling.svg',
            level: 'Expert',
            description: 'Elastic capacity adjustment based on traffic spikes and demand metrics.',
        },
    ],
    containers: [
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
            level: 'Expert',
            description: 'Containerizing multi-tier applications to ensure environment consistency.',
        },
        {
            name: 'ECS/EKS',
            icon: '/logo/aws-eks.svg',
            level: 'Advanced',
            description: 'Orchestrating container workloads in scalable AWS cluster environments.',
        },
    ],
    infrastructure: [
        {
            name: 'Terraform',
            icon: '/logo/terraform.svg',
            level: 'Expert',
            description: 'Infrastructure as Code (IaC) to provision cloud resources repeatably.',
        },
        {
            name: 'Nginx',
            icon: '/logo/nginx.svg',
            level: 'Advanced',
            description: 'Reverse proxy, load balancer, and secure web server configuration.',
        },
    ],
    devops: [
        {
            name: 'GitHub Actions',
            icon: '/logo/github-actions.svg',
            level: 'Expert',
            description: 'Automating build, test, and container deployment pipelines.',
        },
        {
            name: 'Git & GitHub',
            icon: '/logo/git.png',
            level: 'Expert',
            description: 'Distributed version control and collaboration management.',
        },
    ],
    programming: [
        {
            name: 'Python',
            icon: '/logo/python.svg',
            level: 'Expert',
            description: 'Main scripting language for AI models, backends, and automation.',
        },
        {
            name: 'Flask',
            icon: '/logo/flask.svg',
            level: 'Advanced',
            description: 'Micro web framework for creating RESTful APIs and microservices.',
        },
        {
            name: 'Linux Administration',
            icon: '/logo/linux.svg',
            level: 'Expert',
            description: 'Server management, shell scripting (Bash), and process optimization.',
        },
    ],
    databases: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
            level: 'Advanced',
            description: 'Relational database administration and query design.',
        },
        {
            name: 'DynamoDB',
            icon: '/logo/aws-dynamodb.svg',
            level: 'Advanced',
            description: 'Fully managed NoSQL database for fast, flexible cloud storage.',
        },
    ],
    generative_ai: [
        {
            name: 'LangChain',
            icon: '/logo/langchain.svg',
            level: 'Expert',
            description: 'Orchestrating LLMs, chains, prompt templates, and retrieval-augmented generation.',
        },
        {
            name: 'FAISS',
            icon: '/logo/meta.svg',
            level: 'Expert',
            description: 'Facebook AI Similarity Search for high-performance vector retrieval.',
        },
        {
            name: 'LLMs & Prompts',
            icon: '/logo/openai.svg',
            level: 'Expert',
            description: 'Prompt engineering, structural output generation, and token management.',
        },
        {
            name: 'n8n Workflow',
            icon: '/logo/n8n.svg',
            level: 'Advanced',
            description: 'Node-based automated workflows connecting AI agents and APIs.',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'RAG Interview Assistant',
        slug: 'rag-interview-assistant',
        year: 2025,
        description: `
      A custom technical mock interview platform that uses RAG (Retrieval-Augmented Generation) to quiz candidates on their actual resumes or specific study materials. Instead of using generic online questions, candidates upload a PDF (like a resume or a specific chapter), and the tool dynamically generates custom interview questions based on the candidate's background and previous answers. <br/><br/>
      
      Under the hood, it parses the PDF document, creates chunks, and stores semantic embeddings in a local vector store. When the interview starts, the system retrieves relevant concepts, passes them to the LLM context, and manages the session memory state using LangChain.
      `,
        role: `
      I built the end-to-end prototype, starting with the Python/Flask backend and LangChain integration. I also handled the infrastructure setup: containerizing the app with Docker, setting up routing and rate limiting with Nginx, and automating the deployment pipeline to AWS EC2 using GitHub Actions.
      `,
        techStack: [
            'Python',
            'Flask',
            'LangChain',
            'FAISS',
            'Docker',
            'GitHub Actions',
            'Nginx',
            'AWS EC2',
        ],
        thumbnail: '/projects/thumbnail/rag-interview-assistant.png',
        longThumbnail: '/projects/long/rag-interview-assistant.png',
        images: [
            '/projects/images/rag-interview-assistant-1.png',
            '/projects/images/rag-interview-assistant-2.png',
        ],
        liveUrl: 'https://github.com/Sayeem3051/rag-interview-assistant',
        sourceCode: 'https://github.com/Sayeem3051/rag-interview-assistant',
        architecture: {
            nodes: ['Client', 'Nginx Proxy', 'Flask API (LangChain)', 'FAISS Vector Index', 'OpenAI/Local LLM'],
            flow: 'Client ➔ Nginx (HTTPS) ➔ Flask App ➔ Search FAISS ➔ Context + Prompt ➔ LLM Query ➔ Response to Client'
        },
        challenges: 'Managing session state and memory across stateless Flask API requests without hitting LLM context limit thresholds or causing response delays.',
        solutions: 'Used LangChain\'s conversation buffer memory to summarize long chat histories, and implemented live response streaming to the frontend so candidates don\'t have to wait for the entire answer to generate.'
    },
    {
        title: 'Three-Tier E-Commerce Cloud Deployment (SamCart)',
        slug: 'samcart-cloud-deployment',
        year: 2024,
        description: `
      A highly available, fault-tolerant three-tier web deployment of SamCart, a premium e-commerce platform on AWS, following the AWS Well-Architected Framework. The system is designed to handle sudden traffic spikes through automated scaling and isolated network layers to ensure high security and reliability. <br/><br/>
      
      The architecture divides the workloads across public and private subnets: public subnets route incoming requests through an Application Load Balancer, private subnets run the application server instances inside an Auto Scaling Group, and isolated private database subnets host the database.
      `,
        role: `
      I designed and provisioned the entire cloud infrastructure on AWS. This involved creating the custom VPC, route tables, and NAT Gateways for secure outbound access, setting up multi-AZ database replication on Amazon RDS, and configuring CloudWatch dashboards with SNS alerts to monitor system health.
      `,
        techStack: [
            'AWS VPC',
            'EC2',
            'Application Load Balancer',
            'RDS (MySQL)',
            'S3',
            'Auto Scaling',
            'CloudWatch',
            'SNS',
            'Nginx',
        ],
        thumbnail: '/projects/thumbnail/samcart.png',
        longThumbnail: '/projects/long/samcart.png',
        images: [
            '/projects/images/samcart-1.png',
            '/projects/images/samcart-2.png',
        ],
        liveUrl: 'https://github.com/Sayeem3051/samcart-cloud-deployment',
        sourceCode: 'https://github.com/Sayeem3051/samcart-cloud-deployment',
        architecture: {
            nodes: ['VPC', 'Public Subnet (ALB)', 'Private Subnet (EC2)', 'Database Subnet (RDS)', 'S3 Storage', 'CloudWatch + SNS'],
            flow: 'User Request ➔ Internet Gateway ➔ ALB ➔ EC2 (App Tier) ➔ RDS (Database Tier) & S3 (Assets) / CloudWatch tracks metrics'
        },
        challenges: 'Preventing database connection bottlenecks and query delays during sudden auto-scaling events when multiple new application instances start up.',
        solutions: 'Implemented Amazon RDS Proxy to manage connection pooling, and configured Redis cache on the application tier to store frequent database queries, reducing direct database load by 60%.'
    },
    {
        title: 'CloudMentor AI',
        slug: 'cloudmentor-ai',
        year: 2025,
        description: `
      An AI-powered Learning Operating System designed to help candidates become job-ready Cloud and DevOps Engineers. The platform evaluates user responses during learning sessions, tracks knowledge retention decay curves, and automatically maps out personalized study guides, hands-on lab exercises, and mock interviews based on user performance. <br/><br/>
      
      Unlike standard e-learning setups, it incorporates an adaptive spaced repetition engine and an interactive progress analytics dashboard to monitor roadmaps, study streaks, and topic mastery.
      `,
        role: `
      I built the application frontend using React and TypeScript, integrated Supabase for authentication, user session database schemas, and analytical tracking, and designed the spaced repetition logic and clean dashboards.
      `,
        techStack: [
            'React',
            'TypeScript',
            'Supabase',
            'PostgreSQL',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/cloudmentor-ai.png',
        longThumbnail: '/projects/long/cloudmentor-ai.png',
        images: [
            '/projects/images/cloudmentor-ai-1.png',
            '/projects/images/cloudmentor-ai-2.png',
        ],
        liveUrl: 'https://learn-cloud-wise.lovable.app/',
        sourceCode: 'https://learn-cloud-wise.lovable.app/',
        architecture: {
            nodes: ['React App', 'Supabase Auth', 'PostgreSQL DB', 'AI Engine Routing'],
            flow: 'User Login ➔ Supabase Auth ➔ React Frontend (Dashboard & Quiz) ➔ PostgreSQL (Progress State) ➔ AI Evaluator'
        },
        challenges: 'Designing a responsive learning dashboard and spaced repetition priority scheduler that accurately forecasts concept decay curves without complex server logic.',
        solutions: 'Implemented client-side queue logic and structured Supabase SQL rules to query study retention state directly, keeping user streak analytics lightning-fast.'
    }
];

export const MY_EXPERIENCE = [
    {
        title: 'Cloud & DevOps Engineer',
        company: 'Cloud Architecture & DevOps Consulting',
        duration: '2024 - Present',
    },
    {
        title: 'AI Infrastructure Developer',
        company: 'AI & Systems Engineering (Freelance)',
        duration: '2023 - 2024',
    },
    {
        title: 'Systems & Network Admin',
        company: 'BCA Research Work & System Lab',
        duration: '2022 - 2023',
    },
];

export const ENGINEERING_NOTES = [
    {
        title: 'Why Private Subnets Matter',
        slug: 'why-private-subnets-matter',
        date: 'July 15, 2026',
        summary: 'Understand the security implications of placing databases and backend services in public vs private subnets, and how NAT Gateways control outgoing traffic.',
        content: `
      In cloud network security, the concept of **Least Exposure** is paramount. A common design pitfall in initial setups is placing database instances and application servers in public subnets. This article unpacks why private subnets are a mandatory architectural requirement for secure cloud applications.<br/><br/>
      
      <h3>1. What is a Private Subnet?</h3>
      A private subnet is a segment of an AWS VPC (Virtual Private Cloud) that does not have a route to an Internet Gateway (IGW). This means resources located within a private subnet cannot be reached directly from the public internet. Conversely, a public subnet *does* have a direct route to an Internet Gateway.<br/><br/>
      
      <h3>2. The Risk of Public Databases</h3>
      Placing a relational database (like RDS MySQL or PostgreSQL) in a public subnet exposes it to brute force attacks, port scans, and potential zero-day vulnerabilities. Even with security group firewalls, a simple misconfiguration could open the DB port (e.g., 3306 or 5432) to the entire internet.<br/><br/>
      
      <h3>3. Enter NAT Gateways</h3>
      If resources in a private subnet cannot route to the internet, how do they download software updates or contact external APIs? 
      We use a **NAT Gateway (Network Address Translation Gateway)**. 
      The NAT Gateway is placed in the *public* subnet. The private subnet's Route Table is configured to direct <code>0.0.0.0/0</code> (all internet-bound traffic) through the NAT Gateway. The NAT Gateway forwards this traffic and receives replies, masking the private IP addresses of the backend instances. The internet cannot initiate connections *in* to these private instances.<br/><br/>
      
      <h3>4. Recommendation</h3>
      Always follow the three-tier network layout:
      <ul>
        <li><strong>Public Subnet</strong>: Load balancers (ALBs), bastion hosts, NAT gateways.</li>
        <li><strong>Private Subnet</strong>: Application servers, worker instances, serverless microservices.</li>
        <li><strong>Isolated Private Subnet</strong>: RDS Databases, cache instances (Redis/Memcached). No internet access (not even NAT gateway routing) is provided.</li>
      </ul>
        `
    },
    {
        title: 'Gunicorn vs Flask',
        slug: 'gunicorn-vs-flask',
        date: 'July 02, 2026',
        summary: 'Learn why you should never run your Flask application in production using the built-in development server, and how Gunicorn manages concurrent requests.',
        content: `
      When starting with Python web development, executing <code>python app.py</code> is the first step. Flask launches a local web server (Werkzeug). However, running this server in production is highly dangerous and inefficient. Here is a breakdown of why Flask needs a WSGI server like Gunicorn.<br/><br/>
      
      <h3>1. The Built-in Server is Single-Threaded</h3>
      Flask's default built-in server is designed purely for debugging. By default, it runs on a single thread. This means if one user sends a request that takes 5 seconds to query a database, all other users trying to access the site are blocked until that request finishes. In production, this leads to immediate timeouts.<br/><br/>
      
      <h3>2. What is Gunicorn?</h3>
      Gunicorn (Green Unicorn) is a Python WSGI (Web Server Gateway Interface) HTTP server. WSGI is a standard protocol that allows web servers (like Nginx) to communicate with Python web frameworks.
      Gunicorn is a **pre-fork worker model** server. This means it creates a master process that forks multiple worker processes to handle incoming requests concurrently.<br/><br/>
      
      <h3>3. How Gunicorn Handles Load</h3>
      If you run Gunicorn with 4 workers:
      <code>gunicorn -w 4 app:app</code>
      Gunicorn provisions 4 independent operating system processes running your Flask application. The master process listens for connections on the port (e.g., 8000) and delegates incoming requests to free workers. If one worker crashes or encounters an unhandled exception, the master automatically spawns a new worker, keeping the site online.<br/><br/>
      
      <h3>4. Combining Nginx, Gunicorn, and Flask</h3>
      The industry standard layout is:
      <code>Nginx (Front Proxy) ➔ Gunicorn (WSGI Server) ➔ Flask (Python App)</code>
      Nginx handles SSL/TLS termination, static files, and rate-limiting. Gunicorn manages application processes and concurrency, and Flask executes the business logic.
        `
    },
    {
        title: 'How ALB Works',
        slug: 'how-alb-works',
        date: 'June 28, 2026',
        summary: 'An in-depth look at Application Load Balancer routing algorithms, health checks, SSL offloading, and integration with Auto Scaling Groups.',
        content: `
      AWS Application Load Balancer (ALB) operates at Layer 7 (Application Layer) of the OSI model. It is the gatekeeper of high-availability cloud setups. Let's look at how it routes traffic.<br/><br/>
      
      <h3>1. Routing Rules & Target Groups</h3>
      An ALB evaluates incoming requests based on **Listeners** (ports/protocols like HTTP on 80, HTTPS on 443). Each listener contains rules that evaluate host headers, path patterns (e.g., <code>/api/*</code> vs <code>/images/*</code>), or query parameters.
      Requests are forwarded to **Target Groups**, which are collections of EC2 instances, containers, or lambda functions.<br/><br/>
      
      <h3>2. Health Checks</h3>
      The load balancer periodically sends ping requests (health checks) to targets at a configured path (e.g., <code>/healthz</code>). If an instance fails consecutive checks, the ALB marks it unhealthy and stops routing traffic to it. Once the instance recovers, the ALB resumes traffic distribution.<br/><br/>
      
      <h3>3. Integration with Auto Scaling</h3>
      When an Auto Scaling Group (ASG) launches a new EC2 instance, it automatically registers that instance with the associated ALB Target Group. The ALB waits for health checks to pass, then starts routing traffic. This is what enables seamless scale-up and scale-down operations without user downtime.
        `
    },
    {
        title: 'Dockerizing Flask',
        slug: 'dockerizing-flask',
        date: 'June 18, 2026',
        summary: 'Step-by-step guide to writing optimized multi-stage Dockerfiles for Python Flask backends, reducing image size, and implementing security best practices.',
        content: `
      Containerizing Python applications is essential for predictable environments. A naive Dockerfile can result in images larger than 1GB. Here is how to write an optimized, secure Dockerfile for a Flask application.<br/><br/>
      
      <h3>1. Use a Minimal Base Image</h3>
      Avoid using the generic <code>python:3.11</code> base image, which contains full compiler toolchains and dev files. Instead, use <code>python:3.11-slim</code> or <code>python:3.11-alpine</code>. Slim is usually preferred because it avoids compatibility issues with C libraries (like numpy or pandas).<br/><br/>
      
      <h3>2. Multi-stage Builds</h3>
      If your application needs dependencies that require compilation (like gcc or cryptography), use a multi-stage Dockerfile:
      <pre class="bg-black/30 p-4 rounded text-sm text-primary">
# Stage 1: Build dependencies
FROM python:3.11-slim as builder
RUN apt-get update && apt-get install -y gcc build-essential
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Stage 2: Run application
FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
EXPOSE 8000
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
      </pre>
      
      <h3>3. Never Run as Root</h3>
      By default, Docker containers execute processes as root. This is a severe security risk. In your runner stage, create a non-root system user and apply <code>USER appuser</code> to run the Gunicorn process.
        `
    },
    {
        title: 'Understanding IAM Roles',
        slug: 'understanding-iam-roles',
        date: 'June 05, 2026',
        summary: 'Why you should never store AWS access keys on EC2 instances, and how IAM Roles securely provide temporary credentials via the metadata service.',
        content: `
      AWS Identity and Access Management (IAM) is the security framework of the cloud. A major credential leakage risk is storing hardcoded AWS Access Keys (<code>aws_access_key_id</code> / <code>aws_secret_access_key</code>) inside code repositories or server config files. IAM Roles solve this entirely.<br/><br/>
      
      <h3>1. What is an IAM Role?</h3>
      An IAM Role is an identity with permission policies that determine what the identity can and cannot do in AWS. Unlike an IAM User, a Role does not have permanent credentials (password or access keys). Instead, when an AWS resource (like an EC2 instance) assumes a role, AWS dynamically issues temporary security credentials that expire after a short period (typically 1 hour to 12 hours).<br/><br/>
      
      <h3>2. Instance Profiles and IMDS</h3>
      To attach an IAM Role to an EC2 instance, we use an **Instance Profile**. 
      The EC2 instance accesses these credentials by querying the **Instance Metadata Service (IMDS)** at the link-local IP <code>http://169.254.169.254/latest/meta-data/iam/security-credentials/&lt;role-name&gt;</code>. AWS SDKs (boto3, aws-cli) automatically detect this metadata service and load the temporary credentials transparently. No environment variables or files are needed!
        `
    },
    {
        title: 'VPC Networking Explained',
        slug: 'vpc-networking-explained',
        date: 'May 20, 2026',
        summary: 'Demystifying subnets, CIDR blocks, route tables, and firewalls (Security Groups vs NACLs) for a production-ready AWS VPC setup.',
        content: `
      A Virtual Private Cloud (VPC) is the foundational networking layer of AWS. Let's break down the core components of VPC networking.<br/><br/>
      
      <h3>1. CIDR Blocks</h3>
      When creating a VPC, you assign an IP address range using Classless Inter-Domain Routing (CIDR) notation. E.g., <code>10.0.0.0/16</code> provides 65,536 private IP addresses. Subnets then carve up this range, e.g., <code>10.0.1.0/24</code> provides 256 IPs.<br/><br/>
      
      <h3>2. Security Groups vs NACLs</h3>
      Understanding where to configure firewalls is essential:
      <ul>
        <li><strong>Security Groups</strong>: Stateful firewalls acting at the **instance** level. If you allow inbound traffic on port 80, outbound response traffic is automatically allowed.</li>
        <li><strong>Network ACLs (NACLs)</strong>: Stateless firewalls acting at the **subnet** level. You must explicitly configure both inbound and outbound rules.</li>
      </ul>
        `
    }
];

export const CERTIFICATIONS = [
    {
        title: 'Google Cloud GenAI Academy',
        issuer: 'Google Cloud',
        date: '2025',
        description: 'Advanced validation in generative AI architectures, large language model fine-tuning, retrieval pipelines, and building agents.',
        badge: '/projects/thumbnail/resume-roaster.jpg' // Using a generic placeholder image path
    },
    {
        title: 'AWS Cloud Quest: Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: '2024',
        description: 'Hands-on validation of AWS core services, cloud security, networking, pricing, and infrastructure automation.',
        badge: '/projects/thumbnail/epikcart.jpg'
    },
    {
        title: 'IBM Python for Data Science & AI',
        issuer: 'IBM',
        date: '2023',
        description: 'Deep dive into Python programming, object-oriented principles, data structures, and integration with AI libraries.',
        badge: '/projects/thumbnail/property-pro.jpg'
    }
];

export const OPEN_SOURCE = [
    {
        title: 'OpenAI Codex Documentation Contribution',
        prUrl: 'https://github.com/openai/codex/pull/5910',
        description: 'Contributed documentation fixes and usage patterns to OpenAI Codex, detailing prompt structure and code generation interfaces. Merged in 2024.',
    },
    {
        title: 'Pandas Data Verification Optimization',
        prUrl: 'https://github.com/pandas-dev/pandas/pull/62388',
        description: 'Contributed structural improvements and performance optimizations to Pandas core processing, enhancing data validation routines and error checks.',
    }
];
