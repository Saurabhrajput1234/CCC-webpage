import React from "react";
import home from "../Images/home.svg";
import "./Home.css";
import team from "../Images/team.svg";
import web from "../Images/web.svg";
import app from "../Images/app.svg";
import ml from "../Images/ml.svg";
import design from "../Images/design.svg";
import think from "../Images/think.svg";
import develop from "../Images/develop.svg";
import deploy from "../Images/deploy.svg";
import pic1 from "../Images/1.jpg";
import pic2 from "../Images/2.jpg";
import pic3 from "../Images/3.jpg";
import Slide from "../Components/Slide";

const Home = () => {

  return (
    <div>
      <div id="first-part">
        <img src={home} alt="home" id="illustration" />
        <div id="head">
          <div id="heading">
            <span>Accelerating</span>
            <span className="inline"> Cloud</span>
            <span> Transformations.</span>
          </div>
          <div id="moto">
            <span>THINK |</span>
            <span className="inline">DEVELOP</span>
            <span>| DEPLOY</span>
          </div>
        </div>
      </div>
      <div id="about-us">
        <div className="title">
          <span>ABOUT</span>
          <span className="inline"> US</span>
        </div>
        <div id="about">
          <div id="teampic">
            <img src={team} alt="team photo" />
          </div>
          <div className="content">
            <span className="inline">Cloud Computing Cell </span>
            <span>
              has been a part of Ajay Kumar Garg Engineering College since
              February 2016.The members are exposed to the latest Cloud
              Technologies that enable them to be market ready thereby
              increasing their opportunities in placements and research.It
              provides a platform to the students to compute, manage and deploy
              the cloud and related services.The Cell is coordinated by Dr. J.
              K. Seth, Ms. Anupama Sharma and Dr. Parneet Kaur, faculty members,
              IT department.
            </span>
          </div>
        </div>
      </div>
      <div className="title">
        <span>WHAT</span>
        <span className="inline"> WE</span>
        <span> DO</span>
      </div>
      <div id="what-we-do">
        <div>
          <img src={web} alt="web development" className="domain_pic" />
          <p className="domain_name">WEB DEVELOPMENT</p>
          <p className="domain_content">
            As web developers, we ensure that the website is visually appealing
            and easy to navigate with absolute care for website’s performance
            and capacity.
          </p>
        </div>
        <div>
          <img src={app} alt="app development" className="domain_pic" />
          <p className="domain_name">APP DEVELOPMENT</p>
          <p className="domain_content">
            Work on different application development softwares like flutter,
            react native and NetBeans and provide the required solutions
          </p>
        </div>
        <div>
          <img src={ml} alt="machine learning" className="domain_pic" />
          <p className="domain_name">MACHINE LEARNING</p>
          <p className="domain_content">
            Machine Learning is the field of study that gives computers the
            capability to learn without being explicitly programmed.
          </p>
        </div>
        <div>
          <img src={design} alt="machine learning" className="domain_pic" />
          <p className="domain_name">UI/UX DESIGNING</p>
          <p className="domain_content">
            UI/UX designing and graphic designing so as to provide an edge in
            web and application development.
          </p>
        </div>
      </div>
      <div className="title">
        <span>OUR</span>
        <span className="inline"> DOMAIN</span>
      </div>
      <div id="what-we-do">
        <div>
          <img src={think} alt="think" className="domain_pic" />
          <p className="domain_name">THINK</p>
          <p className="domain_content">
            As web developers, we ensure that the website is visually appealing
            and easy to navigate with absolute care for website’s performance
            and capacity.
          </p>
        </div>
        <div>
          <img src={develop} alt="develop" className="domain_pic" />
          <p className="domain_name">DEVELOP</p>
          <p className="domain_content">
            Work on different application development softwares like flutter,
            react native and NetBeans and provide the required solutions
          </p>
        </div>
        <div>
          <img src={deploy} alt="deploy" className="domain_pic" />
          <p className="domain_name">DEPLOY</p>
          <p className="domain_content">
            Machine Learning is the field of study that gives computers the
            capability to learn without being explicitly programmed.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
