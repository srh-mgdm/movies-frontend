import styles from '../styles/Movie.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Movie() {
    const stars=[];
    for(let i=0; i<10; i++){
        stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
    return (
        <div className={styles.card}>
        <img className={styles.poster} src='./poster.jpg' alt='Poster'/>
        <p className={styles.name}>Name</p>
        <p className={styles.description}>Description</p>
        <p className={styles.vote}>{stars} (Vote count)</p>
      </div>
    )
}

export default Movie;