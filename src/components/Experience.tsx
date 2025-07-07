import React from 'react';
import { Calendar, MapPin, Building, GraduationCap, Award } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Ciudad, País',
      period: '2022 - Presente',
      description: [
        'Lideré el desarrollo de una plataforma SaaS que procesó más de 1M de transacciones mensuales',
        'Implementé arquitectura de microservicios usando Node.js, Docker y Kubernetes',
        'Optimicé el rendimiento de la base de datos, reduciendo los tiempos de consulta en un 40%',
        'Mentoré a 3 desarrolladores junior en mejores prácticas de desarrollo',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      location: 'Ciudad, País',
      period: '2020 - 2022',
      description: [
        'Desarrollé aplicaciones web responsivas para más de 15 clientes corporativos',
        'Integré APIs de terceros y sistemas de pago (Stripe, PayPal)',
        'Implementé sistemas de autenticación y autorización robustos',
        'Colaboré en metodologías ágiles con equipos multidisciplinarios',
      ],
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Firebase', 'Stripe'],
    },
    {
      type: 'work',
      title: 'Software Developer',
      company: 'StartUp Dynamics',
      location: 'Ciudad, País',
      period: '2019 - 2020',
      description: [
        'Contribuí al desarrollo de una aplicación móvil con más de 50k descargas',
        'Desarrollé APIs RESTful usando Node.js y Express',
        'Implementé testing automatizado aumentando la cobertura de código al 85%',
        'Participé en el diseño de arquitectura de software y revisiones de código',
      ],
      technologies: ['React Native', 'Node.js', 'MySQL', 'Jest', 'Git'],
    },
  ];

  const education = [
    {
      degree: 'Ingeniería de Sistemas',
      institution: 'Universidad Nacional',
      location: 'Ciudad, País',
      period: '2015 - 2019',
      description: 'Especialización en Desarrollo de Software y Sistemas Distribuidos',
      gpa: '4.2/5.0',
    },
    {
      degree: 'Certificación AWS Solutions Architect',
      institution: 'Amazon Web Services',
      location: 'Online',
      period: '2023',
      description: 'Certificación en arquitectura de soluciones en la nube',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experiencia Profesional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mi trayectoria profesional construyendo soluciones tecnológicas innovadoras
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Building className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Experiencia Laboral</h3>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {index < experiences.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-300"></div>
                    )}
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                          <Building className="w-6 h-6" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h4>
                          <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                          
                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                          
                          <ul className="space-y-2 mb-4">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-gray-700 flex items-start">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Educación</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-300"></div>
                    )}
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                          <p className="text-green-600 font-medium mb-2">{edu.institution}</p>
                          
                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {edu.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {edu.location}
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-2">{edu.description}</p>
                          
                          {edu.gpa && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Award className="w-4 h-4 mr-1" />
                              GPA: {edu.gpa}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};