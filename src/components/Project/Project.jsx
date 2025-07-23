import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { CardProjects } from '../CardProjects/CardProject.jsx';
import { pedirDatos } from '../../helpers/pedirDatos';
import { Spinner } from "../Spinner/Spinner.jsx"; // loader visual

export const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedProjects = localStorage.getItem('projects');

    if (cachedProjects) {
      setProjects(JSON.parse(cachedProjects));
      setLoading(false);
    }

    pedirDatos().then((res) => {
      setProjects(res);
      localStorage.setItem('projects', JSON.stringify(res));
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div className='navbar-contain'>
        <Navbar />
      </div>
      <div className='all-projects'>
        <div className='projects-org'>
          {loading ? (
            <Spinner />
          ) : (
            <CardProjects projects={projects} />
          )}
        </div>
      </div>
    </div>
  );
};
