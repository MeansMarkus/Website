import { personal } from "@/config/resume";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";

export const metadata = {
  title: "Contact",
  description: "Get in touch",
};

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="text-black/70 dark:text-white/70 max-w-[60ch]">
        I’m open to internships, freelance, and collaboration opportunities. The fastest way to reach me is email.
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
      <div className="text-sm text-black/60 dark:text-white/60">
        <div>{personal.address}</div>
        <div>{personal.phone}</div>
      </div>
    </section>
  );
}
