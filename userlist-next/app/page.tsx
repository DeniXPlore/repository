import Image from 'next/image'
import styles from './page.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     <h1> Hello World</h1>
    </main>
  )
}
