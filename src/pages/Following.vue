<template>
    <div class="index">
        <AnswerList api="/api/follows"></AnswerList>
    </div>
</template>

<script>
    import AnswerList from '../components/AnswerList'

    export default {
        name: "Following",
        components: {
            AnswerList
        },
        computed: {
            isLogin() {
                return this.$store.state.isLogin;
            }
        },
        mounted() {
            if (!this.isLogin) {
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>
</style>