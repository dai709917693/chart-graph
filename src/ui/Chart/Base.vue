<template>
  <div class="echart" :style="{width:width,height:height}"></div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
export default {
  props: {
    width: String,
    height: String,
    option: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      myChart: null
    }
  },
  watch: {
    option: {
      handler(v) {
        this.myChart && this.myChart.setOption(v)
      },
      deep: true
    }
  },
  mounted() {
    this.myChart = echarts.init(this.$el);
    this.myChart.setOption(this.option)
  }
}

</script>
<style lang="scss" scoped>
.echart {
  width: 100%;
  height: 235px
}

</style>
