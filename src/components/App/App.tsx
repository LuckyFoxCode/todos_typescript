import { Sidebar } from '..';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
    </div>
  );
};