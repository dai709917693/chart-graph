<template>
  <div id="app">
    <component :is="tool" class="tool"></component>
    <div class="router">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Tool from "@/components/Tool"
import ToolTree from "@/components/ToolTree"

export default {
  name: 'App',
  components: {
    Tool,
    ToolTree
  },
  data() {
    return {
      tool: ""
    }
  },
  watch: {
    $route(to, from) {
      this.checkRoute(to.name)
    }
  },
  created() {
    this.checkRoute(this.$route.name)
  },
  methods: {
    checkRoute(name) {
      switch (name) {
        case "history":
          this.tool = "Tool"
          break;
        case "treeHistory":
          this.tool = "ToolTree"
          break;
      }
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
  left: 250px;
}

</style>
