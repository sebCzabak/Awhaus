import React, { useState } from 'react';
import './ContactSection.css'; 

interface ContactSectionProps {
  title: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string; 
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  address,
  phone,
  email,
  mapEmbedUrl,
}) => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Wysłano formularz:', formData);
    alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">{title}</h2>
      <p className="contact-description">{description}</p>

      <div className="contact-grid">
        
        <div className="contact-form-container">
          <h3>Wyślij nam wiadomość</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Imię i Nazwisko</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adres E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Treść wiadomości</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Wyślij wiadomość</button>
          </form>
        </div>

       
        <div className="contact-info-map-container">
          <div className="contact-info">
            <h3>Dane kontaktowe</h3>
            <p><strong>Adres:</strong> {address}</p>
            <p><strong>Telefon:</strong> <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></p>
            <p><strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a></p>
            <p>Chętnie odpowiemy na wszystkie Twoje pytania.</p>
          </div>

          <div className="contact-map">
           
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja firmy AWHaus"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;