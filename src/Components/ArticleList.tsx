import Article from "./Article";
import getArticles from "../Services/ArticleService";

function ArticleList() {
  return (
    <div>
      {getArticles().map((article) => (
        <Article title={article.title}>{article.body}</Article>
      ))}
    </div>
  );
}
export default ArticleList;
