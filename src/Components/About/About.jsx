import React from 'react';
import './about.css'; 

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Discover, cook, and enjoy delicious meals with Recipe Master.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Welcome to Recipe Master!</h2>
          <p>
            At Recipe Master, we believe that cooking should be fun, simple, and accessible to everyone. Whether you're a seasoned chef or just starting your culinary journey, we’re here to inspire you with a vast collection of mouth-watering recipes from around the world.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Recipe Master?</h2>
          <ul>
            <li><strong>Fresh Ideas:</strong> Get inspired by new, random recipes every time you visit.</li>
            <li><strong>Convenient Search:</strong> Search by ingredient, meal name, or even dietary restrictions.</li>
            <li><strong>Save Favorites:</strong> Bookmark your favorite recipes and come back to them easily.</li>
            <li><strong>Community of Food Lovers:</strong> Join a community that celebrates the art of cooking.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Join Us on a Culinary Journey</h2>
          <p>
            Whether you're looking for a quick weeknight dinner, a new dessert to impress your guests, or just some kitchen inspiration, Recipe Master is here to help you on your culinary adventure.
          </p>
        </div>
      </div>
    </div>
  );
}
