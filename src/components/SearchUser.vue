<template>
    <FollowerList api="/api/search_user" :pro="'&text=' + text"/>
</template>

<script>
    import FollowerList from "../components/FollowerList"

    export default {
        name: "SearchUser",
        components: {
            FollowerList
        },
        computed: {
            text() {
                return this.$route.params.str;
            }
        },
    }
</script>

<style scoped>

</style>