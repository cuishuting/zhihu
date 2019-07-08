<template>
    <div class="following">
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
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .following {
        width: 60%;
        margin-left: 10%;
        border: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        border-radius: 4px;
    }
</style>