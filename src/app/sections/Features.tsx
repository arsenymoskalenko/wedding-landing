import { Check } from 'lucide-react';
import { features } from '../../data/landing';

export function Features() {
  return (
    <section className="bg-[var(--warm-white)] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted-gold)]">Почему это работает</p>
          <h2
            className="mt-3 text-4xl text-[var(--graphite)] md:text-6xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Теперь страница продает не аренду зала, а цельный сценарий свадебного дня
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-black/65">
            Вместо ощущения каталога страница показывает, как пространство подстраивается под
            ритм дня: от встречи гостей до вечерней программы и финального танца.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--cream)]">
                  <Check className="h-4 w-4 text-[var(--muted-gold)]" />
                </div>
                <p className="text-base leading-7 text-[var(--graphite)]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[linear-gradient(180deg,_rgba(212,197,185,0.72),_rgba(254,253,251,0.92))] p-6 md:translate-y-10">
            <div className="h-72 rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(58,58,60,0.18),_rgba(201,168,124,0.36))]" />
            <p className="mt-5 text-sm uppercase tracking-[0.22em] text-black/42">Editorial mood</p>
            <p className="mt-2 text-lg leading-7 text-[var(--graphite)]">
              Один сильный визуальный акцент работает лучше, чем галерея из одинаковых блоков.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-[2rem] bg-[var(--graphite)] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.22em] text-white/55">Soft luxury</p>
              <p className="mt-3 text-xl leading-8">
                Темный контраст, теплые акценты и больше воздуха делают страницу дороже без лишнего шума.
              </p>
            </div>
            <div className="rounded-[2rem] border border-black/8 bg-[var(--cream)] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-black/42">Mobile first</p>
              <p className="mt-3 text-xl leading-8 text-[var(--graphite)]">
                Оффер, ключевые выгоды и форма видны сразу, а не прячутся под длинным скроллом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
