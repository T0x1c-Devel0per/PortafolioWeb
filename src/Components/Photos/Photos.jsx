import React, { useState, useRef } from 'react';
import './Photos.css';
import Imagen2 from '../../assets/2.jpg';
import Imagen4 from '../../assets/4.jpg';
import Imagen5 from '../../assets/5.jpg';
import Imagen6 from '../../assets/6.jpg';
import Imagen7 from '../../assets/7.jpg';
import Imagen8 from '../../assets/8.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

function Photos() {
    const photos = [Imagen2, Imagen5, Imagen4, Imagen6, Imagen7, Imagen8];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    // Funciones para manejar el modal
    const openModal = (index) => {
        setCurrentPhotoIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const showNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const showPrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    return (
        <>
            <section className="full-container full-photo-container" id='Photos'>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div className="container photo-container">
                    <h1
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                        }}
                    >
                        -Mi Trabajo
                    </h1>
                    <section className="row gap-4 d-flex justify-content-center" >
                        {photos.map((photo, i) => (
                            <motion.div
                                className="col-sm-3 photo-card"
                                key={i}
                                onClick={() => openModal(i)}
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    ease: "linear",
                                    duration: 0.2,
                                    x: { duration: 0.5 }
                                }}

                            >
                                <img
                                    className="individual-photo"
                                    src={photo}
                                    alt={`Photo ${i}`}
                                />
                            </motion.div>
                        ))}
                    </section>
                </div>
            </section>

            {isModalOpen && (
                <div className="photo-modal" onClick={closeModal}>
                    <span className="close-modal">&times;</span>
                    <motion.img
                        src="/src/assets/icons/arrow-planet.svg"
                        alt="Prev"
                        className="prev"
                        onClick={(e) => { e.stopPropagation(); showPrevPhoto(); }}
                        animate={{
                            x: [null, -20, 0], // Animación hacia adelante
                            scale: [null, 1.5, 1], // Escala aumenta y luego vuelve a la normalidad
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, delay: 1}}
                    />
                    <img src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex}`} className="modal-content" />
                    <motion.img
                        src="/src/assets/icons/arrow-planet1.svg"
                        alt="Next"
                        className="next"
                        onClick={(e) => { e.stopPropagation(); showNextPhoto(); }}
                        animate={{
                            x: [null, 20, 0], // Animación hacia adelante
                            scale: [null, 1.5, 1], // Escala aumenta y luego vuelve a la normalidad
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5}}
                    />
                </div>
            )}
        </>
    );
}

export default Photos;
