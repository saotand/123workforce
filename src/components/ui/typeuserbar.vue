<template>
  <div class="barcolor">
    <v-row justify="space-around">
      <v-tabs
        centered
        fixed-tabs
        show-arrows
        background-color="#f1f8fc"
        v-model="tabs"
        color="#f1f8fc"
      >
        <v-tab v-for="(i,index) in items" :key="i.name">
          <v-sheet
            style="width:100%; line-height: 50px; color:#fff; border-radius:5px"
            height="50"
            v-if="tabs==index"
            class="ntext"
            color="#0290d8"
          >{{i.name}}</v-sheet>
          <span class="ntext" v-else>{{i.name}}</span>
        </v-tab>
      </v-tabs>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Object,
      required: false,
      default: () => ({
        "0": {
          name: "Virtual Assistant",
          active: false,
          visible: true
        },
        "1": {
          name: "UI Designer",
          active: false,
          visible: true
        },
        "2": {
          name: "Animator",
          active: false,
          visible: true
        },
        "3": {
          name: "Web Developer",
          active: true,
          visible: true
        },
        "4": {
          name: "Copywriter",
          active: false,
          visible: true
        },
        "5": {
          name: "Bookkeeper",
          active: false,
          visible: true
        },
        "6": {
          name: "Full Stack Developer",
          active: false,
          visible: true
        }
      })
    }
  },
  data: () => ({
    tabs: 3
  }),
  methods: {
    activatebtn(index) {
      /* eslint-disable */
      console.log(index);
    }
  }
};
</script>

<style>
.v-tabs-slider {
  height: 100px !important;
}

.barcolor {
  margin-top: 40px;
  background-color: #f1f8fc;
  box-shadow: 0 8px 7px rgba(0, 0, 0, 0.16);
  min-height: 100px;
  padding: 24px 0px;
}

.ntext {
  text-transform: capitalize;
}
</style>