<template>
  <v-card class="rounded-0 biColor pb-12" dark>
    <v-row>
      <div class="text-h4 pl-5 font-weight-bold" v-text="textPerfil"></div>
      <div
        class="text-h4 pl-3 font-weight-bold blue-grey--text"
        v-text="textProfesional"
      ></div>
      <div
        class="subtitle-1 pl-5 pr-5 text-left"
        v-text="textPerfilProfecional"
      ></div>
      <v-spacer></v-spacer>
    </v-row>

    <v-row>
      <v-row>
        <v-spacer></v-spacer>
        <div
          class="text-h4 pr-4 font-weight-bold text-right"
          v-text="textExperiencia"
        ></div>
        <div
          class="text-h4 pr-8 font-weight-bold blue-grey--text text-right"
          v-text="textLaboral"
        ></div>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <div
          class="subtitle-1 pr-8 pl-5 text-right"
          v-text="textExperienciaLaboral"
        ></div>
      </v-row>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CurriculumTitle",

  data: () => ({
    textPerfil: "Perfil",
    textProfesional: "profesional.",
    textPerfilProfecional: `Programador prinncipalmente de Frontend y un poco de Backend, 
    un entusiasta del desarrollo. A lo largo de estos años, 
    he tenido el privilegio de formar parte en la creación de aplicaciones web como móviles, 
    las cuales han cultivado un gran éxito, tanto en mí formación profesional 
    como en la ayuda que estas proporcionan. Busco fortalecer mi capacidad 
    tanto creativa como lógica continuamente, para poder aportar soluciones digitales.
    `,
    textExperiencia: "Experiencia",
    textLaboral: "Laboral.",
    textExperienciaLaboral: `A continuacion se describen algunos de mis trabajos y 
    proyectos desarrollados durante los ultimos años.
    `,
  }),
};
</script>

<style scoped>
.biColor {
  background-color: #343a40;
}
</style>