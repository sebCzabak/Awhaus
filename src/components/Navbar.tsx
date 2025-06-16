import React, { useState } from 'react'; 
import './Navbar.css';

interface NavbarProps {
  companyName: string;
  logoSrc?: string;
  links: {
    text: string;
    url: string;
  }[];
  onNavLinkClick:(url:string)=>void;
}

const Navbar: React.FC<NavbarProps> = ({ companyName, logoSrc, links,onNavLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleInternalClick = (event: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    event.preventDefault();
    onNavLinkClick(url);
    setIsOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {logoSrc ? (
          <a href="#hero" className="navbar-logo-link" onClick={(e) => handleInternalClick(e, '#hero')}>
            <img src={logoSrc} alt={`${companyName} logo`} className="navbar-logo" />
          </a>
        ) : (
          <a href="#hero" className="navbar-logo-link" onClick={(e) => handleInternalClick(e, '#hero')}>
            <span className="navbar-text-logo">{companyName}</span>
          </a>
        )}
      </div>

      <button className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="navbar-link"
              onClick={(e) => handleInternalClick(e, link.url)}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

