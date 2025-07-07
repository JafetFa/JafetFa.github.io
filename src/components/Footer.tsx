import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ingeniero de Sistemas</h3>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transformando ideas en soluciones tecnológicas innovadoras. 
                Especializado en desarrollo web moderno y arquitecturas escalables.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Experiencia
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Información de Contacto</h4>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <strong>Email:</strong> ingeniero@email.com
                </p>
                <p className="text-gray-400">
                  <strong>Teléfono:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-400">
                  <strong>Ubicación:</strong> Ciudad, País
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Ingeniero de Sistemas. Todos los derechos reservados.
              </p>
              
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>y</span>
                <Coffee className="w-4 h-4 text-yellow-500" />
                <span>usando React & TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};