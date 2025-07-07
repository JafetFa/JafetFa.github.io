import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Code, Database, Server } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Profile"
                    className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Hola, soy{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Ingeniero de Sistemas
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Desarrollador Full Stack especializado en crear soluciones tecnológicas innovadoras
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Con más de 5 años de experiencia en desarrollo de software, me especializo en crear 
                  aplicaciones web modernas, APIs escalables y sistemas distribuidos. Mi pasión es 
                  transformar ideas complejas en soluciones tecnológicas elegantes y eficientes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Tengo experiencia trabajando con tecnologías como React, Node.js, Python, PostgreSQL 
                  y cloud computing. Me encanta enfrentar desafíos técnicos y colaborar en equipos 
                  multidisciplinarios para crear productos que generen impacto.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">ingeniero@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Ciudad, País</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">linkedin.com/in/perfil</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};