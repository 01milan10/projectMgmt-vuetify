<template>
  <div class="text-center">
    <v-dialog width="600px" persistent v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text rounded color="grey lighten-2" v-bind="attrs" v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Add a new project</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil"
              :rules="inputRules"
            ></v-textarea>

            <v-menu max-width="290">
              <template v-slot:activator="{on}">
                <v-text-field
                  v-on="on"
                  slot="activator"
                  label="Due Date"
                  prepend-icon="mdi-calendar-range"
                  :value="formattedDate"
                  :rules="inputRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-flex row>
              <v-btn
                class="mx-0 mt-3"
                color="success darken-2"
                rounded
                outlined
                @click="submit"
                :loading="loading"
              >
                Add project
                <template v-slot:loader>
                  <span class="custom-loader">
                    <v-icon light>mdi-cached</v-icon>
                  </span>
                </template>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="ml-3 mt-3" outlined rounded color="error" @click="dialog=false">Cancel</v-btn>
            </v-flex>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import db from "@/fb";
export default {
  name: "Popup",
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: moment(this.due).format("Do MMMM YYYY"),
          person: "The New Ninja",
          status: "ongoing",
          badge: "new"
        };

        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdded");
          });
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
    }
  }
};
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>