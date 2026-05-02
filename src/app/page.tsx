"use client";

import { motion } from "framer-motion";

const services = [
  "Arquitectura FullStack",
  "Uso de Frameworks estándares y modernos",
  "Desarrollo de APIs y lógica de negocio"

];

const stack = [
  "Angular",
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "APIs REST",
  "Bases de datos SQL",
];

const featuredProjects = [
  {
    title: "Sistema de gestión de Cementerio Municipal",
    category: "FullStack",
    description:
      "Plataforma para administrar procesos, registrar cambios y reportes útiles para la gestión del cementerio.",
  },
  {
    title: "Sistema de Referencias Inversas",
    category: "Google App Script",
    description:
      "App Web para gestionar referencias inversas, con integración a Google Sheets y Google Drive para facilitar el acceso de información.",
  },
  {
    title: "Nuevos proyectos..",
    category: "Futuros proyectos",
    description:
      "Próximamente, nuevos proyectos que reflejen mi crecimiento profesional y experiencia en el desarrollo de software...",
  },
];


const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Hans-el",
    value: "github.com/Hans-el",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hans-el/",
    value: "linkedin.com/in/hans-el/",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/hanselfuentess",
    value: "x.com/hanselfuentess",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fntshansel/",
    value: "instagram.com/fntshansel/",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Inicio de carrera profesional y nuevos proyectos",
    text: "A partir de ello....",
  },
  {
    year: "2025",
    title: "Finalizacion de Estudios",
    text: "Oportunidad de conectar con profesionales del sector que me brindaron experiencia práctica y conocimientos valiosos en insituciones reconocidas.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.25 },
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(166,124,82,0.16),transparent_42%),linear-gradient(180deg,#f8f3ec_0%,#f2ebe1_100%)] text-[#1c1a17]">
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(rgba(28,26,23,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(28,26,23,0.04)_1px,transparent_1px)] bg-size-[72px_72px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="mb-16 flex items-center justify-between rounded-full border border-(--border) bg-(--surface) px-5 py-3 backdrop-blur-md">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-(--muted)">Portafolio</p>
            <p className="text-sm font-medium">HANSEL ADRIAN ALCIVAR FUENTES</p>
          </div>
          <nav className="hidden gap-6 text-sm text-(--muted) sm:flex">
            <a href="#sobre-mi" className="transition-colors hover:text-foreground">
              Sobre mí
            </a>
            <a href="#proyectos" className="transition-colors hover:text-foreground">
              Proyectos
            </a>
            <a href="#redes" className="transition-colors hover:text-foreground">
              Redes
            </a>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-14 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-xs uppercase tracking-[0.28em] text-(--muted) backdrop-blur-md">
              Ingeniero en Software
            </p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Soluciones digitales a necesidades reales
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted) sm:text-xl">
              Si un problema real puede ser optimizado o automatizado, me gusta ser quien lo haga realidad.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-full bg-(--accent) px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-(--accent-strong)"
              >
                Ver proyectos
              </a>
              <a
                href="#redes"
                className="inline-flex items-center justify-center rounded-full border border-(--border) bg-white/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-white/80"
              >
                Contacto
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-(--border) bg-(--surface) p-4 text-sm text-(--muted) shadow-[0_12px_40px_rgba(28,26,23,0.05)] backdrop-blur-md"
                >
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="rounded-4xl border border-(--border) bg-(--surface-strong) p-6 shadow-[0_24px_90px_rgba(28,26,23,0.1)] backdrop-blur-md"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">Perfil profesional</p>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-(--muted)">Rol</p>
                <p className="mt-1 text-2xl font-medium">FullStack Developer</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-(--border) bg-white/60 p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-(--muted)">Stack principal</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-(--border) bg-white px-3 py-1 text-xs text-(--muted)"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        <section id="sobre-mi" className="grid gap-5 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <motion.div {...fadeUp} className="rounded-4xl border border-(--border) bg-(--surface-strong) p-6 shadow-[0_16px_50px_rgba(28,26,23,0.06)]">
            <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">Sobre mí</p>
            <h2 className="mt-2 text-3xl font-semibold">Resumen personal</h2>
            <p className="mt-4 text-sm leading-7 text-(--muted)">
              Profesional con 1,5 años de experiencia. Conocimiento de tecnologías actuales en el desarrollo de software con
              constante aprendizaje e innovación. Desarrollo de aplicaciones y sistemas web con Frameworks usados a nivel
              profesional, tanto
              en Backend como Frontend, junto con PostgreSQL. Experiencia en la implementación de funcionalidades para
              la gestión de datos y automatización de procesos. Conocimientos en estructuras de bases de datos, APIs REST
              y control de versiones. Enfocado en el aprendizaje continuo y trabajo colaborativo.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="flex gap-5 rounded-3xl border border-(--border) bg-(--surface) p-5 backdrop-blur-md"
              >
                <div className="min-w-16 text-sm font-semibold text-(--accent-strong)">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-(--muted)">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="py-10 lg:py-16">
          <motion.div {...fadeUp} className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">Proyectos</p>
            <h2 className="mt-2 text-3xl font-semibold">Proyectos destacados</h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="group rounded-4xl border border-(--border) bg-(--surface) p-6 shadow-[0_16px_50px_rgba(28,26,23,0.06)] backdrop-blur-md"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-(--muted)">
                  {project.category}
                </p>
                <h3 className="mt-4 text-2xl font-medium">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-(--muted)">{project.description}</p>
                <div className="mt-6 h-px w-full bg-(--border)" />
                <p className="mt-4 text-sm text-(--accent-strong) transition-transform duration-300 group-hover:translate-x-1">
                  Ver caso
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="redes" className="py-10 lg:py-16">
          <motion.div {...fadeUp} className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">Redes</p>
            <h2 className="mt-2 text-3xl font-semibold">Conectemos</h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                className="flex items-center justify-between rounded-3xl border border-(--border) bg-(--surface) p-5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-(--muted)">
                    {social.label}
                  </p>
                  <p className="mt-2 text-lg font-medium">{social.value}</p>
                </div>
                <span className="text-sm text-(--accent-strong)">Abrir</span>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="contacto" className="py-10 lg:py-16">
          <motion.div
            {...fadeUp}
            className="flex flex-col items-start justify-between gap-6 rounded-4xl border border-(--border) bg-[#1c1a17] px-8 py-10 text-white shadow-[0_30px_100px_rgba(28,26,23,0.22)] md:flex-row md:items-center"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Contacto</p>
              <h2 className="mt-2 text-3xl font-semibold">¿Con qué puedo ayudarte?</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
                Si crees que puedo aportar a tu institución o proyecto, no dudes en escribirme. Siempre estoy abierto a nuevas oportunidades y colaboraciones.
              </p>
            </div>
            <a
              href="mailto:tuemail@dominio.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1c1a17] transition-transform duration-300 hover:-translate-y-0.5"
            >
              hanselfuentes99@gmail.com
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
