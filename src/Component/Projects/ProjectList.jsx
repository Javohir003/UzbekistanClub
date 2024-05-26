import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projects';

const ProjectList = () => {
    return (
        <div className="project-list">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;
