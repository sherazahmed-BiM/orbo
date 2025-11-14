import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const projects = [
  {
    id: 1,
    name: 'PROJECT 1',
    title: 'DataFlow — Real-Time Analytics',
    description: 'Deployed an AI analytics engine that processes millions of data points in real-time, enabling instant insights and predictive modeling.',
    image: 'https://images.pexels.com/photos/8439036/pexels-photo-8439036.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    stats: [
      { value: '35%', label: 'Faster insights' },
      { value: '5x', label: 'Scale improvement' }
    ]
  },
  {
    id: 2,
    name: 'PROJECT 2',
    title: 'NeoMart — Smart Product Recommendations',
    description: 'Integrated AI-driven product recommendations based on real-time user behavior and historical data.',
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    stats: [
      { value: '22%', label: 'Boosted order value' },
      { value: '18%', label: 'Reduced cart dropoff' }
    ]
  },
  {
    id: 3,
    name: 'PROJECT 3',
    title: 'SecureAI — Intelligent Threat Detection',
    description: 'Advanced machine learning model that identifies and prevents security threats with 99.8% accuracy, protecting thousands of users daily.',
    image: 'https://images.pexels.com/photos/3561258/pexels-photo-3561258.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    stats: [
      { value: '99.8%', label: 'Detection accuracy' },
      { value: '50ms', label: 'Response time' }
    ]
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState(1);
  const activeProject = projects.find(p => p.id === activeTab);

  return (
    <section className="relative bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animationType="fade-up">
          <div className="text-center mb-20">
            <ScrollAnimation animationType="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-gray-700" strokeWidth={2} />
                <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
              Projects
            </span>
          </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-up" delay={1}>
              <h2 className="text-6xl font-bold text-gray-900 mb-4">
                Proven Impact & Results
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-up" delay={2}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore projects that reflect our AI expertise & real world impact
              </p>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fade-up" delay={1}>
          <div className="space-y-8">
          <div className="flex justify-center gap-4 animate-fade-in-delay-3">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-500 transform ${
                  activeTab === project.id
                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                }`}
                style={{
                  animation: `slide-down 0.6s ease-out ${0.1 + idx * 0.1}s backwards`
                }}
              >
                {project.name}
              </button>
            ))}
          </div>

          {activeProject && (
            <div
              key={activeProject.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-content-fade-in"
            >
              <div className="group relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="space-y-6 animate-text-fade-up">
                <div className="flex items-baseline gap-3">
                  <span className="text-7xl font-bold text-gray-200 animate-number-fade-in">
                    {String(activeProject.id).padStart(2, '0')}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-4xl font-bold text-gray-900 animate-title-fade-in">
                    {activeProject.title}
                  </h3>

                  <p className="text-lg text-gray-600 font-light leading-relaxed animate-description-fade-in">
                    {activeProject.description}
                  </p>
                </div>

                <div className="pt-4 flex gap-4">
                  {activeProject.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="group/stat flex-1 px-6 py-4 bg-gray-50 rounded-full hover:bg-gray-900 transition-all duration-500 hover:shadow-lg hover:scale-105 cursor-default"
                      style={{
                        animation: `stats-pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + idx * 0.1}s backwards`
                      }}
                    >
                      <div className="text-2xl font-bold text-gray-900 group-hover/stat:text-white transition-colors duration-500 animate-pulse-stats">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 group-hover/stat:text-gray-300 transition-colors duration-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
