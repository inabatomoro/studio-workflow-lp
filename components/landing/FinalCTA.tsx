"use client"

import { FadeIn } from "./FadeIn"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { SALE_CONFIG, DISCOUNT_PERCENT } from "@/lib/sale-config"

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
          <p className="section-label justify-center mb-6 text-[var(--accent-color)]">MESSAGE</p>

          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-10 text-white">
            私たちと同じように<br />
            <span className="text-gradient-gold-bright">悩むあなたへ。</span>
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="glass-card-dark rounded-2xl px-8 py-8 mb-12 text-left">
            <p className="text-base md:text-lg leading-[1.9] text-white/70 mb-4">
              私たちもWeb制作を始めたばかりのころは身近に相談できる人も少なく、一番欲しかった<span className="text-white font-semibold">「現場で使われている、リアルな手法」</span>を知ることはできませんでした。
            </p>
            <p className="text-base md:text-lg leading-[1.9] text-white/70">
              手探りの期間が長く、かなり遠回りした自覚がありますね。<br />だからこそ、過去の私たちのように悩んでいる方に向けて、実務で役立つ情報をお渡ししたいと思い、コンテンツに詰め込みました。
            </p>
            <p className="text-base md:text-lg leading-[1.9] text-white font-semibold mt-4">
              デザインや実装のハードスキルだけじゃない『案件進行の全体像』を学びましょう！<br />本講座は"クライアントからの信頼"を勝ち取るための足掛かりとして、活用いただけますと嬉しいです！
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="relative group mb-10">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-b from-[var(--accent-color)]/25 via-[var(--accent-color)]/10 to-transparent rounded-[2.5rem] blur-3xl opacity-80 animate-pulse" />
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[var(--accent-color)]/50 via-[var(--accent-color)]/20 to-transparent rounded-3xl" />

            <div className="relative glass-card-dark rounded-3xl px-6 sm:px-12 py-10 flex flex-col items-stretch gap-8 border border-[var(--accent-color)]/15">
              {/* Lot badge */}
              <span className="self-center inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--accent-color)]/25">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent-color)]" />
                </span>
                {SALE_CONFIG.lot} · 限定{SALE_CONFIG.limitedCount}部
              </span>

              {/* Price */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-white/40 tracking-wide">
                  通常価格 <span className="line-through">{SALE_CONFIG.originalPrice.toLocaleString()}円</span>
                </p>
                <div className="flex items-baseline gap-3">
                  <p className="text-6xl sm:text-8xl font-black text-white number-display leading-none">
                    {SALE_CONFIG.salePrice.toLocaleString()}<span className="text-3xl font-bold text-gradient-gold-bright">円</span>
                  </p>
                  <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2.5 py-1 rounded-full border border-red-500/30 whitespace-nowrap">{DISCOUNT_PERCENT}% OFF</span>
                </div>
                <p className="text-xs text-white/35 tracking-wider mt-1">{SALE_CONFIG.priceNote}</p>
              </div>

              {/* CTA Button */}
              <MagneticButton className="w-full flex">
                <a
                  href={SALE_CONFIG.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glint block w-full text-center py-6 text-xl font-black rounded-2xl text-[var(--navy)] shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:shadow-[0_0_70px_rgba(212,175,55,0.7)] hover:scale-[1.02] transition-shadow duration-300"
                >
                  今すぐ申し込む →
                </a>
              </MagneticButton>

              <p className="text-center text-xs text-white/30 -mt-3">
                <span className="text-[var(--accent-color)] font-bold">限定{SALE_CONFIG.limitedCount}部</span> · {SALE_CONFIG.lot}完売後は順次価格が上がります
              </p>
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
