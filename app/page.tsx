// app/page.tsx

'use client'; 

// --- Imports dos Componentes da Página ---
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section'; 
import { AboutSection } from '@/components/about-section'; 
import { ArticlesSection } from '@/components/articles-section'; 
import { InstagramSection } from '@/components/instagram-section'; 
import { ContactSection } from '@/components/contact-section'; 
import { Footer } from '@/components/footer';
import Link from 'next/link'; 

// --- Import do Cliente Sanity ---
import { client } from '@/src/lib/sanity'; 

export const dynamic = 'force-dynamic'; 

async function getPostsForHomePage() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    "imageUrl": cardImage.asset->url
  }`;

  try {
    console.log("Vercel: Tentando buscar dados do Sanity para HomePage...");
    const posts = await client.fetch(query); 

    if (!posts || posts.length === 0) {
      console.log("Vercel: Busca bem-sucedida para HomePage, mas nenhum post foi retornado.");
      return [];
    }

    console.log(`Vercel: Busca bem-sucedida! Encontrados ${posts.length} posts.`);
    return posts;

  } catch (error) {
    console.error("Vercel: ERRO AO BUSCAR DADOS DO SANITY PARA HOMEPAGE:", error);
    let errorMessage = "Ocorreu um erro ao carregar o conteúdo da página inicial.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return []; 
  }
}

export default async function HomePage() {
  const posts = await getPostsForHomePage(); 

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection id="sobre-o-projeto" />
      <ArticlesSection posts={posts} /> 
      <InstagramSection />
      <ContactSection id="contato" />
      <Footer />
      {/* Link "Ver todos os artigos" na página inicial */}
      <div className="text-center py-8 px-4">
        {/* Alterado para tag <a> com onClick para forçar refresh e evitar erro de tipagem no <Link> */}
        <a 
          href="/artigos" 
          className="text-blue-600 hover:underline" 
          onClick={(e) => {
            e.preventDefault(); // Previne a navegação padrão do Next.js
            window.location.href = "/artigos"; // Força um recarregamento completo da página
          }}
        >
          Ver todos os artigos
        </a>
      </div>
    </div>
  );
}
