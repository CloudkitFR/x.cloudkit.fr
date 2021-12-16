import { createApp }                        from "vue";
import { createRouter, createWebHistory }   from "vue-router";


//////////////////////////////////////////////////
//  PAGES
//////////////////////////////////////////////////


import App          from "./pages/app";
import Home         from "./pages/home";
import Environment  from "./pages/environment";


//////////////////////////////////////////////////
//  ROUTES
//////////////////////////////////////////////////


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/"         , component: Home },
        { path: "/e/add"    , component: Home },
        { path: "/e/:env"   , component: Environment },
    ]
});


//////////////////////////////////////////////////
//  MAIN
//////////////////////////////////////////////////


const app = createApp(App).use(router);

router.isReady().then(() => {
    app.mount("body");
});
