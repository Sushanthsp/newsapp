import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const articles = [];

  // async componentDidMount() {
  //   this.process();
  // }

  useEffect(() => {
    process();
  }, []); // eslint-disable-line

  const [article, setArticle] = useState(articles);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(1);

  // constructor() {
  //   super();
  //   this.state = {
  //     article: this.articles,
  //     page: 1,
  //     loading: false,
  //     // totalResults: this.article.totalResults
  //     // items: this.articles.from({ length: 20 })
  //     totalResults: 0
  //   };
  // }

  const process = async () => {
    props.setProgress(10);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let fetchData = await data.json();
    setArticle(fetchData.articles);

    setTotalResults(fetchData.totalResults);
    setPage(page + 1);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    setLoading(false);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let fetchData = await data.json();
    setArticle(article.concat(fetchData.articles));
    setPage(page + 1);
    setLoading(false);
    setTotalResults(fetchData.totalResults);
  };

  return (
    <div>
      <div className="container">
        <h1 style={{marginTop : '80px',textAlign: 'center' }}>Top headline of the day-{props.category} </h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalResults}
          loader={!loading && <Spinner />}
        >
          <div className="container">
            <div className="row mt-4">
              {article.map((art) => {
                return (
                  <div className="col-lg-4 mt-4">
                    <Newsitem
                      title={art.title}
                      newsUrl={art.url}
                      author={art.author ? art.author : "unknown"}
                      source={art.source.name}
                      time={art.publishedAt}
                      imgsrc={
                        art.urlToImage
                          ? art.urlToImage
                          : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SD56NTT4IQI6ZDGIW2LFMS5HSY.jpg&w=1440"
                      }
                      description={
                        art.description ? art.description.slice(0, 80) : ""
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "science",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
