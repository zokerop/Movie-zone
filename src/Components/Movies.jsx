import React, { useState } from "react";
import { movies } from "./data";
const Movies = () => {
  const [movieList, setMovie] = useState(movies);

  const filterCategory = (cat)=>{
    setMovie(movies.filter((data)=>data.category == cat))
  }
  return (
    <>
    <div className="my-3" style={{width:'auto', marginLeft:'30%'}}>
      <button type="button" onClick={()=>setMovie(movies)} className="btn btn-outline-primary mx-3">
        All
      </button>
      <button type="button" onClick={()=>filterCategory('Action')} className="btn btn-outline-secondary" mx-3>
        Action
      </button>
      <button type="button" onClick={()=>filterCategory('Thriller')} className="btn btn-outline-success mx-3">
        Thriller
      </button>
      <button type="button" onClick={()=>filterCategory('Animation')} className="btn btn-outline-danger mx-3">
        Animation
      </button>
      <button type="button" onClick={()=>filterCategory('Horror')} className="btn btn-outline-warning mx-3">
        Horror
      </button>
      <button type="button" onClick={()=>filterCategory('Drama')} className="btn btn-outline-info mx-3">
        Drama
      </button>
      <button type="button" onClick={()=>filterCategory('Sci-Fi')} className="btn btn-outline-light mx-3">
        Sci-fi
      </button>
     
</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          textAlign: "center",
          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "200px" }}>
            <div style={{ padding: "10px" }} className="hoverE">
              <img
                src={data.poster_path}
                alt=""
                style={{ width: "200px", borderRadius: "10px" }}
              />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
