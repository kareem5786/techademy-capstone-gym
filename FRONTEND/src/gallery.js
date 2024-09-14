import React, { useState } from 'react';
import './Gallery.css';

import image12 from './gym1.jpeg';
import image13 from './gym2.jpeg';
import image14 from './gym3.jpeg';
import image15 from './gym4.jpeg';
import image16 from './gym5.jpeg';
import image17 from './gym6.jpeg';
import image18 from './gym7.jpeg';
import image19 from './gym8.jpeg';
import image20 from './gym9.jpeg';
import image21 from './gym10.jpeg';
import image22 from './gym11.jpeg';




const images = [
    { id: 1, src: image12, alt: 'Gym Interior 1' },
    { id: 2, src: image13, alt: 'Gym Interior 2' },
    { id: 3, src: image14, alt: 'Gym Equipmentt' },
    { id: 4, src: image15, alt: 'Gym Equipmente' },
    { id: 5, src: image16, alt: 'Gym Equipments' },
    { id: 6, src: image17, alt: 'Gym Interior 1' },
    { id: 7, src: image18, alt: 'Gym Interior 2' },
    { id: 8, src: image19, alt: 'Gym Equipmentt' },
    { id: 9, src: image20, alt: 'Gym Equipmente' },
    { id: 10, src: image21, alt: 'Gym Equipments' },
    { id: 11, src: image22, alt: 'Gym Equipments' },

    // Add more images as needed
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className="gallery-item"
                        onClick={() => openModal(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
