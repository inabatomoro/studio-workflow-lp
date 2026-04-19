"use client"

import { useState } from "react"
import { FadeIn } from "./FadeIn"

const testimonials = [
  {
    role: "フリーランス Webデザイナー",
    text: "このコースを受講してから、初めて一人で案件を完遂できました。提案から納品まで、迷う場面がほとんどなかったです。",
  },
  {
    role: "副業クリエイター",
    text: "Studioの操作は知っていたけど、案件の進め方がわからなかった。このコースのおかげで3ヶ月でリピート案件をもらえました。",
  },
  {
    role: "デザインスクール卒業生",
    text: "クライアントとのやり取りが一番不安でしたが、実際のヒアリングシートや運用マニュアルがあって本当に助かりました。",
  },
  {
    role: "会社員・副業デザイナー",
    text: "ヒアリングの進め方や見積書の出し方まで教えてもらえるとは思っていなかった。実務に直結していて即使えました。",
  },
  {
    role: "フリーランス志望",
    text: "受講前は何から始めればいいか全くわからなかったのに、今では自信を持って案件を進められるようになりました。",
  },
  {
    role: "Webデザイン独学中",
    text: "Studioの解説動画はたくさんあるけど、ここまでクライアントワーク込みで教えてくれるのはここだけだと思います。",
  },
  {
    role: "グラフィックデザイナー",
    text: "グラフィックは得意だったけどWeb案件の流れが掴めていなかった。このコースで一気に解像度が上がりました。",
  },
  {
    role: "フリーランス2年目",
    text: "納品後のマニュアル作成まで教えてもらえて、クライアントへの信頼度が格段に上がった気がします。リピート率も上がりました。",
  },
  {
    role: "育休中のデザイナー",
    text: "子育ての合間でも進められるボリューム感で助かりました。メルマガの伴走もあって挫折せずに最後まで終わらせられました。",
  },
  {
    role: "エンジニア兼デザイナー",
    text: "コードは書けるのにデザインの案件フローがわからなかった。受講後はStudio案件を自信を持って受けられるようになりました。",
  },
]

// メイン動画ID — 実際のYouTube動画IDに差し替えてください
const MAIN_VIDEO_ID = "dQw4w9WgXcQ"

const VISIBLE = 3

export function SocialProof() {
  const [index, setIndex] = useState(0)
  const maxIndex = testimonials.length - VISIBLE

  const prev = () => setIndex((i) => Math.max(i - 1, 0))
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex))

  const visible = testimonials.slice(index, index + VISIBLE)

  return (
    <section className="section-warm bg-pattern-waves pt-20 pb-36 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent-color)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-label justify-center mb-4">SOCIAL PROOF</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-5">
            コミュニティの<span className="text-gradient-gold">実績</span>
          </h2>
          <p className="text-base text-[var(--text-body)] max-w-lg mx-auto leading-relaxed">
            これまでの受講生たちは多くの成果を出してきました！
          </p>
        </FadeIn>

        {/* Testimonials carousel */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visible.map((t, i) => (
              <div key={index + i} className="glass-lift p-7 flex flex-col gap-4 h-full">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="var(--accent-on-light)">
                      <path d="M7 1l1.5 3.1L12 4.6l-2.5 2.4.6 3.4L7 8.9l-3.1 1.5.6-3.4L2 4.6l3.5-.5L7 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 text-[var(--text-body)]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-[var(--border)]/50">
                  <span className="inline-block text-xs font-semibold text-[var(--text-muted)] bg-[var(--surface-gray)] px-3 py-1 rounded-full">
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="前へ"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === index
                    ? "w-6 bg-[var(--accent-color)]"
                    : "w-2 bg-[var(--border)]"
                    }`}
                  aria-label={`${i + 1}ページ目`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={index === maxIndex}
              className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="次へ"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* YouTube section */}
        <FadeIn delay={300}>
          {/* Main player */}
          <div className="rounded-2xl overflow-hidden aspect-video w-full shadow-xl">
            <iframe
              src={`https://www.youtube.com/embed/${MAIN_VIDEO_ID}`}
              title="受講生の声"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Channel link */}
          <div className="mt-4 text-right">
            <a
              href="https://www.youtube.com/@tom_studioworks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-colors duration-200 group"
            >
              その他の動画はこちら
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
