import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactUsPage from '@/pages/ContactUsPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import CategoriesPage from '@/pages/CategoriesPage.vue'
import MemberPage from '@/pages/MemberPage.vue'
import MemberDetailPage from '@/pages/MemberDetailPage.vue'
import ProductDetailPage from '@/pages/ProductPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUsPage
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductPage
    },
    {
      path: '/categories',
      name: 'Categories',
      component: CategoriesPage
    },
    {
      path: '/members',
      name: 'Members',
      component: MemberPage
    },
    {
      path: '/members/{id}',
      name: 'DetailMembers',
      component: MemberDetailPage
    },
    {
      path: 'products/{id}',
      name: 'ProductDetail',
      component: ProductDetailPage
    }
  ],
  mode: 'history'
})
