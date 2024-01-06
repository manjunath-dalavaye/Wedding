import React from "react";
import him from "../../assets/him2.jpg";
import her from "../../assets/her2.jpg";
import "./Intro.css"; // Import your CSS file

const Intro = () => {
  return (
    <div>
      <div className="intro-header">
        <h1>The Happy Couple</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut
          vel turpis accumsan,<br/> efficitur dolor fermentum, tincidunt metus.
        </p>
      </div>

      <div className="intro-content">
        <div className="intro-item">
          <img src={him} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni unde
            facilis dolores quidem nesciunt veritatis, obcaecati hic facere
            maiores pariatur sit harum quae placeat sequi cum consequuntur
            aspernatur delectus fuga.
          </p>
        </div>

        <div className="intro-item">
          <img src={her} alt="her" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            reiciendis quis impedit molestias dolore beatae eligendi dolorem
            quod natus deleniti inventore sint saepe dignissimos consectetur
            nisi, voluptatum veniam odit? Modi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
