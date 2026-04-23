"use client"

import { FadeIn } from "./FadeIn"

export function FromTo() {
  return (
    <section className="section-white bg-pattern-dots pt-20 pb-36 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-label justify-center mb-4">YOUR FUTURE</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-5">
            確かな自信を<span className="text-gradient-gold">手に入れよう</span>
          </h2>
          <p className="text-base text-[var(--text-body)] max-w-2xl mx-auto leading-relaxed">
            自己流でやってきた方も、0→1を目指す方も、<br className="hidden sm:block" />
            確かな自信と実践力が手に入ります。
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-stretch gap-5">
          {/* FROM */}
          <FadeIn direction="left" className="flex-1">
            <div className="h-full rounded-2xl p-5 md:p-8 bg-slate-100/60 border border-slate-300 opacity-80">
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 bg-slate-200 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                BEFORE
              </span>
              <p className="text-sm font-medium text-slate-500 mb-5 leading-relaxed">
                Studioの基本操作はできるけど、実案件を一人で進めるには不安がある状態
              </p>
              <ul className="space-y-3">
                {[
                  "操作はできるが実案件には自信がない",
                  "次に何をすべきかわからず止まってしまう",
                  "学習に迷いが生じ、成長を実感できない",
                  "クライアント対応でミスが心配",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center flex-shrink-0 text-[10px]">✕</span>
                    <span className="text-sm text-slate-500 leading-relaxed line-through decoration-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Arrow */}
          <FadeIn direction="none" delay={200} className="flex items-center justify-center py-4 md:py-0">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent-color)] to-[#e8d066] flex items-center justify-center shadow-lg shadow-[var(--accent-color)]/20 animate-float rotate-90 md:rotate-0 transition-transform">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </FadeIn>

          {/* TO */}
          <FadeIn direction="right" className="flex-1">
            <div className="relative flex-1">
              {/* Outer glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[var(--accent-color)]/30 via-transparent to-[var(--accent-color)]/10 rounded-3xl blur-xl opacity-80" />
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[var(--accent-color)]/50 via-[var(--accent-color)]/20 to-transparent rounded-2xl" />

              <div className="relative h-full rounded-2xl p-5 md:p-8 bg-gradient-to-br from-[var(--navy)] via-[#0d1829] to-[var(--navy-mid)] overflow-hidden">
                {/* Background glows */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--accent-color)] opacity-[0.08] blur-[60px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 opacity-[0.04] blur-[50px] rounded-full pointer-events-none" />

                {/* AFTER badge */}
                <span className="relative inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 bg-[var(--accent-color)]/20 text-[var(--accent-color)] border border-[var(--accent-color)]/40 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent-color)]" />
                  </span>
                  AFTER
                </span>

                <p className="relative text-base font-bold text-white mb-6 leading-relaxed">
                  Studio案件を一人で完遂し、<br className="hidden sm:block" />クライアントから<span className="text-gradient-gold-bright">信頼されるプロ</span>の状態
                </p>

                <ul className="relative space-y-2.5">
                  {[
                    "案件を一人で完遂できるプロへ成長",
                    "迷わず動ける全体ワークフローを習得",
                    "自信を持って次の案件に挑める",
                    "リピートで指名されるクリエイターへ",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5 border border-white/5">
                      <span className="w-5 h-5 rounded-full bg-[var(--accent-color)] text-[var(--navy)] flex items-center justify-center flex-shrink-0 text-[10px] font-black shadow-[0_0_10px_rgba(212,175,55,0.4)]">✓</span>
                      <span className="text-sm text-white font-semibold leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
