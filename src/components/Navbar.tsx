import styles from './Navbar.module.css'

type Card = {
    id: number;
    titulo: string;
    category: string;
}

type NavbarProps = {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedCategory: string;
    onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    allCards: Card[];
    onPlay: () => void;
}

function Navbar(props: NavbarProps){
    const{
        searchTerm,
        onSearchChange,
        selectedCategory,
        onCategoryChange,
        allCards,
        onPlay,
    } = props
    const uniqueCategories = Array.from(new Set(allCards.map((card) => card.category)));
    
    return(
        <header>
            <div className={styles.container}>
                <a href="">
                    <h2 className={styles.title}>Streaming InfoReact</h2>
                </a>
                <div className={styles.inputContainer}>
                    <input 
                        className={styles.inputItem} 
                        type="text" 
                        placeholder='Buscar por título'
                        value={searchTerm}
                        onChange={onSearchChange}
                    />
                    {searchTerm && (
                        <ul className={styles.predictiveList}>
                            {allCards
                                .filter((card) => (
                                    card.titulo.toLowerCase().startsWith(searchTerm)
                                )
                            ).map((card) => (
                                <li key={card.id} className={styles.predictiveItem} onClick={onPlay}>
                                    {card.titulo}
                                </li>
                            ))}
                        </ul>
                    )}
                    <select 
                        className={styles.selectItem}
                        value={selectedCategory}
                        onChange={onCategoryChange}>
                        <option className={styles.selectOption} value="">Todas</option>
                        {uniqueCategories.map((category) =>(
                            <option 
                                className={styles.selectOption}
                                key={category}
                                value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <button className={styles.buttonSearch}>🔍</button>
                </div>
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