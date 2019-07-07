<template>
    <div>
        <div v-if="!success">
            <img src="../img/没有内容的哭脸表情.png" style="background-color: white">
            <p style="font-size: 30px">已没有更多内容</p>
        </div>
        <div v-else>
            <ul>
                <li v-for="(item,key) in data " :key="key">
                    <artical :data="item" ></artical>
                </li>
            </ul>
        </div>


    </div>
</template>
<script>
    import artical from '../components/artical.vue';
    export default {
        name: "newest",
        data(){
          return{
              data:[],
              start:0,
              end:20,
              success:false,
              error:'',
              hasMore:false,
            }
        },
        components : {
            artical,
        },
        methods:{
            get_articals(start,end){
                this.axios.get(' /api/newest '+ start + end).then((response)=>{
                    this.data=response.data;
                    this.success=response.success;
                    if(!this.success){
                        this.error=response.error;
                    }
                    else {

                    }
                    this.hasMore=response.hasMore;
                    this.data=response.data;
                })
            }
        },
        mounted:function() {
            this.get_articals(this.start,this.end);
        }
    }
</script>

<style scoped>

</style>