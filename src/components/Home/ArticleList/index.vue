<template>
    <div class="article-wrapper mt30 fll">
      <router-link :to="{name: 'readarticle', query: {id: item._id}}" class="wrap" v-for="(item, index) in articleList" :key="index">
        <!--文章信息部分 start-->
        <div class="article-msg clearfix">
          <div class="avatar-wrap fll">
            <img :src="item.authorMsg.avatar" alt="头像">
          </div>
          <div class="msg-wrap fll">
            <div class="row1">
              <span class="author" v-text="item.author">耿飞阳</span>
              <span class="divide">|</span>
              <span class="title" v-text="item.title">标题</span>
            </div>
            <div class="row2">
              浏览：<span v-text="item.looknums">3</span>
              回复：<span v-text="item.commontnums">0</span>
              分类：<span v-text="item.tags.name">怀旧</span>
            </div>
          </div>
        </div>
        <!--文章信息部分 end-->

        <!--文章内容部分 start-->
        <div class="article-content">{{item.contentText}}</div>
        <!--文章内容部分 end-->
      </router-link>
    </div>
</template>

<script>
    export default {
      name: 'index',
      data () {
        return {
          articleList : []
        }
      },
      methods: {
          getData() {
            this.$axios.get('/article').then(res => {
              this.articleList = res.data
            })
          }
      },
      computed: {},
      created () {
          this.getData()
      }
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
.wrap {
  margin-top: 10px;
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
