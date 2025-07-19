// app/contato/page.tsx

'use client'; // Necessário se usar componentes interativos (Header, Footer, ContactSection)

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactSection } from '@/components/contact-section'; // Importa a seção de contato
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* A seção de contato já tem padding e background */}
        <ContactSection />
        <div className="text-center py-8 px-4">
          <Link href="/" className="text-blue-600 hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}