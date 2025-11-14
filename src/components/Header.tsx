import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600 rounded-lg rotate-45 transform origin-center"></div>
            <div className="absolute inset-1 bg-white rounded-lg rotate-45 transform origin-center"></div>
          </div>
          <span className="text-xl font-bold text-gray-900">OrbAI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Features
          </a>
          <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Services
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Projects
          </a>
          <a href="#updates" className="px-4 py-2 bg-gray-100 rounded-full text-gray-900 hover:bg-gray-200 transition-all font-medium">
            Updates
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Contact
          </a>
        </div>

        <button className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
          Get Started
        </button>
      </nav>
    </header>
  );
}
