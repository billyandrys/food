import React, { useState, useEffect } from 'react'
import css from './style.module.css'

export default function Index({errorHandle, setErrorHandle}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
    if(errorHandle.hasError){
        setShow(true)
    }
  }, [errorHandle]);

  const toggle = () => {
    setShow(false)
    setErrorHandle({
      hasError : false,
      message : "",})


  }
  return (
    <>
    {console.log(errorHandle)}
    {show ? (
        <div className={css.contai}>
            <p>{errorHandle.message}</p>
            <button className={css.closep} onClick={toggle}>Close
                <span aria-hidden="true">x</span>
            </button>
        </div>
     ) :(
        ""
     )}
        
    </>
  )
}
