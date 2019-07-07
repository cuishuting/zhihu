<template>
    <Card style="width:50%;height:200px;margin-left:10%">
        <div class="comment" style="text-align:left">
            <Avatar shape="square" src="comment_author_head_sculpture" size="small" />
            <p>content</p>
        </div>
        <div class="bottom">
            <Button :size="buttonSize" icon="md-arrow-dropup" type="primary" @click="agree_count++" style="float:left">
                赞同
            </Button>
            <br>
            <div class="show_count"><input type="text" value="0" size="1" v-model="agree_count"
                                           style="border:transparent;background-color: #2d8cf0;text-align: center;color:white">
            </div>
            <Button type="info" @click="agree_count--" style="float:left;margin-top: -21px;margin-left:40px;">👎
            </Button>

        </div>
        <div class="right_menu">
            <Menu mode="horizontal" theme="light" active-name="1">
                <div class="layout-nav">
                    <MenuItem name="1" >
                        <Icon type="ios-text" size="20"></Icon>
                        <span v-on:click="seecomment()">{{comment_count}}条评论</span>
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-send" size="20"></Icon>
                        查看回复
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="md-star" size="20"></Icon>
                        收藏
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="md-star" size="20"></Icon>
                        收藏
                    </MenuItem>
                    <MenuItem name="5">
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
    export default {
        name: "comment_content",
        data() {
            return  {
                comment_author_head_sculpture:'',
            }
        },
        props:[' comment_author_id'],
        mounted: function(){
            this.axios.post()
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