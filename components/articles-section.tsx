// Conteúdo DEFINITIVO para: components/articles-section.tsx

import Link from 'next/link';

import { Card, CardContent } from './ui/card';

export function ArticlesSection({ posts, showTitle = true }: { posts: any[], showTitle?: boolean }) {
  return (
    <section id="artigos" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {showTitle && <h2 className="text-4xl font-bold text-center mb-12 text-[#7a8471]">Artigos</h2>}

        {posts && posts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <Link href={`/artigos/${post.slug?.current || ''}`} key={post._id} className="group block">
                  <Card className="bg-[#7a8471] text-white overflow-hidden h-full flex flex-col transition-shadow duration-300 hover:shadow-xl">

                    {/* ESTA É A PARTE QUE EXIBE A IMAGEM */}
                    <div className="relative h-48 w-full overflow-hidden">
                      {post.imageUrl ? (
                        <img
  src={post.imageUrl}
  alt={`Imagem de capa para o post: ${post.title}`}
  className="absolute h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
/>
                      ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6 flex-grow">
                      <div className="bg-white rounded p-4 text-black h-full">
                        <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-600">Clique para ler mais...</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/artigos" className="inline-block bg-[#7a8471] hover:bg-[#6a7461] text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Ver todos os artigos
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center">Nenhum artigo encontrado.</p>
        )}
      </div>
    </section>
  );
}