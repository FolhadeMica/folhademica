// Conteúdo COMPLETO e CORRETO para: app/artigos/page.tsx

import { ArticlesSection } from "@/components/articles-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { client } from "@/src/lib/sanity";

// Função para buscar TODOS os posts para a lista
async function getAllPostsFromSanity() {
  // Usamos a mesma query da página inicial para pegar a imagem do card
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    "imageUrl": cardImage.asset->url
  }`;
  const posts = await client.fetch(query);
  return posts;
}

export default async function AllArticlesPage() {
  const posts = await getAllPostsFromSanity();

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Cabeçalho específico desta página */}
        <div className="bg-[#7a8471] text-white text-center py-20 px-4">
          <h1 className="text-5xl font-bold">Artigos Científicos</h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Explore nossa coleção de artigos sobre Geociências e Ciências da Terra, produzidos por pesquisadores do Instituto de Geociências da USP.
          </p>
        </div>

        {/* AQUI A MÁGICA: Reutilizamos o componente da seção de artigos,
          passando a lista de posts e dizendo para ele NÃO mostrar seu título padrão,
          pois esta página já tem um título principal.
        */}
        <ArticlesSection posts={posts} showTitle={false} />

      </main>
      <Footer />
    </>
  );
}