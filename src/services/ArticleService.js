import Api from "../Axios/Api";
const ARTICLE_API="/articles"

export const fetchArticles=async()=>{
  return await Api.get(ARTICLE_API);
}
export const fetchAticleById=async(articleId)=>{
  return await Api.get(ARTICLE_API+ '/' + articleId)
}

export const deleteArticles=async(articleId)=>{
  return await Api.delete(ARTICLE_API+'/'+articleId)
}

export const editArticle=async(articleId)=>{
 return await Api.put(ARTICLE_API+'/'+articleId.id,articleId) 
}

export const addArticle=async(article)=>{
  return await Api.post(ARTICLE_API,article);
}
