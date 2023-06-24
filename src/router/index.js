import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from "../views/Detail.vue"
import Create from "../views/Create.vue"
import Tag from "../views/Tag.vue"
import Realtime from "../views/Realtime"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path:'/posts/:id',
    name:'Detail',
    component: Detail,
    props : true
  },
  {
    path:'/create',
    name:'Create',
    component: Create
  }
  ,{
    path:'/tags/:tag',
    name:'Tag',
    component: Tag,
    props:true
  },
  {
    path:'/realtime',
    name:'realtime',
    component: Realtime
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
