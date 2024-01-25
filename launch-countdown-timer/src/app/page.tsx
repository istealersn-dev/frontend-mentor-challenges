import { TimerI } from "@/components/Timer";
import Image from "next/image";
import '../styles/main.scss'

export default function Home() {
  return (
    <main className="container">
      <TimerI />
    </main>
  );
}
