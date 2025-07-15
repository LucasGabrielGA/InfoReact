import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>La página que buscás no existe o fue movida.</p>
    </div>
  );
}

export default NotFoundPage;