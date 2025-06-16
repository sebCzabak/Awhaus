import React, { useState } from 'react';
import Modal from './Modal';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative, EffectCoverflow } from 'swiper/modules'; 

import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/effect-creative'
import 'swiper/css/effect-coverflow'
import './ImageCarousel.css'; 


interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  description?: string;
}

interface ImageCarouselProps { 
  images: GalleryImage[];
  title: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); 
  const [swiperRef, setSwiperRef] = useState<any>(null); 

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!swiperRef) return;
    if (direction === 'next') {
      swiperRef.slideNext();
    } else {
      swiperRef.slidePrev();
    }
  };

  return (
       <section className="image-carousel-section">
      <h2 className="image-carousel-title">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        // Zmniejsz spaceBetween, aby slajdy były bliżej siebie,
        // ale nie nachodziły, jeśli efekt tego nie wymusza
        spaceBetween={50} // Zmniejszono odstęp
        slidesPerView={3}
        centeredSlides={false}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0, // Ważne: zero rotacji, aby były prosto
          stretch: 0, // Ważne: zero rozciągania/ściskania
          depth: 100, // Zwiększ głębię, aby slajdy były bardziej oddalone w osi Z
          modifier: 1,
          slideShadows: false, // Usuń cienie
        }}
        // Ustawienie breakpoints (upewnij się, że są spójne)
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
          },
          1024: {
            slidesPerView:3,
            spaceBetween: 50, // Możesz dostosować, jeśli chcesz większy odstęp na desktopie
            centeredSlides: true,
          },
        }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <div className="carousel-item" onClick={() => openModal(index)}> 
              <img src={image.src} alt={image.alt} className="carousel-thumbnail" loading="lazy" /> 
              {image.description && <p className="carousel-item-description">{image.description}</p>} 
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
       
        {images.length > 0 && (
          <div className="modal-carousel-container">
            <Swiper
              modules={[Navigation]} 
              initialSlide={currentImageIndex} 
              slidesPerView={1}
              navigation
              loop={true}
              className="myModalSwiper" 
              onSwiper={(swiper) => swiper.slideTo(currentImageIndex)} 
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="modal-image-content">
                    <img src={image.src} alt={image.alt} className="modal-full-image" />
                    {image.description && (
                      <p className="modal-image-description">{image.description}</p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ImageCarousel; // Zmieniona nazwa eksportu