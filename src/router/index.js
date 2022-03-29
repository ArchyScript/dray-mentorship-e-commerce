import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/Main.vue'
const Products = () =>
    import ('../components/Products/Main.vue')
const About = () =>
    import ('../components/About/Main.vue')

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
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