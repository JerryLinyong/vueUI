<template>
  <div>
    <h1>快捷回复</h1>
    <div class="detailBox">
      <div class="detail">
        <a-input-search placeholder="请输入快捷语名称" style="width:300px;margin-left:20px"/>
        <a-button type="primary" style='float:right;margin-right:20px'>添加快捷语</a-button>
      </div> 
      <a-row class="moreD">				
        <a-col :span="4">序号</a-col>
        <a-col :span="5">快捷语词条</a-col>
        <a-col :span="5">状态</a-col>
        <a-col :span="5">内容</a-col>
        <a-col :span="5">操作</a-col>
      </a-row>
      <a-row class="selfD">
        <a-col :span="4">1</a-col>
        <a-col :span="5">123</a-col>
        <a-col :span="5">开启</a-col>
        <a-col :span="5">没有</a-col>
        <a-col :span="5"><a-button type="primary" style='margin-right:10px'>修改</a-button><a-button type="danger" style='margin-right:10px'>删除</a-button></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  h1 {
    padding: 10px 40px;
    background: #e4ebf4
  }
  .detailBox {
    position: relative;
    height: 500px;
    overflow: auto;
  }
  .moreD {
    padding: 6px 20px;
    margin-top: 20px;
    font-size: 20px;
    text-align: center;
    background: #e1ebf4
  }
  .selfD {
    padding: 6px 20px;
    text-align: center;
    background: #e1ebf4
  }
  .selfD .ant-col-4 {
    padding-top: 8px
  }
</style>
