<template>
  <div class="manbg">
    <v-container>
      <v-layout>
        <div height="500" class="arrow" flat>
          <div class="large_spacers"></div>
          <div>
            <span class="headerline1">
              {{caption.header1}}
              <br />
              {{caption.header2}}
            </span>
            <br />
            <span class="headerline2">{{caption.header3}}</span>
            <br />
            <br />
            <br />
            <form @submit.prevent="onSubmit">
              <div>
                <app-input v-model="username" placeholder="Yourname" style="margin-right:10px"></app-input>
                <v-btn
                  required
                  height="54"
                  large
                  dark
                  style="display:inline-block"
                  color="#0290d8"
                  class="btnusername"
                  type="submit"
                >Build My Resume</v-btn>
              </div>
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
.headerline1 {
  font-size: 70px;
  font-weight: 800;
  letter-spacing: -1.4px;
  color: #1f3445;
}

.headerline2 {
  font-size: 30px;
  color: #1f3445;
}

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

.btnusername {
  margin-top: -2px;
  font-size: 30px !important;
  text-transform: capitalize;
  height: 99px !important;
  margin: 0;
  padding: 0;
}

.arrow {
  background: url("../../assets/arrow.png");
  background-position: center right;
  background-repeat: no-repeat;
}
</style>
