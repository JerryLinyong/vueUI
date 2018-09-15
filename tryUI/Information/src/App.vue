<template>
  <div id="app">
    <ul>
      <br>
      <router-link to="/">客服管理</router-link><br>
      <router-link to="/two">快捷语</router-link><br>
      <router-link to="/three">信息表</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'App'
}
</script>

<style scoped>
  ul {
    position: absolute;
    font-size: 20px;
    z-index: 1000
  }
</style>
