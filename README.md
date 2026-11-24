# pagusb
# Rediseño UX/UI del Sitio Web Institucional — Universidad de San Buenaventura Cali

Prototipo navegable de alta fidelidad desarrollado como Trabajo de Grado en **Ingeniería Multimedia** (Universidad de San Buenaventura Cali, 2026).

🌐 **Demo en vivo:** [https://dysofer.github.io/pagusb/](https://dysofer.github.io/pagusb/)

## Características principales
- **Arquitectura de Información a 3 clics:** Barra institucional superior (*Top Bar*) y menú global unificado.
- **Oferta Académica por Facultades:** Directorio interactivo para las 5 facultades con filtros de Pregrado y Posgrado (`facultades.html`, `facultad.html`).
- **Pensums Dinámicos:** Conmutación por bloques semestrales y etiquetas por área de formación.
- **Módulo de Apoyo Financiero:** Vistas dedicadas para **Becas** (con simulador en tiempo real por puntaje Saber 11), **Convenios** y **Opciones de Financiación**.
- **Asistente Virtual Pachito:** Widget flotante interactivo con respuestas rápidas y escalamiento simulado a asesores humanos por área.

## Estructura del proyecto
├── index.html                  # Portada principal institucional
├── index-event.html            # Variante promocional de eventos / Open Day
├── facultades.html             # Catálogo general de las 5 facultades
├── facultad.html               # Vista dinámica por facultad y programas
├── programa.html               # Plantilla detallada de programa académico
├── ingenieria-multimedia.html  # Vista piloto Ingeniería Multimedia
├── derecho.html                # Vista piloto Derecho
├── psicologia.html             # Vista piloto Psicología
├── mercadco.html               # Vista piloto Mercadeo y Negocios
├── becas.html                  # Simulador de becas Saber 11
├── convenios.html              # Convenios institucionales
├── financiacion.html           # Alternativas de financiación educativa
├── admisiones.html             # Proceso de admisión paso a paso
├── vida-universitaria.html     # Campus La Umbría y bienestar
└── assets/
    ├── css/styles.css          # Sistema de diseño y variables institucionales
    └── js/main.js              # Lógica interactiva, filtros, simulador y chat Pachito

## Ejecución local
1. Clonar el repositorio: `git clone https://github.com/dysofer/pagusb.git`
2. Abrir la carpeta en Visual Studio Code y lanzar `index.html` con **Live Server** o abrir directamente en un navegador de escritorio (Chrome / Edge).

## Autores
- Dilan Alexander Solis Fernandez
- Elian David Herrera
- Juan José Collazos Tenorio
