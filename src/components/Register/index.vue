<template>
    <div class="register-wrap">
      <h1>新用户注册</h1>
      <el-input v-model="formData.username" type="text" placeholder="用户名"></el-input>
      <el-input v-model="formData.email" class="mt30" type="emil" placeholder="邮箱"></el-input>
      <el-input v-model="formData.password" class="mt30" type="password" placeholder="密码" @keyup.enter.native="handleSubmit"></el-input>
      <el-button class="mt30" type="primary" @click="handleSubmit">立即注册</el-button>
    </div>
</template>

<script>
    export default {
        name: 'index',
      data () {
          return {
            formData: {
              username: '',
              email: '',
              password: ''
            }
          }
      },
      methods: {
          handleSubmit() {
            if (this.formData.username && this.formData.email && this.formData.password) {
              this.$axios.post('/regiest', this.formData).then(res => {
                this.$message.success(res.msg)
                setTimeout(() => {
                  this.$router.push('/')
                }, 500)
              })
            } else {
              this.$message.warning('请先完善信息')
            }
          }
      }
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
