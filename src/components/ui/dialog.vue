<template>
  <v-row justify="center">
    <v-btn @click.stop="openWindow" class="ntext">{{text}}</v-btn>
    <v-dialog v-model="dialog" max-width="390" class="shapewindow">
      <form @submit.prevent="onSubmit">
        <v-card class="shapewindow">
          <v-card-title dark class="headline titlewindowset">{{title}} {{message}}</v-card-title>
          <v-card-text>
            <v-textarea
              v-model="message"
              ouline
              name="input-7-1"
              label="Send Message"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              hint="Hint text"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" @click="closeWindow" class="ntext">Close</v-btn>
            <div style="width:20px"></div>
            <v-btn color="#0290d8" dark type="submit" @click="closeWindow" class="ntext">Send</v-btn>
          </v-card-actions>
        </v-card>
      </form>
      <code>{{message}}</code>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Open Dialog",
      required: false
    },
    title: {
      type: String,
      default: "Default title window",
      required: false
    },
    close: {
      type: String,
      required: false,
      default: "Close"
    },
    width: {
      type: String,
      required: false,
      default: "500"
    }
  },
  data: () => ({
    dialog: false,
    message: ""
  }),
  methods: {
    onSubmit() {
      alert("Send Message Action");
      this.closeWindow();
    },
    openWindow() {
      this.message = "";
      this.dialog = true;
    },
    closeWindow() {
      this.message = "";
      this.dialog = false;
    }
  }
};
</script>

<style>
.titlewindowset {
  color: white;
  height: 40px;
  background-color: #0290d8;
  margin: 0;
  padding: 0 10px;
}

.shapewindow {
  border-radius: 15px !important;
}

.ntext {
  text-transform: capitalize;
}
</style>