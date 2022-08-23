<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Política comercial en las operaciones de caja

    p(data-aos="fade-down") Las entidades, a través de las políticas, establecen sus directrices para encaminar las normas a seguir para todo el personal vinculado a una organización de forma pública; mediante estas políticas, se rigen las actividades según corresponda.

    p(data-aos="fade-down").mb-5 A continuación, se dará a conocer todo lo relacionado con las operaciones en caja y su gestión.

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Concepto

    .row.justify-content-center.align-items-center.mb-5.bg2.p-4.imgs-flotantes1(data-aos="fade-left")
      img.img-flotante1(data-aos="zoom-in")(src='@/assets/curso/temas/flotante2.svg', alt='Imagen decorativa')                 
      .col-lg-6
        p(data-aos="fade-down") La política comercial en las operaciones en caja define las condiciones en donde se establecen los términos y condiciones de la relación de la entidad con sus clientes.
 
        p(data-aos="fade-down") Es decir, es una herramienta la cual se utiliza para fijar los estatutos de la relación comercial entidad y cliente en las cuales estarán fijadas unas condiciones para brindar o prestar el servicio según el portafolio. 

        p(data-aos="fade-down") Se debe tener en cuenta que las políticas comerciales tienen varias finalidades; a continuación, se mencionan algunas para que el aprendiz los conceptualice de manera adecuada.
      .col-lg-6    
        ul.lista-ul--color.px-5  
          li 
            i.lista-ul__vineta
            p.mb-0 Establecer medidas de prevención del riesgo financiero.

          li 
            i.lista-ul__vineta
            p.mb-0 Evitar el sobre endeudamiento de un cliente.

          li 
            i.lista-ul__vineta
            p.mb-0 Establecer condiciones para brindar el servicio o producto financiero, es decir establecer en qué condiciones, cuándo y cómo se puede acceder a los productos que tenga la entidad.

          li 
            i.lista-ul__vineta
            p.mb-0 Condiciones y manejo de transferencias.

          li 
            i.lista-ul__vineta
            p.mb-0 Establecer medidas para evaluar la procedencia del dinero de las transferencias.

          li 
            i.lista-ul__vineta
            p.mb-0 Reservarse el derecho de admisión si se establece alguna actividad ilícita o que este fuera de la función de la entidad.

          li 
            i.lista-ul__vineta
            p.mb-0 Tener claridad cuando y porque no se acepta o niega un crédito. 

    p(data-aos="fade-down").mb-5 Por otro lado,

    .row.justify-content-center.align-items-center.mt-5       
      .col-lg-10.pt-5
        .tarjeta.position-relative.rounded-0.bg4.p-4.mb-5(data-aos="flip-down")
          .row.justify-content-end.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute4
                img(data-aos="zoom-in")(src='@/assets/curso/temas/img11.svg', alt='')
            .col-lg-8
              h4(data-aos="fade-down").mb-0.p-3 La Superintendencia Financiera de Colombia regula la gestión de las entidades financieras en el país verificando que en ningún momento se vulnere los derechos de los usuarios.

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Portafolio de servicios financieros

    p(data-aos="fade-down") Un portafolio de servicios financieros se puede definir como un documento, físico o digital, en el cual una organización presenta todos sus productos o servicios para darlos a conocer a sus clientes y prospectos.

    p(data-aos="fade-down").mb-5 A continuación, se presenta un ejemplo del contenido de un portafolio de servicios financieros:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
      .tarjeta-avatar.crd.crd-100
        img.w(src='@/assets/curso/temas/img12.svg', alt='AvatarTop')
        .tarjeta.bg5
          .p-4.mt-5.text-center
            h4.mb-3 ¿Cuáles son los servicios?
            p.mb-0 Cuentas de nómina, corriente, compra de cartera, créditos, CDT, fondos de inversiones, medios o canales de pago.

      .tarjeta-avatar.crd.crd-100
        img.w(src='@/assets/curso/temas/img13.svg', alt='AvatarTop')
        .tarjeta.bg5
          .p-4.mt-5.text-center
            h4.mb-3 ¿Para quiénes son?
            p.mb-0 Personas naturales, jurídicas o empresas. 

      .tarjeta-avatar.crd.crd-100
        img.w(src='@/assets/curso/temas/img14.svg', alt='AvatarTop')
        .tarjeta.bg5
          .p-4.mt-5.text-center
            h4.mb-3 Información
            p.mb-0 Tasas de interés, beneficios, datos de contextualización, qué es un crédito rotativo y demás.                   

      .tarjeta-avatar.crd.crd-100
        img.w(src='@/assets/curso/temas/img15.svg', alt='AvatarTop')
        .tarjeta.bg5
          .p-4.mt-5.text-center
            h4.mb-3 Transacciones
            p.mb-0 Cajeros automáticos, cajas directas en bancos, manejo de chequera, tarjeta débito, corriente, crédito.

      .tarjeta-avatar.crd.crd-100
        img.w(src='@/assets/curso/temas/img16.svg', alt='AvatarTop')
        .tarjeta.bg5
          .p-4.mt-5.text-center
            h4.mb-3 Requisitos
            p.mb-0 Diferenciando el servicio y para quien va dirigido, si es empleado, independiente, persona natural o empresa.

      .tarjeta-avatar.crd.crd-100
        img.w(src='@/assets/curso/temas/img17.svg', alt='AvatarTop')
        .tarjeta.bg5
          .p-4.mt-5.text-center
            h4.mb-3 Canales de atención o comunicación
            p.mb-0 #[i Chatbots], líneas telefónicas de atención, líneas virtuales, correos y otros medios.

      .tarjeta-avatar.crd.crd-100
        img.w(src='@/assets/curso/temas/img18.svg', alt='AvatarTop')
        .tarjeta.bg5
          .p-4.mt-5.text-center
            h4.mb-3 Sucursales
            p.mb-0 Directorio de las sedes, ubicación, cajeros y cobertura a nivel nacional, si aplica, para que el cliente o prospecto tenga acceso según su necesidad.

      .tarjeta-avatar.crd.crd-100
        img.w(src='@/assets/curso/temas/img19.svg', alt='AvatarTop')
        .tarjeta.bg5
          .p-4.mt-5.text-center
            h4.mb-3 Presentación de la entidad
            p.mb-0 Una pequeña reseña tanto histórica como a qué se dedica y desde cuándo, con objetivos y metas, en algunos se puede encontrar misión, visión, cultura y valores corporativos según sea el caso.

      .tarjeta-avatar.crd.crd-100
        img.w(src='@/assets/curso/temas/img20.svg', alt='AvatarTop')
        .tarjeta.bg5
          .p-4.mt-5.text-center
            h4.mb-3 Horarios
            p.mb-0 De apertura y cierre, es decir de atención al público tanto presencial, canales telefónicos como virtual.

    .bg3.mb-5(data-aos="flip-down") 
      .tarjeta.p-4
        .row.justify-content-around.align-items-center.mt-1
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/img21.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-0 Ejemplo de  un portafolio en línea de productos y servicios de una entidad financiera
              .col-sm-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span ver
                  i.fas.fa-external-link-alt

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-11
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img23.png', alt='')

    p(data-aos="fade-down").mb-5 Luego de comprender la importancia del portafolio de servicios financieros se invita al aprendiz a indagar un poco más, sobre los diferentes tipos que existen en línea de las diferentes entidades y, sobre todo, una vez esté en su gestión en caja o en la labor financiera de la entidad donde ejerza lo conozca para poder ofrecerlo si es requerido.

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Condiciones de servicio
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img22.png', alt='')
      .col-lg-7
        p(data-aos="fade-down") Las condiciones hacen parte fundamental en la oferta de productos o servicios para cualquier tipo de empresa, ya que por medio de ellas se establecen unos parámetros que regulan el uso adecuado del artículo, mercancía o servicio que se brinda. Estas condiciones ofrecen una protección y mitigan el riesgo frente a ciertas eventualidades que se puedan presentar cuando el usuario está recibiendo su servicio.

        p(data-aos="fade-down") Por ejemplo, una página web según su razón de ser, brinda el servicio, pero con unas condiciones como respeto a los derechos de autor, tipo de contenido que se puede divulgar, entre otras.

        p(data-aos="fade-down").mb-5 A nivel financiero y dependiendo el producto o servicio se establecen condiciones, que se presentarán en la siguiente tabla : 
        .row.justify-content-start.align-items-center      
          .col-lg-7
            a.anexo.mb-4(:href="obtenerLink('downloads/servicios_financieros.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Condiciones en algunos servicios financieros.
    p(data-aos="fade-down").mb-5 Luego de haber conocido, algunas condiciones de servicio financiero, se presenta un ejemplo en un pro de reforzar el conocimiento en la siguiente imagen.
    .bg3.mb-5(data-aos="flip-down") 
      .tarjeta.p-4
        .row.justify-content-around.align-items-center.mt-1
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/img24.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-0 Condiciones de uso en una entidad financiera, tomado de la página del BBVA 2022 en el siguiente link:
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.bbva.com.co/content/dam/public-web/colombia/documents/home/footer/reglamentos/productos-persona-natural/D02-Reglamento-cuenta-ahorros.pdf" target="_blank")
                  span Enlace 
                  i.fas.fa-external-link-alt
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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

<style lang="sass"></style>
