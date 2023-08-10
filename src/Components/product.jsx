import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BsFillEyeFill } from "react-icons/bs";
import {AiOutlineDownload} from 'react-icons/ai';
import {BiChevronRight} from 'react-icons/bi'
export default function Product() {
  return (
    <div className="intro_div p-5">
      <div className="col-12 h-100 d-flex justify-content-center">
        <div className="col-10 d-flex flex-column justify-content-center">
          <div className="link_text2 mb-3">Practice Advice</div>
          <div className="intro_heading mb-3">Our Department</div>
          <div className="intro_text col-4 mb-5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </div>
          <div className="d-flex col-12 gap-2">
            <div className="product_cover p-3">
              <div className="sale_tag">
                <span className="link-text">Sale</span>
              </div>
              <div
                className="d-flex gap-2 w-100 align-items-end justify-content-center"
                style={{ height: "90%" }}
              >
                <div className="icon_div d-flex justify-content-center align-items-center">
                  <AiOutlineHeart />
                </div>
                <div className="icon_div d-flex justify-content-center align-items-center">
                  <SlBasket />
                </div>
                <div className="icon_div d-flex justify-content-center align-items-center">
                  <BsFillEyeFill />
                </div>
              </div>
            </div>
            <div className="product_cover2 p-3">
              <div className="sale_tag">
                <span className="link-text">Sale</span>
              </div>
              <div
                className="d-flex gap-2 w-100 align-items-end justify-content-center"
                style={{ height: "90%" }}
              >
                <div className="icon_div d-flex justify-content-center align-items-center">
                  <AiOutlineHeart />
                </div>
                <div className="icon_div d-flex justify-content-center align-items-center">
                  <SlBasket />
                </div>
                <div className="icon_div d-flex justify-content-center align-items-center">
                  <BsFillEyeFill />
                </div>
              </div>
            </div>
            <div className="product_cover3 p-3">
              <div className="sale_tag">
                <span className="link-text">Sale</span>
              </div>
              <div
                className="d-flex gap-2 w-100 align-items-end justify-content-center"
                style={{ height: "90%" }}
              >
                <div className="icon_div d-flex justify-content-center align-items-center">
                  <AiOutlineHeart />
                </div>
                <div className="icon_div d-flex justify-content-center align-items-center">
                  <SlBasket />
                </div>
                <div className="icon_div d-flex justify-content-center align-items-center">
                  <BsFillEyeFill />
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex col-12 gap-2">
            <div className="product_detail">
                <div className="link_text2">Cancer Care</div>
                <div className="crad_heading">Best dental surgeons</div>
                <div className="card_text col-9">We focus on ergonomics and meeting 
                you where you work. It's only a 
                keystroke away.</div>
                <div className="d-flex gap-3" style={{color: '#737373'}}>
                    < AiOutlineDownload />
                    <span className="card_text">15 Sales</span>
                </div>
                <div className="d-flex gap-2">
                    <span className="crad_heading" style={{color:'#BDBDBD'}}>$16.48</span>
                    <span className="crad_heading" style={{color:'#FFAB71'}}>$6.48</span>
                </div>
                <div className="d-flex align-items-center rounded_div gap-3" style={{color:'#96BB7C'}}>
                    <span className="link_text2">Learn More</span>
                    < BiChevronRight/>
                </div>
            </div>
            <div className="product_detail">
                <div className="link_text2">Emergency Case</div>
                <div className="crad_heading">Online Appoinment</div>
                <div className="card_text col-9">We focus on ergonomics and meeting 
                you where you work. It's only a 
                keystroke away.</div>
                <div className="d-flex gap-3" style={{color: '#737373'}}>
                    < AiOutlineDownload />
                    <span className="card_text">15 Sales</span>
                </div>
                <div className="d-flex gap-2">
                    <span className="crad_heading" style={{color:'#BDBDBD'}}>$16.48</span>
                    <span className="crad_heading" style={{color:'#FFAB71'}}>$6.48</span>
                </div>
                <div className="d-flex align-items-center rounded_div gap-3" style={{color:'#96BB7C'}}>
                    <span className="link_text2">Learn More</span>
                    < BiChevronRight/>
                </div>
            </div>
            <div className="product_detail">
                <div className="link_text2">Painless procedures</div>
                <div className="crad_heading">Emergency Case</div>
                <div className="card_text col-9">We focus on ergonomics and meeting 
                you where you work. It's only a 
                keystroke away.</div>
                <div className="d-flex gap-3" style={{color: '#737373'}}>
                    < AiOutlineDownload />
                    <span className="card_text">15 Sales</span>
                </div>
                <div className="d-flex gap-2">
                    <span className="crad_heading" style={{color:'#BDBDBD'}}>$16.48</span>
                    <span className="crad_heading" style={{color:'#FFAB71'}}>$6.48</span>
                </div>
                <div className="d-flex align-items-center rounded_div gap-3" style={{color:'#96BB7C'}}>
                    <span className="link_text2">Learn More</span>
                    < BiChevronRight/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
