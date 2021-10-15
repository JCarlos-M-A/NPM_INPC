<template>
  <v-app>
    <v-main class="body">
      <Servicios />
      <Carrousel />
    </v-main>
  </v-app>
</template>

<script>
import Carrousel from "../components/Inicio/ServiciosDestacados.vue";
import Servicios from "../components/Inicio/Carrousel.vue";

export default {
  name: "Home",

  components: {
    Carrousel,
    Servicios,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

.body{
  background-color: #5f5f5f;
}

</style>


