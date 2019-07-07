<template>
    <div>
        <ul>
            <li v-for="(item,key) in data">
                <artical :data></artical>
            </li>
        </ul>

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