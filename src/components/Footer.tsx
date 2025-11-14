import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white py-32 overflow-hidden">
      {/* Wavy background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.03) 2px,
            rgba(0, 0, 0, 0.03) 4px
          )`,
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Main Footer Content - Large Sphere */}
        <div className="relative bg-white/80 backdrop-blur-xl rounded-full p-16 md:p-24 shadow-2xl border border-gray-100 mb-16">
          <div className="flex flex-col items-center text-center">
            {/* Social Media Icons - Top Left */}
            <div className="absolute top-8 left-8 flex items-center gap-3">
              <SocialIcon href="#" icon="x" />
              <SocialIcon href="#" icon="instagram" />
              <SocialIcon href="#" icon="linkedin" />
            </div>

            {/* Logo */}
            <div className="mb-8">
              <div className="w-20 h-20 relative mx-auto mb-6">
                <div className="absolute inset-0 bg-gray-900 rounded-full border-4 border-white shadow-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-10 h-10">
                    {/* Two overlapping right-pointing arrows */}
                    <svg className="absolute inset-0 text-white" fill="currentColor" viewBox="0 0 24 24" style={{ transform: 'translateX(-2px)' }}>
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                    <svg className="absolute inset-0 text-white" fill="currentColor" viewBox="0 0 24 24" style={{ transform: 'translateX(2px)', opacity: 0.8 }}>
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ORB AI Text */}
            <h2 className="text-7xl md:text-8xl font-bold mb-4">
              <span className="text-gray-900">ORB</span>{' '}
              <span className="text-gray-600">AI</span>
            </h2>

            {/* Tagline */}
            <p className="text-xl text-gray-600 mb-12 max-w-md">
              Next-gen AI systems, built for tomorrow's innovators
            </p>

            {/* Get Started Button */}
            <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1 shadow-lg flex items-center gap-2">
              Get Started
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-8 text-gray-700">
          <a href="#features" className="underline hover:text-gray-900 transition-colors font-medium">
            Features
          </a>
          <a href="#contact" className="underline hover:text-gray-900 transition-colors font-medium">
            Contact
          </a>
          <a href="#projects" className="underline hover:text-gray-900 transition-colors font-medium">
            Projects
          </a>
          <a href="#updates" className="underline hover:text-gray-900 transition-colors font-medium">
            Updates
          </a>
          <a href="#privacy" className="underline hover:text-gray-900 transition-colors font-medium">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}

interface SocialIconProps {
  href: string;
  icon: 'x' | 'instagram' | 'linkedin';
}

function SocialIcon({ href, icon }: SocialIconProps) {
  const getIcon = () => {
    switch (icon) {
      case 'x':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
    }
  };

  return (
    <a
      href={href}
      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-700 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all border border-gray-100"
      aria-label={icon}
    >
      {getIcon()}
    </a>
  );
}

