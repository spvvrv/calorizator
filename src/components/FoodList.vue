<!-- Список продуктов + кбжу, которые человек съел за день
возможность удалить что-либо из списка -->

<template>
  <div class="foodList__wrapper">
    <div class="foodList__list">
      <ul>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
export default {
  name: 'FoodList',
  components: {
    ProductCard,
  },
  data() {
    return {};
  },
  props: {
    prop: String,
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
