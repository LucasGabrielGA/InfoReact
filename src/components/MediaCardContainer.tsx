import { type ReactNode } from "react";
import styles from './MediaCardContainer.module.css'

type MediaCardContainerProps = {
    title: string
    description: string
    children: ReactNode;
};

function MediaCardContainer(props: MediaCardContainerProps){
    const {title, description, children} = props;
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p>{description}</p>
            <div className={styles.mediaCardContainer}>{children}</div>
        </section>
    );
}

export default MediaCardContainer;