<template>
    <div class="index">
        <div class="index_header">
            <Menu mode="horizontal" theme="light" active-name="1" width="auto" @on-select="select">
                <MenuItem name="1">
                    最新
                </MenuItem>
                <MenuItem name="2">
                    最热
                </MenuItem>
            </Menu>
        </div>
        <keep-alive>
            <router-view>
            </router-view>
        </keep-alive>
    </div>
</template>

<script>

    export default {
        name: "Index",
        data() {
            return {
                selected: '1',
            }
        },
        methods: {
            select(value) {
                this.selected = value;
                if(this.selected === "1"){
                    this.$router.push("/index/newest")
                }else {
                    this.$router.push("/index/hottest")
                }
            }
        }
    }
</script>

<style>
    .index_header {
        width: 100%;
        z-index: -1;
    }

    .index {
        width: 43%;
        margin-left: 17.5%;
        border: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
        border-radius: 4px;
        min-width: 700px;
    }

</style>