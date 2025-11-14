import { Zap, ArrowUpRight, Shield, MoreHorizontal } from 'lucide-react';

export default function Process() {
  return (
    <section className="relative bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 animate-fade-in">
            <Zap className="w-4 h-4 text-gray-700" strokeWidth={2} />
            <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
              Process
            </span>
          </div>

          <h2 className="text-6xl font-bold text-gray-900 mb-4 animate-fade-in-delay-1">
            Simple & Scalable
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay-2">
            A transparent process of collaboration and feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:row-span-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <ProcessCard1 />
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <ProcessCard2 />
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <ProcessCard3 />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard1() {
  return (
    <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm animate-float-gentle">
            <Zap className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
          </div>

          <button className="text-gray-400 hover:text-gray-600 transition-colors animate-pulse-dots">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Workflow Assessment
        </h3>

        <p className="text-gray-600 font-light leading-relaxed mb-8">
          We begin by examining your existing workflows to identify where AI can deliver the greatest impact.
        </p>

        <div className="mt-auto mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-divider-expand"></div>
        </div>

        <div className="flex items-end justify-between">
          <span className="text-8xl font-bold text-gray-200 group-hover:text-gray-300 transition-all duration-500 animate-number-scale">
            01
          </span>
        </div>
      </div>

      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div>
        <img
          src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
          alt="Workflow Assessment"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-image-fade-up"
        />
      </div>
    </div>
  );
}

function ProcessCard2() {
  return (
    <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform duration-500">
            <ArrowUpRight className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
          </div>

          <button className="text-gray-400 hover:text-gray-600 transition-colors animate-pulse-dots">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Deploy with Confidence
        </h3>

        <p className="text-gray-600 font-light leading-relaxed mb-6">
          Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.
        </p>

        <div className="mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-divider-expand"></div>
        </div>

        <div className="flex items-end justify-between mb-6">
          <span className="text-8xl font-bold text-gray-200 group-hover:text-gray-300 transition-all duration-500 animate-slide-left-reveal">
            02
          </span>
        </div>
      </div>

      <div className="relative h-64 overflow-hidden mt-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
        <img
          src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
          alt="Deploy with Confidence"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 animate-image-zoom-in"
        />
      </div>
    </div>
  );
}

function ProcessCard3() {
  return (
    <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm animate-pulse-gentle">
            <Shield className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
          </div>

          <button className="text-gray-400 hover:text-gray-600 transition-colors animate-pulse-dots">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ongoing Support & Optimization
        </h3>

        <p className="text-gray-600 font-light leading-relaxed mb-6">
          After deployment, we provide support and refine your AI systems to keep them performing at their best.
        </p>

        <div className="mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-divider-expand"></div>
        </div>

        <div className="flex items-end justify-between mb-6">
          <span className="text-8xl font-bold text-gray-200 group-hover:text-gray-300 transition-all duration-500 animate-bounce-scale">
            03
          </span>
        </div>
      </div>

      <div className="relative h-64 overflow-hidden mt-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
        <img
          src="https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
          alt="Ongoing Support"
          className="w-full h-full object-cover group-hover:scale-105 group-hover:translate-x-2 transition-all duration-700 animate-slide-right"
        />
      </div>
    </div>
  );
}
