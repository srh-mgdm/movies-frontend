import styles from '../styles/Home.module.css';
import Movie from './Movie'
import 'antd/dist/antd.css';
import { Button, Popover } from 'antd';


function Home() {
  const moviesData = [
    { title: 'Forrest Gump', poster: 'forrestgump.jpg', voteAverage: 9.2, voteCount: 22_705, overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case.' },
    { title: 'The Dark Knight', poster: 'thedarkknight.jpg', voteAverage: 8.5, voteCount: 27_547, overview: 'Batman raises the stakes in his war on crime and sets out to dismantle the remaining criminal organizations that plague the streets.' },
    { title: 'Your name', poster: 'yourname.jpg', voteAverage: 8.5, voteCount: 8_691, overview: 'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places.' },
    { title: 'Iron Man', poster: 'ironman.jpg', voteAverage: 7.6, voteCount: 22_7726, overview: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.' },
    { title: 'Inception', poster: 'inception.jpg', voteAverage: 8.4, voteCount: 31_546, overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life.' },
  ];
  const content = (
    <div>
      <p>Movie 1</p>
      <p>Movie 2</p>
      <p>Movie 3</p>
      <p>Movie 4</p>
    </div>
  );
  const movies = [];
  moviesData.map((movie, i) => {
    movies.push(
      <Movie
        key={i}
        name={movie.title}
        poster={movie.poster}
        voteAverage={movie.voteAverage}
        voteCount={movie.voteCount}
        description={movie.overview}
      />
    );
  })

 
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
