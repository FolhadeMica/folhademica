import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Folha de Mica - Desvende os Segredos da Terra",
  description: "Newsletter quinzenal sobre Geociências e Ciências da Terra do Instituto de Geociências da USP",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Brevo Form Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-display: block;
              font-family: Roboto;
              src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
            }

            @font-face {
              font-display: fallback;
              font-family: Roboto;
              font-weight: 600;
              src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
            }

            @font-face {
              font-display: fallback;
              font-family: Roboto;
              font-weight: 700;
              src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
            }

            #sib-container input:-ms-input-placeholder {
              text-align: left;
              font-family: Helvetica, sans-serif;
              color: #c0ccda;
            }

            #sib-container input::placeholder {
              text-align: left;
              font-family: Helvetica, sans-serif;
              color: #c0ccda;
            }

            #sib-container textarea::placeholder {
              text-align: left;
              font-family: Helvetica, sans-serif;
              color: #c0ccda;
            }

            #sib-container a {
              text-decoration: underline;
              color: #2BB2FC;
            }

            /* Custom styles to integrate with our design */
            .sib-form {
              background-color: transparent !important;
            }
            
            #sib-container {
              background-color: transparent !important;
              border: none !important;
              max-width: 100% !important;
            }
            
            .sib-form-block p {
              display: none !important;
            }
            
            #sib-form .input {
              background-color: rgba(255,255,255,0.9) !important;
              border: none !important;
              padding: 12px 16px !important;
              border-radius: 8px !important;
              font-size: 16px !important;
              width: 100% !important;
            }
            
            #sib-form .sib-form-block__button {
              background-color: #7a8471 !important;
              color: white !important;
              border: none !important;
              padding: 12px 32px !important;
              border-radius: 24px !important;
              font-size: 16px !important;
              font-weight: 600 !important;
              cursor: pointer !important;
              transition: background-color 0.3s ease !important;
            }
            
            #sib-form .sib-form-block__button:hover {
              background-color: #6a7461 !important;
            }
            
            .entry__label {
              display: none !important;
            }
            
            .entry__specification {
              display: none !important;
            }
            
            .sib-form-message-panel {
              margin: 10px 0 !important;
              padding: 12px !important;
              border-radius: 8px !important;
              font-size: 14px !important;
            }
          `,
          }}
        />
        <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Brevo Form Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
            window.LOCALE = 'en';
            window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Hum... é melhor revisar o seu e-mail :/";
            window.REQUIRED_ERROR_MESSAGE = "Este campo não pode ser deixado em branco :´( ";
            window.GENERIC_INVALID_MESSAGE = "Hum... é melhor revisar o seu e-mail :/";
            window.translation = {
              common: {
                selectedList: '{quantity} list selected',
                selectedLists: '{quantity} lists selected',
                selectedOption: '{quantity} selected',
                selectedOptions: '{quantity} selected',
              }
            };
            var AUTOHIDE = Boolean(1);
          `,
          }}
        />
        <script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
      </body>
    </html>
  )
}
