import "./App.css";
import List from "./components/List";
import { new_articles, articles } from "./assets/article_data.json";

const App = () => {
    return (
        <div className="app-wrap">
            <div className="p-5 text-start cyberpunk-tri-bg">
                <div className="container py-5">
                    <h1 className="text-body-emphasis col-8 mx-auto">
                        Welcome to N54 News.
                    </h1>
                    <p className="lead col-8 mx-auto">
                        We've been Earth's leading information stream for the
                        last three decades. You care to be informed. We've
                        meticulously tailored this selection of articles to
                        match your past interests and activities, all for your
                        convenience. This is Network News 54.
                    </p>
                    <p className="lead col-8 mx-auto">Follow our Verge <code>@N54News</code> for the latest updates.</p>
                </div>
            </div>
            <div className="container text-center pb-5 mt-3">
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
                <List data={articles} heading="Recommended Articles" />
            </div>
        </div>
    );
};

export default App;
