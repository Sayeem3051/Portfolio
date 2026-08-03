'use client';
import React, { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { X, Server, Layers, Shield, Database, Cpu, Cloud, Activity, Bell } from 'lucide-react';

interface NodeDetails {
    name: string;
    icon: React.ReactNode;
    purpose: string;
    whyExists: string;
    howCommunicates: string;
    tier: string;
}

const ARCHITECTURE_DATA: Record<string, NodeDetails> = {
    internet: {
        name: 'Internet Gateway',
        icon: <Cloud className="size-6 text-primary" />,
        purpose: 'Provides a target in your VPC route tables for internet-routable traffic.',
        whyExists: 'Enables communication between resources in your VPC and the internet, allowing public users to connect.',
        howCommunicates: 'Forwards incoming HTTPS (port 443) requests to the Application Load Balancer.',
        tier: 'VPC Edge',
    },
    alb: {
        name: 'Application Load Balancer',
        icon: <Layers className="size-6 text-primary" />,
        purpose: 'Distributes incoming HTTP/HTTPS traffic across multiple targets in multiple Availability Zones.',
        whyExists: 'Ensures high availability, handles SSL termination, and filters out malicious traffic before it reaches the backend.',
        howCommunicates: 'Receives traffic from the Internet Gateway and forwards it to the Frontend EC2 targets in the private subnet.',
        tier: 'Public Subnet',
    },
    frontend: {
        name: 'Frontend EC2 (Nginx)',
        icon: <Server className="size-6 text-primary" />,
        purpose: 'Serves the client-side Next.js/React build and routes traffic to the backend API.',
        whyExists: 'Provides an optimized environment for serving static assets and manages local reverse proxy routing.',
        howCommunicates: 'Interacts with the Backend EC2 API tier for dynamic logic, and references Amazon S3 for static content storage.',
        tier: 'Private Subnet (Web Tier)',
    },
    backend: {
        name: 'Backend EC2 (Flask + Gunicorn)',
        icon: <Cpu className="size-6 text-primary" />,
        purpose: 'Executes business logic, performs computations, and interacts with datastores.',
        whyExists: 'Isolates the core application code in a private subnet, preventing direct public internet exposure and handling API queries.',
        howCommunicates: 'Receives API requests from the Web Tier, queries the RDS Database, and writes logs/assets to CloudWatch & S3.',
        tier: 'Private Subnet (App Tier)',
    },
    rds: {
        name: 'Amazon RDS (MySQL)',
        icon: <Database className="size-6 text-primary" />,
        purpose: 'Fully managed relational database engine storing application state, transactional records, and user schemas.',
        whyExists: 'Eliminates database administrative overhead with built-in replication, automated patching, and continuous backups.',
        howCommunicates: 'Accepts secure database connections on port 3306 solely from Backend EC2 instances in the Private App Subnet.',
        tier: 'Private Subnet (DB Tier)',
    },
    s3: {
        name: 'Amazon S3',
        icon: <Layers className="size-6 text-primary" />,
        purpose: 'Object storage built to store and retrieve any amount of data, such as images, PDFs, and static static files.',
        whyExists: 'Decouples persistent storage from computing servers, letting the web/app servers scale statelessly without local disk bottlenecks.',
        howCommunicates: 'Secured via IAM bucket policies. Accessed via secure HTTPS endpoints by EC2 instances and authenticated client clients.',
        tier: 'AWS Global',
    },
    cloudwatch: {
        name: 'Amazon CloudWatch',
        icon: <Activity className="size-6 text-primary" />,
        purpose: 'Real-time monitoring and observability service for AWS resources and applications.',
        whyExists: 'Provides metric dashboards, aggregates central server logs, and watches for hardware or application-level failure metrics.',
        howCommunicates: 'Receives metrics and logs from EC2 agents via AWS endpoints. Triggers alarms when thresholds (e.g. CPU > 85%) are breached.',
        tier: 'AWS Management',
    },
    sns: {
        name: 'Amazon SNS',
        icon: <Bell className="size-6 text-primary" />,
        purpose: 'Fully managed pub/sub messaging service for microservices, serverless, and system notifications.',
        whyExists: 'Sends instant, automated email, text, or Slack webhooks when CloudWatch alarms detect server overload or scaling anomalies.',
        howCommunicates: 'Triggered by CloudWatch alarms; pushes immediate JSON alerts to the configured subscriber channels (email/webhooks).',
        tier: 'AWS Integration',
    },
    iam: {
        name: 'AWS IAM',
        icon: <Shield className="size-6 text-primary" />,
        purpose: 'Securely control access to AWS services and resources for users, groups, and application processes.',
        whyExists: 'Eliminates the need for hardcoded AWS secret credentials on the servers by dynamically granting temporary credentials to EC2 instances.',
        howCommunicates: 'Governs EC2 access to S3, CloudWatch, and RDS using temporary metadata-service tokens (Instance Profiles).',
        tier: 'AWS Security',
    },
};

const AWSArchitectureShowcase = () => {
    const [selectedNode, setSelectedNode] = useState<NodeDetails | null>(null);

    return (
        <section id="aws-architecture" className="py-section relative overflow-hidden bg-background">
            {/* Visual Grid Deco Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

            <div className="container relative z-[1]">
                <SectionTitle title="AWS Architecture Showcase" />

                <p className="text-xl font-thin text-muted-foreground mb-16 max-w-[800px]">
                    Interactive schematic of the secure, multi-tier AWS Infrastructure designed to host production systems.
                    Click on any component node to inspect its operational role, security boundaries, and communication protocol.
                </p>

                {/* VPC Container */}
                <div className="border border-border/80 rounded-3xl bg-background-light/20 p-6 md:p-10 shadow-2xl relative">
                    <div className="absolute top-4 left-6 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs uppercase font-anton tracking-widest text-primary">AWS VPC (10.0.0.0/16)</span>
                    </div>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        
                        {/* LEFT COLUMN: Edge Traffic & Load Balancing */}
                        <div className="lg:col-span-3 flex flex-col justify-center gap-12 relative border border-border/40 rounded-2xl p-6 bg-background-light/10">
                            <span className="absolute top-2 left-3 text-[10px] text-muted-foreground uppercase font-semibold">Edge ingress</span>
                            
                            {/* Internet Gateway Node */}
                            <button
                                onClick={() => setSelectedNode(ARCHITECTURE_DATA.internet)}
                                className="group relative flex flex-col items-center justify-center p-5 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/50 hover:bg-background-light/30 transition-all duration-300 shadow-lg text-center"
                            >
                                <div className="p-3.5 rounded-full bg-background-light/80 border border-border group-hover:scale-110 transition-transform">
                                    {ARCHITECTURE_DATA.internet.icon}
                                </div>
                                <span className="mt-3 text-sm font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">Internet Gateway</span>
                                <span className="mt-1 text-[10px] text-muted-foreground">Public Face</span>
                            </button>

                            {/* Public Subnet Border */}
                            <div className="border border-dashed border-primary/30 rounded-2xl p-4 flex flex-col gap-4 relative">
                                <span className="absolute -top-2.5 left-3 text-[9px] bg-background px-2 text-primary font-mono">Public Subnet (10.0.1.0/24)</span>
                                
                                {/* ALB Node */}
                                <button
                                    onClick={() => setSelectedNode(ARCHITECTURE_DATA.alb)}
                                    className="group flex flex-col items-center justify-center p-5 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/50 hover:bg-background-light/30 transition-all duration-300 shadow-lg text-center w-full"
                                >
                                    <div className="p-3.5 rounded-full bg-background-light/80 border border-border group-hover:scale-110 transition-transform">
                                        {ARCHITECTURE_DATA.alb.icon}
                                    </div>
                                    <span className="mt-3 text-sm font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">Application Load Balancer (ALB)</span>
                                    <span className="mt-1 text-[10px] text-muted-foreground">Traffic Routing</span>
                                </button>
                            </div>
                        </div>

                        {/* CENTER COLUMN: Private Isolation (Web & App Subnets) */}
                        <div className="lg:col-span-6 flex flex-col gap-8 border border-border/40 rounded-2xl p-6 bg-background-light/10 relative">
                            <span className="absolute top-2 left-3 text-[10px] text-muted-foreground uppercase font-semibold">Private subnets (No Direct Internet)</span>

                            {/* Web/App Tier Subnet */}
                            <div className="border border-dashed border-secondary/30 rounded-2xl p-4 flex flex-col md:flex-row gap-6 relative mt-4">
                                <span className="absolute -top-2.5 left-3 bg-background px-2 text-secondary font-mono text-[9px]">Private App Subnets (10.0.2.0/24 & 10.0.3.0/24)</span>
                                
                                {/* Frontend EC2 */}
                                <button
                                    onClick={() => setSelectedNode(ARCHITECTURE_DATA.frontend)}
                                    className="flex-1 group flex flex-col items-center justify-center p-5 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/50 hover:bg-background-light/30 transition-all duration-300 shadow-lg text-center"
                                >
                                    <div className="p-3.5 rounded-full bg-background-light/80 border border-border group-hover:scale-110 transition-transform">
                                        {ARCHITECTURE_DATA.frontend.icon}
                                    </div>
                                    <span className="mt-3 text-sm font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">Frontend Server</span>
                                    <span className="mt-1 text-[10px] text-muted-foreground">EC2 | React App</span>
                                </button>

                                {/* Backend EC2 */}
                                <button
                                    onClick={() => setSelectedNode(ARCHITECTURE_DATA.backend)}
                                    className="flex-1 group flex flex-col items-center justify-center p-5 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/50 hover:bg-background-light/30 transition-all duration-300 shadow-lg text-center"
                                >
                                    <div className="p-3.5 rounded-full bg-background-light/80 border border-border group-hover:scale-110 transition-transform">
                                        {ARCHITECTURE_DATA.backend.icon}
                                    </div>
                                    <span className="mt-3 text-sm font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">Backend Server</span>
                                    <span className="mt-1 text-[10px] text-muted-foreground">EC2 | Flask API</span>
                                </button>
                            </div>

                            {/* Database Tier Subnet */}
                            <div className="border border-dashed border-border/50 rounded-2xl p-4 flex flex-col items-center relative">
                                <span className="absolute -top-2.5 left-3 bg-background px-2 text-muted-foreground font-mono text-[9px]">Private Database Subnet (10.0.4.0/24)</span>
                                
                                {/* Database RDS */}
                                <button
                                    onClick={() => setSelectedNode(ARCHITECTURE_DATA.rds)}
                                    className="group flex flex-col items-center justify-center p-5 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/50 hover:bg-background-light/30 transition-all duration-300 shadow-lg text-center w-full max-w-sm mt-3"
                                >
                                    <div className="p-3.5 rounded-full bg-background-light/80 border border-border group-hover:scale-110 transition-transform">
                                        {ARCHITECTURE_DATA.rds.icon}
                                    </div>
                                    <span className="mt-3 text-sm font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">Amazon RDS Database</span>
                                    <span className="mt-1 text-[10px] text-muted-foreground">MySQL | Highly Available</span>
                                </button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Supporting Global Services */}
                        <div className="lg:col-span-3 flex flex-col justify-between gap-6 border border-border/40 rounded-2xl p-6 bg-background-light/10 relative">
                            <span className="absolute top-2 left-3 text-[10px] text-muted-foreground uppercase font-semibold">Supporting services</span>

                            {/* Amazon S3 */}
                            <button
                                onClick={() => setSelectedNode(ARCHITECTURE_DATA.s3)}
                                className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/50 hover:bg-background-light/30 transition-all duration-300 shadow-lg text-center mt-4"
                            >
                                <div className="p-2.5 rounded-full bg-background-light/80 border border-border">
                                    {ARCHITECTURE_DATA.s3.icon}
                                </div>
                                <span className="mt-2 text-xs font-semibold text-foreground group-hover:text-primary">Amazon S3</span>
                                <span className="text-[9px] text-muted-foreground">Object Storage</span>
                            </button>

                            {/* AWS IAM */}
                            <button
                                onClick={() => setSelectedNode(ARCHITECTURE_DATA.iam)}
                                className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/50 hover:bg-background-light/30 transition-all duration-300 shadow-lg text-center"
                            >
                                <div className="p-2.5 rounded-full bg-background-light/80 border border-border">
                                    {ARCHITECTURE_DATA.iam.icon}
                                </div>
                                <span className="mt-2 text-xs font-semibold text-foreground group-hover:text-primary">AWS IAM</span>
                                <span className="text-[9px] text-muted-foreground">Security Policies</span>
                            </button>

                            {/* CloudWatch */}
                            <button
                                onClick={() => setSelectedNode(ARCHITECTURE_DATA.cloudwatch)}
                                className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/50 hover:bg-background-light/30 transition-all duration-300 shadow-lg text-center"
                            >
                                <div className="p-2.5 rounded-full bg-background-light/80 border border-border">
                                    {ARCHITECTURE_DATA.cloudwatch.icon}
                                </div>
                                <span className="mt-2 text-xs font-semibold text-foreground group-hover:text-primary">CloudWatch Logs</span>
                                <span className="text-[9px] text-muted-foreground">Observability</span>
                            </button>

                            {/* SNS */}
                            <button
                                onClick={() => setSelectedNode(ARCHITECTURE_DATA.sns)}
                                className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/50 hover:bg-background-light/30 transition-all duration-300 shadow-lg text-center"
                            >
                                <div className="p-2.5 rounded-full bg-background-light/80 border border-border">
                                    {ARCHITECTURE_DATA.sns.icon}
                                </div>
                                <span className="mt-2 text-xs font-semibold text-foreground group-hover:text-primary">SNS Alerts</span>
                                <span className="text-[9px] text-muted-foreground">Pub/Sub Notifications</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Detail view */}
            {selectedNode && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Overlay */}
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        onClick={() => setSelectedNode(null)}
                    />
                    
                    {/* Content Box */}
                    <div className="relative bg-background-light border border-border rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setSelectedNode(null)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X className="size-6" />
                        </button>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3.5 rounded-xl bg-background border border-border/80">
                                {selectedNode.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-anton text-foreground tracking-wide">{selectedNode.name}</h3>
                                <p className="text-xs uppercase font-mono text-primary">{selectedNode.tier}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-xs uppercase font-anton tracking-wider text-muted-foreground">Purpose</h4>
                                <p className="text-foreground mt-1 text-sm leading-relaxed">{selectedNode.purpose}</p>
                            </div>

                            <div>
                                <h4 className="text-xs uppercase font-anton tracking-wider text-muted-foreground">Why It Exists</h4>
                                <p className="text-foreground mt-1 text-sm leading-relaxed">{selectedNode.whyExists}</p>
                            </div>

                            <div>
                                <h4 className="text-xs uppercase font-anton tracking-wider text-muted-foreground">How It Communicates</h4>
                                <p className="text-foreground mt-1 text-sm leading-relaxed font-mono bg-background/50 p-2.5 rounded-lg border border-border/50 text-[13px]">{selectedNode.howCommunicates}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AWSArchitectureShowcase;
