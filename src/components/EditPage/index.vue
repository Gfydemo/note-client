<template>
    <div class="w1170 edit-wrap">
      <h2>标题</h2>
      <el-input v-model="formData.title"></el-input>
      <h2>内容</h2>
      <quillEditor v-model="formData.content"
                   ref="myQuillEditor"
                    :options="formData.editorOption"
                   @change="onEditorChange($event)">
      </quillEditor>
      <div class="catelogl clearfix">
        <span class="fll">分类：</span>
        <G-Radios :radios="categories" v-model="formData.tags" name="category"></G-Radios>
      </div>
      <el-button type="primary" @click="articleSubmit">保存笔记</el-button>
    </div>
</template>

<script>
  import GRadios from  '../templates/GRadio'
  import 'quill/dist/quill.snow.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  import axios from 'axios'
  Quill.register('modules/ImageExtend', ImageExtend)
  export default {
    data () {
      return {
        token: '',
        categories: [],
        formData: {
          title: '测试标题',
          content: '<p>测试内容</p>',
          contentText: '',
          tags: '',
          editorOption: {
            modules: {
              ImageExtend: {
                loading: true,
                name: 'file',
                action: "https://upload-z1.qiniup.com",
                response: (res) => {
                  return res.url
                },
                headers: (xhr) => {
                },
                change: (xhr, formData) => {
                  formData.append('token', this.token)
                }
              },
              toolbar: {
                container: container,
                handlers: {
                  'image': function () {
                    QuillWatch.emit(this.quill.id)
                  }
                }
              }
            }
          }
        }
      }
    },
    components: {
      quillEditor,
      GRadios
    },
    methods: {
      getCategories() {
        this.$axios.get('/category').then(res => {
          this.categories = res.data
        })
      },
      onEditorChange({ quill, html, text }) {
        this.formData.contentText = text.substring(0, 200)+ '...'
      },
      articleSubmit () {
        if (this.formData.title && this.formData.tags) {
          this.$axios.post('/article', this.formData).then(res => {
            this.$message.success(res.msg)
            setTimeout(() => {
              this.$router.push('/personalcenter')
            }, 500)
          })
        } else {
          this.$message.warning('必要填写标题和分类')
        }
      },
      getToken () {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.token = res.data.data
        })
      }
    },
    created() {
      this.getCategories()
      this.getToken()
    }
  }
</script>

<style scoped lang="scss">
.edit-wrap{
  padding: 10px 20px;
  margin-top: 100px;
  background: #fff;
  border-radius: 6px;

  .edit-box{
    min-height: 300px;
  }
  /deep/ .ql-container {
    min-height: 300px;
  }
  .catelogl {
    margin: 20px 10px;
    font-size: 12px;
    span {
      color: #409eff;
      line-height: 1.5;
    }
  }
}
</style>
