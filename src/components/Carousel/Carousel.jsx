import React, { useEffect, useState } from 'react';

import { HTML } from '../../svg/HTML';
import { CSS } from '../../svg/CSS';
import { JavaScript } from '../../svg/JavaScript';
import { NodeJs } from '../../svg/NodeJs';
import { ReactJs } from '../../svg/ReactJs';
import { Bootstrap } from '../../svg/Bootstrap';
import { Photoshop } from '../../svg/Photoshop';
import { Illustrator } from '../../svg/Illustrator';
import { Figma } from '../../svg/Figma';

export const Carousel = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Simula carga para evitar parpadeos de renderizado
    const timer = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    return (
      <div className="tools-loading">
        Cargando herramientas...
      </div>
    );
  }

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide my-tools-container">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" />
      </div>

      <div className="carousel-inner tools-gap">
        {/* SLIDE 1 */}
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="title">
            <div className="title-name-tools">
              <p>Conocimientos</p>
            </div>
            <div className="title-subtitle-tools">
              <p>Lenguajes de Programación</p>
            </div>
          </div>
          <div className="tools-contain">
            <div className="tool-and-name"><HTML /><p>HTML</p></div>
            <div className="tool-and-name"><CSS /><p>CSS</p></div>
            <div className="tool-and-name"><JavaScript /><p>JavaScript</p></div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="carousel-item" data-bs-interval="6000">
          <div className="title">
            <div className="title-name-tools">
              <p>Conocimientos</p>
            </div>
            <div className="title-subtitle-tools">
              <p>Frameworks en programación</p>
            </div>
          </div>
          <div className="tools-contain">
            <div className="tool-and-name"><NodeJs /><p>NodeJS</p></div>
            <div className="tool-and-name"><ReactJs /><p>ReactJS</p></div>
            <div className="tool-and-name"><Bootstrap /><p>Bootstrap</p></div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className="carousel-item">
          <div className="title">
            <div className="title-name-tools">
              <p>Conocimientos</p>
            </div>
            <div className="title-subtitle-tools">
              <p>Herramientas de diseño</p>
            </div>
          </div>
          <div className="tools-contain">
            <div className="tool-and-name"><Figma /><p>Figma</p></div>
            <div className="tool-and-name"><Photoshop /><p>Photoshop</p></div>
            <div className="tool-and-name"><Illustrator /><p>Illustrator</p></div>
          </div>
        </div>
      </div>

      {/* CONTROLES */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};
