export default function Footer() {
  return (
    <footer className="bg-black px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} 이상희. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
