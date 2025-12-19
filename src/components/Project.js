import React from "react";
import project from "./ProjectDetails";
import "../style.css";

export default function Project() {
  return (
    <div className="container my-5 project">

      {project.map((item, index) => (
        <div className="project-card row mb-5 p-4" key={index}>

          {/* LEFT CONTENT */}
          <div className="col-md-7">
            <h2 className="fw-semibold">{item.title}</h2>

            <ul className="mt-3">
              {item.descPoints.map((point, idx) => (
                <li key={idx} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <h6 className="fw-bold">TECH STACK</h6>
              <div className="d-flex flex-wrap gap-2">
                {item.tech.map((tech, idx) => (
                  <span className="tech-pill" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4">
              <strong>Developed:</strong> {item.timeline.developed} 
            </p>

            <div className="mt-3">
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-2"
              >
                Live Demo
              </a>

              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <div className="image-wrapper">
              {item.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={item.title}
                  className="img-fluid rounded"
                />
              ))}

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
