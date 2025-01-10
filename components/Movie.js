import styles from '../styles/Movie.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Movie(props) {
    console.log(props)
    const stars=[];
    for (let i = 0; i < 10; i++) {
        if (i < props.voteAverage-1) {
          stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{color:"#f1c40f"}} />);
        } else {
          stars.push(<FontAwesomeIcon key={i} icon={faStar}  />);
        }
        
      }
    
    return (
        <div className={styles.card}>
        <img className={styles.poster} src={props.poster} alt={props.name}/>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.vote}>{stars} ({props.voteCount})</p>
      </div>
    )
}

export default Movie;