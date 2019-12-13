<template>
  <span>
    <v-container class="manbg" style="background-image:url">
      <v-layout>
        <v-card height="500" flat>
          <div class="large_spacers"></div>
          <div>
            <h1>
              Make Your
              <br />Online Resume
            </h1>
            <br />Chose Your Username
            <br />
            <v-text-field
              style="display:inline-block"
              color="#0290d8"
              outlined
              :prefix="baseurl"
              class="usernamefield"
            ></v-text-field>&nbsp;
            <v-btn
              height="54"
              large
              dark
              style="display:inline-block"
              color="#0290d8"
              class="xntext"
            >Build My Resume</v-btn>
          </div>
          <div class="large_spacers"></div>
        </v-card>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
export default {
  data: () => ({
    baseurl: "123workforce.com/"
  })
};
</script>

<style>
.large_spacers {
  height: 180px;
}

h1 {
  font-weight: normal;
  font-stretch: expanded;
}

.usernamefiled {
  background-color: #0290d8 !important;
}
</style>
