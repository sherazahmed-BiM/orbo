import { MessageCircle, Zap, Settings, AlertCircle, TrendingUp } from 'lucide-react';

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6 animate-fade-in">
            <Zap className="w-4 h-4 text-gray-700" strokeWidth={2} />
            <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
              Services
            </span>
          </div>

          <h2 className="text-6xl font-bold text-gray-900 mb-4 animate-fade-in-delay-1">
            Our AI-Driven Services
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay-2">
            Leverage AI features that boost performance to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-delay-3">
          <ServiceCard1 />
          <ServiceCard2 />
          <ServiceCard3 />
          <ServiceCard4 />
        </div>
      </div>
    </section>
  );
}

function ServiceCard1() {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full overflow-hidden">
      <div className="h-40 flex items-center justify-center mb-6 relative">
        <div className="absolute w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-200 rounded-full blur-xl opacity-30 animate-pulse"></div>

        <div className="relative flex items-center justify-center">
          <TrendingUp className="w-12 h-12 text-gray-700 animate-float" strokeWidth={1.5} />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Strategy Consulting</h3>
      <p className="text-gray-600 font-light leading-relaxed">
        Get expert guidance to implement AI solutions that drive business growth.
      </p>
    </div>
  );
}

function ServiceCard2() {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
          <div className="w-4 h-4 bg-gray-600 rounded"></div>
          <input
            type="text"
            placeholder="Enter your prompt..."
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 flex-1 outline-none"
            readOnly
          />
          <div className="w-1 h-4 bg-gray-400 animate-blink"></div>
        </div>

        <div className="space-y-2">
          {['Continue writing', 'Fix spelling', 'Explain in detail'].map((suggestion, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all animate-slide-in-suggestion"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <span className="text-sm text-gray-600">{suggestion}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-2">
          <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg font-medium hover:bg-gray-800 transition-all active:scale-95">
            Generate
          </button>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">Content Generation</h3>
      <p className="text-gray-600 font-light leading-relaxed">
        We provide seamless content creation solutions that generate captivating, high-quality content in line with your brand's voice.
      </p>
    </div>
  );
}

function ServiceCard3() {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3 animate-message-slide" style={{ animationDelay: '0s' }}>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"></div>
          <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
            <p className="text-sm text-gray-700">Suggest a Zoom meeting</p>
          </div>
        </div>

        <div className="flex items-start gap-3 justify-end animate-message-slide" style={{ animationDelay: '0.1s' }}>
          <div className="bg-gray-900 text-white rounded-lg p-3 max-w-xs">
            <p className="text-sm">Yes, let's schedule</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0"></div>
        </div>

        <div className="flex items-start gap-3 animate-message-slide" style={{ animationDelay: '0.2s' }}>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"></div>
          <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
            <p className="text-sm text-gray-700">Perfect! Meeting set.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-3">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 bg-gray-100 rounded-lg text-sm outline-none focus:bg-gray-50 transition-colors"
          readOnly
        />
        <button className="px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all">
          <MessageCircle className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">AI-Powered Chatbots</h3>
      <p className="text-gray-600 font-light leading-relaxed">
        We develop AI-driven chatbots with advanced cognitive technologies to elevate customer support and automate business operations.
      </p>
    </div>
  );
}

function ServiceCard4() {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
      <div className="h-40 flex items-center justify-center mb-6 relative">
        <div className="absolute w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-md"></div>

        <div className="relative w-28 h-28 flex items-center justify-center">
          <Settings className="w-12 h-12 text-gray-700 animate-pulse-slow" strokeWidth={1.5} />

          {[
            { icon: Zap, delay: 0 },
            { icon: AlertCircle, delay: 0.3 },
            { icon: TrendingUp, delay: 0.6 },
            { icon: MessageCircle, delay: 0.9 },
          ].map((item, idx) => {
            const angle = (idx / 4) * 360;
            return (
              <div
                key={idx}
                className="absolute w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center group/icon hover:scale-110 transition-transform cursor-pointer"
                style={{
                  animation: `orbit 8s linear infinite`,
                  animationDelay: `${item.delay}s`,
                  '--angle': `${angle}deg`,
                } as React.CSSProperties & { '--angle': string }}
              >
                <item.icon className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
              </div>
            );
          })}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">Automated Workflows</h3>
      <p className="text-gray-600 font-light leading-relaxed">
        Automate workflows to streamline tasks, boost efficiency, and save time.
      </p>
    </div>
  );
}
