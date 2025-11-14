import { Zap, Settings, TrendingUp, MessageCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function Features() {
  return (
    <section className="relative bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animationType="fade-up">
          <div className="text-center mb-20">
            <ScrollAnimation animationType="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                <Zap className="w-4 h-4 text-gray-700" strokeWidth={2} />
                <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
                  Features
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-up" delay={1}>
              <h2 className="text-6xl font-bold text-gray-900 mb-4">
                All features in 1 tool
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-up" delay={2}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover features that simplify workflows & grow your business.
              </p>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fade-up" delay={1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <FeatureCard
            title="Cutting-Edge AI"
            description="Deploy AI solutions that adapt quickly, learn fast, and scale with your business needs."
            icon="ai"
            imagePosition="left"
            imageSrc="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
          />

          <FeatureCard
            title="Automated Workflows"
            description="Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams and projects."
            icon="gear"
            imagePosition="right"
            imageSrc="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
          />

          <FeatureCard
            title="Insightful Analytics"
            description="Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth."
            icon="analytics"
            imagePosition="none"
          />

          <FeatureCard
            title="AI-Powered Support"
            description="Enhance customer experience with AI-driven virtual assistants available for support and engagement."
            icon="support"
            imagePosition="left"
            imageSrc="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
          />
        </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fade-up" delay={3}>
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1 shadow-lg">
              Get Started
            </button>

            <button className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg hover:-translate-y-1">
              See Our Services
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: 'ai' | 'gear' | 'analytics' | 'support';
  imagePosition: 'left' | 'right' | 'none';
  imageSrc?: string;
}

function FeatureCard({ title, description, icon, imagePosition, imageSrc }: FeatureCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'ai':
        return <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-600 rounded-xl flex items-center justify-center text-white font-bold">X</div>;
      case 'gear':
        return <Settings className="w-6 h-6 text-gray-700" strokeWidth={1.5} />;
      case 'analytics':
        return <TrendingUp className="w-6 h-6 text-gray-700" strokeWidth={1.5} />;
      case 'support':
        return <MessageCircle className="w-6 h-6 text-gray-700" strokeWidth={1.5} />;
      default:
        return null;
    }
  };

  if (imagePosition === 'none') {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
            {getIcon(icon)}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 font-light leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  const imageEl = (
    <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className={`flex gap-6 items-start ${imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="flex-1">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 shadow-sm">
            {getIcon(icon)}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 font-light leading-relaxed">{description}</p>
        </div>

        <div className="w-48 flex-shrink-0">
          {imageEl}
        </div>
      </div>
    </div>
  );
}
