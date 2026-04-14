import { MapPin, Settings2, Sparkles, UtensilsCrossed, Users, WandSparkles } from 'lucide-react';
import { trustItems } from '../../data/landing';

const icons = [MapPin, Users, Sparkles, Settings2, UtensilsCrossed, WandSparkles];

export function TrustBar() {
  return (
    <section id="trust" className="bg-[var(--warm-white)] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {trustItems.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item}
                className="rounded-[1.75rem] border border-black/6 bg-[var(--cream)] p-5 text-center shadow-[0_16px_30px_rgba(58,58,60,0.04)]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <Icon className="h-5 w-5 text-[var(--muted-gold)]" />
                </div>
                <p className="text-sm leading-6 text-[var(--graphite)]">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
