// Conteúdo FINAL e CORRETO para: app/artigos/[slug]/page.tsx

import { client } from '@/src/lib/sanity';
import { PortableText } from '@portabletext/react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, Share2 } from "lucide-react";

// Função que busca UM post pelo slug
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    subtitle,
    "mainImageUrl": mainImage.asset->url,
    category,
    author,
    publishedAt,
    readingTime,
    content
  }`;
  const post = await client.fetch(query);
  return post;
}

// O componente da página
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
        <>
            <Header/>
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Artigo não encontrado.</h1>
                <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
                Voltar para a página inicial
                </Link>
            </div>
            <Footer/>
        </>
    );
  }
  
  const formattedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }) 
    : 'Data não informada';

  return (
    <>
      <Header />
      <main className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/artigos" className="text-gray-600 hover:text-black inline-flex items-center gap-2 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Voltar aos artigos
          </Link>

          <div>
            {post.category && <span className="text-sm bg-[#7a8471] text-white rounded-full px-3 py-1 font-semibold">{post.category}</span>}
            <h1 className="text-3xl md:text-5xl font-bold mt-4 text-gray-800">{post.title}</h1>
            {post.subtitle && <p className="text-xl text-gray-500 mt-4">{post.subtitle}</p>}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-8 border-t border-b py-4 text-sm text-gray-500">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {post.author && <div className="flex items-center gap-2"><User size={16} /><span>{post.author}</span></div>}
              {post.publishedAt && <div className="flex items-center gap-2"><Calendar size={16} /><span>{formattedDate}</span></div>}
              {post.readingTime && <div className="flex items-center gap-2"><Clock size={16} /><span>{post.readingTime} min</span></div>}
            </div>
            <button className="flex items-center gap-2 mt-4 sm:mt-0 hover:text-black">
              <Share2 size={16} /> Compartilhar
            </button>
          </div>
          
          {post.mainImageUrl && (
            <div className="mt-8 relative h-96 w-full">
              <Image src={post.mainImageUrl} alt={post.title || 'Imagem do artigo'} fill className="w-full h-full rounded-lg bg-gray-200 object-cover" />
            </div>
          )}

          <div className="prose lg:prose-xl mt-8 max-w-none">
            <PortableText value={post.content} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}