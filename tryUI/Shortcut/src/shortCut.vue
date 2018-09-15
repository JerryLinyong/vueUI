<template>
  <div>
    <h1>快捷回复</h1>
    <div class="controller">
      <a-input-search placeholder="请输入快捷语名称" style="width:300px"/>
      <a-button type="primary" style='float:right'>添加快捷语</a-button>
    </div>
    <div class="detail">
      <a-row>
        <a-col :span="4">序号</a-col>
        <a-col :span="5">快捷语词条</a-col>
        <a-col :span="5">状态</a-col>
        <a-col :span="5">内容</a-col>
        <a-col :span="5">操作</a-col>
      </a-row>
      <a-row v-for='(shortCut,index) in shortCuts' :key='index'>  
        <a-col :span="4">{{shortCut.num}}</a-col>
        <a-col :span="5">{{shortCut.key}}</a-col>
        <a-col :span="5">{{shortCut.state}}</a-col>
        <a-col :span="5">{{shortCut.content}}</a-col>
        <a-col :span="5"><a-button type="primary" style='margin-right:10px'>修改</a-button><a-button type="danger" style='margin-right:10px' @click='showD=1'>删除</a-button></a-col>
      </a-row>
    </div>
    <section class="background" v-if='showD===1'>
      <div class="delete">
        <a-icon type="close" style="position:absolute;right:20px;font-size:20px" @click='showD=0'/>
        <h2>删除账号</h2>
        <div style='display:flex;justify-content:space-around;margin-top:40px'>
          <a-button type="danger">确定</a-button><a-button  @click='showD=0'>取消</a-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showD: 0,
      shortCuts: [{num: 0,key: '123123',state: 'open',content: 'hahah'},{num: 0,key: '123123',state: 'open',content: 'hahah'},{num: 0,key: '123123',state: 'open',content: 'hahah'},{num: 0,key: '123123',state: 'open',content: 'hahah'}]
    }
  }
}
</script>

<style scoped>
  h1 {
    padding: 10px 40px;
    background: #e4ebf4;
    margin: 0
  }
  .controller {
    padding: 30px 50px
  }
  .detail {
    height: 600px;
    overflow: auto;
  }
  .ant-row {
    display: flex;
    align-items: center;
    height: 50px;
    text-align: center;
    background: #e4ebf4;
  }
  .ant-row:first-child {
    font-size: 20px
  }
  .background {
    position: absolute;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65)
  }
  .delete {
    position: absolute;
    top: calc(50% - 100px);
    right: calc(50% - 150px);
    height: 140px;
    width: 200px;
    padding: 10px;
    border-radius: 20px;
    background: #e4ebf4;
    text-align: center
  }
</style>
