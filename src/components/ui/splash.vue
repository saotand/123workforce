<template>
  <div class="manbg">
    <v-container>
      <v-layout>
        <div height="500" class="arrow" flat>
          <div class="large_spacers"></div>
          <div>
            <h1>
              {{caption.header1}}
              <br />
              {{caption.header2}}
            </h1>
            <br />
            {{caption.header3}}
            <br />
            <br />
            <br />
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
          </div>
          <div class="large_spacers hide-sm-andup"></div>
        </div>
      </v-layout>
    </v-container>
  </div>
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
.large_spacers {
  height: 150px;
}

h1 {
  font-weight: normal;
  font-stretch: expanded;
}

.usernamefield fieldset {
  margin-top: 4px;
  margin-right: 10px;
  border: 2px solid #2081cf;
  background-color: #dff4ff !important;
}

#nameresume {
  color: #2081cf !important;
}
.manbg {
  background: url("../../assets/man.png");
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
}

.arrow {
  background: url("../../assets/arrow.png");
  background-position: center right;
  background-repeat: no-repeat;
}
</style>
