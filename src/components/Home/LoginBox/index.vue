<template>
    <div class="form-wrapper">
        <el-input class="mt30" type="text" placeholder="邮箱" v-model="formData.emil"></el-input>
        <el-input class="mt30" type="password" placeholder="密码" v-model="formData.password"></el-input>
        <el-button type="primary">登录</el-button>
        <el-button @click="$router.push('/register')">注册</el-button>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
              formData: {
                emil: '',
                password: ''
              }
            }
        }
    }
</script>

<style scoped lang="scss">
.form-wrapper {
  width: 360px;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 6px;

  /deep/ .el-button {
    margin-top: 30px;
    margin-left: 0;
    width: 100%;
  }
}
</style>
