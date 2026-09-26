import React, { useState ,useEffect  } from "react";
import iMGtimer1 from '../assets/img/prodact/timerImg.png';
import girl from '../assets/img/prodact/pro4.png'

const Timer = () => {

  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const endOffer = new Date();
  endOffer.setDate(endOffer.getDate() + 50);
  useEffect(() => 
{
  const timer = setInterval(() => {
      const now = new Date();
      const difference = endOffer - now
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setDay(days)
      setHours(hours);
      setMinutes(minutes);
setSeconds(seconds);
    
  }, 1000);
    
}, []);



  return (
    <>
      <section className='timer_sec'>

        <div className='img1_timer'>
          <img src={iMGtimer1} alt="" />
        </div>

        <div className='text_timer'>
          <h4>
            اكبر خصم علي الاطلاق
          </h4>

          <h1>
            احدث ملابس الاطفال
          </h1>

          <div className="counter">

            <div className="counter-item">
              <h3>{day}</h3>
              <p>يوم</p>
            </div>

            <div className="counter-item">
              <h3>{hours}</h3>
              <p>ساعة</p>
            </div>

            <div className="counter-item">
              <h3>{minutes}</h3>
              <p>دقيقة</p>
            </div>

            <div className="counter-item">
              <h3>{seconds}</h3>
              <p>ثانية</p>
            </div>

          </div>

          <div className="mt-5">
            <button className="shop_timer">
              تسوق الان
            </button>
          </div>




        </div>
        <div className="timer-girl">
        <img src={girl} alt="girl" />
      </div>

      </section>
    </>
  )
}

export default Timer;