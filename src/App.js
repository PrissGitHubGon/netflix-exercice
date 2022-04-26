import "./App.css";

function App() {
  const axios = require("axios");

  axios
    .get(
      "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1643648266/react-new-exercices/netflix2022/movies_rnexgr.json"
    )
    .then((response) => {
      let movies = response.data;
      return (
        <div>
          {" "}
          {movies.map((movie, index) => {
            console.log(movie.category);

            return <div key={index}> {movie.category} </div>;
          })}{" "}
        </div>
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

export default App;
