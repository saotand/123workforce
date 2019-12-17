<template>
  <div style="margin:50px 0;">
    <v-container>
      <v-layout>
        <v-flex column sm4 offset-sm-4>
          <center>
            <div class="switch-container" @click="tswitch">
              <div class="switch-btn" :class="mswitch?'on':'off'">
                <div style="width:100%">
                  <center>{{timepay}}ly</center>
                </div>
              </div>
            </div>
          </center>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex column sm4 offset-sm-4>
          <v-card>
            <v-container>
              <v-layout>
                <v-flex>
                  <div style="height:60px"></div>
                  <center>
                    <h1 style="font-size:2em">{{timepay}}ly</h1>
                    <span style="font-size:3em;color:#0290d8">{{mswitch?'19':'200'}}</span>
                    <span style="font-size:1em;color:#0290d8">
                      <v-icon color="#0290d8">mdi-currency-usd</v-icon>USD
                    </span>
                    <br />
                    <span style="font-size:1em">Per {{timepay}}</span>
                  </center>
                </v-flex>
              </v-layout>
            </v-container>
            <v-container>
              <v-layout row>
                <v-flex xs3></v-flex>
                <v-flex xs6 style="padding:5px 10px;">
                  <v-icon left>mdi-check-circle-outline</v-icon>Online Resume
                </v-flex>
                <v-flex xs3></v-flex>
                <v-flex xs3></v-flex>
                <v-flex xs6 style="padding:5px 10px;">
                  <v-icon left>mdi-check-circle-outline</v-icon>2 Themes
                </v-flex>
                <v-flex xs3></v-flex>
                <v-flex xs3></v-flex>
                <v-flex xs6 style="padding:5px 10px;">
                  <v-icon left>mdi-check-circle-outline</v-icon>Export PDF
                </v-flex>
                <v-flex xs3></v-flex>
                <v-flex xs3></v-flex>
                <v-flex xs6 style="padding:5px 10px;">
                  <v-icon left>mdi-check-circle-outline</v-icon>Visual Builder
                </v-flex>
                <v-flex xs3></v-flex>
                <v-flex xs3></v-flex>
                <v-flex xs6 style="padding:5px 10px;">
                  <v-icon left>mdi-check-circle-outline</v-icon>Free Domain URL
                </v-flex>
                <v-flex xs3></v-flex>
                <v-flex xs3></v-flex>
                <v-flex xs6 style="padding:5px 10px;">
                  <br />
                  <v-btn dark color="#0290d8" class="mainbtn" style="margin:20px 0px;">
                    <span class="ntext">
                      <b>Start Free Trial</b>
                      <br />
                      <span style="font-size:8px">7 Days free trial</span>
                    </span>
                  </v-btn>
                </v-flex>
                <v-flex xs3></v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    mswitch: true
  }),
  computed: {
    position() {
      return this.mswitch ? "left" : "right";
    },
    timepay() {
      return this.mswitch ? "Month" : "Year";
    }
  },
  methods: {
    tswitch() {
      this.mswitch = !this.mswitch;
    }
  }
};
</script>

<style>
.switch-container,
.switch-btn {
  border-radius: 60px;
}
.switch-btn.on {
  left: -1px;
}
.switch-btn.off {
  left: 49px;
}
.switch-container {
  display: inline-flex;
  width: 200px;
  height: 60px;
  border: 1px solid #0290d8;
  border-radius: 60px;
}

.switch-btn {
  position: relative;
  top: -1px;
  text-align: center !important;
  display: inline-flex;
  height: 60px;
  width: 150px;
  background-color: #0290d8;
  padding: 20px 0;
  color: #fff !important;
}
</style>