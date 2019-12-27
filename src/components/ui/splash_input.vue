<template>
  <span>
    <!--<input :type="type" :id="idname" />-->
    <div class="boundinput">
      <div class="preinput">123workforce.com/</div>
      <div class="bodyinput">
        <input
          :id="id"
          :type="type"
          :placeholder="placeholder"
          class="inputself"
          :value="value"
          @input="getValue"
          :size="size"
        />
      </div>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: ""
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    id: {
      type: String,
      required: false,
      default: ""
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    size: {
      required: false,
      type: String,
      default: ""
    }
  },
  data: () => ({
    dirty: false,
    error: []
  }),
  computed: {
    idname() {
      return this.id ? this.id : "";
    }
  },
  methods: {
    getValue(e) {
      let tvalue = this.value;
      tvalue = e.srcElement.value;
      this.$emit("input", tvalue);
      this.dirty = true;
    }
  }
};
</script>

<style>
.boundinput {
  border: 1px solid #f3f4f5;
  display: inline-flex;
  margin: 0px;
  padding: 0px;
  border-radius: 9.5px;
  overflow: hidden;
  height: 100px;
  margin-bottom: 20px;
  max-width: 680px;
  background-color: #f2f9fd;
  font-size: 30px;
}

.preinput {
  margin: 0px !important;
  padding: 28px !important;
  border-right: 2px solid #d2eaf8;
}

.boundinput > div {
  margin: 0px;
  padding: 30px;
}

.inputself {
  border: 0px;
  width: 100%;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}
</style>