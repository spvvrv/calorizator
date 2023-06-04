<template>
  <form>
    <label>
      <input
        :type="Text"
        :placeholder="placeholder"
        v-model="currentProduct" />
    </label>
  </form>
</template>

<script>

export default {
  name: 'BaseForm',
  components: {
  },
  data() {
    return {
      currentProduct: '',
    };
  },
  props: {
    placeholder: String,
    type: String,
  },
  methods: {},
};
</script>

<style></style>
