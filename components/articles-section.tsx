// components/articles-section.tsx
'use client'; // ESSENCIAL: Este componente é interativo

import Link from 'next/link';
import Image from 'next/image'; 
import imageUrlBuilder from '@sanity/image-url'; // Importe imageUrlBuilder
import { client } from '@/src/lib/sanity'; // Importe client

// Configuração do Image URL Builder para otimizar URLs de imagem do Sanity
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// Interface para as propriedades de um único card de artigo
interface ArticleCardProps {
  post: {
    slug: string;
    title: string;
    imageUrl: string; // URL da imagem do card vinda do Sanity
  };
}

// Componente para renderizar um único card de artigo
function ArticleCard({ post }: ArticleCardProps) {
  // Otimiza a URL da imagem para uma largura específica e qualidade para os cards
  const optimizedCardImageUrl = urlFor(post.imageUrl)
                                  .width(400) // Largura otimizada para o card
                                  .height(200) // Altura otimizada para o card
                                  .quality(75) // Qualidade da imagem (0-100)
                                  .url();

  return (
    // Usamos uma tag <a> com onClick para forçar um recarregamento completo da página.
    // Isso contorna problemas de navegação client-side que causam "Application error" no Next.js App Router.
    <a 
      href={`/artigos/${post.slug}`} 
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden" 
      onClick={(e) => {
        e.preventDefault(); // Previne a navegação padrão do Next.js (que pode bugar)
        window.location.href = `/artigos/${post.slug}`; // Força um recarregamento completo da página (como se fosse F5)
      }}
    >
      <div className="relative w-full h-48 bg-gray-200">
        {post.imageUrl && (
          <Image 
            src={optimizedCardImageUrl || post.imageUrl} // Usa a URL otimizada ou a original como fallback
            alt={post.title} 
            fill // Faz a imagem preencher o contêiner pai
            className="object-cover" // Garante que a imagem cubra o espaço mantendo a proporção
            sizes="(max-width: 768px) 100vw, 33vw" // Define tamanhos para otimização responsiva do Next.js Image
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-blue-600 text-sm">Clique para ler mais...</p>
      </div>
    </a>
  );
}

// Interface para as propriedades da seção de artigos
interface ArticlesSectionProps {
  posts: Array<{ 
    _id: string;
    title: string;
    slug: string;
    imageUrl: string;
  }>;
  showTitle?: boolean; // Se deve exibir o título "Artigos"
}

// Componente principal da seção de artigos
export function ArticlesSection({ posts, showTitle = true }: ArticlesSectionProps) {
  // Exibe uma mensagem se nenhum post for encontrado
  if (!posts || posts.length === 0) {
    return (
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {showTitle && <h2 className="text-4xl font-bold text-gray-800 mb-8">Artigos</h2>}
          <p className="text-lg text-gray-600">Nenhum artigo encontrado no momento.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {showTitle && <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Artigos</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            // Renderiza um ArticleCard para cada post
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
