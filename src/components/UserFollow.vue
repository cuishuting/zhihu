<template>
    <FollowerList api="/api/get_followees"/>
</template>

<script>
    import FollowerList from "../components/FollowerList"
    export default {
        name: "UserFollow",
        components:{
            FollowerList
        }
    }
</script>

<style scoped>

</style>