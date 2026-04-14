import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../../data/landing';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[var(--cream)] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted-gold)]">FAQ</p>
          <h2
            className="mt-3 text-4xl text-[var(--graphite)] md:text-6xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Частые вопросы
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <article key={item.question} className="rounded-[1.6rem] border border-black/8 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg leading-7 text-[var(--graphite)]">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--muted-gold)] transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen ? (
                  <div className="px-6 pb-6 text-base leading-7 text-black/62">{item.answer}</div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
