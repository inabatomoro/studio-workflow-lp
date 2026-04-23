"use client"

import { FadeIn } from "./FadeIn"

const bonuses = [
  {
    num: "特典 01",
    title: "期限なし「質問し放題コミュニティ」",
    desc: "教材に関することであれば何でも質問OK。期限なし・永久無料で利用できる専用コミュニティへ招待します。",
    value: "永久利用可能",
    price: "¥36,000相当",
  },
  {
    num: "特典 02",
    title: "教材を壁打ちできる「Studio Workflow AI」",
    desc: "NotebookLMで作成した教材ベースのAIボット。学んだ内容の定着や疑問の壁打ちにそのまま使えます。",
    value: "専用AIボット",
    price: "¥10,000相当",
  },
  {
    num: "特典 03",
    title: "挫折をゼロにする「伴走型メルマガ」",
    desc: "買って終わりにさせない仕組み。学習の節目ごとに届くメルマガで、最後まで走りきれます。",
    value: "挫折回避",
    price: "¥10,000相当",
  },
  {
    num: "特典 04",
    title: "案件でそのまま使える「9つのテンプレート」",
    desc: "ヒアリングシート・見積書・納品マニュアルなど、実務で即使える各種テンプレートを9点セットで提供。",
    value: "9点セット",
    price: "¥10,000相当",
  },
  {
    num: "特典 05",
    title: "完全初学者向け「Studio基礎理解スライド」",
    desc: "ローンチ時のXポストを引用リポストしてくれた方に限定でプレゼント。Studioをゼロから始める完全初学者向けに、基本操作から丁寧に解説した100ページ超のスライドです。本編の理解に必要な前提知識を習得できます。",
    value: "引用リポスト限定",
    tag: "100ページ超",
    price: "¥10,000相当",
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
            【初回限定】<span className="text-gradient-gold-bright">豪華５大特典</span>
          </h2>
          <p className="text-base text-white/60 leading-relaxed max-w-lg mx-auto">
            講座本体に加え、即戦力になる豪華な特典をプレゼント。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bonuses.map((bonus, i) => (
            <FadeIn key={i} delay={i * 100} className={i === 4 ? "md:col-span-2 md:max-w-[calc(50%-10px)] md:mx-auto w-full" : ""}>
              <div className="h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 bg-white/[0.06] border border-white/15 hover:border-[var(--accent-color)]/40 backdrop-blur-sm">
                {/* 画像・動画エリア — src を差し替えてください */}
                <div className="w-full aspect-video bg-white/5 border-b border-white/10 flex items-center justify-center flex-shrink-0">
                  <p className="text-[11px] text-white/25 font-medium">画像 / 動画をここに配置</p>
                </div>

                <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black tracking-[0.15em] uppercase px-3 py-1.5 rounded-lg bg-[var(--accent-color)] text-[var(--navy)]">
                      {bonus.num}
                    </span>
                    {bonus.tag && (
                      <span className="text-[11px] font-black text-sky-300 drop-shadow-[0_0_6px_rgba(125,211,252,0.6)]">
                        {bonus.value}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    {/* value: bonus 05 は下に移動、それ以外は赤 */}
                    {!bonus.tag && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-[var(--accent-color)]/30 text-[var(--accent-color)] bg-[var(--accent-color)]/10">
                        {bonus.value}
                      </span>
                    )}
                    {bonus.tag && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-[var(--accent-color)]/30 text-[var(--accent-color)] bg-[var(--accent-color)]/10">
                        {bonus.tag}
                      </span>
                    )}
                    {bonus.price && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 text-white/40 bg-white/5">
                        {bonus.price}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-[15px] font-bold mb-3 text-white leading-snug">{bonus.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{bonus.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Total value */}
        <FadeIn delay={500} className="mt-12">
          <div className="rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.06] border border-white/15 backdrop-blur-sm">
            <div>
              <p className="text-xs font-bold text-[var(--accent-color)] tracking-wider uppercase mb-1">特典の総額</p>
              <p className="text-4xl font-black text-white number-display">¥76,000<span className="text-lg font-medium text-white/50">相当</span></p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-base text-white/70">すべての購入者に</p>
              <p className="text-lg font-black text-gradient-gold-bright">無料でプレゼント</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
