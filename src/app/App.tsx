import { Atmosphere } from './sections/Atmosphere';
import { Faq } from './sections/Faq';
import { Features } from './sections/Features';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';
import { Formats } from './sections/Formats';
import { Hero } from './sections/Hero';
import { Process } from './sections/Process';
import { Spaces } from './sections/Spaces';
import { TrustBar } from './sections/TrustBar';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--cream)]">
      <Hero />
      <TrustBar />
      <Formats />
      <Features />
      <Spaces />
      <Atmosphere />
      <Process />
      <Faq />
      <FinalCta />
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[var(--graphite)]/95 p-4 backdrop-blur md:hidden">
        <a
          href="#lead-form"
          className="block rounded-full bg-[var(--muted-gold)] px-6 py-4 text-center text-sm font-medium tracking-wide text-white"
        >
          Получить расчет
        </a>
      </div>
    </div>
  );
}
