<template>
  <v-card class="rounded-0 biColor pb-12" dark flat>
    <v-row>
      <div class="text-h4 pl-5 font-weight-bold" v-text="textPerfil"></div>
      <div
        class="text-h4 pl-3 font-weight-bold blue-grey--text"
        v-text="textProfesional"
      ></div>

      <v-row>
        <v-col cols="12" md="7">
          <div
            class="subtitle-1 pl-5 pr-5 text-justify"
            v-text="textPerfilProfecional"
          ></div>
        </v-col>
        <v-col cols="12" md="5"></v-col>
      </v-row>

      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <div style="margin-top: 3rem"></div>
    </v-row>
    <v-row>
      <v-row>
        <v-spacer></v-spacer>
        <div
          class="text-h4 pr-4 font-weight-bold text-justify"
          v-text="textExperiencia"
        ></div>
        <div
          class="text-h4 pr-8 font-weight-bold blue-grey--text text-justify"
          v-text="textLaboral"
        ></div>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-col cols="12" md="5"></v-col>
          <v-col cols="12" md="7">
            <div
              class="subtitle-1 pr-8 pl-5 text-justify"
              v-text="textExperienciaLaboral"
            ></div>
          </v-col>
        </v-row>
      </v-row>
    </v-row>
    <v-row>
      <div style="margin-top: 3rem"></div>
    </v-row>
    <v-row>
      <div class="text-h4 pl-5 font-weight-bold" v-text="textEducacion"></div>

      <v-row>
        <v-col cols="12" md="7">
          <div
            class="subtitle-1 pl-5 pr-5 text-left"
            v-text="textEducacionT"
          ></div>
        </v-col>
        <v-col cols="12" md="5"></v-col>
      </v-row>

      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <div style="margin-top: 3rem"></div>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CurriculumTitle",

  data: () => ({
    textPerfil: "Perfil",
    textProfesional: "profesional.",
    textPerfilProfecional: `Programador principalmente de Frontend y un poco de Backend, 
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

    textEducacion: "Educación",
    textEducacionT:
      "Ingeniería en Sistemas Computaconales Instituto Tecnologico Superior de Ciudad Hidalgo 2016-2021",
  }),
};
</script>

<style scoped>
.biColor {
  background-color: #343a40;
}
</style>