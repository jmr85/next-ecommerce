import styles from "./main.module.scss"

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Nextjs</h1>
      <hr/>
      <p className={styles.text}>Bienvenidos al Ecommerce!</p>  
    </main>
  );
}
