import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Sparkles,
  Code2,
  Brain,
  Terminal,
  Zap,
  Rocket,
  Cpu,
  Database,
  MessageCircle,
  ExternalLink,
  FileText,
  MapPin,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const skills = [
  { name: "Python", level: 92, icon: Code2, desc: "Python for AI, backend development & automation." },
  { name: "C++", level: 85, icon: Cpu, desc: "Systems programming & competitive coding" },
  { name: "DSA", level: 88, icon: Database, desc: "Problem solving with C++ & algorithms" },
  { name: "LLMs & AI Agents", level: 84, icon: Brain, desc: "API, prompt engineering & AI automation." },
  { name: "FastAPI", level: 90, icon: Zap, desc: "REST APIs & AI backend development." },
  { name: "Git & GitHub", level: 82, icon: Terminal, desc: "Version control & dev environment" },
];

const projects = [
  {
    title: "Nova AI Voice Assistant",
    tag: "Featured",
    featured: true,
    desc: "Nova is a Python-based AI voice assistant capable of understanding natural language, executing desktop automation, translating multiple languages, searching the web, reading news, playing music, and interacting with LLMs for intelligent conversations—all through a hands-free voice interface.",
    stack: [
  "Python",
  "Gemini API",
  "SpeechRecognition",
  "gTTS",
  "PyGame",
],
    href: "https://github.com/sauravkr-dev/Personal-AI-Voice-assistant",
    live: "https://saurav-nova.netlify.app/",
  },
  {
  title: "Number Guessing Game",
  tag: "Python",
  desc: "An interactive command-line game developed in Python where players guess a randomly generated number with intelligent hints after each attempt. Built to strengthen problem-solving skills and core Python programming concepts.",
  stack: [
    "Python",
    "Random Module",
    "CLI",
    "Problem Solving"
  ],
  href: "https://github.com/sauravkr-dev/Guessing-Game",
}
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)] shadow-[0_0_20px_oklch(0.7_0.22_270/0.6)]">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">Saurav<span className="text-gradient">.</span></span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex ${
            scrolled ? "glass" : ""
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative hidden overflow-hidden rounded-full px-5 py-2 text-sm font-medium text-white sm:inline-flex"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)] animate-gradient" />
          <span className="absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70 bg-gradient-to-r from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]" />
          <span className="relative flex items-center gap-1.5">Hire Me <ArrowRight className="h-3.5 w-3.5" /></span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[oklch(0.6_0.25_260)] opacity-30 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[oklch(0.6_0.22_300)] opacity-30 blur-3xl animate-pulse-glow [animation-delay:1s]" />

      {/* Grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.7_0.2_240)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.7_0.2_240)]" />
            </span>
            Available for internships & collaborations
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient animate-gradient bg-clip-text">Saurav</span>
            <br />
            <span className="text-muted-foreground">building intelligent</span>
            <br />
            <span className="text-gradient">AI experiences.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            B.Tech Computer Science student & Python / AI developer crafting voice assistants, developer tools and futuristic web apps — one commit at a time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]" />
              <span className="absolute inset-0 opacity-70 blur-xl bg-gradient-to-r from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]" />
              <span className="relative flex items-center gap-2">
                <Rocket className="h-4 w-4" /> Hire Me
              </span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass grid h-11 w-11 place-items-center rounded-full transition-all hover:scale-110 hover:text-[oklch(0.75_0.2_240)]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass grid h-11 w-11 place-items-center rounded-full transition-all hover:scale-110 hover:text-[oklch(0.75_0.22_300)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              { k: "3+", v: "Projects" },
              { k: "2+", v: "Years coding" },
              { k: "∞", v: "Curiosity" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="relative mx-auto w-full max-w-md animate-float">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)] opacity-40 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">nova.py</span>
            </div>
            <pre className="mt-4 overflow-hidden font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
{`from nova import Assistant

nova = Assistant(
  name="Nova",
  voice="natural",
  model="gpt-neo-x",
)

`}<span className="text-[oklch(0.78_0.18_240)]">@nova.on_wake</span>{`
`}<span className="text-[oklch(0.8_0.15_300)]">def</span>{` greet(user):
  `}<span className="text-[oklch(0.85_0.15_190)]">return</span>{` f"Hi {user.name}, "\\
         "what shall we build today?"

`}<span className="text-[oklch(0.8_0.15_300)]">nova.listen()</span>{`  # → 🎙️  live`}
            </pre>
            <div className="mt-5 flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Nova is listening…</div>
                  <div className="text-[10px] text-muted-foreground">Voice · LLM · Automation</div>
                </div>
              </div>
              <div className="flex items-end gap-0.5">
                {[6, 12, 8, 16, 10, 14, 7].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-gradient-to-t from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]"
                    style={{ height: h, animation: `pulse-glow ${1 + i * 0.1}s ease-in-out infinite` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="glass mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title.split(" ").map((w, i) =>
          i === title.split(" ").length - 1 ? (
            <span key={i} className="text-gradient"> {w}</span>
          ) : (
            <span key={i}>{i > 0 ? " " : ""}{w}</span>
          )
        )}
      </h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title="Curious mind. Code-first heart." desc="I love turning ideas into working software — especially when AI is involved." />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="glass md:col-span-2 rounded-3xl p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-foreground font-semibold">Saurav Kumar</span>, a B.Tech
              Computer Science student passionate about building AI-powered products with Python.
              I obsess over clean code, thoughtful UX, and shipping things that feel alive.
            </p>
            <p className="mt-4 text-muted-foreground">
              Currently building <span className="text-gradient font-semibold">Nova AI</span> — a
              voice-first assistant — while sharpening my DSA and exploring the LLM ecosystem.
              I'm looking for internships and collaborators who like moving fast and building well.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: GraduationCap, label: "B.Tech · CSE" },
                { icon: MapPin, label: "India · Remote" },
                { icon: Sparkles, label: "AI / Python Dev" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 p-3 text-sm">
                  <Icon className="h-4 w-4 text-[oklch(0.75_0.2_270)]" /> {label}
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-8">
            <div className="text-sm uppercase tracking-widest text-muted-foreground">Focus</div>
            <ul className="mt-4 space-y-4">
              {[
                { t: "AI & LLMs", d: "Agents, RAG, voice interfaces" },
                { t: "Python craft", d: "APIs, tooling, automation" },
                { t: "DSA", d: "Sharpening problem-solving daily" },
              ].map((f) => (
                <li key={f.t} className="border-l-2 border-[oklch(0.7_0.2_275)] pl-4">
                  <div className="font-semibold">{f.t}</div>
                  <div className="text-sm text-muted-foreground">{f.d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Skills" title="Tools I build with" desc="The stack that powers my day-to-day work." />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, level, icon: Icon, desc }) => (
            <div
              key={name}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)] shadow-[0_0_20px_oklch(0.7_0.22_270/0.5)]">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-semibold">{name}</div>
                  <div className="truncate text-xs text-muted-foreground">{desc}</div>
                </div>
                {/* <div className="ml-auto font-mono text-xs text-muted-foreground">{level}%</div> */}
              </div>
              <div className="relative mt-5 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Projects" title="Selected work" desc="A few things I've built recently." />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                p.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              {p.featured && (
                <>
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[oklch(0.6_0.25_260)] opacity-30 blur-3xl" />
                  <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[oklch(0.6_0.25_300)] opacity-30 blur-3xl" />
                </>
              )}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${
                      p.featured
                        ? "bg-gradient-to-r from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)] text-white"
                        : "border border-white/10 text-muted-foreground"
                    }`}
                  >
                    {p.featured && <Sparkles className="h-3 w-3" />} {p.tag}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>

                <h3 className={`mt-6 font-display font-bold ${p.featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                  {p.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.8_0.15_270)] transition-colors hover:text-white"
                  >
                    View on GitHub <Github className="h-3.5 w-3.5" />
                  </a>

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.8_0.15_270)] transition-colors hover:text-white"
                    >
                      Live Demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="relative py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-10 sm:p-14">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[oklch(0.6_0.25_260)] opacity-30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[oklch(0.6_0.25_300)] opacity-30 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Resume
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Grab a copy of my <span className="text-gradient">resume</span>.
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                A one-page PDF covering education, skills, projects and links. Updated regularly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]" />
                <span className="absolute inset-0 opacity-60 blur-xl bg-gradient-to-r from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]" />
                <span className="relative flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download Resume
                </span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                <FileText className="h-4 w-4" /> View Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <SectionHeading eyebrow="Contact" title="Let's build something together" desc="Have an idea, an opportunity, or just want to say hi? My inbox is open." />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:sauravkr.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]" />
            <span className="absolute inset-0 opacity-70 blur-xl bg-gradient-to-r from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]" />
            <span className="relative flex items-center gap-2">
              <Mail className="h-4 w-4" /> Hire Me
            </span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <div className="glass mx-auto mt-14 flex max-w-lg items-center gap-3 rounded-2xl p-5 text-left">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground">Reach me at</div>
            <div className="truncate font-mono text-sm">sauravkr.dev@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[oklch(0.72_0.2_240)] to-[oklch(0.68_0.25_300)]">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="truncate text-sm text-muted-foreground">
            © {new Date().getFullYear()} Saurav Kumar. Crafted with Python & love.
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a href="https://github.com/sauravkr-dev" target="_blank" rel="noreferrer" aria-label="GitHub" className="glass grid h-9 w-9 place-items-center rounded-full hover:text-[oklch(0.75_0.2_240)]">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/sauravkr-dev" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass grid h-9 w-9 place-items-center rounded-full hover:text-[oklch(0.75_0.22_300)]">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
