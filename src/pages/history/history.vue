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
      let symbol="circle";
        // switch (k) {
        //   case "0":
        //     symbol = "circle"
        //     break;
        //   case "1":
        //     symbol = "rect"
        //     break;
        //   case "2":
        //     symbol = "triangle"
        //     break;
        //   case "3":
        //     symbol = "diamond"
        //     break;
        //   case "4":
        //     symbol = "roundRect"
        //     break;
        // }
      cateArr.push({ name: v ,icon:symbol})
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
