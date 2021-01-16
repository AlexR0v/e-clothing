import React from 'react'
import './menuItem.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
  return (
    <div
      className={`${size} menu-item`}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
        <div className='content' onClick={()=>history.push(`/${linkUrl}`)}>
          <h2 className='title'>{title}</h2>
          <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
  )
}

export default withRouter(MenuItem)
