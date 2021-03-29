<template>
  <v-md-editor v-model="text" height="400px" @save="save"></v-md-editor>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      text: "",
    };
  },
  props: { body: String },
  methods: {
    // 点击保存，把MD编辑器的内容传到父组件
    save(text, html) {
      console.log(text);
      this.$emit("save", text, html);
    },
  },
  computed: {},
  watch: {
    body(val) {
      this.text = val;
    },
  },
};
</script>
