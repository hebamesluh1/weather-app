import React from 'react'
import { Style } from './style'

const Spinner = () => {
  return (
    <Style>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </Style>
  )
}

export default Spinner