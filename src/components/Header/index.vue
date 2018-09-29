<template>
  <div class="header">
    <div class="title-wrap w1170 clearfix">
      <div class="title fll">
        <router-link to="/">云笔记</router-link>
      </div>
      <div class="flr">
        <el-button @click="toEdit">写笔记</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    methods: {
      toEdit () {
        if (this.$store.state.userinfo) {
          this.$router.push('/editpage')
        } else {
          this.$message.warning('请先登录')
        }
      }
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    padding: 5px 0;
    background: #409eff;
  }
  .title {
    font-size: 32px;
    font-weight: 500;
    a {
      color: #fff;
      line-height: 1;
      text-decoration: none ;
    }

  }
</style>
