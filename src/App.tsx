import styles from './App.module.scss';
import { WorkInProgress } from './app/components/WorkInProgress';

function App() {
  return (
    <div className={styles.Container}>
      <WorkInProgress />
    </div>
  );
}

export default App;
