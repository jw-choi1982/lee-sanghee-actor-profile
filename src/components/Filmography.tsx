"use client";

import { useMemo, useState } from "react";
import { filmography, type FilmographyCategory } from "@/data/filmography";

const ALL = "전체" as const;
type FilterValue = FilmographyCategory | typeof ALL;

const CATEGORIES = Array.from(
  new Set(filmography.map((item) => item.category))
) as FilmographyCategory[];

export default function Filmography() {
  const [filter, setFilter] = useState<FilterValue>(ALL);

  const items = useMemo(() => {
    const filtered =
      filter === ALL
        ? filmography
        : filmography.filter((item) => item.category === filter);
    return [...filtered].sort((a, b) => b.year - a.year);
  }, [filter]);

  return (
    <section id="filmography" className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">필모그래피</h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {([ALL, ...CATEGORIES] as FilterValue[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === cat
                  ? "border-white bg-white text-black"
                  : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="mt-10 divide-y divide-white/10 border-t border-white/10">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="w-16 shrink-0 text-sm text-white/40">
                {item.year}
              </span>
              <span className="w-14 shrink-0 text-xs tracking-wide text-white/50 uppercase">
                {item.category}
              </span>
              <div className="flex-1">
                <p className="font-medium text-white">{item.title}</p>
                <p className="text-sm text-white/50">{item.role}</p>
              </div>
              {item.note && (
                <span className="text-xs text-white/40">{item.note}</span>
              )}
            </li>
          ))}

          {items.length === 0 && (
            <li className="py-10 text-center text-sm text-white/40">
              해당 카테고리의 작품이 없습니다.
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
