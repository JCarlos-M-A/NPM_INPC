<template>
  <v-app>
          <AppBar/>
    <v-main>
      <HelloWorld/>
      <Calendario/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Calendario from './components/Calendario';
import AppBar from './components/AppBar';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Calendario,
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
