import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    let stargazers_count = 0;
    let forks_count = 0;

    try {
        const repoStats = await fetch(
            'https://api.github.com/repos/tajmirul/portfolio-2.0',
            {
                next: {
                    revalidate: 60 * 60, // 1 hour
                },
            },
        );
        if (repoStats.ok) {
            const data = await repoStats.json() as RepoStats;
            stargazers_count = data.stargazers_count || 0;
            forks_count = data.forks_count || 0;
        }
    } catch (e) {
        console.error("Failed to fetch repository statistics from GitHub", e);
    }

    return (
        <footer className="text-center pb-5 mt-20" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline hover:text-primary transition-colors duration-300"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="text-sm">
                    <span className="leading-none text-muted-foreground">
                        Designed & built by{' '}
                        <a 
                            href="https://github.com/Sayeem3051" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-white font-semibold text-primary"
                        >
                            Abkari Mohammed Sayeem
                        </a>
                        <div className="flex items-center justify-center gap-5 pt-2">
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Star size={14} /> {stargazers_count}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <GitFork size={14} /> {forks_count}
                            </span>
                        </div>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
