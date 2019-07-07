import Login from "./pages/Login";
import hotest from './pages/hotest';
import newest from './pages/newest';
export default [
    // { path: '/foo', component: Foo },
    // { path: '/bar', component: Bar }
    {
        path: '/login',
        component: Login
    },
    {
        path:'/Register',
    },
    {
        path:'/newest',
        component:newest
    },
    {
        path:'/hotest',
        component:hotest
    }
]