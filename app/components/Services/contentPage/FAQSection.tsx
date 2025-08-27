'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { question: 'Why Use Lorem Ipsum?', answer: 'Lorem ipsum is simply dummy text used in printing and typesetting industry.' },
  { question: 'Why Use Lorem Ipsum?', answer: 'Lorem ipsum is simply dummy text used in printing and typesetting industry.' },
  { question: 'Why Use Lorem Ipsum?', answer: 'Lorem ipsum is simply dummy text used in printing and typesetting industry.' },
  { question: 'Why Use Lorem Ipsum?', answer: 'Lorem ipsum is simply dummy text used in printing and typesetting industry.' },
  { question: 'Why Use Lorem Ipsum?', answer: 'Lorem ipsum is simply dummy text used in printing and typesetting industry.' },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-cover bg-center" style={{ backgroundImage: `url('/faqBG.png')` }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D2D63] mb-10 font-body">Frequently Asked Questions</h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-md shadow-sm">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-[#0D2D63] font-semibold text-lg focus:outline-none font-body"
                onClick={() => toggle(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus size={20} className="text-[#0D2D63]" />
                ) : (
                  <Plus size={20} className="text-[#0D2D63]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm transition-all duration-300 ease-in-out font-sans">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
