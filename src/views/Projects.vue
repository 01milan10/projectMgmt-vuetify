<template>
  <div>
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels focusable inset popup>
        <v-expansion-panel v-for="item in myProjects" :key="item.title">
          <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card-text class="px-4 grey--text">
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
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Design a new Website",
          person: "The New Ninja",
          due: "1-01-2019",
          status: "ongoing",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vero corrupti aspernatur deleniti alias reiciendis accusamus temporibus ipsum aperiam, non eum eligendi, totam ullam iure optio doloribus autem. Exercitationem, ducimus."
        },
        {
          title: "Design a new Website",
          person: "The New Ninja",
          due: "1-01-2019",
          status: "ongoing",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vero corrupti aspernatur deleniti alias reiciendis accusamus temporibus ipsum aperiam, non eum eligendi, totam ullam iure optio doloribus autem. Exercitationem, ducimus."
        },
        {
          title: "Design a new Website",
          person: "The New Ninja",
          due: "1-01-2019",
          status: "ongoing",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vero corrupti aspernatur deleniti alias reiciendis accusamus temporibus ipsum aperiam, non eum eligendi, totam ullam iure optio doloribus autem. Exercitationem, ducimus."
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "1-01-2020",
          status: "complete",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vero corrupti aspernatur deleniti alias reiciendis accusamus temporibus ipsum aperiam, non eum eligendi, totam ullam iure optio doloribus autem. Exercitationem, ducimus."
        },
        {
          title: "Design video thumbnails",
          person: "The Newbie",
          due: "10-01-2020",
          status: "ongoing",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vero corrupti aspernatur deleniti alias reiciendis accusamus temporibus ipsum aperiam, non eum eligendi, totam ullam iure optio doloribus autem. Exercitationem, ducimus."
        },
        {
          title: "Create a community forum",
          person: "The Old Ninja",
          due: "21-02-2020",
          status: "overdue",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vero corrupti aspernatur deleniti alias reiciendis accusamus temporibus ipsum aperiam, non eum eligendi, totam ullam iure optio doloribus autem. Exercitationem, ducimus."
        }
      ]
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(item => {
        return item.person == "The New Ninja";
      });
    }
  }
};
</script>

<style>
</style>
