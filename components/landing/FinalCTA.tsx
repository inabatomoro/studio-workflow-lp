"use client"

import { FadeIn } from "./FadeIn"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { SALE_CONFIG } from "@/lib/sale-config"

export function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-36 px-6 overflow-hidden bg-gradient-to-b from-[var(--navy)] via-[var(--navy)] to-[var(--navy-dark)]">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent-color)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 120%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="section-label justify-center mb-6 text-[var(--accent-color)]">FINAL MESSAGE</p>

          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-10 text-white">
            昔の自分と同じように<br />
            <span className="text-gradient-gold-bright">悩むあなたへ。</span>
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="glass-card-dark rounded-2xl px-8 py-8 mb-12 text-left">
            <p className="text-base md:text-lg leading-[1.9] text-white/70 mb-4">
              僕自身、Studioを立ち上げたばかりのころは身近に相談できる人も少なく、一番欲しかった<span className="text-white font-semibold">「制作会社の現場で使われている、リアルな実務の手法」</span>はどこにも載っていませんでした。
            </p>
            <p className="text-base md:text-lg leading-[1.9] text-white/70">
              だからこそ、過去の自分のように悩んでいる方に向けて、実働で役立つ情報をすべてこのコンテンツに詰め込みました。
            </p>
            <p className="text-base md:text-lg leading-[1.9] text-white font-semibold mt-4">
              皆さんのスキルアップが「クライアントからの信頼」と「リピート案件」に直結する、最高のロードマップになれば嬉しいです。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="relative group max-w-md mx-auto mb-10">
            {/* Glow */}
            <div className="absolute -inset-3 bg-gradient-to-b from-[var(--accent-color)]/30 to-transparent rounded-3xl blur-2xl opacity-70 animate-pulse" />
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[var(--accent-color)]/50 via-[var(--accent-color)]/20 to-transparent rounded-3xl" />

            <div className="relative glass-card-dark rounded-3xl px-5 sm:px-8 py-8 flex flex-col items-stretch gap-6 border border-[var(--accent-color)]/15">
              {/* Lot badge */}
              <span className="self-center inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--accent-color)]/25">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent-color)]" />
                </span>
                {SALE_CONFIG.lot} · 限定{SALE_CONFIG.limitedCount}部
              </span>

              {/* Price */}
              <div className="flex flex-col items-center gap-1 self-center">
                <p className="text-sm text-white/40 tracking-wide">
                  通常価格 <span className="line-through">{SALE_CONFIG.originalPrice.toLocaleString()}円</span>
                </p>
                <p className="text-5xl sm:text-7xl font-black text-white number-display leading-none">
                  {SALE_CONFIG.salePrice.toLocaleString()}<span className="text-2xl font-bold text-gradient-gold-bright">円</span>
                </p>
                <p className="text-xs text-white/35 tracking-wider mt-1">{SALE_CONFIG.priceNote}</p>
              </div>

              {/* CTA Button */}
              <MagneticButton className="w-full flex">
                <a
                  href={SALE_CONFIG.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-5 text-lg font-black rounded-2xl bg-gradient-to-r from-[var(--accent-color)] to-[#e8d066] text-[var(--navy)] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-300"
                >
                  今すぐ申し込む →
                </a>
              </MagneticButton>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <p className="mt-16 text-sm text-white/25 tracking-wide">
            Studio Workflow &copy; {new Date().getFullYear()}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
