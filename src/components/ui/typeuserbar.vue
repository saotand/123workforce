<template>
  <div class="barcolor">
    <v-container>
      <template v-for="(tuser,index) in items">
        <span :key="tuser.name" v-if="tuser.visible">
          <div v-if="index != 0" class="itemseparator">|</div>
          <v-btn
            @click="activatebtn(index)"
            class="ntext"
            height="55"
            :dark="tuser.active"
            :color="tuser.active==true?'#0290d8':''"
            :text="!tuser.active"
          >{{tuser.name}}</v-btn>
          <div class="itemlist"></div>
        </span>
      </template>
    </v-container>
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
  data: () => ({}),
  methods: {
    activatebtn(index) {
      /* eslint-disable */
      console.log(index);
    }
  }
};
</script>

<style>
.barcolor {
  margin-top: 10px;
  background-color: #f1f8fc;
  box-shadow: 0 8px 7px rgba(0, 0, 0, 0.16);
  min-height: 140px;
  padding: 28px 0;
}

.itemlist,
.itemseparator {
  display: inline-block;
}

.itemseparator {
  margin-right: 8px;
}

.itemlist {
  margin: 9px;
}

.ntext {
  text-transform: capitalize;
}
</style>