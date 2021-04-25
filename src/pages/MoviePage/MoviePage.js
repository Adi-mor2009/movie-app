import { useState, useEffect } from 'react';
import axios from "axios";
import { CardDeck, Container } from "react-bootstrap";
import SearchBox from "../../components/SearchBox/SearchBox";
import MovieCard from '../../components/Movie/MovieCard';
import MovieModel from '../../model/MovieModel';

function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [searchMovieText, setSearchMovieText] = useState("");
    const [movieResults, setMovieResults] = useState([]);

    function handleMovieSearchChange(newSearchText) {
        setSearchMovieText(newSearchText);

        if (newSearchText) {
            // Here we should call TMDB
            const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=c87aac96194f8ffb8edc34a066fa92de&query=" + newSearchText;
            axios.get(searchURL).then(response => {
                setMovieResults(response.data.results);
            });
        } else {
            setMovieResults([]);
        }
    }

    function addMovie(resultIndex) {
        //Get more info of actor
        const movieId = movieResults[resultIndex].id;
        const getURL = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=c87aac96194f8ffb8edc34a066fa92de&language=en-US";
        axios.get(getURL).then(response => {
            const movieToAdd = response.data;
            // Adding the movie to the view
            setMovies(movies.concat(new MovieModel(movieToAdd.title, movieToAdd.runtime, "bla bla", movieToAdd.vote_average, movieToAdd.overview, "https://image.tmdb.org/t/p/w500" + movieToAdd.poster_path, movieToAdd.homepage)));

            // Cleaning up the SearchBox
            setMovieResults([]);
            setSearchMovieText("");
        });
    }

    return (
        <div className="p-movie">
            <Container>
                <SearchBox
                    placeholder="Search movies..."
                    searchText={searchMovieText}
                    onSearchChange={handleMovieSearchChange}
                    results={movieResults.map(result => result.title)}
                    onResultSelected={addMovie} />
                <CardDeck>
                    {movies ? movies.map(movie => <MovieCard movie={movie} />) : "Loading ..."}
                </CardDeck>
            </Container>
        </div>
    )
}

export default MoviePage;