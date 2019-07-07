<template>
    <ul>
        <li v-for="(item,key) in data" :key="key">
            <Followers :data="item"></Followers>
        </li>
    </ul>
</template>

<script>
    import Followers from './Followers';
    export default {
        name: "FollowerList",
        components:{
            Followers,
        },
        data(){
          return {
              data:[],
          }
        },
        methods:{
            fakeData() {
                let data1={
                    username:'cuishuting',
                    head_sculpture:'https://i.loli.net/2017/08/21/599a521472424.jpg',
                    intro:'这里是个人简介的部分啊啊啊啊',
                    answer_count:10,
                    followers_count:30,
                    isFollow:false,
                };
                this.data.push(data1);

            },
        },
        mounted:function(){
            this.fakeData();
        }

    }
</script>

<style scoped>

</style>