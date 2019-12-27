<template>
  <div class="barcolor">
    <v-container>
      <v-tabs
        style="margin:0px !important; pading:0px !important; border:1px solid blue; height:70px;"
        show-arrows
        v-model="tabs"
        background-color="#f1f8fc"
        grow
      >
        <v-tab
          style="border:1px solid red;margin:0px !important; padding:0px !important; height:60px;"
          class="ntext bfont"
          :ripple="false"
          v-for="item in items"
          :key="item.name"
        >
          <div
            style="margin:0px !important; padding:0px !important; height:50px; border:1px solid #000"
          >{{ item.name }}</div>
        </v-tab>
      </v-tabs>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        {
          name: "Virtual Assistant",
          active: false,
          visible: true
        },
        {
          name: "UI Designer",
          active: false,
          visible: true
        },
        {
          name: "Animator",
          active: false,
          visible: true
        },
        {
          name: "Web Developer",
          active: true,
          visible: true
        },
        {
          name: "Copywriter",
          active: false,
          visible: true
        },
        {
          name: "Bookkeeper",
          active: false,
          visible: true
        },
        {
          name: "Full Stack Developer",
          active: false,
          visible: true
        }
      ]
    }
  },
  data: () => ({
    tabs: 3
  }),
  computed: {
    allitems() {
      return this.items.length;
    }
  },
  methods: {
    activatebtn(index) {
      /* eslint-disable */
      console.log(index);
    },
    setTab(index) {
      this.tabs = index;
    }
  }
};
</script>

<style >
.barcolor {
  margin-top: 40px;
  background-color: #f1f8fc;
  box-shadow: 0 8px 7px rgba(0, 0, 0, 0.16);
  min-height: 100px;
  padding: 24px 0px;
}

.bfont {
  font-size: 27px;
}
</style>