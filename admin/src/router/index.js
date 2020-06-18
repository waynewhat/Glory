import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import main from '../views/main.vue'
import categoryEdit from '../views/categoryEdit.vue'
import categoryList from '../views/categoryList.vue'
import itemsEdit from '../views/itemsEdit.vue'
import itemsList from '../views/itemsList.vue'
import herosEdit from '../views/herosEdit.vue'
import herosList from '../views/herosList.vue'
import articlesList from '../views/articlesList.vue'
import articlesEdit from '../views/articlesEdit.vue'






Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
    children:[
      {path:'/categories/create',component:categoryEdit},
      {path:'/categories/edit/:id',component:categoryEdit,props:true},
      {path:'/categories/list',component:categoryList},

      {path:'/items/create',component:itemsEdit},
      {path:'/items/edit/:id',component:itemsEdit,props:true},
      {path:'/items/list',component:itemsList},

      {path:'/heros/create',component:herosEdit},
      {path:'/heros/edit/:id',component:herosEdit,props:true},
      {path:'/heros/list',component:herosList},

      {path:'/articles/create',component:articlesEdit},
      {path:'/articles/edit/:id',component:articlesEdit,props:true},
      {path:'/articles/list',component:articlesList}
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
