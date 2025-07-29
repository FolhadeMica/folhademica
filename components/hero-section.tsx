// components/hero-section.tsx
'use client'; // ESSENCIAL: Este componente é interativo

import Link from 'next/link';
import Script from 'next/script'; // Importe Script para carregar o JS do Brevo

export function HeroSection() {
  return (
    <section 
      id="inicio" // Adicionado ID para a âncora de navegação
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url("/images/mountain-landscape.jpg")' }} // Use o caminho da sua imagem de fundo
    >
      {/* Overlay escuro para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Folha de Mica</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Ei, você, que ama a ciência! Quer descobrir as clivagens mais profundas do nosso planeta?
          Então, é só clicar no botão de assinar abaixo, que a Folha de Mica chega quinzenalmente,
          às sextas-feiras, no seu e-mail!
        </p>

        {/* // --- CÓDIGO HTML DO SEU FORMULÁRIO BREVO AQUI --- */}
        {/* // Este é o bloco que você me forneceu. Colei-o aqui. */}
        {/* // O estilo inline do Brevo pode precisar ser ajustado com Tailwind se houver conflitos. */}
        <div className="sib-form" style={{ textAlign: 'center', backgroundColor: '#cbebb5' }}>
          <div id="sib-form-container" className="sib-form-container">
            <div id="error-message" className="sib-form-message-panel" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949', maxWidth: '540px' }}>
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                  <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Sua inscrição não deu certo, tente novamente :(
                </span>
              </div>
            </div>
            <div></div>
            <div id="success-message" className="sib-form-message-panel" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#085229', backgroundColor: '#e7faf0', borderRadius: '3px', borderColor: '#13ce66', maxWidth: '540px' }}>
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Ebaaa! Sua assinatura deu certo! :)
                </span>
              </div>
            </div>
            <div></div>
            <div id="sib-container" className="sib-container--large sib-container--vertical" style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,1)', maxWidth: '540px', borderRadius: '3px', borderWidth: '1px', borderColor: '#C0CCD9', borderStyle: 'solid', direction: 'ltr' }}>
              <form id="sib-form" method="POST" action="https://9b641c02.sibforms.com/serve/MUIFAC9mMHEYxJ04fuELi6bEB4v-KSRhaLDq-8ejSVuHk9daqpX_IO9WTBP5xvaluHsnnB1m8B0g9KnTMeZAITRjjfXvR_k4o7AGFxLxoFdDzS_BpKC15_SRAkcd6qjLy3eqWa6UasCQZznO2gLLjQda6NbBPVb4QColhjcwWYY9kEKsZ6BHytWGpHjDI7V5O9bsymASYiB0igXF" data-type="subscription">
                <div style={{ padding: '8px 0' }}>
                  <div className="sib-form-block" style={{ fontSize: '32px', textAlign: 'left', fontWeight: '700', fontFamily: 'Helvetica, sans-serif', color: '#85876e', backgroundColor: 'transparent', textAlign: 'left' }}>
                    <p>Folha de Mica</p>
                  </div>
                </div>
                <div style={{ padding: '8px 0' }}>
                  <div className="sib-input sib-form-block">
                    <div className="form__entry entry_block">
                      <div className="form__label-row ">
                        <label className="entry__label" style={{ fontWeight: '700', textAlign: 'left', fontSize: '16px', fontFamily: 'Helvetica, sans-serif', color: '#3c4858' }} htmlFor="EMAIL" data-required="*" >você está quase lá...</label>

                        <div className="entry__field">
                          <input className="input " type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="coloque o seu melhor e-mail :)" data-required="true" required />
                        </div>
                      </div>

                      <label className="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                      </label>
                      <label className="entry__specification" style={{ fontSize: '12px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#8390A4', textAlign: 'left' }}>
                        coloque seu e-mail de forma abcd@...
                      </label>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '8px 0' }}>
                  <div className="sib-form-block" style={{ textAlign: 'left' }}>
                    <button className="sib-form-block__button sib-form-block__button-with-loader" style={{ fontSize: '16px', textAlign: 'left', fontWeight: '700', fontFamily: 'Helvetica, sans-serif', color: '#000000', backgroundColor: '#b8f695', borderRadius: '3px', borderWidth: '0px' }} form="sib-form" type="submit">
                      <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style={{}}>
                        <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                      </svg>
                      Assine
                    </button>
                  </div>
                </div>

                <input type="text" name="email_address_check" value="" className="input--hidden" />
                <input type="hidden" name="locale" value="en" />
              </form>
            </div>
          </div>
        </div>
        {/* FIM DO BLOCO DE EXEMPLO - COLE O SEU CÓDIGO BREVO ACIMA DESTA LINHA */}
      </div>
    </section>
  );
}
