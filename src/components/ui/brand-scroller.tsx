"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const getIconUrl = (icon: string) => {
    const devicon = (slug: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;
    switch (icon) {
        case 'react': return devicon('react');
        case 'nodejs': return devicon('nodejs');
        case 'python': return devicon('python');
        case 'tailwind': return devicon('tailwindcss');
        case 'postgresql': return devicon('postgresql');
        case 'pandas': return devicon('pandas');
        case 'powerbi': return 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg';
        case 'tableau': return 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png';
        case 'excel': return '/excel-logo.png';
        case 'figma': return devicon('figma');
        case 'docker': return devicon('docker');
        case 'google': return 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg';
        default: return devicon(icon);
    }
};

const techStackItems = portfolioData.techStack.map(item => ({ ...item, icon: getIconUrl(item.icon) }));
const toolItems = portfolioData.tools.map(item => ({ ...item, icon: getIconUrl(item.icon) }));

const ScrollerItem = ({ name, icon }: { name: string; icon: string }) => (
    <div className="flex items-center gap-4 px-12 py-4 transition-all duration-300 group">
        <div className="relative w-10 h-10 flex-shrink-0 transition-all duration-500">
            <Image
                src={icon}
                alt={name}
                fill
                className="object-contain"
                unoptimized
            />
        </div>
        <p className="text-xl font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {name}
        </p>
    </div>
);

export const BrandScroller = () => {
    return (
        <div className="relative flex overflow-hidden py-2 w-full px-8 md:px-16 lg:px-24 [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            <motion.div
                animate={{
                    x: ["-50%", "0%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap"
            >
                {/* Render twice for seamless loop */}
                <div className="flex shrink-0">
                    {techStackItems.map((item, idx) => (
                        <ScrollerItem key={`tech-1-${idx}`} name={item.name} icon={item.icon} />
                    ))}
                </div>
                <div className="flex shrink-0">
                    {techStackItems.map((item, idx) => (
                        <ScrollerItem key={`tech-2-${idx}`} name={item.name} icon={item.icon} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export const BrandScrollerReverse = () => {
    return (
        <div className="relative flex overflow-hidden py-2 w-full px-8 md:px-16 lg:px-24 [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            <motion.div
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap"
            >
                {/* Render twice for seamless loop */}
                <div className="flex shrink-0">
                    {toolItems.map((item, idx) => (
                        <ScrollerItem key={`tool-1-${idx}`} name={item.name} icon={item.icon} />
                    ))}
                </div>
                <div className="flex shrink-0">
                    {toolItems.map((item, idx) => (
                        <ScrollerItem key={`tool-2-${idx}`} name={item.name} icon={item.icon} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
