import React from 'react'

const Experience = ({experiences}) => {
  return (
    <>
        { experiences.map(e => 
          <div class="experience">
            <h5 class="experience-title">{ e.designation } / {e.employeer}</h5>
            <p class="duration"><i class="fa fa-calendar mr-3"></i>{ e.duration}</p>
            <p class="client">{ e.client }</p>
          </div>  
        )}
    </>
  )
}

export default Experience
