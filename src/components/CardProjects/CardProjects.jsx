
import {Card} from '../Card/Card';
export const CardProjects = ({projects}) => {
    console.log (projects)
  return (
    <div> {/* aquí hay un mape del array con todos nuestros proyectos */}
        {projects.map((project)=> <Card project={project} key={project.id} />)}
    </div>
  )
}
