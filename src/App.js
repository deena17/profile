import React from 'react'

import skills from './resource/skills.json'
import projects from './resource/projects.json'
import experiences from './resource/experience.json'

import Skill from './components/Skill'
import Project from './components/Project'
import Profile from './components/Profile'
import Experience from './components/Experience'

import picture from './profile.jpg'
import './App.css'

function App() {
  return (
    <div className="container-fluid p-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <Profile profile={picture}/>
                        <div className="mt-4">
                            <Skill skills={skills} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Key Summary</h3>
                        <p style={{color:"#616a6b"}}>A dynamic professional with zeal to make a winning career in Front End UI Development.
                            Having 6+ years of differentiated IT experience in designing and developing web applications
                            Using UI technologies. Involved in implementation, testing, deployment and monitor &
                            maintenance stages of Software Development Life Cycle (SDLC) phases.</p>
                    </div>
                </div>
                <div className="card mt-2">
                    <div class="card-body">
                        <h3 class="card-title"><i class="fa fa-briefcase mr-3"></i>Work Experience</h3>
                        <Experience experiences={experiences} />
                    </div>
                </div>
                <div className="card mt-2">
                    <div className="card-body">
                        <h3 class="card-title"><i class="fa fa-briefcase mr-3"></i>Projects</h3>
                        <Project projects={projects} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
