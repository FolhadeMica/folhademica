'use client'; 

// --- Importações Essenciais ---
import { client } from '@/src/lib/sanity'; 
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { Header } from '@/components/header'; 
import { Footer } from '@/components/footer'; 
import Link from 'next/link';
import Image from 'next/image'; 
import { Calendar, Clock, User, Share2 } from "lucide-react"; 

// Necessário para renderizar imagens inline no PortableText
import imageUrlBuilder from '@sanity/image-url';

// --- Função Assíncrona para Buscar um Post Específico do Sanity ---
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    title,
    subtitle,
    "mainImageUrl": mainImage.asset->{url, metadata}, // <<-- Pega metadata para otimização
    category, 
    author,   
    publishedAt,
    readingTime,
    content[]{
      ..., 
      _type == "image" => { 
        asset->{
          _id,
          url,
          metadata {
            dimensions { width, height } 
          }
        },
        alt 
      }
    },
    "slug": slug.current 
  }`;
  const post = await client.fetch(query);
  return post;
}

// --- Configuração do Image URL Builder (para pré-processamento de URLs de imagem do Sanity) ---
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// --- Definição dos Componentes de Renderização para o PortableText ---
const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-medium mt-5 mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg md:text-xl font-medium mt-4 mb-1">{children}</h4>,
    normal: ({ children }) => <p className="leading-relaxed text-gray-700 my-2">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">{children}</blockquote>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const typedValue = value as { href: string; blank?: boolean };
      const target = typedValue?.blank ? '_blank' : undefined;
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
      return (
        <a href={typedValue?.href} target={target} rel={rel} className="text-blue-600 hover:underline">
          {children}
        </a>
      );
    },
    underline: ({ children }) => <u className="underline">{children}</u>,
    code: ({ children }) => <code className="bg-gray-100 text-gray-800 p-1 rounded font-mono text-sm">{children}</code>,
  },
  types: {
    image: ({ value }) => {
      const typedValue = value as { asset?: { _ref: string; url: string; metadata?: { dimensions: { width: number; height: number } } }, alt?: string };
      if (!typedValue.asset || !typedValue.asset.url) return null;
      
      // Otimiza a URL da imagem para uma largura específica e qualidade
      const optimizedImageUrl = urlFor(typedValue.asset)
                                  .width(800) // Largura máxima para imagens no corpo do artigo
                                  .quality(80) // Qualidade da imagem (0-100)
                                  .url();

      return (
        <figure className="my-8 relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={optimizedImageUrl || typedValue.asset.url} // Usa a URL otimizada ou a original como fallback
            alt={typedValue.alt || 'Imagem do artigo'}
            fill 
            className="w-full h-full rounded-lg object-cover" 
            sizes="(max-width: 768px) 100vw, 800px" // Otimização de imagem para diferentes tamanhos de tela
          />
        </figure>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 my-2 text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 my-2 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

// --- O Componente da Página do Artigo ---
export default async function ArticlePage({ params }: { params: any }) { 
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="text-center py-20 px-4">
          <h1 className="text-2xl font-bold text-gray-800">Artigo não encontrado.</h1>
          <Link href="/artigos" className="text-blue-600 hover:underline mt-4 inline-block"> 
            Voltar para a página de artigos
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
    : 'Data não informada';

  const articlePageUrl = `https://folha-de-mica-folha-de-micas-projects.vercel.app/artigos/${post.slug}`; 

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.subtitle || 'Confira este artigo!',
          url: articlePageUrl,
        });
        console.log('Conteúdo compartilhado com sucesso!');
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
        alert('Não foi possível compartilhar automaticamente. Copie o link: ' + articlePageUrl);
      }
    } else {
      try {
        await navigator.clipboard.writeText(articlePageUrl);
        alert('Link copiado para a área de transferência!');
      } catch (err) {
        console.error('Falha ao copiar o link: ', err);
        alert('Seu navegador não suporta compartilhamento ou cópia automática. Copie o link manualmente: ' + articlePageUrl);
      }
    }
  };

  return (
    <>
      <Header />
      <main className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/artigos" className="text-gray-600 hover:text-black inline-flex items-center gap-2 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Voltar para a página de artigos
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
            <button onClick={handleShare} className="flex items-center gap-2 mt-4 sm:mt-0 hover:text-black">
              <Share2 size={16} /> Compartilhar
            </button>
          </div>

          {/* Imagem principal do artigo (se existir) - Otimizada */}
          {post.mainImageUrl && (
            <div className="mt-8 relative h-96 w-full">
              <Image 
                src={urlFor(post.mainImageUrl).width(1200).quality(80).url() || post.mainImageUrl.url} // Otimiza para largura maior
                alt={post.title || 'Imagem do artigo'} 
                fill 
                className="w-full h-full rounded-lg object-cover" 
                sizes="(max-width: 768px) 100vw, 1200px" // Otimização de imagem para diferentes tamanhos de tela
              />
            </div>
          )}

          {/* --- Renderização do Conteúdo Principal do Artigo (Portable Text) --- */}
          <div className="prose lg:prose-xl mt-8 max-w-none">
            <PortableText value={post.content} components={components} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
