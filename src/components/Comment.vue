<template>
    <Card style="width:50%;height:200px;margin-left:10%">
        <div class="comment" style="text-align:left">
            <Avatar shape="square" src="comment_author_head_sculpture" size="small" style="float:left"/>
            <span>cst</span>
            <br>
            <p>btsbtsbtsbts</p>
        </div>
        <div class="bottom" style="text-align: left">
            <Icon type="ios-redo" />
            <span>回复</span>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "Comment",
        data() {
            return  {
                comment_id:'',
                comment_author_id:'',
                comment_author_name:'',
                content:'',
                refer:'',
                time:0,
                comment_author_head_sculpture:'',
                answer_id:this.answer_num,
            }
        },
        props:[' comment_author_id',
            'answer_num',
        ],
        mounted:function() {
            this.axios.post( '/api/get_comment'+this.answer_id).then((response)=>{
                    this.comment_id=response.data.comment_id;
                    this.comment_author_id=response.data.comment_author_id;
                    this.comment_author_name=response.data.comment_author_name;
                    this.content=response.data.content;
                    this.refer=response.data.refer;
                    this.time=response.data.time;
                    this.comment_author_head_sculpture=response.data.comment_author_head_sculpture;
                    this.comment_author_name=response.data.comment_author_name;
            })
        }
    }
</script>

<style scoped>
    .show_count {
        width: 41px;
        height: 32px;
        float: left;
        border: transparent;
        position: absolute;
        margin-left: 75px;
        margin-top: -21px;
        background-color: #2d8cf0;
    }

    .bottom {
        margin-top: 75px;
    }
    .right_menu {
        float:left;
        width:400px;
        margin-left:10px;
        margin-top:-35px;
    }
    .layout-nav{
        float:left;
        margin-left:0px;
    }
</style>