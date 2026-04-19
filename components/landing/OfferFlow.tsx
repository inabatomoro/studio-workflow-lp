"use client"

import { FadeIn } from "./FadeIn"

const steps = [
  {
    num: "01",
    title: "専用ページにてお申し込み",
    desc: "動画講座＋豪華5大特典セットをお申し込み。決済完了後、すぐに視聴開始できます。",
  },
  {
    num: "02",
    title: "学習システム・コミュニティへご案内",
    desc: "専用の学習システム（LMS）およびサポートコミュニティへご案内いたします。",
  },
  {
    num: "03",
    title: "伴走メルマガ配信スタート",
    desc: "学習開始！わからないところはコミュニティで即質問。2ヶ月のサポートで確実に完走。",
  },
]

export function OfferFlow() {
  return (
    <section className="section-white bg-pattern-dots pt-20 pb-36 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-label justify-center mb-4">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight">
            <span className="text-gradient-gold">3ステップ</span>で始められます
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="relative h-full">
                <div className="glass-lift p-5 md:p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-mid)] text-[var(--accent-color)] flex items-center justify-center text-xl font-black mb-6 number-display shadow-lg shadow-[var(--navy)]/10">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold mb-2.5 text-[var(--text-heading)]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-body)]">{step.desc}</p>
                </div>

                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 right-0 translate-x-[1.25rem] lg:translate-x-[1.5rem] -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-sm border border-orange-100/50 text-[var(--accent-color)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
