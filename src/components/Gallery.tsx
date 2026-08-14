import Image from "next/image";

const GALLERY_ITEMS = [
  { src: "/images/hope-rifle.jpg", caption: "<호프> 낙연 스틸" },
  { src: "/images/role-sageuk.jpg", caption: "사극 캐릭터 스틸" },
  { src: "/images/role-chef.jpg", caption: "배역 스틸" },
  { src: "/images/selfie-coral.jpg", caption: "<호프> 촬영 중" },
  { src: "/images/interview.jpg", caption: "인터뷰 컷" },
  { src: "/images/bts-cast.jpg", caption: "동료 배우들과" },
  { src: "/images/bts-hope-crew.jpg", caption: "<호프> 촬영팀과" },
  { src: "/images/squidgame-still.png", caption: "<오징어 게임> 스틸" },
  { src: "/images/chaser-still-1.png", caption: "<추격자> 스틸" },
  { src: "/images/chaser-still-2.png", caption: "<추격자> 스틸" },
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
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
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
