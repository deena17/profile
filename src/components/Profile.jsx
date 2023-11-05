import React from 'react'

const Profile = ({profile}) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <img src={profile} class="profile-image" alt="User" />
      </div>
        <p class="text-center"><strong>Deenadayalan M</strong></p>
        <div class="profile border-bottom pb-2">
            <p><i class="fa fa-briefcase"></i>Full Stack Developer</p>
            <p><i class="fa fa-home"></i>Chennai, India</p>
            <p><i class="fa fa-envelope"></i>deenadayalan17@gmail.com</p>
            <p><i class="fa fa-phone"></i>+91 8344381139</p>
        </div>
    </>
  )
}

export default Profile
