"use client"

import { useState, useEffect } from "react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { SALE_CONFIG, DISCOUNT_PERCENT } from "@/lib/sale-config"

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [nearPricing, setNearPricing] = useState(false)

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 600)

      const pricing = document.getElementById("pricing")
      const finalCta = document.getElementById("final-cta")
      if (pricing) {
        const rect = pricing.getBoundingClientRect()
        const inRange = rect.top < window.innerHeight && rect.bottom > 0
        setNearPricing(inRange)
      }
      if (finalCta) {
        const rect = finalCta.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setNearPricing(true)
        }
      }
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const opacity = !visible ? 0 : nearPricing ? 0.25 : 1

  return (
    <div
      className="fixed bottom-4 left-1/2 z-50 transition-all duration-500 ease-out"
      style={{
        opacity,
        pointerEvents: visible && !nearPricing ? "auto" : "none",
        transform: `translateX(-50%) translateY(${visible ? "0" : "20px"})`,
      }}
    >
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-[var(--accent-color)]/40 via-[var(--accent-color)]/20 to-[var(--accent-color)]/40 rounded-3xl blur-xl opacity-60 animate-pulse" />
        <div className="absolute -inset-[1px] bg-gradient-to-r from-[var(--accent-color)]/60 via-[#FDE08B]/30 to-[var(--accent-color)]/60 rounded-2xl" />

        {/* モバイル：縦2段レイアウト */}
        <div className="relative glass-card-dark rounded-2xl px-5 py-4 flex flex-col gap-3 shadow-2xl border border-[var(--accent-color)]/20 min-w-[260px] sm:hidden">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-bold text-[var(--accent-color)] tracking-wider uppercase whitespace-nowrap">限定{SALE_CONFIG.limitedCount}部</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black number-display text-white">{SALE_CONFIG.salePrice.toLocaleString()}<span className="text-xs font-medium text-white/60">円</span></span>
              <span className="text-xs line-through text-white/30">{SALE_CONFIG.originalPrice.toLocaleString()}円</span>
            </div>
          </div>
          <MagneticButton className="w-full flex">
            <a href={SALE_CONFIG.checkoutUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-6 py-2.5 text-sm font-black rounded-xl bg-gradient-to-r from-[var(--accent-color)] to-[#e8d066] text-[var(--navy)] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all">
              今すぐ申し込む →
              <span className="bg-red-500/25 text-red-600 text-[9px] font-black px-1.5 py-0.5 rounded-full border border-red-500/30 whitespace-nowrap">{DISCOUNT_PERCENT}% OFF</span>
            </a>
          </MagneticButton>
        </div>

        {/* PC：横並びレイアウト */}
        <div className="relative glass-card-dark rounded-2xl px-5 py-3 hidden sm:flex items-center gap-4 shadow-2xl border border-[var(--accent-color)]/20">
          <div className="flex-shrink-0">
            <p className="text-[10px] font-bold text-[var(--accent-color)] tracking-wider uppercase mb-0.5">限定{SALE_CONFIG.limitedCount}部</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black number-display text-white">{SALE_CONFIG.salePrice.toLocaleString()}<span className="text-xs font-medium text-white/60">円</span></span>
              <span className="text-xs line-through text-white/30">{SALE_CONFIG.originalPrice.toLocaleString()}円</span>
            </div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <MagneticButton>
            <a href={SALE_CONFIG.checkoutUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 text-base font-black rounded-xl bg-gradient-to-r from-[var(--accent-color)] to-[#e8d066] text-[var(--navy)] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all">
              今すぐ申し込む →
              <span className="bg-red-500/25 text-red-600 text-[10px] font-black px-2 py-0.5 rounded-full border border-red-500/30 whitespace-nowrap">{DISCOUNT_PERCENT}% OFF</span>
            </a>
          </MagneticButton>
        </div>
      </div>
    </div>
  )
}
