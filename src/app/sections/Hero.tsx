import { CalendarDays, ChevronDown, Phone } from 'lucide-react';
import { stats } from '../../data/landing';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(201,168,124,0.18),_transparent_35%),linear-gradient(135deg,_rgba(58,58,60,0.92),_rgba(58,58,60,0.78))] text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-y-0 left-[8%] w-px bg-white/20" />
        <div className="absolute inset-y-0 right-[12%] w-px bg-white/10" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-16">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-white/70">
            Wedding venue in Moscow
          </p>
          <h1
            className="max-w-4xl text-5xl leading-none md:text-7xl lg:text-[5.5rem]"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Свадьба в стильном пространстве для вашего дня
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            Помогаем подобрать площадку по формату, количеству гостей и бюджету. Церемония,
            банкет и afterparty могут жить в одном месте без ощущения перегруженного каталога.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center rounded-full bg-[var(--muted-gold)] px-7 py-4 text-sm font-medium tracking-wide text-white transition hover:brightness-110"
            >
              Получить расчет
            </a>
            <a
              href="#spaces"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-7 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-white/14"
            >
              Посмотреть площадки
            </a>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item} className="rounded-3xl border border-white/12 bg-white/7 p-5 backdrop-blur-sm">
                <p className="text-sm leading-6 text-white/78">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-white/68">
            <span>2300+ проведенных событий</span>
            <span>Ответ в течение одного рабочего дня</span>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-[2rem] border border-white/12 bg-white p-6 text-[var(--graphite)] shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted-gold)]">
                  Быстрая заявка
                </p>
                <h2
                  className="mt-2 text-3xl"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
                >
                  Подберем площадку
                </h2>
              </div>
              <div className="rounded-full bg-[var(--cream)] p-3">
                <CalendarDays className="h-5 w-5 text-[var(--muted-gold)]" />
              </div>
            </div>

            <form id="lead-form" className="space-y-4">
              <input type="text" placeholder="Имя" className="w-full rounded-2xl border border-black/10 bg-[var(--warm-white)] px-4 py-3 outline-none transition focus:border-[var(--muted-gold)]" />
              <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full rounded-2xl border border-black/10 bg-[var(--warm-white)] px-4 py-3 outline-none transition focus:border-[var(--muted-gold)]" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Дата" className="w-full rounded-2xl border border-black/10 bg-[var(--warm-white)] px-4 py-3 outline-none transition focus:border-[var(--muted-gold)]" />
                <input type="text" placeholder="Гости" className="w-full rounded-2xl border border-black/10 bg-[var(--warm-white)] px-4 py-3 outline-none transition focus:border-[var(--muted-gold)]" />
              </div>
              <button type="submit" className="w-full rounded-full bg-[var(--graphite)] px-6 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-[var(--dark-wood)]">
                Получить подборку площадок
              </button>
              <p className="flex items-center justify-center gap-2 text-center text-sm text-black/55">
                <Phone className="h-4 w-4" />
                Перезвоним и предложим понятные варианты без лишнего давления
              </p>
            </form>
          </div>
        </div>
      </div>

      <a
        href="#trust"
        className="absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-2 text-sm text-white/64"
      >
        Листать
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}
