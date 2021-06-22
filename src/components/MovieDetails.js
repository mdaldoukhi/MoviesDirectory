/* Bootstrap Styles */
import "bootstrap/dist/css/bootstrap.min.css";
/* Libraries */
import { useParams, Link } from "react-router-dom"
/* Styled-Componenets */
import { Details, MovieFooter, Polt, Poster, MovieTitle, OtherMovies } from "../Styles";
/* Componenets */
import OtherMovie from "./OtherMovie";

const MovieDetails = (props) => {
    /* below declears for find the movie depened on slug and filter for all movie excpet the one that find  */
    const productSlug = useParams().movieSlug
    const movieCheck = props.movies.find(movie => movie.slug === productSlug);
    const otherMovie = props.movies.filter(movie => movie.slug !== productSlug)
    return (
        <div>
            <Details className="card mb-3">
                <div className="row g-0 d-flex align-items-center">
                    <Poster className="col-md-4">
                        <img src={movieCheck.poster} alt={movieCheck.title} />
                    </Poster>
                    <div className="col-md-8 ">
                        <div className="card-body d-flex flex-column">
                            <MovieTitle className="card-title mx-auto mb-5">{movieCheck.title}</MovieTitle>
                            <Polt className="card-text">{movieCheck.plot}</Polt>
                            <MovieFooter>
                                <p className="card-text"><small className="text-muted">Released: {movieCheck.released}</small></p>
                                <p className="card-text"><small className="text-muted">Genre: {movieCheck.genre}</small></p>
                                <p className="card-text"><small className="text-muted">Runtime: {movieCheck.runtime}</small></p>
                            </MovieFooter>
                            <Link to='/movies'><button type="button" className="btn btn-dark">Back</button></Link>
                        </div>
                    </div>
                </div>
            </Details>
            <OtherMovies>
                {otherMovie.map(movie => <OtherMovie movie={movie} />)}
            </OtherMovies>
        </div>
    )
}

export default MovieDetails;