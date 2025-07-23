
import {ProjectCard} from "../ProjectCard/ProjectCard";

export const CardProjects = ({projects}) => {
    console.log (projects)
  return (
    <div>
      <div className=" project-home-container" >{/* aquí hay un mape del array con todos nuestros proyectos */}
        {projects.map((project)=> <ProjectCard project={project} key={project.id} />)}
      </div>
    </div> 
    
  )
}