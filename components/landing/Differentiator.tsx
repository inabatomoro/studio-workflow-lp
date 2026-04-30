"use client"

import { FadeIn } from "./FadeIn"

const points = [
  {
    title: "より高い視座からの設計思想",
    desc: "多くの教材はStudioの「操作」を教えますが、実務ではそれはパーツに過ぎません。本講座は「クライアントワーク」を主役に据え、スキルの活かし方を体系的に教えます。",
  },
  {
    title: "挫折させない仕組み",
    desc: "メルマガでの伴走とコミュニティでの質問環境により、「やり切らせる」ことに重点を置いた設計。一人で悩む時間をゼロに。",
  },
  {
    title: "操作説明を超えた実践知",
    desc: "基本操作は省き、実務で本当に役立つ現場のリアルを凝縮。案件進行に必須のクライアントワーク、デザインフローまで網羅します。",
  },
]

export function Differentiator() {
  return (
    <section className="section-white bg-pattern-grid pt-20 pb-36 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--navy)] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left text */}
          <FadeIn direction="left" className="flex-1">
            <p className="section-label mb-5">DIFFERENTIATOR</p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-6">
              なぜ、Studioの操作を学んでも
              <span className="text-gradient-gold">「案件」は進められないのか？</span>
            </h2>
            <p className="text-base text-[var(--text-body)] leading-relaxed mb-10 max-w-md">
              ツールの操作を覚えても、案件進行の全体像を把握しなければ満足度の高い仕事はできません。本講座はあなたが最後まで一人でやり切れるよう、<span className="font-semibold text-[var(--text-heading)]">ワークフロー全体を意識した設計</span>にしました。
            </p>
            <div className="text-center lg:text-left">
              <a href="#pricing" className="btn-accent inline-block px-10 py-4 text-sm rounded-2xl">
                コースを今すぐ始める →
              </a>
            </div>
          </FadeIn>

          {/* Right: Points */}
          <div className="flex-1 space-y-4">
            {points.map((p, i) => (
              <FadeIn key={i} delay={i * 150} direction="right">
                <div className="glass-lift p-7 flex gap-5 group">
                  <div className="w-11 h-11 rounded-xl bg-[var(--navy)] text-[var(--accent-color)] flex items-center justify-center flex-shrink-0 text-sm font-black group-hover:scale-110 transition-transform duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1.5 text-[var(--text-heading)]">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--text-body)]">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
