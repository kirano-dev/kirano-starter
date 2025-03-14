import {createRouter, createWebHistory} from 'vue-router'
import routes from '~pages'
import {layout} from "@/router/middlewares/layout.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach(layout);

export default router
