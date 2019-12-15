<template>
  <v-card class="profileshape">
    <v-container style="background-color:#0290d8">
      <v-layout>
        <v-flex xs2>
          <img src="@/assets/bullet.png" />
        </v-flex>
        <v-flex dark>
          <center style="color:white">123workforce/king</center>
        </v-flex>
        <v-flex xs2></v-flex>
      </v-layout>
    </v-container>
    <v-container style="background-color: #00adef">
      <v-layout class="fdiagram">
        <v-flex xs3>
          <div class="roundimage">
            <v-img
              height="128px"
              width="128px"
              class="img-responsive img-circle borderprofile"
              :src="user.image"
            ></v-img>
          </div>
        </v-flex>
        <v-flex xs2 class="d-flex align-center">
          <v-layout column>
            <v-flex style="color:white; margin-top:20px;">{{user.name}} {{user.last}}</v-flex>
            <v-flex style="font-size:12px;color:white; margin-top:10px;">{{user.occupation}}</v-flex>
            <v-flex>
              <br />
              <v-divider></v-divider>
              <br />
            </v-flex>
            <v-flex>
              <app-dialog title="Message" class="ntext" text="Tap to Chat"></app-dialog>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex>
          <div>
            <br />
            <br />
            <br />
            <center style="color:white">
              15.00
              <br />Hourly Rate
            </center>
          </div>
        </v-flex>
        <v-flex>
          <div>
            <br />
            <br />
            <br />
            <center style="color:white">
              40 Hours
              <br />Weekly Avilability
            </center>
          </div>
        </v-flex>
        <v-flex>
          <div>
            <br />
            <br />
            <br />
            <center style="color:white">
              <v-btn class="ntext">Hire Me</v-btn>
            </center>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <div>
          <v-img src="@/assets/profilebg.png"></v-img>
        </div>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({})
};
</script>

<style>
.borderprofile {
  border: 3px solid #0290d8;
}

.roundimage {
  /*border: 1px solid #000;*/
  max-width: 130px;
  max-height: 130px;
  margin: 0px;
  padding: 3px;
  margin: 10px 30px;
}

.fdiagram * {
  border: 1px sold #000 !important;
}
</style>
