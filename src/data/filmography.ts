export type FilmographyCategory = "영화" | "드라마";

export interface FilmographyItem {
  id: string;
  title: string;
  role: string;
  year: number;
  category: FilmographyCategory;
  note?: string;
}

export const filmography: FilmographyItem[] = [
  { id: "m1", title: "호프", role: "낙연", year: 2026, category: "영화", note: "조연" },
  { id: "m2", title: "승부", role: "박 영감", year: 2025, category: "영화" },
  { id: "m3", title: "열여덟, 어른이 되는 나이", role: "강유석", year: 2023, category: "영화", note: "주연" },
  { id: "d1", title: "이상한 변호사 우영우", role: "동동이", year: 2022, category: "드라마", note: "ENA" },
  { id: "m4", title: "이번엔 잘 되겠지", role: "이승수", year: 2021, category: "영화" },
  { id: "d2", title: "오징어 게임", role: "17번 도정수", year: 2021, category: "드라마", note: "Netflix" },
  { id: "m5", title: "청년은 살았다", role: "낚시가게 아저씨", year: 2020, category: "영화", note: "주연" },
  { id: "d3", title: "모두 다 쿵따리", role: "송씨", year: 2019, category: "드라마", note: "MBC" },
  { id: "m6", title: "1987", role: "강경사 아버지", year: 2017, category: "영화", note: "단역" },
  { id: "m7", title: "터널", role: "119 간부 (목소리)", year: 2016, category: "영화", note: "단역" },
  { id: "m8", title: "장례희망", role: "외삼촌", year: 2015, category: "영화", note: "주연" },
  { id: "m9", title: "수상한 그녀", role: "신발가게 주인", year: 2014, category: "영화", note: "조연" },
  { id: "m10", title: "밀수", role: "전파사 주인", year: 2023, category: "영화", note: "단역" },
  { id: "m11", title: "남한산성", role: "군사3", year: 2017, category: "영화", note: "단역" },
  { id: "m12", title: "도가니", role: "정비소 사장", year: 2011, category: "영화", note: "조연" },
  { id: "m13", title: "차우", role: "파출소장", year: 2009, category: "영화", note: "조연" },
  { id: "m14", title: "추격자", role: "경찰4", year: 2008, category: "영화", note: "단역" },
  { id: "m15", title: "마이 파더", role: "박씨", year: 2007, category: "영화", note: "데뷔작·조연" },
  { id: "d4", title: "무빙", role: "건물주", year: 2023, category: "드라마", note: "Disney+" },
  { id: "d5", title: "옥씨부인전", role: "개죽이", year: 2024, category: "드라마", note: "JTBC" },
];
