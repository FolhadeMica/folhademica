// Conteúdo CORRETO para: components/instagram-feed.tsx
'use client'

import Script from 'next/script' // 1. Importamos o componente Script

export function InstagramFeed() {
  return (
    <>
      {/* 2. Colocamos o HTML do widget diretamente aqui */}
      <div id="curator-feed-default-feed-layout">
        <a href="https://curator.io" target="_blank" className="crt-logo crt-tag" rel="noopener noreferrer">
          Powered by Curator.io
        </a>
      </div>

      {/* 3. E usamos o componente <Script> para carregar o JavaScript externo */}
      <Script
        src="https://cdn.curator.io/published/f6b727c1-bb6f-4b81-a4bd-c1779aeab4cd.js"
        strategy="afterInteractive" // Ótima estratégia para performance
      />
    </>
  )
}