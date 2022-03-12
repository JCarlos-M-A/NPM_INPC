<template>
  <div class="body">
    <v-row no-gutters>
      <v-col cols="12" sm="2"> </v-col>
      <v-col cols="12" sm="8">
        <CurriculumTitle />
        <CurriculumContenido />
      </v-col>
      <v-col cols="12" sm="2"> </v-col>
    </v-row>
  </div>
</template>

<script>
import CurriculumTitle from "../components/Inicio/CurriculumTitle.vue";
import CurriculumContenido from "../components/Inicio/CurriculumContenido.vue";

export default {
  name: "Contacto",

  components: {
    CurriculumTitle,
    CurriculumContenido,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.body {
  background-color: #5f5f5f;
  margin-bottom: 7rem;
}
</style>


