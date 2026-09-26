import React from "react";
import { useParams } from "react-router-dom";
import  { useState } from "react";
import { products } from "../components/prodact/SecProdact";
import "../Style/Prodact_detuls.css";
import singel1 from "../assets/img/prodact/singel/singel1.png"
import singel2 from "../assets/img/prodact/singel/singel2.png"
import singel3 from "../assets/img/prodact/singel/singel3.png"
import coment from "../assets/img/coment.jpg"
import pro1 from "../assets/img/prodact/pro1.png"
import pro2 from "../assets/img/prodact/pro2.png"
import pro3 from "../assets/img/prodact/pro3.png"
import pro4 from "../assets/img/prodact/pro4.png"
import pro5 from "../assets/img/prodact/timerimg.png"

const Prodact_detuls = () => {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>المنتج غير موجود</h2>;
  }
   
  const [quantity , setquantity ]= useState(1)


  return (
    <>

      <header>

        <div className="hero">

          <h1>
            تسوق احدث المنتجات العصرية
          </h1>

          <p>
            الرئيسية / المنتجات / {product.name}
          </p>

        </div>

      </header>

      {/* prodact */}
      <section className="d-flex gap-5">


       


        <div className="right">
          <div className="bigImg">
            <img className="Big" src={product.image}  alt= {product.name}/>
          </div>

        <div className="smoleImg">

        <div className="smallBox">
          <img className="Smal" src={product.image} alt={product.name} />
        </div>

              <div className="smallBox">
    <img className="Smal" src={product.image} alt={product.name} />
        </div>

        <div className="smallBox">
          <img className="Smal" src={product.image} alt={product.name} />
     </div>
      
        <div className="smallBox">
          <img className="Smal" src={product.image} alt={product.name} />
        </div>

         </div>

        </div>

         <div className="left">
          <h1 className="name">{product.name}</h1>

          <div className="price d-flex gap-3">
            <h6>{product.price }</h6>-
            <del>{product.oldPrice}</del>
          </div>

          <div className="rate d-flex gap-3">
             <p>
            ⭐⭐⭐⭐⭐
          </p>
            <h6>(50)</h6>
          </div>
            <p className="pp">
              مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
            </p>

            <h3 className="name">اللون:</h3>
            <div className="caller">
              <img className="img-caller" src={singel1} alt="" />
              <img className="img-caller" src={singel3} alt="" />
              <img className="img-caller" src={singel2} alt="" />
              <img className="img-caller" src={singel1} alt="" />
            </div>

               <h3 className="name">الوزن:</h3>
               <div className="size d-flex gap-4">
                <h5 className="Size"> 2 كيلو</h5>
                <h5 className="Size"> 3 كيلو</h5>
                <h5 className="Size"> 5 كيلو</h5>

               </div>

               <div className="size colect d-flex gap-4">
                <div className="plus">
                  <button className="plus1" onClick={ ()=> setquantity(quantity -1)  }>
                  -

                </button>

                <span>{quantity}</span>

                 <button className="plus1" onClick={ ()=> setquantity(quantity +1)  }>
                  +

                </button>

                </div>

                <button className="shop">
                  أضف للسله
                </button>




               </div>

               <div className=" size favert d-flex gap-3">
                 <span >
                     ♥
                  </span>
                  <h4>اضف للمفضله</h4>

               </div>

               <div className="size">
                <button  className="pay">
                اشتري الان
               </button>
               </div>

               <div className=" size medie">
                <h3>
                   شارك عبر مواقع التواصل 
                </h3>

                <div className="medie1 d-flex gap-3 ">

                  <div className="icon">
                   <i className="fa-brands fa-twitter"></i>

                  </div>
                  <div className="icon">
                   <i className="fa-brands fa-facebook"></i>

                  </div>
                  <div className="icon">
                   <i className="fa-brands fa-youtube"></i>

                  </div>
                  <div className="icon">
                   <i className="fa-brands fa-whatsapp"></i>

                  </div>
                  
                       
                </div>

               </div>



        



        </div>




      </section>


      {/* coment */}

   
        <div className="com">
          <h4>
            تقييمات المنتج
          </h4>
          <h4>
             معلومات اضافيه
          </h4>
          <h4>
             الوصف
          </h4>
          
        </div>

           <section className="d-flex gap-5">
            <div className="comLeft">
              <h5 className="size">
                اضف تقييم
              </h5>
              <div className="comStar d-flex size gap-5">
                <h5>
                   تقييمك
              </h5>
              <div>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
              </div>

              </div>

              <div className="form">
                <input className="formINPUT" type="text" placeholder="عنوان التقييم" />
                <textarea className="formINPUT" placeholder="اكتب تقييمك هنا "></textarea>

                <div className="next">
                  <input  type="text" placeholder="اسمك" />
                  <input  type="email" name="" id="" placeholder="بريد الالكتروني" />
                </div>
                <input className="formINPUT" type="submit" value="اضف هنا"/>

              </div>

            </div>


            <div className="comrite">
             <div className="com1 d-flex gap-3">
                <div className="com1rite" >
                  <img className="imgcom" src={coment} alt="" />
                
                </div>

                <div className="com1Left">
                  <h5 className="size">
                    منتج رائع. التعبئة والتغليف كانت جيدة أيضا!

                  </h5>
                  <p className=" p" >
                    مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                  </p>    
                     <p className="size">
                      ⭐⭐⭐⭐⭐
                     </p>
                     <div className="size d-flex gap-5">
                      <h5>
                        احمد بلال
                      </h5>
                      <p className="p">
                        9 اغسطس, 2022 
                      </p>
                     </div>

                </div>
                



              </div>

               <div className="com1 d-flex gap-3">
                <div className="com1rite" >
                  <img className="imgcom" src={coment} alt="" />
                
                </div>

                <div className="com1Left">
                  <h5 className="size">
                    منتج رائع. التعبئة والتغليف كانت جيدة أيضا!

                  </h5>
                  <p className=" p" >
                    مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                  </p>    
                     <p className="size">
                      ⭐⭐⭐⭐⭐
                     </p>
                     <div className="size d-flex gap-5">
                      <h5>
                        احمد بلال
                      </h5>
                      <p className="p">
                        9 اغسطس, 2022 
                      </p>
                     </div>

                </div>
                



              </div>

                                            
            <div className="com1 d-flex gap-3">
                <div className="com1rite" >
                  <img className="imgcom" src={coment} alt="" />
                
                </div>

                <div className="com1Left">
                  <h5 className="size">
                    منتج رائع. التعبئة والتغليف كانت جيدة أيضا!

                  </h5>
                  <p className=" p" >
                    مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                  </p>    
                     <p className="size">
                      ⭐⭐⭐⭐⭐
                     </p>
                     <div className="size d-flex gap-5">
                      <h5>
                        احمد بلال
                      </h5>
                      <p className="p">
                        9 اغسطس, 2022 
                      </p>
                     </div>

                </div>
                



              </div>
  

               <div className="com1 d-flex gap-3">
                <div className="com1rite" >
                  <img className="imgcom" src={coment} alt="" />
                
                </div>

                <div className="com1Left">
                  <h5 className="size">
                    منتج رائع. التعبئة والتغليف كانت جيدة أيضا!

                  </h5>
                  <p className=" p" >
                    مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                  </p>    
                     <p className="size">
                      ⭐⭐⭐⭐⭐
                     </p>
                     <div className="size d-flex gap-5">
                      <h5>
                        احمد بلال
                      </h5>
                      <p className="p">
                        9 اغسطس, 2022 
                      </p>
                     </div>

                </div>
                



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
  );
};

export default Prodact_detuls;