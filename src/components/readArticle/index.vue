<template>
  <div class="detail-wrap">
    <!--作者信息 start-->
    <div class="aurhor-msg clearfix">
      <div class="img-wrap fll">
        <img :src="acticleData.authorMsg.avatar" alt="头像">
      </div>
      <div class="aurthor fll">
        <div><span class="name">{{acticleData.authorMsg.username}}</span></div>
        <div class="time"><span>{{acticleData.createdTime}}</span><span>阅读：{{acticleData.looknums}}</span></div>
      </div>
    </div>
    <!--作者信息 end-->

    <!--文章内容 start-->
    <div class="content mt30">
      <span class="title">{{acticleData.title}}</span>
      <div class="contentText"  v-html="acticleData.content"></div>
    </div>
    <!--文章内容 end-->

    <!--评论区 start-->
    <div class="comment clearfix">
      <span class="comment-title">评论</span>
      <div class="comment-user clearfix">
        <img class="fll" :src="userinfo.avatar" alt="评论头像">
        <div class="fll" style="width: 810px; margin-left: 20px;"><el-input placeholder="请输入"></el-input></div>
        <el-button type="primary" size="mini">发布</el-button>
      </div>
    </div>
    <!--评论区 end-->

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'index',
    data () {
      return {
        id: '',
        acticleData: {
          author: '',
          authorMsg: {
            avatar: '',
            username: ''
          }
        }
      }
    },
    methods: {
      async getData() {
        this.id = this.$route.query.id
        this.$axios.get(`/article/${this.id}`).then(res => {
          this.acticleData = res.data
          let createdTime = this.changeTime(res.data.createdTime)
          this.acticleData = {...this.acticleData, createdTime}
        })
      },
      changeTime(ISOtime) {
        let time = ISOtime.split('T')[0]
        let times = time.split('-')
        let timeStr = `${times[0]}年${times[2]}月${times[2]}日`
        return timeStr
      }
    },
    computed: {
      ...mapState(['userinfo'])
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
.detail-wrap {
  margin: 100px auto;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 940px;
  border-radius: 6px;
  background: #fff;

  .img-wrap {
    width: 70px;
    height: 70px;

    img{
      width: 70px;
      height: 70px;
    }
  }
  .aurthor {
    padding: 10px;

    .name {
      font-size: 14px;
      font-weight: 600;
      line-height: 2;
    }
    .time {
      font-size: 12px;
      color: #888;
      line-height: 2;
    }
    .time span {
      margin-right: 10px;
    }
  }
  .content {

    .title {
      display: block;
      font-size: 24px;
      font-weight: 700;
      font-family: Georgia, serif;;
      padding: 5px;
      border-bottom: 1px solid #ccc;
    }

    .contentText {
      padding: 5px 20px;
      box-sizing: border-box;
      /deep/ img {
        width: 100%;
      }

    }
  }

  .comment {
    padding-top: 10px;
    border-top: 1px solid #ccc;
    text-align: center;
    color: #888;

    .comment-title {
      display: block;
      margin: 20px auto;
    }

    .comment-user {
      margin-top: 5px;
      padding: 10px;
      box-sizing: border-box;
      background: #fafbfc;
      border-radius: 4px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    /deep/ .el-button {
      float: right;
      margin-top: 10px;
    }

  }
}
</style>
