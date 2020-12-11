<template>
  <div id="app">
    <div class="header">消息</div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <router-link to="/left">消息</router-link>
      <router-link to="/center">联系人</router-link>
      <router-link to="/right">空间</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
html,body,#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header,.footer{
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header{
  border-bottom: 1px solid #ccc;
}
.main{
  flex: 1;
  overflow-y: scroll;
}
</style>
