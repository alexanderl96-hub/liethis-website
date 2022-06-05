import React from 'react'
import Photos from './Photos'
import Videos from './Videos'
import './Galery.css'

const Galery = () => {
  return (
    <div className="galery">
        <Photos />
        <Videos/>
    </div>
  )
}

export default Galery