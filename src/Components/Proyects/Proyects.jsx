import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Proyects.css';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
function Proyects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    return (
        <div id='Projects' className='full-container projects-container d-flex justify-content-center'>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div className='container project-container'>
                <h1
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                    }}
                >Proyectos</h1>
                <div className='row d-flex justify-content-center'>
                    <div className='col-sm-6'>
                        <div className='container project-cont'>
                            <h1>Sistema CRUD</h1>
                            <div className='container preview-project one-project'>
                            </div>
                            <section className='row'>
                                <h4>Descripción: </h4>
                                <p>Aplicación que optimiza la gestión y la visualización de la información relacionada a los clientes de un pequeño negocio, permite una experiencia mejorada para el usuario.</p>
                                <div className='col'>
                                    <motion.button
                                        className='project-button'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <GitHubIcon />
                                    </motion.button>

                                </div>
                                <div className='col'>
                                    <motion.button
                                        className='project-button'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <LinkedInIcon />
                                    </motion.button>

                                </div>
                                <div className='col'>
                                    <motion.button
                                        className='project-button'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <LinkedInIcon />
                                    </motion.button>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='container project-cont'>
                            <h1>Clon Slack</h1>
                            <div className='container preview-project two-project'>
                            </div>
                            <section className='row'>
                                <h4>Descripción: </h4>
                                <p>Desarrollé un clon de Slack como parte de mi exploración en el campo de aplicaciones industriales y para aprender más sobre cómo gestionar datos en tiempo real utilizando Firebase</p>
                                <div className='col'>
                                    <motion.button
                                        className='project-button'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <GitHubIcon />
                                    </motion.button>

                                </div>
                                <div className='col'>
                                    <motion.button
                                        className='project-button'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <LinkedInIcon />
                                    </motion.button>

                                </div>
                                <div className='col'>
                                    <motion.button
                                        className='project-button'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <LinkedInIcon />
                                    </motion.button>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className='col-sm-6'>

                        <div className='container project-cont'>
                            <h1>Clon Slack</h1>
                            <div className='container preview-project two-project'>
                            </div>
                            <section className='row'>
                                <h4>Descripción: </h4>
                                <p>Desarrollé un clon de Slack como parte de mi exploración en el campo de aplicaciones industriales y para aprender más sobre cómo gestionar datos en tiempo real utilizando Firebase</p>
                                <div className='col'>
                                    <motion.button
                                        className='project-button'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <GitHubIcon />
                                    </motion.button>

                                </div>
                                <div className='col'>
                                    <motion.button
                                        className='project-button'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <LinkedInIcon />
                                    </motion.button>

                                </div>
                                <div className='col'>
                                    <motion.button
                                        className='project-button'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        <LinkedInIcon />
                                    </motion.button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyects