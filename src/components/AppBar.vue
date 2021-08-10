<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn elevation="0" @click='direccion("/")'>Inicio</v-btn>
      <v-btn elevation="0" @click='direccion("/nosotros")'>Nosotros</v-btn>
      <v-btn elevation="0" @click='direccion("/proyectos")'>Proyectos</v-btn>
      <v-btn elevation="0" @click='direccion("/contacto")'>Contacto</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    //
    
  }),
 methods: {
      direccion(direccion){
          location.href=direccion;
      }
  }
};
</script>
