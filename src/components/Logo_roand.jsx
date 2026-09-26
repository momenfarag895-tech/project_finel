import React from 'react'
import logo1 from '../assets/img/logo/logo1.png'
import logo2 from '../assets/img/logo/logo2.png'
import logo3 from '../assets/img/logo/logo3.png'
import logo4 from '../assets/img/logo/logo4.png'
import logo5 from '../assets/img/logo/logo5.png'
import single1 from '../assets/img/logo/single1.jpg'
import single2 from '../assets/img/logo/single2.jpg'
import single3 from '../assets/img/logo/single3.jpg'




const Logo_roand = () => {
  return (
    <>
    <section className='logo_sec' >
        <div className=' d-flex justify-content-center mt-5 '>
           <h1 className='text'>أحدث المنتجات</h1>
        </div>
         

         {/* logo */}
         <div className='div_Logo d-flex justify-content-center'>
            <div >
                <img className='logo' src={logo1} alt="" />

            </div>

              <div >
                <img className='logo' src={logo5} alt="" />

            </div>
            
              <div >
                <img className='logo' src={logo4} alt="" />

            </div>
            
              <div >
                <img className='logo' src={logo3} alt="" />

            </div>
            
              <div >
                <img className='logo' src={logo2} alt="" />

            </div>

              <div >
                <img className='logo' src={logo1} alt="" />

            </div>
              <div >
                <img className='logo' src={logo5} alt="" />

            </div>
            
            
            

         </div>
    </section>

  {/* singlProdact */}

<section className='singlProdact'>

    <div className="container">

        <div className="row g-4 align-items-center">

            {/* 1 */}

            <div className='singl_1 col-12 col-md-6 col-lg-4'>

                <div className='single_mg'>
                    <img className='single_img' src={single1} alt="" />
                </div>

                <div className='text_single'>
                    <h1>
                        مع اجمل صيحات الموضه والفاشون
                    </h1>

                    <p>
                        اطلاله فريده مع افضل تشكيله ملابس شبابي
                    </p>
                </div>

            </div>


            {/* 2 */}

            <div className='singl_1 col-12 col-md-6 col-lg-4'>

                <div className='text_single'>
                    <h1>
                        اشتري اللي يخليك شيك
                    </h1>

                    <p>
                        مع احدث واجمل ملابس الشباب الحديثة
                    </p>
                </div>

                <div className='single_mg'>
                    <img className='single_img' src={single2} alt="" />
                </div>

            </div>


            {/* 3 */}

            <div className='singl_1 col-12 col-md-6 col-lg-4'>

                <div className='single_mg'>
                    <img className='single_img' src={single3} alt="" />
                </div>

                <div className='text_single'>
                    <h1>
                        استمتعي بأجواء مبهرة في الخروجات
                    </h1>

                    <p>
                        مع باقة من أجمل الملابس الكاجوال للبنات المودرن
                    </p>
                </div>

            </div>

        </div>

    </div>

</section>








    </>
  )
}

export default Logo_roand