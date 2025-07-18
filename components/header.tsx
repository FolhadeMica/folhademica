'use client'; // ESSENCIAL: Permite usar hooks e interatividade do cliente

import Link from 'next/link'; // Importe Link se usar no Header
import Image from 'next/image'; // Importe Image para otimizar logos

export function Header() {
  return (
    <header className="bg-[#5B6D5B] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Seu logo */}
        <Link href="/" className="text-2xl font-bold">
          {/* Ajuste o src da imagem para o caminho correto dentro de /public */}
          <Image src="/images/mica-transparente.png" alt="Folha De Mica Logo" width={160} height={48} className="h-[48px] w-auto" />
        </Link>
        {/* Bloco de navegação - Certifique-se de que os links funcionam */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#inicio" className="hover:underline">INÍCIO</Link>
          <Link href="/sobre-o-projeto" className="hover:underline">SOBRE O PROJETO</Link>
          <Link href="/artigos" className="hover:underline">ARTIGOS</Link> {/* Certifique-se de que esta é a rota correta para sua listagem de artigos */}
          <Link href="/contato" className="hover:underline">CONTACTO</Link> {/* Ajustado para Contacto como no seu site */}
        </nav>
        {/* Adicione aqui seu menu mobile se tiver */}
      </div>
    </header>
  );
}