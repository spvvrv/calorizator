<!--
  Результат съеденного за сегодня
Должна быть таблица:
- сколько съедено
- сколько осталось
- сколько белков
- сколько жиров
- сколько углеводов
-->

<template>
  <div class="resultsToday__wrapper">
    <h3>Результат за сегодня</h3>
    <div class="resultsToday__card">
      <div v-if="calories_result === null">
        <p>Вы еще ничего не съели.</p>
        <ButtonCommon btn_text="Добавить продукты" />
      </div>
      <div v-if="calories_result && calories_result < calories_goal">
        <p>Съедено за сегодня: {{ calories_result }} ккал</p>
        <p class="normal">Осталось {{ countLeft() }} ккал. Так держать!</p>
      </div>
      <div v-if="calories_result && calories_result > calories_goal">
        <p>Съедено за сегодня: {{ calories_result }} ккал</p>
        <p class="danger">Вы превысили норму калорий! Хватит жрать!</p>
      </div>
      <div v-if="calories_result !== null">
        <p>Белки: {{ protein ? protein : '-' }}</p>
        <p>Жиры: {{ fats ? fats : '-' }}</p>
        <p>Углеводы: {{ carbohydrates ? carbohydrates : '-' }}</p>
        <ButtonCommon
          v-if="calories_result"
          btn_text="Посмотреть список продуктов" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCommon from '@/components/Button.vue';

export default {
  name: 'ResultsToday',
  components: {
    ButtonCommon,
  },
  data() {
    return {
      calories_result: 4,
      calories_goal: 344,
      protein: 4,
      fats: 4,
      carbohydrates: 5,
    };
  },
  props: {
    prop: String,
  },
  created() {},
  methods: {
    countLeft() {
      return this.calories_goal - this.calories_result;
    },
  },
};
</script>

<style scoped>
.resultsToday__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.resultsToday__card {
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  align-items: start;
  text-align: left;
  border-radius: 5px;
  background-color: rgb(249, 250, 251);
}
.normal {
  color: rgb(94, 143, 21);
}
.danger {
  color: red;
}
</style>
