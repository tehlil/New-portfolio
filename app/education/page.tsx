"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  School, 
  BookOpen 
} from "lucide-react";

interface EducationItem {
  title: string;
  institution: string;
  grade?: string;
  details?: string;
  subjects?: string[];
  icon: any;
  glowColor: string;
  colSpan: string;
}

const educationData: EducationItem[] = [
  {
    title: "Bachelor of Technology (B.Tech)",
    institution: "Techno NJR Institute of Technology",
    grade: "8.9 CGPA",
    subjects: [
      "Database Management Systems (DBMS)",
      "Data Structures & Algorithms (DSA)",
      "Information Security Systems",
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Cloud Computing",
      "Operating Systems (OS)"
    ],
    icon: GraduationCap,
    glowColor: "rgba(56, 189, 248, 0.15)", // Cyan glow
    colSpan: "col-span-1 lg:col-span-4"
  },
  {
    title: "German Language Certification",
    institution: "Centre for Communication Skills in English and Foreign Languages",
    grade: "1st Rank",
    details: "Certificate Course in German (2022) | Department of English, Mohanlal Sukhadia University (MLSU), Udaipur",
    icon: BookOpen,
    glowColor: "rgba(168, 85, 247, 0.15)", // Purple glow
    colSpan: "col-span-1 lg:col-span-2"
  },
  {
    title: "National Cadet Corps (NCC)",
    institution: "Indian Armed Forces (Youth Wing)",
    details: "Successfully obtained the prestigious NCC B and C Certificates, demonstrating leadership, discipline, and military training.",
    icon: ShieldCheck,
    glowColor: "rgba(34, 197, 94, 0.15)", // Green glow
    colSpan: "col-span-1 md:col-span-1 lg:col-span-2"
  },
  {
    title: "Senior Secondary Education (Class XII)",
    institution: "St. Mary's Convent School",
    grade: "First Division",
    details: "Completed in PCM Stream (Physics, Chemistry, Mathematics).",
    icon: School,
    glowColor: "rgba(239, 68, 68, 0.15)", // Red glow
    colSpan: "col-span-1 md:col-span-1 lg:col-span-2"
  },
  {
    title: "Secondary Education (Class X)",
    institution: "Board of Secondary Education",
    grade: "First Division",
    details: "Completed general secondary education with distinction.",
    icon: Award,
    glowColor: "rgba(245, 158, 11, 0.15)", // Amber glow
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
  }
];

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-24">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
          Education & <span className="text-[var(--color-text-glow-primary)]">Qualifications</span>
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
          My academic foundation, language certifications, extracurricular leadership, and core engineering focus.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {educationData.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative flex flex-col justify-between rounded-[28px] border border-white/5 bg-black/40 backdrop-blur-xl p-8 shadow-2xl hover:border-white/10 transition-all duration-300 group ${item.colSpan}`}
            >
              {/* Custom Radial Glow */}
              <div className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
                <div 
                  className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{
                    background: `radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), ${item.glowColor} 0%, transparent 80%)`
                  }}
                />
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div>
                  {/* Header Area with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.04] transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    {item.grade && (
                      <span className="text-xs font-bold tracking-wider text-[var(--color-text-glow-primary)] border border-[var(--color-text-glow-primary)]/20 bg-[var(--color-text-glow-primary)]/5 px-3 py-1 rounded-full uppercase">
                        {item.grade}
                      </span>
                    )}
                  </div>

                  {/* Title and Institution */}
                  <h3 className="text-xl font-bold tracking-wide text-white mb-1 group-hover:text-[var(--color-text-glow-primary)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-semibold mb-4">
                    {item.institution}
                  </p>

                  {/* Details / Text */}
                  {item.details && (
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {item.details}
                    </p>
                  )}

                  {/* Subjects Badges for B.Tech */}
                  {item.subjects && (
                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                        Core Subjects & Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.subjects.map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className="border border-white/5 bg-white/[0.01] hover:border-white/15 hover:bg-white/[0.03] rounded px-2.5 py-1 text-[10px] font-semibold text-neutral-400 hover:text-white uppercase transition-all duration-200"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
