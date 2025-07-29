// components/hero-section.tsx
'use client'; // ESSENCIAL: Este componente é interativo

import Link from 'next/link';
// import Script from 'next/script'; // Não é necessário para um botão simples

export function HeroSection() {
  // URL do seu formulário Brevo (se você quiser redirecionar para ele)
  // Este input e botão não enviam dados diretamente sem um backend.
  // Eles servem mais como um placeholder visual ou para coletar o email antes de redirecionar para o Brevo.
  const brevoFormUrl = "https://9b641c02.sibforms.com/serve/MUIFAC9mMHEYxJ04fuELi6bEB4v-KSRhaLDq-8ejSVuHk9daqpX_IO9WTBP5xvaluHsnnB1m8B0g9KnTMeZAITRjjfXvR_k4o7AGFxLxoFdDzS_BpKC15_SRAkcd6qjLy3eqWa6UasCQZznO2gLLjQda6NbBPVb4QColhjcwWYY9kEKsZ6BHytWGpHjDI7V5O9bsymASYiB0igXF";

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

        {/* Formulário original com input e botão (redireciona para o Brevo) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input 
            type="email" 
            placeholder="SEU MELHOR EMAIL" 
            className="p-3 rounded-full bg-white/90 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 w-full max-w-sm" 
            // Este input não envia dados diretamente sem um backend.
            // Ele serve mais como um placeholder visual ou para coletar o email antes de redirecionar.
          />
          <Link 
            href={brevoFormUrl} // Link para o formulário Brevo completo
            target="_blank" // Abre em uma nova aba
            rel="noopener noreferrer" // Recomendado para segurança
            className="bg-[#7a8471] hover:bg-[#6c746c] text-white px-6 py-3 rounded-full transition-colors font-semibold"
          >
            Assinar
          </Link>
        </div>

      </div>
    </section>
  );
}
