import React from "react";
import github from "../Images/github.svg";
import linkedin from "../Images/linkedin.svg";
import { secondYear } from "../List of Team Members/secondyear";

const TeamCard = () => {
  return (
    <>
      <div id="cards-design">
        {secondYear &&
          secondYear.map((value, index) => {
            return (
              <div className="card">
                <img src={value.photo} alt="card img" className="card-img" />
                <div className="card-body">
                  <h1 className="card-title">{value.name}</h1>
                  <p className="Card-sub-title">{value.tech}</p>
                  <div className="card-info">
                    <a href={value.github}>
                      <img src={github} alt="github" />
                    </a>
                    <a href={value.linked}>
                      <img src={linkedin} alt="linedin" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TeamCard;
