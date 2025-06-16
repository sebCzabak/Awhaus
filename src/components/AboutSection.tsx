import React from 'react';
import './AboutSection.css'; 

interface AboutSectionProps {
  title: string;
  description: string;
  imageUrl?: string; 
  points?: string[]; 
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description, imageUrl, points }) => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">{title}</h2>
        <p className="about-description">{description}</p>
        {points && points.length > 0 && (
          <ul className="about-points">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
      {imageUrl && (
        <div className="about-image-wrapper">
          <img src={imageUrl} alt="O firmie" className="about-image" />
        </div>
      )}
    </section>
  );
};

export default AboutSection;