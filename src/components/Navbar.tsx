import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import { type NavbarProps } from '../types/componentsProps';
import { filterCards } from '../utils/filterCards';
import { useNavigate } from 'react-router-dom';
import { getCategoryWithEmoji } from '../utils/categoryEmojis';

function Navbar(props: NavbarProps){
    const{
        searchTerm,
        onSearchChange,
        selectedCategory,
        onCategoryChange,
        allCards,
    } = props
    const uniqueCategories = Array.from(new Set(allCards.map((card) => card.category).sort()));

    const navigate = useNavigate();
    const handleSearchButton = () =>{
        navigate(`/resultados?q=${encodeURIComponent(searchTerm)}&cat=${encodeURIComponent(selectedCategory)}`);
    }

    const [isFocused, setIsFocused] = useState(false);
    
    return(
        <header className={styles.headerElement}>
            <div className={styles.container}>
                <Link to={'/'}>
                    <h2 className={styles.title}>Streaming InfoReact</h2>
                </Link>
                <div className={styles.inputContainer}>
                    <input 
                        className={styles.inputItem} 
                        type="text" 
                        placeholder='Buscar por título'
                        value={searchTerm}
                        onChange={onSearchChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    {searchTerm && isFocused && (
                        <ul className={styles.predictiveList}>
                            {filterCards(allCards, searchTerm, selectedCategory).map((card) => (
                                <li
                                    key={card.id}
                                    className={styles.predictiveItem}
                                    onMouseDown={() => props.onNavigateToDetail(card.id)}
                                >
                                    {card.title}
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
                                {getCategoryWithEmoji(category)}
                            </option>
                        ))}
                    </select>
                    <button className={styles.buttonSearch} onClick={handleSearchButton}>🔍</button>
                </div>
                <nav className={styles.navContainer}>
                    <ul className={styles.ulItems}>
                        <li className={styles.listItem}>
                            <Link className={styles.aItem} to={'/'}>Inicio</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link className={styles.aItem} to={'/category/'}>Categorías</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link className={styles.aItem} to={'/favoritos'}>Mi Streaming</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;