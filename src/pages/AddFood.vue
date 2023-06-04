<!-- Форма с инпутом, в которую вводят название еды таблица с тем, сколько калорий в
еде если человек ввел в инпут - появляется окошко с едой или с ошибкой -->
<template>
  <div>
    <HeaderMain
      title="Калоризатор"
      subtitle="Счетчик калорий" />
      <BaseForm
        placeholder="Что вы ищете?"
        type="text" />
        <ProductCard/>
  </div>
</template>

<script>
import HeaderMain from '@/components/Header.vue';
import BaseForm from '@/components/Form.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'AddFood',
  components: {
    BaseForm,
    HeaderMain,
    ProductCard
  },
  data() {
    return {};
  },
  props: {
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
