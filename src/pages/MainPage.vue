<template>
  <HeaderMain
    title="Калоризатор"
    subtitle="Счетчик калорий" />
  <PersonalGoal />
  <ResultsToday />
</template>

<script>
import HeaderMain from '@/components/Header.vue';
import PersonalGoal from '@/components/PersonalGoal.vue';
import ResultsToday from '@/components/ResultsToday.vue';

export default {
  name: 'MainPage',
  components: {
    HeaderMain,
    PersonalGoal,
    ResultsToday,
  },
  data() {
    return {
      date: [],
    };
  },
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style></style>
