import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InvestmentGrid from './components/Investment';
import Modal from "./components/Modal";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ImageCarousel from "./components/ImageCarousel";
import StickyButtons from './components/StickyButtons';

import './App.css';

import companyLogo from './assets/logo3.png';
import officeImage from './assets/office.jpg';
//img inwestycje
import invImage1a from './assets/KartyLokali/przykładowe.jpg'
import invImage1b from'./assets/KartyLokali/przykładowe.jpg'
import invImage2a from './assets/KartyLokali/przykładowe.jpg'
import invImage2b from './assets/KartyLokali/przykładowe.jpg'
//img galeria
import galleryImg1 from './assets/Galleria/osiedle.jpg'; 
import galleryImg2 from './assets/Galleria/2.jpg';
import galleryImg3 from './assets/Galleria/3.jpg';
import galleryImg4 from './assets/Galleria/4.jpg';
import galleryImg5 from './assets/Galleria/5.jpg';
import galleryImg6 from './assets/Galleria/6.jpg';


 export interface Investment {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  status: 'W Budowie' | 'W Sprzedaży' | 'Zrealizowano' | 'Wkrótce';
  priceFrom?: number;
  areaFrom?: number;
  description: string;
  // Nowe pola dla szczegółów inwestycji:
  fullDescription?: string;
  galleryImages?: { id: string; src: string; alt: string; description?: string; }[];
  floorPlans?: { id: string; src: string; alt: string; description?: string; }[];
  model3DImages?: { id: string; src: string; alt: string; description?: string; }[];
  }
  const companyDetails = { 
    name: "AWHaus",
    phone: "+48 123 456 789",
    email: "kontakt@awhaus.pl",
    address: "ul. Budowlana 10, 45-001 Opole",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.080922880153!2d17.9257262!3d50.6698657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47119f91a5e0b21b%3A0x2f9b8c0c9e6d0a7a!2sPolitechnika%20Opolska!5e0!3m2!1spl!2spl!4v1718556637025!5m2!1spl!2spl" // Twój URL mapy!
  };
  const navLinks = [
    { text: 'Start', url: '#hero' }, 
    { text: 'Inwestycje', url: '#open-investments-modal' }, 
    { text: 'O nas', url: '#o-nas' }, 
    { text: 'Kontakt', url: '#kontakt' }, 
  ];

    const featuredInvestments: Investment[] = [
    {
      id: 'osiedle-sloneczne',
      imageUrl: invImage1a,
      title: 'Osiedle Słoneczne',
      location: 'Opole, ul. Słoneczna 15',
      status: 'W Sprzedaży',
      priceFrom: 350000,
      areaFrom: 50,
      description: 'Nowoczesne apartamenty w spokojnej okolicy z widokiem na zieleń. Idealne dla rodzin i singli.'
    },
    {
      id: 'domy-nad-stawem',
      imageUrl: invImage1b,
      title: 'Domy Nad Stawem',
      location: 'Opole, ul. Stawowa 10',
      status: 'W Budowie',
      priceFrom: 680000,
      areaFrom: 120,
      description: 'Eleganckie domy jednorodzinne z dużymi ogrodami, zaledwie 15 minut od centrum Opola.'
    },
    {
      id: 'apartamenty-centrum',
      imageUrl: invImage2a,
      title: 'Apartamenty Centrum',
      location: 'Opole, ul. Rynek 5',
      status: 'Wkrótce',
      description: 'Luksusowe apartamenty w samym sercu miasta, idealne dla ceniących miejski styl życia.',
      // Brak priceFrom i areaFrom bo status 'Wkrótce'
    },
    {
      id: 'rezydencja-parkowa',
      imageUrl: invImage2b,
      title: 'Rezydencja Parkowa',
      location: 'Opole, ul. Parkowa 2',
      status: 'Zrealizowano',
      priceFrom: 420000,
      areaFrom: 65,
      description: 'Zakończona inwestycja, komfortowe mieszkania blisko parku. Ostatnie sztuki dostępne!'
    },
  ];
 const galleryImages = [
    { id: 'g1', src: galleryImg1, alt: 'Widok na osiedle', description: 'Elegancki widok na front inwestycji.' },
    { id: 'g2', src: galleryImg2, alt: 'Wnętrze salonu', description: 'Przestronny salon z dużą ilością światła.' },
    { id: 'g3', src: galleryImg3, alt: 'Kuchnia', description: 'Nowoczesna kuchnia z pełnym wyposażeniem.' },
    { id: 'g4', src: galleryImg4, alt: 'Łazienka', description: 'Funkcjonalna łazienka w wysokim standardzie.' },
    { id: 'g5', src: galleryImg5, alt: 'Sypialnia', description: 'Przytulna sypialnia z widokiem na okolicę.' },
    { id: 'g6', src: galleryImg6, alt: 'Zabudowa osiedla', description: 'Harmonijna zabudowa w otoczeniu zieleni.' },
  ];

function App(){
  const [isInvestmentsModalOpen,setIsInvestmentsModalOpen]=useState(false);

  const handleHeroButtonClick = () => {
    setIsInvestmentsModalOpen(true); 
  };

  const handleNavLinkClickInApp = (url: string) => {
    if (url === '#open-investments-modal') {
      setIsInvestmentsModalOpen(true);
    } else {
   
      const targetId = url.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return(
    <div className="app-container">
      <Navbar
        companyName="AWHaus"
        logoSrc={companyLogo}
        links={navLinks}
        onNavLinkClick={handleNavLinkClickInApp} 
      />
     <div id="hero">
        <HeroSection
          title="Domy na zacisznych przedmieściach Opola"
          subtitle="Odkryj Komfort i Styl Życia"
          description="Centrum miasta jest oddalone tylko o 10 minut jazdy samochodem. W okolicy znajdziesz bogate lasy, a na wyspie Bolko z przepięknym ogrodem zoologicznym oraz nowo powstałym parkiem, czy też basen Wodna Nuta lub kampus Politechniki Opolskiej możesz wybrać się rowerem (10 minut). Dostęp do komunikacji miejskiej i dogodne połączenie do Opola oraz autostrady A4."
          buttonText="Zobacz Nasze Inwestycje" 
          onButtonClick={handleHeroButtonClick}
          backgroundImage="/hero-background.jpg"
        />
      </div>
    <div id="galeria">
        <ImageCarousel title="Galeria Zrealizowanych Inwestycji" images={galleryImages} /> 
      </div>
    
    <div id="o-nas"> 
        <AboutSection
          title="O Firmie AWHaus"
          description="Jesteśmy doświadczonym deweloperem, który od ponad 15 lat realizuje projekty mieszkaniowe na terenie Opola i okolic. Naszą misją jest tworzenie funkcjonalnych i estetycznych przestrzeni, które odpowiadają na potrzeby współczesnych rodzin. Stawiamy na jakość wykonania, innowacyjne rozwiązania i zrównoważony rozwój."
          imageUrl={officeImage} 
          points={[
            "Ponad 15 lat doświadczenia w branży",
            "Setki zadowolonych klientów",
            "Nacisk na jakość i nowoczesne technologie",
            "Troska o zrównoważony rozwój i ekologię",
            "Terminowość i transparentność działań"
          ]}
        />
      </div>
      <div id="kontakt"> 
        <ContactSection
          title="Skontaktuj się z nami"
          description="Masz pytania dotyczące naszych inwestycji lub chcesz umówić się na spotkanie? Wypełnij formularz lub skontaktuj się z nami bezpośrednio."
          address="ul. Ozimska 180, 45-001 Opole"
          phone="+48 123 456 789"
          email="kontakt@awhaus.pl"
          mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d751.8144228739521!2d17.931067969078935!3d50.668118409367736!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1750012895901!5m2!1spl!2spl"
        />
      </div>

       <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#333', color: 'white', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} AWHaus. Wszelkie prawa zastrzeżone.</p>
      </footer>

      <Modal isOpen={isInvestmentsModalOpen} onClose={() => setIsInvestmentsModalOpen(false)}>
        <InvestmentGrid title="Wszystkie Nasze Inwestycje" investments={featuredInvestments} />
      </Modal>

      <StickyButtons
        companyPhone={companyDetails.phone}
        companyEmail={companyDetails.email}
        contactFormTitle="Wyślij do nas zapytanie"
        contactFormDescription="Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej, jak to możliwe."
        companyAddress={companyDetails.address}
        mapEmbedUrl={companyDetails.mapUrl}
      />
    </div>
  )
}
export default App;