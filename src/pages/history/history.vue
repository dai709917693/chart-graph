<template>
  <Graph :data="doneUnits" :links="doneLinks" :categories="categories"></Graph>
</template>
<script>
import { ObjForEach } from "@/modules/objectProcessing"
import category from "@/ajax/config/category"
import { mapActions, mapState,mapGetters } from 'vuex'
import { Graph } from "@/ui/Chart"
export default {
  components: {
    Graph
  },
  data() {
    return {
      categories: []
    }
  },
  computed: {
    ...mapGetters({
      doneUnits:"history/doneUnits",
      doneLinks:"history/doneLinks"
    })
  },
  created() {
    let cateArr = []
    ObjForEach(category, (v, k) => {
      cateArr.push({ name: v })
    })
    this.categories = cateArr
  },
  methods: {
    ...mapActions({
      GETHISTORY: "history/GETHISTORY"
    })
  }
}

</script>
<style lang="scss" scoped></style>
