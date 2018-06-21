<template>
  <Graph :data="data" :links="links" :categories="categories"></Graph>
</template>
<script>
import { ObjForEach } from "@/modules/objectProcessing"
import category from "@/ajax/config/category"
import { GETHISTORY_AJAX } from "@/ajax"
import { Graph } from "@/ui/Chart"
export default {
  components: {
    Graph
  },
  data() {
    return {
      data: [],
      links: [],
      categories: []
    }
  },
  created() {
    GETHISTORY_AJAX().then((res) => {
      this.data = res.data.map((v) => {
        return {
          "id": v.id,
          "name": v.name,
          "symbolSize": 32,
          "category": category[v.category],
          "draggable": true
        }
      })
      let cateArr = []
      ObjForEach(category, (v, k) => {
        cateArr.push({ name: v })
      })
      this.categories = cateArr
      this.links = res.links
    })
  }
}

</script>
<style lang="scss" scoped></style>
