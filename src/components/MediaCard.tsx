import styles from './MediaCard.module.css';

type MediaCardProps = {
    src: string;
    title: string;
    category: string;
    duration: string;
    onPlay: () => void;
};


function MediaCard(props: MediaCardProps){

    const{
        src,
        title,
        category,
        duration,
        onPlay,
    } = props;

    return(
        <article className={styles.container}>
            <a onClick={onPlay} href="#MediaLink"><img className={styles.img} src={src} /></a>
            <div className={styles.content}>
                <a onClick={onPlay} href="#MediaTitle"><h2 className={styles.title}>{title}</h2></a>
                <a href="#Category"><p className={styles.category}>{category}</p></a>
                <p className={styles.duration}>⏱ {duration}</p>
                <button onClick={onPlay}>▶ Reproducir</button>
            </div>
        </article>
    );
}

export default MediaCard;