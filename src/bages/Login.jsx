import React, { useState } from 'react';
import "../Style/Login.css";

const Login = () => {

  const [isRegister, setIsRegister] = useState(false);

  return (
    <section className='login d-flex'>

      {/* LEFT */}
      <div className='logLeft'>

        <h1>
          Smart Shop
        </h1>

        {!isRegister ? (

          /* ================= LOGIN ================= */

          <>
            <h5>
              تسجيل الدخول
            </h5>

            <p>
              تسجيل الدخول للمتابعة في موقعنا
            </p>

            <div className='logForm'>
              <input
                type="email"
                placeholder='البريد الالكتروني'
              />

              <i className="fa-regular fa-envelope"></i>
            </div>

            <div className='logForm'>
              <input
                type="password"
                placeholder='كلمة المرور'
              />

              <i className="fa-solid fa-lock"></i>
            </div>

            <div className='logForm loginButton'>

              <button>
                تسجيل الدخول
              </button>

              <p>
                هل نسيت كلمة المرور؟
              </p>

            </div>

            <h5>
              أو سجل الدخول عبر:
            </h5>

            <div className='logIcon'>

              <i className="fa-brands fa-linkedin-in"></i>

              <i className="fa-brands fa-pinterest"></i>

              <i className="fa-brands fa-facebook-f"></i>

              <i className="fa-brands fa-twitter"></i>

            </div>
          </>

        ) : (

          /* ================= REGISTER ================= */

          <>
            <h5>
              إنشاء حساب
            </h5>

            <p>
              أنشئ حسابك الآن واستمتع بالتسوق معنا
            </p>

            <div className='logForm'>

              <input
                type="text"
                placeholder='الاسم'
              />

              <i className="fa-regular fa-user"></i>

            </div>

            <div className='logForm'>

              <input
                type="email"
                placeholder='البريد الالكتروني'
              />

              <i className="fa-regular fa-envelope"></i>

            </div>

            <div className='logForm'>

              <input
                type="password"
                placeholder='كلمة المرور'
              />

              <i className="fa-solid fa-lock"></i>

            </div>

            <div className='logForm loginButton'>

              <button>
                إنشاء حساب
              </button>

            </div>

          </>

        )}

      </div>


      {/* RIGHT */}
      <div className='logRite'>

        <button
          className={`nav_link ${!isRegister ? "active" : ""}`}
          onClick={() => setIsRegister(false)}
        >
          تسجيل الدخول
        </button>

        <button
          className={`nav_link ${isRegister ? "active" : ""}`}
          onClick={() => setIsRegister(true)}
        >
          إنشاء حساب
        </button>

      </div>

    </section>
  );
};

export default Login;