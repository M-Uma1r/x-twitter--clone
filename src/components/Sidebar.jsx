import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Sidebar() {
  return (
    <div>
        <div className="sidebar">
            <div className="home-logo">
                <img
                 style={{ height: 30 }}
                className="my-3"
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
                alt="X logo"
                />
            </div>
            <div className="sidebarLinks">
             <button className = "sb-link-btn"> <a className='sblink' href=""><i class="fa fa-solid fa-house fa-sm"></i>Home</a></button><br /><br />
              <button className = "sb-link-btn"><a className='sblink' href=""><i class="fa fa-solid fa-magnifying-glass fa-sm"></i>Explore</a></button><br /> <br />
              <button className = "sb-link-btn"><a className='sblink' href=""><i class="fa fa-regular fa-bell fa-sm"></i>Notificatons</a></button><br /> <br />
              <button className = "sb-link-btn"><a className='sblink' href=""><i class="fa fa-regular fa-envelope fa-sm"></i>Messages</a></button><br /><br />
             <button className = "sb-link-btn"> <a className='sblink' href=""><i class="fa fa-regular fa-bookmark fa-sm"></i>Bookmarks</a></button><br /><br />
             <button className = "sb-link-btn"> <a className='sblink' href=""><i class="fa fa-solid fa-user-group fa-sm"></i>Communities</a></button><br /><br />
             <button className = "sb-link-btn"> <a className='sblink' href=""><i class="fa fa-brands fa-x-twitter fa-sm"></i>Premium</a></button><br /><br />
              <button className = "sb-link-btn"><a className='sblink' href=""><i class="fa fa-regular fa-user fa-sm"></i>Profile</a></button><br /><br />
             <button className = "sb-link-btn"> <a className='sblink' href=""><i class="fa fa-solid fa-ellipsis fa-sm"></i>More</a> </button><br /><br />
              <button className='sb-button btn btn-primary rounded-pill fw-bold'>Post</button><br /><br />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKkRTfVYnEoRFxb__kU8dINGVTI-T2Sj01i-Jc8-wOqP-wibTPwd6Jbl-4LXO_BVmeT8&usqp=CAU" alt="" className='fa pfp border boerder-1 rounded-pill'/>
              <p className='text-light d-inline'>Your Name</p>
            </div>
        </div>
    </div>
  )
}
