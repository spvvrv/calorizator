<template>
  <MainPage />
  <AddFood />
  <FoodOfDay />
</template>

<script>
import MainPage from './pages/MainPage.vue';
import AddFood from './pages/AddFood.vue';
import FoodOfDay from './pages/FoodOfDay.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    AddFood,
    FoodOfDay,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
}
</style>
