'use client'

import { useEffect, useState } from "react"
import "./CountdownTimer.scss";

interface CountdownTimerProps {
    targetDate: string // Format: 'YYYY-MM-DDTHH:mm:ss'
    labels: string[]
}

const calculateTimeLeft = (targetDate: Date): number[] => {
    const difference = targetDate.getTime() - new Date().getTime()

    if (difference <= 0 ) {
        return [0, 0, 0, 0]
    }

    const timeLeft = [
        Math.floor(difference / (1000 * 60 * 60 * 24)),
        Math.floor(difference / (1000 * 60 * 60) % 24),
        Math.floor(difference / (1000 * 60) % 60),
        Math.floor(difference / 1000) % 60
    ]

    return timeLeft
}

export const CountdownTimer = ({targetDate, labels}: CountdownTimerProps) => {
    const [timeLeft, setTimerLeft] = useState(calculateTimeLeft(new Date(targetDate)))
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {

        setHasMounted(true)

        if (hasMounted) {
            const interval = setInterval(() => {
                setTimerLeft(calculateTimeLeft(new Date(targetDate)))
            }, 1000)
            
            return () => clearInterval(interval)
        }

    }, [targetDate, hasMounted])

    if (!hasMounted) return <div>Loading....</div>

    return (
        <section>
          <h1>we&apos;re launching soon</h1>
          <div className="timer">
            {timeLeft.map((num, index) => (
              <div key={index} className="timer__card">
                <div className="timer__card-visual">
                <div className="timer__card-elements">              
                  <div className="line"></div>
                  <div className="circle"></div>
                  <span className="timer__card-num">{String(num).padStart(2, '0')}</span>              
                  </div>  
                </div>
                <p className="timer__card-val">{labels[index]}</p>
                </div>
            ))}
          </div>
        </section>
      );
}