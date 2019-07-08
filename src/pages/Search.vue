<template>
    <div class="index">
        <div class="index-header">
            <Menu mode="horizontal" theme="light" :active-name="pos" width="auto" @on-select="select">
                <MenuItem name="1">
                    回答
                </MenuItem>
                <MenuItem name="2">
                    用户
                </MenuItem>
            </Menu>
        </div>
        <router-view>
        </router-view>
    </div>
</template>

<script>

    export default {
        name: "Search",
        data() {
            return {
                selected: 1,
            }
        },
        computed: {
            pos() {
                let path = this.$route.path.split("/");
                if (path[path.length - 1] === "answers")
                    return "1";
                else if (path[path.length - 1] === "users")
                    return "2";
                else return ""
            },
            text() {
                return this.$route.params.str
            }
        },
        methods: {
            select(value) {
                this.selected = value;
                if (this.selected === "1") {
                    this.$router.push("/search/" + this.text + "/answers")
                } else {
                    this.$router.push("/search/" + this.text + "/users")
                }
            }
        }
    }
</script>

<style scoped>

</style>