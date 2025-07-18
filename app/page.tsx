'use client';
// app/page.tsx


// --- Imports dos Componentes da Página ---
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section'; // Importe conforme o caminho real (componentes/)
import { AboutSection } from '@/components/about-section'; // Importe conforme o caminho real
import { ArticlesSection } from '@/components/articles-section'; // Importe conforme o caminho real
import { InstagramSection } from '@/components/instagram-section'; // Ajustado para 'instagram-section' (minúsculas com hífen)
import { ContactSection } from '@/components/contact-section'; // Importe conforme o caminho real
import { Footer } from '@/components/footer';

// --- Import do Cliente Sanity (usado para buscar posts na ArticlesSection) ---
import { client } from '@/src/lib/sanity'; // O client Sanity é importado e usado na função de busca

// Este 'export const dynamic' garante que a página sempre seja renderizada dinamicamente no servidor,
// buscando os dados mais recentes a cada requisição.
export const dynamic = 'force-dynamic';

// --- Função Assíncrona para Buscar Posts para a HomePage ---
// Esta função é um Server-side function (mesmo que HomePage seja Client-side, Next.js permite isso)
// Mas o ideal é que seja dentro de um Server Component ou uma API Route,
// ou que a HomePage receba os dados como props de um Layout ou Route Handler.
// Por simplicidade para manter o layout, vamos tentar assim.
async function getPostsForHomePage() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    "imageUrl": cardImage.asset->url
  }`;

  try {
    // console.log("Vercel: Tentando buscar dados do Sanity para HomePage...");
    const posts = await client.fetch(query); // 'cache: "no-store"' não é estritamente necessário com 'force-dynamic'

    if (!posts || posts.length === 0) {
      // console.log("Vercel: Busca bem-sucedida para HomePage, mas nenhum post retornado.");
      return [];
    }

    // console.log(`Vercel: Busca bem-sucedida para HomePage! Encontrados ${posts.length} posts.`);
    return posts;

  } catch (error) {
    // console.error("Vercel: ERRO AO BUSCAR DADOS DO SANITY PARA HOMEPAGE:", error);
    let errorMessage = "Ocorreu um erro ao carregar o conteúdo da página inicial.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    // Lançar um erro aqui pode quebrar o build. Apenas logar pode ser melhor para a página carregar.
    // Ou usar uma UI de fallback.
    // throw new Error(`Falha no carregamento da página inicial: ${errorMessage}`);
    return []; // Retorna um array vazio para não quebrar a UI
  }
}

// --- O Componente da Página Principal (HomePage) ---
export default async function HomePage() {
  // A chamada para getPostsForHomePage() é feita aqui dentro do Client Component.
  // Next.js (App Router) permite isso, mas pode causar hidratação ou warnings.
  // A forma mais "correta" seria passar `posts` como prop para HomePage
  // se HomePage fosse um Client Component que recebesse props de um Server Component pai.
  // Mas para não reestruturar muito agora, seguimos assim.
  const posts = await getPostsForHomePage(); // <<-- CONTINUA SENDO UMA CHAMADA ASSÍNCRONA EM CLIENT COMPONENT

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ArticlesSection posts={posts} /> {/* Passando os posts para a seção de artigos */}
      <InstagramSection />
      <ContactSection />
      <Footer />
    </div>
  );
}