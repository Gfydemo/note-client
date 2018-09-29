<template>
  <div class="detail-wrap">
    <!--作者信息 start-->
    <div class="aurhor-msg clearFix">

    </div>
    <!--作者信息 end-->

    <!--文章内容 start-->
    <div class="content"></div>
    <!--文章内容 end-->

    <!--评论区 start-->
    <div></div>
    <!--评论区 end-->

  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        id: '',
        acticleData: {}
      }
    },
    methods: {
      getData() {
        this.$axios.get(`/article/${this.id}`).then(res => {
          this.acticleData = res.data
        })
        this.$axios.put(`/looknum/${this.id}`)
      }
    },
    created () {
      this.id = this.$route.query.id
      this.getData()
    }
  }
</script>

<style scoped>
.detail-wrap {
  margin: 100px auto;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 940px;
  height: 200px;
  border-radius: 6px;
  background: #fff;
}
</style>
