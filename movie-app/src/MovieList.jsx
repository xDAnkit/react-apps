import React, { useContext, useEffect, useState } from "react";
import { Context } from "./context/Context";
import "./movieLIst.css";
export default function MovieList() {
  const [movie, setMovie] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=23b1be9f&s=Batman")
      .then((response) => response.json())
      .then((data) => {
        const { Search } = data;
        setMovie(Search);
      });
    setFavourite(JSON.parse(localStorage.getItem("fev")));
  }, []);
  const setFev = (id) => {
    if (localStorage.getItem("fev")) {
      const val = JSON.parse(localStorage.getItem("fev"));
      console.log(
        val.filter((v) => {
          if (v == id) {
            console.log(v);
            return localStorage.setItem(
              "fev",
              JSON.stringify(val.splice(val.indexOf(id) - 1, 1))
            );
          } else {
            val.push(id);
            return localStorage.setItem("fev", JSON.stringify(val));
          }
        })
      );
    } else {
      localStorage.setItem("fev", JSON.stringify([id]));
    }
  };

  console.log("line36", context);

  return (
    <>
      {/* {(document.body.style.background = context.theme.background)}

      {console.log("Lin39", favourite.includes(""))} */}
      <div className="container">
        {movie.map((item) => {
          return (
            <div>
              <h6 style={{ color: context.theme.color }}>{item.Title}</h6>
              <img src={item.Poster} width="100px" />
              <br />
              {favourite.includes(item.imdbID) ? (
                <i
                  className="fa fa-heart-o"
                  style={{ color: "red" }}
                  onClick={() => {
                    setFev(item.imdbID);
                  }}
                ></i>
              ) : (
                <i
                  className="fa fa-heart-o"
                  onClick={() => {
                    setFev(item.imdbID);
                  }}
                ></i>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
