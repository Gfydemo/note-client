<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    background: #f1f1f1;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  .fll {
    float: left;
  }

  .flr {
    float: right;
  }

  .w1170 {
    width: 1170px;
    margin: 0 auto;
  }

  .mt30 {
    margin-top: 30px;
  }

  .mt100 {
    margin-top: 100px;
  }

  .clearfix::after {
    content: '';
    display: block;
    clear: both;
    overflow: hidden;
    width: 0;
    height: 0;
    height: 0;
  }
</style>
