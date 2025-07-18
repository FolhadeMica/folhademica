// Dentro de: components/formatted-date.tsx
'use client' // Marca como um Componente de Cliente

import { useEffect, useState } from 'react';

export function FormattedDate({ isoDate }: { isoDate: string }) {
  // Começamos com um estado inicial vazio
  const [date, setDate] = useState('');

  // useEffect só roda no navegador, depois que a página "hidratou"
  useEffect(() => {
    // Quando roda, ele formata a data para o padrão brasileiro e atualiza o estado
    const formatted = new Date(isoDate).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    setDate(formatted);
  }, [isoDate]); // Roda sempre que a data mudar

  // Retorna a data formatada
  return <span>{date}</span>;
}