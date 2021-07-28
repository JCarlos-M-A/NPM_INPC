<template>
  <v-app>
    <v-main>
      <Calendario />
     <div class="mb-10"></div>
    </v-main>
  </v-app>
</template>

<script>
import Calendario from "../components/Calendario.vue";

export default {
  name: "Servicios",
  components: {
    Calendario,
  },

  data: () => ({
    //
  }),
  mounted() {
      
  },
};
</script>


