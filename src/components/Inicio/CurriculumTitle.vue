<template>
  <v-card
    class="mx-auto py-10 rounded-0"
    dark
    style="background: linear-gradient(#333 50%, #a00 50%)"
  >
    <v-img
      class="rounded-circle mx-12"
      lazy-src="https://picsum.photos/id/11/10/6"
      height="150"
      width="150"
      src="https://gartic.com.br/imgs/mural/on/onepiece_united/luffy-monk.png"
    ></v-img>
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