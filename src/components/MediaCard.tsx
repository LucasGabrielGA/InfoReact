import { useState } from 'react';
import styles from './MediaCard.module.css';

type MediaCardProps = {
    src: string;
    title: string;
    category: string;
    duration: string;
};

function MediaCard(props: MediaCardProps){
    const{
        src,
        title,
        category,
        duration,
    } = props;

    return(
        <article className={styles.container}>
            <a href="#MediaLink"><img className={styles.img} src={src} /></a>
            <div className={styles.content}>
                <a href="#MediaTitle"><h2 className={styles.title}>{title}</h2></a>
                <a href="#Category"><p className={styles.category}>{category}</p></a>
                <p className={styles.duration}>⏱ {duration}</p>
                <button>▶ Reproducir</button>
            </div>
        </article>
    );
}

export default MediaCard;