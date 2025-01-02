import styles from '../styles/Movie.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Movie() {
    const stars=[];
    for(let i=0; i<10; i++){
        stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
    return (
        <div className={styles.container_movie}>
        <img className={styles.movie_poster} src='./poster.jpg' alt='Poster'/>
        <p>Name</p>
        <p>Description</p>
        <div className={styles.movie_rating}>
          {stars} (Vote count)
        </div>
      </div>
    )
}

export default Movie;