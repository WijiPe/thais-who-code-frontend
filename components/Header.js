import styles from '@/styles/Header.module.css'
import Checkbox from './Checkbox'
import Box from '@mui/material/Box';

export default function Header() {

    return (
        <header className={styles.header}>
            <div  className={styles.logo} >
                Thai<span className={styles.small}>s</span> Who Code
            </div>
            <Box 
                sx={{
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 700,
                    overflow: "hidden",
                    overflowY: "scroll",
                }}>
                <Checkbox />
            </Box>
            
        </header>
    )
}