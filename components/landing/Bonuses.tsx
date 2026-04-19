"use client"

import { FadeIn } from "./FadeIn"

const bonuses = [
  {
    num: "特典 01",
    title: "挫折をゼロにする「2ヶ月間の伴走型メルマガ」",
    desc: "全50本以上の動画を完走できるようガイド。あなたのペースに合わせた学習継続サポート。",
    value: "¥9,800相当",
  },
  {
    num: "特典 02",
    title: "一人で悩ませない「質問し放題コミュニティ」",
    desc: "同期のクリエイターや講師に気軽に質問できる専用コミュニティへ2ヶ月間招待。",
    value: "¥19,800相当",
  },
  {
    num: "特典 03",
    title: "案件でそのまま使える「プロのヒアリングシート」",
    desc: "初回クライアントMTGですぐ使える、現場のプロが実際に使っているヒアリングシートをプレゼント。",
    value: "¥4,800相当",
  },
  {
    num: "特典 04",
    title: "信頼を勝ち取る「クライアント向け運用マニュアル案」",
    desc: "納品時に渡せるプロ仕様の運用マニュアルテンプレート。信頼度が段違いに上がります。",
    value: "¥3,800相当",
  },
  {
    num: "特典 05",
    title: "追加特典（後日公開予定）",
    desc: "さらに豪華な追加特典を準備中。購入者には自動的にプレゼントされます。",
    value: "Coming Soon",
    upcoming: true,
  },
]

export function Bonuses() {
  return (
    <section className="relative py-36 px-6 overflow-hidden bg-gradient-to-b from-[var(--navy)] via-[var(--navy)] to-[var(--navy-dark)]">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--accent-color)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500 opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-label justify-center mb-4 text-[var(--accent-color)]">SPECIAL BONUSES</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight text-white mb-5">
            【豪華5大特典】<br className="sm:hidden" />
            <span className="text-gradient-gold-bright">実務の武器</span>をそのまま配布
          </h2>
          <p className="text-base text-white/60 leading-relaxed max-w-lg mx-auto">
            コース本体に加え、即戦力になる豪華な特典をすべてプレゼント。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonuses.map((bonus, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div
                className={`h-full rounded-2xl p-7 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                  bonus.upcoming
                    ? "opacity-50 glass-card-dark"
                    : "glass-card-dark hover:border-[var(--accent-color)]/20"
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${bonus.upcoming ? "text-white/25" : "text-[var(--accent-color)]"}`}>
                    {bonus.num}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    bonus.upcoming
                      ? "border border-white/10 text-white/25 bg-white/5"
                      : "border border-[var(--accent-color)]/30 text-[var(--accent-color)] bg-[var(--accent-color)]/10"
                  }`}>
                    {bonus.value}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold mb-3 text-white leading-snug">{bonus.title}</h3>
                <p className="text-sm leading-relaxed mt-auto text-white/55">{bonus.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Total value */}
        <FadeIn delay={500} className="mt-12">
          <div className="rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 glass-card-dark border-[var(--accent-color)]/15">
            <div>
              <p className="text-xs font-bold text-[var(--accent-color)] tracking-wider uppercase mb-1">特典の総額</p>
              <p className="text-4xl font-black text-white number-display">¥38,200<span className="text-lg font-medium text-white/50">相当</span></p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-base text-white/70">すべてのコース購入者に</p>
              <p className="text-lg font-black text-gradient-gold-bright">無料でプレゼント</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
