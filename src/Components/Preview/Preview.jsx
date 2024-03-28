import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import astro from '../../assets/astronauta.svg'


import './Preview.css'

function Preview() {
    const controls = useAnimation();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        controls.start({ y: scrollY * 1.5 }); 
    }, [scrollY, controls]);

    return (
        <div id='previewId' className='full-container'>
            <div className='container preview-container'>
                <motion.div className='row'
                    initial={{ y: 0 }}
                    animate={controls}>
                    <div className='col-sm'>
                        <motion.section
                            className='container tex-section'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 500,
                                    restDelta: 0.001
                                },
                                delay: 0.5,
                            }}>
                            <p>Hola! Soy</p>
                            <h1>
                                <span>J</span>uan
                            </h1>
                            <h1>
                                <span>S</span>anchez
                            </h1>
                            <p>
                                <span>Apasionado</span> Programador Full Stack
                                con un <span>amor</span> por la Fotografía, Diseño Gráfico y la Tecnología.
                                Mi <span>objetivo</span> es combinar mi  <span>experiencia</span> en
                                desarrollo web con mi <span>creatividad</span> visual
                                para crear <span>soluciones</span> únicas y atractivas.
                            </p>
                            <motion.div className='buttons-cont'>
                                <a>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <GitHubIcon />
                                    </motion.button>
                                </a>
                                <a>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <LinkedInIcon />
                                    </motion.button>
                                </a>
                            </motion.div>
                            <div className='container scroll-cont d-flex'>
                                <a href='#aboutme'>
                                    <motion.button className='scroll-button'
                                        initial={{ y: 0 }}
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                        }}
                                    >
                                        <ArrowDropDownIcon />
                                    </motion.button>
                                </a>
                            </div>
                        </motion.section>

                    </div>
                    <div className='col-sm'>
                        <motion.div
                            className='container astro-cont'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 500,
                                    restDelta: 0.001
                                },
                                delay: 0.5,
                            }}>
                            <motion.img
                                className='astro-img'
                                src={astro}
                                alt="Mi Imagen"
                                initial={{ y: 0 }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Preview
