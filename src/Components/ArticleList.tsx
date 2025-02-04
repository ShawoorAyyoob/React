import './Article.css';
interface ArticleProps {
    title: string;
    children: string;
}
const Article = ({ title, children }: ArticleProps) => {
    return (
        <div className="card shadow-sm w-75 mb-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{children}</p>
            </div>
        </div>
    )
}
export default Article;