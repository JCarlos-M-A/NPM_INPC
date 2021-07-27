<template>
  <v-carousel v-model="model" class="mt-3" hide-delimiters>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",

  data: () => ({
    items: [
      {
        src: "https://fondosmil.com/fondo/73596.jpg",
      },
      {
        src: "https://noescinetodoloquereluce.com/wp-content/uploads/2020/04/tron-legacy.jpg",
      },
      {
        src: "https://lh3.googleusercontent.com/-PP5TqpQKOhk/VsABNLlO1nI/AAAAAAAABlQ/t6wvqcxAl08/s1600/ghost_rider-1920x1080.jpg",
      },
      {
        src: "https://blog.nubecolectiva.com/wp-content/uploads/2020/09/img_destacada_blog_devs-4-950x305.png",
      },
    ],

    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>