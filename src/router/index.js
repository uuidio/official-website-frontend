import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import smart from '../views/smart.vue'
import solution from '../views/solution.vue'
import ad from '../views/ad.vue'
import acooperation from '../views/acooperation.vue'
import about from '../views/about.vue'
import news from '../views/news.vue'
import news_detail from '../views/news_detail.vue'

import m_index from '../m_views/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            // redirect: '/index',
            component: index
        },
        // {
        //     path: '/index',
        //     component: index
        // },
        {
            path: '/smart',
            component: smart
        },
        {
            path: '/solution',
            component: solution
        },
        {
            path: '/ad',
            component: ad
        },
        {
            path: '/acooperation',
            component: acooperation
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/news',
            component: news
        },
        {
            path: '/news_detail',
            component: news_detail
        },
        {
            path: '/m/index',
            component: m_index
        }
    ]
})

export default router
