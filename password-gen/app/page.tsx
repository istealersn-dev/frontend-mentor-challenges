import PwdGenForm from "@/components/PwdGenForm";
import styles from './assets/page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.heading}>Password Generator</h1>
        </div>
      <PwdGenForm />
    </main>
  )
}
