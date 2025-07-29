// components/about-section.tsx
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
    // A cor de fundo bg-[#7a8471] foi aplicada aqui, correspondendo ao verde da sua imagem.
    <section id={id} className="bg-[#7a8471] py-16 px-4 text-white"> {/* <<-- Cor de fundo alterada e texto branco */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Sobre o Projeto</h2>
        {/* Texto atualizado conforme sua solicitação */}
        <p className="text-lg leading-relaxed mb-4">
          Folha de Mica é um projeto de extensão aberto a toda a comunidade, com foco no universo acadêmico
          das Geociências. Com o apoio do Prof. Dr. Paulo César Boggiani, a iniciativa busca integrar os
          ingressantes dos cursos de Geociências e Ciências da Terra, ao mesmo tempo que valoriza a produção
          científica local, destacando artigos desenvolvidos por docentes e pesquisadores do próprio Instituto de
          Geociências (IGc). Além disso, a Folha de Mica tem como missão democratizar o conhecimento
          geológico por meio da linguagem científica, promovendo o diálogo entre a universidade e a sociedade. O
          projeto se materializa por meio de uma newsletter quinzenal, enviada gratuitamente aos assinantes, com
          conteúdo acessível, seguro e de qualidade.
        </p>
      </div>
    </section>
  );
}
