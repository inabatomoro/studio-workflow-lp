// ===================================================
// ロット切り替え時はここだけ編集すればOK
// ===================================================

export const SALE_CONFIG = {
  // ロット情報
  lot: "初回限定",       // ← ロット切り替え時にここを更新
  limitedCount: 20,      // ← ロット切り替え時にここを更新
  status: "受付中",

  // 価格
  originalPrice: 29800,
  salePrice: 9980,     // ← ロット切り替え時にここを更新

  // 決済リンク（Stripeなど）
  checkoutUrl: "https://",  // https://buy.stripe.com/28E00k5ZM9un7yh8T0fnO0d　← ロット切り替え時にここを更新

  // バッジ下部テキスト
  priceNote: "税込・買い切り",
} as const

export const DISCOUNT_PERCENT = Math.round(
  (1 - SALE_CONFIG.salePrice / SALE_CONFIG.originalPrice) * 100
)
