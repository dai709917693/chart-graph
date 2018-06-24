<template>
  <div class="tool__container">
    <Form :model="source" :label-width="40">
      <FormItem label="源">
        <Input v-model="source.name" @on-change="sourceChange"></Input>
        <Select v-model="source.name" filterable placeholder="请选择" @on-change="sourceChange">
          <Option v-for="(item, index) in units" v-if="checkNameRepeat(item) && (source.category !=null ? source.category == item.category : true)" :key="index" :value="item.name">{{item.name}}</Option>
        </Select>
      </FormItem>
      <FormItem label="类型">
        <Select v-model="source.category" placeholder="请选择">
          <Option v-for="(item, index) in doneData" v-if="checkTypeRepeat(item)" :key="index" :value="item.value">{{item.label}}</Option>
        </Select>
      </FormItem>
      <p class="target__title">连接目标
        <br> (创建新的节点或选择已存在的节点)
      </p>
      <div v-for="(tarVal, tarIndex) in targetNum" :model="target[tarIndex]" class="target">
        <FormItem label="目标" :key="tarIndex">
          <Input v-model="target[tarIndex].name" @on-change="targetChange(tarIndex)"></Input>
          <Select v-model="target[tarIndex].name" filterable placeholder="请选择" @on-change="targetChange(tarIndex)">
            <Option v-for="(item, index) in units" v-if="item.name != source.name && (target[tarIndex].category !=null ? item.category == target[tarIndex].category : true)" :key="index" :value="item.name">{{item.name}}</Option>
          </Select>
        </FormItem>
        <FormItem label="类型">
          <Select v-model="target[tarIndex].category" placeholder="请选择">
            <Option v-for="(item, index) in doneData" v-if="(source.category == null) || (source.category == 2) || (source.category == 3) || (source.category == 1 && item.value != 1 && item.value != 0) || (source.category == 0 && item.value !=1 ) || (source.category == 4 && item.value !=4 )" :key="index" :value="item.value">{{item.label}}</Option>
          </Select>
        </FormItem>
      </div>
      <FormItem>
        <Button type="dashed" long @click="handleAdd" icon="plus-round">添加目标</Button>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="sure">确定</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { ObjForEach } from "@/modules/objectProcessing"
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      source: {
        name: null,
        category: null
      },
      target: [],
      targetNum: 0
    }
  },
  computed: {
    ...mapState({
      units: state => state.history.units
    }),
    doneData() {
      let res = []
      ObjForEach(this.data, (v, k) => {
        res.push({ label: v, value: k })
      })
      return res
    }
  },
  created() {
    this.GETHISTORY()
  },
  methods: {
    ...mapActions({
      GETHISTORY: "history/GETHISTORY",
      EDITHISTORY: "history/EDITHISTORY"
    }),
    sure() {
      this.EDITHISTORY({ source: JSON.stringify(this.source), target: JSON.stringify(this.target) })
      this.GETHISTORY()
    },
    handleAdd() {
      this.targetNum++;
      this.target.push({ name: null, category: null })
    },
    sourceChange() {
      if (this.units[this.source.name]) {
        this.source.category = this.units[this.source.name].category + ''
      }
    },
    targetChange(index) {
      if (this.units[this.target[index].name]) {
        this.target[index].category = this.units[this.target[index].name].category + ''
      }
    },
    checkTypeRepeat(item) {
      let res = true
      this.target.forEach((v) => {
        if ((v.category == 1 && (item.value == 1 || item.value == 0)) || (v.category == 0 && item.value == 0) || (v.category == 4 && item.value == 4)) {
          res = false
        }
      })
      return res
    },
    checkNameRepeat(item) {
      let res = true
      this.target.forEach((v) => {
        (v.name == item.name) && (res = false)
      })
      return res
    }
  }
}

</script>
<style lang="scss" scoped>
.tool__container {
  padding: 20px;
}

.target__title {
  margin-bottom: 20px;
}

.target {
  margin-bottom: 20px;
  border-bottom: 1px dashed #999
}

</style>
