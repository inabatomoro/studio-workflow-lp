"use client"

import { FadeIn } from "./FadeIn"

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""

const reviewImages: string[] = Array.from({ length: 36 }, (_, i) =>
  `/images/reviews/review-${String(i + 1).padStart(2, "0")}.png`
)

// 画像が未設定のときに表示するダミー枚数
const DUMMY_COUNT = 8

function ImageCard({ src, index }: { src?: string; index: number }) {
  return (
    <div className="flex-shrink-0 w-80 h-56 rounded-2xl overflow-hidden border border-white/10 bg-[#0f1929] flex items-center justify-center">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${BASE_PATH}${src}`}
          alt={`口コミ ${index + 1}`}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-white/20">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="text-xs font-mono">review-{String(index + 1).padStart(2, "0")}.png</span>
        </div>
      )}
    </div>
  )
}

export function LaunchBuzz() {
  const items = reviewImages.length > 0
    ? reviewImages.map((src, i) => ({ src, index: i }))
    : Array.from({ length: DUMMY_COUNT }, (_, i) => ({ src: undefined, index: i }))

  const half = Math.ceil(items.length / 2)
  const row1 = items.slice(0, half)
  const row2 = items.slice(half)

  return (
    <section className="relative bg-[#080e1a] overflow-hidden py-16 md:py-20">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        <FadeIn className="text-center mb-10">
          <div className="relative inline-flex mb-7">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/40 via-[#FDE08B]/30 to-red-500/40 rounded-full blur-md opacity-70 animate-pulse" />
            <span className="relative inline-flex items-center gap-2.5 bg-gradient-to-r from-red-500/20 via-[#D4AF37]/15 to-red-500/20 border border-[#D4AF37]/40 text-white text-sm md:text-base font-black px-5 md:px-7 py-2.5 md:py-3 rounded-full tracking-wide shadow-[0_0_30px_rgba(212,175,55,0.25)]">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-400" />
              </span>
              <span>リリース2日で</span>
              <span
                className="text-xl md:text-2xl number-display font-black drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]"
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #FDE08B 50%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >85部</span>
              <span>突破🔥</span>
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
            販売開始から
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #FDE08B 50%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >大反響</span>
            <br className="hidden sm:block" />
            <span className="text-white/90">続々と購入者の声が届いています</span>
          </h2>
          <p className="text-white/45 text-sm max-w-md mx-auto">
            ローンチ直後から口コミが広がっています
          </p>
        </FadeIn>

        {/* Metrics */}
        <FadeIn delay={100} className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: "⚡", value: "即時配布", label: "購入後すぐに視聴スタート" },
            { icon: "🎁", value: "限定特典", label: "充実した購入者限定特典" },
            { icon: "📣", value: "口コミ拡散中", label: "SNSで話題沸騰" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="text-base font-black text-[#D4AF37] leading-tight">{item.value}</div>
                <div className="text-xs text-white/45 mt-0.5">{item.label}</div>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>

      {/* Marquee rows */}
      <div className="relative space-y-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#080e1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#080e1a] to-transparent z-10 pointer-events-none" />

        {/* Row 1 — scrolls left */}
        <div className="flex gap-4 marquee-left">
          {[...row1, ...row1].map((item, i) => (
            <ImageCard key={i} src={item.src} index={item.index} />
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex gap-4 marquee-right">
          {[...row2, ...row2].map((item, i) => (
            <ImageCard key={i} src={item.src} index={item.index} />
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
