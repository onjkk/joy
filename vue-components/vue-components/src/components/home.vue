<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="组件" width="180"></el-table-column>
    <el-table-column label="操作" width="100">
    <template v-slot="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
    </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "input",
          address: "/input"
        },
        {
          name:"ref触发子组件事件",
          address:'/faToCh'
        },
        {
          name:"防抖和节流",
          address:'/debounce'
        },
        {
          name:"动画",
          address:'/animotion'
        },
        {
          name:"轮播",
          address:'/swiper'
        },
        {
          name:"自适应栅格化",
          address:'/Layout'
        },
        {
          name:"issue自测快速构建",
          address:'/Issues'
        },
        {
          name:"高阶组件",
          address:'/VueHoc'
        }
      ]
    };
  },
  methods:{
      handleClick(row){
      this.$router.push({path: row.address})
      }
  }
};
</script>