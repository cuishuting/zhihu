<template>
    <Card  class="follower">
        <div style="text-align:left">
            <img :src="head_sculpture" class="head" @click="jumpToUser">
            <div class="info">
                <p style="font-weight: bold;font-size:20px">{{username}}</p>
                <p style="font-size: 15px">{{intro}}</p>
                <p style="color:gray;font-size:14px">{{answer_count}}回答•{{followers_count}}关注者</p>
            </div>
            <Button :size="large" icon="md-add" type="primary" @click="Follow" class="button"><span v-if="!isFollow">关注他</span><span v-if="isFollow">取消关注</span></Button>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "Followers",
        props:['data'],
        data() {
            return{
                username:this.data.username,
                userid:this.data.userid,
                head_sculpture:this.data.head_sculpture,
                intro:this.data.intro,
                answer_count:this.data.answer_count,
                followers_count:this.data.followers_count,
                isFollow:this.data.isFollow,
            }
        },
        methods:{
            Follow(){
                if(!this.isFollow) {
                    this.axios.post('/api/follow',{"user_id":this.userid}).then((resp)=>{
                        if(resp.data.success){
                            this.isFollow=!this.isFollow;
                        }
                        else {
                            this.$Message.error(resp.data.error);
                        }
                    }).catch((err) => {
                        // eslint-disable-next-line no-console
                        console.log(err);
                        this.$Message.error("提交失败,请检查网络后再试...");
                    })
                }
                else {
                    this.axios.post('/api/unfollow',{"user_id":this.userid}).then((resp)=>{
                        if(resp.data.success){
                            this.isFollow=!this.isFollow;
                        }
                        else {
                            this.$Message.error(resp.data.error);
                        }
                    }).catch((err)=>{
                        // eslint-disable-next-line no-console
                        console.log(err);
                        this.$Message.error("提交失败,请检查网络后再试...");
                    })
                }

            },
            jumpToUser(){
                this.$router.push('/user/:id');
            }
        },
        mounted:function() {
            this.fakeData();
        }
    }
</script>

<style scoped>
    .head{
        float:left;
        width:90px;
        height:90px;
    }
    .follower{
        width:60%;
        margin-left:10%;
    }
    .button{
        margin-top:-20px;
        margin-left:85%;
    }
    .info{
        line-height: 35px;
        margin-left:15%;
    }
</style>