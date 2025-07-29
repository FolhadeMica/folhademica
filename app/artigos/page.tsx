// components/articles-section.tsx
'use client'; // Este é um Client Component

import Link from 'next/link';
import Image from 'next/image'; // Certifique-se de que next/image está importado

// Interface para as propriedades de um único card de artigo
interface ArticleCardProps {
  post: {
    slug: string;
    title: string;
    imageUrl: string; // URL da imagem do card
  };
}

// Componente para renderizar um único card de artigo
function ArticleCard({ post }: ArticleCardProps) {
  return (
    // Adicionamos 'refresh' ao Link para forçar um recarregamento completo da página
    // Isso contorna problemas de navegação client-side para Server Components assíncronos.
    <Link href={`/artigos/${post.slug}`} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden" refresh>
      <div className="relative w-full h-48 bg-gray-200">
        {post.imageUrl && (
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 33vw" // Otimização de imagem para diferentes tamanhos de tela
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-blue-600 text-sm">Clique para ler mais...</p>
      </div>
    </Link>
  );
}

// Interface para as propriedades da seção de artigos
interface ArticlesSectionProps {
  posts: Array<{ // Tipo mais detalhado para os posts
    _id: string;
    title: string;
    slug: string;
    imageUrl: string;
  }>;
  showTitle?: boolean; // Se deve exibir o título "Artigos"
}

// Componente principal da seção de artigos
export function ArticlesSection({ posts, showTitle = true }: ArticlesSectionProps) {
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
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
