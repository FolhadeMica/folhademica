// app/sobre-o-projeto/page.tsx

'use client'; // Necessário se usar componentes interativos (Header, Footer)

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function AboutProjectPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-12 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre o Projeto</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            O Projeto Folha de Mica é uma iniciativa dedicada à divulgação científica e ao estudo das Geociências, com foco em temas como geologia, mineralogia, paleontologia e processos terrestres. Nosso objetivo é tornar o conhecimento científico acessível a todos, promovendo a curiosidade e o entendimento sobre o planeta em que vivemos.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Somos uma equipe de entusiastas e pesquisadores do Instituto de Geociências da Universidade de São Paulo (USP), comprometidos em compartilhar informações precisas e envolventes sobre as maravilhas da Terra. Acreditamos que a ciência é para todos e que, ao compreendermos melhor nosso ambiente, podemos tomar decisões mais informadas para o futuro.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore nossos artigos, descubra novas perspectivas e junte-se a nós nesta jornada de aprendizado contínuo.
          </p>
          <div className="mt-8">
            <Link href="/" className="text-blue-600 hover:underline">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}