import { AppWindow, Globe, Rocket, Smartphone } from "lucide-react";

import { ExternalLink } from "./external-link";

const stack = [
  {
    name: "Next.js",
    description: "React framework, static export",
    href: "https://nextjs.org/docs",
    icon: Globe,
  },
  {
    name: "Tauri",
    description: "Desktop: Linux, macOS, Windows",
    href: "https://v2.tauri.app",
    icon: AppWindow,
  },
  {
    name: "Capacitor",
    description: "Mobile: Android",
    href: "https://capacitorjs.com/docs",
    icon: Smartphone,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10 p-8 text-center text-neutral-900">
      <div className="flex flex-col items-center gap-3">
        <Rocket className="size-10 text-brand" strokeWidth={1.5} />
        <h1 className="text-2xl font-semibold tracking-tight">MultiApp</h1>
        <p className="max-w-xs text-sm text-neutral-500">
          One codebase, shipped to web, desktop and mobile.
        </p>
      </div>

      <div className="grid w-full max-w-sm gap-3 sm:max-w-2xl sm:grid-cols-3">
        {stack.map(({ name, description, href, icon: Icon }) => (
          <ExternalLink
            key={name}
            href={href}
            className="group flex flex-col items-center gap-2 rounded-xl border border-neutral-200 bg-white p-5 text-center transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
          >
            <Icon className="size-6 text-neutral-400 transition-colors group-hover:text-brand" strokeWidth={1.5} />
            <span className="text-sm font-medium">{name}</span>
            <span className="text-xs text-neutral-500">{description}</span>
          </ExternalLink>
        ))}
      </div>

      <ExternalLink
        href="https://andersonalves.site"
        className="text-xs text-neutral-400 transition-colors hover:text-brand"
      >
        andersonalves.site
      </ExternalLink>
    </main>
  );
}
