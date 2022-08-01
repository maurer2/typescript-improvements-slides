import styles from '../styles/Home.module.css';

import ResultsList from '../components/results-list';
import StatisticsToggle from '../components/statistics-toggle';

function Home() {
  console.log('home');

  return (
    <div className={styles.container}>
      <StatisticsToggle />
      <ResultsList />
    </div>
  );
}

export default Home;
