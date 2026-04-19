"use client"

import { useState } from "react"
import { FadeIn } from "./FadeIn"

const faqs = [
  {
    q: "全くの初心者でも大丈夫ですか？",
    a: "はい。ただし、本講座では基本操作に特化した解説はあえて省き、実務に必要なコンテンツに特化しています。Studioの基本的な概念などは配布する特典スライドや公式YouTubeなどで学習してください。",
  },
  {
    q: "わからないところがあったら質問できますか？",
    a: "はい！講座には質問用コミュニティが付帯します。講師や同期のクリエイターに即座に質問可能です。また、講座の内容を学習させた知識定着のためのAIチャットボットもご用意しています。",
  },
  {
    q: "コミュニティは何ヶ月滞在できますか？",
    a: "無期限です。教材の学習はすぐに終えられると思うので、情報交換や仕事仲間を見つけるための「居場所」としてご活用ください。",
  },
  {
    q: "購入後、どのくらいの教材のアクセス期限はりますか？",
    a: "買い切りプランのため、一生涯アクセスできます。コンテンツの更新があった場合も追加費用なしで閲覧可能です。",
  },
  {
    q: "返金保証はありますか？",
    a: "デジタルコンテンツの性質上、原則として返金には対応しておりません。購入前にカリキュラムや特典の詳細をよくご確認ください。",
  },
  {
    q: "スマートフォンでも視聴できますか？",
    a: "はい、スマートフォン・タブレット・PCなど、あらゆるデバイスからブラウザで視聴可能です。",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-white pt-20 pb-36 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <FadeIn className="text-center mb-14">
          <p className="section-label justify-center mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight">
            よくある<span className="text-gradient-gold">質問</span>
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="rounded-2xl overflow-hidden glass-lift">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300 group"
                  style={{
                    background: open === i ? "rgba(212, 175, 55, 0.04)" : "transparent",
                  }}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="text-sm font-black text-[var(--accent-on-light)] flex-shrink-0">Q.</span>
                    <span className="text-base font-semibold text-[var(--text-heading)] group-hover:text-[var(--navy)] transition-colors">
                      {faq.q}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[var(--surface-gray)] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <path d="M3.5 5.25l3.5 3.5 3.5-3.5" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: open === i ? "300px" : "0",
                    opacity: open === i ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
                  }}
                >
                  <div className="px-6 pb-5 pt-1 border-t border-[var(--border)]/50">
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-black text-[var(--navy-light)] flex-shrink-0 mt-0.5">A.</span>
                      <p className="text-sm leading-relaxed text-[var(--text-body)]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
