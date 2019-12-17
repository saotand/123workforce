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
    <v-layout>
      <v-flex xs12>
        <v-tabs v-model="profiledata" background-color="transparent" color="#0290d8" grow>
          <v-tab class="ntext bordered">Skills</v-tab>
          <v-tab class="ntext bordered">Work</v-tab>
          <v-tab class="ntext bordered">Education</v-tab>
          <v-tab class="ntext bordered">References/Testimonials</v-tab>
        </v-tabs>

        <v-tabs-items v-model="profiledata">
          <v-tab-item>
            <v-tabs v-model="skills" background-color="transparent" color="#0290d8" grow>
              <v-tab class="ntext bordered">Programing Languages</v-tab>
              <v-tab class="ntext bordered">Framewords / Databases</v-tab>
              <v-tab class="ntext bordered">Software</v-tab>
              <v-tab class="ntext bordered">Design Skills</v-tab>
            </v-tabs>
            <v-tabs-items v-model="skills">
              <v-tab-item>
                <v-card-text>
                  <!-- List Of Skills -->
                  <v-list>
                    <v-list-item v-for="skill in user.skills" :key="skill.icon">
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-list-item-avatar>
                            <app-tooltip right :tooltip="skill.name">
                              <v-icon color="#3c485e" x-large>{{skill.icon}}</v-icon>
                            </app-tooltip>
                          </v-list-item-avatar>
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          <div class="percent-container">
                            <div
                              class="percent-bar"
                              :style="{width:skill.percent}"
                            >{{skill.percent}}</div>
                          </div>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <!-- End of List Of Skills -->
                </v-card-text>
              </v-tab-item>
              <v-tab-item>
                <v-card-text>
                  <v-skeleton-loader
                    v-for="(sk) in 5"
                    :key="sk"
                    class="mx-auto"
                    max-width="600"
                    type="list-item-avatar-two-line"
                  ></v-skeleton-loader>
                </v-card-text>
              </v-tab-item>
              <v-tab-item>
                <v-card-text>
                  <v-skeleton-loader
                    v-for="(sk) in 5"
                    :key="sk"
                    class="mx-auto"
                    max-width="600"
                    type="list-item-avatar-three-line"
                  ></v-skeleton-loader>
                </v-card-text>
              </v-tab-item>
              <v-tab-item>
                <v-card-text>
                  <v-skeleton-loader
                    v-for="(sk) in 5"
                    :key="sk"
                    class="mx-auto"
                    max-width="600"
                    type="list-item-three-line"
                  ></v-skeleton-loader>
                </v-card-text>
              </v-tab-item>
            </v-tabs-items>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-skeleton-loader
                v-for="(n,index) in 5"
                :key="index"
                class
                type="list-item-three-line"
              ></v-skeleton-loader>
            </v-card-text>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-skeleton-loader
                v-for="(n,index) in 5"
                :key="index"
                class
                type="list-item-three-line"
              ></v-skeleton-loader>
            </v-card-text>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-skeleton-loader
                v-for="(n,index) in 5"
                :key="index"
                class
                type="list-item-avatar-three-line"
              ></v-skeleton-loader>
            </v-card-text>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
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
  data: () => ({
    profiledata: 0,
    skills: 0,
    listskeleton: []
  }),
  methods: {}
};
</script>

<style >
.percent-bar,
.percent-container {
  border-radius: 10px;
  text-align: center;
  height: 20px;
  color: #fff;
}

.percent-bar {
  background-color: #00adef;
  padding: 2px;
}

.percent-container {
  width: 100%;
  border: 1px solid #eee;
}

.borderprofile {
  border: 3px solid #0290d8;
}

.bordered {
  border: 1px dotted #aaa !important;
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
