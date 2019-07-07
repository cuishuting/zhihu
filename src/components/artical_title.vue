<template>
    <div class="title1">
        <Card style="width:50%;height:60px;margin-left:10%">
            <div style="text-align:left">
                <ul class="ul1">
                    <router-link to="/newest"><li class="title">最新</li></router-link>
                    <router-link to="/hotest"><li class="title">最热</li></router-link>
                </ul>

            </div>
        </Card>
    </div>

</template>

<script>
    export default {
        name: "artical_title"
    }
</script>

<style scoped>
    .title1{
        margin-top: 0px;
    }
    .ul1{

    }
    .title{
        list-style: none;
        float:left;
        font-size:20px;
        padding:5px 30px;
    }
</style>