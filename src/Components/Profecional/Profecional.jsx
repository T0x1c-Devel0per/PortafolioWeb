import React from 'react'
import './Profecional.CSS'
import { useInView } from 'framer-motion';
import { useRef } from 'react';


function Profesional() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    return (
        <div className='full-container profecional-full-container' id='aboutme'>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div className='container profecional-description'>
                <h1 ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                    }}
                > -Sobre mi</h1>
                <div className='row gap-3 p-4'>

                    <section
                        className='col-sm-12 description-profile'
                    >
                        <h1 className='title'>Perfil</h1>
                        <p>
                            Soy desarrollador de aplicaciones web y creador de contenido multimedia, combino estas dos habilidades para crear
                            soluciones creativas, dinámicas y sostenibles con un alto rendimiento, cuento con la experiencia en la creación de
                            aplicaciones web y bases de datos para la gestión de usuarios, clientes e inventario, soy una persona proactiva, organizada y en constante aprendizaje me gusta colaborar en equipo y solucionar problemas.
                        </p>
                    </section>
                    <section className='col-sm description-habilites'>
                        <h1>Habilidades</h1>
                        <p>Poseo conocimientos en bases de datos relacionales, estructura de datos, creación de aplicaciones Web responsive, Json, Node.js y otras herramientas como:   </p>
                        <ul>
                            <li>
                                <p>CSS <img src="/src/assets/icons/CSSicon.png" className="css-icon" /></p>
                            </li>
                            <li>
                                <p>JavaScript <img src="/src/assets/icons/JSicon.png" className="js-icon" /></p>
                            </li>
                            <li>
                                <p>React <img src="/src/assets/icons/REACTicon.png" className="jsx-icon" /></p>
                            </li>
                            <li>
                                <p>PHP <img src="/src/assets/icons/PHPicon.png" className="php-icon" /></p>
                            </li>
                            <li>
                                <p>SQL/NoSql <img src="/src/assets/icons/SQLicon.png" className="sql-icon" /></p>
                            </li>

                        </ul>
                    </section>
                    <section className='col-sm description-history'>
                        <h1 className='title'>Trayecto</h1>
                        <p>
                            A lo largo de mi trayecto en este maravilloso campo he logrado sacar provecho a los conocimientos brindados por dos destacadas
                            universidades, la Universidad Nacional de Colombia y La Universidad de Antioquia gracias a varias certificaciones que logrado
                            con ellas mismas en el trascurso de mi formación como programador.                       </p>
                    </section>

                </div>
            </div>

        </div>
    )
}

export default Profesional