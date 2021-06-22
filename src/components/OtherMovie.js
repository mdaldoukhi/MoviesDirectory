import { Link } from "react-router-dom";
import {OtherMovies} from '../Styles'
import "bootstrap/dist/css/bootstrap.min.css";

const OtherMovie = (props) => {
    return (
        <div className="col-md-4">
            <Link to={`/movies/${props.movie.slug}`}>
                <img src={props.movie.poster} className="rounded " alt="..." />
            </Link>
        </div>
    )
}
export default OtherMovie;