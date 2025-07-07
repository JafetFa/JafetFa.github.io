import React from 'react';
import { Code, Database, Server, Globe, Smartphone, Shield, Cloud, Zap } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C#', level: 75 },
        { name: 'Go', level: 70 },
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Terraform', level: 70 },
      ],
    },
  ];

  const tools = [
    { name: 'Git', icon: <Zap className="w-6 h-6" /> },
    { name: 'VS Code', icon: <Code className="w-6 h-6" /> },
    { name: 'Figma', icon: <Globe className="w-6 h-6" /> },
    { name: 'Postman', icon: <Server className="w-6 h-6" /> },
    { name: 'Slack', icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Jira', icon: <Shield className="w-6 h-6" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones robustas y escalables
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Herramientas Favoritas</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white border border-gray-200 px-6 py-4 rounded-lg hover:shadow-md hover:border-blue-300 transition-all duration-200"
                >
                  <div className="text-blue-600">{tool.icon}</div>
                  <span className="text-gray-800 font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};