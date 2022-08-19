export default {
  global: {
    componenteFormativo: 'Protocolo y operaciones en caja',
    descripcionCurso:
      'El servicio al cliente es la base primordial para el sostenimiento de las organizaciones y lo importante de conocer las políticas en las operaciones en caja, teniendo en cuenta los riesgos que se tienen en las operaciones de productos y servicios financieros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-10'],
        imagen: require('@/assets/curso/portada/10.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Atención y servicio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Protocolo del servicio en caja',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estrategias de atención y servicio al cliente',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Técnicas de comunicación',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Política comercial en las operaciones de caja',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Portafolio de servicios financieros',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Condiciones de servicio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Operaciones y riesgos en caja',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Productos y servicios financieros',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Sistema de Administración de Riesgos de Lavado de Activos y Financiación del Terrorismo (Sarlaft)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Marco legal',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Etapas',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Ventajas',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Política nacional',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Prevención de lavado de activos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Protocolo de identificación del cliente',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Conflicto de intereses',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Sistema de administración de riesgo operativo Saro',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Matriz de riesgo',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Servicio al cliente',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Protocolos de servicio al cliente: introducción. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VdBU-D7dDXg',
    },
    {
      tema: 'Política comercial en las operaciones de caja',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Políticas financieras y comerciales. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FWXq-BjMpAQ',
    },
    {
      tema:
        '<em>Operaciones y riesgos en caja</em> - ejemplo como una organización hace la gestión.',
      referencia:
        'Comunicaciones Internas Cugat. (2021). Cajas - Capacitación prevención de riesgos. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZPN4a7OlFu8',
    },
    {
      tema: 'Prevención de lavado de activos',
      referencia:
        'Bancolombia. (2012). Sabes qué es el lavado de activos y cómo prevenirlo. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WT5YQ4qV9yY',
    },
  ],
  glosario: [
    {
      termino: 'Factores de riesgo',
      significado:
        'fuentes generadoras de eventos en las que se originan las pérdidas por riesgo operacional. ',
    },
    {
      termino: 'Pérdidas',
      significado:
        'se entiende una pérdida antes de recuperaciones de cualquier tipo.',
    },
    {
      termino: 'Proceso',
      significado:
        'tareas interrelacionadas que, juntas transforman las entradas en salidas.',
    },
    {
      termino: 'Riesgo residual',
      significado:
        'nivel resultante del riesgo después de aplicar los controles.',
    },
    {
      termino: 'Sarlaft',
      significado:
        'sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo, el cual se debe implementar en las entidades vigiladas por la Superintendencia Financiera de Colombia para prevenir el riesgo del lavado de activos y financiamiento del terrorismo.',
    },
    {
      termino: 'SARO',
      significado:
        'sistema de Administración de Riesgo Operativo. Se entiende por riesgo operativo, la posibilidad de incurrir en pérdidas por deficiencias, fallas o inadecuaciones, en el recurso humano, los procesos, la tecnología, la infraestructura o por la ocurrencia de acontecimientos externos. Esta definición incluye el riesgo legal y reputacional asociados a tales factores.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'todas las acciones implementadas para los clientes antes, durante y después de la compra.',
    },
    {
      termino: 'Tratamiento',
      significado:
        'conjunto de acciones encaminadas a manejar el efecto de los riesgos que están dentro del nivel de riesgo aceptado.',
    },
    {
      termino: 'Unidad de Riesgo Operacional',
      significado:
        'se entiende por Unidad de Riesgo Operacional, el área o cargo designado por el representante legal de la entidad, que coordina la puesta en marcha y seguimiento del SARO.',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2022). Guía de administración del riesgo. Departamento Administrativo de la Función Pública.',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2020). Circular Externa 025 de 2020, instrucciones relacionadas con el riesgo operacional. Superintendencia Financiera de Colombia.',
      link:
        'https://www.superfinanciera.gov.co/descargas/institucional/pubFile1046577/ce025_20.doc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Villalobos Barreto',
        cargo: 'Experto temático',
        centro: 'Sena Distrito Capital Grupo De Apoyo Administrativo - Cgi',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica ',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
