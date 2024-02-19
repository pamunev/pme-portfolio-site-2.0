import React from "react";

function CodeSection() {
  return (
    <div
      className="content-section alternate-section-background"
      id="section-code"
    >
      <div className="content-header">Code</div>
      <div className="content-body">
        <p>
          <a
            href="https://github.com/pamunev/restaurant-reservation-app"
            target="_blank"
            rel="noreferrer"
          >
            Periodic Tables
          </a>{" "}
          is a full-stack reservation and table management system for restaurant
          employees to use. Built with React and Node + Express.
        </p>
        <p>
          <a
            href="https://github.com/pamunev/we-love-movies-backend-capstone"
            target="_blank"
            rel="noreferrer"
          >
            WeLoveMovies
          </a>{" "}
          is the back-end of a movie website that allows users to search for and
          review their favorite movies. Built with Node + Express.
        </p>
        <p>
          My{" "}
          <a
            href="https://github.com/pamunev/flashcard-app-pablo-munoz-evers"
            target="_blank"
            rel="noreferrer"
          >
            Flashcard App
          </a>{" "}
          is a study tool that allows users to create and manage study card
          decks. Built with React and Node + Express.
        </p>
      </div>
    </div>
  );
}

export default CodeSection;
