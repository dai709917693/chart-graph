<template>
  <Base width="100%" height="100%" :option="option"></Base>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import Base from './Base'
require('echarts/lib/chart/graph');
require('echarts/lib/component/title');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');

export default {
  components: {
    Base
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    links: {
      type: Array,
      default () {
        return []
      }
    },
    categories: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      option: null
    }
  },
  watch: {
    data(v) {
      this.option.series[0].data = v
    },
    links(v) {
      this.option.series[0].links = v
    },
    categories(v) {
      this.option.series[0].categories = v
    }
  },
  created() {
    this.option = {
      backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
      }, {
        offset: 1,
        color: '#cdd0d5'
      }]),
      title: {
        text: "历史",
        subtext: "",
        top: "top",
        left: "center"
      },
      tooltip: {},
      legend: [{
        tooltip: {
          show: true
        },
        selectedMode: 'true',
        bottom: 20,
      }],
      toolbox: {
        show: true,
        feature: {
          dataView: {
            show: true,
            readOnly: true
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      animationDuration: 1000,
      animationEasingUpdate: 'quinticInOut',
      series: [{
        name: '历史',
        type: 'graph',
        layout: 'force',
        force: {
          repulsion: 500,
          edgeLength: 120
        },
        data: this.data,
        links: this.links,
        categories: this.categories,
        focusNodeAdjacency: true,
        roam: true,
        label: {
          normal: {
            show: true,
            position: 'top',
          }
        },
        lineStyle: {
          normal: {
            color: 'source',
            curveness: 0,
            type: "solid"
          }
        }
      }]
    }
  }
}

</script>
<style lang="scss" scoped></style>
