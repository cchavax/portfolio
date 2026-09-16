import { useEffect, useState } from "react";
import { avisos, hero, pasos, perfil, proyectos, servicios, testimonios } from "./data";
import type { Proyecto } from "./data";

const waLink = `https://wa.me/${perfil.whatsapp}?text=${encodeURIComponent(perfil.mensajeWhatsapp)}`;

function Avisos() {
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [visibles, setVisibles] = useState(reduce ? avisos.length : 0);

  useEffect(() => {
    if (visibles >= avisos.length) return;
    const t = setTimeout(() => setVisibles((v) => v + 1), visibles === 0 ? 400 : 900);
    return () => clearTimeout(t);
  }, [visibles]);

  return (
    <div className="feed" aria-label="Ejemplos de avisos de los sistemas que desarrollé">
      <p className="feed-head">Lo que resuelven mis sistemas, todos los días</p>
      <ul>
        {avisos.map((a, i) => (
          <li key={a.titulo} className={`aviso aviso-${a.tipo} ${i < visibles ? "on" : ""}`}>
            <span className="aviso-marca" aria-hidden="true" />
            <div>
              <strong>{a.titulo}</strong>
              <span>{a.detalle}</span>
              <small>{a.origen}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Caso({ p, invertido }: { p: Proyecto; invertido: boolean }) {
  return (
    <article className={`caso ${invertido ? "invertido" : ""}`} id={p.id}>
      <header className="caso-cabeza">
        <p className="caso-cliente">{p.cliente}</p>
        <h3>{p.nombre}</h3>
        <p className="caso-uso">
          <span className="punto" aria-hidden="true" />
          {p.link ? (
            <a href={p.link} target="_blank" rel="noreferrer">
              {p.enUso}
            </a>
          ) : (
            p.enUso
          )}
        </p>
      </header>

      <div className="caso-cuerpo">
        <div>
          <h4>El desafío</h4>
          <p>{p.desafio}</p>
          <h4>Qué construimos</h4>
          <ul className="lista">
            {p.solucion.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <aside className="caso-ficha">
          <h4>Mi rol</h4>
          <p>{p.rol}</p>
          <h4>Resultado</h4>
          <p className="resultado">{p.resultado}</p>
          <h4>Tecnologías</h4>
          <ul className="stack">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </aside>
      </div>

      {p.captura ? (
        <img className="captura" src={p.captura} alt={`Captura de ${p.nombre}`} loading="lazy" />
      ) : null}
    </article>
  );
}

export default function App() {
  return (
    <>
      <a className="saltar" href="#contenido">
        Ir al contenido
      </a>
      <header className="barra">
        <a className="marca" href="#">
          {perfil.nombre}
        </a>
        <nav aria-label="Secciones">
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero">
          <div className="hero-texto">
            <p className="quien">
              {perfil.rol} en {perfil.ciudad}
            </p>
            <h1>{hero.titulo}</h1>
            <p className="bajada">{hero.bajada}</p>
            <div className="acciones">
              <a className="boton" href={waLink} target="_blank" rel="noreferrer">
                Escribime por WhatsApp
              </a>
              <a className="boton secundario" href="#proyectos">
                Ver proyectos
              </a>
            </div>
          </div>
          <Avisos />
        </section>

        <section id="proyectos" className="bloque">
          <h2>Proyectos en uso real</h2>
          {proyectos.map((p, i) => (
            <Caso key={p.id} p={p} invertido={i % 2 === 1} />
          ))}
        </section>

        {testimonios.length > 0 && (
          <section className="bloque testimonios">
            <h2>Lo que dicen los clientes</h2>
            {testimonios.map((t) => (
              <figure key={t.autor}>
                <blockquote>{t.texto}</blockquote>
                <figcaption>
                  {t.autor}, {t.cargo}
                </figcaption>
              </figure>
            ))}
          </section>
        )}

        <section id="servicios" className="bloque">
          <h2>Qué puedo hacer por tu negocio</h2>
          <div className="servicios">
            {servicios.map((s) => (
              <div key={s.titulo} className="servicio">
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </div>
            ))}
          </div>

          <h3 className="sub">Cómo trabajamos</h3>
          <ol className="pasos">
            {pasos.map((p) => (
              <li key={p.titulo}>
                <strong>{p.titulo}</strong>
                <span>{p.texto}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="contacto" className="contacto">
          <h2>¿Tu negocio todavía se maneja con planillas y mensajes sueltos?</h2>
          <p>Contame qué necesitás y te digo cómo lo resolvería, sin compromiso.</p>
          <div className="acciones">
            <a className="boton claro" href={waLink} target="_blank" rel="noreferrer">
              Escribime por WhatsApp
            </a>
            <a className="boton contorno" href={`mailto:${perfil.email}`}>
              {perfil.email}
            </a>
          </div>
          <p className="redes">
            <a href={perfil.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={perfil.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </section>
      </main>

      <footer className="pie">
        <p>
          {perfil.nombre}, {perfil.ciudad}
        </p>
      </footer>
    </>
  );
}
