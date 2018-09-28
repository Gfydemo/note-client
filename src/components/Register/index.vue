<template>
    <div class="register-wrap">
      <h1>新用户注册</h1>
      <el-input type="text" placeholder="用户名"></el-input>
      <el-input class="mt30" type="emil" placeholder="邮箱"></el-input>
      <el-input class="mt30" type="password" placeholder="密码"></el-input>
      <el-button class="mt30" type="primary">立即注册</el-button>
    </div>
</template>

<script>
    export default {
        name: 'index'
    }
</script>

<style scoped lang="scss">
.register-wrap {
  margin: 150px auto;
  width: 714px;
  height: 410px;
  padding: 30px 150px 50px 150px;
  text-align: center;
  background: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  /deep/ .el-button {
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
