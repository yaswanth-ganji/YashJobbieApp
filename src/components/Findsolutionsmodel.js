import React from "react";
import ReactDOM from "react-dom";
import cancel from "../icons/cancel.svg";
import "./Findsolutionsmodel.css";
import findSolutionsImg from "../icons/findSolutionsImg.svg";
const findProducts1 = [
  "Features and tools",
  "Manage your account",
  "Analytics",
  "Financing",
  "Integrations",
  "Trades/ Construction ",
  "Shipping & delivery",
  "Prodcut Development",
  "Quality Assurance",
];
const findProducts2 = [
  "category selection",
  "Laboratory Jobs",
  "IT products",
  "Breakroom supplies",
  "Janitorial & sanitation supplies",
  "Industrial & MRO supplies",
  "Restaurant supplies",
  "Professional medical supplies",
  "Professional beauty supplies",
  "Medical/ Healthcare Jobs",
  "Retail Jobs",
  "Business prime",
];
const Findsolutionsmodel = ({ isOpen, onClose }) => {
  const products1 = findProducts1.map((eachItem) => {
    if (eachItem == "Features and tools") {
      return (
        <a href="#" className="finsolncontentfirst">
          {eachItem}
        </a>
      );
    }
    return (
      <a href="#" className="finsolncontent">
        {eachItem}
      </a>
    );
  });
  const products2 = findProducts2.map((eachItem) => {
    if (eachItem == "category selection") {
      return (
        <a href="#" className="finsolncontentfirst">
          {eachItem}
        </a>
      );
    }
    return (
      <a href="#" className="finsolncontent">
        {eachItem}
      </a>
    );
  });
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="findSolutionsMain">
      <div className="findSolutionsMain2">
        <div className="findSolutions">
          <div className="findSolutions1">
            <div className="findSolutions2">{products1}</div>
            <div className="findSolutions3">{products2}</div>
            <div className="findSolutions4">
              <img width="200" height="150" src={findSolutionsImg} />
              <h2>Get the best of Jobbies Business</h2>
              <div>
                <p>
                  Jobbies Prime members get access to more tools and features to
                  simplify buying, streamline procurement, and help reduce
                  costs.
                </p>

                <a href="">Explore Jobbies Prime</a>
              </div>
            </div>
          </div>
        </div>

        <img
          src={cancel}
          width={30}
          height={30}
          onClick={onClose}
          className="cancelImg"
        />
      </div>
      <div className="findSolutionBottomDiv">
        <a href="#">Solutions that fit your Organization</a>
      </div>
    </div>,
    document.body
  );
};

export default Findsolutionsmodel;
