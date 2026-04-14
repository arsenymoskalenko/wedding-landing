import { HeartHandshake } from 'lucide-react';
import { formats } from '../../data/landing';

export function Formats() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted-gold)]">Сценарии</p>
          <h2
            className="mt-3 text-4xl text-[var(--graphite)] md:text-6xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Лендинг быстро объясняет, для каких свадеб подходит площадка
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {formats.map((format) => (
            <article
              key={format.title}
              className="flex h-full flex-col rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_22px_50px_rgba(58,58,60,0.05)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cream)]">
                <HeartHandshake className="h-5 w-5 text-[var(--muted-gold)]" />
              </div>
              <p className="text-sm uppercase tracking-[0.18em] text-black/45">{format.capacity}</p>
              <h3
                className="mt-3 text-3xl text-[var(--graphite)]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                {format.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-black/65">{format.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
