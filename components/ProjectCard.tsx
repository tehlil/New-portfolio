"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  Brain, 
  Mic, 
  LayoutDashboard, 
  HeartPulse, 
  ArrowUpRight 
} from "lucide-react";

const iconMap = {
  Smartphone: Smartphone,
  Brain: Brain,
  Mic: Mic,
  LayoutDashboard: LayoutDashboard,
  HeartPulse: HeartPulse,
};

export interface Project {
  title: string;
  url: string;
  description: string;
  iconName: keyof typeof iconMap;
  techTags: string[];
  glowColor: string; // Tailwind glow class (e.g. 'group-hover:border-cyan-500/30' or gradient color)
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const IconComponent = iconMap[project.iconName] || Smartphone;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative flex flex-col justify-between h-full rounded-[28px] border border-white/5 bg-black/40 backdrop-blur-xl p-8 shadow-2xl hover:border-white/10 hover:shadow-cyan-950/10 transition-colors duration-300 group"
    >
      {/* Background radial glow matching overall theme, visible on hover */}
      <div className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
        <div 
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial from-white/[0.04] to-transparent" 
          style={{
            background: `radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), ${project.glowColor} 0%, transparent 80%)`
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Header Area with Icon and External Link Icon */}
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.04] transition-all duration-300">
              <IconComponent 
                className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors duration-300" 
              />
            </div>
            
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors duration-200"
              aria-label={`Visit ${project.title}`}
            >
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold tracking-wide text-white mb-3 group-hover:text-[var(--color-text-glow-primary)] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-neutral-400 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Footer Area with Tech Badges and Links */}
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="border border-white/5 bg-white/[0.01] rounded px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-neutral-400 uppercase transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-semibold tracking-wider text-neutral-400 group-hover:text-white transition-colors duration-300 uppercase"
          >
            Explore Project
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1.5">
              →
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
