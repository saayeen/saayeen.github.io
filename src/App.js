import { useState, useEffect, useRef } from "react";
import imagen1 from "./imagen1.png";
import imagen2 from "./imagen2.png";
import imagen3 from "./imagen3.png";
import imagen4 from "./imagen4.png";

const slides = [
    {
    num: "01", 
    frontBg: "rgba(6,20,40,0.6)", 
    backBg: "rgba(4,10,22,0.75)", 
    accent: "#0DB8D3",
    title: "Que es una flashcard?",
    sub: "Si quieres saber, haz clic !!!!!",
    frontImage:  imagen2,
    back: [
    ["Definición:", "Una tarjeta de estudio que tiene una pregunta en un lado y la respuesta en el otro."],
    ["¿Cómo funciona?", "Lees la pregunta, intentas recordar la respuesta y luego volteas la tarjeta para comprobar."],
    ["Beneficio clave:", "Activa la memoria y ayuda a aprender más rápido que leer o subrayar."],
  ],
    type: "list",
  },
  {
    num: "02", frontBg: "rgba(6,20,40,0.6)", backBg: "rgba(4,10,22,0.75)", accent: "#0DB8D3",
    title: "El problema",
    sub: "Muchos estudiantes chilenos enfrentan dificultades para estudiar de forma efectiva con las herramientas actuales.",
    frontImage:  imagen1,
    back: [
      ["Métodos pasivos:", "La lectura repetitiva y el subrayado son estrategias comunes, pero según Make It Stick (Brown, Roediger III y McDaniel) generan una falsa sensación de dominio sin garantizar retención duradera."],
      ["Barreras de acceso:", "Las plataformas más populares (como Anki o Quizlet) son originalmente en inglés. Si bien algunas tienen interfaz en español, su modelo de negocio en dólares limita el acceso a estudiantes chilenos de menores recursos."],
      ["Sin currículo local:", "Contenido descontextualizado: La mayoría del material disponible no está adaptado al currículo local (PAES, asignaturas chilenas), a diferencia de lo que propone este proyecto."],
      ["Caos en el intercambio:", "Intercambio desordenado: El uso de WhatsApp y Drive para compartir materiales es informal, sin trazabilidad ni reconocimiento al creador original."],
    ],
    type: "list",
  },
  {
    num: "03", frontBg: "rgba(4,16,32,0.6)", backBg: "rgba(4,12,24,0.75)", accent: "#1B7FDC",
    title: "La solución propuesta",
    sub: "Una plataforma colaborativa de flashcards, gratuita, en español y diseñada específicamente para Chile.",
    back: [
      ["Gratuita", "con publicidad AdMob/AdSense — sin barreras económicas."],
        ["En español", "con contenido adaptado al currículo chileno (PAES, ramos universitarios, examen teórico de conducir, idiomas)"],
      ["Colaborativa:", "crear, copiar, modificar y compartir manteniendo crédito al creador."],
      ["Respaldada:", "práctica de evocación según Make It Stick (Brown et al., 2014)."],
      ["Copy-on-Write:", "reutilización sin duplicar datos innecesariamente."],
    ],
    type: "list",
  },
  {
    num: "04", frontBg: "rgba(5,16,30,0.6)", backBg: "rgba(4,10,22,0.75)", accent: "#0DB8D3",
    title: "¿Por qué es diferente?",
    sub: "Comparación directa con las soluciones existentes en el mercado.",
    headers: ["Aspecto", "Existentes", "Esta propuesta"],
    rows: [
      ["Idioma", "Inglés", "Español"],
      ["Costo", "USD / suscripción", "Gratis"],
      ["Contenido", "Internacional", "Currículo chileno"],
      ["Colaboración", "Informal", "Estructurada"],
      ["Almacenamiento", "Duplicación total", "Copy-on-Write"],
    ],
    type: "table",
  },
  {
    num: "05", frontBg: "rgba(6,18,36,0.6)", backBg: "rgba(4,10,20,0.75)", accent: "#1B7FDC",
    title: "¿Para quién es?",
    sub: "Tres audiencias principales con necesidades de estudio activo y colaborativo.",
    frontImage:  imagen4,
    back: [
      ["Educación media", "estudiantes que preparan la PAES y necesitan material en español organizado."],
      ["Universidad", "estudiantes que retienen grandes volúmenes de información por ramo."],
      ["Cualquier persona", "que quiera estudiar de forma activa, eficiente y colaborativa."],
    ],
    type: "list",
  },
  {
    num: "06", frontBg: "rgba(4,14,28,0.6)", backBg: "rgba(4,10,20,0.75)", accent: "#0DB8D3",
    title: "¿Cómo va a ser la app?",
    sub: "Funciones definidas para cada rol dentro de la plataforma.",
    groups: [
      { title: "Estudiantes", items: ["Crear paquetes públicos o privados", "Estudiar con práctica de evocación", "Copiar paquetes de forma inteligente (sin duplicar contenido)", "Trazabilidad al creador original"] },
      { title: "Administrador", items: ["Ver métricas de uso", "Gestionar usuarios", "Moderar contenido", "Configurar la plataforma"] },
      
    ],
    type: "grid",
  },
  {
    num: "07", frontBg: "rgba(4,12,26,0.6)", backBg: "rgba(4,8,18,0.75)", accent: "#1B7FDC",
    title: "Objetivo general",
    sub: "Lo que se espera lograr al finalizar el proyecto de titulación.",
    frontImage:  imagen3,
    text: "Desarrollar una plataforma colaborativa de estudio basada en flashcards, orientada a estudiantes chilenos, que implemente Copy-on-Write para optimizar el almacenamiento, permita reutilizar contenido entre usuarios y mantenga trazabilidad de las contribuciones originales — todo de forma gratuita y en español.",
    type: "text",
  },
];

function BackContent({ slide }) {
  if (slide.type === "list")
    return (
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {slide.back.map(([b, t], i) => (
          <li key={i} style={{ padding: "16px 0 16px 24px", position: "relative", borderBottom: i < slide.back.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", fontSize: 18, lineHeight: 1.7 }}>
            <span style={{ position: "absolute", left: 0, color: slide.accent, fontSize: 16 }}>—</span>
            <strong style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{b}</strong>{" "}
            <span style={{ color: "rgba(220,240,255,0.55)" }}>{t}</span>
          </li>
        ))}
      </ul>
    );

  if (slide.type === "table")
    return (
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 17 }}>
        <thead>
          <tr>
            {slide.headers.map((h) => (
              <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontWeight: 500, color: "rgba(255,255,255,0.25)", borderBottom: "1px solid rgba(255,255,255,0.07)", fontSize: 15, letterSpacing: "0.06em", textTransform: "uppercase" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slide.rows.map(([a, b, c], i) => (
            <tr key={i}>
              <td style={{ padding: "14px 16px", borderBottom: i < slide.rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", color: "rgba(220,240,255,0.55)" }}>{a}</td>
              <td style={{ padding: "14px 16px", borderBottom: i < slide.rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", color: "rgba(220,240,255,0.55)" }}>{b}</td>
              <td style={{ padding: "14px 16px", borderBottom: i < slide.rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", color: slide.accent, fontWeight: 500 }}>{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

  if (slide.type === "grid")
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {slide.groups.map((g, i) => (
          <div key={i}>
            <div style={{ fontSize: 15, fontWeight: 600, color: slide.accent, marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}>{g.title}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {g.items.map((item, j) => (
                <li key={j} style={{ fontSize: 16, color: "rgba(200,230,255,0.55)", padding: "6px 0 6px 16px", position: "relative", lineHeight: 1.65 }}>
                  <span style={{ position: "absolute", left: 0, color: "rgba(13,184,211,0.3)", fontSize: 14 }}>—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );

  if (slide.type === "text")
    return (
      <p style={{ fontSize: 18, color: "rgba(220,240,255,0.7)", lineHeight: 1.9, maxWidth: 660, margin: 0, fontWeight: 300 }}>
        {slide.text.split("Copy-on-Write").map((part, i, arr) =>
          i < arr.length - 1
            ? <span key={i}>{part}<strong style={{ color: slide.accent, fontWeight: 500 }}>Copy-on-Write</strong></span>
            : <span key={i}>{part}</span>
        )}
      </p>
    );

  return null;
}

function SlideCard({ slide, total }) {
  const [flipped, setFlipped] = useState(false);

  const faceBase = {
    position: "absolute", 
    width: "100%", 
    minHeight: 480,
    backfaceVisibility: "hidden", 
    WebkitBackfaceVisibility: "hidden",
    borderRadius: 24,
    border: "1px solid rgba(255,255,255,0.07)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  };

  return (
    <div style={{ width: "100%", perspective: "1800px", cursor: "pointer" }} onClick={() => setFlipped((f) => !f)}>
      <div style={{
        position: "relative", 
        width: "100%",
        transformStyle: "preserve-3d",
        transition: "transform 0.7s cubic-bezier(0.4,0.2,0.2,1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        minHeight: 480,
      }}>
        
        {/* FRONT SIDE ---------- */}
        <div style={{ ...faceBase, background: slide.frontBg, padding: "48px 60px", display: "flex", alignItems: "center", gap: 48 }}>
          
          {/* Columna de la imagen (izquierda) */}
          {slide.frontImage && (
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img 
                src={slide.frontImage} 
                alt={slide.title}
                style={{ 
                  width: "100%",
                  maxWidth: 200,
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: 16,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
                }}
              />
            </div>
          )}
          
          {/* Columna del texto (derecha) */}
          <div style={{ flex: 1.5, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", marginBottom: 20 }}>
              {slide.num} / 0{total}
            </div>
            <div style={{ fontSize: 36, fontWeight: 600, color: "white", letterSpacing: "-0.5px", marginBottom: 12, lineHeight: 1.2 }}>
              {slide.title}
            </div>
            <div style={{ fontSize: 16, color: "rgba(255,255,255,0.38)", lineHeight: 1.6, marginBottom: 32 }}>
              {slide.sub}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.15)", letterSpacing: "0.04em", animation: "hintpulse 2s ease-in-out infinite" }}>
              clic para ver contenido
            </div>
          </div>
        </div>

        {/* BACK SIDE -*/}
        <div style={{ ...faceBase, background: slide.backBg, padding: "48px 80px", display: "flex", flexDirection: "column", justifyContent: "center", transform: "rotateY(180deg)" }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28, color: slide.accent }}>
            {slide.title}
          </div>
          <BackContent slide={slide} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.1)", marginTop: 32, textAlign: "right", letterSpacing: "0.04em" }}>
            clic para volver
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const W = canvas.width, H = canvas.height;
      ctx.fillStyle = "#04080f";
      ctx.fillRect(0, 0, W, H);

      [
        { x: 0.15 + 0.05 * Math.sin(t * 0.4),  y: 0.25 + 0.04 * Math.cos(t * 0.3),  r: 0.45, c1: "rgba(6,91,152,0.5)",   c2: "rgba(6,91,152,0)" },
        { x: 0.78 + 0.04 * Math.cos(t * 0.25), y: 0.18 + 0.05 * Math.sin(t * 0.35), r: 0.36, c1: "rgba(13,184,211,0.18)", c2: "rgba(13,184,211,0)" },
        { x: 0.5  + 0.06 * Math.sin(t * 0.2),  y: 0.72 + 0.04 * Math.cos(t * 0.28), r: 0.4,  c1: "rgba(27,127,220,0.25)", c2: "rgba(27,127,220,0)" },
      ].forEach((o) => {
        const gx = o.x * W, gy = o.y * H, gr = o.r * Math.max(W, H);
        const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        g.addColorStop(0, o.c1);
        g.addColorStop(1, o.c2);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });

      t += 0.008;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
  );
}

function NoiseOverlay() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none", opacity: 0.5,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: "200px 200px",
      mixBlendMode: "overlay",
    }} />
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);

  const prev = () => { if (current > 0) setCurrent((c) => c - 1); };
  const next = () => { if (current < slides.length - 1) setCurrent((c) => c + 1); };

  const navBtn = (disabled) => ({
    borderRadius: 99, padding: "12px 28px", fontSize: 15, fontWeight: 400,
    cursor: disabled ? "not-allowed" : "pointer",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.1)",
    color: disabled ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.35)",
    letterSpacing: "0.02em",
    opacity: disabled ? 0.4 : 1,
  });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#e8f4fd", minHeight: "100vh", background: "#04080f", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @keyframes hintpulse { 0%,100%{opacity:.3} 50%{opacity:.7} }
        * { box-sizing: border-box; }
        a { text-decoration: none; }
      `}</style>

      <AnimatedBackground />
      <NoiseOverlay />

      <div style={{ position: "relative", zIndex: 2 }}>

        {/* Nav */}
        <nav style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "22px 52px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(4,8,15,0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          position: "sticky", top: 0, zIndex: 50,
        }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.4)", letterSpacing: "0.01em" }}>
            Sayen Barra · UBB 2026
          </span>
          <div style={{ display: "flex", gap: 32 }}>
          </div>
        </nav>

        {/* Hero */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "100px 48px 80px", minHeight: "70vh" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(13,184,211,0.6)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 32 }}>
            <span style={{ width: 28, height: 1, background: "rgba(13,184,211,0.4)", display: "inline-block" }} />
            Propuesta de tesis
            <span style={{ width: 28, height: 1, background: "rgba(13,184,211,0.4)", display: "inline-block" }} />
          </div>

          <div style={{ fontSize: "clamp(42px, 5vw, 68px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-2px", color: "#fff", marginBottom: 10 }}>
            Plataforma colaborativa<br />de flashcards
            <span style={{ display: "block", fontWeight: 300, color: "rgba(255,255,255,0.28)" }}>para estudiantes chilenos</span>
          </div>

          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.35)", lineHeight: 1.8, maxWidth: 480, margin: "28px auto 0" }}>
            Basada en <strong style={{ color: "rgba(13,184,211,0.7)", fontWeight: 500 }}>práctica de evocación</strong> y{" "}
            <strong style={{ color: "rgba(13,184,211,0.7)", fontWeight: 500 }}>Copy-on-Write</strong>.
            Gratuita, en español, adaptada a estudiantes chilenos.


          </p>

          <button
            onClick={() => document.getElementById("slides").scrollIntoView({ behavior: "smooth" })}
            style={{ marginTop: 48, display: "inline-flex", alignItems: "center", gap: 12, fontSize: 14, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em", cursor: "pointer", border: "none", background: "none" }}
          >
            Ver la propuesta
            <span style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>↓</span>
          </button>
        </div>

        {/* Slides */}
        <div id="slides" style={{ padding: "0 36px 80px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.2)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Propuesta completa</span>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 28 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: 8, height: 8, borderRadius: "50%", border: "none", padding: 0, cursor: "pointer",
                background: i === current ? "rgba(13,184,211,0.7)" : "rgba(255,255,255,0.12)",
                transition: "all 0.2s",
              }} />
            ))}
          </div>

          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <SlideCard key={current} slide={slides[current]} total={slides.length} />
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, marginTop: 32 }}>
            <button onClick={prev} disabled={current === 0} style={navBtn(current === 0)}>← Anterior</button>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", minWidth: 50, textAlign: "center", letterSpacing: "0.06em" }}>
              {current + 1} / {slides.length}
            </span>
            <button onClick={next} disabled={current === slides.length - 1} style={navBtn(current === slides.length - 1)}>Siguiente →</button>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "24px 52px", textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.15)", letterSpacing: "0.05em", margin: 0 }}>
            Sayen Barra Sepúlveda · Universidad del Bío-Bío · Proyecto de Titulación · 2026
          </p>
        </footer>

      </div>
    </div>
  );
}