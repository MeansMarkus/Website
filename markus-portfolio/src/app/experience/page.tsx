import { experience } from "@/config/resume";

export const metadata = {
  title: "Experience",
  description: "Roles and impact",
};

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Experience</h1>
      <div className="space-y-6">
        {experience.map((item) => (
          <article key={item.company} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-medium">{item.role} · {item.company}</h2>
              <div className="text-sm text-black/60 dark:text-white/60">{item.start} – {item.end}</div>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-black/80 dark:text-white/80">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {item.stack && item.stack.length > 0 && (
              <div className="mt-3 text-xs text-black/60 dark:text-white/60">{item.stack.join(" · ")}</div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
