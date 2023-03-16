import PropTypes from "prop-types";
import styles from "./DetailMovie.css";

function Movie({id, sTitle, title, backImg, rating, runtime, genres}) {
    return (
        <div id={id} className="container">
            <div className="imgContainer">
                <img src={backImg} alt={sTitle}/>
            </div>
            <div className={styles.content}>
                <ul>
                    <li className="title">{title}</li>
                    <li className="rating">rating : {rating}/10</li>
                    <li className="runtime">running time : {runtime}m</li>
                    <li className="tag">Tag<br/><br/>{genres ? genres.map((g) => <span key={g}>『{g}』</span>) : null}
                    </li>
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    sTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    backImg: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;