import { Star, Zap, TrendingUp, Users } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function WhyChooseUs() {
  const features = [
    'Scalable Solutions',
    'Personalized Experiences',
    'Cost Effective',
    'Real-Time Insights',
    'Automated Workflow',
    'Smart Integrations',
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animationType="fade-up">
          <div className="text-center mb-20">
            <ScrollAnimation animationType="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                <Star className="w-4 h-4 text-gray-700" strokeWidth={2} />
                <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
                  Benefits
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-up" delay={1}>
              <h2 className="text-6xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-up" delay={2}>
              <p className="text-xl text-gray-600">
                Partner with an AI agency delivering smart solutions.
              </p>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in-delay-3">
          <AnimatedCard
            title="Real-Time Analytics"
            subtitle="Stay ahead with accurate, real-time performance tracking."
            type="clock"
          />

          <AnimatedCard
            title="AI-Driven Growth"
            subtitle="Make smarter moves with accurate, real-time business insights."
            type="chart"
          />

          <AnimatedCard
            title="Sync in Real Time"
            subtitle="Connect with your team instantly to track progress and updates."
            type="users"
          />
        </div>

        <div className="relative overflow-hidden bg-white rounded-2xl py-6 shadow-sm border border-gray-100">
          <div className="flex animate-scroll">
            {[...features, ...features].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 whitespace-nowrap mx-2 hover:shadow-md transition-all"
              >
                <Zap className="w-4 h-4 text-gray-700" strokeWidth={2} />
                <span className="text-sm font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AnimatedCardProps {
  title: string;
  subtitle: string;
  type: 'clock' | 'chart' | 'users';
}

function AnimatedCard({ title, subtitle, type }: AnimatedCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="h-40 flex items-center justify-center mb-8">
        {type === 'clock' && <ClockAnimation />}
        {type === 'chart' && <ChartAnimation />}
        {type === 'users' && <UsersAnimation />}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 font-light">{subtitle}</p>
    </div>
  );
}

function ClockAnimation() {
  return (
    <div className="relative w-32 h-32">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full shadow-md"></div>

      <div className="absolute inset-2 rounded-full border-4 border-gray-200 flex items-center justify-center">
        <div className="absolute w-1 h-1 bg-gray-900 rounded-full"></div>

        <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <line x1="50" y1="50" x2="50" y2="20" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 90, 180, 270].map((angle) => (
            <div
              key={angle}
              className="absolute w-1.5 h-1.5 bg-gray-400 rounded-full"
              style={{
                transform: `rotate(${angle}deg) translateY(-54px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChartAnimation() {
  const bars = [
    { height: '40%', label: '10% Cost' },
    { height: '60%', label: 'AFTER' },
    { height: '85%', label: '' },
    { height: '80%', label: '80% Automation' },
  ];

  return (
    <div className="flex items-end justify-center gap-4 h-32 relative">
      {bars.map((bar, idx) => (
        <div
          key={idx}
          className="group/bar flex flex-col items-center"
          style={{
            animation: `pulse-bar 2s ease-in-out infinite`,
            animationDelay: `${idx * 0.15}s`,
          }}
        >
          <div className="absolute -top-8 text-xs font-semibold text-gray-600 whitespace-nowrap opacity-0 group-hover/bar:opacity-100 transition-opacity">
            {bar.label}
          </div>

          <div
            className="w-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-md shadow-md transition-all"
            style={{
              height: bar.height,
              minHeight: '12px',
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

function UsersAnimation() {
  const positions = [
    { x: -30, y: -20 },
    { x: 35, y: -15 },
    { x: 0, y: 30 },
  ];

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full shadow-md flex items-center justify-center">
        <div className="w-12 h-12 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      {positions.map((pos, idx) => (
        <div
          key={idx}
          className="absolute w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-200"
          style={{
            animation: `float-user 4s ease-in-out infinite`,
            animationDelay: `${idx * 0.5}s`,
            transform: `translate(${pos.x}px, ${pos.y}px)`,
          }}
        >
          <Users className="w-4 h-4 text-gray-600" strokeWidth={2} />
        </div>
      ))}
    </div>
  );
}
