import React from 'react'
import Nave from '../components/Navbar'
import NewProduct from '../components/NemProdact';
import Timer from '../components/Timer'
import SortPrand from '../components/sortPrand'
import Footer from '../components/footer'
import Logo_prand from '../components/Logo_roand'
import imgHero from '../assets/img/her.png'
import imgProdact from '../assets/img/img_pro.png'
import imgProdact1 from '../assets/img/img_pro2.png'


import '../Style/Home.css'

const home = () => {
  return (
    
     <>
      

      <header className='d-flex justify-content-around align-items-center justify-content-center'>
        <div className='heroImg'>
          <img src={imgHero} alt="" />


        </div>

        <div className='heroText' >
          <div className='herotext'>
            <p> برندات نسائيه عالميه </p>
            <h1>احدث ادوات الجمال</h1>
            <p> برندات نسائيه عالميه </p>
          </div>

          <div>
            <button className='gloybal_css' id='but_home'>تسوق الان</button>
          </div>

        </div>
      </header>
      
    <div className='home_details'>

      <div className='home_details_item'>
        <div>
          <h4>عروض حصريه</h4>
          <p>  خصومات كبيره علي منتجاتنا </p>
        </div>
        <div>
          <i id='item_home' className="fa-solid fa-gift"></i>
        </div>
      </div>
       <div className='home_details_item'>
        <div>
          <h4> استرجاع الاموال </h4>
          <p> استرداد امن لاموالك او الاستبدال </p>
        </div>
        <div>
          <i id='item_home' className="fa-solid fa-wallet"></i>
        </div>
      </div>

       <div className='home_details_item'>
        <div>
          <h4>
            دعم فني
          </h4>
          <p>
            دعم على مدار الساعة
          </p>
        </div>
        <div>
          <i id='item_home' className="fa-solid fa-phone"></i>
        </div>
      </div>

       <div className='home_details_item'>
        <div>
          <h4
          >توصيل مجاني
          </h4>
          <p>
               للطلبات اعلى من 200 ريال
          </p>
        </div>
        <div>
          <i id='item_home' className="fa-solid fa-truck"></i>
        </div>
      </div>

    </div>

    <div className='items_prodact '>

      <div className='items_prodact_item d-flex gap-4 align-items-center' style={{ backgroundColor: 'rgba(214, 247, 254, 1)' }}>

        <div className='text-item'>
          <h4>
             ملابس اطفال 
          </h4>
          <h5>
            خصم 50%
          </h5>
          <button id='but_itm'>تسوق الان</button>
        </div>
        <div>
          <img className='img_pro2' src={imgProdact1} alt="" />
        </div>




      </div> 

      <div className='items_prodact_item d-flex gap-4 align-items-center'>

        <div className='text-item'>
          <h5>
            خصم كبير
          </h5>
          <h4>
            فساتين بناتي
          </h4>
          <button id='but_itm'>تسوق الان</button>
        </div>
        <div>
          <img className='img_pro2'src={imgProdact} alt="" />
        </div>




      </div> 

    </div>

<NewProduct />
<Timer />
<SortPrand />

<Logo_prand />
     
     </>
  )
}

export default home