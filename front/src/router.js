import Vue from 'vue';
import Router from 'vue-router';
import NotFound from './components/NotFound';
import HelloPage from './pages/HelloPage';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HelloPage,
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        next('/404');
    } else {
        next();
    }
});

export default router;