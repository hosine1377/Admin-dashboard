import React from 'react'
import './Tobbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'

export default function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbar-Wrapper">
          <div className="topbarleft">
            <span className="logo">Sabzlearn ❤</span>
          </div>
          <div className="topbarRigth">
            <div className="topbarIconContainer">
              <NotificationsIcon />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <LanguageIcon />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <SettingsIcon />
            </div>
            <img src="images/face-2.png" className="topAvatar" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
