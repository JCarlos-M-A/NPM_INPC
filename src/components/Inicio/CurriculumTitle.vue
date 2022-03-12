<template>
  <div>
    <v-card
      class="mx-auto py-5 mt-4 rounded-0"
      dark
      style="background: linear-gradient(#333 50%, #a00 50%)"
    >
      <v-row>
        <v-col cols="12" md="3">
          <v-img
            class="rounded-circle mx-auto mt-6"
            lazy-src="https://gartic.com.br/imgs/mural/on/onepiece_united/luffy-monk.png"
            height="160"
            width="160"
            src="https://gartic.com.br/imgs/mural/on/onepiece_united/luffy-monk.png"
          ></v-img>
        </v-col>
        <v-col cols="12" md="9">
          <v-row>
            <v-spacer></v-spacer>
            <p class="p-0 mb-0 mt-10 text-h4 font-weight-bold">Curriculum</p>
            <v-spacer></v-spacer>
          </v-row>

          <p class="p-0 m-0 ml-2 mb-0 mt-12 text-h6 font-weight-bold text-left">
            Nombre: Juan Carlos Montaño Alvarez
          </p>
          <p class="p-0 m-0 ml-2 mb-0 text-h6 font-weight-bold text-left">
            Telefono: 447 108 5892
          </p>
          <p class="p-0 m-0 ml-2 mb-0 text-h6 font-weight-bold text-left">
            Email: carlitosjl77@gmail.com
          </p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CurriculumTitle",
};
</script>
