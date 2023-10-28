import styles from './page.module.css'
import { EventsSection } from '@/components/EventsSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <EventsSection></EventsSection>
    </main>
  )
}
