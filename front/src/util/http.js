import Routing from "@/../../public/bundles/fosjsrouting/js/router.min";
import router from '@/router';

const routes = require('@/../../public/js/fos_js_routes.json');

Routing.setRoutingData(routes);

export const apiPath = (route, params = {}) => Routing.generate(route, params);

export const frontPath = (route, params = {}) => router.resolve({name: route, params}).href;

export default {apiPath, frontPath};