<template>
    <el-form @submit.native.prevent="putArticle" ref="form" :model="article" label-width="80px">
  <el-form-item label="文章标题">
    <el-input v-model="article.name"></el-input>
  </el-form-item>
  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="article.body"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import {request} from '../network/request'
export default {
  name:'EditArticle',
  data() {
    return {
      article:{
        name:'',
        body:''
      },
    }
  },

  methods:{
     // 更新数据
    putArticle() { 
      request({
        method:'put',
        url:`/articles/${this.articleId}`,
        params:this.article
      }).then(res => {
           this.$message({
          message: '文章更新成功！',
          type: 'success'
        });
      })
    }
  },

  computed:{
    articleId() {
      return this.$route.params.id
    }
  },

  created() {
    // 根据id拿到指定文章
    request({
      url:`/articles/${this.articleId}`
    }).then(res => {
      this.article.name = res.data.name;
      this.article.body = res.data.body;
    })
  }
}
</script>

<style>

</style>