import React from "react";

const Newsitem = (props) => {
  let { title, description, newsUrl, imgsrc, author, time, source } = props;
  return (
    <div>
      <div className="card" >
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "end",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>

        <img src={imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} at {new Date(time).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
