<template>
  <el-form
    @submit.native.prevent="putArticle"
    ref="form"
    :model="article"
    label-width="80px"
  >
    <el-form-item label="文章标题">
      <el-input v-model="article.name"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <editor ref="editor" @save="save" :body="article.body"></editor>
      <el-input
        type="textarea"
        v-model="article.body"
        style="display: none; width: 0; height: 0"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import request from "network/request";
import Editor from "components/common/Editor";
import { saveArticle } from "network/editor";
export default {
  name: "EditArticle",
  components: { Editor },
  data() {
    return {
      article: {
        name: "",
        body: "",
      },
    };
  },

  methods: {
    // 提交数据
    putArticle() {
      const text = this.$refs.editor.text;
      this.save(text);
    },

    // 保存文章
    save(text, html) {
      this.article.body = text;
      saveArticle(this.articleId, this.article).then((res) => {
        this.$message({ message: "保存成功！", type: "success" });
      });
    },
    // 取消
    cancel() {
      this.$router.back();
    },
  },

  computed: {
    articleId() {
      return this.$route.params.id;
    },
  },

  created() {
    // 根据id拿到指定文章
    request({
      url: `/articles/${this.articleId}`,
    }).then((res) => {
      this.article.name = res.data.name;
      this.article.body = res.data.body;
    });
  },
};
</script>

<style>
</style>
