"use client"

import { FadeIn } from "./FadeIn"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { SALE_CONFIG, DISCOUNT_PERCENT } from "@/lib/sale-config"

const includes = [
  "全5章・50本以上の動画講義（一生涯アクセス）",
  "質問し放題コミュニティ（期限なし・永久無料）",
  "Studio Workflow AI（専用AI Bot）",
  "伴走型メルマガ（買い切り後も継続）",
  "案件でそのまま使える9つのテンプレート",
  "Studio基礎スライド（100ページ超）",
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-36 px-6 overflow-hidden bg-gradient-to-b from-[#080d1a] via-[var(--navy)] to-[#080d1a]">
      {/* Background ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--accent-color)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600 opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        <FadeIn className="text-center mb-14">
          <p className="section-label justify-center mb-4">PRICING</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-white leading-tight">
            {SALE_CONFIG.lot}<span className="text-gradient-gold-bright">特別価格</span>
          </h2>
        </FadeIn>

        {/* Pricing Card */}
        <FadeIn>
          <div className="relative group">
            {/* Animated border glow */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[var(--accent-color)]/40 via-transparent to-[var(--accent-color)]/20 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-2 rounded-3xl bg-[var(--accent-color)]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow" />

            <div className="relative glass-card-dark rounded-3xl p-8 md:p-12">
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--accent-color)]/25">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent-color)]" />
                  </span>
                  限定{SALE_CONFIG.limitedCount}部のみ · {DISCOUNT_PERCENT}% OFF
                </span>
              </div>

              {/* Price */}
              <div className="text-center mb-10">
                <p className="text-sm text-white/40 mb-2">
                  通常価格 <span className="line-through">{SALE_CONFIG.originalPrice.toLocaleString()}円</span>
                </p>
                <p className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-none tracking-tight number-display">
                  {SALE_CONFIG.salePrice.toLocaleString()}<span className="text-3xl font-bold text-gradient-gold-bright">円</span>
                </p>
                <p className="text-sm text-white/45 mt-4 tracking-wide">
                  税込 · 買い切り · 一生涯アクセス
                </p>
              </div>

              <div className="divider-fade mb-8 opacity-20" />

              <ul className="space-y-4 mb-10">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[var(--accent-color)]/15 text-[var(--accent-color)] flex items-center justify-center flex-shrink-0 text-[10px] font-bold ring-1 ring-[var(--accent-color)]/30">
                      ✓
                    </span>
                    <span className="text-white/85 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton className="w-full">
                <a href={SALE_CONFIG.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn-glint block text-center w-full py-5 text-lg font-black rounded-2xl text-[var(--navy)] shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-shadow duration-500">
                  今すぐ申し込む — {SALE_CONFIG.salePrice.toLocaleString()}円
                </a>
              </MagneticButton>

              <p className="text-center text-xs text-white/40 mt-6 tracking-wide">
                <span className="font-bold text-[var(--accent-color)]">限定{SALE_CONFIG.limitedCount}部</span> · {SALE_CONFIG.lot}完売後は順次価格が上がります
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
