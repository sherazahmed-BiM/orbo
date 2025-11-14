export default function Testimonial() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-50 py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <blockquote className="mb-12 animate-fade-in-delay-1">
          <p className="text-5xl md:text-6xl font-light leading-relaxed text-gray-700">
            We harness your{' '}
            <span className="font-semibold text-gray-900">data</span>, understand your audience, and{' '}
            <span className="font-semibold text-gray-900">use AI</span> to help your brand rise above the noise.
            <br />
            The best part? <span className="font-semibold text-gray-900">We execute</span>, too.
          </p>
        </blockquote>

        <div className="flex items-center justify-center gap-4 animate-fade-in-delay-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-200 rounded-full blur-2xl opacity-40 scale-125"></div>
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
              alt="Founder"
              className="relative w-16 h-16 rounded-full object-cover shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            />
          </div>

          <div className="text-left">
            <p className="text-sm font-medium text-gray-600">Founder of ORB AI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
