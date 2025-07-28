import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <div>
          <h4>Plataforma</h4>
          <ul>
            <li>Acerca de</li>
            <li>Términos</li>
            <li>Privacidad</li>
            <li>Soporte</li>
          </ul>
        </div>
        <div>
          <h4>Redes</h4>
          <ul>
            <li>📘 Facebook</li>
            <li>🐦 Twitter</li>
            <li>📷 Instagram</li>
            <li>▶ YouTube</li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        © 2025 Streaming InfoReact. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;