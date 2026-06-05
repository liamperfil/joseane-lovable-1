import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, IdCard, GraduationCap, Sparkles, ArrowUpRight, Download, Printer } from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseane Maciel — Publicidade, Comunicação & Audiovisual" },
      { name: "description", content: "Currículo criativo de Joseane Vieira dos Santos Maciel — publicitária, produtora audiovisual e designer gráfica em Salvador, BA." },
      { property: "og:title", content: "Joseane Maciel — Currículo Criativo" },
      { property: "og:description", content: "Comunicação, marketing, publicidade e produção audiovisual." },
    ],
  }),
  component: Resume,
});

type Course = {
  name: string;
  institution: string;
  duration?: string;
  year: string;
  tag?: string;
};

const courses: Course[] = [
  { name: "Comunicação Social — Publicidade e Propaganda", institution: "UNIME", year: "Graduação", tag: "Graduação" },
  { name: "Produção Audiovisual Mobile", institution: "Teatro Escola", duration: "144h", year: "Cursando · 2026", tag: "Em curso" },
  { name: "Agente Cultural", institution: "IFBA", duration: "200h", year: "2025" },
  { name: "Produção de Audiovisual", institution: "Instituto JCPM", duration: "70h", year: "2025" },
  { name: "Designer Gráfico", institution: "UNIFEL · Salvador Tech", duration: "80h", year: "2024" },
  { name: "Escrita Criativa", institution: "Instituto JCPM", duration: "18h", year: "2023" },
  { name: "Ocupações Administrativas", institution: "Programa Jovem Aprendiz · CIEE", duration: "1840h", year: "2016" },
  { name: "Multimídia", institution: "Oi Kabum! Escola de Arte e Tecnologia", duration: "40h", year: "2014" },
];

const skills = [
  "Direção criativa", "Publicidade & Propaganda", "Produção audiovisual",
  "Design gráfico", "Storytelling", "Escrita criativa",
  "Produção cultural", "SOCIAL MEDIA", "Mobile filmmaking",
];

function Resume() {
  return (
    <main className="min-h-screen px-4 py-10 md:px-10 md:py-16">
      <button
        onClick={() => window.print()}
        className="no-print fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper shadow-lg transition-all hover:bg-accent"
        aria-label="Imprimir em PDF"
      >
        <Printer className="size-4" />
        Imprimir em PDF
      </button>

      <div className="mx-auto max-w-6xl">
        {/* Top meta bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>Currículo · 2026</span>
          <span className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-accent" />
            Disponível para novos projetos
          </span>
        </div>

        {/* Hero */}
        <header className="grid grid-cols-1 gap-8 border-y-2 border-ink py-10 md:grid-cols-12 md:py-16">
          <div className="md:col-span-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              PUBLICIDADE · AUDIOVISUAL · PRESENÇA DIGITAL
            </p>
            <h1 className="text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              Joseane <br />
              <span className="italic text-accent">Maciel</span>
              <span className="text-ink">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Publicitária, produtora audiovisual e designer gráfica.
              Conto histórias que conectam marcas, pessoas e território — da
              ideia à tela, do papel à rua.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:joseanemaciel3@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-all hover:bg-accent"
              >
                <Mail className="size-4" />
                Falar comigo
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="tel:+5571982271187"
                className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                <Phone className="size-4" />
                (71) 98227-1187
              </a>
            </div>
          </div>

          {/* Side card */}
          <aside className="md:col-span-4">
            <div className="relative rotate-1 rounded-2xl border-2 border-ink bg-paper p-6 shadow-[8px_8px_0_0_var(--ink)]">
              <div className="absolute -top-3 left-6 bg-highlight px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink">
                Ficha rápida
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>Salvador — Bahia, Brasil</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="break-all">joseanemaciel3@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>(71) 98227-1187</span>
                </li>
                <li className="flex items-start gap-3">
                  <IdCard className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>@josevmaciel</span>
                </li>
              </ul>
            </div>
          </aside>
        </header>

        {/* Skills marquee */}
        <section className="border-b-2 border-ink py-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Competências —
            </span>
            {skills.map((s) => (
              <span key={s} className="tag">
                <Sparkles className="size-3 text-accent" />
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Sobre + Formação */}
        <section className="grid grid-cols-1 gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              01 — Perfil
            </p>
            <h2 className="text-3xl leading-tight md:text-4xl">
              Da escrita à câmera, da câmera à campanha.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Formação multidisciplinar em comunicação, design e audiovisual,
              com passagens por escolas de referência como Oi Kabum!,
              Instituto JCPM e IFBA. Atuo na interseção entre criação,
              produção e cultura — buscando narrativas com identidade e
              propósito.
            </p>
            <a
              href="#formacao"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              <Download className="size-4" /> Ver formação completa
            </a>
          </div>

          <div id="formacao" className="md:col-span-8">
            <div className="mb-8 flex items-baseline justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                02 — Formação
              </p>
              <span className="font-mono text-xs text-muted-foreground">
                {courses.length} cursos
              </span>
            </div>

            <ol className="relative space-y-0 border-l-2 border-ink/15">
              {courses.map((c, i) => (
                <li
                  key={c.name}
                  className="group relative grid grid-cols-12 items-start gap-4 border-b border-ink/10 py-6 pl-6 transition-colors hover:bg-highlight/30"
                >
                  <span className="absolute -left-[7px] top-8 size-3 rounded-full border-2 border-ink bg-paper transition-colors group-hover:bg-accent" />
                  <span className="col-span-12 font-mono text-xs text-muted-foreground md:col-span-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="flex flex-wrap items-center gap-2 text-xl leading-snug">
                      {c.name}
                      {c.tag && (
                        <span className="rounded-full bg-accent px-2 py-0.5 font-sans text-[10px] uppercase tracking-widest text-accent-foreground">
                          {c.tag}
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="size-4" />
                      {c.institution}
                      {c.duration && <span>· {c.duration}</span>}
                    </p>
                  </div>
                  <div className="col-span-12 text-right md:col-span-3">
                    <span className="font-mono text-sm text-ink">{c.year}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="relative my-10 overflow-hidden rounded-3xl border-2 border-ink bg-ink p-10 text-paper md:p-16">
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-accent blur-3xl opacity-40" />
          <div className="absolute -bottom-10 -left-10 size-48 rounded-full bg-highlight blur-3xl opacity-30" />
          <div className="relative grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-highlight">
                03 — Vamos colaborar?
              </p>
              <h2 className="text-4xl leading-tight text-paper md:text-6xl">
                Tenho uma ideia. <br />
                <span className="italic text-highlight">Topa produzir junto?</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href="mailto:joseanemaciel3@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-4 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
              >
                joseanemaciel3@gmail.com
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink pt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} Joseane Maciel</span>
          <span>Salvador · BA · Brasil</span>
        </footer>
      </div>
    </main>
  );
}
