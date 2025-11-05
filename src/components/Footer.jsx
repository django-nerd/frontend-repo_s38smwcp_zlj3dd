export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0f] pb-12 pt-8 text-center text-sm text-zinc-400">
      <div className="mx-auto max-w-7xl px-6">
        <p>
          © {new Date().getFullYear()} The Premium Brand Marketplace — Built for a luxurious, trustworthy shopping experience.
        </p>
      </div>
    </footer>
  );
}
