import styles from '../styles/Home.module.css';
import Movie from './Movie'
import 'antd/dist/antd.css';
import { Button, Popover } from 'antd';


function Home() {
  const content = (
    <div>
      <p>Movie 1</p>
      <p>Movie 2</p>
      <p>Movie 3</p>
      <p>Movie 4</p>
    </div>
  );
  const movies=[];
  for(let i=0; i<10; i++){
    movies.push(<Movie key={i}/>)
  }

 
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="./logo.png" alt="Logo" className={styles.logo} />
          <img src="./logoletter.png" alt="Logo letter" className={styles.logoLetter} />
        </div>
       
        <Popover  placement="bottom" content={content} title="Liked movies">
            <Button className={styles.buttonPopover} >🤍 4 movie(s)</Button>
          </Popover>     
      </header>
      <div className={styles.title}>LAST RELEASES</div>
      <div className={styles.moviesContainer}>
        {movies}
      </div>
     
    </div>
  );
}

export default Home;
