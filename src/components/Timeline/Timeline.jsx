import React, { useEffect, useRef } from 'react';


const estudios = [
  {
    titulo: "Técnica en Industrias del proceso con especialización en Petróleo y Petroquímica",
    lugar: "Esc 4-003 Emilio Civit",
    periodo: "2005 - 2011",
    
  },
  {
    titulo: "Técnica en laboratorio de análisis clínicos",
    lugar: "Universidad Nacional de Cuyo",
    periodo: "2014 - 2018",
    
  },
  {
    titulo: "Especialización en bacteriología del Hospital Garraham",
    lugar: "Hospital Garraham",
    periodo: "2019",
  },
  {
    titulo: "Diplomatura en Desarrollo Frontend",
    lugar: "Coder House",
    periodo: "2021 - 2023",
  },
  {
    titulo: "Diplomatura en Diseño UX - UI",
    lugar: "Coder House",
    periodo: "2023 - 2024",
  },
  {
    titulo: "Curso de Product Manager",
    lugar: "Coder House",
    periodo: "Enero 2025 - Marzo 2025",
  },
  {
    titulo: "Curso de herramientas de diseño como Photoshop e Ilustrator",
    lugar: "Coder House",
    periodo: "Abril 2025 - Junio 2025",
  },
];

const Timeline = () => {

     const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return (
    <div className="timeline-complete">
        <div className="timeline-title-conteiner"> 
            <div >
                <h3 className="timeline-title">Estudios y competencias</h3>
            </div>
            <div >
                <p className="timeline-subtitle">La combinación entre mi formación técnica, experiencia en salud, desarrollo y diseño me convierten en una candidata resiliente y versatil</p>
            </div>
        </div>
    <div className="timeline-wrapper">
      <div className="timeline-line"></div>
      {estudios.map((item, index) => (
        <div
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p>{item.periodo}</p>
            <h3>{item.titulo}</h3>
            <h4>{item.lugar}</h4> 
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default Timeline;
