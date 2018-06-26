<template>
  <Tree :data="treeData"></Tree>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { Tree } from "@/ui/Chart"
export default {
  components: {
    Tree
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
      GETHISTORYTREE: "history/GETHISTORYTREE"
    })
  }
}

</script>
<style lang="scss" scoped></style>
