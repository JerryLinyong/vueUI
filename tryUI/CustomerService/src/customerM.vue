<template>
  <div class="management">
    <h1>客服管理</h1>
    <section style='display:flex'>
      <div class="info" v-for='(sec,index) in customerM' :key='index' style='flex:1;text-align:center'>
        <h2>{{sec.name}}</h2>
        <p style='font-size:30px;margin-bottom:10px'>{{sec.value}}</p>
      </div>
    </section>
    <h1>客服详情</h1>
    <p class='controller'>
      <a-input-search placeholder="请输入客服名称" style="width: 300px;margin-left:20px"/>
      <a-button type="primary" style='float:right;margin-right:20px' @click="showS=1">添加客服</a-button>
    </p> 
    <div class="detailBox" style='height:500px;overflow:auto;text-align:center'>
      <a-row class="detail">
        <a-col :span="4">客服名称</a-col>
        <a-col :span="8">当前状态</a-col>
        <a-col :span="4">会员分配</a-col>
        <a-col :span="4">工作日志</a-col>
        <a-col :span="4">操作</a-col>
      </a-row>
      <a-row class="detail" style='font-size:16px;display:flex;align-items:center' v-for='(detail,index) in customerD' :key='index'>
        <a-col :span="4">{{detail.name}}</a-col>
        <a-col :span="8"><a-icon type="check-circle" style='color:green'/>&emsp;待回复：{{detail.state}}&emsp;<a-button type="primary">一键处理</a-button></a-col>
        <a-col :span="4" style='color:green' @click="changeC()">{{detail.distribute}}</a-col>
        <a-col :span="4">{{detail.diary}}</a-col>
        <a-col :span="4"><a-button type="primary" style='margin-right:10px' @click='showSE=1'>修改</a-button><a-button type="danger" style='margin-right:10px' @click='showD=1'>删除</a-button></a-col>
      </a-row>
    </div>
    <section class="background" v-if='isShow===1'>
      <div class="customer">
        <a-icon type="close" style="position:absolute;right:20px;font-size:20px" @click='isShow=0'/>
        <h2>修改会员分配</h2>
        <a-select :size="size" style="width:200px;margin:30px 0" @change="handleChange">
        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
          {{(i + 9).toString(36) + i}}
        </a-select-option>
        </a-select>
        <div style='display:flex;justify-content:space-around'>
          <a-button type="primary">确定</a-button><a-button  @click='isShow=0'>取消</a-button>
        </div>
      </div>
    </section>
    <section class="background" v-if='showS===1'>
      <div class="service">
        <a-icon type="close" style="position:absolute;right:20px;font-size:20px" @click='showS=0'/>
        <h2>添加客服</h2>
        <login></login>
      </div>
    </section>
    <section class="background" v-if='showSE===1'>
      <div class="service">
        <a-icon type="close" style="position:absolute;right:20px;font-size:20px" @click='showSE=0'/>
        <h2>编辑账号</h2>
        <login></login>
      </div>
    </section>
    <section class="background" v-if='showD===1'>
      <div class="delete">
        <a-icon type="close" style="position:absolute;right:20px;font-size:20px" @click='showD=0'/>
        <h2>删除账号</h2>
        <div style='display:flex;justify-content:space-around;margin-top:40px'>
          <a-button type="danger">确定</a-button><a-button @click='showD=0'>取消</a-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import login from './login'
export default {
  components: {
    login: login
  },
  data () {
    return {
      showD: 0,
      showSE: 0,
      showS: 0,
      isShow: 0,
      customerM: [{name: '客服管理',value: 0},{name: '在线客服',value: 0},{name: '今日接待人数',value: 0},{name: '今日完成问题',value: 0}],
      customerD: [{name: '客服管理',state: 0,distribute: 'haha',diary: 'gaga'},{name: '客服管理',state: 0,distribute: 'haha',diary: 'gaga'},{name: '客服管理',state: 0,distribute: 'haha',diary: 'gaga'}]
    }
  },
  methods: {
    changeC () {
      this.isShow = 1
    }
  }
}
</script>

<style scoped>
  .background {
    position: absolute;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65)
  }
  .customer,.service,.delete {
    position: absolute;
    top: calc(50% - 100px);
    right: calc(50% - 150px);
    width: 300px;
    height: 200px;
    padding: 10px;
    border-radius: 20px;
    background: #e4ebf4;
    text-align: center
  }
  .service {
    top: calc(50% - 150px);
    right: calc(50% - 250px);
    width: 500px;
    height: 300px;
  }
  .delete {
    height: 140px;
    width: 200px
  }
  .management {
    width: 100%;
    height: 100%;
    overflow: hidden
  }
  h1 {
    padding: 10px 40px;
    background: #e1ebf4
  }
  .detail {
    background: #e1ebf4;
    height: 50px;
    font-size: 20px
  }
</style>
