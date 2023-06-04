<template>
  <div class="header__wrapper">
    <div class="header">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'main-page' }"
            >Главная страница</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'add-food' }"
            >Добавить продукты</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'foodlist' }"
            >Список продуктов за день</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'food-of-day' }"
            >Результаты дня</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderMain',
  data() {
    return {};
  },
  props: {
    title: String,
    subtitle: String,
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.header__wrapper {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
h1 {
  color: teal;
  margin: 0;
}
h2 {
  color: #353945;
  margin: 0;
}
ul {
  display: flex;
}
li {
  margin-right: 15px;
  list-style: none;
}
a {
  color: rgb(53, 113, 116);
  text-decoration: none;
}
</style>
