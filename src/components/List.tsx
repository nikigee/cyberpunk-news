import { Link } from "react-router-dom";

interface ArticleData {
    title: string;
    img_url: string;
    brand: string;
    description: string;
    author: string;
    id: string;
}

interface Props {
    heading: string;
    data: Array<ArticleData>;
}

const ArticlesList = ({ heading, data }: Props) => {
    return (
        <>
            <hr />
            <h3 className="my-4 fw-bold">{heading}</h3>
            {data.slice().reverse().map((item: ArticleData) => (
                <div className="py-2">
                    <div
                        className="row justify-content-md-start align-items-top mb-4"
                        key={item.id}
                    >
                        <div className="col-md-5 mb-3 mb-md-0">
                            <img className="img-fluid" src={item.img_url} />
                        </div>
                        <div className="col text-start">
                            <div className="row">
                                <div className="row">
                                    <div className="text-muted">{item.brand}</div>
                                    <Link
                                        className="link-light link-underline-opacity-0"
                                        to={"/article/" + item.id}
                                    >
                                        <p className="h3 fw-bold">{item.title}</p>
                                    </Link>
                                </div>
                                <p className="mb-2">{item.description}</p>
                                <p className="my-0 text-muted">
                                    By{" "}
                                    <a href="#" className="link-primary">
                                        {item.author}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </>
    );
};

export default ArticlesList;
