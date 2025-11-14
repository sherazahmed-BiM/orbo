import { ArrowLeftRight, Check, ArrowUpRight } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

export default function Comparison() {
  return (
    <section className="relative bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animationType="fade-up">
          <div className="text-center mb-20">
            <ScrollAnimation animationType="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
                <ArrowLeftRight className="w-4 h-4 text-gray-700" strokeWidth={2} />
                <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
                  COMPARISON
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-up" delay={1}>
              <h2 className="text-6xl font-bold text-gray-900 mb-4">
                Precision vs Basic
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-up" delay={2}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how our AI outperforms competitors with speed.
              </p>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fade-up" delay={1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* ORB AI Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col">
            <h3 className="text-4xl font-bold text-gray-900 mb-8">ORB AI</h3>
            
            <div className="flex-1 space-y-4 mb-8">
              <FeatureItem text="Automated workflows" />
              <FeatureItem text="Personalized AI-driven strategies" />
              <FeatureItem text="Data-backed, real-time insights" />
              <FeatureItem text="Scalable AI systems" />
              <FeatureItem text="Trained chatbots" />
              <FeatureItem text="Rapid, AI-generated content" />
              <FeatureItem text="Real time data analysis" />
            </div>

            <button className="w-full px-6 py-4 bg-gray-900 text-white rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
              Get Started
              <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>

          {/* Others Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col">
            <h3 className="text-4xl font-bold text-gray-900 mb-8">Others</h3>
            
            <div className="flex-1 space-y-4">
              <FeatureItem text="Manual workflows" />
              <FeatureItem text="Generic, one-size-fits-all solutions" />
              <FeatureItem text="Decision-making based on guesswork" />
              <FeatureItem text="Lacks scalability" />
              <FeatureItem text="Standard chatbots" />
              <FeatureItem text="Time-consuming content creation" />
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
      <span className="text-gray-700 text-lg leading-relaxed">{text}</span>
    </div>
  );
}

