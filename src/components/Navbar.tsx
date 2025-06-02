import styles from './Navbar.module.css'

function Navbar(){
    return(
        <header>
            <div className={styles.container}>
                <a href="">
                    <h2 className={styles.title}>Streaming InfoReact</h2>
                </a>
                <nav className={styles.navContainer}>
                    <ul className={styles.ulItems}>
                        <li className={styles.listItem}>
                            <a className={styles.aItem} href="#Inicio">Inicio</a>
                        </li>
                        <li className={styles.listItem}>
                            <a className={styles.aItem} href="#Series">Series</a>
                        </li>
                        <li className={styles.listItem}>
                            <a className={styles.aItem} href="#Películas">Películas</a>
                        </li>
                        <li className={styles.listItem}>
                            <a className={styles.aItem} href="#MiStreaming">Mi Streaming</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;