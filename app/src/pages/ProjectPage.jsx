import { Link, Navigate, useParams } from "react-router-dom";
import ProjectVideo from "../components/ProjectVideo.jsx";
import { findProject } from "../data/projectInfo.js";

// A single project, laid out like bygeorge-studio.com: a sticky header with the title
// on the left and Services / With on the right, then a two-column collage of media.
export default function ProjectPage() {
  const { slug } = useParams();
  const found = findProject(slug);
  if (!found) return <Navigate to="/projects" replace />;
  const { project, prev, next } = found;

  return (
    <article className="case">
      <header className="case-header">
        <h1 className="case-title">
          <span className="case-number">({project.number})</span> {project.title}
        </h1>
        <div className="case-meta">
          {project.services.length > 0 && (
            <>
              <p>Services:</p>
              <ul>
                {project.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </>
          )}
          {project.with && <p className="case-with">With: {project.with}</p>}
        </div>
      </header>

      <div className="case-gallery">
        {project.gallery.map((item, i) => (
          <figure key={i} className={`case-item case-item--${item.size || "large"}`}>
            {item.video ? (
              <ProjectVideo
                className="case-media"
                src={item.video}
                poster={item.image}
                label={item.caption || project.title}
              />
            ) : (
              <img className="case-media" src={item.image} alt={item.caption || project.title} loading="lazy" />
            )}
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <nav className="case-pager">
        <Link to={`/projects/${prev.slug}`}>← {prev.title}</Link>
        <Link to="/projects">All projects</Link>
        <Link to={`/projects/${next.slug}`}>{next.title} →</Link>
      </nav>
    </article>
  );
}
