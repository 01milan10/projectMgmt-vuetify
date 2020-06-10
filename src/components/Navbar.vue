<template>
  <nav>
    <v-app-bar app class="grey lighten-5">
      <v-app-bar-nav-icon class="primary--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <span class="text-uppercase primary--text font-weight-light">Todo</span>
      <span class="text-uppercase primary--text">Ninja</span>
      <v-spacer></v-spacer>
      <v-btn text rounded outlined color="primary">
        <span>Sign out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app color="indigo darken-4" v-model="drawer">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <v-img src="/avatar-1.png"></v-img>
          </v-avatar>
          <p class="white--text subtitle-1 mt-1">The Net Ninja</p>
        </v-flex>
      </v-layout>
      <v-list shaped>
        <v-list-item v-for="(link,i) in links" :key="i" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-tile-title class="white--text">{{link.title}}</v-list-tile-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-list shaped>
      // check the v-list gives error in the console
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="links">
          <v-list-item v-for="(item, i) in links" :key="i" router :to="item.route">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>-->
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  method: {}
};
</script>

<style>
</style>