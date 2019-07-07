<template>
    <Card style="width:50%;height:200px;margin-left:10%">
        <div class="artical" style="text-align:left">
            <h1>{{title}}</h1>
            <p>{{content}}</p>
        </div>
        <div class="bottom">
            <Button :size="buttonSize" icon="md-arrow-dropup" type="primary" @click="agree_num++" style="float:left">
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
        <div v-show="see_com">
            <comment_content></comment_content>
        </div>

    </Card>
</template>

<script>
    import Button from 'iView';
    import Icon from 'iView';
    import Menu from 'iView';
    import Comment_content from "./comment_content";

    export default {
        name: "artical",
        props:['agree_count',
            'comment_count',
            'question_id',
            'question_title',
            'answer_id',
            'answer_author',
            'answer_author_id',
            'answer_content',
            'answer_author_head_sculpture',
            'time',
        ],
        data() {
            return {
                see_com:false,
                is_agree:0,
                title:this.question_title,
                content:this.answer_content,
                agree_num:this.agree_count,
            }
        },
        component: {
            Button,
            Icon,
            Menu,
            comment_content,
        },
        methods: {
            get_init_agree_count() {
                this.axios.get('/api/newest'+this.start+this.end).then((response) => {
                    this.agree_count = response.agree_count;

                })
            },
            get_init_comment_count() {
                this.axios.get('/api/newest').then((response)=>{
                    this.comment_count=response.comment_count;
                })
            },
            seecomment(){
                this.see_com= !this.see_com;
            }
        },
        mounted: function() {

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