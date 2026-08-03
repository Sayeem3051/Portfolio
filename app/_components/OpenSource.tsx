'use client';
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { OPEN_SOURCE } from '@/lib/data';
import { GitPullRequest, ExternalLink } from 'lucide-react';

const OpenSource = () => {
    return (
        <section id="open-source" className="py-section bg-background">
            <div className="container">
                <SectionTitle title="Open Source" />

                <p className="text-xl font-thin text-muted-foreground mb-16 max-w-[800px]">
                    Actively contributing to AI development tools, data science systems, and documentation ecosystems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {OPEN_SOURCE.map((item, idx) => (
                        <div key={idx} className="border border-border/40 rounded-3xl bg-background-light/20 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 shadow-xl relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />
                            
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <div className="size-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                                    <GitPullRequest className="size-7 text-purple-400" />
                                </div>
                                
                                <div className="grow">
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 uppercase">
                                            Merged Pull Request
                                        </span>
                                        <span className="text-xs text-muted-foreground">GitHub Contribution</span>
                                    </div>
                                    
                                    <h4 className="text-2xl font-bold text-foreground mt-3 mb-4 tracking-wide">
                                        {item.title}
                                    </h4>
                                    
                                    <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="sm:pl-20 mt-4 sm:mt-0">
                                <a
                                    href={item.prUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-purple-300 transition-colors"
                                >
                                    View Pull Request <ExternalLink className="size-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenSource;
