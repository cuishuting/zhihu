<template>
    <div class = "index">
        <div class="title1">
            <Menu mode="horizontal" theme="light" active-name="1" width="auto" @on-select="select">
                <MenuItem name="1">
                    最新
                </MenuItem>
                <MenuItem name="2">
                    最热
                </MenuItem>
            </Menu>
        </div>
        <template v-if="selected">
            <newest/>
        </template>
        <template v-else>
            <hostest/>
        </template>
    </div>
</template>

<script>
    import hostest from "./hotest";
    import newest from "./newest"
    export default {
        name: "Index",
        data(){
            return {
                selected: 1,
            }
        },
        components: {
            hostest,
            newest
        },
        methods:{
            select(value){
                this.selected = value;
            }
        }
    }
</script>

<style scoped>
 .title1{
     width: 500px;
     margin-left:100px;
 }
</style>