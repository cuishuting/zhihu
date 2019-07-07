<template>
    <div id="app">
        <!--    <img alt="Vue logo" src="./assets/logo.png"><HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--        <Register/>-->
        <!--      <Login/>-->
        <!--      <Modifypassword/>-->
<!--        <getself_info/>-->
        <topguide/>
        <br/>
        <br/>
        <artical_title/>
<!--        <newest/>-->
       <router-view>
       </router-view>
    </div>

</template>

<script>
    import Register from './pages/Register.vue';
    import Login from './pages/Login.vue';
    import Modifypassword from './pages/Modifypassword.vue';
    import getself_info from "./pages/getself_info";
    import topguide from "@/components/topguide";
    import newest from "./pages/newest";
    import artical_title from '@/components/artical_title';
    import hotest from "./pages/hotest";
    import artical from '@/components/artical';
    import comment_content from '@/components/comment_content';
    export default {
        name: 'app',
        components: {
            topguide,
            getself_info,
            Register,
            Login,
            Modifypassword,
            newest,
            artical_title,
            hotest,
            artical,
            comment_content,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
