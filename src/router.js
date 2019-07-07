import Login from "./pages/Login";
import Index from './pages/Index';
import User from './pages/User';
import Register from './pages/Register'
import Search from './pages/Search';
import Following from './pages/Following'
export default [
    {
        path: '/',
        component: Index
    },
    {
        path: '/search/:str',
        component: Search
    },
    {
        path: '/following',
        component: Following
    },
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
    {
        path:'/user/:id',
        component:User
    },
]