'use client';

import React from 'react';

// Define a interface para as propriedades (props) do componente AboutSection.
// A propriedade 'id' é adicionada aqui, tornando-a opcional (com '?').
interface AboutSectionProps {
  id?: string; // ID para permitir a navegação por âncora (scroll para a seção)
}

// O componente AboutSection agora recebe o prop 'id' desestruturado das props.
export function AboutSection({ id }: AboutSectionProps) {
  return (
    // A propriedade 'id' é aplicada ao elemento <section>, permitindo que os links de âncora funcionem.
    <section id={id} className="bg-[#e0e0e0] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre o Projeto</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          O Projeto Folha de Mica é uma iniciativa dedicada à divulgação científica e ao estudo das Geociências, com foco em temas como geologia, mineralogia, paleontologia e processos terrestres. Nosso objetivo é tornar o conhecimento científico acessível a todos, promovendo a curiosidade e o entendimento sobre o planeta em que vivemos.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Somos uma equipe de entusiastas e pesquisadores do Instituto de Geociências da Universidade de São Paulo (USP), comprometidos em compartilhar informações precisas e envolventes sobre as maravilhas da Terra. Acreditamos que a ciência é para todos e que, ao compreendermos melhor nosso ambiente, podemos tomar decisões mais informadas para o futuro.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Explore nossos artigos, descubra novas perspectivas e junte-se a nós nesta jornada de aprendizado contínuo.
        </p>
        {/*
          Aqui você pode adicionar um link ou botão para voltar ao topo ou para outra seção,
          se desejar, usando o componente Link do Next.js.
        */}
        {/*
        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
        */}
      </div>
    </section>
  );
}
