<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Operaciones y riesgos en caja

    p(data-aos="fade-down") Las operaciones en caja son las transacciones de dinero que realizan los clientes con la entidad por medio de la colocación y la entidad con el cliente con la gestión de la captación,  y también todos estos movimientos de efectivo que se generan por las relaciones comerciales entre las partes de los diferentes productos o servicios.

    p(data-aos="fade-down") Las principales operaciones son:

    .row.justify-content-center.align-items-center.mb-5.bg2.p-4.py-0.imgs-flotantes2(data-aos="fade-left")
      img.img-flotante2(data-aos="zoom-in")(src='@/assets/curso/temas/flotante3.svg', alt='Imagen decorativa')                 
      .col-lg-6
        ul.lista-ul--color.px-5.mt-2.mvp  
          li 
            i.lista-ul__vineta
            p.mb-0 Consignaciones a otras cuentas o cuenta propia.
          li 
            i.lista-ul__vineta
            p.mb-0 Pago de créditos ya sean hipotecarios, libre inversión, consumo y demás.
          li 
            i.lista-ul__vineta
            p.mb-0 Retiros en caja por ciertos montos estipulados por las entidades.
          li 
            i.lista-ul__vineta
            p.mb-0 Traslado de dinero entre cuentas.
          li 
            i.lista-ul__vineta
            p.mb-0 Pago de servicios públicos.
          li 
            i.lista-ul__vineta
            p.mb-0 Retiro de dividendos
          li 
            i.lista-ul__vineta
            p.mb-0 Cambios de moneda. 
      .col-lg-6.position-relative 
        .imagen-absolute5
          img(data-aos="zoom-in")(src='@/assets/curso/temas/img25.svg', alt='')

    p(data-aos="fade-down").mb-5 En la gestión de las anteriores actividades se debe tener en cuenta que existe una serie de riesgos que pueden afectar o interferir en el servicio que se presta, algunos de ellos por falta de conocimiento, tecnología, infraestructura, o el ambiente externo. A continuación, se presentan los más comunes:

    SlyderB.mb-5(:datos="datosSlyder")(data-aos="fade-right")

    p(data-aos="fade-down").mb-5 Es importante tener en cuenta la importancia de conocer las operaciones que realizara en su cargo, pero también los riesgos a los que se está expuesto y los mecanismos que tiene cada entidad para contrarrestar cada situación.   

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Productos y servicios financieros

    p(data-aos="fade-down").mb-5 Como se conoció, en el portafolio comercial se presentan los productos y servicios de cada entidad, por ello, en el siguiente recurso se exponen los más representativos:

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Cuenta de ahorros
            p Es un servicio por el cual una persona abre su cuenta para que le consignen su nómina o para ahorrar recibiendo unos intereses, puede hacer retiros cuando desee, ya que el dinero depositado lo tiene disponible para cuando lo necesite.      
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img30.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Cuenta corriente
            p Es una cuenta que le ofrece al cliente la posibilidad de hacer transacciones financieras, depósitos en efectivo o cheques, puede hacer uso de esos recursos en cualquier momento por medio de su tarjeta en un cajero, talonario en caja o a nivel virtual

            p Hay que tener en cuenta que los beneficios para este tipo de cuentas son acordes a cada entidad como sobregiros y demás, no genera intereses.      
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img31.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 CDT (Certificado de Depósito a Término)
            p Es una estrategia para girar o consignar el dinero en un fondo en determinado tiempo y recibir unos intereses por el mismo periodo, lo puede hacer entre 30 y 180 días, teniendo en cuenta que ese dinero invertido no lo puede retirar hasta que se cumpla el plazo pactado.    
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img32.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Tarjetas de crédito
            p Más conocido como dinero plástico es un monto que brindan las entidades crediticias para que el usuario pueda disponer de un dinero para hacer compras cuando no tiene el recurso de forma inmediata y luego puede diferir el pago con unos intereses; el pago que se va a capital y no a intereses es de nuevo cargado a la tarjeta de crédito para su disponibilidad.    
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img33.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Créditos rotativos
            p Es un préstamo que dan las entidades financieras a un determinado tiempo y a medida que se van pagando el dinero a capital ingresa de nuevo para disponibilidad; a diferencia de la tarjeta de crédito está asociada a la cuenta de ahorros o corriente.   
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img34.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Créditos hipotecarios
            p Son aquellos préstamos que se utilizan para compra de vivienda, dejando el inmueble como garantía.    
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img35.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Compra de cartera
            p Es cuando la entidad toma la deuda que tiene la persona con otra entidad dando mejores beneficios al crédito. 
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img36.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Crédito vehicular
            p Es aquel préstamo que se genera para compra de vehículo y como garantía se deja este en prenda.    
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img37.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Crédito de libre inversión
            p Son aquellos préstamos que se generan para compra o uso libre como vacaciones y demás, a una tasa de interés diferente según cada banco. 
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img38.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Crédito de estudio
            p Son préstamos encaminados a la educación y según cada entidad tiene una tasa de interés preferencial.

            p Existen varios tipos de créditos y sus tasas de interés dependen del fin o de políticas de la entidad financiera y son regulados por la Superintendencia Financiera de Colombia, es decir no pueden exceder los topes de la tasa de usura.
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img39.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Banca móvil
            p Permite al usuario hacer transferencias, movimientos y pagos desde cualquier lugar a través de su dispositivo móvil o PC. 
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img40.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Corresponsales bancarios
            p Son entidades que tienen convenio con el banco para hacer transacciones como pagos, giros, consignaciones y retiros para mejorar la calidad y cobertura del servicio.  
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img41.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Cajeros automáticos
            p Son aquellas máquinas por las cuales se pueden hacer retiros, transferencias, cambio de clave a disponibilidad del usuario normalmente las 24 horas dependiendo la ubicación.   
          .col-lg-5    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img42.png', alt='')

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Sistema de Administración de Riesgos de Lavado de Activos y Financiación del Terrorismo (Sarlaft)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.p-0
        .bg6.p-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Es un sistema implementado por las organizaciones para prevenir el riesgo del lavado de activos en sus operaciones por medio de instrumentos para detectar y reportar ante las entidades regulatorias como la UIAF (Unidad de Información y Análisis Financiero), movimientos o transacciones ilegales que pretendan dar apariencia legal y el lavado de activos.
        .bg8.p-5
          p(data-aos="fade-down").mb-0 El lavado de activos busca darle apariencia legal a un dinero de procedencia ilegal, sus riesgos son altos, pues sus fines van dirigidos a actividades ilícitas. En la actualidad, las entidades financieras implementan un sistema de administración del riesgo de lavado de activos y financiación del terrorismo SARLAFT.
      .col-lg-6.p-0
        .bg7.p-5(data-aos="flip-down")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img43.svg', alt='')
        .titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-down")
          h5 Figura 1:
          span Sarlaft

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Marco legal

    p(data-aos="fade-down") Como ya se ha mencionado, la entidad que regula la gestión que se hace en contra del lavado de activos y financiación del terrorismo es la Unidad de Información y Análisis Financiero (UIAF), creada en 1999 bajo la Ley 526; su tarea está en centralizar, sistematizar y analizar la información suministrada por las entidades con el propósito de identificar el lavado de activos o manejos de dineros con propósitos ilegales.

    p(data-aos="fade-down").mb-5 Su estructura es la siguiente:
    .row.justify-content-center.align-items-center
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-5.bg2.px-4.imgs-flotantes2(data-aos="fade-left")
          img.img-flotante2.pe-5(data-aos="zoom-in")(src='@/assets/curso/temas/flotante4.svg' style='width: 905px;', alt='Imagen decorativa')                 
          .col-lg-6
            ul.lista-ul--color.px-5.mt-2.mvp  
              li 
                i.lista-ul__vineta
                p.mb-0 Dirección general.
              li 
                i.lista-ul__vineta
                p.mb-0 Oficina de control interno. 
              li 
                i.lista-ul__vineta
                p.mb-0 Subdirección de análisis estratégico. 
              li 
                i.lista-ul__vineta
                p.mb-0 Subdirección de análisis de operaciones. 
              li 
                i.lista-ul__vineta
                p.mb-0 Subdirección administrativa.
              li 
                i.lista-ul__vineta
                p.mb-0 Subdirección financiera. 
          .col-lg-6.position-relative 
            .imagen-absolute5
              img.mt-5.pt-3(data-aos="zoom-in")(src='@/assets/curso/temas/img44.svg', alt='')

    p(data-aos="fade-down") Cada una con el rol de hacer el seguimiento y control de la información según responsabilidades.

    p(data-aos="fade-down").mb-5 Las siguientes Leyes, Normas y Políticas están relacionadas directamente con el lavado de activos o manejos de dineros con propósitos ilegales, como se puede ver a continuación:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/K1ip1pAHNlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador 
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.4 Etapas
    p(data-aos="fade-down").mb-5 La implementación del sistema cada entidad la genera según sus operaciones, pero es importante tener en cuenta estas etapas:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Creación de políticas" :icono="require('@/assets/curso/temas/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Creación de políticas
            p Es el primer paso en donde se establecen las directrices como el diligenciamiento de los formularios, su presentación, cumplimiento  y demás normas. 
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1_1.svg', alt='')

      .py-4.py-md-5(titulo="Creación de procedimientos" :icono="require('@/assets/curso/temas/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Creación de procedimientos
            p Es donde se establecen las buenas prácticas de prevención, conocimiento, identificación, documentación y cultura explicando cada paso.
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2_2.svg', alt='')
      .py-4.py-md-5(titulo="Creación de documentos" :icono="require('@/assets/curso/temas/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Creación de documentos
            p Se elaboran los documentos para registrar los procedimientos. 
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3_3.svg', alt='')

      .py-4.py-md-5(titulo="Definir responsabilidades" :icono="require('@/assets/curso/temas/4.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Definir responsabilidades
            p Se asigna a cada funcionario su rol frente al sistema y responsabilidades.
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4_4.svg', alt='')
      .py-4.py-md-5(titulo="Definir herramientas" :icono="require('@/assets/curso/temas/5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Definir herramientas
            p Se asignan las herramientas ofimáticas, informáticas y digitales para la gestión del sistema.
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5_5.svg', alt='')

      .py-4.py-md-5(titulo="Difundir el sistema" :icono="require('@/assets/curso/temas/6.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Difundir el sistema
            p Se presenta el sistema a todo el personal para su correcta implementación.
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6_6.svg', alt='')
      .py-4.py-md-5(titulo="Capacitar al personal" :icono="require('@/assets/curso/temas/7.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-5
            h4 Capacitar al personal
            p Se capacita y entrena al personal en la gestión del sistema tanto en inducción y  según cambios en las operaciones.
        
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7_7.svg', alt='')

    Separador 
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.5 Ventajas

    p(data-aos="fade-down").mb-5 Teniendo en cuenta en lo que consiste un sistema de administración de riesgos de lavado de activos y financiación del terrorismo (Sarlaft) y su importancia, a continuación, se presentan las ventajas de Sarlaft:

    .row.justify-content-center.align-items-center
      .col-lg-4(data-aos="flip-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img45.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              p(data-aos="fade-down").mb-0 Se crean estrategias y objetivos claros para la identificación de actividades ilícitas.

      .col-lg-4(data-aos="flip-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img46.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              p(data-aos="fade-down").mb-0 Los criterios son claros y uniformes para identificar los riesgos y compartidos con todos generando una cultura de prevención.

      .col-lg-4(data-aos="flip-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img47.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              p(data-aos="fade-down").mb-0 Identifica la vulnerabilidad de la entidad para implementar los controles pertinentes.

    .row.justify-content-center.align-items-center
      .col-lg-4(data-aos="flip-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img48.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              p(data-aos="fade-down").mb-0 Se puede comparar el costo y beneficio del sistema identificando su utilidad.

      .col-lg-4(data-aos="flip-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img49.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              p(data-aos="fade-down").mb-0 Se mitiga el riesgo de participar en operaciones ilícitas con fines terroristas o de lavado de activos.

    Separador 
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.6 Política nacional

    p(data-aos="fade-down").mb-5 Como se ha visto durante el desarrollo de la unidad temática las políticas son muy importantes en cada entidad y no es ajeno el estado ante este proceso por esto en el Consejo de Política Económica y Social Conpes 4042 del año 2021 y en el Plan Nacional de Desarrollo 2018 - 2022 se establecen las directrices para la lucha en contra del lavado de activos y financiación del terrorismo en donde se establece lo siguiente:

    .row.justify-content-center.align-items-center.mb-5.bg2.p-4.imgs-flotantes2(data-aos="fade-left")
      img.img-flotante2(data-aos="zoom-in")(src='@/assets/curso/temas/flotante3.svg', alt='Imagen decorativa')                 
      .col-lg-6
        ul.lista-ul--color.px-5.mt-2.mvp  
          li 
            i.lista-ul__vineta
            p.mb-0 Participación activa de los organismos públicos haciendo gestión de prevención y control.

          li 
            i.lista-ul__vineta
            p.mb-0 Evaluaciones según los sectores económicos y evaluar la vulnerabilidad de cada uno.

          li 
            i.lista-ul__vineta
            p.mb-0 Por medio de la UIAF  - Unidad de Información y Análisis Financiero hacer seguimiento de la información con el propósito de prevenir, identificar, reportar y gestionar la erradicación del lavado de activos y financiación del terrorismo.

          li 
            i.lista-ul__vineta
            p.mb-0 Coordinar y diseñar estrategias públicas que apoyen a las entidades para la mitigación de estas actividades ilegales.
      .col-lg-6.position-relative 
        .imagen-absolute5
          img.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img50.svg', alt='')    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Riesgo por desconocimiento o falla humana',
        texto:
          'Se da cuando el funcionario comete errores por falta de concentración, desconocimiento o actitudinales que afectan directamente la operación. <br><br><b style="color: #FC8116">Ejemplo: entregar más dinero o recibir dinero falso.</b>',
        imagen: require('@/assets/curso/temas/img26.png'),
      },
      {
        titulo: 'Riesgo por fallas en la red o tecnológicas',
        texto:
          'Se presenta cuando el sistema o alguna herramienta para la prestación del servicio se bloquea o deja de funcionar. <br><br><b style="color: #FC8116">Ejemplo: se cae el sistema o plataforma para las transacciones o el datáfono se bloquea.</b>',
        imagen: require('@/assets/curso/temas/img27.png'),
      },
      {
        titulo: 'Riesgo por temas de infraestructura',
        texto:
          'Se presenta cuando existen daños en el ambiente físico de la entidad, ya sea en el área de caja o de espera del cliente. <br><br><b style="color: #FC8116">Ejemplo: daños en las sillas de espera, del cajero, una ventanilla rota, una pared del módulo en mal estado o a punto de caerse.</b>',
        imagen: require('@/assets/curso/temas/img28.png'),
      },
      {
        titulo: 'Riegos por situaciones externas',
        texto:
          'Se presentan como consecuencias ajenas al alcance de la entidad. <br><br><b style="color: #FC8116">Ejemplo: orden público, pelea entre los usuarios, problemas de salud de un cliente.</b>',
        imagen: require('@/assets/curso/temas/img29.png'),
      },
    ],
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
