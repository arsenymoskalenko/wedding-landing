import { steps } from '../../data/landing';

export function Process() {
  return (
    <section className="bg-[var(--warm-white)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted-gold)]">Процесс</p>
          <h2
            className="mt-3 text-4xl text-[var(--graphite)] md:text-6xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Структура страницы мягко ведет посетителя к заявке без лишнего напряжения
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-[1.8rem] border border-black/8 bg-[var(--cream)] p-6">
              <p
                className="text-6xl text-[var(--muted-gold)]/35"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                0{index + 1}
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--graphite)]">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
