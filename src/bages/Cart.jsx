import React from 'react'
import  { useState } from "react";
import KartLeft from "../components/prodact/KartLeft"
import img from "../assets/img/cartImg.png"
import "../Style/Cart.css"

import pro1 from "../assets/img/prodact/pro1.png"
import pro2 from "../assets/img/prodact/pro2.png"
import pro3 from "../assets/img/prodact/pro3.png"
import pro4 from "../assets/img/prodact/pro4.png"
import pro5 from "../assets/img/prodact/timerimg.png"

const cartProdact = [
  {
    id: 1,
    image: img,
    price: "2500 ج.م",
    name: "فستان ابيض عصري",
    coler: "ابيض",
    kilo: "2 كيلو"
  },
  {
    id: 2,
    image: img,
    price: "30000 ج.م",
    name: "فستان ابيض عصري",
    coler: "ابيض",
    kilo: "3 كيلو"
  },
  {
    id: 3,
    image: img,
    price: "2000 ج.م",
    name: "فستان ابيض عصري",
    coler: "ابيض",
    kilo: "4 كيلو"
  },
  {
    id: 4,
    image: img,
    price: "200 ج.م",
    name: "فستان ابيض عصري",
    coler: "ابيض",
    kilo: "1 كيلو"
  }
]

const Cart = () => {
    const [quantity , setquantity ]= useState(1)

  return (
    <>
      <div className='hero'>
        <h1>تسوق احدث المنتجات العصرية</h1>
        <p>الرئيسية / السله</p>
      </div>

      <section className='cart d-flex'>

        <div className='cartLeft'>
          <KartLeft />
        </div>

        <div className='cartRithe'>

          <h1 className='size'>
            سله التسوق
          </h1>

          <div className='hidCart d-flex '>

            <div>
              <h4>المنتج</h4>
            </div>

            <div className='d-flex hidCart1'>
              <h5>السعر</h5>
              <h5>الكميه</h5>
              <h5>المجموع</h5>
            </div>

          </div>


        <div className="products">

            {cartProdact.map((product) => (

            <div className='allpro' key={product.id}>

                <div className='Item'>
                    <div className='imgCart'>
                        <img className='imgCart1' src={product.image} alt={product.name} />
                    </div>
                    <div className='nameCart'>
                        <h4>{product.name}</h4>
                        <p> اللون:{product.coler}</p>
                        <p>
                            الوزن:{product.kilo}
                        </p>

                    </div>

                </div>

                <div className='detelsCart d-flex'>
                    <h5>
                        {product.price}

                    </h5>
                     <div className="plus">
                  <button className="plus1" onClick={ ()=> setquantity(quantity -1)  }>
                  -

                </button>

                <span>{quantity}</span>

                 <button className="plus1" onClick={ ()=> setquantity(quantity +1)  }>
                  +

                </button>

                      </div>
                      <h5>
                        {product.price}

                    </h5>




                </div>

            </div>

            ))}

        </div>

        </div>

      </section>

       <section className="similar_products">
         
             <div className="similar_title">
                 <h2>منتجات مشابهة</h2>
                 <span></span>
             </div>
         
         
             <div className="similar_row">
         
         
                 {/* Product 1 */}
                 <div className="similar_card">
         
                     <div className="similar_img">
         
                         <img src={pro1} alt="" />
         
                         <i className="fa-solid fa-heart"></i>
         
                     </div>
         
                     <div className="similar_info">
         
                         <div className="similar_price">
                             <span>800 ج.م</span>
                             <del>1000 ج.م</del>
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
                 <div className="similar_card">
         
                     <div className="similar_img">
         
                         <img src={pro2} alt="" />
         
                         <i className="fa-solid fa-heart"></i>
         
                     </div>
         
                     <div className="similar_info">
         
                         <div className="similar_price">
                             <span>800 ج.م</span>
                             <del>1000 ج.م</del>
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
                 <div className="similar_card">
         
                     <div className="similar_img">
         
                         <img src={pro3} alt="" />
         
                         <i className="fa-solid fa-heart"></i>
         
                     </div>
         
                     <div className="similar_info">
         
                         <div className="similar_price">
                             <span>800 ج.م</span>
                             <del>1000 ج.م</del>
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
         
         
                 {/* Product 4 */}
                 <div className="similar_card">
         
                     <div className="similar_img">
         
                         <img src={pro4} alt="" />
         
                         <i className="fa-solid fa-heart"></i>
         
                     </div>
         
                     <div className="similar_info">
         
                         <div className="similar_price">
                             <span>800 ج.م</span>
                             <del>1000 ج.م</del>
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
         
         
                 {/* Product 5 */}
                 <div className="similar_card">
         
                     <div className="similar_img">
         
                         <img src={pro2} alt="" />
         
                         <i className="fa-solid fa-heart"></i>
         
                     </div>
         
                     <div className="similar_info">
         
                         <div className="similar_price">
                             <span>800 ج.م</span>
                             <del>1000 ج.م</del>
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
         
              </section>



    </>
  )
}

export default Cart