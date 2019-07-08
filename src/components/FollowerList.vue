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
        props:[
            'user_id',
        ],
        data(){
          return {
              data:[],
              success:false,
              error:'',
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
                let data2={
                    username:'cuishuting',
                    head_sculpture:'https://i.loli.net/2017/08/21/599a521472424.jpg',
                    intro:'这里是个人简介的部分啊啊啊啊',
                    answer_count:10,
                    followers_count:30,
                    isFollow:false,
                };
                this.data.push(data1);
                this.data.push(data2);
            },
            get_followers_info(){
                this.axios.get('/api/get_followees'+ '?user_id='+this.user_id).then((response)=>{
                    this.success=response.data.success;
                    if(!this.success){
                        this.$Message.error(response.data.error);
                    }
                    else {
                        this.data=response.data.data;
                    }
                })
            }
        },
        mounted:function(){
            this.fakeData();
        }

    }
</script>

<style scoped>

</style>