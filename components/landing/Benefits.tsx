"use client"

import { FadeIn } from "./FadeIn"

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Web制作の全体像が理解できる",
    desc: "デザインや実装のハードスキルだけでなく、WEB制作の全体像を把握できるようになります。",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "正しい手順を学べる",
    desc: "手戻りのないフローや正しい制作手順を学べます。",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "ハードスキル × ソフトスキルの両立",
    desc: "実装スキルだけでなく、ソフトスキルの重要性が理解できます",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "つまづきやすいポイントを回避できる",
    desc: "初学者がつまづきやすいポイントだけを効率よく学べます",
  },
]

export function Benefits() {
  return (
    <section className="section-warm bg-pattern-diagonal pt-20 pb-36 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--navy)] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-label justify-center mb-4">SOLUTION</p>
          <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-5 whitespace-nowrap">
            この講座で<span className="text-gradient-gold">学べること</span>
          </h2>
          <p className="text-base text-[var(--text-body)] max-w-xl mx-auto leading-relaxed">
            WEB制作の全体像を理解し、プロとして自信を持って現場に立てる力を。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="glass-lift p-7 flex gap-5 group h-full">
                <div className="w-12 h-12 rounded-xl bg-[var(--navy)] text-[var(--accent-color)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2 text-[var(--text-heading)]">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-body)]">{b.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
