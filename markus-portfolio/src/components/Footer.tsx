export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-8 mt-16 text-sm text-black/60 dark:text-white/60">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Markus Means</p>
        <p className="text-xs">Built with Next.js + Tailwind</p>
      </div>
    </footer>
  );
}
