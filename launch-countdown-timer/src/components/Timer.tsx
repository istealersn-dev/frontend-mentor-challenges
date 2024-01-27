import './timer.scss'

export const TimerI = () => {

    return (
        <section>
            <h1>we&apos;re launching soon</h1>
            <div className='timer'>
                <div className='timer__card'>
                    <div className='timer__card-visual'>
                        <div className='timer__card-elements'>
                            <div className='line'>                        </div>
                            <div className='circle'></div>
                        <span className='timer__card-num'>08</span>
                    </div>
                    </div>
                    <p  className='timer__card-val'>days</p>
                </div>
                <div className='timer__card'>
                    <div className='timer__card-visual'>
                        <div className='timer__card-elements'>
                            <div className='line'>                        </div>
                            <div className='circle'></div>
                        <span className='timer__card-num'>23</span>
                    </div>
                    </div>
                    <p  className='timer__card-val'>hours</p>
                </div>
                <div className='timer__card'>
                    <div className='timer__card-visual'>
                        <div className='timer__card-elements'>
                            <div className='line'>                        </div>
                            <div className='circle'></div>
                        <span className='timer__card-num'>55</span>
                    </div>
                    </div>
                    <p  className='timer__card-val'>minutes</p>
                </div>
                <div className='timer__card'>
                    <div className='timer__card-visual'>
                        <div className='timer__card-elements'>
                            <div className='line'>                        </div>
                            <div className='circle'></div>
                        <span className='timer__card-num'>41</span>
                    </div>
                    </div>
                    <p  className='timer__card-val'>seconds</p>
                </div>
            </div>
        </section>
    )
}