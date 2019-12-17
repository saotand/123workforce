<template>
  <span style="background-color:#aaaaaa">
    <center>
      <h1>
        The ultimate Tool
        <br />For Profesional's Resumes
      </h1>
      <br />
      <br />
    </center>
    <center>
      <form @submit.prevent="onSubmit">
        <v-text-field
          v-model="username"
          id="nameresume"
          style="display:inline-block"
          outlined
          :prefix="baseurl"
          class="usernamefield"
          placeholder="Yourname"
        ></v-text-field>&nbsp;
        <v-btn
          required
          height="54"
          large
          dark
          style="display:inline-block"
          color="#0290d8"
          class="xntext"
          type="submit"
        >Build My Resume</v-btn>
      </form>
    </center>
  </span>
</template>

<script>
export default {
  data: () => ({
    caption: {
      header1: "Make Your",
      header2: "Online Resume",
      header3: "Chose Your Username"
    },
    username: "",
    baseurl: "123workforce.com/"
  }),
  methods: {
    onSubmit() {
      alert("Send '" + this.username + "' to http://" + this.baseurl);
    }
  }
};
</script>

<style>
h1 {
  font-weight: normal;
  font-stretch: expanded;
}

#nameresume {
  color: #2081cf !important;
}
</style>