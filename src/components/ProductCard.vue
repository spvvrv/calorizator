<template>
  <div class="productCard__wrapper">
    <div class="productCard">
      <div class="productCard__info">
        <p>Название продукта: {{ foodName }}</p>
        <p>Калории: {{ calories }}</p>
        <p>Белки: {{ protein }}</p>
        <p>Жиры: {{ fats }}</p>
        <p>Углеводы: {{ carbohydrates }}</p>
        <ButtonCommon btn_text="+" />
      </div>
      <div>
        <BaseForm
          placeholder="100 гр"
          type="text" />
        <ButtonCommon btn_text="Пересчитать" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCommon from '@/components/Button.vue';
import BaseForm from '@/components/Form.vue';

export default {
  name: 'ProductCard',
  components: {
    ButtonCommon,
    BaseForm,
  },
  data() {
    return {
      count: 100,
    };
  },
  props: {
    foodName: String,
    calories: Number,
    protein: Number,
    fats: Number,
    carbohydrates: Number,
  },
  created() {},
  methods: {
    calculateData() {
      return this.calories * this.count;
    },
  },
};
</script>

<style scoped>
.productCard__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.productCard {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  padding: 20px;
  text-align: left;
  border-radius: 5px;
  background-color: rgb(249, 250, 251);
}
.productCard__info {
  display: flex;
  flex-direction: column;
}
</style>
