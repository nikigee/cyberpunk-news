interface ArticleData {
    title: string;
    img_url: string;
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
            <h2 className="p-3 fw-bold">{heading}</h2>
            <div className="row row-cols-1 justify-content-md-center">
                {data.toReversed().map((item) => (
                    <div className="row row-cols-2 justify-content-md-center py-2" key={item.id}>
                        <div className="col-3">
                            <img className="img-fluid rounded" src={item.img_url} />
                        </div>
                        <div className="col text-start">
                            <div className="row">
                                <p className="h3 fw-bold mb-2">{item.title}</p>
                            </div>
                            <div className="row">
                                <p className="mb-2">{item.description}</p>
                                <p className="my-0 fst-italic">By <a href="#" className="link-primary">{item.author}</a></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ArticlesList;
