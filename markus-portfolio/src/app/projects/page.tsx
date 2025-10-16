import Link from "next/link";
import { projects } from "@/config/resume";

export const metadata = {
  title: "Projects",
  description: "Selected projects and case studies",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-medium">
                  <Link href={project.link} target="_blank" className="underline underline-offset-4">
                    {project.title}
                  </Link>
                </h2>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-black/80 dark:text-white/80">
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="text-xs shrink-0 text-black/60 dark:text-white/60">
                {project.stack.join(" · ")}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
