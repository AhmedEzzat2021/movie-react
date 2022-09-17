import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const DetailsMovie = () => {
  const [movie, setMovie] = useState([]);

  const param = useParams();
  console.log(param.id);

  const getMovieDetails = async () => {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=3d19add6a06a9c36a940b0205563cf33&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div className="container">
      <Row className="justify-content-center colorContainer p-0">
        <Col md="12" xs="12" sm="12" className="p-0">
          <div className="details_movie d-flex align-items-center">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="done" className="img_details" />
            <div className="info_details justify-content-center text-center mx-auto ">
              <p className="text_det border-bottom p-2">اسم الفيلم :{movie.title} </p>
              <p className="text_det border-bottom p-2">تاريخ الاصدار : {movie.release_date}</p>
              <p className="text_det border-bottom p-2">عدد المقيمين: {movie.vote_count}</p>
              <p className="text_det border-bottom p-2">التقييم : {movie.vote_average}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="colorContainer p-3 mt-3">
        <h2 className="mb-5">القصة: </h2>
        <p className="mb-3">{movie.overview}</p>
      </Row>
      <div className="d-flex justify-content-center mt-3 p-2">
        <a href="/movie-react">
          <button className="btn btn-primary mx-2">عودة للرئيسية</button>
        </a>
        <a href={movie.homepage}>
          <button className="btn btn-primary mx-2">مشاهدة الفيلم</button>
        </a>
      </div>
    </div>
  );
};
