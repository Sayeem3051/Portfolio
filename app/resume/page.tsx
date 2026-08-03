'use client';
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';
import { RESUME_BASE64 } from '@/lib/resume-base64';

export default function ResumePage() {


    return (
        <div className="min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black print:p-0">
            {/* Top Toolbar - Hidden on Print */}
            <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="size-4" /> Back to Portfolio
                </Link>
                <a
                    href={`data:application/pdf;base64,${RESUME_BASE64}`}
                    download="Abkari_Mohammed_Sayeem_Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all duration-300 shadow-md"
                >
                    <Download className="size-4" /> Download Resume (PDF)
                </a>
            </div>

            {/* Resume Sheet Container */}
            <div className="max-w-4xl mx-auto border border-border/40 rounded-3xl bg-background-light/10 p-8 sm:p-12 shadow-2xl print:border-none print:shadow-none print:bg-white print:text-black print:p-0">
                
                {/* Header Section */}
                <div className="border-b border-border/60 pb-8 mb-8 print:border-black/20">
                    <h1 className="text-4xl font-anton tracking-wide text-foreground mb-4 print:text-black print:text-3xl">
                        Abkari Mohammed Sayeem
                    </h1>
                    <p className="text-primary font-semibold text-lg mb-6 print:text-black/80 print:text-base">
                        Cloud & DevOps Engineer
                    </p>
                    
                    {/* Contacts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground print:text-black print:grid-cols-2">
                        <div className="flex items-center gap-2">
                            <Mail className="size-4 text-primary shrink-0 print:text-black" />
                            <span>saeemabkari6@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="size-4 text-primary shrink-0 print:text-black" />
                            <span>9449663051</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="size-4 text-primary shrink-0 print:text-black" />
                            <span>Mangaluru, Karnataka</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin className="size-4 text-primary shrink-0 print:text-black" />
                            <a href="https://linkedin.com/in/sayeem3051" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                linkedin.com/in/sayeem3051
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Github className="size-4 text-primary shrink-0 print:text-black" />
                            <a href="https://github.com/Sayeem3051" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                github.com/Sayeem3051
                            </a>
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold tracking-wide text-foreground mb-3 uppercase border-b border-border/40 pb-2 print:text-black print:border-black/20">
                        Summary
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed print:text-black/90">
                        Cloud & DevOps Engineer (BCA graduate, Artificial Intelligence) with hands-on experience designing and deploying multi-tier applications and infrastructure on AWS — including VPC networking, EC2, load balancing, RDS, IAM, and CI/CD automation. Complements this with project experience in Generative AI and RAG-based systems, including LLM integration and vector search. Seeking to apply cloud engineering and DevOps skills in a Cloud/DevOps engineering role, with continued interest in applied AI/ML.
                    </p>
                </div>

                {/* Technical Skills */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold tracking-wide text-foreground mb-4 uppercase border-b border-border/40 pb-2 print:text-black print:border-black/20">
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                        <div className="flex items-start gap-2">
                            <strong className="text-primary print:text-black w-36 shrink-0">Programming:</strong>
                            <span className="text-muted-foreground print:text-black/90">Python, Bash, SQL</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <strong className="text-primary print:text-black w-36 shrink-0">Backend Dev:</strong>
                            <span className="text-muted-foreground print:text-black/90">Flask, RESTful API design</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <strong className="text-primary print:text-black w-36 shrink-0">Cloud Platforms:</strong>
                            <span className="text-muted-foreground print:text-black/90">AWS (EC2, S3, Lambda, API Gateway, DynamoDB, RDS, IAM, VPC, CloudWatch, SNS, ALB, Auto Scaling)</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <strong className="text-primary print:text-black w-36 shrink-0">DevOps & Deploy:</strong>
                            <span className="text-muted-foreground print:text-black/90">Linux, Docker, Nginx, Gunicorn, Terraform, GitHub Actions, CI/CD pipelines</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <strong className="text-primary print:text-black w-36 shrink-0">Databases:</strong>
                            <span className="text-muted-foreground print:text-black/90">MySQL, DynamoDB, SQLite</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <strong className="text-primary print:text-black w-36 shrink-0">AI & GenAI:</strong>
                            <span className="text-muted-foreground print:text-black/90">RAG pipelines, FAISS vector search, LLM integration, prompt engineering, TensorFlow, LangChain, n8n</span>
                        </div>
                    </div>
                </div>

                {/* Work Experience */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold tracking-wide text-foreground mb-4 uppercase border-b border-border/40 pb-2 print:text-black print:border-black/20">
                        Work Experience
                    </h2>
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h3 className="font-bold text-foreground print:text-black">AI/ML Intern — Elewayte</h3>
                            <span className="text-xs font-mono text-primary print:text-black">Sep 2024 – Oct 2024</span>
                        </div>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2 print:text-black/90">
                            <li>Built and evaluated supervised ML models (Logistic Regression, SVM, Random Forest) in Python, achieving up to **88% validation accuracy** across 5+ structured datasets.</li>
                            <li>Translated model evaluation results into clear, actionable summaries for internship stakeholders, supporting more informed data-driven decisions.</li>
                            <li>Performed end-to-end ML workflows including data preprocessing, EDA, feature engineering, and model evaluation using Pandas, NumPy, and scikit-learn.</li>
                            <li>Developed data visualizations with Matplotlib and Seaborn to identify patterns and communicate findings clearly.</li>
                            <li>Maintained project code and collaboration using Git and GitHub, building team-oriented version control habits.</li>
                        </ul>
                    </div>
                </div>

                {/* Selected Projects */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold tracking-wide text-foreground mb-4 uppercase border-b border-border/40 pb-2 print:text-black print:border-black/20">
                        Selected Projects
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-foreground mb-1 print:text-black">AI RAG Interview Assistant</h3>
                            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 print:text-black/90">
                                <li>Designed and deployed a RAG-based AI application on AWS EC2, integrating a pre-trained LLM with a FAISS vector store for intelligent document retrieval over 15+ PDFs.</li>
                                <li>Built complete AI pipeline: document ingestion, embedding generation, FAISS vector indexing, LLM-based answer synthesis, and RESTful API delivery using Python and Flask, achieving a ~30% reduction in query response time.</li>
                                <li>Containerized the application using Docker with Nginx as a reverse proxy, and implemented automated CI/CD via GitHub Actions.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground mb-1 print:text-black">Three-Tier E-Commerce Application on AWS (SamCart)</h3>
                            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 print:text-black/90">
                                <li>Designed and deployed a multi-tier e-commerce application on AWS with a Next.js frontend and Flask REST API backend.</li>
                                <li>Architected custom VPC with public/private subnets, separate EC2 instances for frontend/backend, ALB, and Amazon RDS (MySQL) in a private subnet.</li>
                                <li>Set up CloudWatch metrics monitoring with SNS notifications and automated Gunicorn server management.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Certifications & Education */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-bold tracking-wide text-foreground mb-4 uppercase border-b border-border/40 pb-2 print:text-black print:border-black/20">
                            Certifications
                        </h2>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2 print:text-black/90">
                            <li>Google Cloud Gen AI Academy 2.0 — Google Cloud [2026]</li>
                            <li>AWS Cloud Quest: Generative AI Practitioner — AWS [2026]</li>
                            <li>Introduction to Python — IBM [2023]</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="text-xl font-bold tracking-wide text-foreground mb-4 uppercase border-b border-border/40 pb-2 print:text-black print:border-black/20">
                            Education
                        </h2>
                        <div className="text-sm">
                            <h3 className="font-bold text-foreground print:text-black">Bachelor of Computer Applications</h3>
                            <p className="text-primary font-medium text-xs mb-1 print:text-black">Specialization: Artificial Intelligence (2026)</p>
                            <p className="text-xs text-muted-foreground mb-2 print:text-black/70">Dr. B B Hegde First Grade College, Mangaluru</p>
                            <p className="font-semibold text-muted-foreground print:text-black/90">CGPA: 7.28</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
