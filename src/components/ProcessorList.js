import { default as phil } from "../images/phil.jpg";
import { default as nickCage } from "../images/nick-cage.jpg";
import { default as steven } from "../images/steven.jpg";
import StarRating from "../components/StarRating";
import "./processorList.css";
import React from "react";

const processor1 = "Phil Murray";
const proc1desc = "Famous for his gopher resistant strains";
const proc1Img = phil;

export default function ProcessorList() {
  return (
    <>
      <div className="title container">
        <h1 className="proctitle">Processors</h1>
      </div>
      <div className="processors container">
        <div className="row">
          <div className="col-sm-3">
            <h2>{processor1}</h2>
            <img src={proc1Img} alt="" />
            <p>{proc1desc}</p>
          </div>

          <div className="col-sm-3">
            <h2>Nick Cage</h2>
            <img src={nickCage} alt="" />
            <p>Famous for his Con air CBD</p>
            {/* Make processor a compotent where processors are an array */}
          </div>
        {/* ctrl shift l  */}
          <div className="col-sm-3">
            <h2>Stephen Segal</h2>
            <img src={steven} alt="" />
            <p>Famous for Kung foo kick to the head varities</p>
          </div>
          <div className="col-sm-3">
            <h2>Stephen Segal</h2>
            <img src={steven} alt="" />
            <p>Famous for Kung foo kick strain</p>
          </div>
          <div className="col-sm-3">
            <h2>Stephen Segal</h2>
            <img src={steven} alt="" />
            <p>Famous for Kung foo kick strain</p>
          </div>
          <div className="col-sm-3">
            <h2>Stephen Segal</h2>
            <img src={steven} alt="" />
            <p>Famous for Kung foo kick strain</p>
          </div>
          <div className="col-sm-3">
            <h2>Stephen Segal</h2>
            <img src={steven} alt="" />
            <p>Famous for Kung foo kick strain</p>
          </div>
          <div className="col-sm-3">
            <h2>Stephen Segal</h2>
            <img src={steven} alt="" />
            <p>Famous for Kung foo kick strain</p>
          </div>
          <div className="col-sm-3">
            <h2>Stephen Segal</h2>
            <img src={steven} alt="" />
            <p>Famous for Kung foo kick strain</p>
          </div>
          
          <div className="col-sm-3">
            <h2>Stephen Segal</h2>
            <img src={steven} alt="" />
            <p>Famous for Kung foo kick strain</p>
          </div>
        </div>
    </div>
    <StarRating/>
    </>
  );
}
