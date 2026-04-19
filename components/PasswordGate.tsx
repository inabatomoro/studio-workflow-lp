"use client"

import { useState, useEffect } from "react"

const PASSWORD = "sw2025" // ← パスワードはここを変更
const SESSION_KEY = "sw_auth"

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setAuthenticated(true)
    }
  }, [])

  if (!mounted) return null
  if (authenticated) return <>{children}</>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1")
      setAuthenticated(true)
    } else {
      setError(true)
      setInput("")
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B1120]">
      <div className="w-full max-w-sm px-6">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-3xl blur-2xl" />
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center mb-8">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-3">STUDIO WORKFLOW</p>
              <h1 className="text-xl font-black text-white">プレビュー</h1>
              <p className="text-sm text-white/40 mt-1">パスワードを入力してください</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={input}
                onChange={(e) => { setInput(e.target.value); setError(false) }}
                placeholder="パスワード"
                autoFocus
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-[#D4AF37]/50 transition-colors"
              />
              {error && (
                <p className="text-red-400 text-xs text-center">パスワードが正しくありません</p>
              )}
              <button
                type="submit"
                className="w-full py-3 text-sm font-black rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#FDE08B] text-[#0B1120] hover:opacity-90 transition-opacity"
              >
                入る →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
