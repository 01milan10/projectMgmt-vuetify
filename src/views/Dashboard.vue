<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container fluid class="grey my-5">
      <v-layout row class="md-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              rounded
              color="primary"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Show projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <v-btn
              small
              text
              rounded
              @click="sortBy('person')"
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By developer</span>
            </v-btn>
          </template>
          <span>Show projects by developer</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <v-btn
              small
              text
              rounded
              @click="sortBy('due')"
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-calendar</v-icon>
              <span class="caption text-lowercase">By date</span>
            </v-btn>
          </template>
          <span>Show projects by due date</span>
        </v-tooltip>
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.id" class="px-3 grey lighten-3">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <v-card fluid flat class="mr-5 grey lighten-4">
              <v-card-text>
                <div class="caption grey--text">Project title</div>
                {{project.title}}
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <v-card flat class="mr-5 grey lighten-4">
              <v-card-text>
                <div class="caption grey--text">Developer</div>
                <div>{{project.person}}</div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <v-card flat class="mr-5 grey lighten-4">
              <v-card-text>
                <div class="caption grey--text">Due Date</div>
                <div>{{project.due}}</div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div align="right">
              <v-chip
                v-if="project.badge"
                outlined
                close
                small
                class="mr-3"
                color="red"
                @click:close="project.badge=false"
              >{{project.badge}}</v-chip>
              <v-chip small :class="`white--text caption my-2 ${project.status}`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  name: "Dashboard",
  data() {
    return {
      projects: []
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
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
<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid orangered;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: orangered !important;
}
</style>