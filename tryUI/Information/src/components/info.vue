<template>
  <div class="customerSM">
    <div class="info">
      <div>
        <h4>今日活跃用户</h4>
        <h1>{{0}}</h1>
      </div>
      <div>
        <h4>昨日活跃用户</h4>
        <h1>{{0}}</h1>
      </div>
      <div>
        <h4>客服账号</h4>
        <h1>0</h1>
      </div>
    </div>
    <div class="info">
      <div>
        <h4>总消息数量</h4>
        <h1>{{0}}</h1>
        <h4>周同比{{12}}%&emsp;日环比{{12}}%</h4>
        <h4>近一周消息平均数{{1000}}</h4>
      </div>
      <div>
        <h4>有效会话</h4>
        <h1>{{0}}</h1>
        <h4>周同比{{12}}%&emsp;日环比{{12}}%</h4>
        <h4>近一周有效会话{{1000}}</h4>
      </div>
      <div>
        <h4>投诉数量</h4>
        <h1>{{0}}</h1>
        <h4>周同比{{12}}%&emsp;日环比{{12}}%</h4>
        <h4>近一周投诉{{1000}}</h4>
      </div>
      <div>
        <h4>客服在线时长</h4>
        <h1>{{0}}</h1>
        <h4>周同比{{12}}%&emsp;日环比{{12}}%</h4>
      </div>
    </div>
    <div class="info">
      <div>
        <h4>新用户增加数量</h4>
        <h1>{{0}}</h1>
        <h4>周同比{{12}}%&emsp;日环比{{12}}%</h4>
        <h4>日均销售额￥{{1000}}</h4>
      </div>
      <div>
        <h4>老用户活跃数量</h4>
        <h1>{{0}}</h1>
        <h4>周同比{{12}}%&emsp;日环比{{12}}%</h4>
        <h4>日均销售额{{1000}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .customerSM {
    width: 100vw;
    height: 100vh;
    overflow: hidden
  }
  .info {
    position: relative;
    width: 100%;
    margin: 20px 0;
    display: flex
  }
  .info>div {
      position: relative;
      flex: 1;
      text-align: center
  }
  .customerSM>h1 {
    padding: 10px 40px;
    background: #e1ebf4
  }
  
  
</style>
