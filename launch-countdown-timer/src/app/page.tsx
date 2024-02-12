
import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import '../styles/main.scss'

const target = '2024-02-12T23:00:00'
const timerLabels = ['days', 'hours', 'minutes', 'seconds']

export default function Home() { 

  return (
    <main className="container">
      <section>
          <h1>we&apos;re launching soon</h1>
          <CountdownTimer targetDate={target} labels={timerLabels}/>
      </section>
    </main>
  );
}