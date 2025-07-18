// Conteúdo COMPLETO e CORRETO para: components/header.tsx
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[#7a8471] text-white px-4 py-4 bg-[rgba(52,69,54,1)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
    <div className="flex items-center space-x-2 h-20 text-left bg-transparent flex-row">
  <Image
    src="/images/mica-transparente.png"
    alt="Folha de Mica"
    width={160}
    height={48}
    className="h-[80%] w-auto"
  />
</div>

        {/* Bloco de navegação corrigido */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#inicio" className="hover:text-gray-200 transition-colors">
            INÍCIO
          </Link>
          <Link href="/#sobre" className="hover:text-gray-200 transition-colors">
            SOBRE O PROJETO
          </Link>
          <Link href="/artigos" className="hover:text-gray-200 transition-colors">
            ARTIGOS
          </Link>
          <Link href="/#contato" className="hover:text-gray-200 transition-colors">
            CONTATO
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}