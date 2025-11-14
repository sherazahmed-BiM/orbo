import { Zap, ArrowRight, Command } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="ripple-container">
          <div className="ripple"></div>
          <div className="ripple delay-1"></div>
          <div className="ripple delay-2"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-12 animate-fade-in">
          <Zap className="w-4 h-4 text-gray-700" strokeWidth={2} />
          <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
            AI Automation for Businesses
          </span>
        </div>

        <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in-delay-1">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 rounded-full blur-2xl opacity-30"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-white rounded-lg rotate-45 transform origin-center"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-gray-600 rounded-lg rotate-45 transform origin-center"></div>
              </div>
            </div>
          </div>

          <h1 className="text-7xl font-bold text-gray-900 tracking-tight">
            ORB AI
          </h1>
        </div>

        <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light animate-fade-in-delay-2">
          Custom AI solutions, built for the innovators of tomorrow
        </p>

        <div className="flex items-center justify-center gap-4 mb-16 animate-fade-in-delay-3">
          <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-gray-800 transition-all hover:shadow-2xl hover:-translate-y-1 shadow-lg">
            Get Template
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-xl hover:-translate-y-1">
            See Our Services
          </button>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-20 animate-fade-in-delay-4">
        <button className="px-5 py-3 bg-gray-900 text-white rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
          <Command className="w-4 h-4" />
          Get Orb AI
        </button>

        <div className="px-5 py-3 bg-white text-gray-700 rounded-full font-medium border border-gray-200 shadow-md flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
          Made in Framer
        </div>
      </div>
    </section>
  );
}
