<template>
  <span>
    <v-app-bar flat fixed height="117" class="mainbarline">
      <div to="/" style="margin-top:10px;margin-left:40px">
        <img src="@/assets/wflogo.png" class="img-responsive thumbnail" />
      </div>
      <v-spacer></v-spacer>
      <v-btn text color="#1f3445" class="mainbtn light">
        <span class="ntext">Log In</span>
      </v-btn>
      <div class="mainbtnspacer"></div>
      <v-btn dark color="#0290d8" class="mainbtn dark">
        <span class="ntext">Sign Up</span>
      </v-btn>
      <div class="mainbtnspacer"></div>
    </v-app-bar>
    <div style="height:117px"></div><v-icon></v-icon>
  </span>
</template>

<script>
export default {};
</script>

<style>
.mainbtn {
  height: 55px !important;
  width: 150px;
  font-size: 18px !important;
}

.mainbtn.light {
  font-weight: normal;
}

.mainbtn.dark {
  font-weight: 700;
}

.mainbtnspacer {
  height: 150px;
  width: 15px;
}

.mainbarline {
  border-bottom: 1px solid #eee !important;
}

.xntext {
  text-transform: capitalize;
}
</style>