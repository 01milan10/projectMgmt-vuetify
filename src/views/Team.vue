<template>
  <div>
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card shaped class="text-center ma-3" color="grey lighten-4">
            <v-responsive class="pt-4">
              <v-avatar size="80" class="primary lighten-2">
                <v-img :src="person.avatar"></v-img>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1 primary--text lighten-4">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <div align="left">
                <v-btn small text color="grey" rounded>
                  <v-icon small left>mdi-message-text</v-icon>
                  <span>message</span>
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        {
          name: "The Night Owl",
          role: "Web developer",
          avatar: "/avatar-1.png"
        },
        { name: "Ryu", role: "Graphic designer", avatar: "/avatar-2.png" },
        { name: "Chun Li", role: "Web developer", avatar: "/avatar-3.png" },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/avatar-4.png"
        },
        { name: "Yoshi", role: "Sales Guru", avatar: "/avatar-5.png" }
      ]
    };
  }
};
</script>

<style>
</style>