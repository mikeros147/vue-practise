import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from '../components/goods/goods';
import seller from '../components/seller/seller';
import ratings from '../components/ratings/ratings';
Vue.use(VueRouter);
Vue.use(VueResource);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
});

