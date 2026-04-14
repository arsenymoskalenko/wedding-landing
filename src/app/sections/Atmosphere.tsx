import { galleryNotes } from '../../data/landing';

export function Atmosphere() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted-gold)]">Атмосфера</p>
          <h2
            className="mt-3 text-4xl text-[var(--graphite)] md:text-6xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Для легкого лендинга один сильный визуальный блок работает лучше, чем множество похожих секций
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2.2rem] bg-[linear-gradient(135deg,_rgba(58,58,60,0.9),_rgba(201,168,124,0.42))] p-8 text-white md:p-12">
            <div className="h-80 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(160deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))]" />
            <p className="mt-8 max-w-2xl text-2xl leading-10 md:text-3xl">
              Премиальное ощущение здесь строится на типографике, ритме и воздухе, а не на наборе случайных эффектов.
            </p>
          </div>

          <div className="grid gap-4">
            {galleryNotes.map((item, index) => (
              <div
                key={item}
                className={`rounded-[1.8rem] p-6 ${
                  index === 1 ? 'bg-white' : 'bg-[var(--warm-white)]'
                } border border-black/8`}
              >
                <div className="mb-4 h-28 rounded-[1.3rem] bg-[linear-gradient(135deg,_rgba(212,197,185,0.58),_rgba(254,253,251,0.82))]" />
                <p className="text-lg leading-8 text-[var(--graphite)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
