import React from 'react'

const Skill = ({skills}) => {

  return (
    <div>
        {
            skills.map(s => 
                <div key={s.id}>
                    <p className="skill-title">{ s.name }</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width:`${s.percent}%`}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{s.percent}%</div>
                    </div>
                </div>

            )
        }
    </div>
  )
}

export default Skill
