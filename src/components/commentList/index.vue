<template>
    <div class="comment-wrap">
        <div class="comment" v-for="(item, index) in commentList" :key="index">
          <div class="author-wrap">
            <div style="display: flex; align-items: center">
              <img class="avatar" :src="item.authorMsg.avatar">
              <span class="name">{{item.authorMsg.username}}</span>
            </div>
            <div>
              <span>{{item.createdTime}}</span>
            </div>
          </div>
          <div class="content">
            {{item.content}}
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'index',
      props: {
        articleId : String,
        refresh : Boolean
      },
      data () {
        return {
          commentList: []
        }
      },
      methods: {
        getData() {
          this.$axios.get('/comment', {
            id: this.articleId
          }).then(res => {
            this.commentList = res.data
            this.commentList.map(item => {
              item.createdTime = this.$axios.changeTime(item.createdTime)
            })
          })
        }
      },
      watch: {
        refresh (val) {
          this.getData()
        }
      },
      created () {
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .comment-wrap {
    margin-top: 10px;
    padding: 5px;
    background: #fafbfc;
    .comment {
      margin-top: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid #f0f0f0;
    }
  }
.author-wrap {
  display: flex;
  justify-content: space-between;
  padding:0 10px;
  font-size: 12px;
  color: #666;

  .avatar {
    margin-right: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
  .content {
    margin-top: 5px;
    margin-left: 50px;
  }
</style>
