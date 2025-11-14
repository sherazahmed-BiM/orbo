import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Mail } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer: 'We specialize in AI solutions, including machine learning models, automation, chatbots, predictive analytics, and consulting tailored to your business needs',
  },
  {
    question: 'How long does it take to develop an AI solution?',
    answer: 'The timeline varies depending on the complexity and scope of your project. Simple solutions can take a few weeks, while more complex implementations may take several months. We work closely with you to establish realistic timelines and milestones.',
  },
  {
    question: 'Do I need technical expertise to work with you?',
    answer: 'Not at all! We work with businesses of all technical levels. Our team handles all the technical aspects while keeping you informed and involved in the decision-making process.',
  },
  {
    question: 'Is my data safe when working with your agency?',
    answer: 'Absolutely. We take data security seriously and follow industry best practices. We use encryption, secure storage, and comply with all relevant data protection regulations to ensure your information remains confidential and protected.',
  },
  {
    question: 'Can AI really help my business grow?',
    answer: 'Yes! AI can help automate repetitive tasks, provide valuable insights from your data, improve customer experiences, and optimize operations. Many of our clients see significant improvements in efficiency, cost savings, and revenue growth.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative bg-gray-50 py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <HelpCircle className="w-4 h-4 text-gray-700" strokeWidth={2} />
            <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
              FAQS
            </span>
          </div>

          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            Questions? Answers!
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find Some quick answers to the most common questions.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-700 flex-shrink-0" strokeWidth={2} />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-700 flex-shrink-0" strokeWidth={2} />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-gray-700">
            <Mail className="w-5 h-5" strokeWidth={2} />
            <span className="text-lg">
              Feel free to mail us for any enquiries :{' '}
              <a
                href="mailto:orbai@support.com"
                className="underline hover:text-gray-900 transition-colors"
              >
                orbai@support.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

