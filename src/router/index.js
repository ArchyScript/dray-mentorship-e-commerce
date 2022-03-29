import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/Main.vue'
const Products = () =>
    import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router