import styles from '@/styles/Header.module.css'
import Checkbox from './Checkbox'
// import { useState } from 'react'

export default function Header() {
    // const [refresh, setRefresh] = useState(false)

    // const reload = () =>{
    //     setRefresh(!refresh)
    // }

    return (
        <header className={styles.header}>
            <div  className={styles.logo} >
                Thai<span className={styles.small}>s</span> Who Code
            </div>
            <Checkbox />
        </header>
    )
}