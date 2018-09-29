<template>
    <div class="form-wrapper">
      <div v-if="!userinfo">
        <el-input class="mt30" type="text" placeholder="邮箱" v-model="formData.email"></el-input>
        <el-input class="mt30" type="password" placeholder="密码" v-model="formData.password"
        @keyup.enter.native="handleSubmit"></el-input>
        <el-button type="primary" @click="handleSubmit">登录</el-button>
        <el-button @click="$router.push('/register')">注册</el-button>
      </div>
      <div class="msg-wrapper" v-else>
        <img :src="userinfo.avatar" alt="头像">
        <div class="msg-name">{{userinfo.username}}</div>
        <el-button type="warning" @click="handleLogout">退出登录</el-button>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: 'index',
        data () {
            return {
              formData: {
                email: '1053221101@qq.com',
                password: 'geng2012'
              }
            }
        },
      methods: {
        handleSubmit () {
          this.$axios.post('/login', this.formData).then(res => {
            this.$message.success(res.msg)
            this.$store.commit('CHANGE_USER', res.data)
          })
        },
        handleLogout () {
          this.$axios.get('/logout').then(res => {
            if (res.code == 200) {
              console.log(res.msg)
              this.$store.commit('CHANGE_USER', null)
            }
          })
        }
      },
      computed: {
        ...mapState(['userinfo'])
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
  .msg-wrapper{
    text-align: center;

    img {
      width: 150px;
      height: 150px;
    }

    .msg-name {
      margin-top: 20px;
      font-size: 20px;
      color: #409eff;
    }
    /deep/ .el-button {
      margin-top: 30px;
      margin-left: 0;
      width: 100%;
    }
  }
}
</style>
