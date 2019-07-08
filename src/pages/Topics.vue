<template>
    <div class="topic">
        <span v-for="(item,key) in data" :key="key" class="topic_row"><TopicItem :data="item"></TopicItem><Divider/></span>
    </div>
</template>

<script>
    import TopicItem from '../components/TopicItem'

    export default {
        name: "Topics",
        components: {
            TopicItem,
        },
        data(){
          return {
              data:[],
          }
        },
        methods:{
            fakeData(){
                let data1={
                    topic_name: 'bts',
                    description:'cst&btsbtsbtsbtsbtsbtsbts',
                    topic_pic: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                };
                let data2={
                    topic_name: 'bts',
                    description:'cst&btsbtsbtsbtsbtsbtsbts',
                    topic_pic: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                };
                let data3={
                    topic_name: 'bts',
                    description:'cst&btsbtsbtsbtsbtsbtsbts',
                    topic_pic: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                };
                let data4={
                    topic_name: 'bts',
                    description:'cst&btsbtsbtsbtsbtsbtsbts',
                    topic_pic: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                };
                this.data.push(data1);
                this.data.push(data2);
                this.data.push(data3);
                this.data.push(data4);
            },
        },
        mounted:function(){
          this.fakeData();
        },
    }
</script>

<style scoped>
    .topic {
        /*margin-top: 100px;*/
        /*width: 60%;*/
        /*margin-left: 10%;*/
        /*border: 1px solid lightgray;*/
        /*box-shadow: 1px 1px 1px lightgray;*/
        /*border-radius: 4px;*/
        width:90%;
        height:30%;
        margin-left:5%;
        margin-right:5%;
        padding:5px;
    }
    .topic_row{
        float:left;
        width:50%;
    }
</style>