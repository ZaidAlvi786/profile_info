import React from "react";
import {BiChevronRight} from 'react-icons/bi'
// import chart from '../assets/images/chart_img.png'
export default function About() {
  return (
    <div className="intro_div col-12 py-5 d-flex flex-column justify-content-center">
       <div className="col-12 py-5 d-flex justify-content-center">
      <div className="col-9 d-flex">
        <div className="d-flex col-6 align-items-center">
          <div className="img_div d-flex align-items-center">
            <div className="chart_div"></div>
          </div>
          <div className="div_bg mt-5">
            <div className="progress_div mt-5"></div>
          </div>
        </div>
        <div className="d-flex col-6 flex-column justify-content-center">
          <div className="about_div_line"></div>
          <h2 className="intro_heading mt-4">Meet Our Experts</h2>
          <div className="intro_text col-8 mt-4">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </div>
          <div className="col-7 gap-3 mt-4" style={{ color: " #96BB7C" }}>
            <span className="link_text2">Learn More</span>
            <BiChevronRight />
          </div>
        </div>
      </div>
      </div>
      <div className="col-12 d-flex pt-5 justify-content-center">
          <div className="d-flex col-9 flex-column mt-5">
            <div className="d-flex col-10 justify-content-between">
            <span className="number_text">15K</span>
            <span className="number_text">150K</span>
            <span className="number_text">15</span>
            <span className="number_text">100+</span>
            </div>
            <div className="d-flex col-10 pe-3 justify-content-between">
            <span className="text-1" style={{color:'#FFFFFF'}}>Happy Customers</span>
            <span className="text-1" style={{color:'#FFFFFF'}}>Monthly Visitors</span>
            <span className="text-1" style={{color:'#FFFFFF'}}>Countries  Worldwide</span>
            <span className="text-1" style={{color:'#FFFFFF'}}>Top Partners</span>
            </div>
          </div>
     </div>
    </div>
  );
}
