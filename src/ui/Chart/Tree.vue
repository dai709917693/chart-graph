<template>
  <Base width="100%" height="100%" :option="option"></Base>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import Base from './Base'
require('echarts/lib/chart/tree');
require('echarts/lib/component/tooltip');
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
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [{
        type: 'tree',

        data: this.data,

        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',

        symbolSize: 7,

        label: {
          normal: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9
          }
        },

        leaves: {
          label: {
            normal: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          }
        },

        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }]
    }
  }
}

</script>
<style lang="scss" scoped></style>
