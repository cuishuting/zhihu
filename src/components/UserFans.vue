<template>
    <FollowerList api="/api/get_followers"/>
</template>

<script>
    import FollowerList from "../components/FollowerList"
    export default {
        name: "UserFans",
        components:{
            FollowerList
        }
    }
</script>

<style scoped>

</style>