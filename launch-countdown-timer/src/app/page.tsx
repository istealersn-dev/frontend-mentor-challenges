
import { CountdownTimer } from '@/components/CountdownTimer';
import '../styles/main.scss'

const target = '2024-02-20T23:00:00'
const timerLabels = ['days', 'hours', 'minutes', 'seconds']

export default function Home() { 

  return (
    <main className="container">
      <CountdownTimer targetDate={target} labels={timerLabels}/>
    </main>
  );
}