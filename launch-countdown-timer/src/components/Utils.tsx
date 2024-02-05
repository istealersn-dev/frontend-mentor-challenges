export const calculateTimeLeft = (targetDate: Date) => {
    const difference = +targetDate - +new Date()

    let timeLeft = [0, 0, 0, 0] // days, hours, minutes, seconds

    if (difference > 0) {
        timeLeft = [
            Math.floor(difference / (1000 * 60 * 60 * 24)),
            Math.floor(difference / (1000 * 60 * 60) % 24),
            Math.floor(difference / (1000 * 60) % 60),
            Math.floor(difference / 1000) % 60
        ]
    }

    return timeLeft
}