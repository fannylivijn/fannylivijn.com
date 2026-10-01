import { Link } from "react-router-dom";
import ProjectVideo from "../components/ProjectVideo.jsx";
import { projectList } from "../data/projectInfo.js";

// Image tiles and captions open the project page; video tiles play in place.
export default function Projects() {
  return (
    <section className="projects">
      {projectList.map((project) => {
        const href = `/projects/${project.slug}`;
        return (
          <figure key={project.slug} className="project">
            {project.video ? (
              <ProjectVideo
                className="project-media"
                src={project.video}
                poster={project.image}
                label={project.caption}
              />
            ) : (
              <Link to={href} className="project-link">
                <img className="project-media" src={project.image} alt={project.caption} loading="lazy" />
              </Link>
            )}
            <figcaption>
              <Link to={href} className="project-link">
                <span className="project-number">({project.number})</span>
                {project.caption}
              </Link>
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
}
