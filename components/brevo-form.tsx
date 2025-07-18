// Conteúdo completo para: components/brevo-form.tsx

'use client'

export function BrevoForm() {
  return (
    <div className="sib-form" style={{ width: "100%" }}>
      <div id="sib-form-container" className="sib-form-container">
        <div
          id="error-message"
          className="sib-form-message-panel"
          style={{
            fontSize: "14px",
            textAlign: "center",
            fontFamily: "Helvetica, sans-serif",
            color: "#661d1d",
            backgroundColor: "#ffeded",
            borderRadius: "8px",
            padding: "8px",
            marginBottom: "10px",
            display: "none",
          }}
        >
          <span>Sua inscrição não deu certo, tente novamente :(</span>
        </div>
        <div
          id="success-message"
          className="sib-form-message-panel"
          style={{
            fontSize: "14px",
            textAlign: "center",
            fontFamily: "Helvetica, sans-serif",
            color: "#085229",
            backgroundColor: "#e7faf0",
            borderRadius: "8px",
            padding: "8px",
            marginBottom: "10px",
            display: "none",
          }}
        >
          <span>Ebaaa! Sua assinatura deu certo! :)</span>
        </div>
        <form
          id="sib-form"
          method="POST"
          action="https://9b641c02.sibforms.com/serve/MUIFADr_t1iW_y9RWySqAp2bodfj_F5koOrzTznngVIacLsarekSGQzoLsgUBoDtbRSllnJ2WSS011VtH0_KbUflOEKahV_MoJRgdY7cFAYjQ3MAHs8itdhbsg9U1JfDsyAWP2kNvDCnxFeSmMZL_2QSUV4ZKHxz0hzxoTfeIV0CaBEi_tBvPjkIw1kF_zsU6fEs0guM1Cdrf2dL"
          data-type="subscription"
          className="flex flex-col sm:flex-row items-center gap-4 w-full"
        >
          <input
            type="text"
            id="EMAIL"
            name="EMAIL"
            placeholder="SEU MELHOR EMAIL"
            required
            className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/90 text-black placeholder:text-gray-600 border-none focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#7a8471] hover:bg-[#6a7461] text-white px-8 py-3 rounded-full transition-colors cursor-pointer"
          >
            Assinar
          </button>
          <input type="text" name="email_address_check" defaultValue="" readOnly style={{ display: "none" }} />
          <input type="hidden" name="locale" value="en" />
        </form>
      </div>
    </div>
  )
}