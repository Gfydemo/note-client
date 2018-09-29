<template>
    <router-link to="#" class="article-wrapper mt30 fll">
      <div v-show="$store.state.userinfo">
        <!--文章信息部分 start-->
        <div class="article-msg clearfix">
          <div class="avatar-wrap fll">
            <img src="http://pbl.yaojunrong.com/avatar1.jpg" alt="">
          </div>
          <div class="msg-wrap fll">
            <div class="row1">
              <span class="author">耿飞阳</span>
              <span class="divide">|</span>
              <span class="title">标题</span>
            </div>
            <div class="row2">
              浏览：<span>3</span>
              回复：<span>0</span>
              分类：<span>怀旧</span>
            </div>
          </div>
        </div>
        <!--文章信息部分 end-->

        <!--文章内容部分 start-->
        <div class="article-content">今天天气真好...</div>
        <!--文章内容部分 end-->
      </div>
    </router-link>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: 'index',
      data () {
        return {}
      },
      computed: {}
    }
</script>

<style scoped lang="scss">
.article-wrapper {
  padding: 20px;
  box-sizing: border-box;
  width: 750px;
  background: #fff;
  border-radius: 4px;
}
  .article-msg {
    .avatar-wrap {
      width: 80px;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .msg-wrap {
      margin-left: 10px;
      padding: 5px 0;
    }
  }
  .msg-wrap .row1 {
    font-size: 16px;
    font-weight: 600;
    line-height: 2;
    .divide {
      font-size: 20px;
      font-weight: 200;
    }
    .author {
      color: #409eff;
    }
  }
  .msg-wrap .row2{
    line-height: 1.5;
    font-size: 14px;
    span {
      margin-right: 15px;
    }
  }
  .article-content {
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
  }
</style>
