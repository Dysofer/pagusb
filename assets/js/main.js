/* ==========================================================================
   SISTEMA INTERACTIVO USB CALI:
1. Feedback de estado activo en navegación (Heurística 1)
2. Panel desplegable de búsqueda rápida (Heurística 6 y 9)
3. Sticky acompañamiento en Admisiones (Heurística 4 y 7)
4. Footer institucional unificado en todas las vistas (Heurística 4)
5. Asistente Virtual Pachito con escalamiento a asesor humano (Heurística 10)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
  ensureGlobalHeaderSearch();
  ensureStickyAdmissionsCard();
  ensureOfficialFooter();
  initGlobalSearchPanel();
  initPachitoChatbot();
});

function isIndexPage() {
  const path = window.location.pathname.toLowerCase();
  const page = path.split("/").pop() || "index.html";
  return page === "" || page === "index.html";
}

/* --------------------------------------------------------------------------
1. FEEDBACK DE ESTADO ACTIVO EN MENÚ PRINCIPAL (HEURÍSTICA 1)
   -------------------------------------------------------------------------- */
function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (href === currentPage) {
      link.classList.add("active");
    }

    if (
      ["becas.html", "convenios.html", "financiacion.html"].includes(currentPage) &&
      link.classList.contains("nav-dropdown-btn")
    ) {
      link.classList.add("active");
    }

    if (
      [
        "facultad.html",
        "ingenieria-multimedia.html",
        "derecho.html",
        "psicologia.html",
        "mercadeo.html",
        "programa.html"
      ].includes(currentPage) &&
      href === "facultades.html"
    ) {
      link.classList.add("active");
    }
  });
}

/* --------------------------------------------------------------------------
2. INYECCIÓN DE LUPA EN CABECERA (SOLO FUERA DE INDEX.HTML)
   -------------------------------------------------------------------------- */
function ensureGlobalHeaderSearch() {
  if (isIndexPage()) {
    const existingBtn = document.getElementById("toggle-global-search");
    if (existingBtn) {
      existingBtn.remove();
    }
    const headerActions = document.querySelector(".header-actions");
    if (headerActions && headerActions.children.length === 0) {
      headerActions.remove();
    }
    return;
  }

  const headerContainer = document.querySelector(".header-container");
  if (!headerContainer || document.getElementById("toggle-global-search")) return;

  const ctaBtn = headerContainer.querySelector(".btn-primary");
  const actionsDiv = document.createElement("div");
  actionsDiv.className = "header-actions";

  const searchBtn = document.createElement("button");
  searchBtn.type = "button";
  searchBtn.id = "toggle-global-search";
  searchBtn.className = "header-search-trigger";
  searchBtn.setAttribute("aria-label", "Buscar en el portal");
  searchBtn.title = "Buscador rápido";
  searchBtn.innerHTML = `
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `;

  actionsDiv.appendChild(searchBtn);
  if (ctaBtn) {
    actionsDiv.appendChild(ctaBtn);
  }
  headerContainer.appendChild(actionsDiv);
}

/* --------------------------------------------------------------------------
3. STICKY PARA LA TARJETA "SOLICITA ACOMPAÑAMIENTO" EN ADMISIONES
   -------------------------------------------------------------------------- */
function ensureStickyAdmissionsCard() {
  const applySticky = () => {
    const cards = document.querySelectorAll(".sidebar-card, aside");
    cards.forEach((card) => {
      if (window.innerWidth > 1024) {
        card.style.position = "sticky";
        card.style.top = "96px";
        card.style.alignSelf = "start";
      } else {
        card.style.position = "static";
      }

      const parent = card.parentElement;
      if (parent && window.getComputedStyle(parent).display === "grid") {
        parent.style.alignItems = "start";
      }
    });
  };

  applySticky();
  window.addEventListener("resize", applySticky);
}

/* --------------------------------------------------------------------------
4. FOOTER OFICIAL ESTILO PÁGINA PRINCIPAL EN TODAS LAS VISTAS
   -------------------------------------------------------------------------- */
function ensureOfficialFooter() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  if (footer.querySelector(".footer-top-row")) {
    const existingLogo = footer.querySelector(".footer-logo-left img");
    if (existingLogo) {
      existingLogo.src = "assets/img/logo-nav-white.png";
    }
    return;
  }

  const icons = {
    laptop: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>',
    userBox: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><circle cx="12" cy="10" r="2.5"></circle><path d="M7.5 17c.8-2 2.5-3 4.5-3s3.7 1 4.5 3"></path></svg>',
    book: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
    mail: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg>',
    directory: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"></rect><circle cx="12" cy="10" r="2.2"></circle><path d="M8.5 16.5c.7-1.6 2-2.5 3.5-2.5s2.8.9 3.5 2.5"></path></svg>',
    sitemap: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="5" rx="1"></rect><rect x="3" y="16" width="6" height="5" rx="1"></rect><rect x="15" y="16" width="6" height="5" rx="1"></rect><path d="M12 8v4M6 16v-4h12v4"></path></svg>',
    map: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>',
    whatsapp: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path><path d="M9.5 9.5c.3 1.5 1.8 3.2 3.5 3.8l1.2-.9c.3-.2.7-.2 1 0l1.3.9c.3.2.4.7.2 1-.5.9-1.5 1.4-2.5 1.3-2.9-.3-5.7-3.1-6-6-.1-1 .4-2 1.3-2.5.3-.2.8-.1 1 .2l.9 1.3c.2.3.2.7 0 1l-.9 1.2z"></path></svg>',
    phone: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    chat: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>'
  };

  footer.innerHTML = `
    <div class="footer-top-row">
      <a href="index.html" class="footer-logo-left">
        <img src="assets/img/logo-nav-white.png" alt="Universidad de San Buenaventura Cali">
      </a>
      <div class="footer-socials">
        <a href="https://www.facebook.com/usbcali" target="_blank" rel="noopener" class="footer-social-btn" style="background:#1877F2;" aria-label="Facebook">f</a>
        <a href="https://www.instagram.com/usbcali/" target="_blank" rel="noopener" class="footer-social-btn" style="background:#E4405F;" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://x.com/usbcali" target="_blank" rel="noopener" class="footer-social-btn" style="background:#000000; border:1px solid #333;" aria-label="X">𝕏</a>
        <a href="https://www.youtube.com/user/usbcali" target="_blank" rel="noopener" class="footer-social-btn" style="background:#FF0000;" aria-label="YouTube">▶</a>
        <a href="https://www.linkedin.com/school/universidad-de-san-buenaventura-cali/" target="_blank" rel="noopener" class="footer-social-btn" style="background:#0A66C2;" aria-label="LinkedIn">in</a>
        <a href="https://www.tiktok.com/@usbcali" target="_blank" rel="noopener" class="footer-social-btn" style="background:#111111; border:1px solid #333;" aria-label="TikTok">♪</a>
      </div>
    </div>

    <div class="footer-container">
      <div class="footer-col">
        <h4>Accesos directos</h4>
        <a href="https://usbcali.edu.co/" target="_blank" rel="noopener"><span class="footer-icon">${icons.laptop}</span> HUB CTeI</a>
        <a href="https://campus.usbco.edu.co/psp/USCS90PR/?cmd=login&languageCd=ESP&" target="_blank" rel="noopener"><span class="footer-icon">${icons.userBox}</span> ASIS - Autoservicio</a>
        <a href="https://usbcali.edu.co/biblioteca/" target="_blank" rel="noopener"><span class="footer-icon">${icons.book}</span> Biblioteca</a>
        <a href="https://aulasvirtuales.usbcali.edu.co/" target="_blank" rel="noopener"><span class="footer-icon">${icons.laptop}</span> Aulas Virtuales</a>
        <a href="https://mail.google.com/a/correo.usbcali.edu.co" target="_blank" rel="noopener"><span class="footer-icon">${icons.mail}</span> Correo estudiantes</a>
        <a href="https://login.microsoftonline.com/" target="_blank" rel="noopener"><span class="footer-icon">${icons.mail}</span> Correo administrativo</a>
        <a href="https://usbcali.edu.co/directorio/" target="_blank" rel="noopener"><span class="footer-icon">${icons.directory}</span> Directorio</a>
        <a href="https://usbcali.edu.co/intranet/" target="_blank" rel="noopener"><span class="footer-icon">${icons.sitemap}</span> Intranet</a>
        <a href="https://editorialbonaventuriana.usb.edu.co/" target="_blank" rel="noopener"><span class="footer-icon">${icons.book}</span> Editorial</a>
        <a href="https://usbcali.edu.co/consultorio-juridico/" target="_blank" rel="noopener"><span class="footer-icon">${icons.userBox}</span> Consultorio Jurídico</a>
        <a href="https://usbcali.edu.co/" target="_blank" rel="noopener"><span class="footer-icon">${icons.laptop}</span> RadioMedia USB</a>
        <a href="https://usbcali.edu.co/trabaja-con-nosotros/" target="_blank" rel="noopener"><span class="footer-icon">${icons.userBox}</span> Trabaja con nosotros</a>
      </div>

      <div class="footer-col">
        <h4>Facultades</h4>
        <a href="facultad.html?id=arquitectura">Arquitectura, Arte y Diseño</a>
        <a href="facultad.html?id=economicas">Ciencias Económicas</a>
        <a href="facultad.html?id=derecho">Derecho y Ciencias Políticas</a>
        <a href="facultad.html?id=humanas">Ciencias Humanas y Sociales</a>
        <a href="facultad.html?id=ingenieria">Ingeniería</a>
      </div>

      <div class="footer-col">
        <h4>Contacto</h4>
        <p><span class="footer-icon">${icons.map}</span> Carrera 122 # 6-65, Cali, Colombia</p>
        <a href="https://wa.me/573102334941" target="_blank" rel="noopener"><span class="footer-icon">${icons.whatsapp}</span> +57 3102334941</a>
        <p><span class="footer-icon">${icons.phone}</span> PBX 602 488 22 22</p>
        <a href="mailto:informacion@usbcali.edu.co"><span class="footer-icon">${icons.mail}</span> informacion@usbcali.edu.co</a>
        <a href="https://usbcali.edu.co/pqrs/" target="_blank" rel="noopener"><span class="footer-icon">${icons.chat}</span> PQRS</a>
      </div>

      <div class="footer-col footer-legal-text">
        <h4>Legal</h4>
        <p>Resolución número 1326 del 25 de marzo de 1975, expedido(a) por Ministerio de Educación Nacional</p>
        <p>Institución Universitaria con Acreditación Institucional Multicampus - Res. No. 014620 del 12 de agosto del 2021 del Ministerio de Educación Nacional</p>
        <p><strong>Código de institución : 1716</strong></p>
        <p><strong>VIGILADA MINEDUCACIÓN</strong></p>
        <p>Línea de Transparencia :<br>01-8000-12-00-33</p>
      </div>

      <div class="footer-col">
        <h4>Sedes San Buenaventura</h4>
        <a href="https://www.usb.edu.co/" target="_blank" rel="noopener">Rectoría General</a>
        <a href="https://www.usbbog.edu.co/" target="_blank" rel="noopener">Bogotá</a>
        <a href="https://www.usbmed.edu.co/" target="_blank" rel="noopener">Medellín</a>
        <a href="https://www.usbcartagena.edu.co/" target="_blank" rel="noopener">Cartagena</a>
      </div>
    </div>

    <svg class="footer-seal-watermark" viewBox="0 0 200 200" fill="none" stroke="#FFFFFF" stroke-width="3" aria-hidden="true">
      <circle cx="100" cy="100" r="92"></circle>
      <circle cx="100" cy="100" r="74" stroke-dasharray="5 4"></circle>
      <path d="M74 68 L100 48 L126 68 L126 124 C126 140 100 152 100 152 C100 152 74 140 74 124 Z"></path>
    </svg>

    <div class="footer-bottom-orange">
      <div class="footer-bottom-inner">
        <span>Todos los derechos reservados © 2026 · Universidad de San Buenaventura Cali</span>
        <a href="https://usbcali.edu.co/politicas-de-privacidad/" target="_blank" rel="noopener">Políticas de privacidad</a>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
5. PANEL DE BÚSQUEDA GLOBAL RÁPIDA (HEURÍSTICA 6 Y 9)
   -------------------------------------------------------------------------- */
function initGlobalSearchPanel() {
  const header = document.querySelector("header");
  const toggleBtn = document.getElementById("toggle-global-search");
  if (!header || !toggleBtn) return;

  const catalog = [
    { area: "Indicadores OLE", title: "Impacto Real, Empleabilidad y Salarios OLE", url: "impacto-real.html" },
    { area: "Ingeniería · Pregrado", title: "Ingeniería Multimedia (Acreditación ABET)", url: "ingenieria-multimedia.html" },
    { area: "Derecho · Pregrado", title: "Derecho", url: "derecho.html" },
    { area: "Ciencias Humanas · Pregrado", title: "Psicología", url: "psicologia.html" },
    { area: "Ciencias Económicas · Pregrado", title: "Mercadeo y Negocios Internacionales", url: "mercadeo.html" },
    { area: "Apoyo Financiero", title: "Simulador de Becas Saber 11 (ICFES)", url: "becas.html" },
    { area: "Apoyo Financiero", title: "Convenios Institucionales y Cajas de Compensación", url: "convenios.html" },
    { area: "Apoyo Financiero", title: "Opciones de Financiación y Crédito Directo", url: "financiacion.html" },
    { area: "Admisiones", title: "Inscripciones Abiertas y Proceso de Admisión", url: "admisiones.html" },
    { area: "Campus", title: "Vida Universitaria y Bienestar Institucional", url: "vida-universitaria.html" }
  ];

  if (typeof facultiesCatalog !== "undefined" && Array.isArray(facultiesCatalog)) {
    facultiesCatalog.forEach((fac) => {
      catalog.push({
        area: "Facultad · USB Cali",
        title: fac.name,
        url: `facultad.html?id=${encodeURIComponent(fac.id)}`
      });
      ["pregrado", "posgrado"].forEach((nivel) => {
        (fac[nivel] || []).forEach((prog) => {
          const url =
            prog.url ||
            (prog.curriculum || prog.metrics || prog.features
              ? `programa.html?facultad=${encodeURIComponent(fac.id)}&programa=${encodeURIComponent(prog.id)}`
              : `facultad.html?id=${encodeURIComponent(fac.id)}`);
          catalog.push({
            area: `${fac.shortName} · ${nivel === "pregrado" ? "Pregrado" : "Posgrado"}`,
            title: prog.name,
            url
          });
        });
      });
    });
  }

  if (!document.getElementById("global-search-panel")) {
    const panelHTML = `
      <div class="global-search-panel" id="global-search-panel" aria-hidden="true">
        <div class="global-search-inner">
          <div class="global-search-bar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF7D00" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="global-search-input" placeholder="Buscar carrera, posgrado, empleabilidad OLE o beca...">
            <button type="button" class="global-search-close" id="close-global-search" aria-label="Cerrar buscador">✕</button>
          </div>
          <div class="global-search-results" id="global-search-results"></div>
        </div>
      </div>
    `;
    header.insertAdjacentHTML("afterend", panelHTML);
  }

  const panel = document.getElementById("global-search-panel");
  const closeBtn = document.getElementById("close-global-search");
  const input = document.getElementById("global-search-input");
  const resultsBox = document.getElementById("global-search-results");

  function renderResults(term) {
    const q = term.trim().toLowerCase();
    const matches = (
      q
        ? catalog.filter((item) => item.title.toLowerCase().includes(q) || item.area.toLowerCase().includes(q))
        : catalog.slice(0, 6)
    ).slice(0, 8);

    if (matches.length === 0) {
      resultsBox.innerHTML = `
        <div class="global-search-empty">
          No se encontraron resultados para <strong>"${term}"</strong>. Intenta con otra palabra clave (ej. Multimedia, Empleabilidad, Becas).
        </div>
      `;
      return;
    }

    resultsBox.innerHTML = matches
      .map(
        (item) => `
        <a href="${item.url}" class="global-search-item">
          <small>${item.area}</small>
          <strong>${item.title}</strong>
        </a>
      `
      )
      .join("");
  }

  toggleBtn.addEventListener("click", () => {
    const isOpen = panel.classList.contains("open");
    if (isOpen) {
      panel.classList.remove("open");
      toggleBtn.classList.remove("active");
      panel.setAttribute("aria-hidden", "true");
    } else {
      panel.classList.add("open");
      toggleBtn.classList.add("active");
      panel.setAttribute("aria-hidden", "false");
      input.value = "";
      renderResults("");
      input.focus();
    }
  });

  closeBtn.addEventListener("click", () => {
    panel.classList.remove("open");
    toggleBtn.classList.remove("active");
    panel.setAttribute("aria-hidden", "true");
  });

  input.addEventListener("input", (e) => {
    renderResults(e.target.value);
  });
}

/* --------------------------------------------------------------------------
6. ASISTENTE VIRTUAL PACHITO & ESCALAMIENTO A ASESOR HUMANO - USB CALI
   -------------------------------------------------------------------------- */
function initPachitoChatbot() {
  const widget = document.querySelector(".pachito-widget");
  if (!widget) return;

  widget.removeAttribute("onclick");

  if (!document.getElementById("pachito-chat-window")) {
    const chatHTML = `
      <div class="pachito-chat-window" id="pachito-chat-window" aria-hidden="true">
        <div class="pachito-chat-header" id="pachito-chat-header">
          <div class="pachito-chat-header-info">
            <div class="pachito-chat-avatar" id="pachito-header-avatar"></div>
            <div>
              <h4 id="pachito-agent-name">Pachito USB</h4>
              <span class="pachito-status" id="pachito-agent-status">● Asistente Virtual en línea</span>
            </div>
          </div>
          <button type="button" class="pachito-close-btn" id="pachito-close-btn" aria-label="Cerrar chat">✕</button>
        </div>

        <div class="pachito-chat-body" id="pachito-chat-body">
          <div class="chat-msg bot">
            ¡Hola! Soy <strong>Pachito</strong>, tu guía en la USB Cali. ¿En qué tema te puedo ayudar hoy?
            <div class="chat-quick-replies" id="pachito-quick-replies">
              <button type="button" class="quick-reply-btn" data-topic="becas">Becas y Financiación</button>
              <button type="button" class="quick-reply-btn" data-topic="admisiones">Carreras e Inscripción</button>
              <button type="button" class="quick-reply-btn" data-topic="convenios">Convenios</button>
              <button type="button" class="quick-reply-btn" data-topic="asis">ASIS / Certificados</button>
            </div>
          </div>
        </div>

        <div class="pachito-escalate-bar" id="pachito-escalate-bar">
          <button type="button" class="btn-unresolved" id="btn-unresolved">
            No se resolvió el problema — Hablar con un encargado
          </button>
        </div>

        <form class="pachito-chat-footer" id="pachito-chat-form">
          <input type="text" id="pachito-input" placeholder="Escribe tu consulta aquí..." autocomplete="off">
          <button type="submit" aria-label="Enviar">➤</button>
        </form>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", chatHTML);
  }

  const chatWindow = document.getElementById("pachito-chat-window");
  const closeBtn = document.getElementById("pachito-close-btn");
  const chatBody = document.getElementById("pachito-chat-body");
  const chatForm = document.getElementById("pachito-chat-form");
  const chatInput = document.getElementById("pachito-input");
  const escalateBar = document.getElementById("pachito-escalate-bar");

  let humanConnected = false;
  let assignedAgent = null;

  const agentsByTopic = {
    becas: {
      name: "Laura Gómez",
      role: "Asesora de Servicios Financieros y Becas",
      ext: "Ext. 4120 · servicios_financieros@usbcali.edu.co",
      initials: "LG"
    },
    convenios: {
      name: "Andrea Ríos",
      role: "Coordinadora de Convenios y Alianzas",
      ext: "Ext. 4185 · convenios@usbcali.edu.co",
      initials: "AR"
    },
    admisiones: {
      name: "Carlos Méndez",
      role: "Asesor de Admisiones y Mercadeo",
      ext: "Ext. 4050 · admisiones@usbcali.edu.co",
      initials: "CM"
    },
    asis: {
      name: "Julián Torres",
      role: "Soporte Registro Académico y ASIS",
      ext: "Ext. 4210 · registro@usbcali.edu.co",
      initials: "JT"
    },
    general: {
      name: "Mariana Salcedo",
      role: "Atención Integral al Estudiante USB",
      ext: "PBX (602) 488 2222 · informacion@usbcali.edu.co",
      initials: "MS"
    }
  };

  function promptAreaSelection() {
    appendMessage("No se resolvió el problema", "user");
    setTimeout(() => {
      appendMessage(
        `Entiendo, vamos a conectarte de inmediato con una <strong>persona encargada</strong>. Confírmame el área de tu solicitud para asignarte al especialista:<br>
        <div class="chat-quick-replies" style="margin-top: 8px;">
          <button type="button" class="agent-select-btn" data-area="becas">Becas / Financiación</button>
          <button type="button" class="agent-select-btn" data-area="admisiones">Admisiones / Carreras</button>
          <button type="button" class="agent-select-btn" data-area="convenios">Convenios</button>
          <button type="button" class="agent-select-btn" data-area="asis">ASIS / Registro</button>
        </div>`,
        "bot"
      );
    }, 350);
  }

  widget.addEventListener("click", () => {
    const isOpen = chatWindow.classList.contains("open");
    if (isOpen) {
      chatWindow.classList.remove("open");
      chatWindow.setAttribute("aria-hidden", "true");
    } else {
      chatWindow.classList.add("open");
      chatWindow.setAttribute("aria-hidden", "false");
      chatInput.focus();
    }
  });

  closeBtn.addEventListener("click", () => {
    chatWindow.classList.remove("open");
    chatWindow.setAttribute("aria-hidden", "true");
  });

  chatBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("quick-reply-btn")) {
      const topic = e.target.getAttribute("data-topic");
      const label = e.target.textContent;
      appendMessage(label, "user");
      respondAsBot(topic);
    }

    if (e.target.classList.contains("agent-select-btn")) {
      const selectedArea = e.target.getAttribute("data-area");
      connectToHumanAgent(selectedArea);
    }
  });

  escalateBar.addEventListener("click", (e) => {
    if (e.target.closest("#btn-unresolved") && !humanConnected) {
      promptAreaSelection();
    } else if (e.target.closest("#btn-reset-bot")) {
      resetToBot();
    }
  });

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    chatInput.value = "";

    if (humanConnected) {
      respondAsHuman();
    } else {
      const detected = detectTopic(text);
      respondAsBot(detected);
    }
  });

  function detectTopic(text) {
    const t = text.toLowerCase();
    if (t.includes("beca") || t.includes("icfes") || t.includes("financ") || t.includes("icetex") || t.includes("pag") || t.includes("matr")) return "becas";
    if (t.includes("convenio") || t.includes("comfandi") || t.includes("comfenalco") || t.includes("descuento")) return "convenios";
    if (t.includes("asis") || t.includes("certificado") || t.includes("nota") || t.includes("correo") || t.includes("clave")) return "asis";
    if (t.includes("carrera") || t.includes("inscrip") || t.includes("facultad") || t.includes("ingenier") || t.includes("derecho") || t.includes("psicolog")) return "admisiones";
    return "general";
  }

  function respondAsBot(topic) {
    setTimeout(() => {
      let reply = "";
      if (topic === "becas") {
        reply = `Sobre <strong>Becas y Financiación</strong>: tenemos becas ICFES del 20% al 50% y crédito directo USB. Recuerda que las renovaciones se solicitan a <strong>servicios_financieros@usbcali.edu.co</strong>.<br><a href="becas.html" style="color:#EF7D00;font-weight:700;">Ver sección de Becas →</a>`;
      } else if (topic === "convenios") {
        reply = `Contamos con descuentos del <strong>10% al 15%</strong> por convenios con Comfandi, Comfenalco, colegios aliados y fuerzas militares.<br><a href="convenios.html" style="color:#EF7D00;font-weight:700;">Ver Convenios →</a>`;
      } else if (topic === "admisiones") {
        reply = `Tenemos 5 facultades acreditadas en Alta Calidad y una tasa de empleabilidad del 88.5%.<br><a href="impacto-real.html" style="color:#EF7D00;font-weight:700;">Ver cifras OLE →</a>`;
      } else if (topic === "asis") {
        reply = `Para ingreso a <strong>ASIS Autoservicio</strong> usa tu usuario institucional sin @correo.usbcali.edu.co. Si tu cuenta está bloqueada, te recomiendo escalar con un asesor.`;
      } else {
        reply = `Puedo orientarte sobre <strong>Becas</strong>, <strong>Convenios</strong>, <strong>Empleabilidad OLE</strong> o <strong>Admisiones</strong>. Si tu caso requiere revisión personalizada, presiona el botón naranja de abajo.`;
      }
      appendMessage(reply, "bot");
    }, 400);
  }

  function connectToHumanAgent(area) {
    humanConnected = true;
    assignedAgent = agentsByTopic[area] || agentsByTopic.general;

    const header = document.getElementById("pachito-chat-header");
    const avatar = document.getElementById("pachito-header-avatar");
    const agentName = document.getElementById("pachito-agent-name");
    const agentStatus = document.getElementById("pachito-agent-status");

    header.classList.add("human-mode");
    avatar.style.backgroundImage = "none";
    avatar.textContent = assignedAgent.initials;
    agentName.textContent = assignedAgent.name;
    agentStatus.textContent = `● ${assignedAgent.role}`;

    escalateBar.innerHTML = `
      <span class="human-badge-active">Conectado con especialista humano</span>
      <button type="button" class="btn-reset-bot" id="btn-reset-bot">Volver a Pachito</button>
    `;

    appendMessage(`Transfiriendo tu chat con <strong>${assignedAgent.name}</strong> (${assignedAgent.role})...`, "system");

    setTimeout(() => {
      appendMessage(
        `¡Hola! Soy <strong>${assignedAgent.name}</strong>, ${assignedAgent.role} de la USB Cali. Ya recibí el historial de tu consulta. Cuéntame tu nombre completo, programa y el detalle de tu caso para gestionarlo ahora mismo.`,
        "human"
      );
      chatInput.placeholder = `Escribe tu mensaje para ${assignedAgent.name}...`;
      chatInput.focus();
    }, 700);
  }

  function respondAsHuman() {
    const radicado = `USB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTimeout(() => {
      appendMessage(
        `¡Gracias por la información! He registrado tu caso bajo el radicado <strong>#${radicado}</strong> (${assignedAgent.ext}). En breve recibirás respuesta en tu correo o WhatsApp. ¿Deseas agregar algún dato adicional?`,
        "human"
      );
    }, 650);
  }

  function resetToBot() {
    humanConnected = false;
    assignedAgent = null;

    const header = document.getElementById("pachito-chat-header");
    const avatar = document.getElementById("pachito-header-avatar");
    const agentName = document.getElementById("pachito-agent-name");
    const agentStatus = document.getElementById("pachito-agent-status");

    header.classList.remove("human-mode");
    avatar.style.backgroundImage = "url('assets/img/pachito.jpg')";
    avatar.textContent = "";
    agentName.textContent = "Pachito USB";
    agentStatus.textContent = "● Asistente Virtual en línea";
    chatInput.placeholder = "Escribe tu consulta aquí...";

    escalateBar.innerHTML = `
      <button type="button" class="btn-unresolved" id="btn-unresolved">
        No se resolvió el problema — Hablar con un encargado
      </button>
    `;

    appendMessage("Has regresado con <strong>Pachito USB</strong>. ¿En qué más te puedo ayudar?", "system");
  }

  function appendMessage(html, sender) {
    const msg = document.createElement("div");
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = html;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}