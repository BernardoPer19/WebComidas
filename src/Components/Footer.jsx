// src/Components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sección de Contacto */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contacto</h3>
            <p className="text-lg">Teléfono: +52 32132132</p>
            <p className="text-lg">
              Correo: <a href="mailto:Comid@gmail.com" className="text-green-500 hover:text-green-600">Comid@gmail.com</a>
            </p>
            <p className="text-lg">
              Página de Pedidos: <a href="/pedidos" className="text-green-500 hover:text-green-600">www.comid.com/pedidos</a>
            </p>
          </div>

          {/* Sección de Redes Sociales */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Síguenos en</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8c-2 0-3-1-3-3s1-3 3-3s3 1 3 3s-1 3-3 3zm0 0V7m0 12V7m0 12c0 .553-.447 1-1 1H9c-.553 0-1-.447-1-1V7c0-.553.447-1 1-1h6c.553 0 1 .447 1 1v13zm2 1h-8a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2v13a2 2 0 01-2 2z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2C18 1.44772 17.5523 1 17 1H7C6.44772 1 6 1.44772 6 2V22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22V2Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Sección de Enlaces útiles */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Enlaces útiles</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-gray-300 hover:text-white">Inicio</a></li>
              <li><a href="/productos" className="text-gray-300 hover:text-white">Productos</a></li>
              <li><a href="/nosotros" className="text-gray-300 hover:text-white">Nosotros</a></li>
              <li><a href="/contacto" className="text-gray-300 hover:text-white">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Comid. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
