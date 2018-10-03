<template>
    <div class="w1170 mt100 personal">
      <div class="clearfix">
        <div class="avatar-wrap fll">
          <img :src="userinfo.avatar">
        </div>
        <h3 class="fll">个人主页</h3>
      </div>
      <div class="articleList">
          <div class="articleitem" v-for="(item, index) in articleList" :key="index">
            <div>{{item.title}}</div>
          </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  data () {
      return {
        articleList: []
      }
  },
  methods: {
    getData() {
      this.$axios.get('/personarticle').then(res => {
        if (res.code == 403) {
          this.$message.warning(res.msg)
          setTimeout(() => {
            this.$router.push('/')
          }, 500)
        } else {
          this.articleList = res.data
          console.log(this.articleList)
        }
      })
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
.personal {
  background: #fff;
  border-radius: 6px;
  padding: 20px;
}
  .avatar-wrap {
    margin-right: 10px;
    width: 80px;
    height: 80px;

    img {
      width: 80px;
      height: 80px;
    }
  }
  .articleList {
    border-top: 1px solid #ccc;

    .articleitem {
      margin: 5px;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
    }
  }
</style>
