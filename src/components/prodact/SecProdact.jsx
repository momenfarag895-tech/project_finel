import pro1 from '../../assets/img/prodact/pro1.png'
import pro2 from '../../assets/img/prodact/pro2.png'
import pro3 from '../../assets/img/prodact/pro3.png'
import pro4 from '../../assets/img/prodact/pro4.png'
import pro5 from '../../assets/img/prodact/timerimg.png'
import { Link } from "react-router-dom";


export const products = [
  {
    id: 1,
    image: pro2,
    price: "799 ج.م",
    oldPrice: "1199 ج.م",
    name: " قميص شبابي",
  },
  {
    id: 2,
    image: pro3,
    price: "582 ج.م",
    oldPrice: "785 ج.م",
    name: " تيشيرت",
  },
  {
    id: 3,
    image: pro1,
    price: "1200 ج.م",
    oldPrice: "1500 ج.م",
    name: "تيشيرت ابيض",
  },
  {
    id: 4,
    image: pro4,
    price: "1200 ج.م",
    oldPrice: "1500 ج.م",
    name: "فستان ابيض",
  },
  {
    id: 5,
    image: pro5,
    price: "1200 ج.م",
    oldPrice: "1500 ج.م",
    name: " قميص اطفال",
  },
  {
    id: 6,
    image: pro1,
    price: "1200 ج.م",
    oldPrice: "1500 ج.م",
    name: "تيشيرت ابيض",
  },
  {
    id: 7,
    image: pro4,
    price: "1200 ج.م",
    oldPrice: "1500 ج.م",
    name: "بلوزه ابيض",
  },
  {
    id: 8,
    image: pro1,
    price: "1200 ج.م",
    oldPrice: "1500 ج.م",
    name: "تيشيرت ابيض",
  },
  {
    id: 9,
    image: pro5,
    price: "1200 ج.م",
    oldPrice: "1500 ج.م",
    name: "جاكت ابيض",
  },
];






const SecProdact = () => {
  return (
    <>
    <section className='secProdact d-flex mb-5'>
        <div className='prodact_content'>
            <div className='search_pro d-flex gap-5'>
                <div className=" d-flex gap-4  align-items-center">
                    <div className=" d-flex gap-4">
                        <i className="fa-solid fa-grip-lines"></i>
                        <i className=" back fa-solid fa-border-all"></i>
                    </div>
                    <h5>
                        عرض
                    </h5>

                 </div>



                 <div className=" d-flex gap-4  align-items-center">
                    <div className=" d-flex gap-4 align-items-center justify-content-center">
                        <p className='back'>30</p>
                        <p className='back'>24</p>
                        <p className='back'>18</p>
                        <p className='back'>12</p>
                        <p className='back'>6</p>
                    </div>
                    <h5>
                        مشاهدة 
                    </h5>
                 </div>
                  <div className="dropdown d-flex gap-5  align-items: center;">
                     <h5>
                    ترتيب حسب
                   </h5>
                   <button className=" ropdown btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                     الاقل سعرا    
                   </button>
                   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                     <li><a className="dropdown-item" href="#">الاعلي سعرا</a></li>
                   </ul>
                  
                 </div>

                

            </div>

        <div className="Sort_pro sort_pro row g-3">

  {products.map((product) => (

    <Link style={{ textDecoration: 'none', color: 'inherit' }}
    to={`/product/${product.id}`}
    className="prodact_info col-12 col-md-6 col-lg-4"
    key={product.id}
  >

      <div className="similar_img">

        <img src={product.image} alt={product.name} />

        <span className="heart">
          ♥
        </span>

      </div>

      <div className="similar_info">

        <div className="similar_price">
          <span>{product.price}</span>
          <del>{product.oldPrice}</del>
        </div>

        <div className="similar_details">

         <div className="similar_rating">
                        <i className="fa-regular fa-star"></i>
                        ⭐⭐⭐⭐⭐
            </div>

          <h4>
            {product.name}
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

        </Link>

                               ))}

         </div>

        </div>

         <aside className="aside_pro">

    <div className="filter_pro">
        <div className="filter_title">
            <h5>الفئات</h5>
            <i className="fa-solid fa-angle-left"></i>
        </div>

        <div className="texT">
            <h5>الاكسسوارات</h5>
            <i className="fa-solid fa-plus"></i>
        </div>

        <div className="texT">
            <h5>ملابس</h5>
            <i className="fa-solid fa-plus"></i>
        </div>

        <div className="texT">
            <h5>الالكترونيات</h5>
            <i className="fa-solid fa-plus"></i>
        </div>

        <div className="texT">
            <h5>الاثاث</h5>
            <i className="fa-solid fa-plus"></i>
        </div>

        <div className="texT">
            <h5>الاحذية</h5>
            <i className="fa-solid fa-plus"></i>
        </div>

        <div className="texT">
            <h5>المجوهرات</h5>
            <i className="fa-solid fa-plus"></i>
        </div>

        <div className="texT">
            <h5>اخري</h5>
            <i className="fa-solid fa-plus"></i>
        </div>
    </div>


    <div className="filter_section">
        <div className="filter_title">
            <h5>السعر</h5>
            <i className="fa-solid fa-angle-left"></i>
        </div>

        <input
            type="range"
            className="form-range"
            id="customRange1"
        />
    </div>


    <div className="filter_section">
        <div className="filter_title">
            <h5>المقاس</h5>
            <i className="fa-solid fa-angle-left"></i>
        </div>

        <div className="sizes">
            <h5>XL</h5>
            <h5>L</h5>
            <h5>M</h5>
            <h5>S</h5>
            <h5>XS</h5>
        </div>
    </div>


    <div className="filter_section">
        <div className="filter_title">
            <h5>اللون</h5>
            <i className="fa-solid fa-angle-left"></i>
        </div>

        <div className="colors">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>


    <div className="filter_pro">
        <div className="filter_title">
            <h5>العلامة التجارية</h5>
            <i className="fa-solid fa-angle-left"></i>
        </div>

        <div className="brand">سوني</div>
        <div className="brand">لينوفو</div>
        <div className="brand">جونسون & هاندسون</div>
        <div className="brand">ابل</div>
        <div className="brand">جوجل</div>
        <div className="brand">سامسونج</div>
    </div>


    <div className="filter_section featured">
        <div className="filter_title">
            <h5>عناصر مميزة</h5>
            <i className="fa-solid fa-angle-left"></i>
        </div>

        <div className="featured_product">
            <img src={pro2} alt="" />
            <div>
                <p>فستان ازرق عصري<br />للسيدات</p>
                <strong>800 ج.م</strong>
            </div>

            
        </div>

        <div className="featured_product">
            <img src={pro2} alt="" />
            <div>
                <p>فستان اسود عصري<br />للسيدات</p>
                <strong>800 ج.م</strong>
            </div>
        </div>

        <div className="featured_product">
            <img src={pro2} alt="" />
            <div>
                <p>فستان ابيض عصري<br />للسيدات</p>
                <strong>800 ج.م</strong>
            </div>

            
        </div>
    </div>

         </aside>

    





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

export default SecProdact