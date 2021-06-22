/* Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.min.css";
/* Styled-Componenets */
import { Items } from '../Styles'
/* Global react */
import { Link } from 'react-router-dom'

const MoviesItems = (props) => {
    return (
        <Items className="card" >
            <Link to={`/movies/${props.movie.slug}`}>
                <img src={props.movie.poster} className="img-fluid" alt="..." />
            </Link>
            <div className="card-body">
                <h3>{props.movie.title}</h3>
                <p className="card-text">{props.movie.genre}</p>
                <p className="card-text"><small className="text-muted">Runtime: {props.movie.runtime}</small></p>
            </div>
        </Items>
    )
}
export default MoviesItems;