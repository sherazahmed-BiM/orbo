import { useState, useEffect } from 'react';
import { Star, Zap, Users } from 'lucide-react';
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

function AnimatedNumber({ value, suffix, delay = 0 }: { value: number; suffix: string; delay?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    const timer = setTimeout(() => {
      const duration = 1500; // 1.5 seconds
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;

      let current = 0;
      interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          if (interval) clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [value, delay]);

  return (
    <span>
      {count}% {suffix}
    </span>
  );
}

function ChartAnimation() {
  const containerHeight = 160; // h-40 = 160px
  const bars = [
    { heightPercent: 35, label: 'AFTER', labelPosition: 'left', animated: true },
    { heightPercent: 45 },
    { heightPercent: 85, label: '80% Automation', labelPosition: 'top', animated: true, number: 80 },
    { heightPercent: 65, label: '10% Cost', labelPosition: 'right', animated: true, number: 10 },
    { heightPercent: 40 },
  ];

  return (
    <div className="flex items-end justify-center gap-3 h-40 relative px-4">
      {bars.map((bar, idx) => {
        const barHeight = (containerHeight * bar.heightPercent) / 100;
        return (
          <div
            key={idx}
            className="group/bar flex flex-col items-center relative"
          >
            {/* Top label */}
            {bar.labelPosition === 'top' && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-lg px-3 py-1.5 shadow-md text-xs font-semibold text-gray-900 whitespace-nowrap z-10">
                {bar.number !== undefined ? (
                  <AnimatedNumber value={bar.number} suffix="Automation" delay={300} />
                ) : (
                  bar.label
                )}
              </div>
            )}
            
            {/* Right label */}
            {bar.labelPosition === 'right' && (
              <div className="absolute -top-8 right-0 bg-white rounded-lg px-3 py-1.5 shadow-md text-xs font-semibold text-gray-900 whitespace-nowrap z-10">
                {bar.number !== undefined ? (
                  <AnimatedNumber value={bar.number} suffix="Cost" delay={500} />
                ) : (
                  bar.label
                )}
              </div>
            )}

            <div className="relative flex items-end w-full justify-center">
              {/* Left label (vertical text) */}
              {bar.labelPosition === 'left' && (
                <div 
                  className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center"
                  style={{
                    animation: bar.animated ? 'fade-in-slide 1s ease-out forwards' : 'none',
                    animationDelay: '0.3s',
                    opacity: bar.animated ? 0 : 1,
                  }}
                >
                  <span className="text-xs font-bold text-gray-900 whitespace-nowrap">{bar.label}</span>
                </div>
              )}
              
              <div
                className="w-10 bg-white rounded-t-md shadow-lg border border-gray-200"
                style={{
                  height: `${barHeight}px`,
                  minHeight: '30px',
                }}
              ></div>
            </div>
          </div>
        );
      })}
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
      {/* Signal waves animation */}
      {[0, 1, 2].map((ring) => (
        <div
          key={ring}
          className="absolute inset-0 rounded-full border-2 border-blue-500/40"
          style={{
            animation: `signal-pulse 2s ease-out infinite`,
            animationDelay: `${ring * 0.4}s`,
            transform: 'scale(0.8)',
            opacity: 0.6,
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full shadow-md flex items-center justify-center z-10">
        <div className="w-12 h-12 relative z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
            {/* Small pulsing dot in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-2 h-2 bg-blue-500 rounded-full"
                style={{
                  animation: 'signal-pulse-dot 1.5s ease-out infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {positions.map((pos, idx) => (
        <div
          key={idx}
          className="absolute w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-200 z-10"
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
