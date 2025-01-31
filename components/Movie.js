import styles from '../styles/Movie.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faVideo } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
function Movie(props) {

  const [personalNote, setPersonalNote] = useState(0);
  const [watchCount, setWatchCount] = useState(0);
  console.log(props)

    const stars=[];
    for (let i = 0; i < 10; i++) {
        if (i < props.voteAverage-1) {
          stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{color:"#f1c40f"}} />);
        } else {
          stars.push(<FontAwesomeIcon key={i} icon={faStar}  />);
        }
        
      }
    const personalNotes=[];
    for (let i = 0; i < 10; i++) {
      let style={}
        if(i < personalNote){
          style={color:'#2196f3'}
        }
        personalNotes.push(<FontAwesomeIcon key={i} icon={faStar} onClick={()=>setPersonalNote(i+1)} style={style}/>);
    }
    const HandleWatchMovie=()=>{
      setWatchCount(watchCount+1)
    }
   
    
    return (
        <div className={styles.card}>
        <img className={styles.poster} src={props.poster} alt={props.name}/>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.vote}>{stars} ({props.voteCount})</p>
        <p className={styles.vote}>{personalNotes} ({personalNote})</p>
        <p className={styles.vote}>
          <FontAwesomeIcon
           icon={faVideo}
           onClick={HandleWatchMovie}
           style={ {
            color: watchCount > 0 ? '#e74c3c' : '#000', 
          }}
           />
          ({watchCount})
        </p>
        <p className={styles.vote}>
          <FontAwesomeIcon
           icon={faHeart}
           onClick={() =>props.updateLikedMovies(props.name)}
           style={ {
            color: props.isLiked ? '#e74c3c' : '#000', 
          }}
           />
         
        </p>
       
      </div>
    )
}

export default Movie;