import React from 'react'
import pro1 from '../assets/img/prodact/pro1.png'
import pro3 from '../assets/img/prodact/pro3.png'
import pro2 from '../assets/img/prodact/pro2.png'

const sortPrand = () => {
  return (
    <>

      <section className='all_sort'>

        <div className='Sort_conter'>
           {/* Sort */}
          <div className='sort_text'>

            <div className='sort_title'>
              <h3>
                تسوق عبر الفئات
              </h3>
            </div>

            <div className='sort_item'>
              رجالي
            </div>

            <div className='sort_item'>
              حريمي
            </div>

            <div className='sort_item'>
              اطفال
            </div>

            <div className='sort_item'>
              اكسسوارات
            </div>

            <div className='sort_item'>
              العاب
            </div>

          </div>

          <div className='sort_pro row g-3'>

            {/* Product 1 */}
            <div className='prodact_info col-12 col-md-6 col-lg-4'>

              <div className='img'>
                <img src={pro2} alt="" />

                <span className='heart'>
                  ♥
                </span>
              </div>

              <div className='similar_info'>

                <div className='similar_price'>
                  <spanp>799 ج.م</spanp>
                  <del>1199 ج.م</del>
                </div>

               <div className="similar_details">

                    <div className="similar_rating">
                        <i className="fa-regular fa-star"></i>
                        ⭐⭐⭐⭐⭐
                    </div>

                    <h4>
                        بلوزة قطنية بيضاء
                    </h4>

                    <div className="similar_sizes">
                        <span>XL</span>
                        <span>L</span>
                        <span>M</span>
                        <span>S</span>
                        <span className="active">XS</span>
                    </div>

                </div>

              </div>

            </div>


            {/* Product 2 */}
             <div className='prodact_info col-12 col-md-6 col-lg-4'>

              <div className='img'>
                <img src={pro3} alt="" />

                <span className='heart'>
                  ♥
                </span>
              </div>

              <div className='similar_info'>

                <div className='similar_price'>
                  <spanp>799 ج.م</spanp>
                  <del>1199 ج.م</del>
                </div>

               <div className="similar_details">

                    <div className="similar_rating">
                        <i className="fa-regular fa-star"></i>
                        ⭐⭐⭐⭐⭐
                    </div>

                    <h4>
                        بلوزة قطنية بيضاء
                    </h4>

                    <div className="similar_sizes">
                        <span>XL</span>
                        <span>L</span>
                        <span>M</span>
                        <span>S</span>
                        <span className="active">XS</span>
                    </div>

                </div>

              </div>

            </div>


            {/* Product 3 */}
             <div className='prodact_info col-12 col-md-6 col-lg-4'>

              <div className='img'>
                <img src={pro1} alt="" />

                <span className='heart'>
                  ♥
                </span>
              </div>

              <div className='similar_info'>

                <div className='similar_price'>
                  <spanp>799 ج.م</spanp>
                  <del>1199 ج.م</del>
                </div>

               <div className="similar_details">

                    <div className="similar_rating">
                        <i className="fa-regular fa-star"></i>
                        ⭐⭐⭐⭐⭐
                    </div>

                    <h4>
                        بلوزة قطنية بيضاء
                    </h4>

                    <div className="similar_sizes">
                        <span>XL</span>
                        <span>L</span>
                        <span>M</span>
                        <span>S</span>
                        <span className="active">XS</span>
                    </div>

                </div>

              </div>

            </div>

          </div>


         

        </div>

      </section>

    </>
  )
}

export default sortPrand