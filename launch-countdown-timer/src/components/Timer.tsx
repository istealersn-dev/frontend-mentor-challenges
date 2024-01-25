import './timer.scss'

export const TimerI = () => {

    return (
        <section>
            <h1>we&apos;re launching soon</h1>
            <div className='timer'>
                <div className='timer__card'>
                    <div className='timer__card-visual'>
                        <div className='timer__card-elements'>
                        <div className='absolute'>
                            <div></div>
                            <div></div>
                        </div>
                        <span className='timer__card-num'>08</span>
                        </div>
                    </div>
                    <span className='timer__card-val'>days</span>
                </div>
                <div className='timer__card'> 
                    <span className=''>23</span>
                    <span className='timer__card-val'>hours</span>
                </div>
                <div className='timer__card'>
                    <span className=''>55</span>
                    <span className='timer__card-val'>minutes</span>
                </div>
                <div className='timer__card'>
                    <span className=''>41</span>
                    <span className='timer__card-val'>seconds</span>
                </div>
            </div>
        </section>
    )
}