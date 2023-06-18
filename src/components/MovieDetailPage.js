import React, { useState } from "react";
import "../styles/moviedetailstyles.css";
import LimitModal from "./LimitModal";
import { FaPlus, FaMinus, FaStar } from 'react-icons/fa';
import ReviewComponent from "./ReviewComponent";

function MovieDetailPage(props) {

  const initialData = Object.freeze({
    title: "Spider-Man",
    overallRating: "4.5",
    rating: "PG",
    moviePoster: "https://tinyurl.com/5enkzh9f",
    releaseDate: "12/1/2017",
    language: "English",
    runtime: "1h 57m",
    producer: ["Will Allegra", "Avi Arad", "Brian Michael Bendis"],
    genre: ["action", "adventure", "fantasy"],
    plot: 'Spider-Man" centers on student Peter Parker (Tobey Maguire) who, after being bitten by a genetically-altered spider, gains superhuman strength and the spider-like ability to cling to any surface. He vows to use his abilities to fight crime, coming to understand the words of his beloved Uncle Ben: "With great power comes great responsibility.',
    Director: "Sam Raimi",
    Box_office_collection: "USD 120.5 million",
    cast: [
      {
        castName: "Tobey Maguire",
        castUrl: "https://tinyurl.com/3tcde3ud",
        role: "spiderman"
      },
      {
        castName: "Andrew Russell Garfield",
        castUrl: "https://tinyurl.com/2a56d4st",
        role: "spiderman"
      },
      {
        castName: "Tom Holland",
        castUrl: "https://tinyurl.com/3jjak759",
        role: "spiderman"
      },
    ],
    movie_type: "Hollywood",
  });

  const [selected, setSelected] = useState(null);
  const [moviedata, changeMovieData] = useState(initialData);
  const [model, setModel] = useState(false);
  const [limit, setLimit] = useState(0);
  const MyBackgroundImage = moviedata.moviePoster;
  const toggle = (i) => {
    if (selected === i) {
      console.log(selected);
      return setSelected(null);
    }
    console.log(selected);
    setSelected(i);
  };

  const handleChange = (e) => {
    setLimit({ ...limit, [e.target.name]: e.target.value.trim() });
    console.log(limit);

  }

  const saveLimit = (e) => {
    e.preventDefault();
    console.log(limit);
  }
  const handleUpdate = () => {
    // function to control update detail button
  };
  const handleLimitReview = () => {
    // function to control update detail button
    setModel(true);
  };

  return (
    <div
      className="flex-fill"
      style={{
        color: "#ffffff",
        fontSize: "20px",
        fontWeight: "500",
        backgroundColor: "#363636",
        overflow: "hidden"
      }}
    >
      <div className="box-main" style={{ margin: "20px", }} >
        <div style={{
          backgroundImage: `url(${moviedata.moviePoster})`,
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          borderRadius: "5px",
          padding: "20px",
          position: "relative"
        }}>
          <div className=" row detail-box">
            <div className="row" style={{ fontSize: "35px", padding: "10px" }}>
              <div className="col-sm-5" >
                {moviedata.title}</div>
              <div className="col-sm-4" ><span><FaStar /></span>
                {" " + moviedata.overallRating}/5
              </div>
            </div>
            <div className="col-sm-3">
              <span>Runtime</span><p>{moviedata.runtime}</p>
            </div>
            <div className="col-sm-2">
              <span>Rating</span> <p>{moviedata.rating}</p></div>
            <div className="col-sm-5">
              <span>Box-office Collection</span> <p>{moviedata.Box_office_collection}</p>
            </div>
          </div>
        </div>
        <div className="row-padding" style={{ textAlign: "left" }}>
          <span>Plot Summary:</span>
          {" " + moviedata.plot}
        </div>
      </div>

      <div className="box" style={{textAlign:"left"}}>
        <div className="row " >
          <div className="col-sm-2"><span>ReleaseDate:</span></div>
          <div className="col-sm-2">{moviedata.releaseDate}</div>
        </div>
        <div className=" row  ">
          <div className="col-sm-2">
            <span>Language:</span>
          </div>
          <div className="col-sm-2">{moviedata.language}</div>
        </div>
        <div className=" row">
          <div className="col-sm-2">
            <span>Type:</span>
          </div>
          <div className="col-sm-2">{moviedata.movie_type}</div>
        </div>
        <div className=" row">
          <div className="col-sm-2">
            <span>Director:</span>
          </div>
          <div className="col-sm-2">{moviedata.Director}</div>
        </div>
        <div className=" row ">
          <div className="col-sm-2">
            <span>Producer:</span>
          </div>
          {moviedata.producer.map((producer, index) => (
            <div key={index} className="col-sm-2">{producer}</div>
          ))}
        </div>

        <div className=" row ">
          <div className="col-sm-2">
            <span>Genre:</span>
          </div>
          {moviedata.genre.map((genre, index) => (
            <div key={index} className="col-sm-2">{genre}</div>
          ))}
        </div>
      </div>
      <div className="box" style={{ textAlign:"left"}}>
        <div>
          <div className="wrapper">
            <div className="accordian">
              <div>
                <div className="title" onClick={() => toggle(0)}>
                  <div className="col-sm-2 ">
                    <span>Cast & Crew:</span>
                  </div>
                  <span>{selected === 0 ? <FaMinus /> : <FaPlus />}</span>
                </div>

                <div
                  className={selected === 0 ? "content show" : "content"} style={{ paddingTop: '10px' }}
                >
                  {moviedata.cast.map((item, index) => (
                    <div className="row" key={index} style={{ paddingTop: "10px" }}>
                      <div className="col">
                        <img
                          src={item.castUrl}
                          className="card-img-top"
                          alt={item.castName}
                          style={{ height: "200px", width: "200px" }}
                        />
                      </div>
                      <div className="col">
                        <span style={{ color: "#ffffff" }}>
                          {item.castName}
                        </span>
                      </div>
                      <div className="col">
                        <span style={{ color: "#ffffff" }}>
                          As
                        </span>
                      </div>
                      <div className="col">
                        <span style={{ color: "#ffffff" }}>
                          {item.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" row row-padding" >
        <div className="col">
          <button
            className="btn"
            variant="primary"
            type="Submit"
            style={{
              backgroundColor: "#FFA500",
              borderColor: "#FFA500",
              color: "black",
            }}
            onClick={() => handleUpdate()}
          >
            Update Details
          </button>
        </div>
        <div className="col">
          <button
            className="btn"
            variant="primary"
            type="Submit"
            style={{
              backgroundColor: "#FFA500",
              borderColor: "#FFA500",
              color: "black",
            }}
            onClick={() => handleLimitReview()}
          >
            Limit Reviews
          </button>
          <LimitModal model={model} setModel={setModel} handleChange={handleChange} saveLimit={saveLimit} />
        </div>

      </div>
      
      <div style={{textAlign:"left"}}>
      <span style={{margin:"20px",fontSize:"30px"}} >REVIEWS:</span>
        <ReviewComponent/>
      </div>

    </div>
  );
}

export default MovieDetailPage;
