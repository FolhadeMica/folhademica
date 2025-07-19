'use client'; 

import Link from 'next/link'; 
import Image from 'next/image'; 

export function Header() {
  return (
    <header className="bg-[#5B6D5B] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Seu logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image src="/images/mica-transparente.png" alt="Folha De Mica Logo" width={160} height={48} className="h-[48px] w-auto" />
        </Link>
        {/* Bloco de navegação */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#inicio" className="hover:underline">INÍCIO</Link>
          {/* Link para a âncora da seção "Sobre o Projeto" */}
          <Link href="/#sobre-o-projeto" className="hover:underline">SOBRE O PROJETO</Link>
          <Link href="/artigos" className="hover:underline">ARTIGOS</Link> 
          {/* Link para a âncora da seção de contato, com o nome atualizado */}
          <Link href="/#contato" className="hover:underline">CONTATO</Link> {/* <<-- Nome alterado para "CONTATO"! */}
        </nav>
      </div>
    </header>
  );
}
