'use client';
import React from 'react';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import HeroTerminal from './HeroTerminal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container min-h-[100svh] flex flex-col lg:flex-row justify-between items-center gap-12 max-lg:pt-28 max-lg:pb-16"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px] w-full shrink-0 slide-up-and-fade">
                    <h1 className="banner-title leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">CLOUD &</span>
                        <br /> <span className="ml-4">DEVOPS</span>
                    </h1>
                    <p className="banner-description mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Sayeem
                        </span>
                        . A passionate Cloud & DevOps Engineer specializing in AWS infrastructure design, containerized workloads, automation pipelines, and Generative AI systems.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Sayeem3051"
                        variant="primary"
                        className="mt-9 banner-button"
                    >
                        View GitHub
                    </Button>

                    <div className="flex items-center gap-2 mt-3">
                        <span className="size-3 rounded-full bg-white"></span>
                        <span className="text-sm text-muted-foreground">
                            Available for full-time cloud opportunities
                        </span>
                    </div>
                </div>

                {/* Right Side: Ubuntu interactive terminal */}
                <div className="w-full max-w-[580px] h-[520px] max-sm:h-[400px] shrink-0 slide-up-and-fade">
                    <HeroTerminal />
                </div>
            </div>
        </section>
    );
};

export default Banner;
