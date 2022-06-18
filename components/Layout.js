import Header from "./Header"
import styles from "@/styles/Layout.module.css"
// import { useAppContext } from "../context/ContextObject";

export default function Layout({children}) {
    return (
        <div>
            <Header />
            
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}