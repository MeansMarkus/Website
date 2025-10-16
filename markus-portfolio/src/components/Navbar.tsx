import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-backdrop-blur:bg-white/60 bg-white/70 dark:bg-black/30 border-b border-black/10 dark:border-white/10">
      <div className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold tracking-tight">Markus Means</Link>
          <nav className="hidden md:flex items-center gap-5 text-sm text-black/70 dark:text-white/70">
            <Link href="/projects" className="hover:underline underline-offset-4">Projects</Link>
            <Link href="/experience" className="hover:underline underline-offset-4">Experience</Link>
            <Link href="/skills" className="hover:underline underline-offset-4">Skills</Link>
            <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/MeansMarkus" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5">
            <GithubIcon className="h-5 w-5"/>
          </a>
          <a href="https://www.linkedin.com/in/markus-means-05408a229/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5">
            <LinkedinIcon className="h-5 w-5"/>
          </a>
          <a href="mailto:markusmeansswe@gmail.com" aria-label="Email" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5">
            <MailIcon className="h-5 w-5"/>
          </a>
          <ThemeToggle/>
        </div>
      </div>
    </header>
  );
}
