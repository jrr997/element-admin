<template>
 <el-table :data="articles">
        <el-table-column prop="name" label="标题" width="120">
        </el-table-column>
        <el-table-column prop="body" label="内容">
        </el-table-column>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="edit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="remove(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
</template>

<script>
import {request} from '../network/request'
export default {
  name:'ListArticle',
  data() {
    return {
      articles:[]
    }
  },
  created() {
    // 向数据库请求数据
    request({
      method:'get',
      url:'/articles'
    }).then(res => {
      this.articles = res.data
    })
  },
  methods:{
    edit(index, row) {
      // console.log(index);
      console.log(row._id);
      this.$router.push(`/articles/${row._id}/edit`)
    },
    remove(index,row) {
      let i = index;
      request({
        method:'delete',
        url:`articles/${row._id}`,
      }).then(res => {  
        this.articles.splice(i,1);
      })
    }
  }
}
</script>

<style>

</style>