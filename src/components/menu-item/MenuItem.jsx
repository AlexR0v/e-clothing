import React from 'react'
import './menuItem.scss'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`${size} menu-item`}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
        <div className='content'>
          <h2 className='title'>{title}</h2>
          <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
  )
}

export default MenuItem