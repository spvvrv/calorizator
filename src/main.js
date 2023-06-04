import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddFood from './pages/AddFood.vue'
import MainPage from './pages/MainPage.vue'
import FoodOfDay from './pages/FoodOfDay.vue'
const router = createRouter({
  routes: [
    {
      path: '/MainPage',
      component: MainPage,
      name: 'main-page',
    },
    {
      path: '/AddFood',
      component: AddFood,
      name: 'add-food'
    },
    {
      path: '/FoodList',
      component: FoodOfDay,
      name: 'foodlist'
    },
    {
      path: '/FoodOfDay',
      component: FoodOfDay,
      name: 'food-of-day'
    }
  ],
  history: createWebHistory()
})


const app = createApp(App)
app.use(router)
app.mount('#app')
