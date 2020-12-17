import React from "react";

export default function CardUi(props) {
  return (
    <React.Fragment>
      {props.movies.map((item) => (
        <div className="col-md-4" key={item.imdbID}>
          <div className="card text-center">
            <div className="overflow">
              <img
                src={
                  item.Poster !== "N/A"
                    ? item.Poster
                    : "/picture-unavailable-icon-1.jpg"
                }
                alt="movie"
                className="card-img-top"
              />
              <div className="card-body text-dark">
                <h4 className="card-title pull-right">{item.Title}</h4>
                <h4 className="card-title pull-right">{item.Year}</h4>
                <h4 className="card-title pull-right">{item.imdbID}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
