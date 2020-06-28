<template>
  <nav>
    <v-app-bar app class="grey lighten-5">
      <v-snackbar v-model="snackbar" :timeout="5000" top dark>
        <span>Awesome! You added a new project</span>
        <v-btn fab x-small outlined color="pink" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
      <v-app-bar-nav-icon class="primary--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <span class="text-uppercase primary--text font-weight-light">Todo</span>
      <span class="text-uppercase primary--text">Ninja</span>
      <v-spacer></v-spacer>
      <div class="pr-2 text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on">
              <span>Menu</span>
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list dense rounded>
            <v-list-item
              v-for="(item, index) in links"
              :key="index"
              router
              :to="item.route"
              color="primary"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn rounded outlined color="primary">
        <span>Sign out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app right color="indigo darken-4" v-model="drawer" width="200">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <v-img src="/avatar-1.png"></v-img>
          </v-avatar>
          <p class="white--text subtitle-1 mt-1">The Net Ninja</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list shaped>
        <v-list-item v-for="(link,i) in links" :key="i" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  name: "Navbar",
  components: {
    Popup
  },
  data() {
    return {
      snackbar: false,
      drawer: true,
      links: [
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          route: "/"
        },
        {
          icon: "mdi-folder",
          title: "My Projects",
          route: "/projects"
        },
        {
          icon: "mdi-account-group",
          title: "Team",
          route: "/team"
        }
      ],
      dropdown_font: ["Arial", "Times New Roman", "Calibri", "Roboto"]
    };
  },
  method: {}
};
</script>

<style>
</style>