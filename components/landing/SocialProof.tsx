"use client"

import { FadeIn } from "./FadeIn"

const testimonials = [
  {
    name: "Yuki T.",
    role: "フリーランス Webデザイナー",
    text: "このコースを受講してから、初めて一人で案件を完遂できました。提案から納品まで、迷う場面がほとんどなかったです。",
    initials: "YT",
  },
  {
    name: "Shota M.",
    role: "副業クリエイター",
    text: "Studioの操作は知っていたけど、案件の進め方がわからなかった。このコースのおかげで3ヶ月でリピート案件をもらえました。",
    initials: "SM",
  },
  {
    name: "Haruka N.",
    role: "デザインスクール卒業生",
    text: "クライアントとのやり取りが一番不安でしたが、実際のヒアリングシートや運用マニュアルがあって本当に助かりました。",
    initials: "HN",
  },
]

const stats = [
  { value: "50本+", label: "レッスン数" },
  { value: "全5章", label: "チャプター" },
  { value: "2ヶ月", label: "伴走サポート" },
  { value: "限定20部", label: "第1ロット" },
]

export function SocialProof() {
  return (
    <section className="section-warm bg-pattern-waves pt-20 pb-36 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent-color)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-label justify-center mb-4">SOCIAL PROOF</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-5">
            コミュニティ<span className="text-gradient-gold">「Studio Workers」</span>の実績
          </h2>
          <p className="text-base text-[var(--text-body)] max-w-lg mx-auto leading-relaxed">
            受講生たちが実際に成果を出している状況を公開。<br className="hidden sm:block" />
            とむのメソッドが現場で通用する証明です。
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="glass-lift p-6 text-center group">
                <p className="text-3xl font-black number-display text-[var(--navy)] mb-1 group-hover:text-gradient-gold transition-colors duration-300">{s.value}</p>
                <p className="text-xs text-[var(--text-muted)] tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="glass-lift p-7 flex flex-col gap-4 h-full">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="var(--accent-on-light)">
                      <path d="M7 1l1.5 3.1L12 4.6l-2.5 2.4.6 3.4L7 8.9l-3.1 1.5.6-3.4L2 4.6l3.5-.5L7 1z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-relaxed flex-1 text-[var(--text-body)]">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]/50">
                  <div className="w-10 h-10 rounded-full bg-[var(--navy)] text-[var(--accent-color)] flex items-center justify-center text-xs font-black flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--text-heading)]">{t.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Community placeholder */}
        <FadeIn delay={400} className="mt-12">
          <div className="rounded-2xl p-10 text-center glass-card border-dashed border-[var(--border)]">
            <p className="text-sm text-[var(--text-muted)] font-medium mb-1">コミュニティの実績スクリーンショット</p>
            <p className="text-xs text-[var(--text-subtle)]">（近日公開予定）</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
