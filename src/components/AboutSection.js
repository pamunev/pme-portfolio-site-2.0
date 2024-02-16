import React from "react";

function AboutSection() {
  return (
    <div className="content-section" id="section-about">
      <div className="content-header">About</div>
      <div className="content-body">
        <div className="content-flex-container">
          <p className="bio-paragraph">
            I’m a <b>full-stack software developer</b> living in the beautiful,
            blazing hot city of Austin, Texas. Aside from my proficiency in
            full-stack web development (<b>React, Node.js</b>, etc.), I’ve also
            developed strong skills in collaboration, communication, and
            quality, customer-centered product creation through a successful and
            dedicated career in education and social media marketing. I am also
            active in the Austin theatre scene as an actor and a playwright.
            <br />
            <br />
            Originally from Colombia, I have lived in 5 countries and love
            traveling around the world. I enjoy devising and building creative
            coding projects, and I spend a lot of my time learning new skills
            and concepts. I strive to continuously learn more ways to create
            software that I can be proud of.
            <br />
            <br />
            Currently, I am <b>available for hire or freelance work</b>. For
            inquiries regarding web development,{" "}
            <a href="mailto:pamunev@gmail.com">shoot me an email</a>. My resume
            is available <b>here</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
