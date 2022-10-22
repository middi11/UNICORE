import React from 'react'
import Test1 from './Test1'

const Test = (props) => {
  return (
    <>
    <div className='border border-primary'>
        {props.name}
        {props.children}
    </div>
    </>
  )
}

export default Test