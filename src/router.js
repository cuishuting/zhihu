import Login from "./pages/Login";
import Index from './pages/Index';
import User from './pages/User';
import Register from './pages/Register'
import Search from './pages/Search';
import Following from './pages/Following';
import FollowersList from './pages/FollowersList';
import Topics from './pages/Topics';
import DetailedTopic from "@/pages/DetailedTopic";
import Example from "./pages/Example";
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
    {
        path:'/followers_list',
        component:FollowersList
    },
    {
        path:'/topic',
        component:Topics
    },
    {
        path:'/detailed_topic/:topic_id',
        component:DetailedTopic
    },
    {
        path:'/example',
        component:Example,
    }

]