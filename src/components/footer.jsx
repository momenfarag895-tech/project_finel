import React from 'react'
import '../Style/footer.css'

const footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        {/* Links */}
        <div className="footer_links">

          <a href="#">الرئيسية</a>
          <a href="#">المنتجات</a>
          <a href="#">السلة</a>
          <a href="#">نبذة عنا</a>
          <a href="#">الشروط والاحكام</a>
          <a href="#">اتصل بنا</a>

        </div>


        {/* Social Media */}
        <div className="footer_social">

          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>

          <a href="#">
            <i className="fa-brands fa-whatsapp"></i>
          </a>

        </div>


        {/* Contact */}
        <h3 className="footer_contact">
          ابقى على تواصل
        </h3>


        {/* Copyright */}
        <p className="footer_copy">
          جميع حقوق النشر محفوظة لشركة سمارك كود
        </p>

      </div>

    </footer>
  )
}

export default footer