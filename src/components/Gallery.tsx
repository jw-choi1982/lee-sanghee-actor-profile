import Image from "next/image";

type GalleryItem = {
  src: string;
  caption: string;
  // 3:4 칸에 잘리면 안 되는 단체 사진은 전체를 보여주고 빈 공간은 흐린 배경으로 채움
  fit?: "contain";
};

const GALLERY_ITEMS: GalleryItem[] = [
  { src: "/images/shortbox-still-1.jpg", caption: "<숏박스> 출연 스틸" },
  { src: "/images/shortbox-still-2.jpg", caption: "<숏박스> 출연 스틸" },
  { src: "/images/hope-cast-wrap.jpg", caption: "<호프> 배우들과", fit: "contain" },
  { src: "/images/hope-rifle.jpg", caption: "<호프> 낙연 스틸" },
  { src: "/images/role-sageuk.jpg", caption: "사극 캐릭터 스틸" },
  { src: "/images/interview.jpg", caption: "인터뷰 컷" },
  { src: "/images/bts-cast.jpg", caption: "동료 배우들과" },
  { src: "/images/bts-hope-crew.jpg", caption: "<호프> 촬영팀과" },
  { src: "/images/squidgame-still.png", caption: "<오징어 게임> 스틸" },
  { src: "/images/chaser-still-1.png", caption: "<추격자> 스틸" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">비하인드 &amp; 스틸</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.src}
              className="group relative aspect-3/4 overflow-hidden rounded-lg"
            >
              {item.fit === "contain" && (
                <Image
                  src={item.src}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="scale-110 object-cover opacity-60 blur-xl"
                />
              )}
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className={`${
                  item.fit === "contain" ? "object-contain" : "object-cover"
                } transition-transform duration-300 group-hover:scale-105`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 text-xs text-white/80">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
