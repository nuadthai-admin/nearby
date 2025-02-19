import React from 'react'
import NearBy from "/NearBy.png";
import NewLogo from "/new-logo.png";
import reactLogo from "../images/NewLogoArsorm2.png"
function Home() {
    const user = {
        picurl:
          "https://github.com/nuadthai-admin/nuadthai-admin/blob/main/OK%20OK-LOGOwebsite.png?raw=true",
      };
  return (
    <div><p>Home</p>
        <a href="https://nuadthai-admin.github.io/subj2/" target="_blank">
          <img src={NearBy} className="logo" alt="nuadlogo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={user.picurl} className="logo" alt="Arsormlogo" />
        </a>
        <h1>Nuadthai E-Learning</h1>
    </div>
    
  )
}

export default Home