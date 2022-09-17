import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ mov }) => {
  return (
    <Card style={{ width: "19rem", height: "22rem", border: "none" }} className="mb-3 px-0">
      <Link to={`/movie/${mov.id}`}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
          style={{ height: "100%", borderRadius: "5px", border: "none" }}
        />
        <div className="info_card">
          <p>اسم الفيلم : {mov.title}</p>
          <p>تاريخ الاصدار : {mov.release_date}</p>
          <p>عدد المقيمين: {mov.vote_count}</p>
          <p>التقييم : {mov.vote_average}</p>
        </div>
      </Link>
    </Card>
  );
};
export default MovieCard;
