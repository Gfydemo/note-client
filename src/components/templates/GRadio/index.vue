<template>
    <div>
      <label v-for="(item, index) in radios" :key="index" class="radio-wrap fll">
        <input @change="valueChange" name="name" type="radio" v-model="radioValue" :value="item._id">
        <div>{{item.name}}</div>
      </label>
    </div>
</template>

<script>
    export default {
        name: 'index',
      props: {
        radios: {
          type: Array,
          default: []
        },
        value: '',
        name: ''
      },
      data () {
          return {
            radioValue: this.value
          }
      },
      methods: {
        valueChange () {
          this.$emit('input', this.radioValue)
        }
      },
      watch: {
          value (val, oldVal) {
            this.radioValue = val
          }
      }
    }
</script>

<style>
.radio-wrap {
  margin-left: 10px;
}
.radio-wrap div {
  border: 1px solid #e1e1e1;
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
  transition: all ease-in-out .2s;
}

.radio-wrap input{
  display: none;
}

  .radio-wrap input:checked+ div{
    background: #409eff;
    color: #fff;
    transition: all ease-in-out .2s;
  }

</style>
