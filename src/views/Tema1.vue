<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Servicio al cliente
      
    p(data-aos="fade-down") Sin duda el reto en las organizaciones a diario es garantizar la satisfacción del cliente tanto en las especificaciones del producto o servicio ofertado, como en el aseguramiento de una buena experiencia al adquirirlo; para esto se crean diferentes estrategias con el propósito de identificar cada tipo de cliente, sus gustos y todas las características que influyan en la fidelización para afianzar el sostenimiento de la empresa.

    p(data-aos="fade-down").mb-5 Pero, #[b ¿qué es servicio al cliente?]

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10.pt-5
        .tarjeta.position-relative.rounded-0.bg1.p-4.mb-5(data-aos="flip-down")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute
                img(data-aos="zoom-in")(src='@/assets/curso/temas/img1.svg', alt='')
            .col-lg-10
              p(data-aos="fade-down").mb-0.p-3 #[b Se puede definir como todas esas actividades encaminadas a escuchar al consumidor, resolver sus dudas, aplicar sus sugerencias y la capacidad que tiene la empresa de satisfacer sus necesidades cuando está en contacto con su razón de ser. ]

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img2.png', alt='')

      .col-lg-7.my-3
        p(data-aos="fade-down") Ahora, para el #[b sector financiero en cajas] es importante comprender el papel que juega el funcionario o la herramienta que se utiliza para el proceso, ya que hace parte integral de la experiencia que vive el cliente en el cierre de una venta o negociación por medio de una transacción financiera.

        p(data-aos="fade-down") Los clientes de una unidad financiera generan ingresos que aportan al sostenimiento y crecimiento de esta, más el buen servicio que se preste a través de sus mecanismos, ya sean virtuales o presenciales. Por ejemplo, en el caso de un banco,  las empresas, personas jurídicas o naturales, llevan su dinero con diferentes fines y según los servicios ofrecidos y la atención, mantendrá o no a sus clientes ya que, del valor agregado, surge la clave del sostenimiento y crecimiento de cualquier empresa.

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Atención y servicio   

    p(data-aos="fade-down").mb-5 Cuando se habla de atención y servicio se generan confusiones ya que pese a que van de la mano son diferentes, a continuación, se conocerá en qué consiste cada uno y cómo se complementan.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
      .row.justify-content-center.align-items-start(titulo="Atención") 
        .col-lg-6.my-3
          p Es cuando se interactúa directamente con el cliente, es decir, cómo se comunica y trata, por ejemplo, cuando lo saludamos y le ofrecemos un producto o servicio que tiene la entidad. 
        .col-lg-5
          img.img-a.img-t(src='@/assets/curso/temas/img4.png', alt='')

      .row.justify-content-center.align-items-start(titulo="Servicio") 
        .col-lg-6.my-3
          p Es la parte indirecta que siente el cliente, como el cumplimiento de los acuerdos con la entidad, el ambiente tanto de aseo como acceso a los servicios o productos ofertados, el cumplimiento con la oferta de valor, la agilidad y la respuesta eficiente a sus requerimientos.
        .col-lg-5
          img.img-a.img-t(src='@/assets/curso/temas/img3.png', alt='')          
   
    p(data-aos="fade-down").mb-5 Entendiendo esto se puede decir que:  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.position-relative
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/img5.svg')})`}"
          )
            .imagen-superior.position-absolute.mv(style='bottom:-4% ; left: 20%; z-index:2'): img(src='@/assets/curso/temas/img6.svg')
          .bloque-texto-g__texto.p-4
            p.mb-0 #[b Atención y servicio] hacen una sociedad indisoluble y parte directa de la relación que se lleva con el cliente, que de estas dos acciones depende su permanencia en el tiempo.
              br
              br
              | #[b Atención + servicio = servicio al cliente]
              
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Protocolo del servicio en caja
    p(data-aos="fade-down") Los protocolos de servicio en caja son documentos creados para brindarle al funcionario una guía de cómo actuar y comportarse cuando se presta el servicio al cliente, creando una homogeneidad entre las personas que tienen esta responsabilidad, o pasos, características y funciones que debe generar las diferentes herramientas si la gestión es virtual.

    p(data-aos="fade-down").mb-5 Un protocolo de servicio en caja debe contener:

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-7.bg2.p-4.imgs-flotantes(data-aos="fade-left") 
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/flotante1.svg', alt='Imagen decorativa')      
        ul.lista-ul--color.px-5.mvp
          li 
            i.lista-ul__vineta
            p.mb-0 Un objetivo que muestra para que fue creado.

          li 
            i.lista-ul__vineta
            p.mb-0 Los posibles escenarios con los que se puede encontrar ya sean presenciales o virtuales.

          li 
            i.lista-ul__vineta
            p.mb-0 La responsabilidad como cajero.

          li 
            i.lista-ul__vineta
            p.mb-0 Las fases con el cliente: saludo, desarrollo de la actividad y cierre del proceso. Es decir, qué hacer y cómo hacerlo.

          li 
            i.lista-ul__vineta
            p.mb-0 Recomendaciones tanto de postura como presentación y qué evitar durante el contacto con el cliente, por ejemplo, el uso del celular o mirarlo cuando le hable.

          li 
            i.lista-ul__vineta
            p.mb-0 Características y valor agregado de la entidad como empatía, tolerancia, entre otras.
          li 
            i.lista-ul__vineta
            p.mb-0 Canales de comunicación ya sean virtuales o presenciales.

          li 
            i.lista-ul__vineta
            p.mb-0 Reglas y técnicas de comunicación en donde encontrará los tipos de clientes que tiene el banco y cómo darle manejo a sus solicitudes o inquietudes.        
      .col-lg-5.position-relative
        .row.justify-content-center.align-items-center.pt-5.mt-5           
          .col-lg-8.up      
            p(data-aos="fade-down") 
              span.bgp El protocolo de servicio 
              span de cada entidad, financiera o comercial tiene gran importancia y el propósito de aplicarlo es obtener un buen desarrollo en su gestión diaria con el cliente.      
        .imagen-absolute1
          img(data-aos="zoom-in")(src='@/assets/curso/temas/img7.svg', alt='')      

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Estrategias de atención y servicio al cliente

    p(data-aos="fade-down") Las estrategias de atención y servicio al cliente marcan el camino para resolver las necesidades y expectativas que tiene su razón de ser, es decir, buscan garantizar una relación a largo plazo con el cliente, por medio de un conjunto de directrices y normas de cómo interactuar con el comprador o usuario del producto.

    p(data-aos="fade-down").mb-5 En el proceso, el aprendiz en una organización puede recibir varias directrices o normas que apoyan el protocolo de servicio en su gestión diaria, entre ellas:
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-8
        TabsA.color-acento-contenido.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Enfocadas en el consumidor")
            h4 Enfocadas en el consumidor
            p Son aquellas que no solo están pensando en quién compra, sino en el destinatario final, ya que muchas veces el comprador no es la persona que utilizara el servicio.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Enfocadas en la comunicación con el cliente")
            h4 Enfocadas en la comunicación con el cliente 
            p En estas se busca escuchar y ser retroalimentado por el cliente por medio de varias herramientas como encuestas, evaluaciones del producto y servicio, entre otras. También se pueden evidenciar con capacitaciones al personal para mejorar esta capacidad.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Enfocadas en el valor agregado")
            h4 Enfocadas en el valor agregado
            p Se utilizan cuando se quiere resaltar ese plus que da la organización, ya sea a nivel promocional o ventaja competitiva como eje diferenciador frente a la competencia en el mercado con el que interactúa la empresa.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Enfocadas en controlar la satisfacción del cliente")
            h4 Enfocadas en controlar la satisfacción del cliente 
            p Miden cómo se siente el cliente cuando utiliza los productos o servicios de la entidad y se le da solución de forma inmediata.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Enfocada en los procesos y gestión administrativa")
            h4 Enfocada en los procesos y gestión administrativa
            p Están dirigidas a optimizar los recursos con los que cuenta la empresa para mejorar la calidad del servicio al cliente como el buen uso de la tecnología, la contratación del personal idóneo, las capacitaciones, tiempos de espera o respuesta, redes sociales, empoderamiento del personal y demás gestiones que puedan impactar de forma positiva en el cliente.                                               
      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/temas/img8.svg', alt='')

    .row.justify-content-center.align-items-start.down
      .col-lg-5.position-relative
        .row.justify-content-center.align-items-center.pt-5.mt-5           
          .col-lg-8.up      
            p(data-aos="fade-down") 
              span.bgp Para obtener un buen resultado 
              span en estas estrategias, se debe implementar una adecuada organización sin importar el área, teniendo en cuenta que su razón de ser siempre será el cliente.   
        .imagen-absolute1
          img(data-aos="zoom-in")(src='@/assets/curso/temas/img7.svg', alt='')   
    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Técnicas de comunicación

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-5
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img9.png', alt='')

      .col-lg-7.my-3
        p(data-aos="fade-down") Teniendo en cuenta que la comunicación en la humanidad es la base del relacionamiento y acercamiento que ayuda a la interacción entre las personas y, por ende, a la comunión y entendimiento para satisfacer las necesidades de las personas, es importante conocer cómo se establece este contacto con los clientes, pues en cualquier organización se deben generar canales tanto para sus clientes internos y, externos como para las partes interesadas.

        p(data-aos="fade-down") Se debe tener claro que la comunicación es el medio para expresar sentimientos, ideas, opiniones o cualquier tipo de información ya sea de forma oral, escrita, gestual o señas directamente o utilizando una variedad de herramientas. 

    p(data-aos="fade-down").mb-5 El conjunto de ideas que se quieren expresar debe estar apoyadas por técnicas que aseguren el entendimiento del mensaje, por ello, la siguiente tabla, enseña las técnicas de comunicación, para aplicar en la gestión de caja, laboral, personal o profesional y adquirir el conocimiento de aplicación y de resolución de inquietudes y problemas en la organización o en la vida propia utilizando el medio más adecuado:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('downloads/tecnicas_comunicacion_digital.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Técnicas de comunicación digital. Enseña las técnicas de comunicación, para aplicar en la gestión de caja, laboral, personal o profesional. 

    .bg3(data-aos="flip-down")
      .tarjeta.position-relative.rounded-0.p-4.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-2.col-5.mb-lg-0.mb-3
            .imagen-absolute3
              img(src='@/assets/curso/temas/img10.svg', alt='')
          .col-lg-10
            p(data-aos="fade-down").mb-0.p-4 Se invita a profundizar más en la #[b gestión de la comunicación] en el contenido temático de la competencia, Desarrollar procesos de comunicación eficaces y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo, con los que se fortalecerá su gestión de comunicación con el cliente interno y externo en caja o en los servicios que preste y asignen.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bloque-texto-g
  justify-content: flex-start
  background-color: rgba(255, 255, 255, 0.65)
.bloque-texto-g__img
  left: auto
  right: 0
.imagen-superior
  @media (max-width: $bp-min-lg)
    display: flex !important
    width: 45%
    top: -25%
</style>
