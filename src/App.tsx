import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      {/* Profile Section */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <img 
          src="/img/logo.png" 
          alt="Siga Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-2xl font-bold text-gray-800 mb-1">SIGA PROTEGIDO</h1>
      <p className="text-gray-600 text-center mb-8 max-w-md">
        Soluções inovadoras em proteção veicular, automação e atendimento digital. Segurança, tecnologia e praticidade para você e sua empresa! 🚀
      </p>

      {/* Social Media Links */}
      <div className="w-full max-w-md space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Redes Sociais</h2>
        
        <a href="https://www.instagram.com/siga.protegido/" className="flex items-center bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] text-white p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/instagram.png" alt="Instagram" className="w-6 h-6 mr-3" />
          <span className="font-medium">Instagram</span>
        </a>

        <a href="https://www.facebook.com/Sigaprotegido" className="flex items-center bg-[#1877F2] text-white p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/facebook.png" alt="Facebook" className="w-6 h-6 mr-3" />
          <span className="font-medium">Facebook</span>
        </a>

        <a href="https://www.tiktok.com/@sigaprotegido" className="flex items-center bg-black text-white p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/tiktok.png" alt="TikTok" className="w-6 h-6 mr-3" />
          <span className="font-medium">TikTok</span>
        </a>

      </div>

      {/* Serviços e Simulações */}
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Serviços e Simulações</h2>

        <a href="https://www.sigaprotegido.com.br/" className="flex items-center bg-[#E43D33] text-gray-800 p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/site.png" alt="Site Oficial" className="w-6 h-6 mr-3" />
          <span className="font-medium">Site Oficial</span>
        </a>

        <a href="https://cotacao.sigaprotegido.com.br/" className="flex items-center bg-[#E43D33] text-black p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/cotacao.png" alt="Simule seu Seguro Auto" className="w-6 h-6 mr-3" />
          <span className="font-medium">Simule seu Seguro Auto</span>
        </a>

        <a href="https://api.whatsapp.com/send?phone=5511976447001&text=Ol%C3%A1!%20Estou%20no%20site%20www.links.sigaprotegido.com.br/%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?" className="flex items-center bg-[#28A745] text-white p-4 rounded-lg hover:opacity-90 transition-opacity">
          <img src="/img/whatsapp.png" alt="Fale com um Especialista" className="w-6 h-6 mr-3" />
          <span className="font-medium">Fale com um Especialista</span>
        </a>
      
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© 2025 Siga Protegido - Todos os direitos reservados</p>
        <p>powered by <a href="https://wa.me/5511939555609?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços!" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">Sourcex</a></p>
      </footer>
    </div>
  );
}

export default App;
