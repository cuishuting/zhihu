import Login from "./pages/Login";
import hotest from './pages/hotest';
import Index from './pages/Index';
import Register from './pages/Register'

export default [
    // { path: '/foo', component: Foo },
    // { path: '/bar', component: Bar }
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/index',
        component: Index
    },
]