<template>
  <span>
    <v-app-bar flat height="117">
      <div style="margin-top:10px;margin-left:40px">
        <img src="@/assets/wflogo.png" class="img-responsive thumbnail" />
      </div>
      <v-spacer></v-spacer>
      <v-btn text color="#0290d8" class="mainbtn">
        <span class="ntext">Log In</span>
      </v-btn>
      <div class="mainbtnspacer"></div>
      <v-btn dark color="#0290d8" class="mainbtn">
        <span class="ntext">Sign Up</span>
      </v-btn>
      <div class="mainbtnspacer"></div>
    </v-app-bar>
    <v-divider></v-divider>
  </span>
</template>

<script>
export default {};
</script>

<style>
.mainbtn {
  height: 55px !important;
  width: 150px;
}

.mainbtnspacer {
  height: 150px;
  width: 15px;
}

.xntext {
  text-transform: capitalize;
}
</style>