<template>
  <div class="tool__container">
    <Form :label-width="40">
      <FormItem label="源">
        <Cascader :data="treeData" v-model="source" change-on-select filterable placeholder="请选择"></Cascader>
      </FormItem>
      <p class="target__title">连接目标
        <br> (创建新的节点)
      </p>
      <div v-for="(tarVal, tarIndex) in targetNum" :model="target[tarIndex]" class="target">
        <FormItem label="目标" :key="tarIndex">
          <Input v-model="target[tarIndex]"></Input>
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
export default {
  data() {
    return {
      source: [],
      target: [],
      targetNum: 0
    }
  },
  computed: {
    ...mapState({
      treeData: state => state.history.treeData
    })
  },
  created() {
    this.GETHISTORYTREE()
  },
  methods: {
    ...mapActions({
      GETHISTORYTREE: "history/GETHISTORYTREE",
      EDITHISTORYTREE: "history/EDITHISTORYTREE"
    }),
    handleAdd() {
      this.targetNum++;
    },
    sure() {
      this.EDITHISTORYTREE({ source: JSON.stringify(this.source), target: JSON.stringify(this.target) })
      this.GETHISTORYTREE()
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
