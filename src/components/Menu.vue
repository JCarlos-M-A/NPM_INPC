<template>
  <v-card dark>
    <v-toolbar prominent color="#002550">
      <v-app-bar-nav-icon
        @click="drawer = true"
        v-if="$vuetify.breakpoint.xsOnly"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title
        :class="{
          '': $vuetify.breakpoint.smAndDown,
          'ml-6': $vuetify.breakpoint.mdAndUp,
        }"
      >
      <router-link to="/Home" class="flm" align="center">Mi Proyecto</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        dark
        v-if="$vuetify.breakpoint.mdAndUp"
        class="text-capitalize mr-2 v-btn--active"
      >
        <router-link to="/Home" class="flm">Home</router-link>
      </v-btn>

      <div class="text-center mr-2">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-if="$vuetify.breakpoint.mdAndUp"
              dark
              v-bind="attrs"
              v-on="on"
              class="text-capitalize"
            >
              Servicios
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="bgsel item" link>
              <v-list-item-title
                ><router-link to="/Servicios" class="flm"
                  >Machining Service</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item class="bgsel item" link>
              <v-list-item-title
                ><router-link to="/Servicios" class="flm"
                  >Machining Service</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item class="bgsel item" link>
              <v-list-item-title
                ><router-link to="/Servicios" class="flm"
                  >Machining Service</router-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn
        v-if="$vuetify.breakpoint.mdAndUp"
        dark
        class="text-capitalize mr-2"
      >
        <router-link to="/Nosotros" class="flm">Nosotros</router-link>
      </v-btn>

      <v-btn
        v-if="$vuetify.breakpoint.mdAndUp"
        dark
        class="text-capitalize mr-14"
      >
        <router-link to="/Contacto" class="flm">Contacto</router-link>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      width="100%"
      height="auto"
      temporary
    >
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/Home" class="flm">Home</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/Nosotros">Nosotros</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/Servicios" class="flm">Servicios</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/Contacto" class="flm">Contacto</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Inicio",

  data: () => ({
    drawer: false,
    group: null,
    items: [{ title: "Misión" }, { title: "Objetivo" }, { title: "Visión" }],
  }),

  methods: {
    menuItems() {
      return this.menu;
    },
  },
};
</script>

<style scope>
.bgsel:hover {
  background: #afaeae;
}

.flm:link {
  text-decoration: none;
}

.item {
  background-color: brown;
}

.v-application a {
  color: #ffffff !important;
}
</style>