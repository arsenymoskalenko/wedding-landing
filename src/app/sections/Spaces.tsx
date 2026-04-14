import { spaces } from '../../data/landing';

export function Spaces() {
  return (
    <section id="spaces" className="bg-[var(--graphite)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted-gold)]">Площадки</p>
            <h2
              className="mt-3 text-4xl md:text-6xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              Вместо тяжелого каталога оставляем несколько выразительных карточек
            </h2>
          </div>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-full border border-white/18 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-white/8"
          >
            Подобрать по дате и бюджету
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {spaces.map((space, index) => (
            <article key={space.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6">
              <div
                className={`h-72 ${
                  index === 1
                    ? 'bg-[linear-gradient(135deg,_rgba(201,168,124,0.55),_rgba(58,58,60,0.38))]'
                    : 'bg-[linear-gradient(135deg,_rgba(254,253,251,0.18),_rgba(212,197,185,0.22))]'
                }`}
              />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-white/45">{space.details}</p>
                <h3
                  className="mt-3 text-3xl"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
                >
                  {space.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/74">{space.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
