/* Componenet */
import MoviesItems from "./MoviesItems";
/* Styled-Componenet */
import {Wrapper, SearchBar} from '../Styles'
/* Library */
import { useState } from "react";

const MoviesList = (props) => {
    const [quary, setQuary] = useState("");
    return (
        <Wrapper>
            <SearchBar
                placeholder="Search for your Movie Title"
                onChange={(event) => setQuary(event.target.value)}
            />
            {props.movies
            .filter(movie => movie.title.toLowerCase().includes(quary.toLowerCase()))
            .map(movie => <MoviesItems movie={movie} />)}
        </Wrapper>
        
    )
}

export default MoviesList;