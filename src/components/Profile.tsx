import Image from "next/image";
import { Cake, MapPin, Ruler, Clapperboard, Star } from "lucide-react";

const PROFILE_FACTS = [
  { icon: Cake, label: "생년월일", value: "1961. 06. 28" },
  { icon: MapPin, label: "출생지", value: "인천광역시" },
  { icon: Ruler, label: "신체", value: "167cm / 72kg" },
  { icon: Clapperboard, label: "데뷔", value: "2007년 <마이 파더>" },
];

const REPRESENTATIVE_WORKS = ["오징어 게임", "옥씨부인전", "호프"];

export default function Profile() {
  return (
    <section id="profile" className="bg-black px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[320px_1fr]">
        <div className="relative mx-auto aspect-3/4 w-full max-w-xs overflow-hidden rounded-xl lg:mx-0">
          <Image
            src="/images/profile-main.jpg"
            alt="이상희 프로필 사진"
            fill
            sizes="(min-width: 1024px) 320px, 320px"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">프로필</h2>
          <p className="mt-3 max-w-2xl text-white/60">
            영화 &lt;마이 파더&gt;로 데뷔한 이후 &lt;오징어 게임&gt;, &lt;이상한
            변호사 우영우&gt; 등 다양한 작품에서 인물의 생활감을 살린 연기로
            존재감을 남긴 배우 이상희입니다.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs tracking-wide text-white/50 uppercase">
              <Star size={14} className="text-amber-400" />
              대표작
            </span>
            {REPRESENTATIVE_WORKS.map((title) => (
              <span
                key={title}
                className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm text-amber-200"
              >
                {title}
              </span>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROFILE_FACTS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <Icon className="mb-4 text-white/50" size={22} />
                <dt className="text-xs tracking-wide text-white/50 uppercase">
                  {label}
                </dt>
                <dd className="mt-1 text-lg font-medium text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
