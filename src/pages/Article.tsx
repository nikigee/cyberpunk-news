import { useParams } from "react-router-dom";
import { articles } from "../assets/article_data.json";

function createMarkup(input?: string) {
    if (input) return { __html: input };
    else
        return {
            __html: "<p>The contents this article have been redacted.</p>",
        };
}

const Article = () => {
    const params = useParams<{ articleId: string }>();
    const story = articles.find((v) => v.id == params.articleId);

    if (!story)
        return (
            <div className="container text-center">
                Sorry, that article does not exist on our records.
            </div>
        );
    else
        return (
            <div className="container text-start">
                <div className="row justify-content-center mb-5">
                    <div className="col">
                        <img className="img-fluid mb-3" src={story.img_url}></img>
                        <div className="my-1"><span className="border px-2 py-1 d-inline-block text-muted border-muted" style={{fontSize: "0.8rem"}}>{story.brand}</span></div>
                        <h1 className="h2 fw-bold">{story.title}</h1>
                        <p className="text-secondary">{story.description}</p>
                        <p className="">
                            By{" "}
                            <a href="#" className="link-primary">
                                {story.author}
                            </a>
                        </p>
                        <div className="article-content"
                            dangerouslySetInnerHTML={createMarkup(
                                story.content
                            )}
                        ></div>
                    </div>
                    <div className="col-5 d-none d-xl-block"></div>
                </div>
            </div>
        );
};



export default Article;
