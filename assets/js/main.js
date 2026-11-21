/* ==========================================================================
   ASISTENTE VIRTUAL PACHITO & ESCALAMIENTO A ASESOR HUMANO - USB CALI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPachitoChatbot();
});

function initPachitoChatbot() {
  const widget = document.querySelector('.pachito-widget');
  if (!widget) return;

  // Evitar que el onclick antiguo redirija a admisiones.html
  widget.removeAttribute('onclick');

  // Crear ventana del chatbot si no existe
  if (!document.getElementById('pachito-chat-window')) {
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

        <!-- BARRA DE ESCALAMIENTO A HUMANO -->
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
    document.body.insertAdjacentHTML('beforeend', chatHTML);
  }

  const chatWindow = document.getElementById('pachito-chat-window');
  const closeBtn = document.getElementById('pachito-close-btn');
  const chatBody = document.getElementById('pachito-chat-body');
  const chatForm = document.getElementById('pachito-chat-form');
  const chatInput = document.getElementById('pachito-input');
  const btnUnresolved = document.getElementById('btn-unresolved');
  const escalateBar = document.getElementById('pachito-escalate-bar');

  let currentTopic = 'general';
  let humanConnected = false;
  let assignedAgent = null;

  const agentsByTopic = {
    becas: {
      name: 'Laura Gómez',
      role: 'Asesora de Servicios Financieros y Becas',
      ext: 'Ext. 4120 · servicios_financieros@usbcali.edu.co',
      initials: 'LG'
    },
    convenios: {
      name: 'Andrea Ríos',
      role: 'Coordinadora de Convenios y Alianzas',
      ext: 'Ext. 4185 · convenios@usbcali.edu.co',
      initials: 'AR'
    },
    admisiones: {
      name: 'Carlos Méndez',
      role: 'Asesor de Admisiones y Mercadeo',
      ext: 'Ext. 4050 · admisiones@usbcali.edu.co',
      initials: 'CM'
    },
    asis: {
      name: 'Julián Torres',
      role: 'Soporte Registro Académico y ASIS',
      ext: 'Ext. 4210 · registro@usbcali.edu.co',
      initials: 'JT'
    },
    general: {
      name: 'Mariana Salcedo',
      role: 'Atención Integral al Estudiante USB',
      ext: 'PBX (602) 488 2222 · atencion@usbcali.edu.co',
      initials: 'MS'
    }
  };

  // Abrir / Cerrar chat al hacer clic en Pachito
  widget.addEventListener('click', () => {
    const isOpen = chatWindow.classList.contains('open');
    if (isOpen) {
      chatWindow.classList.remove('open');
      chatWindow.setAttribute('aria-hidden', 'true');
    } else {
      chatWindow.classList.add('open');
      chatWindow.setAttribute('aria-hidden', 'false');
      chatInput.focus();
    }
  });

  closeBtn.addEventListener('click', () => {
    chatWindow.classList.remove('open');
    chatWindow.setAttribute('aria-hidden', 'true');
  });

  // Botones de respuesta rápida
  chatBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-reply-btn')) {
      const topic = e.target.getAttribute('data-topic');
      const label = e.target.textContent;
      currentTopic = topic;
      appendMessage(label, 'user');
      respondAsBot(topic, label);
    }

    // Selección de área al escalar a humano
    if (e.target.classList.contains('agent-select-btn')) {
      const selectedArea = e.target.getAttribute('data-area');
      connectToHumanAgent(selectedArea);
    }
  });

  // Envío de texto libre
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    chatInput.value = '';

    if (humanConnected) {
      respondAsHuman(text);
    } else {
      const detected = detectTopic(text);
      if (detected !== 'general') currentTopic = detected;
      respondAsBot(detected, text);
    }
  });

  // Botón: "No se resolvió el problema"
  btnUnresolved.addEventListener('click', () => {
    if (humanConnected) return;

    appendMessage('No se resolvió el problema', 'user');

    setTimeout(() => {
      appendMessage(
        `Entiendo, vamos a conectarte de inmediato con una <strong>persona encargada</strong>. Confírmame el área de tu solicitud para asignarte al especialista:<br>
        <div class="chat-quick-replies" style="margin-top: 8px;">
          <button type="button" class="agent-select-btn" data-area="becas">Becas / Financiación</button>
          <button type="button" class="agent-select-btn" data-area="admisiones">Admisiones / Carreras</button>
          <button type="button" class="agent-select-btn" data-area="convenios">Convenios</button>
          <button type="button" class="agent-select-btn" data-area="asis">ASIS / Registro</button>
        </div>`,
        'bot'
      );
    }, 350);
  });

  function detectTopic(text) {
    const t = text.toLowerCase();
    if (t.includes('beca') || t.includes('icfes') || t.includes('financ') || t.includes('icetex') || t.includes('pag') || t.includes('matr')) return 'becas';
    if (t.includes('convenio') || t.includes('comfandi') || t.includes('comfenalco') || t.includes('descuento')) return 'convenios';
    if (t.includes('asis') || t.includes('certificado') || t.includes('nota') || t.includes('correo') || t.includes('clave')) return 'asis';
    if (t.includes('carrera') || t.includes('inscrip') || t.includes('facultad') || t.includes('ingenier') || t.includes('derecho') || t.includes('psicolog')) return 'admisiones';
    return 'general';
  }

  function respondAsBot(topic) {
    setTimeout(() => {
      let reply = '';
      if (topic === 'becas') {
        reply = `Sobre <strong>Becas y Financiación</strong>: tenemos becas ICFES del 20% al 50% y crédito directo USB. Recuerda que las renovaciones se solicitan a <strong>servicios_financieros@usbcali.edu.co</strong>.<br><a href="becas.html" style="color:#EF7D00;font-weight:700;">Ver sección de Becas →</a>`;
      } else if (topic === 'convenios') {
        reply = `Contamos con descuentos del <strong>10% al 15%</strong> por convenios con Comfandi, Comfenalco, colegios aliados y fuerzas militares.<br><a href="convenios.html" style="color:#EF7D00;font-weight:700;">Ver Convenios →</a>`;
      } else if (topic === 'admisiones') {
        reply = `Tenemos 5 facultades acreditadas en Alta Calidad. Puedes explorar los planes de estudio por semestre o simular tu beca.<br><a href="facultades.html" style="color:#EF7D00;font-weight:700;">Explorar Facultades →</a>`;
      } else if (topic === 'asis') {
        reply = `Para ingreso a <strong>ASIS Autoservicio</strong> usa tu usuario institucional sin @correo.usbcali.edu.co. Si tu cuenta está bloqueada, te recomiendo escalar con un asesor.`;
      } else {
        reply = `Puedo orientarte sobre <strong>Becas</strong>, <strong>Convenios</strong>, <strong>Financiación</strong> o <strong>Admisiones</strong>. Si tu caso requiere revisión personalizada, presiona el botón naranja de abajo.`;
      }
      appendMessage(reply, 'bot');
    }, 400);
  }

  function connectToHumanAgent(area) {
    humanConnected = true;
    assignedAgent = agentsByTopic[area] || agentsByTopic.general;

    // Actualizar cabecera a modo Asesor Humano
    const header = document.getElementById('pachito-chat-header');
    const avatar = document.getElementById('pachito-header-avatar');
    const agentName = document.getElementById('pachito-agent-name');
    const agentStatus = document.getElementById('pachito-agent-status');

    header.classList.add('human-mode');
    avatar.style.backgroundImage = 'none';
    avatar.textContent = assignedAgent.initials;
    agentName.textContent = assignedAgent.name;
    agentStatus.textContent = `● ${assignedAgent.role}`;

    // Ocultar barra de "No se resolvió" y agregar botón para volver a Pachito
    escalateBar.innerHTML = `
      <span class="human-badge-active">Conectado con especialista humano</span>
      <button type="button" class="btn-reset-bot" id="btn-reset-bot">Volver a Pachito</button>
    `;

    document.getElementById('btn-reset-bot').addEventListener('click', resetToBot);

    appendMessage(`Transfiriendo tu chat con <strong>${assignedAgent.name}</strong> (${assignedAgent.role})...`, 'system');

    setTimeout(() => {
      appendMessage(
        `¡Hola! Soy <strong>${assignedAgent.name}</strong>, ${assignedAgent.role} de la USB Cali. Ya recibí el historial de tu consulta. Cuéntame tu nombre completo, programa y el detalle de tu caso para gestionarlo ahora mismo.`,
        'human'
      );
      chatInput.placeholder = `Escribe tu mensaje para ${assignedAgent.name}...`;
      chatInput.focus();
    }, 700);
  }

  function respondAsHuman(userText) {
    setTimeout(() => {
      appendMessage(
        `¡Gracias por la información! He registrado tu caso bajo el radicado <strong>#USB-2026-${Math.floor(1000 + Math.random() * 9000)}</strong>. En este momento estoy validando tu solicitud en nuestro sistema institucional (${assignedAgent.ext}). ¿Deseas agregar algún documento o número de contacto adicional?`,
        'human'
      );
    }, 650);
  }

  function resetToBot() {
    humanConnected = false;
    assignedAgent = null;

    const header = document.getElementById('pachito-chat-header');
    const avatar = document.getElementById('pachito-header-avatar');
    const agentName = document.getElementById('pachito-agent-name');
    const agentStatus = document.getElementById('pachito-agent-status');

    header.classList.remove('human-mode');
    avatar.style.backgroundImage = "url('assets/img/pachito.jpg')";
    avatar.textContent = '';
    agentName.textContent = 'Pachito USB';
    agentStatus.textContent = '● Asistente Virtual en línea';
    chatInput.placeholder = 'Escribe tu consulta aquí...';

    escalateBar.innerHTML = `
      <button type="button" class="btn-unresolved" id="btn-unresolved">
        No se resolvió el problema — Hablar con un encargado
      </button>
    `;
    document.getElementById('btn-unresolved').addEventListener('click', () => {
      appendMessage('No se resolvió el problema', 'user');
      appendMessage(
        `Selecciona el área encargada para conectarte:<br>
        <div class="chat-quick-replies" style="margin-top: 8px;">
          <button type="button" class="agent-select-btn" data-area="becas">Becas / Financiación</button>
          <button type="button" class="agent-select-btn" data-area="admisiones">Admisiones / Carreras</button>
          <button type="button" class="agent-select-btn" data-area="convenios">Convenios</button>
          <button type="button" class="agent-select-btn" data-area="asis">ASIS / Registro</button>
        </div>`,
        'bot'
      );
    });

    appendMessage('Has regresado con <strong>Pachito USB</strong>. ¿En qué más te puedo ayudar?', 'system');
  }

  function appendMessage(html, sender) {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = html;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}