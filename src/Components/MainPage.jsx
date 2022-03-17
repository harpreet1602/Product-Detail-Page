import React from 'react'
import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function MainPage() {
  return (
    <div class="mainpage">
        <div className="mainhead">
            <div className="mainhead1"><div>Navigation Category A</div>
            <FontAwesomeIcon icon={faAngleDown} className="dowicn"/>
            </div>      
            <div className="mainhead2">Navigation Item A</div>
            </div>
            <div className="prodname">
              Product Name ABC
            </div>
            <i class="fa-regular fa-heart fa-lg hearticn"></i>
            <div className="prodtext">Product Category Name (Example: Plywood)</div>
            <div className="prodline">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <span className="review"><b>4.4 </b><span>(328 reviews)</span></span>
            <span className="rbuild">Build My Project</span>
            <span className="rrate"><b>Rs. 2110.00 <span>per sheet</span></b></span>
            </div>

            <div className="pdesc">
              <div className="phead"><b>Product Description</b></div>
              <div className="ptext">
              Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
              To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
              Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.

              </div>
            </div>

            <div className="available">
              <span className="ao">Available online <b>189</b></span>
              <span className="aq">Quantity <span className="red">-</span> <div className="aqbox">1</div> <span className="red">+</span></span>
              <span className="ac">Add to Cart</span>
            </div>

            <div className="spec">
              <span className="s1">Product Specifications</span>
              <span className="s2">Reviews</span>
              <span className="s3">FAQs</span>
            </div>
            <div className="horc">
              <hr className="hor"/><hr className="hor1"/>
            </div>


    </div>
  )
}

export default MainPage