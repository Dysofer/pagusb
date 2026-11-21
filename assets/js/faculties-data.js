const facultiesCatalog = [
  {
    id: "arquitectura",
    shortName: "Arquitectura, Arte y Diseño",
    name: "Facultad de Arquitectura, Arte y Diseño",
    color: "#D9531E",
    description: "Formación creativa, proyectual y sostenible orientada al diseño arquitectónico, el hábitat urbano, el vestuario y la innovación espacial.",
    pregrado: [
      {
        id: "arquitectura",
        name: "Arquitectura",
        titleAwarded: "Arquitecto(a)",
        duration: "10 Semestres",
        modality: "Presencial / Diurna",
        snies: "1105",
        accreditation: "Alta Calidad (MEN)",
        credits: "172 Créditos",
        summary: "Diseño arquitectónico bioclimático, urbanismo sostenible, talleres de proyecto y laboratorios de fabricación digital en el campus.",
        metrics: [
          { value: "91%", title: "Empleabilidad", sub: "Sector construcción, diseño y urbanismo" },
          { value: "6 Talleres", title: "Fabricación Digital", sub: "Impresión 3D, corte láser y maquetación" },
          { value: "Alta Calidad", title: "Acreditación Oficial", sub: "Reconocimiento nacional e internacional" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Taller de Proyecto I: Espacio y Forma", area: "Proyectual" },
              { name: "Geometría Descriptiva", area: "Expresión" },
              { name: "Expresión Gráfica y Bocetación", area: "Expresión" },
              { name: "Introducción a la Arquitectura", area: "Teoría" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Taller de Proyecto II: Lugar y Composición", area: "Proyectual" },
              { name: "Representación Arquitectónica Digital", area: "Tecnología" },
              { name: "Historia de la Arquitectura Antigua", area: "Humanidades" },
              { name: "Fundamentos Estructurales", area: "Tecnología" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Taller de Proyecto III: Vivienda Colectiva", area: "Proyectual" },
              { name: "Modelado BIM I", area: "Tecnología" },
              { name: "Materiales y Procesos Constructivos", area: "Construcción" },
              { name: "Arquitectura Moderna", area: "Teoría" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Taller de Proyecto IV: Hábitat y Entorno", area: "Proyectual" },
              { name: "Arquitectura Bioclimática", area: "Ambiental" },
              { name: "Sistemas Estructurales en Concreto", area: "Tecnología" },
              { name: "Teoría Urbana I", area: "Urbano" }
            ]
          },
          {
            label: "Semestre 5",
            subjects: [
              { name: "Taller de Proyecto V: Espacio Público", area: "Proyectual" },
              { name: "Urbanismo y Morfología de Ciudad", area: "Urbano" },
              { name: "Instalaciones Técnicas en Edificaciones", area: "Construcción" },
              { name: "Arquitectura Latinoamericana", area: "Humanidades" }
            ]
          },
          {
            label: "Semestre 6",
            subjects: [
              { name: "Taller de Proyecto VI: Equipamientos Urbanos", area: "Proyectual" },
              { name: "Sistemas Estructurales Metálicos", area: "Tecnología" },
              { name: "Ordenamiento Territorial", area: "Urbano" },
              { name: "Fabricación Digital y Prototipado", area: "Innovación" }
            ]
          },
          {
            label: "Semestre 7",
            subjects: [
              { name: "Taller de Proyecto VII: Edificio en Altura", area: "Proyectual" },
              { name: "Gestión de Obra y Presupuestos", area: "Gestión" },
              { name: "Intervención del Patrimonio Arquitectónico", area: "Patrimonio" },
              { name: "Sostenibilidad Ambiental Urbana", area: "Ambiental" }
            ]
          },
          {
            label: "Semestre 8",
            subjects: [
              { name: "Taller de Proyecto VIII: Proyecto Urbano Integral", area: "Proyectual" },
              { name: "Programación y Control de Obra", area: "Gestión" },
              { name: "Seminario de Investigación Proyectual", area: "Investigación" },
              { name: "Electiva de Profundización I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 9",
            subjects: [
              { name: "Práctica Profesional Supervisada", area: "Práctica" },
              { name: "Anteproyecto de Grado", area: "Investigación" },
              { name: "Legislación Urbana y Construcción", area: "Normativa" },
              { name: "Electiva de Profundización II", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 10",
            subjects: [
              { name: "Proyecto de Grado Arquitectónico", area: "Grado" },
              { name: "Gerencia de Proyectos Arquitectónicos", area: "Gestión" },
              { name: "Ética Profesional Franciscana", area: "Humanidades" },
              { name: "Electiva de Profundización III", area: "Énfasis" }
            ]
          }
        ],
        features: [
          { title: "Taller de Fabricación Digital", desc: "Equipos CNC, impresoras 3D de gran formato y cortadoras láser para prototipado." },
          { title: "Campus Bioclimático", desc: "Laboratorio vivo de 28 hectáreas de arquitectura integrada con la naturaleza." },
          { title: "Movilidad Internacional", desc: "Convenios de intercambio con escuelas de arquitectura en Europa y Latinoamérica." }
        ]
      },
      {
        id: "diseno-vestuario",
        name: "Diseño de Vestuario",
        titleAwarded: "Diseñador(a) de Vestuario",
        duration: "8 Semestres",
        modality: "Presencial / Diurna",
        snies: "104591",
        accreditation: "Registro Calificado",
        credits: "144 Créditos",
        summary: "Creación de colecciones, patronaje digital, textiles sostenibles y gestión estratégica de marca de moda.",
        metrics: [
          { value: "88%", title: "Inserción Laboral", sub: "Industria textil, moda y emprendimiento" },
          { value: "100%", title: "Talleres Prácticos", sub: "Patronaje, confección y software 3D" },
          { value: "Pasarela USB", title: "Proyección Real", sub: "Exhibición en eventos regionales de moda" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Fundamentos del Diseño y Color", area: "Creación" },
              { name: "Ilustración Básica de Moda", area: "Expresión" },
              { name: "Patronaje Básico Femenino", area: "Técnica" },
              { name: "Historia de la Indumentaria I", area: "Teoría" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Taller de Siluetas y Volúmenes", area: "Creación" },
              { name: "Figurín y Representación Digital", area: "Expresión" },
              { name: "Técnicas de Confección Industrial", area: "Técnica" },
              { name: "Ciencia de los Materiales Textiles", area: "Materiales" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Diseño de Línea Casual y Urbana", area: "Creación" },
              { name: "Patronaje Masculino e Infantil", area: "Técnica" },
              { name: "Procesos de Tintorería y Estampación", area: "Materiales" },
              { name: "Sociología de la Moda y Consumo", area: "Teoría" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Taller de Sastrería y Estructura", area: "Técnica" },
              { name: "Patronaje Digital CAD", area: "Tecnología" },
              { name: "Ecodiseño y Textiles Sostenibles", area: "Sostenibilidad" },
              { name: "Fotografía y Estilismo de Moda", area: "Comunicación" }
            ]
          },
          {
            label: "Semestre 5",
            subjects: [
              { name: "Diseño de Colecciones Cápsula", area: "Creación" },
              { name: "Simulación 3D de Prendas (CLO 3D)", area: "Tecnología" },
              { name: "Gestión de Producción Textil", area: "Gestión" },
              { name: "Tendencias y Coolhunting", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 6",
            subjects: [
              { name: "Taller de Alta Costura y Experimentación", area: "Creación" },
              { name: "Fashion Marketing y Branding", area: "Negocios" },
              { name: "Costos y Presupuestos de Colección", area: "Gestión" },
              { name: "Seminario de Investigación en Moda", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 7",
            subjects: [
              { name: "Práctica Empresarial en Industria Moda", area: "Práctica" },
              { name: "Comercio Exterior Textil", area: "Negocios" },
              { name: "Anteproyecto de Colección Autor", area: "Investigación" },
              { name: "Electiva de Profundización I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 8",
            subjects: [
              { name: "Proyecto de Grado: Colección Autor", area: "Grado" },
              { name: "Producción y Escenografía de Pasarela", area: "Eventos" },
              { name: "Emprendimiento y Creación de Marca", area: "Negocios" },
              { name: "Electiva de Profundización II", area: "Énfasis" }
            ]
          }
        ],
        features: [
          { title: "Laboratorios de Confección", desc: "Maquinaria industrial especializada, mesas de corte y software de patronaje CAD." },
          { title: "Moda Sostenible", desc: "Enfoque en economía circular, tintorería natural y ecodiseño textil." },
          { title: "Conexión Empresarial", desc: "Alianzas directas con clústeres textiles y pasarelas del Valle del Cauca." }
        ]
      }
    ],
    posgrado: [
      {
        id: "maestria-arquitectura-urbanismo",
        name: "Maestría en Arquitectura y Urbanismo",
        degree: "Maestría",
        titleAwarded: "Magíster en Arquitectura y Urbanismo",
        duration: "4 Semestres",
        modality: "Presencial",
        snies: "102945",
        accreditation: "Registro Calificado",
        credits: "48 Créditos",
        summary: "Investigación y proyección territorial enfocada en ciudades sostenibles, hábitat contemporáneo y patrimonio arquitectónico.",
        metrics: [
          { value: "4 Semestres", title: "Duración Ejecutiva", sub: "Horarios flexibles de posgrado" },
          { value: "2 Líneas", title: "Énfasis Investigativo", sub: "Territorio Sostenible y Proyecto" },
          { value: "Grupos A1", title: "Respaldo Investigativo", sub: "Categorizados por Minciencias" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Teoría Contemporánea de la Ciudad", area: "Teoría" },
              { name: "Metodología de Investigación Urbano-Ambiental", area: "Investigación" },
              { name: "Taller Avanzado de Proyecto I", area: "Proyectual" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Gobernanza y Planificación Metropolitana", area: "Gestión" },
              { name: "Taller Avanzado de Proyecto Territorial II", area: "Proyectual" },
              { name: "Seminario de Investigación I", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Infraestructura Verde y Resiliencia Urbana", area: "Sostenibilidad" },
              { name: "Electiva Internacional de Urbanismo", area: "Énfasis" },
              { name: "Seminario de Trabajo de Grado I", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Gestión de Proyectos Urbanos Complejos", area: "Gestión" },
              { name: "Seminario de Trabajo de Grado II", area: "Investigación" },
              { name: "Sustentación de Tesis de Maestría", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Docentes Invitados", desc: "Arquitectos y urbanistas de trayectoria nacional e internacional." },
          { title: "Laboratorio Territorial", desc: "Estudios aplicados sobre el área metropolitana de Cali y el Pacífico." },
          { title: "Doble Modalidad", desc: "Ruta de profundización proyectual o ruta de investigación académica." }
        ]
      },
      {
        id: "esp-patrimonio-cultural",
        name: "Especialización en Intervención del Patrimonio Cultural",
        degree: "Especialización",
        titleAwarded: "Especialista en Intervención del Patrimonio Cultural",
        duration: "2 Semestres",
        modality: "Presencial",
        snies: "91420",
        accreditation: "Registro Calificado",
        credits: "26 Créditos",
        summary: "Conservación, restauración y gestión técnica de edificaciones, centros históricos y entornos patrimoniales.",
        metrics: [
          { value: "1 Año", title: "Titulación Rápida", sub: "2 semestres académicos intensivos" },
          { value: "100%", title: "Casos Reales", sub: "Diagnóstico en inmuebles patrimoniales" },
          { value: "Alta Demanda", title: "Sector Público y Privado", sub: "Consultoría y restauración" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Historia y Teoría de la Conservación", area: "Fundamentos" },
              { name: "Patología de Materiales Históricos", area: "Técnica" },
              { name: "Legislación y Gestión del Patrimonio", area: "Normativa" },
              { name: "Taller de Diagnóstico Patrimonial", area: "Práctica" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Técnicas de Restauración Estructural", area: "Técnica" },
              { name: "Sostenibilidad y Turismo Cultural", area: "Gestión" },
              { name: "Taller de Proyecto de Intervención", area: "Proyectual" },
              { name: "Seminario de Caso de Estudio", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Prácticas de Campo", desc: "Levantamientos técnicos en edificaciones patrimoniales del suroccidente." },
          { title: "Enfoque Interdisciplinar", desc: "Abierto a arquitectos, ingenieros civiles, historiadores y restauradores." },
          { title: "Homologación", desc: "Créditos homologables con la Maestría en Arquitectura y Urbanismo." }
        ]
      }
    ]
  },
  {
    id: "economicas",
    shortName: "Ciencias Económicas",
    name: "Facultad de Ciencias Económicas",
    color: "#008751",
    description: "Liderazgo empresarial, analítica de mercados globales, finanzas corporativas y gestión estratégica para organizaciones competitivas.",
    pregrado: [
      {
        id: "mercadeo",
        name: "Mercadeo y Negocios Internacionales",
        titleAwarded: "Profesional en Mercadeo y Negocios Internacionales",
        duration: "8 Semestres",
        modality: "Presencial / Diurna",
        snies: "108231",
        accreditation: "Res. No. 008207",
        credits: "145 Créditos",
        url: "mercadeo.html",
        summary: "Estrategias de marketing digital, comercio exterior, analítica de datos globales y simuladores de negocios internacionales."
      },
      {
        id: "administracion-negocios",
        name: "Administración de Negocios",
        titleAwarded: "Administrador(a) de Negocios",
        duration: "8 Semestres",
        modality: "Presencial / Diurna - Nocturna",
        snies: "1104",
        accreditation: "Alta Calidad (MEN)",
        credits: "146 Créditos",
        summary: "Gestión organizacional, emprendimiento, finanzas corporativas y toma de decisiones estratégicas en entornos globales.",
        metrics: [
          { value: "90.2%", title: "Empleabilidad", sub: "Cargos directivos y de gestión empresarial" },
          { value: "Doble Jornada", title: "Flexibilidad", sub: "Opción diurna y nocturna disponible" },
          { value: "Alta Calidad", title: "Acreditación MEN", sub: "Trayectoria de excelencia empresarial" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Fundamentos de Administración", area: "Gestión" },
              { name: "Matemáticas Aplicadas a Negocios", area: "Cuantitativa" },
              { name: "Contabilidad Financiera I", area: "Finanzas" },
              { name: "Habilidades Comunicativas y Liderazgo", area: "Humanidades" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Proceso Administrativo y Organizacional", area: "Gestión" },
              { name: "Microeconomía", area: "Economía" },
              { name: "Estadística Descriptiva", area: "Cuantitativa" },
              { name: "Derecho Empresarial y Laboral", area: "Jurídica" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Gestión del Talento Humano", area: "Organización" },
              { name: "Macroeconomía", area: "Economía" },
              { name: "Matemática Financiera", area: "Finanzas" },
              { name: "Estadística Inferencial", area: "Cuantitativa" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Costos y Presupuestos", area: "Finanzas" },
              { name: "Fundamentos de Mercadeo", area: "Mercadeo" },
              { name: "Investigación de Operaciones", area: "Operaciones" },
              { name: "Comportamiento Organizacional", area: "Organización" }
            ]
          },
          {
            label: "Semestre 5",
            subjects: [
              { name: "Finanzas Corporativas", area: "Finanzas" },
              { name: "Gestión de Operaciones y Logística", area: "Operaciones" },
              { name: "Innovación y Modelos de Negocio", area: "Emprendimiento" },
              { name: "Analítica de Datos Empresariales", area: "Tecnología" }
            ]
          },
          {
            label: "Semestre 6",
            subjects: [
              { name: "Evaluación Financiera de Proyectos", area: "Finanzas" },
              { name: "Negocios Internacionales y Comercio", area: "Global" },
              { name: "Sistemas de Información Gerencial", area: "Tecnología" },
              { name: "Seminario de Investigación Empresarial", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 7",
            subjects: [
              { name: "Gerencia Estratégica", area: "Estrategia" },
              { name: "Simulación Gerencial (Business Game)", area: "Simulación" },
              { name: "Gobierno Corporativo y Ética", area: "Ética" },
              { name: "Electiva de Profundización I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 8",
            subjects: [
              { name: "Práctica Empresarial Profesional", area: "Práctica" },
              { name: "Proyecto de Grado / Creación de Empresa", area: "Grado" },
              { name: "Responsabilidad Social Empresarial", area: "Sostenibilidad" },
              { name: "Electiva de Profundización II", area: "Énfasis" }
            ]
          }
        ],
        features: [
          { title: "Laboratorio Financiero", desc: "Acceso a bases de datos bursátiles y simuladores gerenciales." },
          { title: "Centro de Emprendimiento", desc: "Incubación y mentoría para creación de startups y empresas propias." },
          { title: "Doble Titulación", desc: "Posibilidad de cursar materias compartidas con Mercadeo o Contaduría." }
        ]
      },
      {
        id: "contaduria-publica",
        name: "Contaduría Pública",
        titleAwarded: "Contador(a) Público(a)",
        duration: "8 Semestres",
        modality: "Presencial / Nocturna",
        snies: "1106",
        accreditation: "Alta Calidad (MEN)",
        credits: "148 Créditos",
        summary: "Normas internacionales NIIF, auditoría forense, tributación y consultoría financiera para empresas nacionales y multinacionales.",
        metrics: [
          { value: "93%", title: "Vinculación Laboral", sub: "Firmas auditoras Big Four y corporativos" },
          { value: "100% NIIF", title: "Estándar Global", sub: "Formación en normatividad internacional" },
          { value: "Horario Nocturno", title: "Ideal para Trabajar", sub: "Compatible con experiencia laboral" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Contabilidad General I", area: "Contable" },
              { name: "Matemáticas Financieras", area: "Finanzas" },
              { name: "Fundamentos de Administración", area: "Gestión" },
              { name: "Derecho Constitucional y Civil", area: "Jurídica" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Contabilidad de Activos y Pasivos", area: "Contable" },
              { name: "Derecho Comercial y Societario", area: "Jurídica" },
              { name: "Microeconomía y Macroeconomía", area: "Economía" },
              { name: "Estadística Aplicada", area: "Cuantitativa" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Estándares Internacionales NIIF I", area: "Internacional" },
              { name: "Contabilidad de Costos I", area: "Finanzas" },
              { name: "Derecho Laboral y Seguridad Social", area: "Jurídica" },
              { name: "Sistemas de Información Contable", area: "Tecnología" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Estándares Internacionales NIIF II", area: "Internacional" },
              { name: "Contabilidad Gerencial y Presupuestos", area: "Finanzas" },
              { name: "Impuesto sobre la Renta", area: "Tributaria" },
              { name: "Control Interno y Riesgos", area: "Auditoría" }
            ]
          },
          {
            label: "Semestre 5",
            subjects: [
              { name: "Consolidación de Estados Financieros", area: "Contable" },
              { name: "IVA y Tributación Territorial", area: "Tributaria" },
              { name: "Auditoría Financiera I", area: "Auditoría" },
              { name: "Finanzas Corporativas", area: "Finanzas" }
            ]
          },
          {
            label: "Semestre 6",
            subjects: [
              { name: "Revisoría Fiscal", area: "Auditoría" },
              { name: "Procedimiento Tributario", area: "Tributaria" },
              { name: "Contabilidad Pública y Presupuesto Estatal", area: "Público" },
              { name: "Seminario de Investigación Contable", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 7",
            subjects: [
              { name: "Auditoría Forense y Aseguramiento", area: "Auditoría" },
              { name: "Planeación Tributaria Internacional", area: "Tributaria" },
              { name: "Analítica Financiera y Business Intelligence", area: "Tecnología" },
              { name: "Electiva de Profundización I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 8",
            subjects: [
              { name: "Consultorio Contable y Práctica Profesional", area: "Práctica" },
              { name: "Trabajo de Grado en Ciencias Contables", area: "Grado" },
              { name: "Ética y Fe Pública del Contador", area: "Ética" },
              { name: "Electiva de Profundización II", area: "Énfasis" }
            ]
          }
        ],
        features: [
          { title: "Consultorio Contable", desc: "Atención real a pymes y emprendedores con acompañamiento docente." },
          { title: "Software ERP Empresarial", desc: "Entrenamiento práctico en herramientas contables y tributarias líderes." },
          { title: "Enfoque Internacional", desc: "Preparación alineada con certificaciones internacionales de auditoría." }
        ]
      }
    ],
    posgrado: [
      {
        id: "maestria-alta-direccion",
        name: "Maestría en Alta Dirección de Servicios",
        degree: "Maestría",
        titleAwarded: "Magíster en Alta Dirección de Servicios",
        duration: "4 Semestres",
        modality: "Presencial",
        snies: "103812",
        accreditation: "Registro Calificado",
        credits: "48 Créditos",
        summary: "Dirección estratégica, experiencia del cliente (CX), transformación digital y liderazgo ejecutivo en organizaciones de servicios.",
        metrics: [
          { value: "4 Semestres", title: "Formato Ejecutivo", sub: "Clases concentradas fines de semana" },
          { value: "+35%", title: "Crecimiento Salarial", sub: "Proyección directiva de egresados" },
          { value: "Networking", title: "Red Ejecutiva", sub: "Directivos y gerentes de la región" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Estrategia Competitiva en Servicios", area: "Dirección" },
              { name: "Comportamiento del Consumidor de Servicios", area: "Mercadeo" },
              { name: "Seminario de Investigación Aplicada I", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Diseño de Experiencia del Cliente (CX)", area: "Innovación" },
              { name: "Finanzas para la Toma de Decisiones", area: "Finanzas" },
              { name: "Liderazgo y Transformación Cultural", area: "Habilidades" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Transformación Digital y Analítica de Servicio", area: "Tecnología" },
              { name: "Calidad y Operaciones de Servicio Global", area: "Operaciones" },
              { name: "Seminario de Trabajo de Grado I", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Gobierno Corporativo y Sostenibilidad", area: "Estrategia" },
              { name: "Proyecto Aplicado de Consultoría", area: "Grado" },
              { name: "Seminario Internacional de Servicios", area: "Global" }
            ]
          }
        ],
        features: [
          { title: "Enfoque 100% Gerencial", desc: "Metodología de estudio de casos reales de empresas líderes de servicios." },
          { title: "Misión Académica", desc: "Opción de inmersión empresarial internacional." },
          { title: "Articulación", desc: "Posibilidad de homologar créditos desde especializaciones de la facultad." }
        ]
      },
      {
        id: "esp-finanzas",
        name: "Especialización en Finanzas",
        degree: "Especialización",
        titleAwarded: "Especialista en Finanzas",
        duration: "2 Semestres",
        modality: "Presencial",
        snies: "4485",
        accreditation: "Registro Calificado",
        credits: "26 Créditos",
        summary: "Valoración de empresas, mercados de capitales, banca de inversión y gestión integral del riesgo financiero.",
        metrics: [
          { value: "2 Semestres", title: "Duración", sub: "1 año de formación especializada" },
          { value: "94%", title: "Empleabilidad", sub: "Sector financiero y banca corporativa" },
          { value: "Modelaje", title: "100% Práctico", sub: "Simulación de portafolios y riesgo" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Entorno Económico y Mercados Financieros", area: "Economía" },
              { name: "Análisis Financiero Avanzado", area: "Corporativa" },
              { name: "Matemática Financiera y Derivados", area: "Cuantitativa" },
              { name: "Gestión de Tesorería y Capital de Trabajo", area: "Liquidez" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Valoración de Empresas y Fusiones", area: "Inversión" },
              { name: "Gestión de Riesgos Financieros", area: "Riesgo" },
              { name: "Finanzas Internacionales", area: "Global" },
              { name: "Seminario de Caso Financiero", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Simulación Bursátil", desc: "Análisis en tiempo real de activos, tasas y portafolios de inversión." },
          { title: "Docentes Practicantes", desc: "Directores financieros (CFO) y analistas de banca de inversión." },
          { title: "Ruta a Maestría", desc: "Homologable con programas de maestría de Ciencias Económicas." }
        ]
      },
      {
        id: "esp-gerencia-tributaria",
        name: "Especialización en Gerencia Tributaria",
        degree: "Especialización",
        titleAwarded: "Especialista en Gerencia Tributaria",
        duration: "2 Semestres",
        modality: "Presencial",
        snies: "52910",
        accreditation: "Registro Calificado",
        credits: "26 Créditos",
        summary: "Planeación fiscal estratégica, derecho tributario nacional e internacional y cumplimiento normativo empresarial.",
        metrics: [
          { value: "2 Semestres", title: "Duración", sub: "Actualización tributaria permanente" },
          { value: "Alta Demanda", title: "Perfil Ejecutivo", sub: "Consultoría y dirección de impuestos" },
          { value: "Casuística", title: "Enfoque Aplicado", sub: "Talleres sobre reformas y jurisprudencia" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Derecho Constitucional Tributario", area: "Jurídica" },
              { name: "Impuesto sobre la Renta Personas Jurídicas", area: "Impuestos" },
              { name: "IVA, Impoconsumo y Tributación Territorial", area: "Impuestos" },
              { name: "Contabilidad Tributaria y Conciliación Fiscal", area: "Contable" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Procedimiento Tributario y Litigio Fiscal", area: "Procesal" },
              { name: "Tributación Internacional y Precios de Transferencia", area: "Global" },
              { name: "Planeación Tributaria Corporativa", area: "Estrategia" },
              { name: "Seminario de Actualización Fiscal", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Actualización Normativa", desc: "Análisis riguroso de reformas tributarias y doctrina DIAN." },
          { title: "Enfoque Interdisciplinario", desc: "Dirigido a contadores públicos, abogados y administradores." },
          { title: "Casos Corporativos", desc: "Diseño de estrategias legales de optimización fiscal." }
        ]
      }
    ]
  },
  {
    id: "humanas",
    shortName: "Ciencias Humanas y Sociales",
    name: "Facultad de Ciencias Humanas y Sociales",
    color: "#00829B",
    description: "Comprensión integral del ser humano, la salud mental, la educación transformadora y el desarrollo comunitario con sentido franciscano.",
    pregrado: [
      {
        id: "psicologia",
        name: "Psicología",
        titleAwarded: "Psicólogo(a)",
        duration: "9 Semestres",
        modality: "Presencial / Diurna",
        snies: "4481",
        accreditation: "Alta Calidad (MEN)",
        credits: "160 Créditos",
        url: "psicologia.html",
        summary: "Intervención clínica, neuropsicología, psicología organizacional y prácticas en el Centro de Atención Psicológica (CAP)."
      },
      {
        id: "licenciatura-educacion-infantil",
        name: "Licenciatura en Educación Infantil",
        titleAwarded: "Licenciado(a) en Educación Infantil",
        duration: "8 Semestres",
        modality: "Presencial / Diurna",
        snies: "106540",
        accreditation: "Alta Calidad (MEN)",
        credits: "145 Créditos",
        summary: "Pedagogía de la primera infancia, innovación didáctica, inclusión educativa y desarrollo integral de niños y niñas.",
        metrics: [
          { value: "92%", title: "Empleabilidad", sub: "Colegios bilingües, jardines y fundaciones" },
          { value: "Desde Sem. 3", title: "Práctica Pedagógica", sub: "Inmersión temprana en aula real" },
          { value: "Alta Calidad", title: "Acreditación MEN", sub: "Referente pedagógico en el suroccidente" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Historia y Epistemología de la Pedagogía", area: "Pedagogía" },
              { name: "Desarrollo Infantil I (0 a 3 años)", area: "Psicología" },
              { name: "Lenguajes Artísticos y Expresión Corporal", area: "Didáctica" },
              { name: "Infancias, Cultura y Sociedad", area: "Social" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Neuroeducación y Aprendizaje", area: "Psicología" },
              { name: "Desarrollo Infantil II (3 a 6 años)", area: "Psicología" },
              { name: "Juego y Ludopedagogía", area: "Didáctica" },
              { name: "Observación de Contextos Educativos", area: "Práctica" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Didáctica de la Lectura y Escritura Inicial", area: "Didáctica" },
              { name: "Práctica Pedagógica Investigativa I", area: "Práctica" },
              { name: "Literatura Infantil y Narración", area: "Lenguaje" },
              { name: "Currículo y Evaluación en Primera Infancia", area: "Pedagogía" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Pensamiento Lógico-Matemático Infantil", area: "Didáctica" },
              { name: "Práctica Pedagógica Investigativa II", area: "Práctica" },
              { name: "Educación Inclusiva y Diversidad", area: "Inclusión" },
              { name: "Familia, Escuela y Comunidad", area: "Social" }
            ]
          },
          {
            label: "Semestre 5",
            subjects: [
              { name: "Didáctica de las Ciencias Naturales", area: "Didáctica" },
              { name: "Práctica Pedagógica Investigativa III", area: "Práctica" },
              { name: "Atención a la Neurodiversidad en el Aula", area: "Inclusión" },
              { name: "Bilingüismo en la Primera Infancia", area: "Idiomas" }
            ]
          },
          {
            label: "Semestre 6",
            subjects: [
              { name: "Tecnologías Digitales para la Infancia", area: "Innovación" },
              { name: "Gestión de Proyectos Educativos", area: "Gestión" },
              { name: "Seminario de Investigación Educativa", area: "Investigación" },
              { name: "Electiva de Profundización I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 7",
            subjects: [
              { name: "Práctica Profesional Integral I", area: "Práctica" },
              { name: "Políticas Públicas de Primera Infancia", area: "Normativa" },
              { name: "Anteproyecto de Grado", area: "Investigación" },
              { name: "Electiva de Profundización II", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 8",
            subjects: [
              { name: "Práctica Profesional Integral II", area: "Práctica" },
              { name: "Trabajo de Grado en Educación", area: "Grado" },
              { name: "Liderazgo y Emprendimiento Educativo", area: "Gestión" },
              { name: "Ética Docente Franciscana", area: "Humanidades" }
            ]
          }
        ],
        features: [
          { title: "Ludoteca y Laboratorio", desc: "Espacios especializados para diseño de material didáctico y juego." },
          { title: "Red de Colegios Convenio", desc: "Prácticas en instituciones educativas líderes de Cali." },
          { title: "Enfoque de Inclusión", desc: "Herramientas pedagógicas para atención a la neurodiversidad." }
        ]
      }
    ],
    posgrado: [
      {
        id: "maestria-educacion",
        name: "Maestría en Educación: Desarrollo Humano",
        degree: "Maestría",
        titleAwarded: "Magíster en Educación: Desarrollo Humano",
        duration: "4 Semestres",
        modality: "Presencial",
        snies: "90814",
        accreditation: "Alta Calidad (MEN)",
        credits: "48 Créditos",
        summary: "Investigación educativa, currículo, evaluación y transformación pedagógica centrada en el desarrollo humano integral.",
        metrics: [
          { value: "Alta Calidad", title: "Acreditación MEN", sub: "Trayectoria investigativa consolidada" },
          { value: "4 Semestres", title: "Duración", sub: "Modalidad concentrada para docentes" },
          { value: "Escalafón", title: "Ascenso Docente", sub: "Válida para escalafón nacional" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Paradigmas Contemporáneos de la Educación", area: "Teoría" },
              { name: "Desarrollo Humano y Subjetividad", area: "Humanidades" },
              { name: "Seminario de Investigación Educativa I", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Currículo, Didáctica y Evaluación", area: "Pedagogía" },
              { name: "Educación, Cultura y Diversidad", area: "Social" },
              { name: "Seminario de Investigación Educativa II", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Políticas Públicas y Gestión Educativa", area: "Gestión" },
              { name: "Innovación Pedagógica y TIC", area: "Innovación" },
              { name: "Seminario de Tesis I", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Ética y Pedagogía Franciscana", area: "Humanidades" },
              { name: "Seminario de Tesis II", area: "Investigación" },
              { name: "Sustentación de Investigación", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Acreditación de Alta Calidad", desc: "Reconocimiento del Ministerio de Educación Nacional." },
          { title: "Grupos de Investigación", desc: "Articulación directa con líneas de investigación en educación." },
          { title: "Impacto Regional", desc: "Redes de rectores, docentes y líderes educativos del Valle." }
        ]
      },
      {
        id: "esp-psicologia-clinica",
        name: "Especialización en Psicología Clínica",
        degree: "Especialización",
        titleAwarded: "Especialista en Psicología Clínica",
        duration: "2 Semestres",
        modality: "Presencial",
        snies: "53102",
        accreditation: "Registro Calificado",
        credits: "28 Créditos",
        summary: "Evaluación, diagnóstico e intervención psicoterapéutica basada en evidencia con práctica clínica supervisada.",
        metrics: [
          { value: "2 Semestres", title: "Duración", sub: "Formación intensiva teórico-práctica" },
          { value: "CAP USB", title: "Práctica Supervisada", sub: "Atención en Centro de Atención Psicológica" },
          { value: "Cámara Gesell", title: "Infraestructura", sub: "Supervisión clínica en tiempo real" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Psicopatología y Diagnóstico Clínico", area: "Clínica" },
              { name: "Evaluación Psicológica Avanzada", area: "Evaluación" },
              { name: "Modelos Psicoterapéuticos Contemporáneos", area: "Intervención" },
              { name: "Ética y Bioética en Salud Mental", area: "Ética" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Intervención en Crisis y Trauma", area: "Clínica" },
              { name: "Psicoterapia Infanto-Juvenil y Adultos", area: "Intervención" },
              { name: "Práctica Clínica Supervisada", area: "Práctica" },
              { name: "Seminario de Caso Clínico", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Supervisión en Cámara Gesell", desc: "Acompañamiento directo de psicólogos clínicos expertos." },
          { title: "Centro de Atención Psicológica", desc: "Escenario propio de práctica clínica con pacientes reales." },
          { title: "Enfoque Basado en Evidencia", desc: "Protocolos validados internacionalmente en salud mental." }
        ]
      }
    ]
  },
  {
    id: "derecho",
    shortName: "Derecho y Ciencias Políticas",
    name: "Facultad de Derecho y Ciencias Políticas",
    color: "#EF7D00",
    description: "Formación jurídica con compromiso ético y social, litigio oral, resolución alternativa de conflictos y análisis de políticas públicas.",
    pregrado: [
      {
        id: "derecho",
        name: "Derecho",
        titleAwarded: "Abogado(a)",
        duration: "8 Semestres",
        modality: "Presencial / Diurna - Nocturna",
        snies: "53953",
        accreditation: "Alta Calidad (MEN)",
        credits: "152 Créditos",
        url: "derecho.html",
        summary: "Litigio estratégico, sala de audiencias simuladas, consultorio jurídico acreditado y centro de conciliación."
      },
      {
        id: "gobierno-relaciones-internacionales",
        name: "Gobierno y Relaciones Internacionales",
        titleAwarded: "Profesional en Gobierno y Relaciones Internacionales",
        duration: "8 Semestres",
        modality: "Presencial / Diurna",
        snies: "105318",
        accreditation: "Registro Calificado",
        credits: "144 Créditos",
        summary: "Diplomacia, cooperación internacional, análisis geopolítico, comercio global y gestión de políticas públicas.",
        metrics: [
          { value: "89%", title: "Empleabilidad", sub: "Sector público, ONG, embajadas y multinacionales" },
          { value: "Modelo ONU", title: "Simulación Diplomática", sub: "Entrenamiento en negociación internacional" },
          { value: "8 Semestres", title: "Duración Ágil", sub: "Plan de estudios moderno e internacional" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Introducción a la Ciencia Política", area: "Política" },
              { name: "Historia de las Relaciones Internacionales", area: "Internacional" },
              { name: "Teoría del Estado y Constitución", area: "Jurídica" },
              { name: "Fundamentos de Economía", area: "Economía" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Teorías de las Relaciones Internacionales", area: "Internacional" },
              { name: "Sistemas Políticos Comparados", area: "Política" },
              { name: "Economía Política Internacional", area: "Economía" },
              { name: "Métodos Cuantitativos en Ciencia Política", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Derecho Internacional Público", area: "Jurídica" },
              { name: "Política Exterior Colombiana", area: "Diplomacia" },
              { name: "Gobierno y Administración Pública", area: "Gobierno" },
              { name: "Geopolítica Contemporánea", area: "Internacional" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Formulación de Políticas Públicas", area: "Gobierno" },
              { name: "Organismos Multilaterales y ONU", area: "Diplomacia" },
              { name: "Comercio Internacional e Integración", area: "Economía" },
              { name: "Derechos Humanos y DIH", area: "Jurídica" }
            ]
          },
          {
            label: "Semestre 5",
            subjects: [
              { name: "Evaluación de Políticas Públicas", area: "Gobierno" },
              { name: "Cooperación Internacional y Proyectos", area: "Gestión" },
              { name: "Seguridad Internacional y Construcción de Paz", area: "Internacional" },
              { name: "Análisis de Coyuntura Global", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 6",
            subjects: [
              { name: "Negociación Internacional y Diplomacia", area: "Diplomacia" },
              { name: "Gobernanza Territorial y Descentralización", area: "Gobierno" },
              { name: "Seminario de Investigación Global", area: "Investigación" },
              { name: "Electiva de Profundización I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 7",
            subjects: [
              { name: "Práctica Profesional Institucional", area: "Práctica" },
              { name: "Gerencia Pública y Finanzas Territoriales", area: "Gestión" },
              { name: "Anteproyecto de Grado", area: "Investigación" },
              { name: "Electiva de Profundización II", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 8",
            subjects: [
              { name: "Trabajo de Grado en Asuntos Globales", area: "Grado" },
              { name: "Taller de Simulación Diplomática (Modelo ONU)", area: "Simulación" },
              { name: "Ética Pública y Transparencia", area: "Ética" },
              { name: "Electiva de Profundización III", area: "Énfasis" }
            ]
          }
        ],
        features: [
          { title: "Semillero Diplomático", desc: "Participación activa en modelos de Naciones Unidas y OEA." },
          { title: "Cooperación y ONG", desc: "Convenios con entidades gubernamentales y organismos multilaterales." },
          { title: "Doble Programa con Derecho", desc: "Ruta preferencial para obtener doble titulación con Derecho." }
        ]
      }
    ],
    posgrado: [
      {
        id: "maestria-derecho",
        name: "Maestría en Derecho",
        degree: "Maestría",
        titleAwarded: "Magíster en Derecho",
        duration: "4 Semestres",
        modality: "Presencial",
        snies: "104112",
        accreditation: "Registro Calificado",
        credits: "48 Créditos",
        summary: "Profundización investigativa y profesional en derecho constitucional, administrativo, privado y resolución de conflictos.",
        metrics: [
          { value: "4 Semestres", title: "Duración", sub: "Sesiones quincenales de posgrado" },
          { value: "3 Énfasis", title: "Flexibilidad", sub: "Público, Privado o Constitucional" },
          { value: "Homologable", title: "Articulación", sub: "Reconoce créditos de especialización" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Teoría Jurídica y Argumentación Constitucional", area: "Constitucional" },
              { name: "Metodología de la Investigación Sociojurídica", area: "Investigación" },
              { name: "Seminario de Profundización Jurídica I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Derecho Internacional de los Derechos Humanos", area: "Internacional" },
              { name: "Hermenéutica y Jurisprudencia de Altas Cortes", area: "Procesal" },
              { name: "Seminario de Profundización Jurídica II", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Justicia Constitucional y Control Convencional", area: "Constitucional" },
              { name: "Electiva de Línea Jurídica", area: "Énfasis" },
              { name: "Seminario de Trabajo de Grado I", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Seminario de Trabajo de Grado II", area: "Investigación" },
              { name: "Ética Judicial y Responsabilidad", area: "Ética" },
              { name: "Sustentación de Tesis de Maestría", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Magistrados y Doctores", desc: "Claustro docente integrado por magistrados, conjueces e investigadores." },
          { title: "Articulación de Posgrados", desc: "Homologación directa desde especializaciones de Derecho USB." },
          { title: "Investigación Aplicada", desc: "Líneas enfocadas en justicia, paz y transformación institucional." }
        ]
      },
      {
        id: "esp-derecho-administrativo",
        name: "Especialización en Derecho Administrativo",
        degree: "Especialización",
        titleAwarded: "Especialista en Derecho Administrativo",
        duration: "2 Semestres",
        modality: "Presencial",
        snies: "1108",
        accreditation: "Registro Calificado",
        credits: "26 Créditos",
        summary: "Contratación estatal, función pública, responsabilidad extracontractual del Estado y litigio contencioso administrativo.",
        metrics: [
          { value: "2 Semestres", title: "Duración", sub: "Formación especializada en 1 año" },
          { value: "95%", title: "Empleabilidad", sub: "Entidades públicas, litigio y consultoría" },
          { value: "CPACA", title: "Práctica Procesal", sub: "Talleres de litigio ante lo contencioso" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Estructura del Estado y Función Pública", area: "Público" },
              { name: "Acto Administrativo y Procedimiento", area: "Procesal" },
              { name: "Contratación Estatal y SECOP II", area: "Contratación" },
              { name: "Derecho Disciplinario y Control Fiscal", area: "Control" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Responsabilidad Patrimonial del Estado", area: "Sustancial" },
              { name: "Derecho Procesal Administrativo (CPACA)", area: "Litigio" },
              { name: "Servicios Públicos Domiciliarios", area: "Regulación" },
              { name: "Seminario de Jurisprudencia del Consejo de Estado", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Enfoque en Contratación", desc: "Dominio práctico del estatuto contractual y gestión pública." },
          { title: "Litigio Contencioso", desc: "Análisis de fallos recientes del Consejo de Estado." },
          { title: "Paso a Maestría", desc: "Homologable al segundo año de la Maestría en Derecho." }
        ]
      },
      {
        id: "esp-derecho-penal",
        name: "Especialización en Derecho Penal y Procesal Penal",
        degree: "Especialización",
        titleAwarded: "Especialista en Derecho Penal y Procesal Penal",
        duration: "2 Semestres",
        modality: "Presencial",
        snies: "52104",
        accreditation: "Registro Calificado",
        credits: "26 Créditos",
        summary: "Sistema penal acusatorio, dogmática penal contemporánea, criminalística y técnicas avanzadas de juicio oral.",
        metrics: [
          { value: "2 Semestres", title: "Duración", sub: "2 semestres intensivos" },
          { value: "Sala Oral", title: "Simulación Real", sub: "Entrenamiento en audiencias penales" },
          { value: "Alta Demanda", title: "Litigio y Judicatura", sub: "Defensa, Fiscalía y Rama Judicial" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Teoría del Delito y Dogmática Penal", area: "Sustancial" },
              { name: "Derecho Penal Constitucional y Garantías", area: "Constitucional" },
              { name: "Estructura del Proceso Penal Acusatorio", area: "Procesal" },
              { name: "Criminalística y Ciencias Forenses", area: "Forense" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Teoría de la Prueba en el Juicio Oral", area: "Probatorio" },
              { name: "Técnicas de Interrogatorio y Argumentación", area: "Litigio" },
              { name: "Delitos Económicos y contra la Administración", area: "Especial" },
              { name: "Taller de Simulación de Juicio Oral", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Sala de Audiencias", desc: "Prácticas de litigación oral en sala equipada con tecnología judicial." },
          { title: "Enfoque Forense", desc: "Valoración técnico-científica de dictámenes periciales." },
          { title: "Homologable", desc: "Articulación directa con la Maestría en Derecho USB." }
        ]
      }
    ]
  },
  {
    id: "ingenieria",
    shortName: "Ingeniería",
    name: "Facultad de Ingeniería",
    color: "#7A1C79",
    description: "Innovación tecnológica, desarrollo de software, medios interactivos, automatización e inteligencia artificial con estándares internacionales.",
    pregrado: [
      {
        id: "ingenieria-multimedia",
        name: "Ingeniería Multimedia",
        titleAwarded: "Ingeniero(a) Multimedia",
        duration: "8 Semestres",
        modality: "Presencial / Diurna",
        snies: "53414",
        accreditation: "Internacional ABET",
        credits: "145 Créditos",
        url: "ingenieria-multimedia.html",
        summary: "Videojuegos, realidad virtual y aumentada (VR/AR), animación 3D, diseño UI/UX e inteligencia artificial con acreditación ABET."
      },
      {
        id: "ingenieria-sistemas",
        name: "Ingeniería de Sistemas",
        titleAwarded: "Ingeniero(a) de Sistemas",
        duration: "8 Semestres",
        modality: "Presencial / Diurna",
        snies: "1107",
        accreditation: "Internacional ABET",
        credits: "148 Créditos",
        summary: "Arquitectura de software, ciberseguridad, computación en la nube (AWS/Huawei), ingeniería de datos e inteligencia artificial.",
        metrics: [
          { value: "96%", title: "Empleabilidad", sub: "Industria tech nacional y trabajo remoto global" },
          { value: "ABET", title: "Acreditación Global", sub: "Título reconocido internacionalmente" },
          { value: "$4.5M+", title: "Salario Inicial", sub: "Alta demanda en desarrollo y cloud" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Algoritmos y Programación I", area: "Software" },
              { name: "Cálculo Diferencial", area: "Ciencias Básicas" },
              { name: "Introducción a la Ingeniería de Sistemas", area: "Fundamentos" },
              { name: "Lógica Matemática", area: "Fundamentos" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Programación Orientada a Objetos", area: "Software" },
              { name: "Cálculo Integral", area: "Ciencias Básicas" },
              { name: "Álgebra Lineal", area: "Ciencias Básicas" },
              { name: "Arquitectura de Computadores", area: "Hardware" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Estructuras de Datos", area: "Software" },
              { name: "Matemáticas Discretas", area: "Fundamentos" },
              { name: "Sistemas Operativos", area: "Infraestructura" },
              { name: "Física Mecánica", area: "Ciencias Básicas" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Bases de Datos Relacionales y NoSQL", area: "Datos" },
              { name: "Análisis y Diseño de Algoritmos", area: "Software" },
              { name: "Redes de Computadores I", area: "Infraestructura" },
              { name: "Probabilidad y Estadística", area: "Analítica" }
            ]
          },
          {
            label: "Semestre 5",
            subjects: [
              { name: "Ingeniería de Software I (Ágil)", area: "Ingeniería" },
              { name: "Desarrollo Web Full Stack", area: "Software" },
              { name: "Computación en la Nube (AWS / Huawei)", area: "Cloud" },
              { name: "Seguridad de la Información", area: "Seguridad" }
            ]
          },
          {
            label: "Semestre 6",
            subjects: [
              { name: "Arquitectura de Software y Microservicios", area: "Ingeniería" },
              { name: "Inteligencia Artificial", area: "IA" },
              { name: "Ciencia de Datos y Big Data", area: "Datos" },
              { name: "Seminario de Investigación", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 7",
            subjects: [
              { name: "Machine Learning y Deep Learning", area: "IA" },
              { name: "Ciberseguridad y DevSecOps", area: "Seguridad" },
              { name: "Anteproyecto de Grado", area: "Investigación" },
              { name: "Electiva Profesional I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 8",
            subjects: [
              { name: "Práctica Empresarial Tecnológica", area: "Práctica" },
              { name: "Proyecto de Grado de Ingeniería", area: "Grado" },
              { name: "Gestión de Proyectos TI", area: "Gestión" },
              { name: "Electiva Profesional II", area: "Énfasis" }
            ]
          }
        ],
        features: [
          { title: "Acreditación ABET", desc: "Estándar de calidad internacional para ejercer ingeniería en el exterior." },
          { title: "AWS & Huawei Academy", desc: "Certificaciones oficiales en nube, redes e inteligencia artificial." },
          { title: "Hack Space & Labs", desc: "Laboratorios de cómputo de alto rendimiento y desarrollo ágil." }
        ]
      },
      {
        id: "ingenieria-electronica",
        name: "Ingeniería Electrónica",
        titleAwarded: "Ingeniero(a) Electrónico(a)",
        duration: "8 Semestres",
        modality: "Presencial / Diurna",
        snies: "4482",
        accreditation: "Internacional ABET",
        credits: "148 Créditos",
        summary: "Sistemas embebidos, Internet de las Cosas (IoT), robótica, telecomunicaciones y automatización industrial inteligente.",
        metrics: [
          { value: "92%", title: "Empleabilidad", sub: "Automatización, telecomunicaciones e IoT" },
          { value: "ABET", title: "Acreditación Global", sub: "Estándar internacional de ingeniería" },
          { value: "8 Labs", title: "Especializados", sub: "Robótica, control, IoT y potencia" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Introducción a la Ingeniería Electrónica", area: "Fundamentos" },
              { name: "Cálculo Diferencial", area: "Ciencias Básicas" },
              { name: "Programación para Ingeniería", area: "Software" },
              { name: "Química General", area: "Ciencias Básicas" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Circuitos Eléctricos I", area: "Electrónica" },
              { name: "Cálculo Integral y Álgebra Lineal", area: "Ciencias Básicas" },
              { name: "Física Mecánica", area: "Ciencias Básicas" },
              { name: "Electrónica Digital I", area: "Digital" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Circuitos Eléctricos II", area: "Electrónica" },
              { name: "Electrónica Analógica I", area: "Electrónica" },
              { name: "Física Electromagnetismo", area: "Ciencias Básicas" },
              { name: "Ecuaciones Diferenciales", area: "Ciencias Básicas" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Microcontroladores y Sistemas Embebidos", area: "Embebidos" },
              { name: "Electrónica Analógica II", area: "Electrónica" },
              { name: "Señales y Sistemas", area: "Telecom" },
              { name: "Diseño Digital con FPGA", area: "Digital" }
            ]
          },
          {
            label: "Semestre 5",
            subjects: [
              { name: "Control Automático", area: "Automatización" },
              { name: "Comunicaciones Analógicas y Digitales", area: "Telecom" },
              { name: "Instrumentación Electrónica", area: "Control" },
              { name: "Electrónica de Potencia", area: "Potencia" }
            ]
          },
          {
            label: "Semestre 6",
            subjects: [
              { name: "Internet de las Cosas (IoT) Industrial", area: "IoT" },
              { name: "Automatización Industrial y PLC", area: "Automatización" },
              { name: "Procesamiento Digital de Señales", area: "Telecom" },
              { name: "Seminario de Investigación", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 7",
            subjects: [
              { name: "Robótica Móvil y Visión Artificial", area: "Robótica" },
              { name: "Redes de Telecomunicaciones", area: "Telecom" },
              { name: "Anteproyecto de Grado", area: "Investigación" },
              { name: "Electiva Profesional I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 8",
            subjects: [
              { name: "Práctica Profesional en Industria", area: "Práctica" },
              { name: "Proyecto de Grado Tecnológico", area: "Grado" },
              { name: "Gestión de Proyectos de Ingeniería", area: "Gestión" },
              { name: "Electiva Profesional II", area: "Énfasis" }
            ]
          }
        ],
        features: [
          { title: "Laboratorios de IoT y Robótica", desc: "Prototipado con microcontroladores ESP32, FPGA, PLC y sensores industriales." },
          { title: "Acreditación ABET", desc: "Reconocimiento internacional de calidad académica y laboratorios." },
          { title: "Semilleros de Innovación", desc: "Competencias nacionales e internacionales de robótica y automatización." }
        ]
      },
      {
        id: "ingenieria-industrial",
        name: "Ingeniería Industrial",
        titleAwarded: "Ingeniero(a) Industrial",
        duration: "8 Semestres",
        modality: "Presencial / Diurna",
        snies: "1109",
        accreditation: "Alta Calidad (MEN)",
        credits: "146 Créditos",
        summary: "Optimización de operaciones, logística global, analítica empresarial, gestión de calidad y transformación productiva.",
        metrics: [
          { value: "93%", title: "Empleabilidad", sub: "Manufactura, logística, banca y servicios" },
          { value: "Lean Six Sigma", title: "Certificación", sub: "Herramientas de mejora continua" },
          { value: "Alta Calidad", title: "Acreditación MEN", sub: "Alta vinculación con industria del Valle" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Introducción a la Ingeniería Industrial", area: "Fundamentos" },
              { name: "Cálculo Diferencial", area: "Ciencias Básicas" },
              { name: "Álgebra Lineal", area: "Ciencias Básicas" },
              { name: "Expresión Gráfica e Ingeniería", area: "Diseño" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Cálculo Integral", area: "Ciencias Básicas" },
              { name: "Física Mecánica", area: "Ciencias Básicas" },
              { name: "Algoritmos y Programación", area: "Tecnología" },
              { name: "Contabilidad y Costos Industriales", area: "Finanzas" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Estadística y Probabilidad", area: "Analítica" },
              { name: "Procesos de Manufactura", area: "Producción" },
              { name: "Ingeniería Económica", area: "Finanzas" },
              { name: "Estudio del Trabajo y Ergonomía", area: "Productividad" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Investigación de Operaciones I", area: "Optimización" },
              { name: "Control Estadístico de la Calidad", area: "Calidad" },
              { name: "Ingeniería de Métodos y Tiempos", area: "Productividad" },
              { name: "Gestión del Talento Humano", area: "Organización" }
            ]
          },
          {
            label: "Semestre 5",
            subjects: [
              { name: "Investigación de Operaciones II", area: "Optimización" },
              { name: "Planeación y Control de la Producción", area: "Producción" },
              { name: "Gestión de la Cadena de Suministro", area: "Logística" },
              { name: "Lean Manufacturing y Six Sigma", area: "Calidad" }
            ]
          },
          {
            label: "Semestre 6",
            subjects: [
              { name: "Simulación de Procesos Industriales", area: "Analítica" },
              { name: "Logística Internacional y Distribución", area: "Logística" },
              { name: "Analítica de Datos Empresariales", area: "Tecnología" },
              { name: "Seminario de Investigación", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 7",
            subjects: [
              { name: "Diseño de Plantas Industriales", area: "Producción" },
              { name: "Gerencia de Proyectos", area: "Gestión" },
              { name: "Anteproyecto de Grado", area: "Investigación" },
              { name: "Electiva Profesional I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 8",
            subjects: [
              { name: "Práctica Empresarial", area: "Práctica" },
              { name: "Proyecto de Grado Aplicado", area: "Grado" },
              { name: "Gerencia Estratégica y Operaciones", area: "Estrategia" },
              { name: "Electiva Profesional II", area: "Énfasis" }
            ]
          }
        ],
        features: [
          { title: "Laboratorio de Producción", desc: "Simulación de plantas industriales, logística y automatización de procesos." },
          { title: "Analítica de Datos", desc: "Toma de decisiones basada en ciencia de datos e investigación de operaciones." },
          { title: "Convenios Industriales", desc: "Prácticas en las principales empresas manufactureras y logísticas de la región." }
        ]
      },
      {
        id: "ingenieria-agroindustrial",
        name: "Ingeniería Agroindustrial",
        titleAwarded: "Ingeniero(a) Agroindustrial",
        duration: "8 Semestres",
        modality: "Presencial / Diurna",
        snies: "102145",
        accreditation: "Registro Calificado",
        credits: "145 Créditos",
        summary: "Biotecnología, transformación sostenible de materias primas alimentarias y no alimentarias e innovación agropecuaria.",
        metrics: [
          { value: "90%", title: "Empleabilidad", sub: "Industria alimentaria, cosmética y bioeconomía" },
          { value: "Planta Piloto", title: "Infraestructura", sub: "Laboratorios de alimentos y biotecnología" },
          { value: "Sostenibilidad", title: "Enfoque Verde", sub: "Aprovechamiento de biomasa y residuos" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Introducción a la Ingeniería Agroindustrial", area: "Fundamentos" },
              { name: "Química General", area: "Ciencias Básicas" },
              { name: "Cálculo Diferencial", area: "Ciencias Básicas" },
              { name: "Biología Celular", area: "Biotecnología" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Química Orgánica", area: "Ciencias Básicas" },
              { name: "Microbiología General", area: "Biotecnología" },
              { name: "Cálculo Integral", area: "Ciencias Básicas" },
              { name: "Física Aplicada", area: "Ciencias Básicas" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Bioquímica Agroindustrial", area: "Biotecnología" },
              { name: "Balance de Materia y Energía", area: "Procesos" },
              { name: "Termodinámica", area: "Procesos" },
              { name: "Estadística y Diseño Experimental", area: "Analítica" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Operaciones Unitarias I (Transferencia)", area: "Procesos" },
              { name: "Fisiología Poscosecha", area: "Agroindustria" },
              { name: "Microbiología de Alimentos", area: "Alimentos" },
              { name: "Control de Calidad Agroindustrial", area: "Calidad" }
            ]
          },
          {
            label: "Semestre 5",
            subjects: [
              { name: "Operaciones Unitarias II (Separación)", area: "Procesos" },
              { name: "Ciencia y Tecnología de Alimentos", area: "Alimentos" },
              { name: "Agroindustria No Alimentaria y Biomasa", area: "Sostenibilidad" },
              { name: "Aseguramiento de Inocuidad (HACCP / ISO)", area: "Calidad" }
            ]
          },
          {
            label: "Semestre 6",
            subjects: [
              { name: "Biotecnología Aplicada y Bioprocesos", area: "Biotecnología" },
              { name: "Empaques y Conservación", area: "Procesos" },
              { name: "Logística de Cadenas Agroindustriales", area: "Logística" },
              { name: "Seminario de Investigación", area: "Investigación" }
            ]
          },
          {
            label: "Semestre 7",
            subjects: [
              { name: "Diseño de Plantas Agroindustriales", area: "Ingeniería" },
              { name: "Desarrollo de Nuevos Bioproductos", area: "Innovación" },
              { name: "Anteproyecto de Grado", area: "Investigación" },
              { name: "Electiva Profesional I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 8",
            subjects: [
              { name: "Práctica Profesional Agroindustrial", area: "Práctica" },
              { name: "Trabajo de Grado", area: "Grado" },
              { name: "Gestión Ambiental y Economía Circular", area: "Sostenibilidad" },
              { name: "Electiva Profesional II", area: "Énfasis" }
            ]
          }
        ],
        features: [
          { title: "Planta Piloto de Procesos", desc: "Equipos a escala piloto para desarrollo de alimentos, cosméticos y bioinsumos." },
          { title: "Bioeconomía Circular", desc: "Valorización de subproductos agrícolas del Valle del Cauca." },
          { title: "Investigación Aplicada", desc: "Proyectos conjuntos con centros de investigación agropecuaria." }
        ]
      }
    ],
    posgrado: [
      {
        id: "maestria-ingenieria",
        name: "Maestría en Ingeniería",
        degree: "Maestría",
        titleAwarded: "Magíster en Ingeniería",
        duration: "4 Semestres",
        modality: "Presencial",
        snies: "105890",
        accreditation: "Registro Calificado",
        credits: "48 Créditos",
        summary: "Investigación aplicada en tecnologías digitales, inteligencia artificial, automatización, analítica y sostenibilidad.",
        metrics: [
          { value: "4 Semestres", title: "Duración", sub: "Modalidad investigación o profundización" },
          { value: "Grupos A / A1", title: "Minciencias", sub: "Respaldo de grupos de investigación USB" },
          { value: "Multidisciplinar", title: "Enfoque Tech", sub: "IA, Software, Electrónica e Industria" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Métodos Cuantitativos y Modelado Avanzado", area: "Fundamentos" },
              { name: "Seminario de Investigación en Ingeniería I", area: "Investigación" },
              { name: "Electiva de Línea Tecnológica I", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Inteligencia Artificial y Ciencia de Datos", area: "Tecnología" },
              { name: "Seminario de Investigación en Ingeniería II", area: "Investigación" },
              { name: "Electiva de Línea Tecnológica II", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 3",
            subjects: [
              { name: "Gestión de la Innovación y Transferencia", area: "Innovación" },
              { name: "Trabajo de Grado I", area: "Investigación" },
              { name: "Electiva de Línea Tecnológica III", area: "Énfasis" }
            ]
          },
          {
            label: "Semestre 4",
            subjects: [
              { name: "Trabajo de Grado II", area: "Investigación" },
              { name: "Ética de la Tecnología y Sostenibilidad", area: "Humanidades" },
              { name: "Sustentación de Tesis de Maestría", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Laboratorios de Investigación", desc: "Acceso a infraestructura de cómputo avanzado, realidad virtual e IoT." },
          { title: "Doble Ruta", desc: "Elige entre profundización profesional o investigación científica." },
          { title: "Articulación", desc: "Homologable con especializaciones de la Facultad de Ingeniería." }
        ]
      },
      {
        id: "esp-seguridad-informatica",
        name: "Especialización en Seguridad Informática",
        degree: "Especialización",
        titleAwarded: "Especialista en Seguridad Informática",
        duration: "2 Semestres",
        modality: "Presencial / Híbrida",
        snies: "106712",
        accreditation: "Registro Calificado",
        credits: "26 Créditos",
        summary: "Ciberdefensa, hacking ético, gestión de incidentes, forense digital y protección de infraestructuras críticas.",
        metrics: [
          { value: "2 Semestres", title: "Duración", sub: "1 año de especialización técnica" },
          { value: "98%", title: "Empleabilidad", sub: "Uno de los perfiles más demandados" },
          { value: "Cyber Range", title: "Laboratorios", sub: "Simulación de ataques y defensa real" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Fundamentos de Ciberseguridad y Criptografía", area: "Seguridad" },
              { name: "Seguridad en Redes e Infraestructura Cloud", area: "Infraestructura" },
              { name: "Normatividad, ISO 27001 y Gestión de Riesgos", area: "Gobierno" },
              { name: "Hacking Ético y Análisis de Vulnerabilidades", area: "Ofensiva" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Informática Forense y Respuesta a Incidentes", area: "Forense" },
              { name: "Seguridad en Aplicaciones Web y Móviles (DevSecOps)", area: "Software" },
              { name: "Ciberinteligencia y Gestión SOC", area: "Defensa" },
              { name: "Proyecto Aplicado de Ciberseguridad", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Entrenamiento Red/Blue Team", desc: "Ejercicios prácticos de pentesting y respuesta ante incidentes." },
          { title: "Estándares Internacionales", desc: "Alineado con ISO 27001, NIST y certificaciones CEH / CISSP." },
          { title: "Homologable", desc: "Créditos homologables con la Maestría en Ingeniería." }
        ]
      },
      {
        id: "esp-gerencia-proyectos",
        name: "Especialización en Gerencia de Proyectos",
        degree: "Especialización",
        titleAwarded: "Especialista en Gerencia de Proyectos",
        duration: "2 Semestres",
        modality: "Presencial",
        snies: "53810",
        accreditation: "Registro Calificado",
        credits: "26 Créditos",
        summary: "Metodologías ágiles (Scrum/Kanban) y estándares internacionales PMI para la dirección exitosa de proyectos complejos.",
        metrics: [
          { value: "2 Semestres", title: "Duración", sub: "Formación ejecutiva en 1 año" },
          { value: "PMI + Agile", title: "Enfoque Dual", sub: "PMBOK y marcos ágiles modernos" },
          { value: "94%", title: "Empleabilidad", sub: "Liderazgo PMO en múltiples sectores" }
        ],
        curriculum: [
          {
            label: "Semestre 1",
            subjects: [
              { name: "Formulación y Evaluación Financiera de Proyectos", area: "Finanzas" },
              { name: "Dirección de Proyectos bajo Estándar PMI", area: "Gestión" },
              { name: "Planificación de Alcance, Tiempo y Costos", area: "Control" },
              { name: "Liderazgo de Equipos y Negociación", area: "Habilidades" }
            ]
          },
          {
            label: "Semestre 2",
            subjects: [
              { name: "Agilidad Organizacional y Marcos Scrum/Kanban", area: "Ágil" },
              { name: "Gestión de Riesgos, Calidad y Adquisiciones", area: "Control" },
              { name: "Oficinas de Proyectos (PMO) y Transformación", area: "Estrategia" },
              { name: "Proyecto Integrador de Gerencia", area: "Grado" }
            ]
          }
        ],
        features: [
          { title: "Preparación PMP / Scrum", desc: "Herramientas alineadas con certificaciones internacionales PMI." },
          { title: "Abierto a Todas las Áreas", desc: "Ideal para ingenieros, administradores, arquitectos y profesionales." },
          { title: "Software de Proyectos", desc: "Uso práctico de MS Project, Jira y herramientas colaborativas." }
        ]
      }
    ]
  }
];