'use client';
import React, { useRef } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Milestone {
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
}

const MILESTONES: Milestone[] = [
    {
        title: 'Linux Administration',
        subtitle: 'Foundational Systems Layer',
        description: 'Began journey mastering operating systems fundamentals. Learned shell scripting (Bash), access permissions, service configs (systemd), processes management, and secure SSH tunneling.',
        tech: ['Linux', 'Bash Scripting', 'Nginx', 'Gunicorn'],
    },
    {
        title: 'Networking Essentials',
        subtitle: 'Bridges and Boundaries',
        description: 'Gained absolute clarity on networking protocols, subnet calculations (CIDR), routing, domain management (DNS), firewalls, reverse proxy logic, and securing Layer 7 protocols.',
        tech: ['TCP/IP', 'DNS', 'HTTP/S', 'SSH', 'Subnetting'],
    },
    {
        title: 'AWS Infrastructure',
        subtitle: 'Scale to the Clouds',
        description: 'Transitioned local workflows into the cloud. Designed highly resilient, isolated multi-tier networks using AWS VPC, routing tables, EC2 instances, RDS databases, S3 object storage, and IAM least-privilege security.',
        tech: ['VPC', 'EC2', 'RDS', 'S3', 'IAM', 'CloudWatch', 'Lambda'],
    },
    {
        title: 'Docker Containers',
        subtitle: 'Consistency at Any Scale',
        description: 'Adopted container-centric architectures. Wrote optimized multi-stage Dockerfiles to isolate Flask/Python backend APIs, minimizing load images and managing container environments.',
        tech: ['Docker', 'Multi-Stage Builds', 'Compose', 'Container Security'],
    },
    {
        title: 'Terraform (IaC)',
        subtitle: 'Infrastructure as Code',
        description: 'Standardized infrastructure deployment. Wrote scalable, modular declarative scripts using Terraform to build, modify, and track cloud state repositories repeatably.',
        tech: ['Terraform', 'HCL', 'State Management', 'AWS Provider'],
    },
    {
        title: 'CI/CD Automation',
        subtitle: 'Continuous Integration / Delivery',
        description: 'Automated release and deploy processes. Constructed build pipelines using GitHub Actions to trigger automated image packaging, testing, and continuous deployments (CD) on virtual servers.',
        tech: ['GitHub Actions', 'CI/CD Pipelines', 'SSH Deploy', 'Automation'],
    },
    {
        title: 'Generative AI Engineering',
        subtitle: 'Intelligent Cloud Apps',
        description: 'Integrated intelligent logic with systems. Built Retrieval-Augmented Generation (RAG) structures, FAISS vector index searches, LangChain conversation interfaces, and automated workflows using n8n.',
        tech: ['LangChain', 'FAISS', 'LLMs', 'Prompt Engineering', 'n8n'],
    },
    {
        title: 'Cloud & DevOps Engineer',
        subtitle: 'Modern Systems Architecture',
        description: 'Operating at the intersection of secure infrastructure provisioning, automated CI/CD flow, container orchestration, and Generative AI backend application layers.',
        tech: ['AWS Cloud', 'Platform Engineering', 'Generative AI Systems', 'Production Ops'],
    },
];

const CloudJourney = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const items = containerRef.current?.querySelectorAll('.timeline-node');
            if (!items?.length) return;

            items.forEach((item) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'bottom 80%',
                        scrub: 0.5,
                    },
                    opacity: 0,
                    x: -50,
                    duration: 1,
                });
            });

            // Animate progress line growth
            gsap.from('.timeline-line-progress', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    scrub: true,
                },
                scaleY: 0,
                transformOrigin: 'top center',
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="cloud-journey" className="py-section bg-background" ref={containerRef}>
            <div className="container">
                <SectionTitle title="Cloud & DevOps Journey" />

                <p className="text-xl font-thin text-muted-foreground mb-20 max-w-[800px]">
                    Tracing the evolutionary path of specialized knowledge from core OS administration to automated cloud infrastructure and Generative AI systems.
                </p>

                {/* Timeline visual layout */}
                <div className="relative border-l border-border/40 pl-6 md:pl-12 ml-4 md:ml-10 space-y-16">
                    
                    {/* Background Progress Line */}
                    <div className="absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-primary/20 rounded-full" />
                    {/* Animated Progress Line */}
                    <div className="timeline-line-progress absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-secondary to-primary rounded-full origin-top" />

                    {MILESTONES.map((milestone, idx) => (
                        <div 
                            key={milestone.title} 
                            className="timeline-node relative group flex flex-col md:flex-row gap-6 md:gap-12"
                        >
                            {/* Point Indicator */}
                            <div className="absolute -left-[30px] md:-left-[54px] top-1.5 size-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-all duration-300 shadow-[0_0_8px_rgba(255,153,0,0.5)] group-hover:scale-125 z-[2]">
                                <span className="absolute inset-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </div>

                            {/* Node Metadata (Left side on md+) */}
                            <div className="md:w-1/3 flex flex-col md:text-right select-none">
                                <span className="text-sm font-bold text-primary tracking-widest uppercase font-mono">
                                    0{idx + 1}. Step
                                </span>
                                <h4 className="text-xl font-bold mt-1 text-foreground">
                                    {milestone.title}
                                </h4>
                                <span className="text-xs text-muted-foreground italic mt-0.5">
                                    {milestone.subtitle}
                                </span>
                            </div>

                            {/* Node Info Content (Right side on md+) */}
                            <div className="md:w-2/3 max-w-2xl bg-background-light/20 border border-border/40 rounded-2xl p-6 hover:border-primary/40 hover:bg-background-light/40 transition-all duration-300 shadow-md">
                                <p className="text-muted-foreground text-[15px] leading-relaxed">
                                    {milestone.description}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {milestone.tech.map((t) => (
                                        <span 
                                            key={t}
                                            className="text-[11px] px-2.5 py-1 rounded-md bg-background-light border border-border/80 text-foreground/80 font-mono"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CloudJourney;
