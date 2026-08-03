'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

interface TerminalLine {
    text: string;
    type: 'command' | 'output' | 'success' | 'warning' | 'error';
}

const HeroTerminal = () => {
    const [lines, setLines] = useState<TerminalLine[]>([]);
    const [currentCommand, setCurrentCommand] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of terminal
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [lines, currentCommand]);

    useEffect(() => {
        let isCancelled = false;

        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        // Simulate human typing speed
        const typeCommand = async (cmdText: string) => {
            setCurrentCommand('');
            for (let i = 0; i < cmdText.length; i++) {
                if (isCancelled) return;
                setCurrentCommand(prev => prev + cmdText[i]);
                // Vary speed naturally
                const speed = Math.random() * 60 + 20; 
                await sleep(speed);
            }
            await sleep(250);
            setLines(prev => [...prev, { text: '$ ' + cmdText, type: 'command' }]);
            setCurrentCommand('');
        };

        const printInstant = (text: string, type: 'output' | 'success' | 'warning' | 'error' = 'output') => {
            setLines(prev => [...prev, { text, type }]);
        };

        const runSimulation = async () => {
            while (!isCancelled) {
                setLines([]);
                setCurrentCommand('');

                // 1. git clone
                await typeCommand('git clone https://github.com/Sayeem3051/samcart-cloud-deployment');
                if (isCancelled) return;
                printInstant("Cloning into 'samcart-cloud-deployment'...");
                await sleep(800);
                printInstant("Receiving objects: 100% (412/412), 128.45 KiB | 2.14 MiB/s, done.");
                printInstant("Resolving deltas: 100% (210/210), done.");
                printInstant("Done.", "success");
                await sleep(800);

                // 2. cd
                await typeCommand('cd samcart-cloud-deployment');
                if (isCancelled) return;
                await sleep(400);

                // 3. docker compose build
                await typeCommand('docker compose build');
                if (isCancelled) return;
                printInstant("Building frontend...");
                await sleep(600);
                printInstant("Building backend...");
                await sleep(800);
                printInstant("Installing dependencies in containers...");
                await sleep(1000);
                printInstant("✓ Build completed", "success");
                await sleep(600);

                // 4. docker compose up -d
                await typeCommand('docker compose up -d');
                if (isCancelled) return;
                printInstant("Creating network \"samcart-network\" with internal driver");
                await sleep(300);
                printInstant("Creating container samcart-frontend-1 ... done", "success");
                await sleep(300);
                printInstant("Creating container samcart-backend-1  ... done", "success");
                await sleep(300);
                printInstant("Creating container samcart-nginx-1      ... done", "success");
                printInstant("Containers started successfully", "success");
                await sleep(800);

                // 5. systemctl start nginx
                await typeCommand('systemctl start nginx');
                if (isCancelled) return;
                printInstant("Starting nginx.service...");
                await sleep(500);
                printInstant("✓ Active", "success");
                await sleep(500);

                // 6. systemctl start samcart-backend
                await typeCommand('systemctl start samcart-backend');
                if (isCancelled) return;
                printInstant("Starting Gunicorn service...");
                await sleep(600);
                printInstant("✓ Running", "success");
                await sleep(700);

                // 7. aws configure
                await typeCommand('aws configure');
                if (isCancelled) return;
                await sleep(300);
                printInstant("Access Key configured");
                await sleep(200);
                printInstant("Secret configured");
                await sleep(200);
                printInstant("Region ap-south-1");
                await sleep(200);
                printInstant("Output json");
                await sleep(800);

                // 8. terraform plan
                await typeCommand('terraform plan');
                if (isCancelled) return;
                printInstant("Refreshing Terraform state in-memory...");
                await sleep(900);
                printInstant("Reading local resources definitions...");
                await sleep(500);
                printInstant("Plan:", "output");
                printInstant("+ VPC", "success");
                printInstant("+ Public Subnets", "success");
                printInstant("+ Private Subnets", "success");
                printInstant("+ Route Tables", "success");
                printInstant("+ Internet Gateway", "success");
                printInstant("+ NAT Gateway", "success");
                printInstant("+ Security Groups", "success");
                printInstant("+ IAM Role", "success");
                printInstant("+ Application Load Balancer", "success");
                printInstant("+ Auto Scaling Group", "success");
                printInstant("+ RDS MySQL Instance", "success");
                printInstant("+ CloudWatch Log Group", "success");
                printInstant("+ SNS Alert Topic", "success");
                printInstant("Plan: 12 to add, 0 to change, 0 to destroy.", "warning");
                await sleep(1500);

                // 9. terraform apply (Interactive steps)
                await typeCommand('terraform apply -auto-approve');
                if (isCancelled) return;
                printInstant("Applying plan in progress...");
                await sleep(500);

                const tfResources = [
                    'VPC', 'Public Subnets', 'Private Subnets', 'Route Tables', 
                    'Internet Gateway', 'NAT Gateway', 'Security Groups', 'IAM Role',
                    'Application Load Balancer', 'Auto Scaling Group', 'Amazon RDS MySQL',
                    'CloudWatch Alarms', 'SNS Topic'
                ];

                for (let r = 0; r < tfResources.length; r++) {
                    if (isCancelled) return;
                    // Print applying line with dot progress simulator
                    const resourceName = tfResources[r];
                    printInstant(`Creating ${resourceName}...`);
                    await sleep(400 + Math.random() * 400); // Simulate network latency
                    // Replace/Modify last printed line with tick success
                    setLines(prev => {
                        const nextLines = [...prev];
                        if (nextLines.length > 0) {
                            nextLines[nextLines.length - 1] = {
                                text: `✓ Created ${resourceName} successfully`,
                                type: 'success'
                            };
                        }
                        return nextLines;
                    });
                }
                printInstant("Apply complete! Resources: 12 added, 0 changed, 0 destroyed.", "success");
                await sleep(1000);

                // 10. aws elbv2 describe-load-balancers
                await typeCommand('aws elbv2 describe-load-balancers');
                if (isCancelled) return;
                printInstant("samcart-alb");
                printInstant("Status:");
                printInstant("active", "success");
                await sleep(800);

                // 11. systemctl status samcart-backend
                await typeCommand('systemctl status samcart-backend');
                if (isCancelled) return;
                printInstant("● samcart-backend.service", "success");
                printInstant("   Loaded: loaded (/etc/systemd/system/samcart-backend.service)");
                printInstant("   Active: active (running) since Sun 2026-08-02", "success");
                printInstant("   Gunicorn workers: 4 concurrent processes");
                printInstant("   Memory: 118MB");
                printInstant("   CPU: 1.3%");
                await sleep(1000);

                // 12. curl healthcheck
                await typeCommand('curl http://localhost/api/health');
                if (isCancelled) return;
                await sleep(300);
                printInstant("{");
                printInstant("  \"status\": \"healthy\",", "success");
                printInstant("  \"database\": \"connected\",", "success");
                printInstant("  \"storage\": \"connected\",", "success");
                printInstant("  \"uptime\": \"100%\"", "success");
                printInstant("}");
                await sleep(1000);

                // 13. docker ps
                await typeCommand('docker ps');
                if (isCancelled) return;
                printInstant("CONTAINER ID   IMAGE             COMMAND                  STATUS         PORTS");
                printInstant("f4a13e2d6b1e   samcart-frontend  \"docker-entrypoint.s…\"   Up 2 minutes   0.0.0.0:3000->3000/tcp");
                printInstant("b2e95a123e4c   samcart-backend   \"gunicorn app:app -b…\"   Up 2 minutes   0.0.0.0:8000->8000/tcp");
                printInstant("cd124a9192eb   nginx:alpine      \"/docker-entrypoint.…\"   Up 2 minutes   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp");
                await sleep(800);

                // 14. aws cloudwatch describe-alarms
                await typeCommand('aws cloudwatch describe-alarms');
                if (isCancelled) return;
                printInstant("SamCart-Frontend-HighCPU: OK", "success");
                printInstant("SamCart-Backend-HighCPU:  OK", "success");
                await sleep(800);

                // 15. echo success
                await typeCommand('echo "Deployment Successful"');
                if (isCancelled) return;
                printInstant("🚀 Deployment Successful", "success");
                
                // Pause 5 seconds before clean restart
                await sleep(5000);
            }
        };

        runSimulation();

        return () => {
            isCancelled = true;
        };
    }, []);

    return (
        <div className="w-full h-full border border-border/80 rounded-2xl bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col font-mono text-[13px] md:text-sm select-none">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-background-light/40 border-b border-border/50 shrink-0">
                <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-[#FF5F56]" />
                    <span className="size-3 rounded-full bg-[#FFBD2E]" />
                    <span className="size-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-muted-foreground text-xs font-semibold select-none flex items-center gap-1.5">
                    <Terminal size={12} className="text-primary" />
                    <span>ubuntu@cloud-engineer:~</span>
                </div>
                <div className="w-10 h-2" /> {/* spacer */}
            </div>

            {/* Terminal Body */}
            <div 
                ref={containerRef}
                className="grow p-4 overflow-y-auto space-y-2.5 leading-relaxed overflow-x-auto whitespace-pre md:whitespace-pre-wrap select-text scrollbar-thin"
            >
                {lines.map((line, idx) => (
                    <div 
                        key={idx} 
                        className={
                            line.type === 'command' ? 'text-secondary font-semibold' :
                            line.type === 'success' ? 'text-emerald-400' :
                            line.type === 'warning' ? 'text-amber-400' :
                            line.type === 'error' ? 'text-rose-500' : 'text-slate-200'
                        }
                    >
                        {line.text}
                    </div>
                ))}

                {/* Current command line typing */}
                <div className="text-secondary font-semibold flex items-center">
                    <span>$ {currentCommand}</span>
                    <span className="inline-block w-2.5 h-4 bg-primary ml-1 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default HeroTerminal;
