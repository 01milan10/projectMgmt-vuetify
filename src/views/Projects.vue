<template>
  <div>
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels focusable inset popup>
        <v-expansion-panel v-for="item in myProjects" :key="item.id" class="grey lighten-4">
          <v-expansion-panel-header class="indigo--text">{{item.title}}</v-expansion-panel-header>
          <v-expansion-panel-content class="grey lighten-4">
            <v-card-text class="px-4">
              <div class="font-weight-bold">{{item.due}}</div>
              <div>{{item.content}}</div>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  name: "Projects",
  data() {
    return {
      projects: []
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(item => {
        return item.person == "The New Ninja";
      });
    }
  },
  created() {
    db.collection("projects").onSnapshot(response => {
      const changes = response.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>

<style>
</style>
