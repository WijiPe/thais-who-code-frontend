import styles from '@/styles/Header.module.css'
import Checkbox from './Checkbox'

export default function Header() {

    return (
        <header className={styles.header}>
            <div  className={styles.logo} >
                Thai<span className={styles.small}>s</span> Who Code
            </div>
            <Checkbox />
        </header>
    )
}