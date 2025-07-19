'use client'

import { useState } from 'react';
import { Instagram, Mail, MapPin } from "lucide-react";

// Adicione 'id' ao tipo de props
interface ContactSectionProps {
  id?: string; // Torna o id opcional
}

// O componente agora recebe o prop 'id'
export function ContactSection({ id }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    // Lembre-se de colocar sua URL do Formspree aqui
    const response = await fetch('COLE_SUA_URL_DO_FORMSPREE_AQUI', { 
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(e.target as HTMLFormElement),
    });

    if (response.ok) {
      setStatus('Mensagem enviada com sucesso!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      const data = await response.json();
      setStatus(data.errors ? data.errors.map((err: any) => err.message).join(', ') : 'Ocorreu um erro. Tente novamente mais tarde.');
    }
  };

  return (
    // Aplique o id à sua seção principal
    <section id={id} className="bg-[#7a8471] py-16 px-4"> {/* <<-- ID aplicado aqui */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Formulário de Contato Funcional */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">Contato</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input id="name" type="text" name="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-3 rounded bg-white/90 text-black placeholder:text-gray-600 border-none focus:outline-none focus:ring-2 focus:ring-white/50" />
              <input id="email" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 rounded bg-white/90 text-black placeholder:text-gray-600 border-none focus:outline-none focus:ring-2 focus:ring-white/50" />
              <textarea id="message" name="message" placeholder="Mensagem" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full p-3 rounded bg-white/90 text-black placeholder:text-gray-600 border-none resize-none focus:outline-none focus:ring-2 focus:ring-white/50" />
              <button type="submit" className="bg-[#8b6f47] hover:bg-[#7a6040] text-white px-8 py-3 rounded-full transition-colors cursor-pointer disabled:bg-gray-400" disabled={status === 'Enviando...'}>
                Enviar
              </button>
              {status && <p className="text-white mt-4">{status}</p>}
            </div>
          </form>
        </div>

        {/* Informações de Localização e Contato */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">Nosso Local</h2>
          <div className="text-white space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Instituto de Geociências - USP</p>
                <p className="text-sm text-gray-200">Rua do Lago, 562 - Cidade Universitária</p>
                <p className="text-sm text-gray-200">São Paulo - SP, 05508-080</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:contato@folhademica.com" className="hover:text-gray-200 transition-colors">
                contato@folhademica.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Instagram className="w-5 h-5 flex-shrink-0" />
              <a href="https://instagram.com/folhademica" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                @folhademica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
