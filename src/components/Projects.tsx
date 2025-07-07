import React from 'react';
import { ExternalLink, Github, Globe, Smartphone, Database, Cloud } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con gestión de inventario, pagos y analytics en tiempo real.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
      category: 'Full Stack',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Autenticación JWT con roles',
        'Sistema de pagos integrado',
        'Dashboard de administración',
        'API REST escalable',
      ],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: 'Task Management App',
      description: 'Aplicación móvil para gestión de tareas con colaboración en tiempo real y notificaciones push.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux', 'WebSocket'],
      category: 'Mobile',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Sync en tiempo real',
        'Notificaciones push',
        'Colaboración en equipo',
        'Modo offline',
      ],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Dashboard interactivo para visualización de datos con gráficos dinámicos y reportes automatizados.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'Chart.js', 'Docker'],
      category: 'Data Visualization',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Gráficos interactivos',
        'Reportes automáticos',
        'Filtros avanzados',
        'Exportación de datos',
      ],
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: 'Microservices Architecture',
      description: 'Arquitectura de microservicios con API Gateway, service discovery y monitoreo distribuido.',
      image: 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB', 'RabbitMQ'],
      category: 'Backend',
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'API Gateway',
        'Service Discovery',
        'Circuit Breaker',
        'Distributed Tracing',
      ],
      icon: <Cloud className="w-6 h-6" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Algunos de los proyectos que he desarrollado, desde aplicaciones web hasta 
              arquitecturas de microservicios complejas
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="text-white">{project.icon}</div>
                      <span className="text-white text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Características principales:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              ¿Interesado en ver más proyectos? Visita mi repositorio en GitHub
            </p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              <span>Ver todos los proyectos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};