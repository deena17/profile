import React from 'react'

const Project = ({projects}) => {
  return (
    <>
        { projects.map(p => 
            <div class="project" key={ p.id }>
                <h5 class="project-title"><i class="fa fa-plus-circle"></i> { p.title } </h5>
                <p class="project-description">{ p.description }</p>
            </div>    
        )}
    </>
  )
}

export default Project
