<template>
    <div class="content w1170 clearfix">
        <div class="img-wrap fll">
          <div class="img-text">想你所想，记你所记</div>
        </div>
        <div class="login-box flr">
          <LoginBox></LoginBox>
        </div>
      <ArticleList></ArticleList>
    </div>
</template>

<script>
  import LoginBox from './LoginBox'
  import ArticleList from './ArticleList'
    export default {
        name: 'index',
      components: {
          LoginBox,
          ArticleList
      }
    }
</script>

<style scoped lang="scss">
  .content {
    margin-top: 100px;
  }
.img-wrap {
  position: relative;
  background-image: url("../../../static/img/banner.jpg");
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  width: 750px;
  height: 340px;
  border-radius: 6px;
  overflow: hidden;

  .img-text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 30px;
    font-size: 20px;
    color: #dad6c7;
    background: rgba(0, 0, 0, .5);
  }
}
</style>
