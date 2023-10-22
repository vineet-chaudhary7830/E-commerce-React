import React from 'react'
import './Footer.css'
import footer_logo from '../assests/logo_big.png'
import insta_logo from '../assests/instagram_icon.png'
import pintrest_icon from '../assests/pintester_icon.png'
import whatsApp_icon from '../assests/whatsapp_icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" /> 
            <p>SHOPPER</p>
            <div>
                <ul className="footer_links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icons-container">
                          <img src={insta_logo} alt="" />
                    </div>
                    <div className="footer-icons-container">
                          <img src={pintrest_icon} alt="" />
                    </div>
                    <div className="footer-icons-container">
                          <img src={whatsApp_icon} alt="" />
                    </div>
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>Copyright @ 2023 - All Rights Reserved</p>
                </div>
            </div>
        </div> 
    </div>
  )
}
