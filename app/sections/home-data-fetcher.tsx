// app/sections/home-data-fetcher.tsx

// Não precisa de 'use client' aqui, pois será um Server Component

// import { client } from '../../src/lib/sanity'; // Importe seu cliente Sanity
import { ArticlesSection } from '@/components/articles-section'; // Componente que exibe os artigos

export const dynamic = 'force-dynamic'; // Força renderização dinâmica para buscar dados frescos

// Função para buscar TODOS os posts para a lista (Server Component)
async function getPostsFromSanity() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    "imageUrl": cardImage.asset->url
  }`;

  try {
    console.log("Vercel (Server Component): Tentando buscar dados do Sanity...");
    // Remova { cache: 'no-store' } se 'force-dynamic' já estiver no topo do arquivo.
    // Se ainda tiver problemas de cache, você pode adicionar 'revalidate: 0' na fetch
    const posts = await client.fetch(query, {}); 

    if (!posts || posts.length === 0) {
      console.log("Vercel (Server Component): Busca bem-sucedida, mas nenhum post foi retornado.");
      return [];
    }

    console.log(`Vercel (Server Component): Busca bem-sucedida! Encontrados ${posts.length} posts.`);
    return posts;

  } catch (error) {
    console.error("Vercel (Server Component): ERRO CRÍTICO AO BUSCAR DADOS DO SANITY:", error);
    let errorMessage = "Ocorreu um erro desconhecido";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(
      `Falha ao buscar dados do Sanity. Causa mais provável: Project ID, Dataset ou Token estão errados. Erro original: ${errorMessage}`
    );
  }
}

// Este é um Server Component que busca os dados e renderiza a seção de artigos
export async function HomeArticlesFetcher() {
  const posts = await getPostsFromSanity();
  return <ArticlesSection posts={posts} />;
}