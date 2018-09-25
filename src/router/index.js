import Vue from 'vue';
import Router from 'vue-router';
import indexP from '@/pages/index';
import todoList from '@/pages/todoList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexP
    },
    {
      path: '/allList',
      name: 'todoList',
      component: todoList
    }
  ]
});
