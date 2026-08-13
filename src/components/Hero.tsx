import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden bg-neutral-950"
    >
      <Image
        src="/images/hope-hero.jpg"
        alt="영화 <호프> 속 이상희"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">
        <p className="mb-3 text-sm tracking-[0.3em] text-white/60 uppercase">
          Actor
        </p>
        <h1 className="text-5xl font-bold text-white sm:text-7xl">이상희</h1>
        <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          영화 &lt;호프&gt;의 낙연으로, 연기로 인물의 순간을 살아내는
          배우입니다.
        </p>
      </div>

      <a
        href="#profile"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
        aria-label="아래로 스크롤"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
