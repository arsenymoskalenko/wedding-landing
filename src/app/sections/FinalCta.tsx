export function FinalCta() {
  return (
    <section className="bg-[var(--graphite)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.05),_rgba(201,168,124,0.12))] p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted-gold)]">Финальный CTA</p>
            <h2
              className="mt-3 text-4xl md:text-6xl"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              Подберем подходящую площадку для вашей свадьбы
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/74">
              Оставьте короткую заявку, и мы предложим варианты под формат, дату и количество гостей.
            </p>
          </div>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input type="text" placeholder="Имя" className="rounded-2xl border border-white/14 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/38 focus:border-[var(--muted-gold)]" />
            <input type="tel" placeholder="Телефон" className="rounded-2xl border border-white/14 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/38 focus:border-[var(--muted-gold)]" />
            <input type="text" placeholder="Дата" className="rounded-2xl border border-white/14 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/38 focus:border-[var(--muted-gold)]" />
            <input type="text" placeholder="Количество гостей" className="rounded-2xl border border-white/14 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/38 focus:border-[var(--muted-gold)]" />
            <button
              type="submit"
              className="md:col-span-2 rounded-full bg-[var(--muted-gold)] px-6 py-4 text-sm font-medium tracking-wide text-white transition hover:brightness-110"
            >
              Получить варианты площадок
            </button>
          </form>

          <p className="mt-4 text-sm text-white/55">Заявка без обязательств, ответ в течение одного рабочего дня.</p>
        </div>
      </div>
    </section>
  );
}
