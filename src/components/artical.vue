<template>
    <Card style="width:50%;height:200px;margin-left:10%">
        <div class="artical" style="text-align:left">
            <h1>{{title}}</h1>
            <p>{{content}}</p>
        </div>
        <div class="bottom">
            <Button size="large" icon="md-arrow-dropup" type="primary" @click="agree_num++" style="float:left">
                赞同
            </Button>
            <br>
            <div class="show_count"><input type="text" value="0" size="1" v-model="agree_num"
                                           style="border:transparent;background-color: #2d8cf0;text-align: center;color:white">
            </div>
            <Button type="info" @click="agree_num--" style="float:left;margin-top: -21px;margin-left:40px;">👎
            </Button>

        </div>
        <div class="right_menu">
            <Menu mode="horizontal" theme="light" active-name="1">
                <div class="layout-nav">
                    <MenuItem name="1" >
                        <Icon type="ios-text" size="20"></Icon>
                        <span v-on:click="seecomment()">{{comment_num}}条评论</span>
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-send" size="20"></Icon>
                        分享
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="md-star" size="20"></Icon>
                        收藏
                    </MenuItem>
                </div>
            </Menu>
        </div>

        <div v-if="see_com">
            <Comment_content></Comment_content>
        </div>

    </Card>
</template>

<script>
    import Button from 'iview';
    import Icon from 'iview';
    import Menu from 'iview';
    import Comment_content from "./comment_content";

    export default {
        name: "artical",
        props:[
            'data'
        ],
        data() {
            return {
                see_com:false,
                is_agree:0,
                title:this.data.question_title,
                content:this.data.answer_content,
                agree_num:this.data.agree_count,
                comment_num:this.data.comment_count,
                answer_num:this.data.answer_id,
            }
        },
        component: {
            Button,
            Icon,
            Menu,
            Comment_content,
        },
        methods: {
            seecomment(){
                this.see_com= !this.see_com;
            }
        },
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