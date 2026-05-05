"use client"

import { useState } from "react"
import { FadeIn } from "./FadeIn"

// ↓↓ 感想が増えたらここに追加するだけでOK ↓↓
const voices: string[] = [
  "初心者すぎますが、動画がすごく参考になっています！",
  `第3章 4-7まで完了です🔥
スタイル登録の際、階層してなかったのでこれから使います！`,
  `第2章まで見ました☺️
わかりやすくて本当に
実務向きだな〜と感じてます🥺♡`,
  `GW明けから頑張ろうかと思いましたが、みなさんに刺激され第2章まで進めました💪🏻🔥
とてもわかりやすいです🥺♡`,
  "見やすい動画たちでとてもありがたいです✨",
  `今日は、第3章の3まで進めました〜！
簡潔でわかりやすいです🥺`,
  `新生児ゆらゆらしながら、夜中に第1章視聴しました😍 ちっひーさんのお声とお話しのスピードがとても心地良くて聞きやすくてわかりやすいです🙈
みなさまの進捗からもパワーいただいてます！ありがとうございます🩷`,
  `簡潔で聞きやすくてわかりやすくて、進めやすいです❤️
ブレイクポイントの説明のところで、自身のStudioでのポートフォリオサイトを見直しながら設定のしなおしができました🥹`,
  "2章が特に知りたかった内容でした〜😭❤️‍🔥続きは明日！",
  `第２章までおわりました〜！！ちっひーさんの声がめちゃくちゃ聞き取りやすいです🥰
第３章は手も動かしつつ、じっくり進めていきます🔥`,
  "とりあえず一旦インプットをバーっとするタイプなので、第3章まで1周出来ました✨！一つ一つの動画が短くて簡潔なのでわかりやすくてありがたいです😭✨！",
  `特典スライド拝見しました☺️
ありがとうございます！めちゃくちゃわかりやすくまとめられてて見やすかったです🙏
今後ともよろしくお願いいたします！`,
  `特典は無料なのが考えられないくらいのボリューミーな内容で大感動です・・🥹 ✨
この特典で土台から整理しつつ、お仕事も安心して進められるように動画視聴も楽しんで頑張ります💪❤️‍🔥`,
  "ど忘れした時にサッと見れる長さなのありがたいです！！！",
  `第4章ハンバーガーメニューまで見ました☺️
動画がわかりやすく、Studio との距離がグッと縮まりそうです🤝
自力で出来るようになるまで、インプットとアウトプットを繰り返します🔥`,
  `4章まで見終わりました～‼
けど、3章の内容を理解するのに、もう数回見る必要あり！`,
  `一旦全部みました💮
「へ〜！！！なるほど！😮」ポイント多くて楽しすぎです🥳🥳`,
]

const INITIAL_VISIBLE = 6

export function StudentVoices() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? voices : voices.slice(0, INITIAL_VISIBLE)
  const hasMore = voices.length > INITIAL_VISIBLE

  return (
    <section className="section-warm bg-pattern-dots pt-24 pb-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-color)]/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[var(--accent-color)] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn className="text-center mb-14">
          <p className="section-label justify-center mb-4">STUDENT VOICES</p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black leading-tight mb-5">
            受講メンバーの<span className="text-gradient-gold">リアルな声</span>
          </h2>
          <p className="text-base text-[var(--text-body)] max-w-xl mx-auto leading-relaxed">
            受講メンバーから続々と感想が届いています。
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((text, i) => (
              <div key={i} className="glass-lift p-7 flex flex-col gap-4 h-full">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="12" height="12" viewBox="0 0 14 14" fill="var(--accent-on-light)">
                      <path d="M7 1l1.5 3.1L12 4.6l-2.5 2.4.6 3.4L7 8.9l-3.1 1.5.6-3.4L2 4.6l3.5-.5L7 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 text-[var(--text-body)] whitespace-pre-line">
                  &ldquo;{text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[var(--accent-color)]/40 bg-white/60 backdrop-blur-sm text-sm font-bold text-[var(--accent-on-light)] hover:bg-[var(--accent-color)]/10 hover:border-[var(--accent-color)]/60 transition-all duration-200 shadow-sm"
                aria-expanded={expanded}
              >
                {expanded ? (
                  <>
                    閉じる
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 9l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                ) : (
                  <>
                    もっと見る（あと{voices.length - INITIAL_VISIBLE}件）
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
