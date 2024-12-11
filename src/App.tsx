import "./App.css";
import List from "./components/List";
import { new_articles, articles } from "./assets/article_data.json";

const App = () => {
    return (
        <div className="app-wrap">
            <div className="p-5 text-start hero-banner">
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/cyberpunk-news/cyberpunk_city.mp4"
                />
                <div className="overlay"></div>
                <div className="container py-5">
                    <h1 className="text-body-emphasis col-lg-8 mb-3">
                        Welcome to Network 54.
                    </h1>
                    <p className="lead col-lg-8">
                        We've been Earth's leading information stream for the
                        last three decades. You care to be informed. We've
                        meticulously tailored this selection of screamsheets to
                        match your past interests and activities, all for your
                        convenience. This is Network News 54.
                    </p>
                    <p className="lead col-lg-8">Follow us on Verge at <code>@N54News</code> for the latest updates.</p>
                </div>
            </div>

            <div className="container text-start pb-5 mt-3">
                <div className="row">
                    <div className="col">
                        {(() => {
                            if (new_articles.length > 0) {
                                return (
                                    <List
                                        data={new_articles}
                                        heading="New and Trending"
                                    />
                                );
                            }
                        })()}
                        <List data={articles} heading="Recommended Stories" />
                    </div>
                    <div className="d-none d-lg-block col-lg-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
