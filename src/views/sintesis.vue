<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p(data-aos="fade-down") No olvide que el servicio al cliente es vital para la sostenibilidad de la empresa y saber utilizar el portafolio de productos financieros hará más ágil la labor del asesor; por otro lado, los mecanismos de control para prevenir el lavado de activos y los operacionales generan una seguridad para el funcionamiento de la entidad, por ende, es responsabilidad de todo el personal acatar las políticas y procedimientos establecidos.  

    p(data-aos="fade-down") Esperamos que el contenido temático de esta formación sea de gran apoyo cada día en su gestión y se invita a ver el siguiente mapa conceptual y resolver la actividad didáctica que servirán como refuerzo de lo aprendido.

    p(data-aos="fade-down").mb-5 ¡Muchos éxitos!
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
