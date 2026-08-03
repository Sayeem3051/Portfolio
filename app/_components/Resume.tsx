'use client';
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { FileText, Download, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { RESUME_BASE64 } from '@/lib/resume-base64';


const Resume = () => {
    return (
        <section id="resume" className="py-section bg-background-light/10">
            <div className="container">
                <SectionTitle title="Resume" />

                <p className="text-xl font-thin text-muted-foreground mb-16 max-w-[800px]">
                    My educational background, professional experience, and technical milestones.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Summary & Download Card */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="border border-border/40 rounded-3xl bg-background-light/20 p-8 hover:border-primary/30 transition-all duration-300 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />
                            
                            <FileText className="size-10 text-primary mb-6" />
                            
                            <h4 className="text-xl font-bold text-foreground mb-2">Abkari Mohammed Sayeem</h4>
                            <p className="text-sm text-primary font-medium mb-6">Cloud & DevOps Engineer</p>
                            
                            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                                BCA graduate specializing in Artificial Intelligence with hands-on experience designing and deploying multi-tier applications and infrastructure on AWS.
                            </p>
                            
                            <a
                                href={`data:application/pdf;base64,${RESUME_BASE64}`}
                                download="Abkari_Mohammed_Sayeem_Resume.pdf"
                                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/20"
                            >
                                <Download className="size-5" /> Download Full CV (PDF)
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Timeline details */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Work Experience */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-border/40 pb-3">
                                <Briefcase className="size-6 text-primary" />
                                <h3 className="text-2xl font-bold tracking-wide">Work Experience</h3>
                            </div>
                            
                            <div className="relative border-l border-border/60 pl-8 ml-3 space-y-8">
                                <div className="relative">
                                    <div className="absolute -left-[38px] top-1.5 size-4 rounded-full bg-primary border-4 border-background" />
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <h4 className="text-lg font-bold text-foreground">AI / ML Intern</h4>
                                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            Sep 2024 – Oct 2024
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold text-primary mb-4">Elewayte</p>
                                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2.5 leading-relaxed">
                                        <li>Built and evaluated supervised ML models (Logistic Regression, SVM, Random Forest) in Python, achieving up to **88% validation accuracy** across 5+ structured datasets.</li>
                                        <li>Translated model evaluation results into clear, actionable summaries for stakeholders to support data-driven decisions.</li>
                                        <li>Performed end-to-end ML workflows including data preprocessing, EDA, feature engineering, and model evaluation using Pandas, NumPy, and scikit-learn.</li>
                                        <li>Maintained project code and collaboration using Git and GitHub, building team-oriented version control habits.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-border/40 pb-3">
                                <GraduationCap className="size-6 text-primary" />
                                <h3 className="text-2xl font-bold tracking-wide">Education</h3>
                            </div>
                            
                            <div className="relative border-l border-border/60 pl-8 ml-3 space-y-8">
                                <div className="relative">
                                    <div className="absolute -left-[38px] top-1.5 size-4 rounded-full bg-primary border-4 border-background" />
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <h4 className="text-lg font-bold text-foreground">Bachelor of Computer Applications</h4>
                                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            Class of 2026
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold text-primary mb-1">Specialization: Artificial Intelligence</p>
                                    <p className="text-xs text-muted-foreground mb-3">Dr. B B Hegde First Grade College, Mangaluru</p>
                                    <p className="text-sm text-muted-foreground">
                                        Core Coursework focusing on cloud computing, data systems, and machine learning architectures. <br/>
                                        <strong>CGPA achieved: 7.28</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-border/40 pb-3">
                                <Globe className="size-6 text-primary" />
                                <h3 className="text-2xl font-bold tracking-wide">Languages</h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-3">
                                {['English (Professional)', 'Hindi (Spoken)', 'Kannada (Native)'].map((lang) => (
                                    <span key={lang} className="px-4 py-2 rounded-2xl border border-border/50 bg-background-light/10 text-sm text-foreground hover:border-primary/30 transition-colors">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
