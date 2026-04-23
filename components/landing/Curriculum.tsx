"use client"

import { useState } from "react"
import { FadeIn } from "./FadeIn"

const chapters = [
  {
    num: "Chapter 1",
    title: "はじめに",
    lessons: 3,
    items: [
      "本講座で学べること / 目指すべきゴール",
      "講座の全体像",
      "本講座の使い方",
    ],
  },
  {
    num: "Chapter 2",
    title: "案件受注〜ヒアリング",
    lessons: 4,
    items: [
      "受注したらまずやること",
      "ヒアリング前に準備しておくこと",
      "必ず聞いておきたいヒアリング項目一覧",
      "プロジェクトの作成と管理",
    ],
  },
  {
    num: "Chapter 3",
    title: "情報設計・デザイン",
    lessons: 7,
    items: [
      "サイトのページ構成とワイヤーフレーム",
      "Figmaデータの基本的な作成方法",
      "クライアントの満足度を上げるデザイン制作フロー",
      "Figmaでやっておくべき「実装しやすい設計」",
      "サイト規模に合わせた簡略化制作ステップ",
    ],
  },
  {
    num: "Chapter 4",
    title: "Studio実装",
    lessons: 32,
    items: [
      "Figma to Studioで実装する",
      "スタイルの登録（カラー / テキスト）・単位の使い分け",
      "コンポーネント設計（ヘッダー・フッター）",
      "レスポンシブ・ブレイクポイント設定",
      "CMS・フォーム・アニメーション実装",
    ],
  },
  {
    num: "Chapter 5",
    title: "公開準備〜納品",
    lessons: 5,
    items: [
      "StudioでできるSEO対策",
      "独自ドメイン接続方法",
      "公開直前の最終チェック項目",
      "Studioでの「納品」の定義",
      "更新・運用マニュアルの作成",
    ],
  },
]

export function Curriculum() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="curriculum" className="section-white pt-20 pb-36 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-color)] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-label justify-center mb-4">CURRICULUM</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-5">
            全5章・<span className="text-gradient-gold">50本以上</span>の動画講義
          </h2>
          <p className="text-base text-[var(--text-body)] leading-relaxed max-w-lg mx-auto">
            受注後からデザイン、実装、納品まで。実務フローを完全網羅した体系的カリキュラム。
          </p>
        </FadeIn>

        <div className="space-y-3">
          {chapters.map((ch, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                className="rounded-2xl overflow-hidden glass-lift"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300"
                  style={{
                    background: open === i ? "rgba(212, 175, 55, 0.04)" : "transparent",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex-shrink-0 bg-[var(--navy)] text-[var(--accent-color)]">
                      {ch.num}
                    </span>
                    <span className="text-base font-semibold text-[var(--text-heading)]">
                      {ch.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                    <span className="text-xs hidden sm:block text-[var(--text-muted)] font-medium">
                      {ch.lessons}本
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[var(--surface-gray)] flex items-center justify-center">
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
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: open === i ? "400px" : "0",
                    opacity: open === i ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
                  }}
                >
                  <div className="px-6 pb-5 pt-2 border-t border-[var(--border)]/50">
                    <ul className="space-y-2.5">
                      {ch.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-[var(--text-body)]">
                          <span className="w-1 h-1 rounded-full bg-[var(--accent-on-light)] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400} className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-2xl border border-[var(--accent-color)]/40 text-[var(--accent-color)] hover:bg-[var(--accent-color)]/25 transition-all duration-200"
          >
            体験版はこちら →
          </a>
        </FadeIn>

      </div>
    </section>
  )
}
