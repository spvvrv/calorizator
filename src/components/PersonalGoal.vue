<!-- Таблица с данными о человеке и его целями
Имя человека
Его вес
Его рост

Сколько нужно жиров
Сколько нужно белков
Сколько нужно углеводов
Сколько нужно калорий
 -->

<template>
  <div class="personalGoal__wrapper">
    <div class="personalGoal__card">
      <figure>
        <img
          width="30"
          height="30"
          src="../assets/user.svg"
          alt="personal_img" />
        <figcaption>{{ name }}</figcaption>
      </figure>
      <div class="personalGoal__info"></div>
      <p>Ваш возраст: {{ years }}</p>
      <p>Ваша цель по калориям: {{ caloriesGoal }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalGoal',
  data() {
    return {
      name: 'Sonya',
      years: '26',
      caloriesGoal: 1600,
    };
  },
  props: {
    prop: String,
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
* {
  margin: 0;
}
.personalGoal__card {
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  align-items: start;
  border-radius: 5px;
  background-color: rgb(249, 250, 251);
}
</style>
