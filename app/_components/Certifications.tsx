'use client';
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { CERTIFICATIONS } from '@/lib/data';
import { Award } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-section bg-background">
            <div className="container">
                <SectionTitle title="Certifications" />

                <p className="text-xl font-thin text-muted-foreground mb-16 max-w-[800px]">
                    Validated professional capabilities in Cloud Platforms, Generative AI models development, and systems development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CERTIFICATIONS.map((cert) => (
                        <div 
                            key={cert.title}
                            className="group flex flex-col justify-between p-6 rounded-2xl border border-border/40 bg-background-light/20 hover:border-primary/50 hover:bg-background-light/40 transition-all duration-300 shadow-md relative overflow-hidden"
                        >
                            {/* Decorative badge corner glow */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 opacity-50 group-hover:opacity-100" />

                            <div>
                                <div className="size-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6">
                                    <Award className="size-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>

                                <span className="text-xs uppercase font-mono tracking-widest text-primary">{cert.issuer}</span>
                                <h4 className="text-xl font-bold text-foreground mt-2 mb-3 tracking-wide">
                                    {cert.title}
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>

                            <div className="mt-8 flex justify-between items-center border-t border-border/40 pt-4 text-xs font-mono text-muted-foreground">
                                <span>Verified Credential</span>
                                <span className="text-foreground">{cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
