
import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import '../styles/main.scss'

const today = new Date();
let target = new Date(today)
target.setDate(target.getDate() + 14)

const timerLabels = ['days', 'hours', 'minutes', 'seconds']

export default function Home() { 

  return (
    <main className="container">
      <section>
          <h1>we&apos;re launching soon</h1>
          <CountdownTimer targetDate={target.toISOString()} labels={timerLabels}/>
      </section>
    </main>
  );
}