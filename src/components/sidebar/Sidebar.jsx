import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimeLine from '@mui/icons-material/TimeLine'
import TrendingUp from '@mui/icons-material/TrendingUp'
import PermIdentity from '@mui/icons-material/PermIdentity'
import Storefront from '@mui/icons-material/Storefront'
import AttachMoney from '@mui/icons-material/AttachMoney'
import BarChart from '@mui/icons-material/BarChart'
import MailOutLine from '@mui/icons-material/MailOutLine'
import DynamicFeed from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutLine from '@mui/icons-material/ChatBubbleOutLine'

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashbord</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <LineStyleIcon className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <li className="topbarListItem">
                <TimeLine className="sidebarIcon" /> Analytics
              </li>
              <li className="topbarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/users" className="link">
                <li className="sidebarListItem active">
                  <PermIdentity className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to="/newUser" className="link">
                <li className="topbarListItem">
                  <Storefront className="sidebarIcon" /> NewUser
                </li>
              </Link>
              <Link to="/products" className="link">
                <li className="topbarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <li className="topbarListItem">
                <BarChart className="sidebarIcon" /> Transaction
              </li>
              <li className="topbarListItem">
                <MailOutLine className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notfications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <MailOutLine className="sidebarIcon" />
                Mail
              </li>
              <li className="topbarListItem">
                <DynamicFeed className="sidebarIcon" /> Faidback
              </li>
              <li className="topbarListItem">
                <ChatBubbleOutLine className="sidebarIcon" />
                Message{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
