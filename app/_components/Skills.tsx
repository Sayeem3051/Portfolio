'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import { 
    Cloud, Server, Network, Layers, Shield, Cpu, Code, Database, 
    Container, Terminal, GitBranch, Brain, Search, Workflow
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Component to dynamically resolve icons (image file path or custom SVG)
const SkillIcon = ({ icon, name }: { icon: string; name: string }) => {
    const classNames = "max-h-10 w-auto object-contain filter group-hover/skill:brightness-125 transition-all duration-300";

    if (icon.startsWith('http') || icon.startsWith('/')) {
        return (
            <img
                src={icon}
                alt={name}
                className={classNames}
                loading="lazy"
            />
        );
    }

    // Dynamic icon resolution
    const iconSize = 28;
    const fallbackClassNames = "text-primary group-hover/skill:text-secondary group-hover/skill:scale-110 transition-all duration-300";

    switch (icon) {
        case 'google':
            return <Cloud size={iconSize} className={fallbackClassNames} />;
        case 'ec2':
            return <Server size={iconSize} className={fallbackClassNames} />;
        case 'vpc':
            return <Layers size={iconSize} className={fallbackClassNames} />;
        case 'rds':
            return <Database size={iconSize} className={fallbackClassNames} />;
        case 's3':
            return <Layers size={iconSize} className={fallbackClassNames} />;
        case 'iam':
            return <Shield size={iconSize} className={fallbackClassNames} />;
        case 'lambda':
            return <Cpu size={iconSize} className={fallbackClassNames} />;
        case 'network':
            return <Network size={iconSize} className={fallbackClassNames} />;
        case 'alb':
            return <Network size={iconSize} className={fallbackClassNames} />;
        case 'autoscaling':
            return <Layers size={iconSize} className={fallbackClassNames} />;
        case 'ecs':
            return <Container size={iconSize} className={fallbackClassNames} />;
        case 'terraform':
            return <Layers size={iconSize} className={fallbackClassNames} />;
        case 'nginx':
            return <Server size={iconSize} className={fallbackClassNames} />;
        case 'github-actions':
            return <GitBranch size={iconSize} className={fallbackClassNames} />;
        case 'python':
            return <Code size={iconSize} className={fallbackClassNames} />;
        case 'flask':
            return <Terminal size={iconSize} className={fallbackClassNames} />;
        case 'linux':
            return <Terminal size={iconSize} className={fallbackClassNames} />;
        case 'dynamodb':
            return <Database size={iconSize} className={fallbackClassNames} />;
        case 'langchain':
            return <GitBranch size={iconSize} className={fallbackClassNames} />;
        case 'faiss':
            return <Search size={iconSize} className={fallbackClassNames} />;
        case 'llm':
            return <Brain size={iconSize} className={fallbackClassNames} />;
        case 'n8n':
            return <Workflow size={iconSize} className={fallbackClassNames} />;
        default:
            return <Cloud size={iconSize} className={fallbackClassNames} />;
    }
};

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const rows = containerRef.current?.querySelectorAll('.skills-row');
        if (!rows?.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px', // triggers when top of row is 10% inside viewport
            threshold: 0.05,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const row = entry.target;
                    const title = row.querySelector('.slide-up-title');
                    const cards = row.querySelectorAll('.skill-card');

                    if (title) {
                        gsap.to(title, {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            ease: 'power2.out',
                        });
                    }

                    if (cards.length) {
                        gsap.to(cards, {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.5,
                            stagger: 0.05,
                            ease: 'power2.out',
                        });
                    }

                    observer.unobserve(row);
                }
            });
        }, observerOptions);

        rows.forEach((row) => {
            const title = row.querySelector('.slide-up-title');
            const cards = row.querySelectorAll('.skill-card');

            if (title) {
                gsap.set(title, { opacity: 0, y: 20 });
            }
            if (cards.length) {
                gsap.set(cards, { opacity: 0, scale: 0.95, y: 15 });
            }

            observer.observe(row);
        });

        // Auto-refresh layout triggers after load
        const handleLoad = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener('load', handleLoad);
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 800);

        return () => {
            observer.disconnect();
            window.removeEventListener('load', handleLoad);
            clearTimeout(timer);
        };
    }, []);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -100,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="py-section">
            <div className="container">
                <SectionTitle title="Technical Skills" />

                <div className="space-y-24">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="skills-row grid sm:grid-cols-12 border-b border-border/50 pb-12 last:border-0" key={key}>
                            <div className="sm:col-span-4">
                                <p className="slide-up-title text-4xl font-anton leading-none text-muted-foreground uppercase tracking-wider mb-6 sm:mb-0">
                                    {key.replace('_', ' ')}
                                </p>
                            </div>

                            <div className="sm:col-span-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
                                {value.map((item) => (
                                    <div
                                        className="relative group/skill skill-card flex gap-4 items-center leading-none p-4 rounded-xl border border-border/20 hover:border-primary/50 hover:bg-background-light/30 transition-all duration-300 cursor-help"
                                        key={item.name}
                                    >
                                        <div className="size-11 flex items-center justify-center rounded-lg bg-background-light border border-border/50">
                                            <SkillIcon icon={item.icon} name={item.name} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg font-medium text-foreground tracking-wide capitalize group-hover/skill:text-primary transition-all duration-300">
                                                {item.name}
                                            </span>
                                        </div>
                                        
                                        {/* Premium Tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-background-light border border-border p-4 rounded-xl opacity-0 pointer-events-none group-hover/skill:opacity-100 group-hover/skill:pointer-events-auto transition-all duration-300 z-[5] shadow-2xl scale-95 group-hover/skill:scale-100 origin-bottom">
                                            <div className="flex justify-between items-center mb-1.5 pb-1.5 border-b border-border/50">
                                                <span className="text-sm font-bold text-foreground">{item.name}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-background-light border-r border-b border-border rotate-45 -translate-y-1.5"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
