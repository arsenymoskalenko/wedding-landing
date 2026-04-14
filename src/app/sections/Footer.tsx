export function Footer() {
  return (
    <footer className="bg-[var(--dark-wood)] py-10 text-white/72">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <p
            className="text-2xl text-white"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            Wedding Space
          </p>
          <p className="mt-2 max-w-md leading-6">
            Облегченная структура лендинга для премиальной свадебной площадки: ясный оффер, меньше шума и сильнее фокус на заявке.
          </p>
        </div>
        <div className="space-y-1">
          <p>+7 (495) 123-45-67</p>
          <p>hello@weddingspace.ru</p>
          <p>Москва, центр города</p>
        </div>
      </div>
    </footer>
  );
}
