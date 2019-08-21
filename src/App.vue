<template>
  <div id="app" ref="bodyPage">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data:function(){
    return {
      clientHeight:''
    }
  },
  mounted:function(){
    this.clientHeight = `${document.documentElement.clientHeight}`
    this.$refs.bodyPage.style.height = this.clientHeight + 'px'
  }
}
</script>

<style>
  html,body{
    padding: 0px;
    margin: 0px;
    height: 100%;
    width: 100%;
  }
  #app{
    width: 100%;
  }
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
