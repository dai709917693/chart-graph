<template>
  <div id="app">
    <Tool class="tool" :data="history"></Tool>
    <div class="router">
      <router-view/>
    </div>
  </div>
</template>
<script>
import category from "@/ajax/config/category"
import Tool from "@/components/Tool"
export default {
  name: 'App',
  components: {
    Tool
  },
  data() {
    return {
      history: category
    }
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.tool {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 250px
}

.router {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left:250px;
}

</style>
