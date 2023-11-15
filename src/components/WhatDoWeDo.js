import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktopAlt } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import people from "../assets/images/wedobannertwo.jpg"
import { useEffect, useState } from 'react';

import "../assets/css/style.css"

const WhatDoWeDo = () => {
    const [ countProjects, setCountProjects ] = useState(0);
    const [ countUsers, setCountUsers ] = useState(0);
    const [ countSatisfaction, setCountSatisfaction ] = useState(0);

    const animateNumbers = () => {
        const duration = 3000; // 3 segundos
        const framesPerSecond = 30;
        const totalFrames = (duration / 1000) * framesPerSecond;

        const incrementProjects = 6 / totalFrames;
        const incrementUsers = 1500 / totalFrames;
        const incrementSatisfaction = 91 / totalFrames; // Corregí este valor para reflejar el 291%

        let frame = 0;

        const updateNumbers = () => {
            setCountProjects((prevCount) => prevCount + incrementProjects);
            setCountUsers((prevCount) => prevCount + incrementUsers);
            setCountSatisfaction((prevCount) => prevCount + incrementSatisfaction);

            frame++;

            if (frame < totalFrames) {
                requestAnimationFrame(updateNumbers);
            }
        };

        updateNumbers(); // Iniciar la animación
    };

    useEffect(() => {
        const handleScroll = () => {
            const h1Element = document.querySelector('.impact-container h1');
            const elementTop = h1Element.getBoundingClientRect().top;
            const triggerOffset = window.innerHeight - 150; // Ajusta según tus necesidades

            if (elementTop < triggerOffset && elementTop > -h1Element.offsetHeight && countProjects === 0) {
                animateNumbers();
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento de scroll cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ countProjects ]); // Solo reactiva el efecto cuando countProjects cambia
    return (
        <div className='what-wedo'>
            <h1 className='section-title'>Que Hacemos<span className='dot-title'>.</span></h1>
            <div className='title-line'></div>
            <div className='container container-flex'>
                <div className='wedo-item'>
                    <h1 className='wedo-icon'><FontAwesomeIcon icon={faPalette}></FontAwesomeIcon></h1>
                    <h2 className='wedo-subtitle'>Desatamos la Creatividad</h2>
                    <p className='wedo-text'>
                        En esta fase inicial, exploramos ideas y desatamos nuestra creatividad para encontrar soluciones únicas que se alineen perfectamente con tus objetivos.
                    </p>
                </div>
                <div className='wedo-item'>
                    <h1 className='wedo-icon'><FontAwesomeIcon icon={faRocket}></FontAwesomeIcon></h1>
                    <h2 className='wedo-subtitle'>Desarrollo Web Eficiente</h2>
                    <p className='wedo-text'>
                        Transformamos tus visiones en realidad.
                        Con un equipo de diseñadores y programadores dedicados, traducimos tus conceptos en un diseño web visualmente atractivo y funcional.
                    </p>
                </div>
                <div className='wedo-item'>
                    <h1 className='wedo-icon'><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></h1>
                    <h2 className='wedo-subtitle'>Potenciamos Tu Presencia:</h2>
                    <p className='wedo-text'>
                    No solo creamos un sitio web, sino que esculpimos experiencias digitales inolvidables. Cada detalle está diseñado para cautivar y dejar una impresión duradera.
                    </p>
                </div>
                <div className='wedo-impact wedo-item'>
                    <div className='impact-container'>
                        <div>
                            <p>proyectos hechos</p>
                            <h1>+{Math.round(countProjects)}</h1>
                        </div>
                        <div>
                            <p>usuarios alcanzados</p>
                            <h1>+{Math.round(countUsers)}</h1>
                        </div>
                        <div>
                            <p>satisfacción del cliente</p>
                            <h1>{Math.round(countSatisfaction)}%</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-img'></div>
        </div>
    )
}

export default WhatDoWeDo