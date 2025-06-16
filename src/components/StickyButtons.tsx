import React, { useState } from 'react';
import { MdMail, MdPhone } from 'react-icons/md'; 
import Modal from './Modal'; 
import ContactSection from './ContactSection'; 
import './StickyButtons.css'; 

interface StickyButtonsProps {
  companyPhone: string;
  companyEmail: string; 
  contactFormTitle: string;
  contactFormDescription: string;
  companyAddress: string;
  mapEmbedUrl: string;
}

const StickyButtons: React.FC<StickyButtonsProps> = ({
  companyPhone,
  companyEmail,
  contactFormTitle,
  contactFormDescription,
  companyAddress,
  mapEmbedUrl,
}) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openPhoneModal = () => setIsPhoneModalOpen(true);
  const closePhoneModal = () => setIsPhoneModalOpen(false);

  return (
    <>
      <div className="sticky-buttons-container">
        <button className="sticky-button" onClick={openContactModal} aria-label="Otwórz formularz kontaktowy">
          <MdMail size={24} /> 
        </button>
        <button className="sticky-button" onClick={openPhoneModal} aria-label="Otwórz okno połączenia telefonicznego">
          <MdPhone size={24} /> 
        </button>
      </div>

      
      <Modal isOpen={isContactModalOpen} onClose={closeContactModal}>
        <ContactSection
          title={contactFormTitle}
          description={contactFormDescription}
          address={companyAddress}
          phone={companyPhone}
          email={companyEmail}
          mapEmbedUrl={mapEmbedUrl}
        />
      </Modal>

      {/* Modal dla numeru telefonu */}
      <Modal isOpen={isPhoneModalOpen} onClose={closePhoneModal}>
        <div className="phone-modal-content">
          <h3>Zadzwoń do nas!</h3>
          <p>Nasi doradcy są gotowi odpowiedzieć na Twoje pytania.</p>
          <a href={`tel:${companyPhone.replace(/\s/g, '')}`} className="phone-number-link">
            <MdPhone size={20} /> {companyPhone}
          </a>
          <p>Jesteśmy dostępni od poniedziałku do piątku, 9:00 - 17:00.</p>
        </div>
      </Modal>
    </>
  );
};

export default StickyButtons;