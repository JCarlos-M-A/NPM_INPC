<template>
  <v-card dark>
    <v-toolbar prominent color="#333333">
      <v-app-bar-nav-icon
        @click="drawer = true"
        v-if="$vuetify.breakpoint.xsOnly"
      >
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <router-link
        to="/"
        class="flm"
        align="center"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
      </router-link>
      <router-link
        class="v-btn text-capitalize mr-2"
        style="
          background-color: #666666;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          margin-top: 3rem;
        "
        v-if="$vuetify.breakpoint.mdAndUp"
        to="/"
      >
        <v-icon left dark> mdi-home </v-icon>
        Inicio
      </router-link>

      <div class="text-center">
        <v-menu offset-y open-on-hover v-if="$vuetify.breakpoint.mdAndUp">
          <template v-slot:activator="{ on, attrs }">
            <div
              class="v-btn"
              v-bind="attrs"
              v-on="on"
              style="
                background-color: #666666;
                margin-right: 0.5rem;
                padding-left: 1rem;
                padding-right: 1rem;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                margin-top: 3rem;
              "
            >
              Servicios
              <v-icon right dark> mdi-chevron-down </v-icon>
            </div>
          </template>
          <v-list style="padding-top: 0; padding-bottom: 0">
            <v-list-item class="itemDrop">
              <v-list-item-title class="text-left">
                <router-link to="/Servicios" class="flm"
                  >HTML</router-link
                >
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="itemDrop">
              <v-list-item-title class="text-left">
                <router-link to="/Servicios" class="flm"
                  >JAVASCRIPT</router-link
                >
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="itemDrop">
              <v-list-item-title class="text-left">
                <router-link to="/Servicios" class="flm"
                  >CSS</router-link
                >
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <router-link
        class="v-btn text-capitalize mr-2"
        style="
          background-color: #666666;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          margin-top: 3rem;
        "
        v-if="$vuetify.breakpoint.mdAndUp"
        to="/Nosotros"
      >
        <v-icon left dark large> mdi-groups </v-icon>
        Nosotros
      </router-link>

      <router-link
        class="v-btn text-capitalize mr-2"
        style="
          background-color: #666666;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          margin-top: 3rem;
        "
        v-if="$vuetify.breakpoint.mdAndUp"
        to="/Contacto"
      >
        Contacto
      </router-link>

      <v-spacer></v-spacer>
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
              <router-link to="/" class="flm">Home</router-link>
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
              <router-link to="/Servicios" class="flm"
                >Ingenieria en manejo de materiales</router-link
              >
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <!--<router-link to="/Servicios" class="flm">Maquinado</router-link>-->
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <!--<router-link to="/Servicios" class="flm">Corte Laser</router-link>-->
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
    //drop
    isOpen: false,

    drawer: false,
    group: null,
    items: [{ title: "Misión" }, { title: "Objetivo" }, { title: "Visión" }],
  }),

  methods: {
    menuItems() {
      return this.menu;
    },
    cambia(location) {
      location.href = location;
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

.imagCursor:hover {
  cursor: pointer;
}
.itemDrop {
  background-color: #666666;
  color: #fff !important;
  border-bottom: 1px dotted white;
}
.itemDrop:hover {
  cursor: pointer;
  background-color: #333333;
}
</style>