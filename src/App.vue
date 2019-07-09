<template>
    <div id="app">
        <Header/>
        <div style="height: 100px;"></div>
        <router-view>
        </router-view>
    </div>

</template>

<script>
    import Header from "./components/Header";

    export default {
        name: 'app',
        components: {
            Header,
        },
        beforeCreate() {
            this.axios.get("/api/islogin").then((resp) => {
                let data = resp.data;
                if (data.islogin) {
                    this.$store.commit("login");
                }
            })
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
        background-color: #f6f6f6;
    }

    html {
        margin: 0px;
        min-width: 1100px;
        background-color: #f6f6f6;
        color: #1a1a1a;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
    }
</style>
