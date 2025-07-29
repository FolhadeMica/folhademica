// app/artigos/page.tsx

'use client'; // ESSENCIAL: Esta é uma página de cliente para interatividade

// --- Importações Essenciais ---
import { client } from '@/src/lib/sanity'; // Importe seu cliente Sanity
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArticlesSection } from '@/components/articles-section'; // Componente que exibe a lista de artigos

// Este 'export const dynamic' garante que a página sempre seja renderizada dinamicamente no servidor,
// buscando os dados mais recentes a cada requisição.
export const dynamic = 'force-dynamic';

// --- Função Assíncrona para Buscar TODOS os Posts para a Lista ---
// Esta função é um Server-side function (mesmo que a página seja Client-side, Next.js permite isso).
async function getAllPostsFromSanity() {
  // Query GROQ para buscar todos os posts, incluindo o slug e a URL da imagem do card
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    "imageUrl": cardImage.asset->url
  }`;

  try {
    console.log("Vercel (Server Component - Artigos): Tentando buscar TODOS os posts do Sanity...");
    // A chamada a client.fetch() é onde o client do Sanity é usado para buscar os dados.
    const posts = await client.fetch(query, {}); 

    if (!posts || posts.length === 0) {
      console.log("Vercel (Server Component - Artigos): Busca bem-sucedida, mas nenhum post foi retornado.");
      return []; // Retorna um array vazio se não houver posts
    }

    console.log(`Vercel (Server Component - Artigos): Busca bem-sucedida! Encontrados ${posts.length} posts.`);
    return posts; // Retorna a lista de posts

  } catch (error) {
    console.error("Vercel (Server Component - Artigos): ERRO CRÍTICO AO BUSCAR TODOS OS DADOS DO SANITY:", error);
    let errorMessage = "Ocorreu um erro ao carregar os artigos.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    // Lançar um erro aqui pode quebrar o build. Apenas logar pode ser melhor para a página carregar.
    return []; // Retorna um array vazio para não quebrar a UI
  }
}

// --- O Componente da Página de Artigos (AllArticlesPage) ---
export default async function AllArticlesPage() {
  // Chamada da função assíncrona para buscar os posts.
  // Como a página é 'use client', essa chamada é um Server Component que é renderizado antes da hidratação.
  const posts = await getAllPostsFromSanity();

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Cabeçalho específico desta página de artigos */}
        <div className="bg-[#7a8471] text-white text-center py-20 px-4">
          <h1 className="text-5xl font-bold">Artigos Científicos</h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Explore nossa coleção de artigos sobre Geociências e Ciências da Terra, produzidos por pesquisadores do Instituto de Geociências da USP.
          </p>
        </div>

        {/* Renderiza a seção de artigos, passando a lista de posts e desativando o título interno da seção */}
        <ArticlesSection posts={posts} showTitle={false} />

      </main>
      <Footer />
    </>
  );
}
