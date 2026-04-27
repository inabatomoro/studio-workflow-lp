"use client"

import { FadeIn } from "./FadeIn"

const pains = [
  {
    num: "01",
    title: "実務に対する不安",
    text: "Studioの操作はできるけど、「案件を一人で進める自信」がまだない...",
  },
  {
    num: "02",
    title: "次の一手が見えない",
    text: "いざ案件が動き出すと、何から手をつければいいかわからない...",
  },
  {
    num: "03",
    title: "正しい手順なのか心配",
    text: "独学で積み上げてきたけど、正しい実装ができているのか不安...",
  },
  {
    num: "04",
    title: "クライアント対応の壁",
    text: "やり取りに不安があり、満足してもらうイメージが湧かない...",
  },
]

export function PainPoints() {
  return (
    <section className="section-warm bg-pattern-rings pt-20 pb-36 px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent-color)] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-label justify-center mb-4">PAIN POINTS</p>
          <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-5">
            多くのStudioクリエイターが直面する<br />
            <span className="text-gradient-gold">4つの壁</span>
          </h2>
          <p className="text-base text-[var(--text-body)] max-w-xl mx-auto leading-relaxed">
            こんなお悩み、ありませんか？
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pains.map((pain, i) => (
            <FadeIn key={pain.num} delay={i * 100}>
              <div className="glass-lift p-5 md:p-7 flex gap-4 items-start group">
                <span className="text-4xl md:text-5xl font-black leading-none flex-shrink-0 text-[var(--navy)]/15 group-hover:text-[var(--navy)]/30 transition-colors duration-500 select-none number-display tracking-tight">
                  {pain.num}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[var(--navy)] mb-1.5 tracking-wide uppercase">{pain.title}</h3>
                  <p className="text-base leading-relaxed font-medium text-[var(--text-heading)]">
                    {pain.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bridge */}
        <FadeIn delay={400} className="mt-14">
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-black text-gradient-gold leading-snug mb-4 text-center">
              本講座は、単なるStudioの「ツール操作」を<br className="hidden sm:block" />解説する教材ではありません！
            </p>
            <div className="glass-card rounded-2xl px-5 md:px-8 py-6 md:py-7 text-left">
              <p className="text-base font-bold text-[var(--text-heading)] leading-relaxed">
                実案件の納品までの流れと、初学者がつまづきやすい<span className="emphasis-underline">制作のポイント</span>を押さえてもらう講座です。
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
