import styles from './index.css';
import { Link } from 'react-router-dom'
export default function () {
  return (
    <div className={styles.normal}>
      <Link to="/class">来了到底</Link>
    </div>
  );
}
