import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import { personal } from "@/config/resume";

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          {personal.name}
        </h1>
        <p className="text-black/70 dark:text-white/70 max-w-[60ch]">
          {personal.headline}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition"
            href={`mailto:${personal.email}`}
          >
            <MailIcon className="h-4 w-4" />
            <span>{personal.email}</span>
          </a>
          <a
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition"
            href={personal.github}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition"
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card title="Projects" href="/projects">Featured work and case studies</Card>
        <Card title="Experience" href="/experience">Roles and impact</Card>
        <Card title="Skills" href="/skills">Technologies and strengths</Card>
        <Card title="Contact" href="/contact">Get in touch</Card>
      </div>
    </section>
  );
}

function Card({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition"
    >
      <div className="text-lg font-medium">{title}</div>
      <div className="text-sm text-black/70 dark:text-white/70">{children}</div>
    </Link>
  );
}
