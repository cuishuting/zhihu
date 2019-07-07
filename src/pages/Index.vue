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
        <template v-if="selected==1">
            <Newest/>
        </template>
        <template v-else>
            <Hottest/>
        </template>
    </div>
</template>

<script>
    import Hottest from "./Hottest";
    import Newest from "./Newest"

    export default {
        name: "Index",
        data() {
            return {
                selected: 1,
            }
        },
        components: {
            Hottest,
            Newest
        },
        methods: {
            select(value) {
                this.selected = value;
            }
        }
    }
</script>

<style scoped>
    .index_header {
        width: 100%;
    }

    .index {
        margin-top: 100px;
        width: 60%;
        margin-left: 10%;
        border: 1px solid lightgray;
        box-shadow: 1px 1px 1px lightgray;
    }
</style>