<template>
  <v-card
    class="mx-auto py-5 rounded-0"
    dark
    style="background: linear-gradient(#333 50%, #a00 50%)"
  >
    <v-row>
      <v-col cols="12" md="3">
        <v-img
          class="rounded-circle mx-auto"
          style="margin-top: 50px"
          lazy-src="https://gartic.com.br/imgs/mural/on/onepiece_united/luffy-monk.png"
          height="150"
          width="150"
          src="https://gartic.com.br/imgs/mural/on/onepiece_united/luffy-monk.png"
        ></v-img>
      </v-col>
      <v-col cols="12" md="9">
        <p class="p-0 mb-0 mt-10 text-h4 font-weight-bold">Curriculum vitae</p>
        <br>
        <br>
        <br>
        <p class="p-0 m-0 mb-0 text-h6 font-weight-bold text-left">
          Nombre: Juan Carlos Montaño Alvarez
        </p>
        <p class="p-0 m-0 mb-0 text-h6 font-weight-bold text-left">
          Telefono: 447 108 5892
        </p>
        <p class="p-0 m-0 mb-0 text-h6 font-weight-bold text-left">
          Email: carlitosjl77@gmail.com
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CurriculumTitle",

  data: () => ({}),
};
</script>

<style scoped>
.biColor {
  background-color: linear-gradient(#333 50%, #a00 50%);
}
</style>