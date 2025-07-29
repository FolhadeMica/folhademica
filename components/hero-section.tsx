// components/hero-section.tsx
'use client'; // ESSENCIAL: Este componente é interativo

import Link from 'next/link';
// import Script from 'next/script'; // Removido: O iframe carrega seus próprios scripts

export function HeroSection() {
  return (
    <section 
      id="inicio" // Adicionado ID para a âncora de navegação
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url("/images/mountain-landscape.jpg")' }} // Use o caminho da sua imagem de fundo
    >
      {/* Overlay escuro para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Folha de Mica</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Ei, você, que ama a ciência! Quer descobrir as clivagens mais profundas do nosso planeta?
          Então, é só clicar no botão de assinar abaixo, que a Folha de Mica chega quinzenalmente,
          às sextas-feiras, no seu e-mail!
        </p>

        {/* // --- CÓDIGO DO SEU FORMULÁRIO BREVO EM IFRAME AQUI --- */}
        {/* // Este iframe substitui o HTML extenso do formulário Brevo. */}
        {/* // Ele não deve interferir com a estética do seu site. */}
        <iframe 
          width="540" 
          height="305" 
          src="https://9b641c02.sibforms.com/serve/MUIFAC9mMHEYxJ04fuELi6bEB4v-KSRhaLDq-8ejSVuHk9daqpX_IO9WTBP5xvaluHsnnB1m8B0g9KnTMeZAITRjjfXvR_k4o7AGFxLxoFdDzS_BpKC15_SRAkcd6qjLy3eqWa6UasCQZznO2gLLjQda6NbBPVb4QColhjcwWYY9kEKsZ6BHytWGpHjDI7V5O9bsymASYiB0igXF" 
          frameBorder="0" // Corrigido para 'frameBorder' em React
          scrolling="auto" 
          allowFullScreen // Corrigido para 'allowFullScreen' em React
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
        ></iframe>

      </div>
    </section>
  );
}
