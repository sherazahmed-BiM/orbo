import { Star, Quote } from 'lucide-react';

const testimonialCards = [
  {
    id: 1,
    quote: 'We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us.',
    name: 'Brendan',
    role: 'Marketing Director at SmetaQ',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 2,
    quote: 'Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We\'re already seeing results.',
    name: 'Lena M',
    role: 'Manager at NovaTech',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 3,
    quote: 'From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction.',
    name: 'Eli R',
    role: 'COO at OmniFrame',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years of Experience' }
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="mb-4 animate-fade-in">
            <span className="text-xs font-medium text-gray-500 tracking-widest uppercase">
              Customers
            </span>
          </div>

          <h2 className="text-6xl font-bold text-gray-900 mb-6 animate-fade-in-delay-1">
            What Our Clients Say
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay-2">
            Join customers who trust AI to transform their business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="group bg-white rounded-3xl shadow-lg p-12 hover:shadow-xl transition-shadow duration-500 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl text-gray-900 leading-relaxed mb-8 font-light">
              Their{' '}
              <span className="text-gray-900 font-semibold">AI-driven approach</span>{' '}
              helped us reach the right audience and{' '}
              <span className="text-gray-900 font-semibold">grow faster</span>{' '}
              with smarter insights—streamlining our strategy, improving engagement, and{' '}
              <span className="text-gray-900 font-semibold">delivering results</span>{' '}
              we couldn't achieve before.
            </p>
            <Quote className="w-8 h-8 text-gray-900 opacity-30" strokeWidth={1.5} />
          </div>

          <div className="group relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Client testimonial"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonialCards.map((card, idx) => (
            <div
              key={card.id}
              className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${0.1 + (idx + 3) * 0.1}s` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" strokeWidth={0} />
                ))}
              </div>

              <p className="text-gray-700 font-light leading-relaxed mb-8 text-sm">
                {card.quote}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={card.avatar}
                  alt={card.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {card.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {card.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 py-12 border-t border-gray-100 animate-fade-in-delay-3">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center animate-stats-fade-in"
              style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
