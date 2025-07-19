// app/page.tsx

'use client'; // ESSENCIAL: Mantém a página como Client Component para usar Header/Footer e interatividade

// --- Imports dos Componentes da Página ---
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section'; // Importe conforme o caminho real (components/)
import { AboutSection } from '@/components/about-section'; // Importe conforme o caminho real
// import { ArticlesSection } from '@/components/articles-section'; // Comentado/Removido - Não será usado aqui
import { InstagramSection } from '@/components/instagram-section'; // Ajustado para 'instagram-section' (minúsculas com hífen)
import { ContactSection } from '@/components/contact-section'; // Importe conforme o caminho real
import { Footer } from '@/components/footer';
import Link from 'next/link'; // Importado para o link "Ver todos os artigos"

// --- O Componente da Página Principal (HomePage) ---
export default function HomePage() {
  // A busca de dados foi removida desta página para evitar o erro de compilação.

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white"> {/* Adicionado bg-white */}
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Bem-vindo à Folha de Mica!</h1>
        <p className="text-xl text-gray-600 mb-8">Conteúdo temporário para a página inicial.</p>
        <Link href="/artigos" className="text-blue-600 hover:underline">
          Ver todos os artigos
        </Link>
      </main>
      <Footer />
    </>
  );
}
