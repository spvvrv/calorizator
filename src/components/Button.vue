<template>
  <button>{{ btn_text }}</button>
</template>

<script>
export default {
  name: 'ButtonCommon',
  data() {
    return {};
  },
  props: {
    btn_text: String,
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
button {
  display: inline-block;
  height: 20px;
}
</style>
