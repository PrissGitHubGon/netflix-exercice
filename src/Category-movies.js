import "./App.css";
import movies from "./movie.json";

const Category = () => {
  <div className="flex-box">
    {movies.map((movie, index) => {
      return (
        <div key={index}>
          <h2>{movie.category}</h2>
          <div className="container-img">
            {" "}
            {movie.images.map((image, index) => {
              console.log(image);
              return <img key={index} src={image} alt="" />;
            })}
          </div>
        </div>
      );
    })}{" "}
  </div>;
};

export default Category;
