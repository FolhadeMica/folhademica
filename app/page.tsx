'use client'; // ESSENCIAL: Mantém a página como Client Component para usar Header/Footer e interatividade

// --- Imports dos Componentes da Página ---
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ArticlesSection } from '@/components/articles-section'; 
import { InstagramSection } from '@/components/instagram-section'; 
import { ContactSection } from '@/components/contact-section'; // Importe conforme o caminho real (components/)
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
      <AboutSection id="sobre-o-projeto" /> {/* ID para a seção "Sobre o Projeto" */}
      <ArticlesSection posts={posts} /> 
      <InstagramSection />
      {/* Adicione o ID à ContactSection aqui */}
      <ContactSection id="contato" /> {/* <<-- Adicionado o prop 'id' */}
      <Footer />
    </div>
  );
}
