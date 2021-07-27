<template>
  <v-app>
    <v-main>
      <Inicio/>
    </v-main>
  </v-app>
</template>

<script>
import Inicio from './components/Inicio';

export default {
  name: 'App',

  components: {
    Inicio,
  },

  data: () => ({
    //
  }),
};
</script>
