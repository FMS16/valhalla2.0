import React from 'react'
import "../assets/css/style.css"
import signatureOne from "../assets/images/firmaRandom.png"
import signatureTwo from "../assets/images/firmaRandomDos.png"

const About = () => {

    return (
        <div className='about'>
            <h1 className='section-title'>Nuestra historia<span className='dot-title'>.</span></h1>
            <div className='title-line'></div>
            <div className='container container-flex'>
                <div className='about-item'>
                    <p>Valhalla fue fundada en el año 2023 por dos apasionados amigos, Fabricio y Lucas, que comparten una visión común y un amor inquebrantable por el diseño gráfico y el desarrollo web. Juntos, fusionaron sus talentos y experiencias para crear una agencia creativa dedicada a hacer realidad tus sueños digitales.</p>
                    <p>En Valhalla, nuestra misión es clara: transformar tus ideas en experiencias visuales cautivadoras y sitios web impresionantes. Trabajamos incansablemente para impulsar tu presencia en línea y ayudarte a alcanzar tus objetivos de negocio. Cada proyecto es una oportunidad para desafiar los límites de la creatividad y la innovación.</p>
                    <p>En Valhalla, estamos comprometidos con la excelencia y la satisfacción del cliente. Permítenos ser tu socio creativo y llevar tus ideas a nuevas alturas.</p>
                </div>
                <div className='about-item signatures'>
                    <div className='signature-item'>
                        <img className='signature-img' src={signatureOne} />
                        <h1>Fabricio Secondo</h1>
                        <p>Co-Founder</p>
                    </div>
                    <div className='signature-item'>
                        <img className='signature-img' src={signatureTwo} />
                        <h1>Lucas Barrio</h1>
                        <p>Co-Founder</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About