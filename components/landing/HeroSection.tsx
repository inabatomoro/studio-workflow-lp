"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { SALE_CONFIG, DISCOUNT_PERCENT } from "@/lib/sale-config"

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 18, stiffness: 300 } as any }
}

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.035 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" } as any
  })
}

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const timer = setTimeout(() => {
      el.classList.add("opacity-100", "translate-y-0")
      el.classList.remove("opacity-0", "translate-y-8")
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Spotlight className="relative overflow-hidden bg-[#0B1120]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh-hero opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)" }} />

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-80" />
      {/* Large glowing orb behind the text */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--accent-color)] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-10 pb-20 md:pt-14 md:pb-28">
        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="relative group cursor-default">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/40 via-[#FDE08B]/20 to-[#D4AF37]/40 rounded-full blur-md opacity-70 animate-pulse" />
            <span className="relative inline-flex items-center gap-2 sm:gap-3 bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-black tracking-normal sm:tracking-wider uppercase text-[var(--accent-color)] shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              {/* Ping dot */}
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-400" />
              </span>
              <span>限定{SALE_CONFIG.limitedCount}部 🔥</span>
              <span className="w-px h-4 bg-[#D4AF37]/40" />
              <span>{SALE_CONFIG.lot}{SALE_CONFIG.status}</span>
              <span className="w-px h-4 bg-[#D4AF37]/40" />
              <span className="text-red-400 font-black">数量限定</span>
            </span>
          </div>
        </motion.div>

        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          {/* Left: Copy */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={fadeUp} custom={0} initial="hidden" animate="visible"
              className="text-[var(--accent-color)] font-bold text-sm tracking-widest uppercase mb-5 flex justify-center lg:justify-start"
            >
              PREMIUM VIDEO COURSE
            </motion.p>

            <motion.h1
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
              className="text-[4.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-black leading-[0.92] mb-6 flex flex-col justify-center lg:justify-start font-display tracking-tight"
              style={{ perspective: "800px" }}
            >
              {/* "Studio" — white with subtle glow */}
              <span className="whitespace-nowrap inline-flex">
                {"Studio".split("").map((char, index) => (
                  <motion.span
                    key={"Studio" + char + index}
                    variants={letterVariants}
                    className="text-white inline-block drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              {/* "Workflow" — gold gradient + glow */}
              <span className="whitespace-nowrap inline-flex">
                {"Workflow".split("").map((char, index) => (
                  <motion.span
                    key={"Workflow" + char + index}
                    variants={letterVariants}
                    className="inline-block drop-shadow-[0_0_50px_rgba(212,175,55,0.5)]"
                    style={{
                      background: "linear-gradient(135deg, #D4AF37 0%, #FDE08B 45%, #D4AF37 75%, #FFF0A0 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={0.3} initial="hidden" animate="visible"
              className="text-xl md:text-3xl lg:text-4xl font-black text-white leading-snug mb-4 tracking-tight"
            >
              案件受注後から納品まで
            </motion.p>
            <motion.p
              variants={fadeUp} custom={0.4} initial="hidden" animate="visible"
              className="text-sm md:text-base text-white/55 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              クライアントワークの全工程を、この<span className="text-[var(--accent-color)]/80 font-semibold">1本で完全マスター</span>。
              ヒアリング術からStudio実装、納品マニュアルまで。
              実務に直結する全5章・50本以上の動画講義。
            </motion.p>

            {/* Price block — Dark Glassmorphism */}
            <motion.div
              variants={fadeUp} custom={0.5} initial="hidden" animate="visible"
              className="inline-flex flex-col items-center lg:items-start gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-7 py-5 mb-8 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-color)]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="text-white/50 text-sm line-through">通常価格 {SALE_CONFIG.originalPrice.toLocaleString()}円</span>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black number-display text-white drop-shadow-md">
                  {SALE_CONFIG.salePrice.toLocaleString()}<span className="text-lg font-bold text-[var(--accent-color)]">円</span>
                </span>
                <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2.5 py-1 rounded-full border border-red-500/30">
                  {DISCOUNT_PERCENT}% OFF
                </span>
              </div>
              <span className="text-white/50 text-xs tracking-wide">{SALE_CONFIG.lot}限定価格 · {SALE_CONFIG.priceNote}</span>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={0.6} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start"
            >
              <MagneticButton>
                <a href="#pricing" className="btn-glint relative group inline-flex items-center gap-2 text-center px-10 py-4 text-base font-bold rounded-2xl text-black shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-shadow duration-300">
                  <span className="relative z-10">今すぐ申し込む →</span>
                  <span className="relative z-10 bg-red-500/25 text-red-600 text-[10px] font-black px-2 py-0.5 rounded-full border border-red-500/30 whitespace-nowrap">{DISCOUNT_PERCENT}% OFF</span>
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#curriculum"
                  className="inline-block text-center px-8 py-4 text-base font-semibold rounded-2xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  カリキュラムを見る
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: Course Dashboard Mockup */}
          <motion.div
            variants={fadeUp} custom={0.4} initial="hidden" animate="visible"
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            {/* Outer glow */}
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-[var(--accent-color)]/20 via-transparent to-[var(--accent-color)]/10 rounded-3xl blur-2xl" />

              {/* Dashboard card */}
              <div
                className="relative rounded-2xl overflow-hidden border border-white/10"
                style={{ background: "rgba(15,23,42,0.95)", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
              >
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="flex-1 mx-3 h-5 rounded bg-white/5 flex items-center px-3">
                    <span className="text-[9px] text-white/30 font-mono">studio-workflow.course</span>
                  </div>
                </div>

                {/* Video area */}
                {videoOpen ? (
                  <div style={{ position: "relative", paddingTop: "56.25%" }}>
                    <iframe
                      src="https://customer-qc9si28s3z8smza1.cloudflarestream.com/33e4d1352f2282feefb8f7bc3fe99cc8/iframe?poster=https%3A%2F%2Fcustomer-qc9si28s3z8smza1.cloudflarestream.com%2F33e4d1352f2282feefb8f7bc3fe99cc8%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true"
                      loading="lazy"
                      style={{ border: "none", position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative bg-gradient-to-br from-[var(--navy)] to-[#060a14] aspect-video flex items-center justify-center group cursor-pointer" onClick={() => setVideoOpen(true)}>
                    <div className="absolute inset-0 opacity-20"
                      style={{ backgroundImage: "linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                    <div className="absolute top-3 left-3 bg-[var(--accent-color)]/15 border border-[var(--accent-color)]/25 rounded-md px-2 py-1">
                      <span className="text-[9px] font-bold text-[var(--accent-color)] tracking-widest uppercase">Chapter 1 · 講座の全体像</span>
                    </div>
                    <div className="w-16 h-16 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:border-[var(--accent-color)]/60 group-hover:bg-[var(--accent-color)]/15 transition-all duration-400 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 rounded px-2 py-0.5">
                      <span className="text-[10px] text-white/70 font-mono">12:34</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
                      <div className="h-full bg-[var(--accent-color)] w-[35%]" />
                    </div>
                  </div>
                )}

                {/* Chapter list */}
                <div className="p-4 space-y-1.5">
                  {[
                    { ch: "01", title: "はじめに", done: true, lessons: 3 },
                    { ch: "02", title: "案件受注〜ヒアリング", done: true, lessons: 4 },
                    { ch: "03", title: "情報設計・デザイン", active: true, lessons: 7 },
                    { ch: "04", title: "Studio実装", lessons: 32 },
                    { ch: "05", title: "公開準備〜納品", lessons: 5 },
                  ].map((item) => (
                    <div
                      key={item.ch}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${item.active
                          ? "bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20"
                          : "hover:bg-white/4"
                        }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] font-black ${item.done
                          ? "bg-[var(--accent-color)]/20 text-[var(--accent-color)]"
                          : item.active
                            ? "bg-[var(--accent-color)] text-[var(--navy)]"
                            : "bg-white/8 text-white/30"
                        }`}>
                        {item.done ? "✓" : item.ch}
                      </div>
                      <span className={`text-xs flex-1 ${item.active ? "text-white font-semibold" : item.done ? "text-white/50 line-through" : "text-white/40"
                        }`}>
                        {item.title}
                      </span>
                      <span className="text-[9px] text-white/25">{item.lessons}本</span>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] text-white/30 uppercase tracking-wider">進捗</span>
                    <span className="text-[9px] text-[var(--accent-color)] font-bold">40%</span>
                  </div>
                  <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-gradient-to-r from-[var(--accent-color)] to-[#e8d066] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          variants={fadeUp} custom={0.8} initial="hidden" animate="visible"
          className="mt-16 pt-10"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🎬", num: "50本+", label: "動画講義" },
              { icon: "📩", num: "メルマガ", label: "伴走配信" },
              { icon: "💬", num: "コミュニティ", label: "質問サポート" },
              { icon: "🤖", num: "専用AI", label: "定着・壁打ちBOT" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center bg-white/5 border border-white/10 rounded-2xl py-5 px-3 hover:border-[var(--accent-color)]/30 transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-2xl md:text-3xl font-black number-display text-[var(--accent-color)] drop-shadow-md leading-none">{item.num}</span>
                <span className="text-xs text-white/50 tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </Spotlight>
  )
}
