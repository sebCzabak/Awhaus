import React from 'react';
import './HeroSection.css'; 

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  backgroundImage: string; 
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
  backgroundImage,
}) => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <button className="hero-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;