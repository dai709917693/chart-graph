<template>
  <div class="tool__container">
    <Form :model="form" :label-width="40">
      <FormItem label="源">
        <Input v-model="form.target"></Input>
      </FormItem>
      <FormItem label="类型">
        <Select v-model="form.type" placeholder="请选择" @on-change="change">
          <Option v-for="(item, index) in doneData" :key="index" :value="item.value">{{item.label}}</Option>
        </Select>
      </FormItem>
      <p>目标</p>
      <FormItem v-for="(item, index) in doneData" :label="item.label" :key="index" v-if="form.type&&form.type != item.value">
        <Input v-model="form[item.value]"></Input>
        <Select v-model="form.type" placeholder="请选择">
        </Select>
      </FormItem>
      <FormItem>
        <Button type="primary">确定</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
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
      form: {

      }
    }
  },
  computed: {
    doneData() {
      let res = []
      ObjForEach(this.data, (v, k) => {
        res.push({ label: v, value: k })
      })
      return res
    }
  },
  methods: {
    sure() {

    },
    change(item) {
      console.log(123, item)

    }
  }
}

</script>
<style lang="scss" scoped>
.tool__container {
  padding: 20px;
}

</style>
