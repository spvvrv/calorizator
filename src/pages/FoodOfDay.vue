<!--
В таблице сравнение с тем, сколько человек может за сегодня съесть и уже съел (Goal.vue)

-->
<template>
  <HeaderMain
    title="Калоризатор"
    subtitle="Счетчик калорий" />
  <PersonalGoal />
  <h3>Список съеденных продуктов</h3>
  <FoodList />
</template>

<script>
import HeaderMain from '@/components/Header.vue';
import FoodList from '@/components/FoodList.vue';
import PersonalGoal from '@/components/PersonalGoal.vue';

export default {
  name: 'FoodOfDay',
  components: {
    HeaderMain,
    FoodList,
    PersonalGoal,
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

<style scoped></style>
