import React, { useState } from 'react';
import { Link } from "react-router-dom";
import img_nav from '../assets/img/vector.png';
import productImg from '../assets/img/cart.jpg';
import '../Style/Nave.css';

const Navbar = () => {

  const [showSearch, setShowSearch] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showlog, setShowlog] = useState(false);



  return (
    <>
      <nav id="navBar">

        <div className="d-flex justify-content-around">


          {/* Links + Logo */}
          <div className="d-flex gap-5 align-items-center">
            <div className="img_nav">
              <img src={img_nav} alt="" />
            </div>

            <div>
              <ul>
                <li><Link to="/" className='nav_link '>الرئيسية</Link></li>
                <li><Link to="/Products" className='nav_link '>المنتجات</Link></li>
                <li><Link to="/Services" className='nav_link '>الخدمات</Link></li>
                <li><Link to="/Cart" className='nav_link '> السله</Link></li>
                <li><Link to="/Terms" className='nav_link '>الشروط والاحكام</Link></li>
                <li><Link to="/Blog" className='nav_link '>المدونة</Link></li>
                <li><Link to="/Contact" className='nav_link '>اتصل بنا</Link></li>
              </ul>
            </div>

    

          </div>

          {/* Icons */}
          <div className="d-flex gap-3 align-items-center">

            {/* Search */}
            <button
              className="search_btn"
              onClick={() => setShowSearch(!showSearch)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <Link to="/Login" className='nav_link ' ><i className="fa-regular fa-user"></i></Link>

            <i className="fa-regular fa-heart"></i>
            <button
              className="shop_btn"
              onClick={() => setShowShop(!showShop)}
            >
              <i className="fa-solid fa-cart-shopping Offcanvas"></i>
            </button>

          </div>


        </div>

      </nav>


      {/* Search Bar */}
      {showSearch && (
        <div className="search_bar">

          <input
            type="text"
            placeholder="ابحث عن منتج..."
          />

          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

        </div>
        
      )}
      {/* Shop Cart */}
{showShop && (
  <div className="cart_menu">

    {/* Header */}
    <div className="cart_header">

      <button
        className="close_cart"
        onClick={() => setShowShop(false)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

    </div>


    {/* Products */}

    <div className="cart_products">

      {/* Product 1 */}
      <div className="cart_product">

        <button className="delete_product">
          X
        </button>

        <div className="product_details">

          <h4>جاكت جلد أسود</h4>

          <div className="product_info">
            <span>500</span>
            <span>X1</span>
          </div>

          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

        </div>

        <img src={productImg} alt="جاكت جلد أسود" />

      </div>


      {/* Product 2 */}
      <div className="cart_product">

        <button className="delete_product">
          X
        </button>

        <div className="product_details">

          <h4>جاكت جلد أسود</h4>

          <div className="product_info">
            <span>500</span>
            <span>X1</span>
          </div>

          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

        </div>

        <img src={productImg} alt="جاكت جلد أسود" />

      </div>


      {/* Product 4 */}
      <div className="cart_product">

        <button className="delete_product">
          X
        </button>

        <div className="product_details">

          <h4>جاكت جلد أسود</h4>

          <div className="product_info">
            <span>500</span>
            <span>X1</span>
          </div>

          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

        </div>

        <img src={productImg} alt="جاكت جلد أسود" />

      </div>

        {/* Product 3 */}
      <div className="cart_product">

        <button className="delete_product">
          X
        </button>

        <div className="product_details">

          <h4>جاكت جلد أسود</h4>

          <div className="product_info">
            <span>500</span>
            <span>X1</span>
          </div>

          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

        </div>

        <img src={productImg} alt="جاكت جلد أسود" />

      </div>

        {/* Product 5 */}
      <div className="cart_product">

        <button className="delete_product">
          X
        </button>

        <div className="product_details">

          <h4>جاكت جلد أسود</h4>

          <div className="product_info">
            <span>500</span>
            <span>X1</span>
          </div>

          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

        </div>

        <img src={productImg} alt="جاكت جلد أسود" />

      </div>

        {/* Product 6 */}
      <div className="cart_product">

        <button className="delete_product">
          X
        </button>

        <div className="product_details">

          <h4>جاكت جلد أسود</h4>

          <div className="product_info">
            <span>500</span>
            <span>X1</span>
          </div>

          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

        </div>

        <img src={productImg} alt="جاكت جلد أسود" />

      </div>

    </div>


    {/* Footer */}
    <div className="cart_footer">

      <div className="total">
        المجموع : <strong>1500 جنيه</strong>
      </div>

      <button className="pay_btn">
        ادفع
      </button>

    </div>

  </div>
)}

    </>
  );
};

export default Navbar;