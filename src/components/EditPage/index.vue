<template>
    <div class="w1170 edit-wrap">
      <h2>标题</h2>
      <el-input v-model="formData.title"></el-input>
      <h2>内容</h2>
      <quillEditor v-model="formData.content"
                   ref="myQuillEditor"
                    :options="formData.editorOption"
                   @blur="onEditorBlur($event)">
      </quillEditor>
      <div class="catelogl">
        <span>分类：</span>
      </div>
      <el-button type="primary">保存笔记</el-button>
    </div>
</template>

<script>
  import 'quill/dist/quill.snow.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend)
  export default {
    data () {
      return {
        categories: [],
        formData: {
          title: '测试标题',
          content: '<p>测试内容</p>',
          editorOption: {
            modules: {
              ImageExtend: {
                loading: true,
                name: 'img',
                action: "",
                response: (res) => {
                  return res.info
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
      quillEditor
    },
    methods: {
      onEditorBlur(quill) {},
      getCategories() {
        this.$axios.get('/category').then(res => {
          this.categories = res.data
        })
      }
    },
    created() {
      this.getCategories()
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
    }
  }
}
</style>
