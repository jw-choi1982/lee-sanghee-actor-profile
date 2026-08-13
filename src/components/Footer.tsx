import { Mail, Phone } from "lucide-react";

const CONTACT_LINKS = [
  { icon: Mail, label: "09sheis@gmail.com", href: "mailto:09sheis@gmail.com" },
  { icon: Phone, label: "010-6394-9982", href: "tel:010-6394-9982" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">문의</h2>
        <p className="mt-3 max-w-xl text-white/60">
          작품 및 광고 섭외 관련 문의는 아래 연락처로 부탁드립니다.
        </p>

        <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-10">
          {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Icon size={18} />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-xs text-white/30">
          © {new Date().getFullYear()} 이상희. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
