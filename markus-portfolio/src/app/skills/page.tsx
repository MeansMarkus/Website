import { skills } from "@/config/resume";

export const metadata = {
  title: "Skills",
  description: "Technologies and strengths",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-black/10 dark:border-white/10 px-2 py-1 text-xs">
      {children}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Skills</h1>

      <div className="space-y-6">
        <Group title="Languages" items={skills.languages} />
        <Group title="Machine Learning" items={skills.ml} />
        <Group title="Web Development" items={skills.web} />
        <Group title="Databases & Tools" items={skills.dataTools} />
        <Group title="Development & Deployment" items={skills.devops} />
      </div>
    </section>
  );
}

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-lg font-medium mb-3">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </div>
  );
}
