import { createWebHistory, createRouter } from "vue-router";

// importa componenti
import HomePage from '../pages/HomePage.vue'
import BlogPage from '../pages/BlogPage.vue'
import DetailPage from '../pages/DetailPage.vue'

const router = createRouter({
    // aggiungi history
    history: createWebHistory(),

    // aggiungi rotte
    routes: [
        {
            name: 'homepage',
            path: '/',
            component: HomePage
        },
        {
            name: 'blog',
            path: '/blog',
            component: BlogPage
        },
        {
            name: 'detail',
            path: '/detail/:id',
            component: DetailPage
        }
    ]
});

export { router };
