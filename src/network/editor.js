import request from './request'

// 在编辑页中保存文章
export function saveArticle(id, article) {
  return request({
    method: "put",
    url: `/articles/${id}`,
    params: article,
  })
}