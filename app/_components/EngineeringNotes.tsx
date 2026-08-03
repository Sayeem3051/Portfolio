'use client';
import React, { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { ENGINEERING_NOTES } from '@/lib/data';
import { X, ArrowRight } from 'lucide-react';
import parse from 'html-react-parser';

interface Article {
    title: string;
    slug: string;
    date: string;
    summary: string;
    content: string;
}

const EngineeringNotes = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    return (
        <section id="engineering-notes" className="py-section bg-background">
            <div className="container">
                <SectionTitle title="Engineering Notes" />

                <p className="text-xl font-thin text-muted-foreground mb-16 max-w-[800px]">
                    Articles and research notes on system configurations, virtualization, secure cloud topology designs, and DevOps processes.
                </p>

                {/* Grid layout of notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ENGINEERING_NOTES.map((article) => (
                        <div 
                            key={article.slug}
                            className="group flex flex-col justify-between p-6 rounded-2xl border border-border/40 bg-background-light/20 hover:border-primary/50 hover:bg-background-light/40 transition-all duration-300 shadow-md"
                        >
                            <div>
                                <span className="text-xs text-primary font-mono tracking-wider">{article.date}</span>
                                <h4 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                    {article.summary}
                                </p>
                            </div>

                            <button
                                onClick={() => setSelectedArticle(article)}
                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors text-left"
                            >
                                Read Article <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Read Article Modal / Slide-over */}
            {selectedArticle && (
                <div className="fixed inset-0 z-50 flex items-center justify-end">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        onClick={() => setSelectedArticle(null)}
                    />
                    
                    {/* Slide-over Content Container */}
                    <div className="relative h-full max-w-2xl w-full bg-background border-l border-border p-6 md:p-10 overflow-y-auto z-[2] shadow-2xl animate-in slide-in-from-right duration-300">
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-background-light"
                        >
                            <X className="size-6" />
                        </button>

                        <div className="mt-10">
                            <span className="text-xs text-primary font-mono tracking-widest uppercase">{selectedArticle.date}</span>
                            <h3 className="text-3xl sm:text-4xl font-anton text-foreground mt-2 mb-6 tracking-wide leading-tight">
                                {selectedArticle.title}
                            </h3>
                            
                            <div className="border-t border-border/85 pt-6 text-muted-foreground text-base leading-relaxed prose prose-invert max-w-none space-y-6">
                                {parse(selectedArticle.content)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default EngineeringNotes;
