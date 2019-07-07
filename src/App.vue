<template>
    <div id="app">
        <Header/>
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
        mounted() {
            this.axios.get("/api/islogin").then((resp) => {
                let data = resp.data;
                if (data.islogin){
                    this.$store.login();
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
    }

    html{
        margin: 0px;
        min-width: 1300px;
    }
</style>
